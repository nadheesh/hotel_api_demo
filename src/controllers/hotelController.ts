import { Request, Response } from 'express';
import { 
  Hotel, 
  HotelSearchResponse, 
  HotelDetailsResponse, 
  AvailabilityResponse, 
  NearbyAttractionsResponse,
  ErrorPayload 
} from '../types';
import { mockHotels, mockRooms, mockReviews, mockNearbyAttractions } from '../mockData';

export class HotelController {
  
  // GET /healthcheck
  static getHealthcheck(req: Request, res: Response): void {
    res.json(true);
  }

  // GET /hotels/search
  static getHotelsSearch(req: Request, res: Response): void {
    try {
      const {
        destination,
        checkInDate,
        checkOutDate,
        guests = 2,
        rooms = 1,
        minPrice,
        maxPrice,
        minRating,
        sortBy,
        page = 1,
        pageSize = 10
      } = req.query;

      let filteredHotels = [...mockHotels];

      // Apply filters
      if (destination) {
        const dest = destination.toString().toLowerCase();
        filteredHotels = filteredHotels.filter(hotel => 
          hotel.city.toLowerCase().includes(dest) ||
          hotel.country.toLowerCase().includes(dest) ||
          hotel.hotelName.toLowerCase().includes(dest)
        );
      }

      if (minPrice) {
        filteredHotels = filteredHotels.filter(hotel => 
          hotel.lowestPrice >= parseFloat(minPrice.toString())
        );
      }

      if (maxPrice) {
        filteredHotels = filteredHotels.filter(hotel => 
          hotel.lowestPrice <= parseFloat(maxPrice.toString())
        );
      }

      if (minRating) {
        filteredHotels = filteredHotels.filter(hotel => 
          hotel.rating >= parseFloat(minRating.toString())
        );
      }

      // Sort hotels
      if (sortBy) {
        const sortField = sortBy.toString();
        filteredHotels.sort((a, b) => {
          switch (sortField) {
            case 'price':
              return a.lowestPrice - b.lowestPrice;
            case 'rating':
              return b.rating - a.rating;
            case 'name':
              return a.hotelName.localeCompare(b.hotelName);
            default:
              return 0;
          }
        });
      }

      // Pagination
      const currentPage = parseInt(page.toString());
      const size = parseInt(pageSize.toString());
      const startIndex = (currentPage - 1) * size;
      const endIndex = startIndex + size;
      const paginatedHotels = filteredHotels.slice(startIndex, endIndex);

      const response: HotelSearchResponse = {
        hotels: paginatedHotels,
        metadata: {
          totalResults: filteredHotels.length,
          currentPage,
          totalPages: Math.ceil(filteredHotels.length / size),
          pageSize: size,
          appliedFilters: {
            destination: destination?.toString() || null,
            checkInDate: checkInDate?.toString() || null,
            checkOutDate: checkOutDate?.toString() || null,
            guests: parseInt(guests.toString()),
            rooms: parseInt(rooms.toString()),
            priceRange: minPrice || maxPrice ? {
              min: minPrice ? parseFloat(minPrice.toString()) : 0,
              max: maxPrice ? parseFloat(maxPrice.toString()) : 9999
            } : null,
            minRating: minRating ? parseFloat(minRating.toString()) : null,
            amenities: null,
            propertyTypes: null
          }
        }
      };

      res.json(response);
    } catch (error) {
      const errorResponse: ErrorPayload = {
        timestamp: new Date().toISOString(),
        status: 400,
        reason: 'Bad Request',
        message: 'Invalid search parameters',
        path: req.path,
        method: req.method
      };
      res.status(400).json(errorResponse);
    }
  }

  // GET /hotels/{hotelId}
  static getHotelsHotelid(req: Request, res: Response): void {
    try {
      const { hotelId } = req.params;
      const hotel = mockHotels.find(h => h.hotelId === hotelId);

      if (!hotel) {
        res.status(404).send('Hotel not found');
        return;
      }

      const hotelRooms = mockRooms.filter(room => room.hotelId === hotelId);
      const hotelReviews = mockReviews.filter(review => review.hotelId === hotelId);
      const attractions = mockNearbyAttractions.filter((_, index) => {
        // Simple logic to assign attractions to hotels
        const hotelIndex = mockHotels.findIndex(h => h.hotelId === hotelId);
        return index >= hotelIndex * 3 && index < (hotelIndex + 1) * 3;
      });

      const response: HotelDetailsResponse = {
        hotel,
        rooms: hotelRooms,
        recentReviews: hotelReviews.slice(0, 5), // Latest 5 reviews
        nearbyAttractions: attractions
      };

      res.json(response);
    } catch (error) {
      const errorResponse: ErrorPayload = {
        timestamp: new Date().toISOString(),
        status: 400,
        reason: 'Bad Request',
        message: 'Invalid hotel ID',
        path: req.path,
        method: req.method
      };
      res.status(400).json(errorResponse);
    }
  }

  // GET /hotels/{hotelId}/availability
  static getHotelsHotelidAvailability(req: Request, res: Response): void {
    try {
      const { hotelId } = req.params;
      const { checkInDate, checkOutDate, guests = 2, roomCount = 1 } = req.query;

      if (!checkInDate || !checkOutDate) {
        const errorResponse: ErrorPayload = {
          timestamp: new Date().toISOString(),
          status: 400,
          reason: 'Bad Request',
          message: 'Check-in and check-out dates are required',
          path: req.path,
          method: req.method
        };
        res.status(400).json(errorResponse);
        return;
      }

      const hotel = mockHotels.find(h => h.hotelId === hotelId);
      if (!hotel) {
        res.status(404).send('Hotel not found');
        return;
      }

      const availableRooms = mockRooms.filter(room => 
        room.hotelId === hotelId && 
        room.availableCount > 0 &&
        room.maxOccupancy >= parseInt(guests.toString())
      );

      const response: AvailabilityResponse = {
        hotelId,
        checkInDate: checkInDate.toString(),
        checkOutDate: checkOutDate.toString(),
        availableRooms,
        totalAvailable: availableRooms.reduce((sum, room) => sum + room.availableCount, 0)
      };

      res.json(response);
    } catch (error) {
      const errorResponse: ErrorPayload = {
        timestamp: new Date().toISOString(),
        status: 400,
        reason: 'Bad Request',
        message: 'Invalid availability request',
        path: req.path,
        method: req.method
      };
      res.status(400).json(errorResponse);
    }
  }

  // GET /hotels/{hotelId}/attractions
  static getHotelsHotelidAttractions(req: Request, res: Response): void {
    try {
      const { hotelId } = req.params;
      const hotel = mockHotels.find(h => h.hotelId === hotelId);

      if (!hotel) {
        res.status(404).send('Hotel not found');
        return;
      }

      // Simple logic to assign attractions to hotels based on hotel index
      const hotelIndex = mockHotels.findIndex(h => h.hotelId === hotelId);
      const attractions = mockNearbyAttractions.filter((_, index) => 
        index >= hotelIndex * 3 && index < (hotelIndex + 1) * 3
      );

      const response: NearbyAttractionsResponse = {
        hotelId,
        attractions
      };

      res.json(response);
    } catch (error) {
      const errorResponse: ErrorPayload = {
        timestamp: new Date().toISOString(),
        status: 400,
        reason: 'Bad Request',
        message: 'Invalid hotel ID',
        path: req.path,
        method: req.method
      };
      res.status(400).json(errorResponse);
    }
  }
}

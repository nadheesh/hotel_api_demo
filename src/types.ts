// Type definitions based on OpenAPI schema

export interface Location {
  latitude: number;
  longitude: number;
  landmark?: string;
  distanceFromCenter?: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
}

export interface CheckInOutPolicy {
  checkInTime: string;
  checkOutTime: string;
  cancellationPolicy: string;
}

export interface Hotel {
  hotelId: string;
  hotelName: string;
  description: string;
  address: string;
  city: string;
  country: string;
  images: string[];
  rating: number;
  reviewCount: number;
  amenities: string[];
  propertyType: string[];
  location: Location;
  contactInfo: ContactInfo;
  checkInOutPolicy: CheckInOutPolicy;
  lowestPrice: number;
  isAvailable: boolean;
}

export interface BedConfiguration {
  singleBeds: number;
  doubleBeds: number;
  kingBeds: number;
  queenBeds: number;
}

export interface Room {
  roomId: string;
  hotelId: string;
  roomType: string;
  roomName: string;
  description: string;
  maxOccupancy: number;
  pricePerNight: number;
  images: string[];
  amenities: string[];
  bedConfiguration: BedConfiguration;
  roomSize: number;
  availableCount: number;
}

export interface ReviewCategories {
  cleanliness: number;
  comfort: number;
  location: number;
  service: number;
  valueForMoney: number;
}

export interface Review {
  reviewId: string;
  hotelId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  reviewDate: string;
  categories: ReviewCategories;
  isVerifiedStay: boolean;
}

export interface NearbyAttractions {
  name: string;
  category: string;
  distance: number;
  location: Location;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface SearchFilters {
  destination?: string | null;
  checkInDate?: string | null;
  checkOutDate?: string | null;
  guests: number;
  rooms: number;
  priceRange?: PriceRange | null;
  minRating?: number | null;
  amenities?: string[] | null;
  propertyTypes?: string[] | null;
}

export interface SearchMetadata {
  totalResults: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  appliedFilters: SearchFilters;
}

export interface HotelSearchResponse {
  hotels: Hotel[];
  metadata: SearchMetadata;
}

export interface HotelDetailsResponse {
  hotel: Hotel;
  rooms: Room[];
  recentReviews: Review[];
  nearbyAttractions: NearbyAttractions[];
}

export interface AvailabilityResponse {
  hotelId: string;
  checkInDate: string;
  checkOutDate: string;
  availableRooms: Room[];
  totalAvailable: number;
}

export interface NearbyAttractionsResponse {
  hotelId: string;
  attractions: NearbyAttractions[];
}

export interface ErrorPayload {
  timestamp: string;
  status: number;
  reason: string;
  message: string;
  path: string;
  method: string;
}

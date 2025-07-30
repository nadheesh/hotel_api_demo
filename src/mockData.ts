import { Hotel, Room, Review, NearbyAttractions } from './types';

export const mockHotels: Hotel[] = [
  {
    hotelId: "hotel-001",
    hotelName: "Grand Plaza Hotel",
    description: "A luxurious 5-star hotel in the heart of the city with stunning views and world-class amenities.",
    address: "123 Main Street",
    city: "New York",
    country: "USA",
    images: [
      "https://example.com/images/grand-plaza-1.jpg",
      "https://example.com/images/grand-plaza-2.jpg",
      "https://example.com/images/grand-plaza-3.jpg"
    ],
    rating: 4.8,
    reviewCount: 1250,
    amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Bar", "Room Service", "Concierge"],
    propertyType: ["Hotel", "Luxury"],
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      landmark: "Times Square",
      distanceFromCenter: 0.5
    },
    contactInfo: {
      phone: "+1-555-123-4567",
      email: "info@grandplaza.com",
      website: "https://grandplaza.com"
    },
    checkInOutPolicy: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in"
    },
    lowestPrice: 299.99,
    isAvailable: true
  },
  {
    hotelId: "hotel-002",
    hotelName: "Seaside Resort & Spa",
    description: "Beachfront resort with panoramic ocean views, perfect for a relaxing getaway.",
    address: "456 Ocean Drive",
    city: "Miami",
    country: "USA",
    images: [
      "https://example.com/images/seaside-1.jpg",
      "https://example.com/images/seaside-2.jpg",
      "https://example.com/images/seaside-3.jpg"
    ],
    rating: 4.6,
    reviewCount: 892,
    amenities: ["WiFi", "Beach Access", "Pool", "Spa", "Restaurant", "Water Sports", "Kids Club"],
    propertyType: ["Resort", "Beachfront"],
    location: {
      latitude: 25.7617,
      longitude: -80.1918,
      landmark: "South Beach",
      distanceFromCenter: 2.3
    },
    contactInfo: {
      phone: "+1-555-987-6543",
      email: "reservations@seasideresort.com",
      website: "https://seasideresort.com"
    },
    checkInOutPolicy: {
      checkInTime: "16:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation up to 48 hours before check-in"
    },
    lowestPrice: 189.99,
    isAvailable: true
  },
  {
    hotelId: "hotel-003",
    hotelName: "Mountain View Lodge",
    description: "Cozy mountain lodge with spectacular views and outdoor activities year-round.",
    address: "789 Mountain Road",
    city: "Aspen",
    country: "USA",
    images: [
      "https://example.com/images/mountain-1.jpg",
      "https://example.com/images/mountain-2.jpg"
    ],
    rating: 4.4,
    reviewCount: 456,
    amenities: ["WiFi", "Fireplace", "Ski Storage", "Restaurant", "Bar", "Hiking Trails"],
    propertyType: ["Lodge", "Mountain"],
    location: {
      latitude: 39.1911,
      longitude: -106.8175,
      landmark: "Aspen Mountain",
      distanceFromCenter: 1.2
    },
    contactInfo: {
      phone: "+1-555-456-7890",
      email: "info@mountainviewlodge.com",
      website: "https://mountainviewlodge.com"
    },
    checkInOutPolicy: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Cancellation allowed up to 7 days before check-in"
    },
    lowestPrice: 149.99,
    isAvailable: true
  },
  {
    hotelId: "hotel-004",
    hotelName: "Budget Inn Downtown",
    description: "Affordable accommodation in the city center with essential amenities.",
    address: "321 Budget Street",
    city: "Chicago",
    country: "USA",
    images: [
      "https://example.com/images/budget-1.jpg"
    ],
    rating: 3.8,
    reviewCount: 234,
    amenities: ["WiFi", "Parking", "24/7 Reception"],
    propertyType: ["Hotel", "Budget"],
    location: {
      latitude: 41.8781,
      longitude: -87.6298,
      landmark: "Downtown Chicago",
      distanceFromCenter: 0.8
    },
    contactInfo: {
      phone: "+1-555-234-5678",
      email: "info@budgetinn.com"
    },
    checkInOutPolicy: {
      checkInTime: "14:00",
      checkOutTime: "11:00",
      cancellationPolicy: "No cancellation allowed after booking"
    },
    lowestPrice: 79.99,
    isAvailable: true
  }
];

export const mockRooms: Room[] = [
  // Grand Plaza Hotel Rooms
  {
    roomId: "room-001-1",
    hotelId: "hotel-001",
    roomType: "Deluxe King",
    roomName: "Executive King Suite",
    description: "Spacious suite with king bed, city views, and premium amenities",
    maxOccupancy: 2,
    pricePerNight: 299.99,
    images: [
      "https://example.com/images/room-001-1-1.jpg",
      "https://example.com/images/room-001-1-2.jpg"
    ],
    amenities: ["King Bed", "City View", "Mini Bar", "Work Desk", "Balcony"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 45.5,
    availableCount: 3
  },
  {
    roomId: "room-001-2",
    hotelId: "hotel-001",
    roomType: "Double Queen",
    roomName: "Family Room",
    description: "Perfect for families with two queen beds and extra space",
    maxOccupancy: 4,
    pricePerNight: 349.99,
    images: [
      "https://example.com/images/room-001-2-1.jpg"
    ],
    amenities: ["Two Queen Beds", "Family Friendly", "Mini Fridge", "Coffee Maker"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 0,
      queenBeds: 2
    },
    roomSize: 52.0,
    availableCount: 2
  },
  // Seaside Resort Rooms
  {
    roomId: "room-002-1",
    hotelId: "hotel-002",
    roomType: "Ocean View",
    roomName: "Oceanfront King",
    description: "Stunning ocean views with private balcony and king bed",
    maxOccupancy: 2,
    pricePerNight: 189.99,
    images: [
      "https://example.com/images/room-002-1-1.jpg",
      "https://example.com/images/room-002-1-2.jpg"
    ],
    amenities: ["Ocean View", "Private Balcony", "King Bed", "Mini Bar"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 38.5,
    availableCount: 5
  },
  {
    roomId: "room-002-2",
    hotelId: "hotel-002",
    roomType: "Beach Suite",
    roomName: "Presidential Beach Suite",
    description: "Luxurious suite with direct beach access and panoramic views",
    maxOccupancy: 4,
    pricePerNight: 399.99,
    images: [
      "https://example.com/images/room-002-2-1.jpg"
    ],
    amenities: ["Beach Access", "Panoramic View", "King Bed", "Living Area", "Kitchenette"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 1,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 75.0,
    availableCount: 1
  },
  // Mountain View Lodge Rooms
  {
    roomId: "room-003-1",
    hotelId: "hotel-003",
    roomType: "Standard",
    roomName: "Mountain View Standard",
    description: "Cozy room with mountain views and rustic charm",
    maxOccupancy: 2,
    pricePerNight: 149.99,
    images: [
      "https://example.com/images/room-003-1-1.jpg"
    ],
    amenities: ["Mountain View", "Queen Bed", "Fireplace", "Rustic Decor"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 0,
      queenBeds: 1
    },
    roomSize: 28.5,
    availableCount: 4
  },
  // Budget Inn Rooms
  {
    roomId: "room-004-1",
    hotelId: "hotel-004",
    roomType: "Standard",
    roomName: "Budget Double",
    description: "Simple, clean room with essential amenities",
    maxOccupancy: 2,
    pricePerNight: 79.99,
    images: [
      "https://example.com/images/room-004-1-1.jpg"
    ],
    amenities: ["Double Bed", "TV", "Private Bathroom"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 1,
      kingBeds: 0,
      queenBeds: 0
    },
    roomSize: 22.0,
    availableCount: 8
  }
];

export const mockReviews: Review[] = [
  {
    reviewId: "review-001",
    hotelId: "hotel-001",
    userId: "user-001",
    userName: "John Smith",
    rating: 5.0,
    title: "Exceptional Stay!",
    comment: "Absolutely wonderful experience. The staff was incredibly helpful and the room was pristine. The city views were breathtaking!",
    reviewDate: "2024-01-15",
    categories: {
      cleanliness: 5.0,
      comfort: 5.0,
      location: 5.0,
      service: 5.0,
      valueForMoney: 4.5
    },
    isVerifiedStay: true
  },
  {
    reviewId: "review-002",
    hotelId: "hotel-001",
    userId: "user-002",
    userName: "Sarah Johnson",
    rating: 4.5,
    title: "Great location and service",
    comment: "Perfect location for exploring the city. Room was comfortable and clean. Only minor issue was the noise from the street at night.",
    reviewDate: "2024-01-10",
    categories: {
      cleanliness: 4.5,
      comfort: 4.0,
      location: 5.0,
      service: 4.5,
      valueForMoney: 4.0
    },
    isVerifiedStay: true
  },
  {
    reviewId: "review-003",
    hotelId: "hotel-002",
    userId: "user-003",
    userName: "Mike Wilson",
    rating: 4.8,
    title: "Perfect beach vacation",
    comment: "Amazing beachfront location with direct access to the sand. The spa was incredible and the staff went above and beyond.",
    reviewDate: "2024-01-08",
    categories: {
      cleanliness: 4.5,
      comfort: 5.0,
      location: 5.0,
      service: 5.0,
      valueForMoney: 4.5
    },
    isVerifiedStay: true
  },
  {
    reviewId: "review-004",
    hotelId: "hotel-003",
    userId: "user-004",
    userName: "Emily Davis",
    rating: 4.2,
    title: "Beautiful mountain retreat",
    comment: "Lovely lodge with stunning mountain views. Great for hiking and outdoor activities. The fireplace in the room was a nice touch.",
    reviewDate: "2024-01-05",
    categories: {
      cleanliness: 4.0,
      comfort: 4.5,
      location: 4.5,
      service: 4.0,
      valueForMoney: 4.0
    },
    isVerifiedStay: true
  }
];

export const mockNearbyAttractions: NearbyAttractions[] = [
  // Grand Plaza Hotel attractions
  {
    name: "Times Square",
    category: "Entertainment",
    distance: 0.3,
    location: {
      latitude: 40.7580,
      longitude: -73.9855
    }
  },
  {
    name: "Central Park",
    category: "Park",
    distance: 0.8,
    location: {
      latitude: 40.7829,
      longitude: -73.9654
    }
  },
  {
    name: "Empire State Building",
    category: "Landmark",
    distance: 1.2,
    location: {
      latitude: 40.7484,
      longitude: -73.9857
    }
  },
  // Seaside Resort attractions
  {
    name: "South Beach",
    category: "Beach",
    distance: 0.1,
    location: {
      latitude: 25.7617,
      longitude: -80.1918
    }
  },
  {
    name: "Art Deco Historic District",
    category: "Cultural",
    distance: 0.5,
    location: {
      latitude: 25.7800,
      longitude: -80.1300
    }
  },
  {
    name: "Vizcaya Museum and Gardens",
    category: "Museum",
    distance: 3.2,
    location: {
      latitude: 25.7443,
      longitude: -80.2103
    }
  },
  // Mountain View Lodge attractions
  {
    name: "Aspen Mountain Ski Area",
    category: "Recreation",
    distance: 0.5,
    location: {
      latitude: 39.1869,
      longitude: -106.8186
    }
  },
  {
    name: "Maroon Bells",
    category: "Natural",
    distance: 15.5,
    location: {
      latitude: 39.0708,
      longitude: -106.9390
    }
  }
];

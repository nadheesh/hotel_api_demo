# Hotel API

A REST API for hotel booking with mock data, built with Node.js, Express, and TypeScript.

## Features

- 🏨 Hotel search with filtering (destination, price range, rating)
- 🏠 Hotel details with room information and reviews
- 📅 Room availability checking
- 🗺️ Nearby attractions for hotels
- 💾 Mock data for testing and development
- 🔍 Comprehensive search and pagination
- 📋 Health check endpoint

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The server will start on http://localhost:9090

### Production

Build and start the production server:

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /healthcheck` - Check if the API is running

### Hotel Search
- `GET /hotels/search` - Search hotels with filters
  - Query parameters:
    - `destination` - City or country name
    - `checkInDate` - Check-in date (YYYY-MM-DD)
    - `checkOutDate` - Check-out date (YYYY-MM-DD)
    - `guests` - Number of guests (default: 2)
    - `rooms` - Number of rooms (default: 1)
    - `minPrice` - Minimum price filter
    - `maxPrice` - Maximum price filter
    - `minRating` - Minimum rating filter
    - `sortBy` - Sort by: price, rating, name
    - `page` - Page number (default: 1)
    - `pageSize` - Results per page (default: 10)

### Hotel Details
- `GET /hotels/{hotelId}` - Get detailed hotel information including rooms and reviews

### Hotel Availability
- `GET /hotels/{hotelId}/availability` - Check room availability
  - Query parameters:
    - `checkInDate` - Required
    - `checkOutDate` - Required
    - `guests` - Number of guests (default: 2)
    - `roomCount` - Number of rooms (default: 1)

### Nearby Attractions
- `GET /hotels/{hotelId}/attractions` - Get nearby attractions for a hotel

## Example Requests

### Search Hotels
```bash
curl "http://localhost:9090/hotels/search?destination=New York&minPrice=100&maxPrice=500"
```

### Get Hotel Details
```bash
curl "http://localhost:9090/hotels/hotel-001"
```

### Check Availability
```bash
curl "http://localhost:9090/hotels/hotel-001/availability?checkInDate=2024-03-15&checkOutDate=2024-03-17"
```

## Mock Data

The API includes mock data for:
- 4 hotels in different locations (New York, Miami, Aspen, Chicago)
- Various room types and configurations
- Customer reviews with detailed ratings
- Nearby attractions for each hotel location

## Project Structure

```
src/
├── controllers/     # Request handlers
├── routes/          # API routes
├── types.ts         # TypeScript type definitions
├── mockData.ts      # Mock data for development
└── server.ts        # Main server file
```

## Error Handling

The API returns consistent error responses with:
- Timestamp
- HTTP status code
- Error reason
- Detailed message
- Request path and method

## Development Notes

- Built with TypeScript for type safety
- Uses Express.js for the web framework
- Includes CORS support for cross-origin requests
- Security headers with Helmet
- Request logging with Morgan
- Hot reload in development mode

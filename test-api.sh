#!/bin/bash

# Hotel API Test Script
# This script demonstrates all the available API endpoints

BASE_URL="http://localhost:9090"

echo "🏨 Hotel API Test Suite"
echo "======================="
echo ""

echo "1. Health Check"
echo "---------------"
curl -s "${BASE_URL}/healthcheck" | echo "Response: $(cat)"
echo ""

echo "2. Search Hotels (All hotels)"
echo "-----------------------------"
curl -s "${BASE_URL}/hotels/search" | jq '.'
echo ""

echo "3. Search Hotels with Filters (New York, min rating 4.5)"
echo "--------------------------------------------------------"
curl -s "${BASE_URL}/hotels/search?destination=New%20York&minRating=4.5" | jq '.'
echo ""

echo "4. Search Hotels with Price Range (\$100-\$200)"
echo "----------------------------------------------"
curl -s "${BASE_URL}/hotels/search?minPrice=100&maxPrice=200" | jq '.'
echo ""

echo "5. Get Hotel Details (Grand Plaza Hotel)"
echo "----------------------------------------"
curl -s "${BASE_URL}/hotels/hotel-001" | jq '.'
echo ""

echo "6. Check Hotel Availability"
echo "---------------------------"
curl -s "${BASE_URL}/hotels/hotel-001/availability?checkInDate=2024-03-15&checkOutDate=2024-03-17&guests=2" | jq '.'
echo ""

echo "7. Get Nearby Attractions"
echo "-------------------------"
curl -s "${BASE_URL}/hotels/hotel-001/attractions" | jq '.'
echo ""

echo "8. Search Hotels with Pagination"
echo "--------------------------------"
curl -s "${BASE_URL}/hotels/search?page=1&pageSize=2" | jq '.'
echo ""

echo "9. Search Hotels Sorted by Price"
echo "--------------------------------"
curl -s "${BASE_URL}/hotels/search?sortBy=price" | jq '.hotels[] | {hotelName, lowestPrice}'
echo ""

echo "10. Search Hotels Sorted by Rating"
echo "----------------------------------"
curl -s "${BASE_URL}/hotels/search?sortBy=rating" | jq '.hotels[] | {hotelName, rating}'
echo ""

echo "Test completed! ✅"

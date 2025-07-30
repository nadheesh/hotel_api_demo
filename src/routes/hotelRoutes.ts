import express from 'express';
import { HotelController } from '../controllers/hotelController';

const router = express.Router();

// Health check endpoint
router.get('/healthcheck', HotelController.getHealthcheck);

// Hotel search endpoint
router.get('/hotels/search', HotelController.getHotelsSearch);

// Hotel details endpoint
router.get('/hotels/:hotelId', HotelController.getHotelsHotelid);

// Hotel availability endpoint
router.get('/hotels/:hotelId/availability', HotelController.getHotelsHotelidAvailability);

// Hotel attractions endpoint
router.get('/hotels/:hotelId/attractions', HotelController.getHotelsHotelidAttractions);

export default router;

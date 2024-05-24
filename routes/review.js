import express from 'express';
import { getAllReviews, getReviewById, createReview, updateReview, deleteReview } from '../controllers/review.controller.js';

const router = express.Router();

// Get all reviews
router.get('/', getAllReviews);

// Get review by ID
router.get('/:id', getReviewById);

// Create a new review
router.post('/', createReview);

// Update a review
router.put('/:id', updateReview);

// Delete a review
router.delete('/:id', deleteReview);

export default router;

import Review from '../models/review.model.js';

export const getReviews = async (req, res) => {
  const reviews = await Review.find().populate('user').populate('product');
  res.json(reviews);
};

export const createReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
};
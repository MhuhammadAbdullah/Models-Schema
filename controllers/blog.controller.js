import Blog from '../models/blog.model.js';

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author');
  res.json(blogs);
};

export const createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.json(blog);
};
const blogService = require('../services/blogService');

const createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const getBlogs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const blogs = await blogService.getBlogs({ page, limit });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if(!blog){
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    if(!blog){
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const result = await blogService.deleteBlog(req.params.id);
    if(!result){
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};

const blogModel = require('../models/blogModel');

const createBlog = async ({ title, content }) => {
  if(!title||!content){
    throw new Error('Title and content are required');
  }
  return blogModel.createBlog(title, content);
};

const getBlogs = async ({ page, limit }) => {
  const blogs = await blogModel.getBlogs(page, limit);
  return blogs;
};

const getBlogById = async (id) => {
  const blog = await blogModel.getBlogById(id);
  return blog;
};

const updateBlog = async (id, { title, content }) => {
  if (!title && !content) {
    throw new Error('Title or content must be provided to update');
  }
  return blogModel.updateBlog(id, title, content);
};

const deleteBlog = async (id) => {
  const result = await blogModel.deleteBlog(id);
  return result;
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};

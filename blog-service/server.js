const express = require('express');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');
const db=require('./config/db')
const cors = require('cors'); 

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

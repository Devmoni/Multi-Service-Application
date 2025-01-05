const express = require('express');
const dotenv = require('dotenv');
const commentRoutes = require('./routes/commentRoutes');
const db=require('./config/db')
const cors = require('cors');

dotenv.config();
db.createTables();
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

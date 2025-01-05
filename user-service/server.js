const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const db=require('./config/db')
const cors = require('cors');


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

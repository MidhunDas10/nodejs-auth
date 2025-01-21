require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/db');
const PORT = process.env.PORT || 3000;
const bookRoutes = require('./routes/book-routes');
const authRoutes = require('./routes/auth-routes');
const adminRoutes = require('./routes/admin-routes');
const cors = require('cors'); 

app.use(cors()); 

//connect to database
connectDB();

//middleware -> express.json() is used to parse incoming request with JSON payloads
app.use(express.json());

//create routes
app.use('/api/books', bookRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const items = require('./routes/api/items');

const app = express();

// BodyParser middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB  
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Route to api/items
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static server
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000

app.listen(port, () =>  console.log(`Server started on port ${port}.`));
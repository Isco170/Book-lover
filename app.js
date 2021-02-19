const express = require('express');
const morgan = require('morgan');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    
    res.redirect('/booklover');
});

// book routes
app.use('/booklover', bookRoutes );

const PORT = process.env.PORT || 3000;
app.listen(PORT);
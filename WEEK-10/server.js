const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page.</p>');
});
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
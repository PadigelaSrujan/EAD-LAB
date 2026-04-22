const express = require('express');
const app = express();
const PORT = 3005;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});
app.get('/home',(req,res)=>{
    res.send('<h1>Welcome to My Express Server</h1>');
});
app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1><form method="POST" action="/login"><input type="text" name="username" placeholder="Username"/><br/><br/><input type="password" name="password" placeholder="Password"/><br/><br/><button type="submit">Login</button></form>');
});
app.post('/login',(req,res,next)=>{
    const { username, password } = req.body;
    console.log(`User logged in: ${username}`);
    console.log(`Password: ${password}`);
    next();
});
app.post('/login',(req,res)=>{
    res.send(`<h1>Welcome, ${req.body.username}!</h1>`);
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

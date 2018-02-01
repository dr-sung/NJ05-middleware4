// express.urlencoded() middleware for url param body parser

const express = require('express');
const app = express();
app.use(express.urlencoded( {extended: false} ));

app.get('/', (req, res) => {
    let page = `
        <html>
        <head><title>Name</title></head>
        <body>
            <h2>Login page</h2>
            <form action='/' method='post'>
                Username: <input type='text' name='user'><br>
                Password: <input type='password' name='password'><br>
                <input type='submit' value='Login'>
            </form>
        </body>
        </html>
    `;
    res.send(page);
});

// use express.urlencoded() middleware to read form data
//     req.body.paramname
app.post('/', (req, res) => {
    let page =`
        <html>
        <head><title>Name</title></head>
        <body>
            <h2>User page</h2>
            Your name is ${req.body.user} <br>
            Your password is ${req.body.password}
        </body>
        </html>
    `;
    res.send(page);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});
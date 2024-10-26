const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url=='/login')
    {
        console.log('login successfull')
    }
    else if (req.method === 'GET' && req.url=='/signup')
        {
            console.log('signup successfull')
        }
});
const port =8000;
server.listen(port,()=> {
    console.log(`Server running on port ${port}`);
});
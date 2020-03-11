module.exports = function (req, res, fs, ejs, request) {
    if (req.method === 'GET' && req.url === '/') {
        const file = __dirname + '/../views/index.ejs';

        ejs.renderFile(
            file,
            null,
            {
                client: true
            },
            (err, str) => {
                res.writeHead(
                    200,
                    {
                        'Content-Type': 'text/html'
                    }
                );
                res.end(str);
            }
        );
    }
};
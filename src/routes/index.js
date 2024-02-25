const musicRouter = require('./music.route');

function routes(app) {
    app.use('/api/v1', musicRouter);
}

module.exports = routes;

const newsRouter = require('./news.js');
const siteRouter = require('./site.js');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

const a = [1, 2];

module.exports = route;

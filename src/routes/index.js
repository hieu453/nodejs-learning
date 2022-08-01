const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const courseRouter = require('./courses.js');

function route(app) {
    app.use('/courses', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}



module.exports = route;

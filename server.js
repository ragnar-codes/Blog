const express = require('express');
const articleRouter = require('./routes/articles.js')
const app = express();

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Articles1',
        createdAt: new Date(),
        description: 'test description1'

    },
    {
        title: 'Test Articles2',
        createdAt: new Date(),
        description: 'test description2'

    },
    {
        title: 'Test Articles3',
        createdAt: new Date(),
        description: 'test description3'

    }]
    res.render('articles/index', {articles: articles});
})



app.listen(5000, () => console.log('Server running on port 5000'));
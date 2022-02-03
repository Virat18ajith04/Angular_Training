const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

// define root route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// import person routes from Routes path
const personRoutes = require('./src/routes/person.route');

// create person routes API call
app.use('/api/v1/person', personRoutes);

// listen to the port
app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});
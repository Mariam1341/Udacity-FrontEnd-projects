/// Setup empty JS object to act as endpoint for all routes
projectData = {};

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// create new express app and save it as "app"
const app = express();

// make express to use body purser as middle ware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//orgin allowance
app.use(cors());

// insialize the main project folder
app.use(express.static('website'));

// create a route for the app
app.get('/getData', (req, res) => {
  console.log('getData')
  res.status(200).send(projectData);
});

app.post('/postData', addData);

function addData(req, res) {
  console.log('addData', req.body)
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;
  // may not wright
  res.status(200).send(projectData);
}

let PORT = 5501
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

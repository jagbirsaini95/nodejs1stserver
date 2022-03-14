const port = 800;
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');
const router = require('./indexRoutes/routesMethods');
function logger(req, res, next) {
  console.log(`http://localhost:${port}${req.url}`);
  next();
}
//mongoose connection setup
mongoose.connect('mongodb://localhost:27017/trydb',
  {
    useNewUrlParser: true
  }
).then((response) => console.log('connection done with mongoose'))
  .catch((err) => console.log('error'))
app.use(cors());
app.use(logger);
// load our API routes
app.use('/', router);
// establish http server connection
app.listen(port, () => console.log(`http://localhost:${port}`));
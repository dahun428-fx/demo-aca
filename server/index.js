const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
// app.use('/api/users', require('./routes/users'));
// app.use('/api/favorite', require('./routes/favorite'));
// app.use('/uploads', express.static('uploads'));
app.use('/', (req, res) => res.send('hello'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }
  
  const port = process.env.PORT || 5000
  
  app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
  });
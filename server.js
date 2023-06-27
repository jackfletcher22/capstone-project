const express = require('express')
const app = express()
const port= 4070
const bodyParser= require('body-parser')
const axios = requie('axios')

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/users', (req, res) => {
    const { username } = req.body;
    res.status(200).send(`Welcome, ${username}!`);
  });
  if (username === 'jack' && password === 'password') {
    res.status(200).send ;{ `Welcome to your camping journal ${username}`};
  } else {
    res.status(401).send ;{ 'this information is not correct' };
  }
;
axios.post('http://localhost:4070/login', user)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
app.listen(port, () => {
    console.log('Server is up on port 4070');
});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());

var sequence = [];
var seqLength = 5;

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(3));
}
function checkIfRightSequence(userSequence, res) {
  if (JSON.stringify(userSequence) !== JSON.stringify(sequence)) {
    sequence = [];
    res.send({
      status: 'FAILED',
      sequence: sequence
    });
  }
}
function checkIfFinished(res) {
  if (sequence.length > seqLength) {
    sequence = [];
    res.send({
      status: 'WON',
      sequence: sequence
    });
  }
}

app.get('/start/:type', function (req, res) {
  if (req.params.type === 'survival') {
    seqLength = 999;
  } else {
    seqLength = 5;
  }
  sequence = [];
  sequence.push(getRandomInt());
  res.send({
    status: 'ONGOING',
    sequence: sequence
  });
})

app.post('/verify', function (req, res) {
  checkIfRightSequence(req.body, res);
  checkIfFinished(res);
  sequence.push(getRandomInt());
  res.send({
    sequence: sequence,
    status: 'ONGOING'
  });
})

app.listen(4201);
console.log('listening port 4201');

var express = require('express');
var router = express.Router();

/* GET tutorial list. */
router.get('/', function (re, res, next) {
  const tutOne = { id: 1, title: 'testGetAll', description: 'desc', published: 'Published' };
  const tutList = [tutOne];
  return res.send(tutList);
});
router.get('/:id', function (re, res, next) {
  const tutOne = { id: 1, title: 'testGetOne', description: 'desc', published: 'Published' };
  const tutList = [tutOne];
  return res.send(tutList);
});
router.post('/', function (re, res, next) {
  const newTutorial = re.body;
  console.log('Added ' + newTutorial.title);
  return res.send({ status: 'OK' });
});

module.exports = router;
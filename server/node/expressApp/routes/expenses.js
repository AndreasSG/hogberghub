var express = require('express');
var router = express.Router();

var expenses = [
  {
    id: '0', name: 'Rent', cost: 8535, isShared: true, isNecessary: true, paymentGroup: 'housing'
  },
  {
    id: '1', name: 'Broadband', cost: 509, isShared: true, isNecessary: true, paymentGroup: 'housing'
  },
  {
    id: '2', name: 'Insurance', cost: 192, isShared: false, isNecessary: true, paymentGroup: 'Mom'
  },
]

var expenseGroups = [
  {
    id: 0, name: 'housing',
    id: 1, name: 'mom',
    id: 2, name: 'recreational',
  }
]

/* GET all expenses */
router.get('/', function (re, res, next) {
  return res.send(expenses);
});

/* POST new expense */
router.post('/', function (re, res, next) {
  const newExpense = re.body;
  expenses.push(newExpense);
  console.log('Added ' + newExpense);
  return res.send({ status: 'OK' });
});

/* PUT (edit) existing expense */
router.put('/:id', function (re, res, next) {
  const newExpense = re.body;
  let IDToFind = re.params.id;

  for (const exp of expenses) {
    if (exp.id === IDToFind) {
      expenses.splice(expenses.indexOf(exp), 1);
      expenses.push(newExpense);
    }
  };

  return res.send({ status: 'OK' });
});

/* DELETE given expense */
router.delete('/:id', function (re, res, next) {
  let IDToFind = re.params.id;

  for (const exp of expenses) {
    if (exp.id === IDToFind) {
      expenses.splice(expenses.indexOf(exp), 1);
    }
  };

  return res.send({ status: 'OK' });
});

/* GET all expenseGroups */
router.get('/expensegroups', function (re, res, next) {
  return res.send(expenseGroups);
});

/* POST new expense group */
router.post('/expensegroups', function (re, res, next) {
  const newExpenseGroup = re.body;
  expenseGroups.push(newExpenseGroup);
  return res.send({ status: 'OK' });
});

/* PUT (edit) existing expense group */
router.put('/expensegroups/:id', function (re, res, next) {
  const newGroup = re.body;
  let IDToFind = re.params.id;

  for (const exp of expenseGroups) {
    if (exp.id === IDToFind) {
      expenseGroups.splice(expenseGroups.indexOf(exp), 1);
      expenseGroups.push(newGroup);
    }
  };

  return res.send({ status: 'OK' });
});

module.exports = router;
<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchByName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Expenses List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(expense, index) in expenses"
          :key="index"
          @click="setActiveExpenses(expense, index)"
        >
          {{ expense.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllExpenses">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentExpense">
        <h4>Expense</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentExpense.name }}
        </div>
        <div>
          <label><strong>Cost:</strong></label>
          {{ currentExpense.cost }}
        </div>
        <div>
          <label><strong>Is a necessary expense:</strong></label>
          {{ currentExpense.isNecessary ? 'Is necessary' : 'Not necessary' }}
        </div>

        <a class="badge badge-warning" :href="'/expenses/' + currentExpense.id">
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on an expense ...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ExpenseService from '../services/ExpenseService';

export default {
  name: 'tutorials-list',
  data() {
    return {
      expenses: [],
      currentExpense: null,
      currentIndex: -1,
      name: '',
    };
  },
  methods: {
    retrieveExpenses() {
      ExpenseService.getAll()
        .then((response) => {
          this.expenses = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveExpenses();
      this.currentExpense = null;
      this.currentIndex = -1;
    },

    setActiveExpenses(expense, index) {
      this.currentExpense = expense;
      this.currentIndex = index;
    },

    removeAllExpenses() {
      ExpenseService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchByName() {
      ExpenseService.findByName(this.name)
        .then((response) => {
          this.expenses = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveExpenses();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(API_BASE);

    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(API_BASE, {
      title,
      completed: false
    });

    commit("addTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`${API_BASE}/${id}`);

    commit("deleteTodo", id);
  },
  async filterTodos({ commit }, event) {
    const limit = parseInt(event.target.value);

    const response = await axios.get(`${API_BASE}?_limit=${limit}`);

    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `${API_BASE}/${updatedTodo.id}`,
      updatedTodo
    );

    commit("updateTodo", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => (state.todos = [todo, ...state.todos]),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);

    if (index === -1) return;

    let newTodos = [...state.todos];
    newTodos.splice(index, 1, updatedTodo);
    state.todos = newTodos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

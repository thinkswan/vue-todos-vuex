<template>
  <div>
    <h3>Todos</h3>

    <Legend />

    <div class="todos">
      <div
        v-for="todo in allTodos"
        @dblclick="onDblClick(todo)"
        :key="todo.id"
        class="todo"
        :class="{ 'is-complete': todo.completed }"
      >
        <Todo :id="todo.id" :title="todo.title" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Legend from "./Legend";
import Todo from "./Todo";

export default {
  name: "Todos",
  components: {
    Legend,
    Todo
  },
  methods: {
    ...mapActions(["fetchTodos", "updateTodo"]),
    onDblClick(todo) {
      const updatedTodo = { ...todo, ...{ completed: !todo.completed } };

      this.updateTodo(updatedTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.is-complete {
  background-color: #35495e;
  color: #fff;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>

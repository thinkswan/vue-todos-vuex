<template>
  <div>
    {{ title }}
    <i class="fas fa-trash-alt" @click="deleteTodo(id)"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: ["id", "title"],
  methods: mapActions(["deleteTodo"])
};
</script>

<style></style>

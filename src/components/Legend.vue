<template>
  <div class="legend">
    <span>Double click to mark as complete</span>
    <span> <span class="incomplete-box"></span> = Incomplete </span>
    <span> <span class="complete-box"></span> = Complete </span>
  </div>
</template>

<script>
export default {
  name: "Legend"
};
</script>

<style scoped>
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #41b883;
}
</style>

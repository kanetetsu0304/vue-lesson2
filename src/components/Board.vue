<template>
  <div class="board">
    <div class="board__header">
      <p class="board__header__title">
        Neo Asana
        <br />
        {{ totalCount }}個カードがあります
      </p>
      <add-list />
    </div>
    <draggable group="lists" :list="lists" class="list-index">
      <list v-for="(item,index) in lists" 
            :key="item.id" 
            :title="item.title" 
            :listIndex="index" />
    </draggable>
  </div>
</template>

<script>
import AddList from "./AddList.vue";
import List from "./List.vue";
import draggable from "vuedraggable";

export default {
  name: "board",
  components: {
    AddList,
    List,
    draggable
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    totalCount() {
      return this.$store.getters.totalCount;
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  height: 100vh;
  font-size: 20px;
  width: max-content;

  &__header {
    display: flex;

    &__title {
      color: $MAIN;
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
    }
  }

  .list-index {
    display: flex;
  }
}
</style>
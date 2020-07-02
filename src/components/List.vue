<template>
  <div class="list">
    <button class="list__header__delete" @click="removeList">×</button>
    <div class="list__header">
      <p class="list__header__title">{{ title }}</p>
      <p class="list__header__count">{{ count }}</p>
    </div>
    <div class="card-index">
      <add-card :listIndex="listIndex" />
      <draggable group="cards" :list="cards">
        <card
          v-for="(item,index) in cards"
          :key="item.id"
          :body="item.body"
          :cardIndex="index"
          :listIndex="listIndex"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import AddCard from "./AddCard.vue";
import Card from "./Card.vue";
import draggable from "vuedraggable";

export default {
  name: "List",
  components: {
    AddCard,
    Card,
    draggable
  },
  props: {
    title: String,
    listIndex: Number
  },
  methods: {
    removeList: function() {
      this.$store.dispatch("removeList", { listIndex: this.listIndex });
    }
  },
  computed: {
    cards() {
      return this.$store.state.lists[this.listIndex].cards;
    },
    count() {
      return this.$store.state.lists[this.listIndex].cards.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 320px;
  background: #eeeeee;
  padding: 20px;
  position: relative;
  margin: 20px;
  border: 1px solid #dddddd;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }

  &__header {
    position: relative;
    &__title {
      color: $MAIN;
      font-weight: bold;
      padding: 0 24px;
    }
    &__count {
      position: absolute;
      top: 0;
      right: 16px;
      color: $MAIN;
      font-size: 16px;
      font-weight: bold;
    }
    &__delete {
      color: $DELETE;
      position: absolute;
      top: 4px;
      right: 8px;
    }
  }
  .card-index {
    display: flex;
    flex-direction: column;
  }
}
</style>
<template>
  <div class="card">
    <div class="card__header">
      <p class="card__header__title">{{ body }}</p>
      <div class="card__header__delete" @click="removeCard">×</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    body: String,
    cardIndex: Number,
    listIndex: Number,
    options: Number
  },
  methods: {
    removeCard: function() {
      this.$store.dispatch("removeCard", {
        cardIndex: this.cardIndex,
        listIndex: this.listIndex
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 100px;
  position: relative;
  background: #cccccc;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  padding: 16px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }

  &__header {
    &__title {
      color: $MAIN;
    }
    &__delete {
      color: $DELETE;
      position: absolute;
      top: 4px;
      right: 8px;
    }
  }
}
</style>
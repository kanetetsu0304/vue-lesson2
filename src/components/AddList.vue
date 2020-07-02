<template>
  <div class="add-list">
    <form class="add-list__form" @submit.prevent="addList">
      <button type="submit" class="add-list__form__button">+</button>
      <input v-model="title" type="text" class="add-list__form__input" placeholder="新しく追加したいリスト" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddList",
  data: function() {
    return {
      title: ""
    };
  },
  methods: {
    addList: function() {
      if (this.title.length !== 0) {
        this.$store.dispatch("addList", { title: this.title });
      }
      this.title = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.add-list {
  width: 400px;
  padding: 40px;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__button {
      background: $PLUS;
      color: $WHITE;
      width: 24px;
      display: flex;
      justify-content: center;
      border-radius: 20%;
      margin-bottom: 8px;
      padding-bottom: 2px;
      border-radius: 50%;
    }
    &__input {
      background: silver;
      padding: 20px;
      color: $GRAY;
      border: 1px solid;
      border-radius: 24px;
    }
  }
}
</style>
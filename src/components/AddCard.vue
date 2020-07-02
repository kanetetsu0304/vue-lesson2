<template>
  <div class="add-card">
    <form class="add-card__form" @submit.prevent="addCard">
      <button type="submit" class="add-card__form__button">+</button>
      <input v-model="body" type="text" class="add-card__form__input" placeholder="新しく追加したいカード" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCard",
  data: function() {
    return {
      body: ""
    };
  },
  props: {
    listIndex: Number
  },
  methods: {
    addCard: function() {
      if (this.body.length !== 0) {
        this.$store.dispatch("addCard", {
          body: this.body,
          listIndex: this.listIndex
        });
      }
      this.body = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.add-card {
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__button {
      text-align: center;
      background-color: $PLUS;
      color: $WHITE;
      width: 24px;
      display: flex;
      justify-content: center;
      border-radius: 20%;
      padding-bottom: 2px;
      border-radius: 50%;
      margin-bottom: 8px;
      margin-top: 16px;
    }
    &__input {
      word-break: break-all;
      border-bottom: 1px solid #000044;
      color: $GRAY;
    }
  }
}
</style>
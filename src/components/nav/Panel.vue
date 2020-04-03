<template>
  <button v-on:click="alertDisplay">Add Person</button>
</template>

<script>
export default {
  name: "Panel",
  methods: {
    alertDisplay() {
      this.$swal({
        title: "What is your Name?",
        input: "text",
        inputPlaceholder: "Enter your name here",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Создать отложку",
        focusConfirm: false,
      });
    }
  }
};
</script>

<style lang="sass" scoped>
button
  height: 3em
  width: 7em
  text-align: center
  color: rgb(48, 133, 214)
  background-color: #fafafa
  font-size: 1.2em
  border-radius: 0.4em
</style>

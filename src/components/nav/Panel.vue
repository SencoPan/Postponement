<template>
  <button v-on:click="alertDisplay">Внести отложку</button>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {
      test: 0
    };
  },
  methods: {
    alertDisplay() {
      this.$swal({
        title: "Добавить отложку",
        html:
          "<div style='text-align: left'>" +
          '<input type="hidden" id="csrf" name="_csrf">' +
          '<label>ФИО <input id="swal-input1" name="fullname" type="text" class="swal2-input fullname"></label>' +
          '<label>Номер <input id="swal-input2" name="number" type="text"  class="swal2-input number"></label>' +
          '<label>Депозит<input id="swal-input3" name="deposit" type="text"  class="swal2-input deposit"></label>' +
          '<label>Отложенно в <input id="swal-input4" name="delay" type="date"  class="swal2-input delay"></label>' +
          '<label>Отложенно до <input id="swal-input5" name="delayTo" type="date"  class="swal2-input delayTo"></label>' +
          "</div>",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Создать отложку",
        focusConfirm: false,
        preConfirm: () => {
          const data = {
            fullname: document.getElementById("swal-input1"),
            number: document.getElementById("swal-input2"),
            deposit: document.getElementById("swal-input3"),
            delay: document.getElementById("swal-input4"),
            delayTo: document.getElementById("swal-input5")
          };

          let flag = false;

          for (let article in data) {
            if (!data[article].value) {
              data[article].style.border = "0.1em solid #ff7373";
              data[article].placeholder = "Не введенно значение";
              flag = true;
            } else {
              data[article].style.border = "1px solid #d9d9d9";
            }
          }

          if (flag) {
            return false;
          }

          for (let article in data) {
            data[article] = data[article].value;
          }
          this.$store.dispatch("addPersonAndGetAll", data);
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
button
  height: 2.8em
  width: auto
  text-align: center
  color: rgb(48, 133, 214)
  font-size: 1.3em
  border-radius: 0.4em
  border: #737b84 .15em solid
  font-family: Calibri, sans-serif
  background-color: #fff
</style>

<template>
  <button v-on:click="alertDisplay">Add Person</button>
</template>

<script>
export default {
  name: "Panel",
  methods: {
    alertDisplay() {
      this.$swal({
        title: "Добавить отложку",
        html:
          "<div style='text-align: center'>" +
          '<label>ФИО <input id="swal-input1" class="swal2-input fullname"></label>' +
          '<label>Номер <input id="swal-input2" class="swal2-input number"></label>' +
          '<label>Депозит<input id="swal-input3" class="swal2-input deposit"></label>' +
          '<label>Отложенно в <input id="swal-input4" class="swal2-input delay"></label>' +
          '<label>Отложенно до <input id="swal-input5" class="swal2-input delayTo"></label>' +
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
          //this.$store.dispatch("addPerson", data);
        }
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

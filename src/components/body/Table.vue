<template>
  <div class="table">
    <div class="id"><p>Номер</p></div>
    <div class="fullName"><p>ФИО</p></div>
    <div class="deposit"><p>Депозит</p></div>
    <div class="delayed"><p>Начало отложки</p></div>
    <div class="delayed_to"><p>Конец отложки</p></div>
    <div class="end"><p>До конца срока</p></div>
  </div>
</template>

<script>
export default {
  name: "Table"
};
</script>

<style scoped>
div.table {
  display: flex;
  min-width: 90em;
  background-color: #707070;
  border: 0.1em #737b84 solid;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
  color: white;
}
.id,
.fullName,
.deposit,
.delayed,
.delayed_to,
.end {
  text-align: center;
}

.id {
  width: 5em;
}
.fullName {
  width: 20em;
}
.deposit {
  width: 8em;
}
.delayed,
.delayed_to {
  width: 15em;
}
.end {
  display: flex;
  width: 10em;
  margin-left: auto;
  margin-right: 4.5em;
}
.end p {
  display: flex;
  margin: auto;
}
</style>

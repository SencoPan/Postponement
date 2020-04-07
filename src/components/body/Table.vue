<template>
  <div class="table">
    <div class="id" @click="sortBy(0)">
      <p>
        Номер <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(1)" class="fullName">
      <p>
        ФИО <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(2)" class="deposit">
      <p>
        Депозит <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(3)" class="delayed">
      <p>
        Начало отложки
        <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(4)" class="delayed_to">
      <p>
        Конец отложки
        <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(5)" class="end">
      <p>
        До конца срока
        <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sortBy: async function(child) {
      let icon = document.getElementsByClassName("sort_icon")[child];
      let rotate = icon.style.transform === "rotate(180deg)" ? 0 : 180;

      icon.style.webkitTransform = "rotate(" + rotate + "deg)";
      icon.style.mozTransform = "rotate(" + rotate + "deg)";
      icon.style.msTransform = "rotate(" + rotate + "deg)";
      icon.style.oTransform = "rotate(" + rotate + "deg)";
      icon.style.transform = "rotate(" + rotate + "deg)";

    }
  },
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

svg {
  display: inline-flex;
  margin-left: 0.4em;
  margin-top: auto;
  margin-bottom: auto;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.id {
  width: 5em;
  margin-left: 1em;
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

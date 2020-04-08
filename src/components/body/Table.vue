<template>
  <div class="table">
    <div class="id" @click="sortBy(0, 'number')">
      <p>
        Номер <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(1, 'fullname')" class="fullName">
      <p>
        ФИО <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(2, 'deposit')" class="deposit">
      <p>
        Депозит <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(3, 'delay')" class="delayed">
      <p>
        Начало отложки
        <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(4, 'delayTo')" class="delayed_to">
      <p>
        Конец отложки
        <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
    <div @click="sortBy(5, 'endOfDelay')" class="end">
      <p>
        До конца срока
        <font-awesome-icon icon="arrow-circle-down" class="sort_icon" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: document.getElementsByClassName("sort_icon"),
      takenIcon: ""
    };
  },
  methods: {
    sortBy: async function(child, columnName) {
      let icon = this.icons[child];

      this.takenIcon ? (this.takenIcon.style.visibility = "hidden") : false;
      this.takenIcon = icon;

      let direction = await this.$store.dispatch("sortTable", columnName);

      let rotate = direction === "ASC" ? 0 : 180;

      icon.style.visibility = "visible";
      icon.style.transform = "rotateX(" + rotate + "deg)";

      this.$store.getters.persons.sort((firstPerson, secondPerson) => {
        return direction === "ASC"
          ? firstPerson[columnName] === secondPerson[columnName]
            ? 0
            : firstPerson[columnName] > secondPerson[columnName]
            ? 1
            : -1
          : firstPerson[columnName] === secondPerson[columnName]
          ? 0
          : firstPerson[columnName] < secondPerson[columnName]
          ? 1
          : -1;
      });
    }
  },
  name: "Table"
};
</script>

<style scoped>
div.table {
  display: flex;
  min-width: 90em;
  background-color: #3800ff;
  border: 0.1em #737b84 solid;
  border-bottom: none;
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
  cursor: pointer;
  user-select: none;
  text-align: center;
}

svg {
  display: inline-flex;
  margin-left: 0.4em;
  margin-top: auto;
  margin-bottom: auto;
  visibility: hidden;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  transform: rotateX(180deg);
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

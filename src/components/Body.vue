<template>
  <div class="body">
    <div class="content">
      <div class="list_of_postponement">
        <Table />
        <div
          v-for="item of $store.state.currentPersons"
          v-bind:key="item.number"
        >
          <Person
            :id="item.id"
            :delay="item.delay"
            :delayTo="item.delayTo"
            :number="item.number"
            :deposit="item.deposit"
            :fullName="item.fullname"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person from "./body/Person";
import Table from "./body/Table";

export default {
  beforeCreate() {
    this.$store.dispatch("getAllPersons");
  },
  name: "Body",
  components: { Table, Person }
};
</script>

<style scoped>
div.body {
  display: flex;
  justify-content: center;
}
div.content {
  margin: 1em 0 1em 0;
  display: flex;
  width: 90em;
  min-height: 45.9em;
  flex-direction: row;
}
div.content h1 {
  margin: 0;
}
</style>

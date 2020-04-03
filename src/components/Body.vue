<template>
  <div class="body">
    <div class="content">
      <div class="list_of_postponement">
        <Table />
        <div v-for="item of items" :key="item">
          <Person
            :delay="item.delay"
            :delayTo="item.delayTo"
            :number="item.number"
            :deposit="item.deposit"
            :fullName="item.fullName"
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
  data() {
    return {
      items: [
        {
          delay: "2019-07-16T20:32:21",
          delayTo: "2019-07-16T20:32:21",
          deposit: 124.12,
          fullName: "Test test test",
          number: 52
        }
      ]
    };
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

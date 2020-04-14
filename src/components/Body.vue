<!-- USED !IMPORTANT IN MEDIA REQUEST AT .BODY -->
<template>
  <div class="body">
    <div class="content">
      <div class="list_of_postponement">
        <Table />
        <div class="table_content">
          <div
            v-for="item of $store.state.currentPersons"
            v-bind:key="item.number"
          >
            <Person
              :id="item.id"
              :delay="item.delay"
              :delayTo="item.delayTo"
              :number="item.number"
              :deposit="item.deposit.toString()"
              :fullName="item.fullname"
              :endOfDelay="item.endOfDelay"
            />
          </div>
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
    this.$store.dispatch("getCSRFToken", this.$swal);
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
.table_content div:last-child div:last-child {
  border-bottom-left-radius: 0.4em;
  border-bottom-right-radius: 0.4em;
  border-bottom: #737b84 0.1em solid;
}

@media (max-width: 1280px) {
  .table_content,
  .content {
    max-width: 1080px;
  }
  .body {
    margin-right: 9em;
  }
  .list_of_postponement {
    max-width: 1080px;
  }
}
</style>

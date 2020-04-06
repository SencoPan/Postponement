<template>
  <div class="postponement" :class="id">
    <div class="number_value">
      <p>{{ number }}</p>
    </div>
    <div class="full_name_display">
      <p>{{ fullName }}</p>
    </div>
    <div class="deposit_amount">
      <p>{{ deposit }}</p>
    </div>
    <div class="delayed_date">
      <p>{{ delay.substr(0, 10) }}</p>
    </div>
    <div class="delayed_to_date">
      <p>{{ delayTo.substr(0, 10) }}</p>
    </div>
    <div class="end">
      <p>
        {{ `${differenceBetweenDates(delayTo, Date.now().toString())} Дн.` }}
      </p>
    </div>
    <div class="delete">
      <font-awesome-icon icon="user-times" v-on:click="deletePerson()" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    delay: String,
    delayTo: String,
    deposit: Number,
    fullName: String,
    number: Number
  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    differenceBetweenDates: (firstDate, secondDate) => {
      let date = {
        year: firstDate.substr(0, 4),
        month: firstDate.substr(5, 2),
        day: firstDate.substr(8, 2)
      };

      let first = new Date(date.year, +date.month - 1, date.day, 12, 0, 0, 0);

      let day = 8.64e7;

      return Math.round(Math.abs(first - secondDate) / day);
    },
    deletePerson: async function() {
      await this.$swal.fire({
        icon: "warning",
        title: "Подтверждение",
        text: "Удалить данную отложку?",
        showCloseButton: true,
        showCancelButton: true,
        preConfirm: () => {
          this.$store.dispatch("deletePerson", this.id);
        }
      });
    }
  },
  name: "Person"
};
</script>

<style scoped>
.postponement {
  display: flex;
  border: 0.1em #737b84 solid;
}

.full_name_display,
.number_value,
.deposit_amount,
.delayed_date,
.delayed_to_date {
  text-align: center;
}

.full_name_display {
  max-width: 20em;
  width: 20em;
}
.number_value {
  max-width: 5em;
  width: 5em;
}
.deposit_amount {
  max-width: 8em;
  width: 8em;
}
.delayed_date,
.delayed_to_date {
  max-width: 15em;
  width: 15em;
}
.end {
  display: flex;
  width: 10em;
  margin-left: auto;
}
.end p {
  display: flex;
  margin: auto;
}
.delete {
  display: flex;
  align-items: center;
  max-width: 1.5em;
  width: 1.5em;
  margin-right: 0.5em;
  font-size: 1.5em;
  padding-left: 1em;
  border-left: #2c3e50 0.1em solid;
}
</style>

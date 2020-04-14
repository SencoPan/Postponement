<template>
  <div class="postponement" :class="id">
    <div
      class="number_value"
      @click="redactPerson(number, 'text', 'Номер', 'number')"
    >
      <p>{{ number }}</p>
    </div>
    <div
      class="full_name_display"
      @click="redactPerson(fullName, 'text', 'ФИО', 'fullname')"
    >
      <p>{{ fullName }}</p>
    </div>
    <div
      class="deposit_amount"
      @click="redactPerson(deposit, 'text', 'Депозит', 'deposit')"
    >
      <p>{{ deposit }}</p>
    </div>
    <div
      class="delayed_date"
      @click="
        redactPerson(delay.substr(0, 10), 'date', 'Начало Отложки', 'delay')
      "
    >
      <p>{{ delay.substr(0, 10) }}</p>
    </div>
    <div
      class="delayed_to_date"
      @click="
        redactPerson(delayTo.substr(0, 10), 'date', 'Конец отложки', 'delayTo')
      "
    >
      <p>{{ delayTo.substr(0, 10) }}</p>
    </div>
    <div class="end">
      <p>
        {{ `${endOfDelay} Дн.` }}
      </p>
    </div>
    <div class="delete">
      <font-awesome-icon icon="user-times" v-on:click="deletePerson()" />
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {},
  props: {
    id: Number,
    delay: String,
    delayTo: String,
    deposit: String,
    fullName: String,
    number: Number,
    endOfDelay: Number
  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    redactPerson: async function(
      inputValue,
      type,
      fieldName,
      dbName,
      id = this.id,
      Swal = this.$swal,
      { dispatch } = this.$store
    ) {
      const options = {
        title: `Поменять значение строки ${fieldName}`,
        showCancelButton: true
      };
      if (type !== "date") {
        options.input = type;
        options.inputValue = inputValue;
        options.inputValidator = async value => {
          if (!value) {
            return "Не введенно значение";
          }
        };
      } else {
        options.html = `
          <input id="swal-input4" name="delay" type="date"  class="swal2-input">
        `;
        options.preConfirm = async () => {
          return document.getElementById("swal-input4").value
            ? document.getElementById("swal-input4").value
            : false;
        };
      }
      const { value: redactValue } = await Swal.fire(options);

      if (redactValue) {
        redactValue === inputValue
          ? dispatch("fireError", {
              message: "Значение не измененно",
              code: 101,
              Swal
            })
          : await dispatch("redactPersonField", { redactValue, dbName, id });
        await Swal.fire(`Значение изменено на ${redactValue}`);
      }
    },
    deletePerson: async function() {
      await this.$swal.fire({
        icon: "warning",
        title: "Подтверждение",
        text: "Удалить данную отложку?",
        showCloseButton: true,
        showCancelButton: true,
        preConfirm: () => {
          this.$store.dispatch("deletePerson", {
            id: this.id,
            swal: this.$swal
          });
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
  border-bottom: none;
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
  color: #ff1b1b;
}

@media (max-width: 1280px) {
  .postponement {
    max-width: 1080px;
  }
  .number_value {
    max-width: 6em;
  }
}
</style>

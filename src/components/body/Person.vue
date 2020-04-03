<template>
  <div class="postponement id#">
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
      <p>{{ delay }}</p>
    </div>
    <div class="delayed_to_date">
      <p>{{ delayTo }}</p>
    </div>
    <div class="end">
      <p>{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    delay: Date,
    delayTo: Date,
    deposit: Number,
    fullName: String,
    number: Number,
  },
  data() {
    return {
      time: 0
    };
  },
  name: "Person"
};
</script>

<style scoped>
.postponement {
  display: flex;
  outline: 0.1em #737b84 solid;
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
</style>

<template>
  <div id="postponement">
    <Nav></Nav>
    <Body></Body>
    <Footer></Footer>
    <p>{{ this.$store.state.testPrt }}</p>
  </div>
</template>

<script>
import Body from "../components/Body";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  name: "Postponement",
  components: { Body, Nav, Footer }
};
</script>

<style scoped></style>

<template>
  <div class="nav">
    <div class="content">
      <div class="logo">
        <p>Postponement</p>
      </div>
      <div class="navigation">
        <Panel />
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "./nav/Panel";
export default {
  name: "Nav",
  components: { Panel }
};
</script>

<style scoped>
/*Change background color to #545fff*/
div.nav {
  display: flex;
  justify-content: center;
  height: 5em;
  background: rgb(85, 134, 255);
  background: linear-gradient(0deg, rgb(0, 73, 252) 0%, rgb(58, 71, 243) 100%);
  color: white;
}
div.content {
  display: flex;
  width: 90em;
  flex-direction: row;
}
div.logo {
  display: flex;
}
div.logo p,
div.navigation div {
  display: flex;
  margin: auto 0 auto 0;
}
div.logo p {
  font-size: 2.7em;
}
div.navigation {
  display: flex;
  flex-direction: row;
  margin: auto 0 auto auto;
}

@media (max-width: 1280px) {
  div.nav {
    max-width: 1280px;
  }
  div.content {
    margin-left: 1em;
    max-width: 1080px;
    justify-content: space-between;
  }
  div.navigation {
    margin: auto 0 auto 0;
  }
}
/*div.navigation div.item {
  margin-left: 1em;
}*/

</style>

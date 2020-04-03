<template>
  <div class="footer">
    <div class="content">
      <div class="info-block">
        <div class="user-info">
          <span> Информация </span>
          <a href="https://github.com/SencoPan">
            Пользовательское соглашение
          </a>
          <a href="https://github.com/SencoPan">
            Политика конфиденциальности
          </a>
        </div>
        <div class="contact">
        </div>
      </div>
      <div class="copyright">
        <a href="https://github.com/SencoPan"> © 2020 Opes, Inc. </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
div.footer {
  display: flex;
  justify-content: center;
  background: #e7e7e7;
  margin: auto 0 0 0;
  height: 8em;
}
div.content {
  display: flex;
  width: 90em;
  flex-direction: column;
}
.copyright {
  margin-top: auto;
  margin-bottom: 1em;
}
div.copyright a {
  color: #737b84;
  text-decoration: none;
  margin: auto;
}
.info-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  margin-top: auto;
}
.info-block .user-info a {
  margin: 0;
  font-size: 0.9em;
  text-decoration: none;
  color: #9d9d9d;
}
svg {
  color: #9d9d9d;
}
.user-info {
  display: flex;
  flex-direction: column;
}
.user-info span {
  font-size: 1.1em;
  color: #606060;
  margin-bottom: 0.4em;
}
.contact {
  display: flex;
}
.contact a {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 2em;
  text-align: start;
}
.contact a::after {
  content: "";
  margin-left: 0.3em;
}</style
>s

<template>
  <div slot="login">
    <slot name="login">
      <LoginPage/>
    </slot>
  </div>
</template>

<script>
import LoginPage from './LoginComponent'
export default {
  name: 'WelcomePage',
  props: {
    msg: String
  },
  components: {
    LoginPage,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

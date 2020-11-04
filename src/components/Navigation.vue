<template>
  <div>
    <h1>Clinica WEB</h1>
    <b-nav tabs align="center">
      <b-nav-item to="/">
        <router-link to="/">Home</router-link>
      </b-nav-item>
      
      <b-nav-item to="/employee">
        <router-link to="/employee">Employees</router-link>
      </b-nav-item>

      <b-nav-item to="/medicine">
        <router-link to="/medicine">Medicine</router-link>
      </b-nav-item>

      <b-nav-item to="/Patient">
        <router-link to="/patient">Patient</router-link>
      </b-nav-item>

      <b-nav-item to="/login">
        <router-link to="/login">Login</router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
</style>
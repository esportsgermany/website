<template>
  <b-navbar fixed="top" type="light" full>

    <a class="navbar-brand" href="#">BootStrap VUE</a>

    <b-nav>
      <b-nav-item link="#" active>Home <span class="sr-only">(current)</span></b-nav-item>
      <b-nav-item link="#">Features</b-nav-item>
      <b-nav-item link="#">Pricing</b-nav-item>
      <b-nav-item link="#">About</b-nav-item>
    </b-nav>

    <b-form inline>
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <b-btn class="my-2 my-sm-0">Search</b-btn>
    </b-form>

  </b-navbar>
</template>

<script>
  import Navbar from 'bootstrap-vue/components/navbar';
  import Nav from 'bootstrap-vue/components/nav';
  import Navitem from 'bootstrap-vue/components/nav-item';
  import Form from 'bootstrap-vue/components/form';
  import Button from 'bootstrap-vue/components/button';
  import Alert from 'bootstrap-vue/components/alert';

  export default {
    name: 'Navbar',
    components: {
      bNavbar: Navbar,
      bNav: Nav,
      bNavitem: Navitem,
      bForm: Form,
      bButton: Button,
      bAlert: Alert,
    },
  };
</script>

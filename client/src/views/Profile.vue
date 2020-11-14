<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.name}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Name:</strong>
      {{currentUser.name}}
    </p>
    <p>
      <strong>IC:</strong>
      {{currentUser.ic}}
    </p>
    <p>
      <strong>Phone Number:</strong>
      {{currentUser.phone}}
    </p>
     <p>
      <strong>Role:</strong>
      {{currentUser.role}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
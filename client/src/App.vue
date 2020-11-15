<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/appointment" class="nav-link">Appointment</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
          <font-awesome-icon icon="sign-in-alt" />
          Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link v-if="showUserBoard" to="/user" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="showAdminBoard" to="/admin" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="showStaffBoard" to="/staff" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logout">
            <font-awesome-icon icon="sign-out-alt" />
            Logout
            </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showUserBoard() {
      if (this.currentUser && this.currentUser.role == "USER") {
        return this.currentUser.role;
      }

      return false;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.role == "ADMIN") {
        return this.currentUser.role;
      }

      return false;
    },
    showStaffBoard() {
      if (this.currentUser && this.currentUser.role == "STAFF" ) {
        return this.currentUser.role;
      }

      return false;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue firebase auth</router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{ user.data.displayName }}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut"></a>
            </li>
          </template>
          <template v-else>
            
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
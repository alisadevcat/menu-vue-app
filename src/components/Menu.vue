<template>
  <!-- navbar -->
  <nav class="navbar justify-between">
    <div>
    <div class="site-nav container-fluid">
      <div class="site-nav__logo">
        <router-link to="/">
        <img src="../assets/images/HiltonLogo.png" alt="Hilton" /> 
        </router-link>
      </div>
      <ul class="site-nav__list">
        <li class="ml-1 text-hover-secondary"><router-link to="/start">Create New Menu</router-link></li>
        <li class="ml-1 text-hover-secondary"><router-link to="/mymenus">My Menus</router-link></li>
        <li class="ml-1 text-hover-secondary"><router-link to="/account">My Account</router-link></li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

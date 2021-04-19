<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="./assets/foods-go-logo.png"  alt=""> </a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <li class="nav-item active">
 <router-link class="nav-item nav-link" to="/">Home</router-link>
       <router-link class="nav-item nav-link" to="/About">Dashboard</router-link>
      <router-link class="nav-item nav-link" to="/login">Login</router-link>

        </li>
     
    
    </div>
  </div>
</nav>
       
    </div>
    <div class="container py-4">
        <router-view />
   


    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
img{
    
  width: 100px;


}
</style>

<template>
    <div class="">
        <ul class="">
            <li class="">
                <router-link class="" to="/">Home</router-link>
            </li>
            <li class="">
                <router-link class="" to="/About">Dashboard</router-link>
            </li>
            <li class="">
                <router-link class="" to="/login">Login</router-link>
            </li>
            <li>
                
            </li>
        </ul>
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
</style>

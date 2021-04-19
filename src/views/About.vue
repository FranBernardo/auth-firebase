<template>
    <div class="row">
        <div class="col-12">
            <h1>Dashboard</h1>
             <button @click="sair">Sair</button>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
     methods: {
    sair: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
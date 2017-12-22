<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";

export default {
    components: {Navbar},
    name: 'app'
}
</script>


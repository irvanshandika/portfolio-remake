<script setup>
import BackgroundLayout from "./layouts/BackgroundLayout.vue";
</script>

<template>
  <BackgroundLayout>
    <router-view />
  </BackgroundLayout>
  <Script type="text/partytown" src="https://static.cloudflareinsights.com/beacon.min.js" />
</template>

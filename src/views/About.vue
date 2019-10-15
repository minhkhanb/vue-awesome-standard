<template>
  <div class="about">
    <HelloWorld msg="This is about page"/>
    <img alt="Vue logo" src="../assets/images/logo.png">
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'About',
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <div class="row profile">
    <AvatarImg />
    <span class="fi">Your Name</span>
  </div>
</template>

<script>
import AvatarImg from './AvatarImg.vue';

export default {
  name: 'UserProfile',
  components: {
    AvatarImg,
  },
};
</script>

<style>
.fi {
  padding-right: 10px;
  padding-left: 10px;
}
</style>

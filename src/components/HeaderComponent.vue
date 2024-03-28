<template>
  <div class="row header">
    <LogoImg />
    <SearchInput />
    <UserProfile />
  </div>
</template>

<script>
import LogoImg from './LogoImg.vue';
import SearchInput from './SearchInput';
import UserProfile from './UserProfile';

export default {
  name: 'HeaderComponent',
  components: {
    LogoImg,
    SearchInput,
    UserProfile,
  },
};
</script>

<style>
@media screen and (max-width: 425px) {
  .header {
    flex-direction: column;
  }
}
</style>

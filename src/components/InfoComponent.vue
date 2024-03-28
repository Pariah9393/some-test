<template>
  <div class="info">
    <span class="info-searched"
      >You searched for: <span>{{ this.$store.state.searchValue }}</span></span
    >
    <span class="info-badge">{{ this.$store.state.searchCount }} results</span>
  </div>
</template>

<script>
export default {
  name: 'InfoComponent',
  props: ['searchValue', 'resultsCount'],
  components: {},
};
</script>

<style>
.info {
  margin-top: 38px;
  font-family: Arial, Helvetica, sans-serif;
}

.info-searched {
  font-size: 22px;
  color: #000000;
}

.info-searched span {
  text-decoration: underline;
}

.info-badge {
  background: #6627ff;
  color: #fcfcff;
  padding: 15px 5px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
}
</style>

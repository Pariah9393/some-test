<template>
  <div class="search-container">
    <input class="search" type="search" placeholder="" v-model="searchValue" />
    <i class="icon" @click="search"></i>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  components: {},
  data: () => ({
    searchValue: '',
    items: [],
  }),
  methods: {
    search: function () {
      this.$store.dispatch('fetchItemsWithSearch', {
        s: this.searchValue,
        page: 1,
      });
    },
  },
};
</script>

<style>
.search-container {
  position: relative;
  width: 280px;
  height: 40px;
}

.search {
  background: #fcfcff;
  border: 1px solid #e6eaf5;
  border-radius: 5px;
  width: 280px;
  height: 40px;
  outline: none;
  padding: 10px 30px 10px 15px;
  position: absolute;
}

.icon {
  background: url('../assets/search.png') no-repeat;
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  left: 90%;
  top: 30%;
  cursor: pointer;
}
</style>

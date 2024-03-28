<template>
  <div class="pagination">
    <button @click="prevPage" class="left" :disabled="pageNumber === 1">
      <img src="../assets/left.png" alt="" />
    </button>
    <button
      @click="nextPage"
      class="right"
      :disabled="pageNumber >= pageCount - 1"
    >
      <img src="../assets/right.png" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: [],
  data() {
    return {
      pageNumber: 1,
      size: 10,
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
      this.$store.dispatch('fetchItemsWithSearch', {
        s: this.$store.state.searchValue,
        page: this.pageNumber,
      });
    },
    prevPage() {
      this.pageNumber--;
      this.$store.dispatch('fetchItemsWithSearch', {
        s: this.$store.state.searchValue,
        page: this.pageNumber,
      });
    },
  },
  computed: {
    pageCount() {
      let l = this.$store.state.searchCount;
      return Math.ceil(l / this.size);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination button {
  padding: 5px 12px;
  border: 1px solid #e6eaf5;
  background: #fcfcff;
  cursor: pointer;
}

.left {
  border-radius: 5px 0 0 5px;
}
.right {
  border-radius: 0 5px 5px 0;
}
</style>

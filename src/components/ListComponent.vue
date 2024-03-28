<template>
  <div class="list" v-if="!this.$store.state.loading">
    <CardComponent
      v-for="(item, index) in this.$store.state.items"
      :key="index"
      :item="item"
    />
  </div>
  <div class="loading" v-else>Loading...</div>
  <PaginationComponent v-if="this.$store.state.searchCount > 10" />
</template>

<script>
import CardComponent from './CardComponent.vue';
import PaginationComponent from './PaginationComponent.vue';
export default {
  name: 'ListComponent',
  props: [],
  components: { CardComponent, PaginationComponent },
  data() {},
  mounted() {},
};
</script>

<style>
.list {
  width: 1136px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 57px;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .list {
    width: 900px;
  }
}

@media screen and (max-width: 768px) {
  .list {
    width: 700px;
  }
}

@media screen and (max-width: 425px) {
  .list {
    width: 320px;
  }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
}
</style>

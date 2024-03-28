<template>
  <div class="container">
    <div class="row-column">
      <HeaderComponent />
      <div
        class="noresult"
        v-if="!this.$store.state.items && this.$store.state.searchValue"
      >
        No results
      </div>
      <div v-else>
        <InfoComponent
          v-if="this.$store.state.items && this.$store.state.searchValue"
        />
        <ListComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import InfoComponent from './components/InfoComponent';
import ListComponent from './components/ListComponent';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    InfoComponent,
    ListComponent,
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style>
.container {
  max-width: 1136px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1024px) {
  .container {
    max-width: 922px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 700px;
  }
}

@media screen and (max-width: 425px) {
  .container {
    max-width: 400px;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row-column {
  flex-direction: column;
}
.noresult {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
}
</style>

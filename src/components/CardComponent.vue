<template>
  <div class="card-container">
    <div class="img">
      <img src="../assets/pic.png" alt="" />
    </div>
    <div class="card-info">
      <span>Name: {{ item.Title }}</span>
      <span>Year: {{ item.Year }}</span>
      <span>imdbID: {{ item.imdbID }}</span>
      <span>Type: {{ item.Type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['item'],
  components: {},
};
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  width: 245px;
  padding-right: 35px;
  margin-bottom: 50px;
}

@media screen and (max-width: 425px) {
  .card-container {
    padding-right: 0px;
  }
}

.img {
  border: 1px solid #6627ff;
  border-radius: 10px;
  padding: 70px 47px 70px 46px;
}

.img img {
  widows: 152px;
  height: 130px;
}

.card-info {
  display: flex;
  flex-direction: column;
  padding-left: 13px;
  padding-top: 20px;
  font-size: 16px;
}
</style>

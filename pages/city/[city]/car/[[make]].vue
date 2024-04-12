<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <h1 v-else class="text-red-600">No Cars Found With Filter</h1>
  </div>
</template>
<script setup>
const route = useRoute();

const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});
watch(
  () => route.query,
  () => {
    //refresh() 官網功能存在BUG無法更新，官網已經拿掉。
    window.location.reload(true);
  }
);
</script>

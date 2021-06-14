<template>
  <article>
    <div class="h-36 w-36 rounded-lg overflow-hidden mx-auto shadow-2xl">
      <img
        :src="card.img"
        :alt="card.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="text-center">
      <h2 class="font-bold text-2xl my-4">{{ card.title }}</h2>
      <p>{{ card.text }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>
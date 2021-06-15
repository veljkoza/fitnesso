<template>
  <!-- <nuxt-link :to="{path: workoutPath}"> -->
  <article
    class="bg-gray-100 rounded-xl overflow-hidden shadow-lg relative  p-5 pt-36 flex"
  >
    <div class="absolute inset-0">
      <img
        :src="post.img"
        class="h-full w-full object-cover"
        :alt="post.title"
      />
    </div>
    <footer class="flex flex-col relative w-full mt-auto">
      <span class="bg-blue-100 p-1 rounded-lg mb-3  text-center w-1/2">{{post.label}}</span>
      <div class="w-full bg-white rounded-lg p-4">
        <div class="flex items-center">
          <img
            :src="post.author.img"
            :alt="`Post author ${post.author.name}`"
            class="h-10 w-10 object-cover rounded-full"
          />
          <h3>{{ post.author.name }}</h3>
        </div>
        <h2 class="my-5 text-lg font-bold">{{ post.title }}</h2>
        <button>> Read more</button>
      </div>
    </footer>
    <!-- <footer class="p-4 py-2 leading-8">
      <span class="font-bold text-pink-500" v-if="!paid">{{
        workout.label
      }}</span>
      <div v-else class="flex font-bold items-center">
        <span class="mr-4 text-pink-500">{{ workout.discountedPrice }}</span>
        <span class="text-gray-300 line-through">{{ workout.fullPrice }}</span>
      </div>
      <p>{{ workout.duration }}</p>
      <h1 class="font-semibold">{{ workout.title }}</h1>
      <button>Train now</button>
    </footer> -->
  </article>
  <!-- </nuxt-link> -->
</template>

<script>
import QButton from './QButton.vue'

export default {
  name: 'PostCard',
  components: { QButton },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // workoutPath() {
    //   console.log(this.paid)
    //   let typeOfWorkout = this.paid ? 'product' : 'free-plans'
    //   let url = `/${typeOfWorkout}/${this.workout.slug}`
    //   return url
    // },
  },
}
</script>

<style lang="postcss" scoped>
</style>
<template>
 <!-- <nuxt-link :to="{path: workoutPath}"> -->
      <article class="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
    <div class="h-60">
      <img
        :src="workout.img"
        class="h-full w-full object-cover"
        :alt="workout.title"
      />
    </div>
    <footer class="p-4 py-2 leading-8">
      <span class="font-bold text-pink-500" v-if="!paid">{{ workout.label }}</span>
      <div v-else class="flex font-bold items-center">
          <span class="mr-4 text-pink-500">{{workout.discountedPrice}}</span>
          <span class=" text-gray-300 line-through">{{workout.fullPrice}}</span>

      </div>
      <p>{{ workout.duration }}</p>
      <h1 class="font-semibold">{{ workout.title }}</h1>
      <button>Train now</button>
    </footer>
  </article>
 <!-- </nuxt-link> -->
</template>

<script>
export default {
  name: 'WorkoutCard',
  props: {
    workout: {
      type: Object,
      default: () => {},
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
      workoutPath() {
          console.log(this.paid)
          let typeOfWorkout = this.paid ? 'product':'free-plans'
          let url = `/${typeOfWorkout}/${this.workout.slug}`
          return url 
      }
  },
}
</script>

<style lang="postcss" scoped>
</style>
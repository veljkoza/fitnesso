<template>
  <div>
    <section class="padded">
      <article class="text-center">
        <h1 class="text-2xl">{{homepage.slides[0].overtext}}</h1>
        <img class="-mt-2 rounded-lg" :src="homepage.slides[0].img" alt="sandra">
      </article>
      <article>
        <h4>{{homepage.slides[0].introtext}}</h4>
        <h1 class="my-4 text-4xl">{{homepage.slides[0].title}}</h1>
        <p>{{homepage.slides[0].description}}</p>
        <button class="my-4"> > {{homepage.slides[0].cta}}</button>
      </article>
    </section>
    <section class="my-40">
      <div class=" w-full relative">
        <div class="statline bg-blue-400 absolute -top-10 bottom-0 w-full h-60  -ml-10 -mr-10 transform rotate-2"></div>
        <div class="relative grid grid-cols-1 md:grid-cols-3 items-center ">
          <article v-for="stat in homepage.statline" :key="stat.id" class="text-center text-white">
          <div><p>{{stat.stat}}<span>{{stat.extension}}</span></p></div>
          <h3>{{stat.title}}</h3>
        </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [],
    }
  },
  async asyncData({ $content }) {
    let _homepage = await $content('homepage').fetch();

    let homepage = _homepage;
    return {homepage}
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body{
  background: gray;
  overflow-x: hidden;
}
.statline{
  width: 200%;
}

</style>

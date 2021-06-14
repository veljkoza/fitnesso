<template>
  <div>
    <section class="padded">
      <article class="text-center">
        <h1 class="text-2xl">{{ homepage.slides[0].overtext }}</h1>
        <img
          class="-mt-2 rounded-lg"
          :src="homepage.slides[0].img"
          alt="sandra"
        />
      </article>
      <cta-section
        :introText="homepage.slides[0].introtext"
        :title="homepage.slides[0].title"
        :description="homepage.slides[0].description"
        :cta="homepage.slides[0].cta"
      />
      <!-- <article>
        <h4>{{ homepage.slides[0].introtext }}</h4>
        <h1 class="my-4 text-4xl leading-tight">
          {{ homepage.slides[0].title }}
        </h1>
        <p>{{ homepage.slides[0].description }}</p>
        <q-button class="mt-6">{{ homepage.slides[0].cta }}</q-button>
      </article> -->
    </section>
    <section class="my-10">
      <angled-section>
        <div class="grid gap-5 grid-cols-1 md:grid-cols-3 items-center">
          <article
            v-for="stat in homepage.statline"
            :key="stat.id"
            class="text-center text-white"
          >
            <div>
              <p>
                {{ stat.stat }}<span>{{ stat.extension }}</span>
              </p>
            </div>
            <h3>{{ stat.title }}</h3>
          </article>
        </div>
      </angled-section>
    </section>
    <section class="padded">
      <h1 class="text-3xl leading-tight text-center">
        {{ homepage.cta.title }}
      </h1>
      <q-button class="mx-auto my-5 block">{{ homepage.cta.button }}</q-button>
    </section>
    <section class="padded">
      <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
        <home-card :card="card" v-for="card in homepage.cards" :key="card.id" />
      </div>
    </section>
    <section class="padded bg-white my-10">
      <cta-section
        :title="homepage.freeWorkouts.title"
        :description="homepage.freeWorkouts.text"
        :cta="homepage.freeWorkouts.button"
      ></cta-section>
      <div class="grid my-10 grid-cols-1 gap-10 md:grid-cols-2">
        <workout-card v-for="workout in freeWorkouts" :key="workout.id" :workout="workout"/>
      </div>
    </section>
    <section class="padded bg-primary my-10 relative">
      <!-- <div class="absolute top-0 right-0 h-96 w-96">
        <img src="/funky.svg" alt="bg pattern" class="h-full w-full">
      </div> -->
      <cta-section
        :title="homepage.paidWorkouts.title"
        :description="homepage.paidWorkouts.text"
        :cta="homepage.paidWorkouts.button"
        class="text-white"
        buttonWhite
      ></cta-section>
      <div class="grid my-10 grid-cols-1 gap-10 md:grid-cols-2">
        <workout-card v-for="workout in paidWorkouts" :key="workout.id" :workout="workout" paid/>
      </div>
    </section>
    <section  :style="{'background-image': `url('/sweat-gain.png')`}" class="flex flex-col justify-center bg-cover bg-center h-104 bg-no-repeat">
      <div class="relative text-center ">
        <h1 class="text-4xl font-bold text-white">SWEAT. GAIN. DO</h1>
        </div>      
    </section>
    <section class="padded bg-gray-100">
      <cta-section
        :title="homepage.secondCta.title"
        :description="homepage.secondCta.text"
        :cta="homepage.secondCta.button"
      ></cta-section>
    </section>
  </div>
</template>

<script>
import AngledSection from '~/components/AngledSection.vue'
import CtaSection from '~/components/CtaSection.vue'
import HomeCard from '~/components/HomeCard.vue'
import QButton from '~/components/QButton.vue'
import WorkoutCard from '~/components/WorkoutCard.vue'
export default {
  components: {
    QButton,
    AngledSection,
    CtaSection,
    HomeCard,
    WorkoutCard,
  },
  data() {
    return {
      content: [],
    }
  },
  async asyncData({ $content }) {
    let _homepage = await $content('homepage').fetch()
    let freeWorkouts = await $content('freeworkouts').fetch()
    let paidWorkouts = await $content('paidworkouts').fetch()
    
    let homepage = _homepage
    return { homepage,freeWorkouts,paidWorkouts }
  },
}
</script>

<style lang="postcss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

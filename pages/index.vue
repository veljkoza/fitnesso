<template>
  <div class="overflow-x-hidden">
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
        <workout-card
          v-for="workout in freeWorkouts"
          :key="workout.id"
          :workout="workout"
        />
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
        <workout-card
          v-for="workout in paidWorkouts"
          :key="workout.id"
          :workout="workout"
          paid
        />
      </div>
    </section>
    <section
      :style="{ 'background-image': `url('/sweat-gain.png')` }"
      class="flex flex-col justify-center bg-cover bg-center h-104 bg-no-repeat"
    >
      <div class="relative text-center">
        <h1 class="text-4xl font-bold text-white">SWEAT. GAIN. DO</h1>
      </div>
    </section>
    <section class="padded bg-gray-100 grid grid-cols-1 md:grid-cols-2">
      <cta-section
        :title="homepage.secondCta.title"
        :description="homepage.secondCta.text"
        :cta="homepage.secondCta.button"
      ></cta-section>
      <div class="relative h-96 mt-40">
        <div class="bg-primary absolute inset-0 left-5 -right-10"></div>
        <div class="absolute inset-0 -top-10 bottom-20">
          <img
            src="/sandra-2.png"
            alt="sandra two"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
    <section class="padded relative">
      <div class="absolute inset-0">
        <img
          src="/splash-bottom.jpeg"
          class="h-full w-full object-cover"
          alt="Man drinking water"
        />
      </div>
      <article class="relative bg-blue-100 p-6 text-center rounded-lg">
        <h1 class="font-semibold text-2xl leading-8">Get our free meal plan</h1>
        <p class="my-5 mb-7 leading-8 text-xl">
          Signup to our newsletter to get a free 30 day meal plan. You will
          receive all guidance on what to eat, how to cook and how much to eat.
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Full Name"
            class="p-4 bg-opacity-30 bg-blue-400 placeholder-primary rounded-lg"
          />
          <input
            type="text"
            placeholder="Email"
            class="p-4 bg-opacity-30 bg-blue-400 placeholder-primary rounded-lg"
          />
          <q-button class="w-full">SIGNUP</q-button>
        </div>
      </article>
    </section>
    <section class="padded">
      <cta-section
        :title="homepage.postsCta.title"
        :description="homepage.postsCta.text"
        :cta="homepage.postsCta.button"
        class="text-center"
        ctaClass="mx-auto"
      ></cta-section>
    </section>
    <section class="padded">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <post-card v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
    <section>
      <div class="flex flex-nowrap overflow-auto">
        <article class="flex-go mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="h-40 w-40 object-cover"
          />
        </article>
        <article class="flex-go mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="h-40 w-40 object-cover"
          />
        </article>
        <article class="flex-go mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="flex-go h-40 w-40 object-cover"
          />
        </article>
        <article class="mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="flex-go h-40 w-40 object-cover"
          />
        </article>
      </div>
      <angled-section colorClass="bg-pink-500 -mt-10" classes="h-40">
        <div class="grid grid-cols-2 gap-4 mx-auto px-6 pb-10 transform rotate-2 text-white font-bold text-xl">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-white"></div>
            <span class="ml-4">@fitnesso</span>
          </div>
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-white"></div>
            <span class="ml-4">@fitnesso</span>
          </div>
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-white"></div>
            <span class="ml-4">@fitnesso</span>
          </div>
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-white"></div>
            <span class="ml-4">@fitnesso</span>
          </div>
        </div>
      </angled-section>
      <div class="flex flex-nowrap overflow-auto -mt-10">
        <article class="flex-go mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="h-40 w-40 object-cover"
          />
        </article>
        <article class="flex-go mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="h-40 w-40 object-cover"
          />
        </article>
        <article class="flex-go mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="flex-go h-40 w-40 object-cover"
          />
        </article>
        <article class="mx-5 rounded-lg overflow-hidden flex-auto">
          <img
            src="/weights.jpeg"
            alt="Picture of weights"
            class="flex-go h-40 w-40 object-cover"
          />
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import AngledSection from '~/components/AngledSection.vue'
import CtaSection from '~/components/CtaSection.vue'
import HomeCard from '~/components/HomeCard.vue'
import PostCard from '~/components/PostCard.vue'
import QButton from '~/components/QButton.vue'
import WorkoutCard from '~/components/WorkoutCard.vue'
export default {
  components: {
    QButton,
    AngledSection,
    CtaSection,
    HomeCard,
    WorkoutCard,
    PostCard,
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
    let posts = await $content('posts').fetch()

    let homepage = _homepage
    return { homepage, freeWorkouts, paidWorkouts, posts }
  },
}
</script>

<style lang="postcss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.flex-go {
  flex: 0 0 100%;
  max-width: 150px;
}
</style>

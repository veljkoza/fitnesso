<template>
  <article>
    <h4 v-if="introText">{{ introText }}</h4>
    <h1 v-if="title" class="my-4 font-bold text-3xl md:text-4xl leading-tight">
      {{ title }}
    </h1>
    <p v-if="description" class="my-10 leading-8">{{ description }}</p>
    <q-button
      class="mt-6"
      :class="ctaClass ? ctaClass : ''"
      :buttonWhite="buttonWhite"
      v-if="cta"
      @click="$emit('click')"
      >{{ cta }}</q-button
    >
  </article>
</template>

<script>
export default {
  name: 'CtaSection',
  props: {
    introText: {
      type: String,
      default: '',
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
    cta: {
      type: String,
      default: '',
      required: false,
    },
    buttonWhite: {
      type: Boolean,
      default: false,
      required: false,
    },
    ctaClass: {
      type: String,
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>
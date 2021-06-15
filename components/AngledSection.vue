<template>
    <div class=" w-full relative  flex flex-col justify-center" :class="classes ? classes : 'h-96'">
        <div class="statline absolute inset-0" :class="colorClass ? colorClass : ''"></div>
        <div class="relative">
         <slot></slot>
        </div>
      </div>
</template>

<script>
    export default {
        name: "AngledSection",
        props: {
          classes: {
            type: String,
            default: '',
            required: false
          },
          colorClass: {
            type: String,
            default: 'bg-primary',
            required: false
          }
        },
    }
</script>

<style lang="postcss" scoped>
.statline {
  clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 94%);
}
</style>
<template>
    <div class=" w-full relative h-96 flex flex-col justify-center">
        <div class="statline bg-primary absolute inset-0   "></div>
        <div class="relative grid grid-cols-1 md:grid-cols-3 items-center ">
         <slot></slot>
        </div>
      </div>
</template>

<script>
    export default {
        name: "AngledSection"
    }
</script>

<style lang="postcss" scoped>
.statline {
  clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 94%);
}
</style>
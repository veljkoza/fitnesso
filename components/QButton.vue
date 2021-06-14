<template>
    <button @click="$emit('click')" class="w-56 font-bold rounded-lg  p-5 px-6 flex justify-center" :class="buttonWhite ? 'bg-white text-primary' : 'bg-primary text-white'"><span class="block mr-auto">> </span><span class="mr-auto "><slot ></slot></span></button>
</template>

<script>
    export default {
        name:'QButton',
        props: {
            buttonWhite: {
                type: Boolean,
                default: false
            },
        },
    }
</script>

<style lang="postcss" scoped>

</style>
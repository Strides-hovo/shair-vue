<template>
    <Transition name="slide-up">
        <slot />
    </Transition>
</template>

<script>
    export default {
        name: 'BaseTranslateSlide',
      
    }
</script>

<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transform: translateY(0);
  transition: all .3s linear;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
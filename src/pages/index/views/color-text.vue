<template>
 <text :style="{color: activeColor}" @tap.stop="handleClick">
   <slot></slot>
 </text>
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    name: 'color-text',
    props: {
      activeColor: { type: String, default: 'red' }
    }
  })
  export default class ColorText extends Vue {
    text = null;

    handleClick () {
      console.log(this.$slots)
    }
  }
</script>

<style scoped>

</style>

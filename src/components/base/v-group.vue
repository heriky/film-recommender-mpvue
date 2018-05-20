<template>
  <div class="v-group" :class="classNameStr"
       :style="{alignItems: horizontalAlign, justifyContent: verticalAlign}">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "v-group",
    props: {
      className: String,
      verticalAlign: {
        type: String,
        default: 'center'
      },
      horizontalAlign: {
        type: String,
        default: 'center'
      }
    },
    computed: {
      classNameStr() {
        return this.className || '';
      }
    }
  }
</script>

<style scoped>
  .v-group {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  /*horizontalAlign*/
  .h-flex-start {
    align-items: flex-end;
  }
  .h-flex-end {
    align-items: flex-start;
  }
  .h-center {
    align-items: center;
  }

  /*verticalAlign*/
  .v-flex-start {
    justify-content: flex-start;
  }
  .v-flex-end {
    justify-content: flex-end;
  }
  .v-center {
    justify-content: center;
  }
  .v-space-between {
    justify-content: space-between;
  }
  .v-space-around {
    justify-content: space-around;
  }
  .v-space-evenly {
    justify-content: space-evenly;
  }
</style>

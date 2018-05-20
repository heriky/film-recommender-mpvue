<template>
    <div class="h-group"
         :class="classNameStr">
      <slot/>
    </div>
</template>

<script>
  // 使用不同的思路解决样式合并的问题
  // h-group使用纯class的方式合并
  // v-group使用动态style的方式
    export default {
      name: "h-group",
      props: {
        className: String,
        horizontalAlign: {
          type: String,
          default: 'center'
        },
        verticalAlign: {
          type: String,
          default: 'center'
        }
      },
      computed: {
        classNameStr() {
          return `${this.className || ''} h-${this.horizontalAlign} v-${this.verticalAlign}`
        }
      }
    }
</script>

<style scoped>
  .h-group {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  /*horizontal-align*/
  .h-center {
    justify-content: center;
  }
  .h-space-between {
    justify-content: space-between;
  }
  .h-space-around {
    justify-content: space-around;
  }
  .h-space-evenly {
    justify-content: space-evenly;
  }
  .h-flex-start {
    justify-content: flex-start;
  }
  .h-flex-end {
    justify-content: flex-end;
  }

  /*vertical-align*/
  .v-center {
    align-items: center;
  }
  .v-flex-start {
    align-items: flex-start;
  }
  .v-flex-end {
    align-items: flex-end;
  }

</style>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

const value = ref(new Date());
</script>

<template>
  <section class="Home-root">
    <el-calendar v-model="value" />
  </section>
</template>

<style lang="scss" scoped>
.Home-root {
}
</style>

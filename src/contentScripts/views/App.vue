<script setup lang="ts">
import 'uno.css'
import logo from '~/assets/logo.png'

const packName = ref('')

const activityHref = computed(() => {
  if (!packName.value)
    return ''
  return `https://npm-stat.com/charts.html?package=${packName.value}`
})

function updatePackName() {
  const { pathname } = location
  const pathArr = pathname.split('/').filter(Boolean)
  // @types/hh-mm-ss
  if (pathArr.length >= 2 && pathArr[0] === 'package') {
    packName.value = pathArr.slice(1).join('/')
  }
}

window.navigation.addEventListener('navigate', () => {
  nextTick(updatePackName)
})

updatePackName()
</script>

<template>
  <span v-if="packName">
    <a
      class="stat-btn br2 pv2 ph3 fw5 f5 tc button button-reset pointer ma2 truncate ml0 no-underline mt2 dib w-100"
      :href="activityHref"
      target="_blank"
    >
      <img :src="logo" alt="logo" class="stat-w-[20px] stat-h-[20px] stat-align-middle"> npm-stat.com
    </a>
  </span>
</template>

<style>
.stat-btn {
  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0.13) 0%, rgba(0, 184, 15, 0.1) 100%);
  border: 1px solid rgba(75, 173, 58, 0.5);
}
.stat-btn:hover {
  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 184, 15, 0.14) 100%);
  border: 1px solid rgba(75, 173, 58, 0.6);
}
</style>

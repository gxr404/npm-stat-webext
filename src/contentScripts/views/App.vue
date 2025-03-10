<script setup lang="ts">
import 'uno.css'
import npmTrends from '~/assets/npm_trends.png'
import npmgraph from '~/assets/npmgraph.png'
import npmstat from '~/assets/npmstat.png'
import socket from '~/assets/socket.png'

const packName = ref('')

const hrefGroup = computed(() => {
  if (!packName.value)
    return {}
  return {
    npmStat: `https://npm-stat.com/charts.html?package=${packName.value}`,
    npmtrends: `https://npmtrends.com/${packName.value}`,
    socket: `https://socket.dev/npm/package/${packName.value}`,
    npmgraph: `https://npmgraph.js.org/?q=${packName.value}`,
  }
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
  <div v-if="packName" class="stat-flex stat-flex-wrap stat-w-full stat-justify-between">
    <a
      class="stat-btn stat-w-[48%]"
      :href="hrefGroup.npmStat"
      target="_blank"
    >
      <img :src="npmstat" alt="logo" class="stat-w-[20px] stat-h-[20px] stat-align-middle stat-mr-1">npm-stat.com
    </a>
    <a
      class="stat-btn stat-w-[48%]"
      :href="hrefGroup.npmtrends"
      target="_blank"
    >
      <img :src="npmTrends" alt="logo" class="stat-w-[20px] stat-h-[20px] stat-align-middle stat-mr-1">npm trends
    </a>
    <a
      class="stat-btn stat-w-[48%]"
      :href="hrefGroup.socket"
      target="_blank"
    >
      <img :src="socket" alt="logo" class="stat-w-[20px] stat-h-[20px] stat-align-middle stat-mr-1">socket
    </a>
    <a
      class="stat-btn stat-w-[48%]"
      :href="hrefGroup.npmgraph"
      target="_blank"
    >
      <img :src="npmgraph" alt="logo" class="stat-w-[20px] stat-h-[20px] stat-align-middle stat-mr-1">npmgraph
    </a>
  </div>
</template>

<style>
.stat-btn {
  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0.13) 0%, rgba(0, 184, 15, 0.1) 100%);
  border: 1px solid rgba(75, 173, 58, 0.5);
  text-align: center;
  margin: .5rem 0;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  font-weight: 500;
  display: inline-block;
  border-radius: .25rem;
  font-size: 1rem;
  text-decoration: none;
}
.stat-btn:hover {
  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 184, 15, 0.14) 100%);
  border: 1px solid rgba(75, 173, 58, 0.6);
}
</style>

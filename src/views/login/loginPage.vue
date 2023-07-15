<script setup lang="ts">
import { ref } from "vue"
import accoutPanle from "./accoutPanle.vue";
import messagePanle from "./messagePanle.vue";
let currentTab = ref(0)
const accoutPanleRef = ref<InstanceType<typeof accoutPanle>>()

const handleLogin = () => {
  if (currentTab.value === 0) {
    accoutPanleRef.value?.loginAction()
  } else {
    console.log('手机登录')
  }
}
</script>

<template>
  <div class="out-container">
    <h1 class="linear-grdient-text">管理系统</h1>
    <div class="w-1xl h-md ring p-2xl flex flex-col flex-items-center br-2">
      <div class="text-center flex justify-center flex-items-center w-sm m-0 mt-4 bg-tsp br-100 p-1">
        <div @click="(e)=>currentTab = 0" class="c-tab" text-2xl  cursor-pointer  :class="currentTab === 0 ? 'active' : ''">账号登录</div>
        <div @click="(e)=>currentTab = 1" class="c-tab" text-2xl  cursor-pointer :class="currentTab === 1 ? 'active' : ''">短信登录</div>
      </div>
      <div class="form w-md">
        <accoutPanle v-if="currentTab == 0" ref="accoutPanleRef"></accoutPanle>
        <messagePanle v-else></messagePanle>
      </div>
      <div class="text-center">
        <el-button type="primary" class="w-sm" @click="handleLogin">立即登录</el-button>
      </div>
    </div>
    <div class="ball-wrapper">
      <div class="ball"></div>
      <div class="small-ball"></div>
      <div class="mid-ball"></div>
    </div>
  </div>
</template>

<style scoped>
.out-container{
  background-image: radial-gradient(rgba(255,0,0,.3),rgba(255,0,0,0) 40vw),
  radial-gradient(rgba(64,158,255,.43),
  rgba(0,128,0,0) 40vw),
  radial-gradient(rgba(1, 1, 190, 0.3),
  rgba(0,0,255,0) 40vw),
  radial-gradient(rgba(132, 255, 0, 0.3),
  rgba(255,255,0,0) 40vw),
  radial-gradient(rgba(255,0,0,.3),
  rgba(255,0,0,0) 40vw);
  background-position: -40vw 14rem,80% 10rem,60vw 14rem,-10vw calc(14rem + 20vw),80vw calc(14rem + 40vw);
  background-size: 80vw 80vw;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ball-wrapper .ball{
  position: absolute;
  right: 20px;
  bottom: 50px;
  animation: ball-animation 4s ease-in-out infinite;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at 75% 30%,white 5px,aqua 8%,darkblue 60%,aqua 100%);
  box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
  inset 88px 0 60px #c2d8fe, inset -20px -60px 100px #fde9ea,
  inset 0 50px 140px #fde9ea, 0 0 90px #fff;
}

.ball-wrapper .small-ball{
  position: absolute;
  left: 50px;
  bottom: 180px;
  animation: ball-animation 4s ease-in-out infinite;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: radial-gradient(circle at 75% 30%,white 5px,rgb(255, 106, 0) 8%,rgb(169, 187, 2) 60%,rgb(255, 4, 0) 100%);
  box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
  inset 88px 0 60px #fedbc2, inset -20px -60px 100px #fde9ea,
  inset 0 50px 140px #fde9ea, 0 0 90px #fff;
}


@keyframes ball-animation{
  0%{
    transform: scale(1);
    right: 40px;
  }

  50% {
    transform: scale(1.1);
    right: 80px;
  }
  100%{
    transform: scale(1);
    right: 40px;
  }
}

.c-tab{
  box-sizing: border-box;
  width: 12rem;
  padding: 2px;
  height: 44px;
  line-height: 44px;
  border-radius: 100px;
}
.el-button{
  height: 50px;
  font-size: large;
  border-radius: 10px;
}
</style>

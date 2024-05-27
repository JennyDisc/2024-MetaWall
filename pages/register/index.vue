<script setup lang="ts">
import { ref } from 'vue';

const isErrorVisible = ref(false)

const userLogin = () => {}
</script>

<template>
  <div class="register mx-auto mt-[213px] w-[869px] border-2 border-black1 bg-gray1">
    <ul class="flex justify-between px-12 py-[70px]">
      <li class="my-auto mr-[49px]">
        <img src="~/assets/images/img.svg" alt="icon" />
      </li>
      <li class="w-[374px]">
        <h1 class="text-center text-6xl leading-[84px] text-blue1">MetaWall</h1>
        <h2 class="mb-9 text-center text-2xl font-bold leading-[29px] text-black1">註冊</h2>
        <form class="mb-4">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="暱稱"
            class="mb-4 w-full border border-2 border-black1 py-4 pl-6 leading-[19px] text-black1 placeholder-gray4"
            required
          />
          <!-- <p class="text-sm text-red1 mb-4">暱稱至少 2 個字元以上</p> -->
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            class="mb-4 w-full border border-2 border-black1 py-4 pl-6 leading-[19px] text-black1 placeholder-gray4"
            required
          />
          <!-- <p class="text-sm text-red1 mb-4">帳號已被註冊，請替換新的 Email！</p> -->
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            class="mb-8 w-full border border-2 border-black1 py-4 pl-6 leading-[19px] text-black1 placeholder-gray4"
            required
          />
          <!-- input取消向下推mb-8 -->
          <!-- <p class="text-sm text-red1 mb-4">密碼需至少 8 碼以上，並中英混合</p> -->
          <!-- 向下推32px -->
          <button
            class="w-full rounded-lg border-2 border-black1 bg-blue1 py-4 leading-[19px] text-white"
            @click="userLogin"
          >
            註冊
          </button>
        </form>
        <div class="login text-center">
          <NuxtLink to="/login" class="leading-[19px] text-black1">登入</NuxtLink>
          <!-- <a href="#" class="leading-[19px] text-black1">登入</a> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100..900&family=Paytone+One&display=swap');

h1 {
  font-family: 'Paytone One', sans-serif;
  font-weight: 400;
  font-style: normal;
}

input,
.login {
  font-family: 'Azeret Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

button {
  font-family: 'Azeret Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  box-shadow: -2px 2px 0px #03438d;
}

.register {
  box-shadow: -8px 8px 0px #00040029;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const isErrorVisible = ref(false)

const userLogin = () => {}
</script>

<template>
  <div class="login mx-auto mt-[213px] w-[869px] border-2 border-black1 bg-gray1">
    <ul class="flex justify-between px-12 py-[70px]">
      <li class="my-auto mr-[49px]">
        <img src="~/assets/images/img.svg" alt="icon" />
      </li>
      <li class="w-[374px]">
        <h1 class="text-center text-6xl leading-[84px] text-blue1">MetaWall</h1>
        <h2 class="mb-9 text-center text-2xl font-bold leading-[29px] text-black1">
          到元宇宙展開全新社交圈
        </h2>
        <form class="mb-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            class="mb-4 w-full border border-2 border-black1 py-4 pl-6 leading-[19px] text-black1 placeholder-gray4"
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            class="mb-8 w-full border border-2 border-black1 py-4 pl-6 leading-[19px] text-black1 placeholder-gray4"
            required
          />
          <p class="text-red1 mb-4 text-center text-sm">帳號或密碼錯誤，請重新輸入！</p>
          <button
            class="w-full rounded-lg border-2 border-black1 bg-blue1 py-4 leading-[19px] text-white"
            @click="userLogin"
          >
            登入
          </button>
        </form>
        <div class="register text-center">
          <NuxtLink to="/register" class="leading-[19px] text-black1">註冊帳號</NuxtLink>
          <!-- <a href="#" class="leading-[19px] text-black1">註冊帳號</a> -->
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
.register {
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

.login {
  box-shadow: -8px 8px 0px #00040029;
}
</style>

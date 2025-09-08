<template>
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            v-model="email"
            required
          />
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            v-model="password"
            required
          />
          <input class="formControls_btnSubmit" type="button" @click="handleLogin" value="登入" />
          <a href="#signUpPage"></a>
          <router-link class="formControls_btnLink" to="/signup">註冊帳號 </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../untils/api.js'

const router = useRouter()

const email = ref('test123@gamil.com')
const password = ref('')

const handleLogin = async () => {
  try {
    const response = await login(email.value, password.value)
    const { token, exp } = response.data
    document.cookie = `vue3-todolist-token=${token}; expires=${exp}`
    alert('登入成功')
    router.push('/todolist')
  } catch (error) {
    alert(`發生錯誤: ${error.response.data.message}`)
  }
}
</script>

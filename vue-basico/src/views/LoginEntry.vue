<template>
  <div class="box-login">
    <div class="logo">
      <h1>{{ mensagem }}</h1>
    </div>
    <InputLogin label="E-mail" type="email" placeholder="exemplo@gmail.com">
    </InputLogin>
    <br />
    <InputLogin label="Senha" type="password" placeholder="123456"> </InputLogin
    ><br />
    <CustomButton 
    value="ENTRAR" 
    :callback="() => disparar()"> </CustomButton>
  </div>
</template>

<script>
import InputLogin from "@/components/input/InputLogin.vue";
import CustomButton from "@/components/button/CustomButton.vue";

export default {
  name: "LoginEntry",
  components: {
    InputLogin,
    CustomButton,
  },
  data() {
    return {
      mensagem: "Login",
    };
  },
  methods: {
    disparar() {
      alert("Fui clicado!");
    },
  },
};
</script>

<style scoped>
.box-login {
  width: 300px;
  height: 400px;
  margin: auto;
  margin-top: 70px;
  border: 1px solid var(--primary-color);
  padding: 20px;
}

.logo {
  color: var(--primary-color);
  text-align: center;
}
</style>

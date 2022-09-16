<template>
  <div class="box-login">
    <div class="logo">
      <h1>{{ mensagem }}</h1>
    </div>
    <InputLogin
      label="E-mail"
      type="email"
      placeholder="exemplo@gmail.com"
      v-model="usuario.email"
    >
    </InputLogin>
    <br />
    <InputLogin
      label="Senha"
      type="password"
      placeholder="ahsgd123%"
      v-model="usuario.senha"
    >
    </InputLogin>
    <br />

    <CustomButton value="ENTRAR" :callback="() => login()"> </CustomButton>
  </div>
</template>

<script>
import InputLogin from "@/components/input/InputLogin.vue";
import CustomButton from "@/components/button/CustomButton.vue";
import User from "../models/User";
import userService from "../services/user-service";
import Storage from '../utils/storage';

export default {
  name: "LoginEntry",
  components: {
    InputLogin,
    CustomButton,
  },
  data() {
    return {
      mensagem: "Login",
      usuario: new User(),
    };
  },
  methods: {
    login() {
      if (!this.usuario.validUserLoginModel()) {
        this.$swal({
          icon: "warning",
          title: "Email e senha são obrigatórios.",
          confirmButtonColor: "#FF3D00",
          animate: true,
        });

        return;
      }

      userService.login(this.usuario.email, this.usuario.senha)
        .then((response) => {
          this.usuario = new User(response.data.usuario);

          Storage.saveUserInLocalStorage(this.usuario);
          Storage.saveTokenInStorage(response.data.token);

          this.$router.push({name: 'ProductControl'})
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push({ name: "ProductControl" });
    },
    recebendoValor(valor) {
      alert(valor);
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
  font-size: 22px;
}
</style>

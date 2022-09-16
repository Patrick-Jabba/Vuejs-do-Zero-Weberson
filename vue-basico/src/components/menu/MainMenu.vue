<template>
  <ul class="menu">
    <li>
      <a @click="() => this.$router.push({ path: '/' })">Dashboard</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/product-control' })"
        >Produtos</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/client-control' })"
        >Clientes</a
      >
    </li>
    <li>
      <a @click="logout">Logout</a>
    </li>
  </ul>
</template>

<script>
import Storage from "../../utils/storage";
import userService from "../../services/user-service";

export default {
  name: "MainMenu",
  data() {
    return {};
  },
  methods: {
    logout() {
      userService
        .logout()
        .then(() => {
          Storage.removeUserFromStorage();
          Storage.removeTokenFromStorage();
          this.$swal({
            icon: "success",
            title: "Logout efetuado com sucesso!",
            confirmButtonColor: "#FF3D00",
          });
          this.$router.push({ path: "/login" });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Erro ao efetuar logout, tente novamente.",
            animate: true,
          });
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--primary-color);
}

li {
  float: left;
}

li:first-child {
  margin-left: 40px;
}

li:last-child {
  float: right;
  margin-right: 10px;
}

ul.menu li a {
  display: block;
  color: #fff;
  padding: 15px 17px;
  text-decoration: none;
  text-align: center;
}

li a:hover {
  background-color: var(--secondary-color);
  cursor: pointer;
}
</style>
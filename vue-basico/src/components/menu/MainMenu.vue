<template>
  <ul>
    <li>
      <a @click="() => this.$router.push({path:'/'})">Dashboard</a>
    </li>
    <li>
      <a @click="() => this.$router.push({path:'/product-control'})">Produtos</a>
    </li>
    <li>
      <a @click="() => this.$router.push({path:'/client-control'})">Clientes</a>
    </li>
    <li>
      <a @click="() => this.$router.push({path:'/login'})">Logout</a>
    </li>
  </ul>
</template>

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

li a {
  display: block;
  color: #fff;
  padding: 15px 17px;
  text-decoration: none;
  text-align: center;
}

li a:hover{
  background-color:var(--secondary-color);
  cursor: pointer;
}

</style>
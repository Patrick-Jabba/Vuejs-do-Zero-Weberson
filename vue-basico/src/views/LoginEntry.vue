<template>
  <div class="box-login">
    <h1>{{mensagem}}</h1>
  </div>
</template>

<script>
export default {
  name: 'LoginEntry',
  data(){
    return {
      mensagem: 'Tela de Login',
    }
  }
}
</script>

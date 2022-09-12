<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">{{ mensagem }}</h2>
        <hr>
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <CustomButton value="Adicionar"></CustomButton>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Data de Cadastro</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

  </div>
</template>

<script>
import CustomButton from "../components/button/CustomButton.vue";

export default {
  name: "ProductControl",
  components: { CustomButton },
  data() {
    return {
      mensagem: "Produtos",
    };
  },
  methods: {
    getAllProducts() {
        alert('Fui chamado!')
    }
  }
};
</script>

<style scoped>
</style>


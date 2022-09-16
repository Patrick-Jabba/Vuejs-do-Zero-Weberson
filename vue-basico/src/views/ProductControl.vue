<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">{{ mensagem }}</h2>
        <hr />
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <CustomButton :callback="addProduct" value="Adicionar"></CustomButton>
      </div>
      <div class="col-sm-10">
        <a @click="goToListInCard" class="float-right card-list"
          >Ver a listagem em cards</a
        >
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.valor | real }}</td>
              <td>{{ item.dataCadastro | dataFilter }}</td>
              <td>
                <i
                  @click="editProduct(item)"
                  class="fas fa-pencil-alt table-icons"
                ></i>
                <i
                  @click="deleteProduct(item)"
                  class="fas fa-trash-alt table-icons"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/button/CustomButton.vue";
import MixinProduct from "../mixins/produto-mixin";

export default {
  name: "ProductControl",
  mixins: [MixinProduct],
  components: { CustomButton },
  data() {
    return {
      mensagem: "Produtos",
    };
  },
  methods: {
    addProduct() {
      this.$router.push({ name: "New Product" });
    },

    goToListInCard() {
      this.$router.push({ name: "ProductListCard" });
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.table-icons,
.card-list {
  margin: 5px;
  cursor: pointer;
  color: var(--primary-color);
}

.card-list {
  margin-top: 25px;
}
</style>


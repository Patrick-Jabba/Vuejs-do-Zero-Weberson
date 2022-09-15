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
import produtoService from "../services/product-service";
import Produto from "../models/Product";
import dateConversor from "../utils/conversor-data";
import conversorCoin from "../utils/conversor-coin";

export default {
  name: "ProductControl",
  components: { CustomButton },
  filters: {
    dataFilter(data) {
      return dateConversor.dateToISO(data);
    },
    real(valor) {
      return conversorCoin.toCustomReal(valor);
    },
  },
  data() {
    return {
      produtos: [],
      mensagem: "Produtos",
    };
  },
  methods: {
    addProduct() {
      this.$router.push({ name: "New Product" });
    },
    editProduct(item) {
      this.$router.push({ name: "Edit Product", params: { id: item.id } });
    },
    deleteProduct(item) {
      this.$swal({
        title: "Deseja excluir o produto?",
        text: `Código ${item.id} - Nome ${item.nome}`,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#FF3D00",
        animate: true,
        icon: "question",
      }).then((result) => {
        if (result.isConfirmed) {
          produtoService
            .deleteProduct(item.id)
            .then(() => {
              let index = this.produtos.findIndex(
                (produto) => item.id === produto.id
              );
              this.produtos.splice(index, 1);

              this.$swal({
                icon: "success",
                title: "Produto excluído com sucesso!",
                confirmButtonColor: "#FF3D00",
                animate: true,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },

    getAllProducts() {
      produtoService
        .getAllProducts()
        .then((response) => {
          let produtos = response.data.map((p) => new Produto(p));

          this.produtos = produtos.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.table-icons {
  margin: 5px;
  cursor: pointer;
  color: var(--primary-color);
}
</style>


<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">
          {{ modoCadastro ? "Adicionar Produto" : "Editar Produto" }}
        </h1>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input
            id="id"
            v-model="produto.id"
            type="text"
            disabled
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="produto.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input
            id="quantidade"
            v-model="produto.quantidadeEstoque"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            id="valor"
            v-model="produto.valor"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="data-cadastro">Data Cadastro</label>
          <input
            id="data-cadastro"
            v-model="produto.dataCadastro"
            type="date"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-12">
        <div class="form-group">
          <label for="observacao">Observação</label>
          <textarea
            rows="4"
            id="observacao"
            v-model="produto.observacao"
            type="date"
            class="form-control"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>

      <div class="col-sm-12">
        <div v-show="modoCadastro" class="form-check-inline">
          <label class="form-check-label">
            <input
              v-model="continuarAdicionando"
              type="checkbox"
              class="form-check-input"
              value=""
            />
            Continuar adicionando
          </label>
        </div>

        <button @click="saveProduct" class="btn btn-primary float-right">
          Salvar
        </button>
        <button @click="cancelAction" class="btn btn-default float-right mr-2">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/models/Product";
import produtoService from "../services/product-service";
import conversorData from "@/utils/conversor-data";

export default {
  name: "ProductsAdd",
  data() {
    return {
      produto: new Product(),
      modoCadastro: true,
      continuarAdicionando: false,
    };
  },
  mounted() {
    let id = this.$route.params.id;

    if (!id) return;

    this.modoCadastro = false;
    this.getProductById(id);
  },
  methods: {
    getProductById(id) {
      produtoService
        .getProductById(id)
        .then((response) => {
          this.produto = new Product(response.data);
        })
        .catch((error) => {
          this.$swal({
          icon: 'error',
          title:"Não foi possível obter o produto pelo id, tente novamente mais tarde!",
          confirmButtonColor: '#FF3D00',
          animate: true, 
        });
          console.log(error);
        });
    },

    registerProduct() {
      if (!this.produto.validModelToRegister()) {
        this.$swal({
          icon: 'warning',
          title:"O nome do produto é obrigatório para cadastro!",
          confirmButtonColor: '#FF3D00',
          animate: true, 
        })
        return;
      }

      this.produto.dataCadastro = conversorData.dateToISOEUA(
        this.produto.dataCadastro
      );

      produtoService
        .createProduct(this.produto)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Produto cadastrado com sucesso!",
            confirmButtonColor: '#FF3D00',
            animate: true,
          });
          this.produto = new Product();

          if (!this.continuarAdicionando) {
            this.$router.push({ name: "ProductControl" });
          }
        })
        .catch((error) => {
          this.$swal({
          icon: 'error',
          title:"Não foi possível cadastrar o produto!",
          confirmButtonColor: '#FF3D00',
          animate: true, 
        });
          console.log(error);
        });
    },

    updateProduct() {
      if (!this.produto.validModelToUpdate()) {
        this.$swal({
          icon: 'warning',
          title:"O código e o nome do produto são obrigatórios para o cadastro!",
          confirmButtonColor: '#FF3D00',
          animate: true, 
        })
      }

      this.produto.dataCadastro = conversorData.dateToISOEUA(
        this.produto.dataCadastro
      );

      produtoService
        .updateProduct(this.produto)
        .then(() => {
          this.$swal({
          icon: 'success',
          title:"Produto atualizado com sucesso!",
          confirmButtonColor: '#FF3D00',
          animate: true, 
        })
          this.$router.push({ name: "ProductControl" });
        })
        .catch((error) => {
          this.$swal({
          icon: 'error',
          title:"Não foi possível atualizar o produto!",
          confirmButtonColor: '#FF3D00',
          animate: true, 
        });
        console.log(error)
        });
    },

    saveProduct() {
      this.modoCadastro ? this.registerProduct() : this.updateProduct();
    },

    cancelAction() {
      this.produto = new Product();
      this.$router.push({ name: "ProductControl" });
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
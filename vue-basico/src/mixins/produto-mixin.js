import produtoService from "../services/product-service";
import Produto from "../models/Product";
import dateConversor from "../utils/conversor-data";
import conversorCoin from "../utils/conversor-coin";

let MixinProduct = {
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

    }
  },

  mounted() {
    this.getAllProducts();
  },

  methods: {
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
  }
}

export default MixinProduct;
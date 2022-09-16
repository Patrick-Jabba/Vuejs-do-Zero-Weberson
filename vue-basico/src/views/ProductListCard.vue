<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Cards de Produtos</h1>
        <hr />
      </div>

      <div class="row mt-3">
        <div v-for="produto in produtos" :key="produto.id">
          <CardModel>
            <template v-slot:nome> <span>{{produto.nome}}</span> </template>
            <template v-slot:valor> <span>{{produto.valor | real}}</span> </template>
            <template v-slot:observacao>
              <span>{{produto.observacao}}</span>
            </template>
            <template v-slot:acoes>
              <span>
                <i
                  @click="editProduct(produto)"
                  class="fas fa-pencil-alt table-icons"
                ></i>
                <i
                  @click="deleteProduct(produto)"
                  class="fas fa-trash-alt table-icons"
                ></i>
              </span>
            </template>
          </CardModel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardModel from "../components/card/CardModel.vue";
import MixinProduct from "../mixins/produto-mixin";

export default {
  name: "ProductListCard",
  mixins: [MixinProduct],
  components: {
    CardModel,
  },

  data() {
    return {};
  },
};
</script>
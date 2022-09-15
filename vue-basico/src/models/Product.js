import dataMask from '../utils/conversor-data';

export default class Product {
    constructor(obj) {
        obj = obj || {};

        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor || 0;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro && dataMask.euaDatePatternToISO(obj.dataCadastro);
        this.observacao = obj.observacao;
    }
    validModelToRegister() {
        return !!this.nome;
    }

    validModelToUpdate() {
        return !!(this.nome && this.id);
    }
}


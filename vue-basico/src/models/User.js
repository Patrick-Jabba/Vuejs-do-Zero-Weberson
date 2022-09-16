import Profile from './Profile';

export default class User {
  constructor(obj) {
    obj = obj || {};

    this.id = obj.id;
    this.nome = obj.nome;
    this.email = obj.email;
    this.senha = obj.senha;
    this.foto = obj.foto;
    this.perfil = new Profile(obj.perfil);
    this.dataCadastro = obj.dataCadastro;
  }

  validUserLoginModel() {
    return !!(this.email && this.senha);
  }
}
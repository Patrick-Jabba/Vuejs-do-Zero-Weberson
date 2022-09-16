export default class Profile {
  constructor(obj) {
    obj = obj || {};

    this.id = obj.id;
    this.descricao = obj.descricao;
  }
}
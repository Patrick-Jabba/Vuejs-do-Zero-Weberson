import User from "@/models/User";

function saveUserInLocalStorage(usuario){
  let usuarioString = JSON.stringify(usuario);
  localStorage.setItem('usuario', usuarioString);
}

function getUserFromLocalStorage(){
  let usuarioString = localStorage.getItem('usuario');
  return new User(JSON.parse(usuarioString));
}

function saveTokenInStorage(token){
  localStorage.setItem('token', token);
}

function getTokenFromStorage(){
  return localStorage.getItem('token');
}

function removeUserFromStorage(){
  localStorage.removeItem('usuario');
}

function removeTokenFromStorage(){
  localStorage.removeItem('token');
}

export default {
  saveUserInLocalStorage,
  getUserFromLocalStorage,
  saveTokenInStorage,
  getTokenFromStorage,
  removeUserFromStorage,
  removeTokenFromStorage
}

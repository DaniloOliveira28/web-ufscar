import { Connection } from './Connection';

/*
 * O firebase tem várias formas autenticação de usuário. Para o myHome,
 * selecionamos a forma de autenticação integrada com o Google Account.
 */
export function login(dispatch) {

  var user = Connection.firebase().auth.currentUser;
  console.log('xxx_currentUser', user)
  if (!user) {
    Connection.firebase().auth.signInWithPopup(Connection.firebase().googleProvider);
    Connection.firebase().auth.onAuthStateChanged(dispatch);
  }
}

/**
 * Sair da aplicação.
 */
export function logout() {
  Connection.firebase().auth.signOut();
}

/**
 * Salvar o perfil do usuário
 */
export function saveUser(user) {
  const newUser = {
    uid: Connection.firebase().auth.currentUser.uid,
    name: user.name,
    surname: user.surname,
    email: user.email
  };

  // Obter a chave para um novo usuário.
  var newUserKey = Connection.firebase()
    .database.ref().child('users').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/users/' + newUserKey] = newUser;
  return Connection.firebase().database.ref().update(updates);
}

/**
 * Salvar o imóvel para locação
 */
export function saveProperty(property) {
  const newProperty = {
    address: property.address,
    city: property.city,
    country: property.country,
    description: property.description,
    user: property.user
  };

  // Obter a chave para um novo usuário.
  var newPropertyKey = Connection.firebase()
    .database.ref().child('properties').push().key;

  var updates = {};
  updates['/properties/' + newPropertyKey] = newProperty;
  return Connection.firebase().database.ref().update(updates);
}

/**
 * Filtrar as propriedades disponíveis para locação.
 */
export function filterProperties(filter) {
  let query = Connection.firebase().database.ref('properties/')
    .orderByChild('city').equalTo(filter);
  return query.once('value');
}

import { firebase } from "./FirebaseConfig";
const googleAuth = () => {
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(() => {
      console.log(`Se ha iniciado sesión`);
    })
    .catch((Error) => {
      console.log(`Se ha presentado un error al inicio de sesión`);
    });
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log(`El usuario ha cerrado sesión`, 5);
    })
    .catch((Error) => {
      console.log(`Se ha presentado un Error ${Error}`, 5);
    });
};

export { logout, googleAuth };

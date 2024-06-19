// firebaseAuth.js
import { auth, googleProvider, db } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const signInOrSignUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Comprueba si el documento del usuario ya existe
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // Guarda la información del usuario en Firestore solo si no existe
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL
      });
    }

    return user; // Devuelve el usuario para cualquier uso adicional que puedas necesitar
  } catch (error) {
    console.error("Error al iniciar sesión con Google", error);
    throw error;
  }
};

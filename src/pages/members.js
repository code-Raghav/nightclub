import { auth, db } from "../../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import NavBarCustom from "components/NavBarCustom";

export default function Members() {
  //BACKEND
  const [user, setUser] = useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  const phoneRetrieve = async () => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      if (!docSnap.data().phoneNumber) {
        Router.replace("/Profile");
      } else {
        console.log("Phone number exists: " + docSnap.data().phoneNumber);
      }
    }
  };

  useEffect(() => {
    phoneRetrieve();
  }, [user]);

  return (
    <div id="members">
      <Head>
        <title>Members Area</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBarCustom back="/" />
        <div className=" h-screen flex items-center justify-center gap-3">
          {!user && <button onClick={login}>Login</button>}
          {user ? "Welcome " + user.displayName : ""}
          <div>
            {user && <button onClick={() => auth.signOut()}>Signout</button>}
          </div>
          <Link href="/Profile">Profile</Link>
        </div>
      </main>
    </div>
  );
}

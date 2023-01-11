import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import {FcGoogle} from "react-icons/fc"
import { toast } from 'react-toastify';
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // lista de usuarios en database

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("No se pudo autorizar con Google");
    }
  }
  return (
    <button 
        type="button" 
        onClick={onGoogleClick}
        className='flex 
        items-center
        justify-center 
        w-full
        bg-red-700 
        text-white
        px-7 py-3
        uppercase
        text-sm font-medium
        hover:bg-red-800
        active:bg-red-900
        rounded
        shadow-xl 
        hover:shadow-lg
        active:shadow-xl
        transition duration-150 
        ease-in-out'>
            <FcGoogle 
                className='text-2xl
                bg-white
                rounded-full mr-2'/>
            Continuar con Google
    </button>
  );
}

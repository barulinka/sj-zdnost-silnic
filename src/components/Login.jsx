// src/components/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Přihlášeno!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Přihlášeno přes Google!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h3>Přihlášení</h3>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Heslo" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleEmailLogin}>Přihlásit se</button>
      <button onClick={handleGoogleLogin}>Google login</button>
    </div>
  );
}

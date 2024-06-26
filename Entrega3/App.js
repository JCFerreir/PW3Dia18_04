import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './App.css'


// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGFc8_2dV6pNQJeXiUM9qQEocpbwLQlZg",
  authDomain: "dia18-04.firebaseapp.com",
  projectId: "dia18-04",
  storageBucket: "dia18-04.appspot.com",
  messagingSenderId: "50463218640",
  appId: "1:50463218640:web:3e5f65ad1212b0164577d5",
  measurementId: "G-FZ4080JYSJ"
};

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth()

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const sair = async ()=>{
    try {
      auth.signOut();
      setUser(null);
    } catch (err) {
      console.error('erro', err);
    }
  }


  return (
    <div id="container">
      <h1>Firebase Authentication</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div id="buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleGoogleLogin}>Login com Google</button>
        <button id="btnSair" onClick={sair}>Sair</button>
      </div>
      {error && <p>{error}</p>}
      {user && (
        <div id="dados">
          <h2>Dados do Usuário:</h2>
          <p>Nome: {user.displayName || 'Não fornecido'}</p>
          <p>Email: {user.email}</p>
          <p>ID do Usuário: {user.uid}</p>
        </div>
      )}
    </div>
  );
}


export default App;


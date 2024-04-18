import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // alterado aqui
import 'firebase/compat/auth'; // alterado aqui

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
      window.location.href = "https://www.apple.com/br/store?afid=p238%7CsikJb1MHC-dc_mtid_1870765e38482_pcrid_694142907796_pgrid_17049243418_pntwk_g_pchan__pexid__&cid=aos-br-kwgo-brand--slid---product-";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;


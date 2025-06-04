"use client";

import React, { useState } from "react";
import TokenService from "../services/TokenService";

const TokenTester = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleGetToken = async () => {
    setError("");
    setToken("");
    try {
      const obtainedToken = await TokenService.fetchToken(username, password);
      setToken(obtainedToken);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClearToken = () => {
    TokenService.clearToken();
    setToken("");
    setError("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Prueba de Obtención de Token</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
      />
      <br />
      <button
        onClick={handleGetToken}
        style={{ marginRight: "10px", padding: "5px 10px" }}
      >
        Obtener Token
      </button>
      <button onClick={handleClearToken} style={{ padding: "5px 10px" }}>
        Limpiar Token
      </button>

      {token && (
        <div
          style={{ marginTop: "20px", wordBreak: "break-all", color: "green" }}
        >
          <strong>Token obtenido:</strong>
          <br />
          {token}
        </div>
      )}
      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default TokenTester;

// import React, { useState } from 'react';
// import TokenService from '../services/TokenService';

// const TokenTester = () => {
//     const [mensaje, setMensaje] = useState('');

//     const username = 'sysdev';
//     const password = '$MasterDev1972*';

//     const generarToken = async () => {
//         setMensaje('Generando token...');
//         try {
//             const token = await TokenService.fetchToken(username, password);
//             localStorage.setItem('token-socket', token);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const borrarToken = () => {
//         localStorage.removeItem('token-socket');
//     };

//     return (
//         <div style={{ marginTop: '20px' }}>
//             <button onClick={generarToken} style={{ marginRight: '10px', padding: '8px 16px' }}>
//                 Generar Token
//             </button>
//             <button onClick={borrarToken} style={{ padding: '8px 16px' }}>
//                 Borrar Token
//             </button>
//             <p style={{ marginTop: '10px' }}>{mensaje}</p>
//         </div>
//     );
// };

// export default TokenTester;

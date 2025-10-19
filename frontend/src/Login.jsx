import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ onShowRegister }) => {
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    contraseña: '',
    id_cargo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Enviando datos:', formData);
      const response = await axios.post('http://localhost:49146', formData);
      console.log('Login exitoso:', response.data);
      alert('¡Login exitoso!');
    } catch (error) {
      console.error('Error en login:', error);
      alert('Error en login: ' + (error.response?.data?.mensaje || error.message));
    }
  };

  return (
    <div className="form-container">
      {/* ✅ SOLO UN FORM - Eliminé el form duplicado */}
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Iniciar Sesión</p>
        
        {/* ❌ ELIMINÉ ESTA LÍNEA: <form class="form"></form> */}
        
        <div className="input-group">
          <input 
            type="text" 
            name="nombre_usuario"
            placeholder="Usuario"
            value={formData.nombre_usuario}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <input 
            type="password" 
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
            <label htmlFor="id_cargo">ID Cargo</label>
            <input
              type="number"
              id="id_cargo"
              name="id_cargo"
              value={formData.id_cargo}
              onChange={handleChange}
              placeholder="Ej: 1, 2, 3..."
              required
            />
          </div>
        
        <button type="submit" className="submit-button">Ingresar</button>
        
        <div className="signup-link">
          <a href="#" onClick={onShowRegister}>¿No tienes cuenta? Regístrate</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    nombre_usuario: '',
    correo: '',
    contraseña: ''
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
      console.log('Registrando usuario:', formData);
      const response = await axios.post('/api/usuario', formData);
      console.log('Registro exitoso:', response.data);
      alert('¡Registro exitoso! Revisa tu correo para el código QR');
    } catch (error) {
      console.error('Error en registro:', error);
      alert('Error en registro: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Crear Cuenta</h2>
        
        <div className="input-row">
          <div className="input-group">
            <input 
              type="text" 
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          <div className="input-group">
            <input 
              type="text" 
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </div>

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
            type="email" 
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
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
        
        <button type="submit" className="register-button">Registrarse</button>
        
        <div className="login-link">
          <a href="#" onClick={() => window.location.href = '/login'}>¿Ya tienes cuenta? Inicia Sesión</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
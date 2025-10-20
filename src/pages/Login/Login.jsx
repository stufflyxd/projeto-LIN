import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '100vh' }}>
      <div 
        className="card shadow-lg bg-white p-4" 
        style={{ width: '380px', borderRadius: '15px' }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Acessar conta</h2>

        <form>
          {/* Email */}
          <div className="form-floating mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              placeholder="name@example.com" 
            />
            <label htmlFor="inputEmail">Email</label>
          </div>

          {/* Senha */}
          <div className="form-floating mb-2">
            <input 
              type="password" 
              className="form-control" 
              id="inputSenha" 
              placeholder="Senha"
            />
            <label htmlFor="inputSenha">Senha</label>
          </div>

          {/* Esqueceu senha */}
          <div className="text-end mb-3">
            <a href="#" className="text-decoration-none small text-primary">
              Esqueceu sua senha?
            </a>
          </div>

          {/* Lembrar de mim */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label small" htmlFor="check">
              Lembrar de mim
            </label>
          </div>

          {/* Botão */}
          <button 
            type="button" 
            className="btn btn-primary w-100 fw-semibold shadow-sm"
          >
            Entrar
          </button>

          {/* Registrar */}
          <div className="text-center mt-4">
            <small>
              Não tem conta?{' '}
              <Link to="/register" className="text-decoration-none fw-semibold text-primary">
                Registre-se
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

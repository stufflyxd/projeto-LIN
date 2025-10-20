import React from 'react';

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
      
      <div className='card bg-secondary p-3' style={{width: '400px'}}>

        <h1>Login</h1>

    <form className>
  <div className="form-group">
      <label htmlFor="inputEmail">Email</label>
      <input type="text" className='form-control' id='inputEmail'/>
  </div>
  
  <div className="form-group pt-2 pb-2">
     <label htmlFor="inputSenha">Senha</label>
      <input type="password" className='form-control' id='inputSenha'/>
      <a href="#" className='form-text text-white'>Esqueceu sua senha?</a>
  </div>

  <div className="form-group form-check">
    <input type="checkbox" className='form-check-input' id='check'/>
    <label className='form-check-label' htmlFor="check">Lembrar de mim</label>
  </div>


  <div className='d-flex justify-content-center align-items-center'>
  <button type="button" className='btn btn-primary mt-4' style={{width: "100%"}}>Entrar</button>
  </div>

  <div className='d-flex justify-content-center align-items-center pt-1'>
    <small>Não tem conta?<a href="" className='text-white p-1'>Registre-se</a></small>
    
  </div>
    </form>
    </div>
    </div>
  )
}

export default Login
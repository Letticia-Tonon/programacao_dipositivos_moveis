import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import medico from './images/medico.jpg'

const caminhoDaFoto = process.env.PUBLIC_URL;
const urlFoto = caminhoDaFoto +'/medica.jpg';

//nome medicos em objeto JSON:
const profissional1 = "José da Silva";
const profissional2 = "Maria da Silva";
const profissional3 = "Jaqueline Mendes";

const App= () =>{
  /*elemento 1: */
  return <div style={{margin: 'auto', width: '768px', backgroundColor:'#EEE', padding:'12px', borderRadius:'5px'}}>
    <label style={{display: 'block', marginBottom: 10, textAlign: 'center', fontWeight: 'bold' }}>Profissionais de saúde</label> 
    <div style={{margin: 'auto', backgroundColor: '#EEE', paddingInline:20, borderRadius: 5, marginBottom: 2,border: '1px solid lightgrey'}}>
      <div className='profissionais'>
        <img src={medico} alt="médico 1" />
        <p>{profissional1}</p>
      </div>

      <div className="profissionais">
        <img src={urlFoto} alt="médica 2" />
        <p>{profissional2}</p>
      </div>

      <div className="profissionais">
        <img src="https://img.freepik.com/fotos-gratis/enfermeira-negra-em-seu-espaco-de-trabalho_52683-100580.jpg?t=st=1709649081~exp=1709652681~hmac=d3cdb38269540a8d936a1210bef3c2eb1ba6781f04c7342f7e360454cd011da2&w=900"alt="médica 3" />
        <p>{profissional3}</p>
      </div>
    </div>
  </div>
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
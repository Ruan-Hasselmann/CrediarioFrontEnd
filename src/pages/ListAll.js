import React from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

import './ListAll.css';

const url = "http://localhost:8080/clientes";

const ListAll = () => {

  const [clientes, setClientes] = useState([{
    cpf: "",
    nome: "",
    rg: "",
    telefone: "",
    vendedor: "",
    endereco: {
      bairro: "",
      cep: "",
      cidade: "",
      complemento: "",
      estado: "",
      logradouro: "",
      numero: ""
    },
    pagamento: {
      dataProximo: "",
      entrada: "",
      formaPagamento: "",
      restante: "",
      tipoPagamento: "",
      total: "",
      totalPago: ""
    }
  }])

  const { dados: clients, httpConfig, loading, error } = useFetch(url);

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div>
      <h1>Lista todos os clientes</h1>
      {loading && <h2>Carregando dados ...</h2>}
      {error && <h2>{error}</h2>}
      {!error && (
        <ul className='clientes'>
          {clients && clients.map((cliente) => (
            <li className='user' key={cliente.id}>
              <p>{cliente.nome} - {cliente.cpf}</p>
              <button onClick={() => handleRemove(cliente.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListAll
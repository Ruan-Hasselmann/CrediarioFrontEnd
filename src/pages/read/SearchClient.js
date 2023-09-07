import React from 'react'
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Modal from '../../components/Modal';
import { InputField } from '../../components/Field';

import './SearchClient.css';

let url = "http://localhost:8080/clientes";

const SearchClient = () => {
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const [clientes, setClientes] = useState([{
    cpf: "",
    nome: "",
    rg: "",
    status: "",
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

  function deleteConfirm(id) {
    const confirm = window.confirm("Tem certeza que deseja excluir?");
    if (confirm === true) {
      handleRemove(id);
    }
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  function searchClient(dado) {
    setData(dado);
  }

  const handleSearch = async (data) => {
    httpConfig(data, "GET");
  }

  const handleRegister = (id) => {

  }

  const handleEdit = (id) => {

  }

  const detalheEndereco = (cliente) => {
    setSelectedClient(cliente);
    setIsModalOpen(true);
  };

  // const handleUpdate = (cliente) => {
  //   <Link to='/update'>update</Link>
  // }

  return (
    <div>
      <h1>Clientes</h1>
      <InputField
        label="Data Pagamento:"
        type="date"
        name="data"
        onChange={(e) => searchClient(e.target.value)}
      />
      <button onClick={() => handleSearch(data)}>Buscar</button>
      {loading && <h2>Carregando dados ...</h2>}
      {error && <h2>{error}</h2>}
      {!error && (
        <ul className='clientes'>
          {clients && clients.map((cliente) => (
            <><li className='user' key={cliente.id}>
              <p><b>Nome: </b> {cliente.nome}</p>
              <p><b>Cpf: </b>{cliente.cpf}</p>
              <p><b>Data pagamento: </b>{cliente.pagamento.dataProximo}</p>
              {!cliente.status && (
                <><p><b>Status: </b>Desativado</p></>
              )}
              <div className='button'>
                <button onClick={() => detalheEndereco(cliente)}>Exibir endereço</button>
                <button onClick={() => handleRegister(cliente.id)} class='pag'>Registrar pagamento</button>
                <button onClick={() => handleEdit(cliente.id)} class='edit'>Editar</button>
                <button onClick={() => deleteConfirm(cliente.id)} class='del'>Excluir</button>
              </div>
            </li><Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cliente={selectedClient} /></>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchClient
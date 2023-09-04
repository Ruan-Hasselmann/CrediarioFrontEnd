import React from 'react'
import { useState, useEffect } from 'react';

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
        }}])

    useEffect(() => {
  
      async function fetchData() {
        const res = await fetch(url);
  
        const data = await res.json();
  
        setClientes(data);
      }
      
      fetchData();
    }, []);

  return (
    <div>
        <ul>
            {clientes.map((cliente) => (
                <li key={cliente.id}>{cliente.id} - {cliente.nome} - {cliente.cpf}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListAll
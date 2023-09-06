import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch';

import './CreateClient.css';

const url = "http://localhost:8080/clientes";

const CreateClient = () => {

    const { dados: clients, httpConfig, loading, error } = useFetch(url);

    const [endereco, setEndereco] = useState([{
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        estado: "",
        logradouro: "",
        numero: ""
    }])

    const [pagamento, setPagamento] = useState([{
        dataProximo: "",
        entrada: "",
        formaPagamento: "",
        tipoPagamento: "",
        total: ""
    }])

    const [clientes, setClientes] = useState([{
        cpf: "",
        nome: "",
        rg: "",
        telefone: "",
        vendedor: "",
        endereco: endereco.useState,
        pagamento: pagamento.useState
    }])

    function atualizarNome(dado) {
        setClientes({ ...clientes, nome: dado });
    }

    function atualizarCpf(dado) {
        setClientes({ ...clientes, cpf: dado });
    }

    function atualizarRg(dado) {
        setClientes({ ...clientes, rg: dado });
    }

    function atualizarTelefone(dado) {
        setClientes({ ...clientes, telefone: dado });
    }

    function atualizarVendedor(dado) {
        setClientes({ ...clientes, vendedor: dado });
    }

    function atualizarBairro(dado) {
        setEndereco({ ...endereco, bairro: dado });
    }

    function atualizarCep(dado) {
        setEndereco({ ...endereco, cep: dado });
    }

    function atualizarCidade(dado) {
        setEndereco({ ...endereco, cidade: dado });
    }

    function atualizarComplemento(dado) {
        setEndereco({ ...endereco, complemento: dado });
    }

    function atualizarEstado(dado) {
        setEndereco({ ...endereco, estado: dado });
    }

    function atualizarLogradouro(dado) {
        setEndereco({ ...endereco, logradouro: dado });
    }

    function atualizarNumero(dado) {
        setEndereco({ ...endereco, numero: dado });
    }

    function atualizarDataProximo(dado) {
        setPagamento({ ...pagamento, dataProximo: dado });
    }

    function atualizarEntrada(dado) {
        setPagamento({ ...pagamento, entrada: dado });
    }

    function atualizarFormaPagamento(dado) {
        setPagamento({ ...pagamento, formaPagamento: dado });
    }

    function atualizarTipoPagamento(dado) {
        setPagamento({ ...pagamento, tipoPagamento: dado });
    }

    function atualizarTotal(dado) {
        setPagamento({ ...pagamento, total: dado });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const client = {
            cpf: clientes.cpf,
            nome: clientes.nome,
            rg: clientes.rg,
            telefone: clientes.telefone,
            vendedor: clientes.vendedor,
            endereco: endereco,
            pagamento: pagamento
        }

        httpConfig(client, "POST");

    };

    return (
        <div>
            <h1>Cadatrar novo cliente</h1>
            <div className='add-cliente'>
                {loading && <h2>Carregando dados ...</h2>}
                {error && <h2>{error}</h2>}
                {!error && !loading && (
                    <form onSubmit={handleSubmit}>
                        <label class="formulario">
                            Nome:
                            <input type="text" value={clientes.nome} name="nome" onChange={(e) => atualizarNome(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Cpf:
                            <input type="number" value={clientes.cpf} name="cpf" onChange={(e) => atualizarCpf(e.target.value)} />
                        </label>
                        <label class="formulario">
                            RG:
                            <input type="number" value={clientes.rg} name="cpf" onChange={(e) => atualizarRg(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Telefone:
                            <input type="number" value={clientes.telefone} name="cpf" onChange={(e) => atualizarTelefone(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Vendedor:
                            <select name="vendedor" onChange={(e) => atualizarVendedor(e.target.value)}>
                                <option value={clientes.vendedor}>Selecione...</option>
                                <option value={clientes.vendedor}>Carlos</option>
                                <option value={clientes.vendedor}>João</option>
                                <option value={clientes.vendedor}>Leandro</option>
                            </select>
                        </label>
                        <label class="formulario">
                            Bairro:
                            <input type="text" value={endereco.bairro} name="bairro" onChange={(e) => atualizarBairro(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Cep:
                            <input type="text" value={endereco.cep} name="cep" onChange={(e) => atualizarCep(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Cidade:
                            <input type="text" value={endereco.cidade} name="cidade" onChange={(e) => atualizarCidade(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Estado:
                            <input type="text" value={endereco.estado} name="estado" onChange={(e) => atualizarEstado(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Logradouro:
                            <input type="text" value={endereco.logradouro} name="logradouro" onChange={(e) => atualizarLogradouro(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Numero:
                            <input type="number" value={endereco.numero} name="numero" onChange={(e) => atualizarNumero(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Complemento:
                            <input type="text" value={endereco.complemento} name="complemento" onChange={(e) => atualizarComplemento(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Data Proximo Pagamento:
                            <input type="date" value={pagamento.dataProximo} name="dataProximo" onChange={(e) => atualizarDataProximo(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Entrada:
                            <input type="number" value={pagamento.entrada} name="entrada" onChange={(e) => atualizarEntrada(e.target.value)} />
                        </label>
                        <label class="formulario">
                            Forma de Pagamento:
                            <select name="formaPagamento" onChange={(e) => atualizarFormaPagamento(e.target.value)}>
                                <option value={pagamento.formaPagamento}>Selecione...</option>
                                <option value={pagamento.formaPagamento}>Semanal</option>
                                <option value={pagamento.formaPagamento}>Quinzenal</option>
                                <option value={pagamento.formaPagamento}>Mensal</option>
                            </select>
                        </label>
                        <label class="formulario">
                            Tipo de Pagamento:
                            <select name="tipoPagamento" onChange={(e) => atualizarTipoPagamento(e.target.value)}>
                                <option value={pagamento.tipoPagamento}>Selecione...</option>
                                <option value={pagamento.tipoPagamento}>Dinheiro</option>
                                <option value={pagamento.tipoPagamento}>Cartão</option>
                                <option value={pagamento.tipoPagamento}>Pix</option>
                            </select>
                        </label>
                        <label class="formulario">
                            Total:
                            <input type="number" value={pagamento.total} name="total" onChange={(e) => atualizarTotal(e.target.value)} />
                        </label>
                        <input type="submit" value="Salvar" />
                    </form>
                )}
            </div>
        </div>
    )
}

export default CreateClient
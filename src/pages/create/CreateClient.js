import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { InputField, SelectField } from '../../components/Field';

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

    function buscaCep(){
        if (endereco.cep.length >= 8) {
            let cep = `http://viacep.com.br/ws/${endereco.cep}/json/`
            const fetchData = async () => {

                const res = await fetch(cep);
                const json = await res.json();
                setEndereco({ ...endereco, logradouro: json.logradouro, bairro: json.bairro, cidade: json.localidade, estado: json.uf });
            }

            fetchData(); 
        }
    }

    function atualizarCep(dado) {
        setEndereco({ ...endereco, cep: dado});
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
            <h1>Cadastrar novo cliente</h1>
            <div className="add-cliente">
                {loading && <h2>Carregando dados ...</h2>}
                {error && <h2>{error}</h2>}
                {!error && !loading && (
                    <form onSubmit={handleSubmit} className="container">
                        <div className="form-columns">
                            {/* Informações da Pessoa */}
                            <div className="column">
                                <div className="pessoa">
                                    <h2 className='info'>Informações <br />do Cliente</h2>
                                    <InputField
                                        label="Nome:"
                                        type="text"
                                        value={clientes.nome}
                                        name="nome"
                                        onChange={(e) => atualizarNome(e.target.value)}
                                    />
                                    <InputField
                                        label="Cpf:"
                                        type="number"
                                        value={clientes.cpf}
                                        name="cpf"
                                        onChange={(e) => atualizarCpf(e.target.value)}
                                    />
                                    <InputField
                                        label="RG:"
                                        type="number"
                                        value={clientes.rg}
                                        name="rg"
                                        onChange={(e) => atualizarRg(e.target.value)}
                                    />
                                    <InputField
                                        label="Telefone:"
                                        type="number"
                                        value={clientes.telefone}
                                        name="telefone"
                                        onChange={(e) => atualizarTelefone(e.target.value)}
                                    />
                                    <SelectField
                                        label="Vendedor:"
                                        value={clientes.vendedor}
                                        name="vendedor"
                                        options={["Selecione...", "Carlos", "João", "Leandro"]}
                                        onChange={(e) => atualizarVendedor(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Informações do Endereço */}
                            <div className="column">
                                <div className="endereco">
                                    <h2 className='info'>Informações do Endereço</h2>
                                    <InputField
                                        label="Cep:"
                                        type="text"
                                        value={endereco.cep}
                                        name="cep"
                                        onChange={(e) => atualizarCep(e.target.value)}
                                    />
                                    <button onClick={() => buscaCep()}> Buscar Cep </button><br/>
                                    <InputField
                                        label="Rua:"
                                        type="text"
                                        value={endereco.logradouro}
                                        name="logradouro"
                                        onChange={(e) => atualizarLogradouro(e.target.value)}
                                    />
                                    <InputField
                                        label="Numero:"
                                        type="number"
                                        value={endereco.numero}
                                        name="numero"
                                        onChange={(e) => atualizarNumero(e.target.value)}
                                    />
                                    <InputField
                                        label="Bairro:"
                                        type="text"
                                        value={endereco.bairro}
                                        name="bairro"
                                        onChange={(e) => atualizarBairro(e.target.value)}
                                    />
                                    <InputField
                                        label="Cidade:"
                                        type="text"
                                        value={endereco.cidade}
                                        name="cidade"
                                        onChange={(e) => atualizarCidade(e.target.value)}
                                    />
                                    <InputField
                                        label="Estado:"
                                        type="text"
                                        value={endereco.estado}
                                        name="estado"
                                        onChange={(e) => atualizarEstado(e.target.value)}
                                    />
                                    <InputField
                                        label="Complemento:"
                                        type="text"
                                        value={endereco.complemento}
                                        name="complemento"
                                        onChange={(e) => atualizarComplemento(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Informações de Pagamento */}
                            <div className="column">
                                <div className="pagamento">
                                    <h2 className='info'>Informações de Pagamento</h2>
                                    <InputField
                                        label="Data Pagamento:"
                                        type="date"
                                        value={pagamento.dataProximo}
                                        name="dataProximo"
                                        onChange={(e) => atualizarDataProximo(e.target.value)}
                                    />
                                    <InputField
                                        label="Entrada:"
                                        type="number"
                                        value={pagamento.entrada}
                                        name="entrada"
                                        onChange={(e) => atualizarEntrada(e.target.value)}
                                    />
                                    <SelectField
                                        label="Forma de Pagamento:"
                                        value={pagamento.formaPagamento}
                                        name="formaPagamento"
                                        options={["Selecione...", "Semanal", "Quinzenal", "Mensal"]}
                                        onChange={(e) => atualizarFormaPagamento(e.target.value)}
                                    />
                                    <SelectField
                                        label="Tipo de Pagamento:"
                                        value={pagamento.tipoPagamento}
                                        name="tipoPagamento"
                                        options={["Selecione...", "Dinheiro", "Cartão", "Pix"]}
                                        onChange={(e) => atualizarTipoPagamento(e.target.value)}
                                    />
                                    <InputField
                                        label="Total:"
                                        type="number"
                                        value={pagamento.total}
                                        name="total"
                                        onChange={(e) => atualizarTotal(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Salvar" />
                    </form>
                )}
            </div>
        </div>
    )
}

export default CreateClient
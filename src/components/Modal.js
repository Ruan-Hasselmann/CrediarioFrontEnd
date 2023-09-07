import React from 'react';
import './Modal.css'; // Importe seu arquivo CSS de estilo aqui

function Modal({ isOpen, onClose, cliente }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2 className='h2Modal'>Endereço do cliente</h2>
        {cliente && (
          <>
            <p><b>Rua: </b>{cliente.endereco.logradouro}</p>
            <p><b>Número: </b>{cliente.endereco.numero}</p>
            <p><b>Bairro: </b>{cliente.endereco.bairro}</p>
            {!cliente.status && <p><b>Status: </b>Desativado</p>}
          </>
        )}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;

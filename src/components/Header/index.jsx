
import './styles.scss'
import eventLogo from '../../assets/images/event-logo.png';
import companyLogo from '../../assets/images/company-logo.png';

import '../../styles/PhoneInput.scss'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



export function Header() {

  function openModal(event) {
    event.preventDefault()

    let modalBox = document.querySelector('.modal-box')
    modalBox.classList.replace('modalBoxIsClose', 'modalBoxIsOpen')

    let modal = document.querySelector('.modal')
    modal.classList.replace('isClose', 'isOpen')

    let modalBackground = document.querySelector('.modal-backgrond')
    modal.classList.replace('modalBackgroundIsClose', 'modalBackgroundIsOpen')

  }

  function closeModal(event) {

    let modalBox = document.querySelector('.modal-box')
    modalBox.classList.replace('modalBoxIsOpen', 'modalBoxIsClose')

    let modal = document.querySelector('.modal')
    modal.classList.replace('isOpen', 'isClose')

    let modalBackground = document.querySelector('.modal-backgrond')
    modal.classList.replace('modalBackgroundIsOpen', 'modalBackgroundIsClose')

    let inputName = document.querySelector('#name')
    inputName.value = ''
    let inputEmail = document.querySelector('#email')
    inputEmail.value = ''
  }

    const [country, setCountry] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
            <header>

                <div className="modal-box modalBoxIsClose">
                  <div className="modal isClose">
                    <h1>Prontinho!</h1>
                    <p>Parabéns {name}! Você já está matriculado. Em breve você receberá o crachá de participante no seu e-mail: <span>{email}</span>.</p>
                    <button onClick={closeModal}>Fechar</button>
                  </div>
                  <div onClick={closeModal} className="modal-background modalBackgroundIsClose"></div>
                </div>

                <div className="header-page">
                    <div className="header-content" id="home">
                        <div className="header-top-text">
                            <img width="260px" src={eventLogo} alt="OnlineCodeWeek" />

                        </div>

                        <div className="header-text">
                            <p>Faça parte da revolução</p>
                            <span>$ você pode mudar o mundo através da programação</span>
                        </div>

                        <p className="speakers"><i className="fas fa-user-check"></i>Com Bill Gates e Mark Zuckerberg</p>


                        <div className="address">
                            <h3>12 de Novembro</h3>

                            <br/>

                            <p><i className="far fa-clock"></i><b>Horário:</b> 8h às 11h</p>

                            <br/>

                            <p><i className="fas fa-map-marker-alt"></i><b>Local:</b> Universidade de Cambridge,
                            The Old Schools, <br/> Trinity Ln, Cambridge CB2 1TN, Reino Unido</p>
                            
                            <br/>

                            <p><i className="far fa-id-badge"></i><b>Entrada monitorada:</b> Traga seu crachá de identificação gerado no cadastro.</p>
                        </div>

                    </div>

                    <div className="form-card">
                        <form onSubmit={openModal}>
                            <div className="form-header">
                                <img width="160px" src={companyLogo} alt="Technology" />

                                <p>As vagas estão se esgotando. Preencha o formulário
                                    para se cadastrar e fazer parte da nova turma.</p>
                            </div>

                            <div className="form-content">
                                <div className="form-name">
                                    <label htmlFor="name">Nome:</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        placeholder="Ex: João da Silva"
                                        required
                                        onChange={e => setName(e.target.value)}
                                        />
                                </div>

                                <div className="form-email">
                                    <label htmlFor="email">E-mail:</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder="example@gmail.com"
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        />
                                </div>

                                {/* <div className="form-phone">
                                    <label htmlFor="phone">Telefone:</label>
                                    <input type="number" name="phone"/>
                                </div> */}

                                <label htmlFor="phone">Telefone:</label>
                                <PhoneInput
                                    id="phoneInput"
                                    placeholder="Insira seu número"
                                    defaultCountry="BR"
                                    value={country}
                                    onChange={setCountry}
                                    international
                                    countryCallingCodeEditable={false}
                                />

                                <div className="form-area">
                                    <label htmlFor="area-select">Área:</label>
                                    <select name="area-select">
                                        <option value="webdevelopment">Web Development</option>
                                        <option value="datascience" selected>Data Science</option>
                                        <option value="dataengineering">Data Engineering</option>
                                    </select>
                                </div>

                                <div className="form-button">
                                    <button type="submit">INSCREVER-SE</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </header>
    )
}
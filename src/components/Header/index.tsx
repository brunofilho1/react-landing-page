
import './styles.scss'
import eventLogo from '../../assets/images/event-logo.png';
import companyLogo from '../../assets/images/company-logo.png';

export function Header() {
    return (
            <header className="header-page">
                <div className="header-content">
                    <div className="header-top-text">
                        <img width="260px" src={eventLogo} alt="OnlineCodeWeek" />

                        <h1>INSCREVA-SE AGORA!</h1>
                    </div>

                    <div className="header-text">
                        <p>Educação tecnológica com quem sabe o que fala</p>
                        <span>Aprenda como você pode mudar o mundo através da programação.</span>
                    </div>

                    <p className="speakers"><i className="fas fa-user-check"></i>Com Bill Gates e Mark Zuckerberg</p>


                    <div className="address">
                        <h3>12 de Novembro</h3>

                        <br/>

                        <p><i className="far fa-clock"></i><b>Horário:</b> 8h às 11h</p>

                        <br/>

                        <p><i className="fas fa-map-marker-alt"></i><b>Local:</b> Universidade de Cambridge, <br/>
                        The Old Schools, Trinity Ln, Cambridge CB2 1TN, Reino Unido</p>
                        
                        <br/>

                        <p><i className="far fa-id-badge"></i><b>Entrada monitorada:</b> Traga seu crachá de identificação gerado no cadastro.</p>
                    </div>
                </div>

                <div className="form-card">
                    <form>
                        <div className="form-header">
                            <img width="160px" src={companyLogo} alt="Technology" />

                            <p>As vagas estão se esgotando. Preencha o formulário
                                para se cadastrar e fazer parte da nova turma.</p>
                        </div>

                        <div className="form-content">
                            <div className="form-name">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" name="name"/>
                            </div>

                            <div className="form-email">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name="email"/>
                            </div>

                            <div className="form-phone">
                                <label htmlFor="phone">Telefone:</label>
                                <input type="number" name="phone"/>
                            </div>

                            <div className="form-state">
                                <label htmlFor="state-select">Estado:</label>
                                <select name="state-select">
                                    <option value="webdevelopment" selected>São Paulo</option>
                                    <option value="datascience">Rio de Janeiro</option>
                                    <option value="dataengineering">Minas Gerais</option>
                                </select>
                            </div>

                            <div className="form-area">
                                <label htmlFor="area-select">Área:</label>
                                <select name="area-select">
                                    <option value="webdevelopment">Web Development</option>
                                    <option value="datascience" selected>Data Science</option>
                                    <option value="dataengineering">Data Engineering</option>
                                </select>
                            </div>

                            <div className="form-button">
                                <button>INSCREVER-SE</button>
                            </div>
                        </div>

                    </form>
                </div>
            </header>
    )
}
import './styles.scss';

import markPhoto from '../../assets/images/mark.png';
import billPhoto from '../../assets/images/bill.png'

export function Main() {
    return (
        <main className="main-page">
            <div className="main-content">
                <h2 id="about">Sobre o evento</h2>
                <div className="h2-line"></div>

                <div className="main-top-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                </div>

                <iframe width="864" height="511" src="https://www.youtube.com/embed/yqr6yLyuHQA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <div className="main-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                </div>

                <div className="main-bottom-text">
                    <p><i className="fas fa-laptop-code"></i></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p><i className="fas fa-cogs"></i></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p><i className="fas fa-project-diagram"></i></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <h2 id="speakers">Palestrantes</h2>
                <div className="h2-line"></div>

                <div className="speakers-info">
                    <div className="photo bill-gates">
                        <img width="170px" src={billPhoto} alt="" />
                        <h4 className="h4-bill">Bill Gates</h4>
                    </div>

                    <div className="photo mark-zuckerberg">
                        <img width="170px" src={markPhoto} alt="" />
                        <h4 className="h4-mark">Mark Zuckerberg</h4>
                    </div>
                </div>

                <div className="speakers main-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                </div>

                <iframe width="864" height="511" src="https://www.youtube.com/embed/6Af6b_wyiwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <div className="main-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, reiciendis pariatur molestias atque, quod nam labore obcaecati soluta repellat corporis. Corporis beatae totam et tenetur? Dolore consectetur quia incidunt.
                    </p>
                </div>

                <div className="footer-form-box">
                    <h2>GARANTA SUA INSCRIÇÃO</h2>
                    <div className="footer-form">
                        <input type="email" placeholder="Digite seu e-mail..."/>
                        <div className="">
                            <button className="bottom-form-button">INSCREVER-SE</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
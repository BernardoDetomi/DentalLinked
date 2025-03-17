import './Footer.css'
import phone from '../../assets/Phone.svg'
import gmail from '../../assets/gmail.svg'
import loc from '../../assets/localização.svg'

const Footer = () => {
    return(
        <footer className='footer'>
            <section className='footer-text'>
            <div className='clinic-name'>
                <h1>Dental Linked</h1>
                <p>Dr Lucas Almeida</p>
                <p>CRO/MG 0000</p>
            </div>
            <div className='specialties'>
                <h1>Especialidades</h1>
                <p>Ortopedia</p>
                <p>Estomatologia</p>
                <p>Periodontista</p>
                <p>Odontopediatria</p>
                <p>Clínico Geral</p>
                <p>&nbsp;Odontologia estética</p>
            </div>
            <div className='contact'>
                <h1>Contatos</h1>
                <p>
                    <img className='contact-telephone' src={phone} alt='icone de um telefone'/>
                    (38) 99808-9253
                </p>
                <p>
                    <img className='contact-telephone' src={phone} alt='icone de um telefone'/>
                    (31) 99876-9253
                </p>
                <p className='contact-bloco-gmail'>
                    <img className='contact-gmail' src={gmail} alt='icone do email'/>
                    <a href="mailto:linkedej@gmail.com">linkedej@gmail.com</a>
                </p>
                <p>
                    <img className='contact-location' src={loc} alt='icone de localização'/>
                <a 
                    href="https://maps.app.goo.gl/MZWhU67z7mk8LmDK8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    Linked Empresa Júnior
                </a>
                </p>
            </div>
            </section>
            <section className='rights'>
                <h2>LinkedEJ © - 2024 - Todos os direitos reservados - Designed by BernardoMD and LucasRivetti</h2>
            </section>
        </footer>
    );
};

export default Footer;
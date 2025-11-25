import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/imagens/image1.png';
import style from './styles.module.css';
import { HashLink } from 'react-router-hash-link';  

function Cabecalho() {

    const linkClass = ({ isActive } : { isActive: boolean }) => 
        isActive ? `${style.bto} ${style.active}` : style.bto;

    return (
        <div>
            <div className={style.cabecalho}>
                <NavLink to='/' className={style.Logo}>
                    <img src={logo} alt="Logo" />
                </NavLink>
                <h1 className={style.nomeLogo}>LAR</h1>
                <h5>Lugar de Apoio e Recomeço</h5>
                
                <nav className={style.navContainer}>
                    
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>

                    <div className={style.dropdownContainer}>
                        <NavLink to="/TiposAbusos" className={linkClass}>Tipos de Abusos</NavLink>

                        <div className={style.dropdownMenu}>
                        <HashLink smooth to='/TiposAbusos#VFisica' className={style.dropdownItem}>Violência Física </HashLink>
                        <HashLink smooth to='/TiposAbusos#VPsicologica' className={style.dropdownItem}>Violência Psicológica </HashLink>
                        <HashLink smooth to='/TiposAbusos#VSexual' className={style.dropdownItem}>Violência Sexual </HashLink>
                        <HashLink smooth to='/TiposAbusos#VPatrimonial' className={style.dropdownItem}>Violência Patrimonial </HashLink>
                        <HashLink smooth to='/TiposAbusos#VMoral' className={style.dropdownItem}>Violência Moral </HashLink>
                        <HashLink smooth to='/TiposAbusos#VDomestica' className={style.dropdownItem}>Violência Doméstica </HashLink>
                        </div>
                    </div>

                     <NavLink to="/saudemental" className={linkClass}>
                        Saúde Mental
                    </NavLink>
                    
                    <NavLink to="/instituicao" className={linkClass}>
                        Instituições
                    </NavLink>

                    <NavLink to="/queroajudar" className={linkClass}>
                        Doações
                    </NavLink>

                    <NavLink to="/instituicao-ajuda" className={linkClass}>
                        Preciso de Ajuda
                    </NavLink>

                    <NavLink to="/login" className={linkClass}>
                        Login
                    </NavLink>
                </nav>

                <NavLink to="/Sos" className={style.rosto}>
                    ROSTO
                </NavLink>
                
            </div>
        </div>
    );
}

export default Cabecalho;
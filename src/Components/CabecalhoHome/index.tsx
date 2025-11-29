import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/imagens/image1.png';
import style from './styles.module.css';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { UsuarioLogadoContext } from '../../contexts/contextAuth';

function Cabecalho() {

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${style.bto} ${style.active}` : style.bto;

    const ctx = useContext(UsuarioLogadoContext)

    const navigate = useNavigate();
    function deslogar() {
        ctx?.setName("");
        ctx?.setEmail("");
        ctx?.setSenha("");
        navigate("/");
    }
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


                </nav>

                {!ctx?.name ? (
                    <NavLink to="/login" className={linkClass}>
                        Login
                    </NavLink>
                ) : (
                    <div className={style.userContainer}>
                        <span className={style.userName}>Olá, {ctx.name}</span>
                        <button onClick={deslogar} className={style.logoutBto}>
                            Sair
                        </button>
                    </div>
                )}



            </div>
        </div>
    );
}

export default Cabecalho;
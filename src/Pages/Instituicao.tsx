import style from './../Style/milton.module.css'
import CabecalhoHome from '../Components/CabecalhoHome'
import RodapeHome from '../Components/RodapeHome'
import { useState } from 'react';

const listaInstituicoes = [
    {
        id: 1,
        nome: "CVV - Centro de Valorização à Vida",
        tags: ["Depressão", "Ansiedade"],
        tipo: "Online/Telefone",
        local: ["Nacional"],
        descricao: "Serviço voluntário gratuito de apoio emocional e prevenção ao suicídio, disponível 24 horas por dia para quem precisa conversar.",
        site: "https://cvv.org.br/"
    },
    {
        id: 2,
        nome: "ABDA - Assoc. Bras. do Déficit de Atenção",
        tags: ["TDAH"],
        tipo: "Híbrido",
        local: ["Rio de Janeiro"],
        descricao: "Associação dedicada a fornecer suporte, informação técnica e científica para pessoas com TDAH e seus familiares.",
        site: "https://tdah.org.br/"
    },
    {
        id: 3,
        nome: "Fundação Gedor Silveira",
        tags: ["TOC", "Depressão"],
        tipo: "Presencial",
        local: ["Minas Gerais"],
        descricao: "Instituição especializada no tratamento e acolhimento de pessoas com Transtorno Obsessivo-Compulsivo (TOC).",
        site: "https://gedorsilveira.com.br/"
    },
    {
        id: 4,
        nome: "IPq - Programa de Transtornos Alimentares",
        tags: ["T. Alimentar"],
        tipo: "Hospitalar",
        local: ["São Paulo"],
        descricao: "Referência no tratamento de anorexia, bulimia e compulsão alimentar, oferecendo suporte multidisciplinar.",
        site: "https://ambulim.org.br/contato/"
    },
    {
        id: 5,
        nome: "ABRE - Associação Brasileira de Esquizofrenia",
        tags: ["Esquizofrenia"],
        tipo: "Híbrido",
        local: ["Nacional"],
        descricao: "Focada em melhorar a qualidade de vida de pessoas com esquizofrenia e seus familiares através da educação e apoio.",
        site: "https://abrebrasil.org.br/"
    },
    {
        id: 6,
        nome: "Clínica Ansiedade",
        tags: ["Ansiedade"],
        tipo: "Clínica",
        local: ["São Paulo", "Porto Alegre"],
        descricao: "Atendimento especializado para transtornos de ansiedade generalizada, pânico e fobias.",
        site: "https://www.clinicaansiedade.com.br/"
    },
     {
        id: 7,
        nome: "Ame sua mente",
        tags: ["Depressão","Ansiedade"],
        tipo: "Online",
        local: ["Nacional"],
        descricao: "O Instituto é uma Organização da Sociedade Civil que desenvolve projetos pautados em pesquisas científicas com foco na promoção da saúde mental, redução de estigmas, prevenção e manejo de transtornos.",
        site: "https://www.amesuamente.org.br/  "
    },
    
];

function Instituicao() {

    const [busca, setBusca] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [tipo, setTipo] = useState('');
    const [localizacao, setLocalizacao] = useState('');

    const limparFiltros = () => {
        setBusca('');
        setEspecialidade('');
        setTipo('');
        setLocalizacao('');
    }

    const instituicoesFiltradas = listaInstituicoes.filter((item) => {
        const matchBusca = item.nome.toLowerCase().includes(busca.toLowerCase());

        const matchEspecialidade = especialidade === '' || item.tags.includes(especialidade);

        const matchTipo = tipo === '' || item.tipo === tipo;

        const matchLocal = localizacao === '' || item.local.includes(localizacao);

        return matchBusca && matchEspecialidade && matchTipo && matchLocal;
    });

    return (
        <>
            <CabecalhoHome />
            <div className={style.body}>
                <div className={style.pagina}>

                    <aside className={style.sidebar}>
                        <h3>Filtrar Instituições</h3>

                        <div className={style.filtro}>
                            <label>Pesquisar Nome</label>
                            <input
                                type="text"
                                placeholder="Digite o nome..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </div>

                        <div className={style.filtro}>
                            <label>Especialidade</label>
                            <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}>
                                <option value="">Todas</option>
                                <option value="Ansiedade">Ansiedade</option>
                                <option value="Depressão">Depressão</option>
                                <option value="TDAH">TDAH</option>
                                <option value="TOC">TOC</option>
                                <option value="T. Alimentar">Transtorno Alimentar</option>
                                <option value="Esquizofrenia">Esquizofrenia</option>
                            </select>
                        </div>

                        <div className={style.filtro}>
                            <label>Tipo de Atendimento</label>
                            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                <option value="">Todos</option>
                                <option value="Online/Telefone">Online/Telefone</option>
                                <option value="Híbrido">Híbrido</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Hospitalar">Hospitalar</option>
                            </select>
                        </div>

                        <div className={style.filtro}>
                            <label>Localização</label>
                            <select value={localizacao} onChange={(e) => setLocalizacao(e.target.value)}>
                                <option value="">Todas</option>
                                <option value="Nacional">Nacional</option>
                                <option value="São Paulo">São Paulo</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                                <option value="Porto Alegre">Porto Alegre</option>
                            </select>
                        </div>

                        <button className={style.btnLimpar} onClick={limparFiltros}>
                            Limpar Filtros ✕
                        </button>

                    </aside>

                    <main className={style.content}>

                        <div className={style.titleContainer}>
                            <h1>INSTITUIÇÕES</h1>
                            <p>Pequenos passos podem transformar sua vida.</p>
                        </div>

                        <div className={style.cards}>

                            {instituicoesFiltradas.length > 0 ? (
                                instituicoesFiltradas.map((item) => (
                                    <div className={style.card} key={item.id}>
                                        <h2>{item.nome}</h2>

                                        <div className={style.tags}>
                                            {item.tags.map((tag, i) => (
                                                <span key={i} className={style.tag}>{tag}</span>
                                            ))}

                                            <span className={style.tagAtend}>{item.tipo}</span>
                                        </div>

                                        <p>{item.descricao}</p>

                                        <small style={{ color: '#aaa', marginBottom: '10px', display: 'block' }}>
                                            Local: {item.local.join(' / ')}
                                        </small>

                                        <div className={style.cardButtons}>
                                            <a
                                                href={item.site}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={style.btnSaibaMais}
                                            >
                                                Saiba Mais
                                            </a>
                                            <div className={style.btnDoacao}>Fazer Doação</div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', color: '#666', marginTop: '40px', gridColumn: '1/-1' }}>
                                    <h3>Nenhuma instituição encontrada com esses filtros.</h3>
                                    <p>Tente mudar os filtros ou limpar a pesquisa.</p>
                                </div>
                            )}

                        </div>
                    </main>
                </div>
            </div>
            <RodapeHome />
        </>
    );
}

export default Instituicao
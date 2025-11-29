import style from './../Style/milton.module.css'
import CabecalhoHome from '../Components/CabecalhoHome'
import RodapeHome from '../Components/RodapeHome'

function Instituicao() {

    return (
        <>
            <CabecalhoHome />
            <div className={style.body}>
                <div className={style.pagina}>

                    <aside className={style.sidebar}>
                        <h3>Filtrar Instituições</h3>

                        <div className={style.filtro}>
                            <label>Search</label>
                            <input type="text" placeholder="Pesquisar..." />
                        </div>

                        <div className={style.filtro}>
                            <label>Especialidade</label>
                            <select>
                                <option>Selecione</option>
                            </select>
                        </div>

                        <div className={style.filtro}>
                            <label>Tipo de Atendimento</label>
                            <select>
                                <option>Selecione</option>
                            </select>
                        </div>

                        <div className={style.filtro}>
                            <label>Localização</label>
                            <select>
                                <option>Selecione</option>
                            </select>
                        </div>
                    </aside>

                    <main className={style.content}>

                        <div className={style.titleContainer}>
                            <h1>INSTITUIÇÃO</h1>
                            <p>Pequenos passos podem transformar sua vida.</p>
                        </div>

                        <div className={style.cards}>

                           

                             <div className={style.card}>
                                <h2>CVV - Centro de Valorização à Vida</h2>

                                <div className={style.tags}>
                                    <span className={style.tag}>Ansiedade</span>
                                    <span className={style.tag}>Depressão</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                    O Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e
                                    prevenção ao suicídio, atendendo todas as pessoas que querem e precisam conversar.
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                             <div className={style.card}>
                                <h2>Associação Brasielira do Déficit de Atenção</h2>

                                <div className={style.tags}>
                                    <span className={style.tag}>TDAH</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                    Texto explicando a Instiuição
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                             <div className={style.card}>
                                <h2>Fundação Gedor Silveira</h2> <br/>

                                <div className={style.tags}>
                                    <span className={style.tag}>TOC</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                     Texto explicando a Instiuição
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                          
                            
                             <div className={style.card}>
                                <h2>CVV - Centro de Valorização à Vida</h2>

                                <div className={style.tags}>
                                    <span className={style.tag}>Ansiedade</span>
                                    <span className={style.tag}>Depressão</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                    O Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e
                                    prevenção ao suicídio, atendendo todas as pessoas que querem e precisam conversar.
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                             <div className={style.card}>
                                <h2>Associação Brasielira do Déficit de Atenção</h2>

                                <div className={style.tags}>
                                    <span className={style.tag}>TDAH</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                    Texto explicando a Instiuição
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                             <div className={style.card}>
                                <h2>Fundação Gedor Silveira</h2> <br/>

                                <div className={style.tags}>
                                    <span className={style.tag}>TOC</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                     Texto explicando a Instiuição
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                          

                          
                             <div className={style.card}>
                                <h2>CVV - Centro de Valorização à Vida</h2>

                                <div className={style.tags}>
                                    <span className={style.tag}>Ansiedade</span>
                                    <span className={style.tag}>Depressão</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                    O Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e
                                    prevenção ao suicídio, atendendo todas as pessoas que querem e precisam conversar.
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                             <div className={style.card}>
                                <h2>Associação Brasielira do Déficit de Atenção</h2>

                                <div className={style.tags}>
                                    <span className={style.tag}>TDAH</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                    Texto explicando a Instiuição
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                             <div className={style.card}>
                                <h2>Fundação Gedor Silveira</h2> <br/>

                                <div className={style.tags}>
                                    <span className={style.tag}>TOC</span>
                                    <span className={style.tagAtend}>Hibrido</span>
                                </div>

                                <p>
                                     Texto explicando a Instiuição
                                </p>

                               <div className={style.cardButtons}>
                                    <div className={style.btnSaibaMais}>Saiba Mais</div>
                                    <div className={style.btnDoacao}>Fazer Doação</div>
                                </div>
                            </div>
                          

                           

                        </div>
                    </main>
                </div>
               
            </div> 
            <RodapeHome/>
        </>
    )
}

export default Instituicao

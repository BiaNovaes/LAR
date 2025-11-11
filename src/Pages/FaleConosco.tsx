import CabecalhoHome from "../Components/CabecalhoHome";
import FaleConoscoIMG from "../assets/imagens/faleconosco.jpg";
import style from "../Style/faleConosco.module.css";
import { useEffect, useState, type ChangeEvent } from "react";
import { api } from "../Api/api";
import type { FormFaleConosco } from "../types/faleConosco";
import RodapeHome from "../Components/RodapeHome";

function FaleConosco() {

    const [_, setFaleConosco] = useState<FormFaleConosco[]>([]);

    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [endereco, setEndereco] = useState('');
    const [mensagem, setMensagem] = useState('');


    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTelefone(e.target.value)
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleAssuntoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAssunto(e.target.value)
    }

    const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEndereco(e.target.value)
    }

    const handleMensagemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMensagem(e.target.value)
    }





    const AdicionarFaleConosco = async () => {
        if (name && telefone && email && endereco && assunto && mensagem) {
            let json = await api.AdicionarFaleConosco(name, telefone, email, endereco, assunto, mensagem);
            if (json.data.id) {
                alert('Formulario enviado com sucesso!')
                setFaleConosco((FaleConosco) => [...FaleConosco, json]);
            } else {
                alert('Erro ao enviar formulario!')
            }
        }
    }

    useEffect(() => {
        // carregarFormulario();
    }, []);

    return (
        <>
        <div className={style.body}>
            <CabecalhoHome />
<div className={style.container}>
            <img src={FaleConoscoIMG} className={style.imagem} />

            <div className={style.Conteudo}>
                <form className={style.form}>
                    <div className={style.linhaInputs}>
                        <div>
                            <label>Nome</label>
                            <input type="text" onChange={handleNameChange} placeholder="Digite seu nome" />
                        </div>
                    </div>
                    <div className={style.linhaInputs}>
                        <div>
                            <label>Telefone</label>
                            <input type="text" onChange={handleTelefoneChange} placeholder="Digite seu telefone" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" onChange={handleEmailChange} placeholder="Digite seu Email" />
                        </div>
                    </div>
                    <div className={style.linhaInputs}>
                        <div>
                            <label>Endereço</label>
                            <input type="text" onChange={handleEnderecoChange} placeholder="Qual seu endereço" />
                        </div>
                    </div>
                    <div className={style.linhaInputs}>
                        <div>
                            <label>Assunto</label>
                            <input type="text" onChange={handleAssuntoChange} placeholder="Digite o Assunto que deseja falar" />
                        </div>
                    </div>

                    <div className={style.linhaInputs}>
                        <div>
                            <label>Mensagem</label>
                            <input type="text" onChange={handleMensagemChange} placeholder="Digite sua mensagem" />
                        </div>

                    </div>

                    <div>
                        <button className={style.botaoEnviar} onClick={AdicionarFaleConosco} >Enviar</button>
                    </div>
                </form>

            </div>
            
</div>
</div>
<RodapeHome/>

        </>
    );
}

export default FaleConosco;
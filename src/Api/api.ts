export const api = {

    Logar: async (email: string, password: String) => {

        console.log(email,password)
        {

            let response = await fetch('http://localhost:3000/users/login',
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            EMAIL:email,
                            PASSWORD:password
                        }),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }

                }
            );
            let json = await response.json();

            console.log(json);
            return json;
        }
    },


    Cadastro: async (name: string, email: string, password: String) => {
        {

            let response = await fetch('http://localhost:3000/users/sign-up',
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            NOME:name, EMAIL:email, PASSWORD: password
                        }),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }

                }
            );
            let json = await response.json();

            console.log(json);
            return json;
        }
    },

    AdicionarFormulario: async (name: string, telefone: string, email: string, valor:string, instituicao_id: string,cidade: string, estado: string) => {
        let response = await fetch('http://localhost:3000/FormularioQueroAjudar/', {
            method: 'POST',
            body: JSON.stringify({
                NAME: name,
                TELEFONE: telefone,
                EMAIL: email,
                VALOR: valor,
                INSTITUTION_ID: instituicao_id,
                CIDADE: cidade,
                ESTADO: estado
            }),
            headers: {
                'Content-type': 'application/json'
                }
        });
        let json = await response.json();
        return json;
    },

    AdicionarFormularioPrecisoAjuda: async (name: string, telefone: string, email: string, assunto: string, instituicao_id: string ,cidade: string, estado: string, 
                                            tremor: boolean, cansaco: boolean, desanimo: boolean, faltaAr: boolean, agonia: boolean, faltaFoco: boolean, alteracaoHumor: boolean,
                                            sensacaoConexao: boolean, preocupacaoPeso: boolean, perdaInteresse: boolean, abusoPsicologico: boolean, abusoFisico: boolean,
                                            abusoSexual: boolean, abusoPatrimonial: boolean, abusoMoral: boolean) => {
        let response = await fetch('http://localhost:3000/FormularioPrecisoAjuda/', {
            method: 'POST',
            body: JSON.stringify({
                NAME: name,
                TELEFONE: telefone,
                EMAIL: email,
                ASSUNTO: assunto,
                INSTITUTION_ID: instituicao_id,
                CIDADE: cidade,
                ESTADO: estado,
                TREMOR: tremor,
                CANSACO: cansaco,
                DESANIMO: desanimo,
                FALTAAR: faltaAr,
                AGONIA: agonia,
                FALTAFOCO: faltaFoco,
                ALTERACAOHUMOR: alteracaoHumor,
                SENSACAOCONEXAO: sensacaoConexao,
                PREOCUPACAOPESO: preocupacaoPeso,
                PERDAINTERESSE: perdaInteresse,
                ABUSOPSICOLOGICO: abusoPsicologico,
                ABUSOFISICO: abusoFisico,
                ABUSOSEXUAL: abusoSexual,
                ABUSOPATRIMONIAL: abusoPatrimonial,
                ABUSOMORAL: abusoMoral
            }),
            headers: {
                'Content-type': 'application/json'
                }
        });
        let json = await response.json();
        return json;
    },

    AdicionarFaleConosco: async (name: string, telefone: string, email:string, endereco: string, assunto: string, mensagem:string) => {
        let response = await fetch('http://localhost:3000/FormularioFaleConosco/', {
            method: 'POST',
            body: JSON.stringify({
                NAME: name,
                TELEFONE: telefone,
                EMAIL: email,
                ENDERECO: endereco,
                ASSUNTO: assunto,
                MENSAGEM: mensagem
            }),
            headers: {
                'Content-type' : 'application/json'
            }
        });
        let json = await response.json();
        return json;
    },

    listarInstituicao: async () => {
        let response = await fetch('http://localhost:3000/institution/get-all', {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            }
        });
        let json = await response.json();
        return json;
    }

}



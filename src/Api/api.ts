export const api = {

    Logar: async (email: string, password: String) => {
        {

            let response = await fetch('http://localhost:3000/users/login',
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            email, senha: password
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

            let response = await fetch('http://localhost:3000/create',
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            name, email, senha: password
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

    AdicionarFormulario: async (name: string, telefone: string, email: string, valor:string, instituicao: string,cidade: string, estado: string) => {
        let response = await fetch('http://localhost:3000/FormularioQueroAjudar/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                telefone: telefone,
                email: email,
                valor: valor,
                instituicao: instituicao,
                cidade: cidade,
                estado: estado
            }),
            headers: {
                'Content-type': 'application/json'
                }
        });
        let json = await response.json();
        return json;
    },

    AdicionarFormularioPrecisoAjuda: async (name: string, telefone: string, email: string, assunto:string, instituicao: string,cidade: string, estado: string) => {
        let response = await fetch('http://localhost:3000/FormularioPrecisoAjuda/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                telefone: telefone,
                email: email,
                assunto: assunto,
                instituicao: instituicao,
                cidade: cidade,
                estado: estado
            }),
            headers: {
                'Content-type': 'application/json'
                }
        });
        let json = await response.json();
        return json;
    },
}



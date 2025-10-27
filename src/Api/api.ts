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
    }
}



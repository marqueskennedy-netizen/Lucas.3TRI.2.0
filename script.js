async function buscarCEP(){
    const input_cep = document.getElementById('cep').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = "Buscando dados na API...";


    try{
        //*Buscar e acesso aos dados*/
        const resposta = await fetch(`https://viacep.com.br/ws/${input_cep}/json/`);
        const dados = await resposta.json();

        /*Caso o CEP não esteja correto*/
        if (dados.erro){
            resultado.innerHTML = "<p>CEP não encontrado!</p>";
            return;
        }

        resultado.innerHTML = `<p><strong>Logradouro:</strong>${dados.logradouro}</p>
                               <p><strong>Bairro:</strong>${dados.bairro}</p>
                               <p><strong>Localidade:</strong>${dados.localidade}</p>
                               <p><strong>UF:</strong>${dados.uf}</p>`
    }catch(erro){
        resultado.innerHTML = "<p> Erro ao conectar com API</p>"

    }
}
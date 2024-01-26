const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto){
    const nomeComoArrey = nomeCompleto.split(' ');
    return nomeComoArrey.length >= 2;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    if (!validaNome(nomeBeneficiario.value)){
        alert("O nome não está completo");
    }
})

console.log(form)


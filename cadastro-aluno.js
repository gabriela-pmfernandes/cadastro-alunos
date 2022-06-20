let cadastrosDosAlunos = [];

function exibirAlunoCadastrado(alunoSelecionado){
    document.getElementById("detalhesDoAlunoNome").innerHTML = cadastrosDosAlunos[alunoSelecionado].nome;
    document.getElementById("detalhesDoAlunoTelefone").innerHTML = cadastrosDosAlunos[alunoSelecionado].telefone;
    document.getElementById("detalhesDoAlunoDataDeNascimento").innerHTML = cadastrosDosAlunos[alunoSelecionado].dataNascimento;
    document.getElementById("detalhesDoAlunoNotaFinalDoCurso").innerHTML = cadastrosDosAlunos[alunoSelecionado].notaFinal;
}

function redesenhaListaDeAlunos(){
    listaAlunosCadastrados = "";

    for(let alunoCadastrado = 0; alunoCadastrado < cadastrosDosAlunos.length; alunoCadastrado ++){
        listaAlunosCadastrados += "<span onclick='exibirAlunoCadastrado("+ alunoCadastrado + ")'>"
                                 + cadastrosDosAlunos[alunoCadastrado].nome + "</span><br>";
    }
    document.getElementById("cadastrosAlunos").innerHTML = listaAlunosCadastrados;
}

function cadastrarAluno(){
    let nomeAluno = document.getElementById("nomeDoAluno").value;
    let telefoneAluno = document.getElementById("telefoneDoAluno").value;
    let dataNascimentoAluno = document.getElementById("dataDeNascimentoDoAluno").value;
    let notaFinalCurso = document.getElementById("notaFinalDoCurso").value;

    let cadastros = {nome: nomeAluno, telefone: telefoneAluno, dataNascimento: dataNascimentoAluno, notaFinal: notaFinalCurso}

    cadastrosDosAlunos.push(cadastros);
    alert(cadastros.nome + " cadastrado com sucesso!");

    redesenhaListaDeAlunos();
}
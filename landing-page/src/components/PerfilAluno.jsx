function PerfilAluno() {
    const aluno = {
        nome: 'Ana',
        idade: 20,
        curso: 'DS',
        ativo: true
    }

    const listaModulos = [
        "Hugo",
        "Carioca",
        "Ysaque",
        "Sara"
    ]

    const objeto= [
{
    nome: 'Maça',
    preco: 2.99,
    categoria: 'fruta'
},

{
    nome: 'Laranja',
    preco: 5.00,
    categoria: 'fruta'
},

{
    nome: 'Alface',
    preco: 1.99,
    categoria: 'folhagem'
}
]


    
    return(
        <div className="perfil-aluno">
             <p>Nome: {aluno.nome}</p>
             <p>Nome: {aluno.idade}</p>
             <p>Nome: {aluno.curso}</p>
             <p>Nome: {String(aluno.ativo)}</p>
             <p>Nome 1: {listaModulos[0]}</p>
             <p>Nome 2: {listaModulos[1]}</p>
             <p>Nome 3: {listaModulos[2]}</p>
             <p>Nome 3: {listaModulos[3]}</p>
             <p>Quantidade total: {listaModulos.length}</p>
             <p>Nome: {objeto[0].nome}</p>
             <p>Valor: {objeto[0].preco}</p>
    
             <p>Nome: {objeto[1].nome}</p>
             <p>Valor: {objeto[1].preco}</p>
    
             <p>Nome: {objeto[2].nome}</p>
             <p>Valor: {objeto[2].preco}</p>
    
             
    
        </div> 
    )
}

export default PerfilAluno
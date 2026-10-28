import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import './App.css'
import Header from "./components/Header";
import Card from "./components/card";
import FormularioLivro from "./components/FormularioLivro";
import Filtros from "./components/Filtros";
import ListaLivros from "./components/ListaLivros";
import DetalheLivro from "./components/DetalheLivro";


  const CHAVE_LIVROS = "minha_biblioteca";

  const livros_padrao =[
{
id: 1,
titulo: "O Senhor dos Anéis",
autor: "J.R.R. Tolkien",
categoria: "Fantasia",
lido: true
},
{
id: 2,
titulo: "1984",
autor: "George Orwell",
categoria: "Ficção Científica",
lido: false
},
{
id: 3,
titulo: "Dom Casmurro",
autor: "Machado de Assis",
categoria: "Clássico",
lido: true
},
{
id: 4,
titulo: "O Pequeno Príncipe",
autor: "Antoine de Saint-Exupéry",
categoria: "Infantil",
lido: false
},
{
id: 5,
titulo: "Clean Code",
autor: "Robert C. Martin",
categoria: "Tecnologia",
lido: false
}
]

function carregarLivros(){
  const livrosSalvos = localStorage.getItem(CHAVE_LIVROS);
  
  if(!livrosSalvos){
    return livros_padrao
  }

  try{
     const dadosConvertidos = JSON.parse(livrosSalvos)
  if (Array.isArray(dadosConvertidos)){
    return dadosConvertidos
  }
  return livros_padrao

  } catch(erro){
    console.error('Erro ao carregar os livros', erro);
    return livros_padrao
  }
}

  function App(){
    const[livros,setLivros] = useState(carregarLivros)
    const[titulo,setTitulo] = useState("")
    const[autor,setAutor] = useState ("")
    const[categoria,setCategoria] = useState("")
    const[filtro,setFiltro] = useState('todos')
    const[livroSelecionado,setLivroSelecionado] = useState(null)

    useEffect(() => {
      localStorage.setItem(
        CHAVE_LIVROS,
        JSON.stringify(livros)
      )
    },[livros])

    function adicionarLivros(event){
      event.preventDefault()

      if(titulo.trim() === ""){
        toast.error('Digite o nome do livro')
        return
      }

      if(autor.trim() === ""){
      toast.error('Digite o nome do autor')
      return
      }

      if(categoria.trim () === ""){
        toast.error('Selecione a categoria do livro')
        return
      }

      const novoLivro = {
        id:Date.now(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        categoria: categoria.trim(),
        lido:false,
      }

      setLivros([...livros,novoLivro])
      setTitulo("")
      setAutor("")
      setCategoria("")

      toast.success("Livro adicionado com sucesso!")
    }

    function selecionarLivro(id){
      setLivroSelecionado(id)
    }

    function fecharDetalhes(){
      setLivroSelecionado(null)
    }

    function marcarComoLido(id){
      const livrosAtualizados = livros.map((livro) =>{
        if ( livro.id === id) {
          return{
            ...livro,
            lido:true
          };
        }
        return livro
      });
      setLivros(livrosAtualizados)
      toast.success("Livro marcado como lido")
    }

    const livrosFiltrados = livros.filter((livro) => {
      if (filtro === "lidos") {
        return livro.lido === true
      }

      if(filtro === 'pendentes'){
        return livro.lido === false
      }

      return true
    }) 

    const livroEncontrado = livros.find((livro)=>{
      return livro.id === livroSelecionado
    })

  


  return (
   <main className="app">
    <ToastContainer
    position = "top-right"
    autoClose={2500}
    theme="dark"
    />

    <Header/>

    <Card titulo ="Adicionar Livro">
    <FormularioLivro
    titulo ={titulo}
    setTitulo={setTitulo}
    autor ={autor}
    setAutor={setAutor}
    categoria={categoria}
    setCategoria={setCategoria}
    adicionarLivros ={adicionarLivros}
    />
    </Card>

    <Card titulo="Filtrar Livros">
      <Filtros
      filtro={filtro}
      setFiltro={setFiltro}
    />
    </Card>

    <Card titulo="Livros">
      <ListaLivros
      livros = {livrosFiltrados}
      selecionarLivro = {selecionarLivro}
      marcarComoLido = {marcarComoLido}
      />
    </Card>

    {livroEncontrado && (
      <DetalheLivro
      livro={livroEncontrado}
      fecharDetalhes={fecharDetalhes}
      />
    )}

   </main>
  )
  }

export default App

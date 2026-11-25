import { Route, Routes} from 'react-router-dom'
import './App.css'
import Menu from './componentes/Menu'
import Inicio from './pages/Inicio'
import DetalhesDoProduto from './pages/DetalhesDoProduto'
import Error from './pages/Error'

function App() {

const produtos = [
  {
    id: 1,
    nome: "Notebook Lenovo IdeaPad",
    preco: 3299.90,
    descricao: "Notebook com processador Intel Core i5, 8GB de RAM e SSD de 512GB.",
    categoria: "Informática",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnQc5bR3qM_c9I5fJyDzmMd4ZznbAYAelNtCSRIiAxUqfrWdue22DwuU&s=10"
  },
  {
    id: 2,
    nome: "Mouse Logitech M170",
    preco: 79.90,
    descricao: "Mouse sem fio com design confortável e conexão USB.",
    categoria: "Informática",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNb7w44cqCZ0-7PXG5rpb7cZXmXT7g9fISRlsjvPF9VrelOc5Cp0fh7qpx&s=10"
  },
  {
    id: 3,
    nome: "Cadeira de Escritório",
    preco: 599.90,
    descricao: "Cadeira ergonômica com regulagem de altura e apoio para braços.",
    categoria: "Móveis",
    imagem: "https://abramais.vteximg.com.br/arquivos/ids/265235/cadeira-de-escritorio-franca-preto-diagonal.jpg?v=639237969008700000"
  },
  {
    id: 4,
    nome: "Smart TV Samsung 50 polegadas",
    preco: 2499.90,
    descricao: "Smart TV 4K com acesso a aplicativos de streaming.",
    categoria: "Eletrônicos",
    imagem: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/210045"
  },
  {
    id: 5,
    nome: "Teclado Mecânico Redragon",
    preco: 249.90,
    descricao: "Teclado mecânico com iluminação RGB e conexão USB.",
    categoria: "Informática",
    imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/154163/xlarge/Teclado-Mec-nico-Gamer-Redragon-Kumara-LED-Vermelho-Switch-Outemu-Blue-PT-K552-2_1773864856.jpg"
  },
  {
    id: 6,
    nome: "Luminária de Mesa",
    preco: 89.90,
    descricao: "Luminária articulável ideal para estudos e escritório.",
    categoria: "Decoração",
    imagem: "https://dcu3z7fnvhgqn.cloudfront.net/Custom/Content/Products/87/42/8742_luminaria-de-mesa-flexivel-metal-fosco-led-4w-280lm-4000k_m199_639283552826713094.webp"
  }
]

  return (
    <>
      <Menu/>

      <Routes>
        <Route
        path='/'
        element={<Inicio produtos={produtos}/>}
        />

   
        <Route
        path='/produto/:id'
        element={<DetalhesDoProduto produtos={produtos}/>}
        />
      
        <Route
        path='*'
        element={<Error/>}
        />

      </Routes>
    </>
  )
}

export default App

import './App.css';
import Button from '../components/button/Button';
import logo from '../assets/images/logo-newsletter.png';
import imgArticle from '../assets/images/telescopio-espacial.jpg';
import Article from '../components/article/Article';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <a href="#" target="_self" rel="follow">
          <img className='header-logo'
            src={logo}
            alt='Logo NewsLetter'
          />
        </a>

        <nav className='App-nav'>
          <a className="nav-link" href="#" target="_self" rel="follow"
          >
            HOME
          </a>
          <a className="nav-link" href="#" target="_self" rel="follow"
          >
            ARTICLES
          </a>
          <a className="nav-link" href="#" target="_self" rel="follow"
          >
            CONTATCS
          </a>
        </nav>
      </header>

      <main>

        <Article
          src={imgArticle}
          alt="Imagem de um telescópio espacial"
          text="Esta terça-feira (7) entrou para a história da astronomia como o dia em que foram divulgadas as primeiras imagens científicas do Telescópio Espacial Euclid, da Agência Espacial Europeia (ESA). Os cientistas da missão se reuniram em Darmstadt, na Alemanha, para apresentar ao mundo e debater as cinco primeiras capturas operacionais coloridas do cosmos distante feitas pelo revolucionário equipamento, em uma live que teve início às 10h15 (pelo horário de Brasília), nas plataformas digitais da agência."
        />

        <aside>

        </aside>

      </main>

    </div>
  );
}

export default App;

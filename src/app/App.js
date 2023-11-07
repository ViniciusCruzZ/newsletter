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
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <aside>

        </aside>

      </main>

    </div>
  );
}

export default App;

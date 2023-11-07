import './App.css';
import Button from '../components/button/Button';
import logo from '../assets/images/logo-newsletter.png';

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
      <Button />
    </div>
  );
}

export default App;

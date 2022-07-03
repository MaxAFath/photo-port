import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
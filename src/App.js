import Header from './components/Header';
import Todos from './components/Todos/Todos';
import Categories from './components/Caregories/Categories';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Todos />
    </div>
  );
}

export default App;

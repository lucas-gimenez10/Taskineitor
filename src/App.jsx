import './App.css';
import {Results} from './Results/Results'
import {Header} from './Header/Header'
import {Filters} from './Filters/Filters'


function App() {
      return (
        <div className="App">
          <Header/>
          <Filters/>
          <Results/>
      </div>
  );}


export default App;

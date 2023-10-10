import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
   <div className="App">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
     <NavBar />
    </div>
  );
}

export default App;

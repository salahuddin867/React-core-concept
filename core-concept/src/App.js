import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Person />


      </header>
    </div>
  );
}
function Person() {
  const nayoks = ['Razzak', 'Salman', 'Sakib', 'Shuvo']
  const products = [
    { name: 'Photoshop', Price: 'TK.1000' },
    { name: 'Illustrator', Price: 'TK.999' },
    { name: 'PDF Reader', Price: 'TK.900' },
    { name: 'PDF', Price: 'TK.90' },
    { name: 'PF', Price: 'TK.9' },
  ]
  return <div>
    <h1>Nayoks:</h1>
    <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      <h2>Products:</h2>
      {
        products.map(product => <li>{product.name} {product.Price}</li>)

      }

    </ul>
  </div>

}
export default App;

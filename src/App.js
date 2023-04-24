import './App.css';
import Carte from './Carte';
import products from './products';



function App() {
  return (
    <div className="App ">

      <h1 className='text-center text-secondary-emphasis py-5'>La mie prime card in React</h1>

      <section className='d-flex flex-wrap justify-content-evenly'>
        {/* SPREAD OPERATOR*/ }
        {products.map((prodotto) => {
          console.log(prodotto);
          return <Carte key={prodotto.id} {...prodotto}  />;
        })}
      </section>
    </div>
  );
}

export default App;

import './Carte.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'



const Carte = ({img, nome, prezzo, costoFinale, children}) => {

  const handleClick = () => {
    console.log("Mi hai premuto!");
  };

  return (
    <div className='d-flex justify-content-center m-5'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} onClick={handleClick}/>
        <Card.Body className='text-center'>
          <h5 className='text-center'>{nome}</h5>
          <hr></hr>
          <p className='h5'>{prezzo} €</p>
          <p className='h5 pt-2'>bamby000</p>
          <p className='h5 text-warning my-3 pt-1 pb-2'>{children}</p>
          <Button variant="warning" className='fw-bold px-5 my-2' onClick={() => alert(`Nome: ${nome}`)}>{costoFinale} €</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Carte;

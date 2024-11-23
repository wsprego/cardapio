import { useState } from 'react';
import './App.css'
import { Card } from './components/card/Card';  
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlOpenModal= () =>{
    setIsModalOpen(prev => !prev)
  }

  return (
  
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map(foodData => 
            <Card 
              price={foodData.price}
              title={foodData.title}
              image={foodData.image}
            />
          )}
        </div>
        {isModalOpen && <CreateModal closeModal={handlOpenModal}/>}
        <button onClick={handlOpenModal}>novo</button>
      </div>
  
  )
}

export default App


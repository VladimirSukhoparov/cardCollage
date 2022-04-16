import React, {useState, useEffect} from 'react';
import './App.css';
import { Container } from './components/Container/Index';


export const App = () => {
  
  const [cardList, setCardList] = useState([
{
    id: 1,
    url: 'https://via.placeholder.com/600/92c952',
},
  ]); 
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')
    .then((response) => response.json())
    .then((result) =>{
      setCardList(result);
      
    })
    
  },[]);
  
  
  return (
    <>
    <Container list = {cardList}/>
    </>
  );
};


import React from 'react';
import { Card } from '../Card';



export const Container = ({list}) => {
  return <>{list.map((item, id) => (
    <Card  key={id} itemPic = {item}/>
  ))}</>;
}

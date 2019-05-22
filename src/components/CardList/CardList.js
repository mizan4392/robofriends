import React from 'react';
import Card from '../Card/Card';

const CardList = (props) =>{

    const {robots} = props;
    const cardComponent = robots.map((usr,index) =>{
       return(
        <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
       ) 
    })
    return(
        <div>
            {cardComponent}
       </div>
    )
}

export default CardList
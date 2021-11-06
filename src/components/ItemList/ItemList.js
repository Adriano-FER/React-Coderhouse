


import Item from '../Item/Item.js'


export default function ItemList({items}) {






  return (
    <div className="App">
        <p>funciono</p>
        <div className="container">
            <div className="row">  
                
        {items.map((item , index) => ( <Item id={item.id} product={item} key={index}/>))}
             </div>
        </div>
    </div>
  );
}


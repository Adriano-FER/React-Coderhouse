


import Item from '../Item/Item.js'


export default function ItemList({items}) {






  return (


            <div className="row">  
                
        {items.map((item , index) => ( <Item id_firebase={item.id_firebase} id={item.id} product={item} key={index}/>))}
             </div>

  );
}


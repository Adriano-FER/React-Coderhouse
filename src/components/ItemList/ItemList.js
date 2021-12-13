


import Item from '../Item/Item.js'


export default function ItemList({items, category}) {
let itemsinList = items
console.log(category)
if(category){ 

  itemsinList = itemsinList.filter(word => word.category === category);
  } 

  return (


            <div className="row">  
                
        {itemsinList.map((item , index) => ( <Item id_firebase={item.id_firebase} id={item.id} product={item} key={index}/>)) }
             </div>

  );
}



import "./ItemDetail.css"


export default function ItemDetails({details}){
    console.log(details)
const {image, name, species, status, location, origin} = details

     return (

                
            
            <div className="col-12">
                 <div className="card" >
                 <img className="card-img-top" src={image} alt="Card image cap"></img>
                     <div className="card-body">
                     <h5 className="card-title">{name}</h5>
                 
                 <p className="card-text">{species}cm tall and was born in {status}</p>
                 <span>He is in {location ? location.name: " "} <br/></span>
                 <span>He from {origin ? origin.name: " "} <br/></span>
                 <button>Buy</button>
                    </div>
                </div>
                </div> 
                
               
  

        )


    }   

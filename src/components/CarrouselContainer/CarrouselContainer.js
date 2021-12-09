import "./Carrousel.css";


export default function Carrousel() {

return (
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="./Extras/navbar1.jpg" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./Extras/navbar2.jpg" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./Extras/navbar3.jpg" alt="Third slide"></img>
    </div>
  </div>
</div>
)
}
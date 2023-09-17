import "./Style.css";
import Carrousel from "../CarrouselContainer/CarrouselContainer";
export default function Home() {
 
 
    return (
    <>
    <div className="bg-b">
      <div className="container">
        <div className="row">
            <div className="col-12 p-5 m-5 wt">
          <h3>A Website for gamers by gamers</h3>
          <Carrousel />
          </div>
        </div>
        <div className="row">
            <div className="col-6 wt">
                <span>Best Quality of products in the Market</span>
            </div>
            <div className="col-6 wt">
                <span>With the most competitive prices</span>
            </div>
        </div>
      </div>
    </div>
    <div className="bg-c">
      <div className="container">
        <div className="row">
            <div className="col-12 p-5 m-5 wt">
          <h3>A Website for gamers by gamers</h3>
          </div>
        </div>
        <div className="row">
            <div className="col-6 wt">
                <span>Best Quality of products in the Market</span>
            </div>
            <div className="col-6 wt">
                <span>With the most competitive prices</span>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

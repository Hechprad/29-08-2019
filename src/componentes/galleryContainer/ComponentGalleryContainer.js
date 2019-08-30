import React from "react";
import "./ComponentGalleryContainer.css";
import Filme1 from "../../assets/imgs/filme1.jpg";
import Filme2 from "../../assets/imgs/filme2.jpg";
import Filme3 from "../../assets/imgs/filme3.jpg";
import Filme4 from "../../assets/imgs/filme4.jpg";
import Filme5 from "../../assets/imgs/filme5.jpg";
import Filme6 from "../../assets/imgs/filme6.jpg";
import Filme7 from "../../assets/imgs/filme7.jpg";
import Filme8 from "../../assets/imgs/filme8.jpg";
import Filme9 from "../../assets/imgs/filme9.jpg";

const ComponentGalleryContainer = () => {
  return (
    <div className="gallery-container">
      <div>
        <img src={Filme1} alt="capa filme 1" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme2} alt="capa filme 2" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme3} alt="capa filme 3" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme4} alt="capa filme 4" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme5} alt="capa filme 5" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme6} alt="capa filme 6" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme7} alt="capa filme 7" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme8} alt="capa filme 8" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={Filme9} alt="capa filme 9" />
        <div className="img-legend">
          <div className="text-legend">
            <h4>Nome do filme</h4>
            <h6>blá blá blá blá blá blá blá blá blá blá blá blá blá blá</h6>
          </div>
          <div className="more-details">
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComponentGalleryContainer;


import rating from './../img/rating.svg';
import img from './../img/image3.jpg';

function CardsPizza(props) {
    return(
        <div className="card bounceIn">
          <img src={img} alt="image" className="card-image" />
          
            <div className="card-text">
              <div className="card-heading">
                <h3 className="card-title">{props.title}</h3>
                <span className="card-tag tag">{props.time}</span>
              </div>

              <div className="card-info">
                <div className="rating">
                  <img src={rating} alt="rating" className="rating-star" />
                  <span>{props.star}</span>
                </div>
                <div className="price">От {props.price} Р</div>
                <div className="category">{props.category}</div>
              </div>
              <button className="btnOrder"onClick={props.onClick}>Заказать</button>
            </div>
        </div>
    );
}

export default CardsPizza;
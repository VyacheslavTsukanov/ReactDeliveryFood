
import React from 'react';
import './App.css';
import Header from './components/Header';
import CardsPizza from './components/CardsPizza';
import Footer from './components/Footer';
import WebsiteLogo from './components/WebsiteLogo';



const arr = [
  {
    image: "./img/image3.jpg",
    title: "Пицца плюс",
    time: "35 мин",
    star: "4.5",
    price: "900",
    category: "Пицца"
  },
  {
    // image: "./img/image3.jpg",
    title: "Тануки",
    time: "20 мин",
    star: "5.0",
    price: "800",
    category: "Пицца"
  },
  {
    // image: "image3.jpg",
    title: "FoodBand",
    time: "45 мин",
    star: "4.4",
    price: "550",
    category: "Пицца"
  }
];

function App() {
  return (

    <div className="">
    
     <Header />

     <main className="main">
      <div className="container">
        <WebsiteLogo />
        <section className="restaurants">
          <div className="section-heading">
            <h2 className="section-title animated pulse">Рестораны</h2>
            <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов" />
          </div>
          <div className="cards">
            {arr.map((obj) => (
              <CardsPizza            
                title={obj.title}
                time={obj.time}
                star={obj.star}
                price={obj.price}
                category={obj.category}
                image={obj.image}
                onClick={() => console.log(obj)}
              />
            ))}
           
          
          </div>
          <div/>
        </section>
        </div>
      </main>

     <Footer />

    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">Корзина</h3>
          <button class="close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="food-row">
            <span class="food-name">Ролл угорь стандарт</span>
            <strong class="food-price">250 P</strong>
            <div class="food-counter">
              <button class="counter-button">-</button>
              <span class="counter">1</span>
              <button class="counter-button">+</button>
            </div>
          </div>
          <div class="food-row">
            <span class="food-name">Ролл угорь стандарт</span>
            <strong class="food-price">250 P</strong>
            <div class="food-counter">
              <button class="counter-button">-</button>
              <span class="counter">1</span>
              <button class="counter-button">+</button>
            </div>
          </div>
          <div class="food-row">
            <span class="food-name">Ролл угорь стандарт</span>
            <strong class="food-price">250 P</strong>
            <div class="food-counter">
              <button class="counter-button">-</button>
              <span class="counter">1</span>
              <button class="counter-button">+</button>
            </div>
          </div>
          <div class="food-row">
            <span class="food-name">Ролл угорь стандарт</span>
            <strong class="food-price">250 P</strong>
            <div class="food-counter">
              <button class="counter-button">-</button>
              <span class="counter">1</span>
              <button class="counter-button">+</button>
            </div>
          </div>
          <div class="food-row">
            <span class="food-name">Ролл угорь стандарт</span>
            <strong class="food-price">250 P</strong>
            <div class="food-counter">
              <button class="counter-button">-</button>
              <span class="counter">1</span>
              <button class="counter-button">+</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <span class="modal-pricetag">1250 P</span>
          <div class="footer-buttons">
            <button class="button button-primary">Оформить заказ</button>
            <button class="button">Отмена</button>
          </div>
        </div>
      </div>
    </div>



    </div>
  );
}

export default App;

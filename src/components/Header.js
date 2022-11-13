
import logo from './../img/logo.svg';
import user  from './../img/user.svg';
import shopCart  from './../img/shopping-cart.svg';

function Header() {
    return(
    <div className="container">
      <header className="header">
          <img  src={logo} alt="logo" className="logo" />
          <input type="text" className="input input-address input" placeholder="Адрес доставки" />
          <div className="buttons">
            <button className="button button-primary">
            <img src={user} alt="user" className="button-icon" />
              <span className="button-text">Войти</span>
            </button>
            <button className="button" id="cart-button">
            <img src={shopCart} alt="shopping-cart" className="button-icon" />
              <span className="button-text">Корзина</span>
            </button>
          </div>
        </header>
      </div>
    );
}

export default Header;
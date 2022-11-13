
import logo from './../img/logo.svg';
import instagram from './../img/instagram.svg';
import facebook from './../img/facebook.svg';
import vk from './../img/vk.svg';

function Footer() {
    return(
        <footer class="footer">
        <div class="container">
          <div class="footer-block">
            <img src={logo} alt="logo" class="logo footer-logo" />
            <nav class="footer-nav">
              <a href="#" class="footer-link">Ресторанам</a>
              <a href="#" class="footer-link">Курьерам</a>
              <a href="#" class="footer-link">Пресс-центр</a>
              <a href="#" class="footer-link">Контакты</a>
            </nav>
            <div class="social-links">
              <a href="#" class="social-link"><img src={instagram} alt="instagram" /></a>
              <a href="#" class="social-link"><img src={facebook} alt="facebook" /></a>
              <a href="#" class="social-link"><img src={vk} alt="vk" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
import './style.css';
import './Normalize.css'

function App() {
  return (
    <div>
      <nav>
        <div class="logo">
            <h1>GLITZYGEM</h1>
        </div>

        <div>
            <ul class="navlist">
                <li class="navitem current">HOME</li>
                <li class="navitem"><a href="Shop.html">SHOP</a></li>
                <li class="navitem"><a href="About.html">ABOUT</a></li>
                <li class="navitem"><a href="Contacts.html">CONTACT</a></li>

            </ul>
        </div>
      </nav>

      <section class="row1">
        <div class="content1">
            <p>MOISSANITE<br/> DIAMOND<br/> RING</p>
            <p class="newRelease">NEW REALEASE</p>
            <img class="flower1" src={require("./flower1.png")}/>
            <img class="ring" src={require("./Main RING.png")}/> 
            <button class="btn">NOW FOR 25% OFF!</button>
        </div> 
      </section> 

    
      <section class="hands">
          <div>
              <img class="handring" src={require("./ringhand.png")} />
              <p>A testament to timeless elegance. This ring is set in 18k pure gold and boast a brilliant cut diamond encircled by a constellation<br/>of smaller, shimmering stones. Perfect for adding a luxurious touch to any outfit or occasion, it's more than just a ring.</p>
          </div>
      </section>

      <div>
          <img src={require("./Model 1.png")} alt="" class="./girl"/>
          <img src={require("./Ring 1.png")} alt="" class="./ring2"/>
          <img src={require("./Legacyy Ring.png")} alt="" class="./ring3"/>
          <p class="elegance">01. ELEGANCE</p>
          <p class="quality">02. QUALITY</p>
          <p class="legacy">03.</p>
          <p class="leg2">LEGACY</p>
          <p class="cont2">Crafted with meticulous precision, each<br/>ring is designed to meet the highest<br/>standards to make it a timelessly elegant<br/> ring.</p>
      </div>
       
      <section class="cont3">
          <div> 
              <p class="feature">FEATURED</p>
              <p class="bloom"> GOLDEN BLOOM COLLECTION</p>
              <p class="contents2">The ethereal of sunlight inspires Golden Bloom.<br/> Each piece captures the golden sunset hour.</p>
              <a href="#">SHOP NOW</a>
              <img src={require("./Model Landscape.png")} alt="" class="backdrop"/>
          </div>
      </section>   
    
      <section class="cont4">
          <div class ="rectangle">
              <button>SHOP NOW</button>
              <p class="contents3">GOLDEN<br/>BLOOM<br/>COLLECTION</p>
              <p class="feature2">FEATURED</p>
              <div> 
                <p class="contents4">Experience the ethereal allure of our featured<br/>collection, where the array of sunshine and<br/>celestial elegance intertwine in each<br/> meticulously crafted pieces.</p>  
              </div>
          </div>
      </section>

      <section class="cont5">
          <div> 
              <img class="er" src={require("./Luxury Earring.png")}/>
          </div>
          <div>
              <img class="mr" src={require("./Luxury Necklace.png")}/>
          </div>
          <div>
              <img class="lb" src={require("./Luxury Bracelet.png")}/>
          </div>
      </section>

    <section class="titles">
        <div>
            <p class="name1">Morning Helios<br/>Diamond Earrings</p>
            <p class="price1">Php. 7.750.00</p>
        </div>
        <div> 
            <p class="name2">Hearty Vega<br/>Pendant Necklace</p>
            <p class="price2">Php. 10.300.00</p>
        </div>
        <div>
            <p class="name3">Altair Embellishment<br/>Golden Bracelet</p>
            <p class="price3">Php. 6.500.00</p>
        </div>

    </section>

    <section class="footer">
        <div class=" rectangle2">
          <p class="logo1">GLITZYGEM</p>
          <p class="sched">MONDAY - SUNDAY <br/> 10:00 AM - 06:00 PM</p>
          <p class="privacy">Privacy | Subscribe</p>  
              <div>
                  <p class="contact">Contact</p>
                  <p class="add">1409 Cysterq Street <br/> (68+)9340328196 <br/> glitzygem@gmail.com</p>
              </div>

              <div >
                  <img class="fb" src={require("./Fb Logo.png")}/>
                  <img class="ig" src={require("./IG Logo.png")}/>
                  <img class="twt" src={require("./Twitter Logo.png")}/>
              </div>
        </div>
    </section>
  </div>
  );
}

export default App;

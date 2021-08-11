import React, {Component} from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Swal from "sweetalert2";
import MetaTags from "react-meta-tags";

export default class Contact extends Component {
  submituserInquiryForm() {
    var carbattery = document.getElementById("carbattery").value;
    var area = document.getElementById("area").value;
    var contactno = document.getElementById("contactno").value;
    var make = document.getElementById("make").value;
    var submitted = true;

    if (carbattery === "") {
      submitted = false;
      document.getElementById("carbatteryerror").innerHTML = "** Please fill the Battery Model";
      // return false;
    } else if (area === "") {
      submitted = false;
      document.getElementById("areaerror").innerHTML = "** Please fill the Area";
      // return false;
    } else if (contactno === "") {
      submitted = false;
      document.getElementById("contactnoerror").innerHTML = "** Please fill the Contact";
      // return false;
    } else if (isNaN(contactno)) {
      submitted = false;
      document.getElementById("contactnoerror").innerHTML = "** Check Your contact no";
      // return false;
    } else if (make === "") {
      submitted = false;
      document.getElementById("makeerror").innerHTML = "** Select your make";
      // return false;
    } else {
      if (submitted) {
        Swal.fire("Form submitted. We will contact you shortly ;)").then(() => document.getElementById("myForm").onreset(window.location.reload()));
        return submitted;
      }
    }
  }
  render() {
    return (
      <div>
        <MetaTags>
          <meta charSet="utf-8" />
          <title>AutoB</title>
          <meta
            name="title"
            content="Car Battery Dubai & Sharjah | AutoB"
          />
          <meta
            name="description"
            content="Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta."
          />
          <meta
            name="keywords"
            content="car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
          />
        </MetaTags>
        <Navbar/>
        <div className="container pt-5 text-center">
          <div className="row justify-content-center">
            <h1 className="heading">Enter your CAR BATTERY DETAILS , AREA YOU ARE IN , AND YOUR MOBILE NUMBER WITH COUNTRY CODE. We get notified at a moment and We come to you.</h1>
          </div>
        </div>

        <div class="container-fluid py-5 form-bg">
          <div class="row justify-content-center">
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d462423.69677338307!2d55.0367571!3d25.1125178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625891911862!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} title="car battery dubai" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-10  ">
            <h1 className="paragraph">Order your battery now!</h1>
            <hr/>
              <iframe title="car battery replacement uae" name="hidden_iframe" id="hidden_iframe"
                style={
                  {display: "none"}
              }></iframe>
              <form id="myForm" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
                onSubmit={
                  this.submituserInquiryForm
                }
                class="py-4 px-4"
                target="hidden_iframe">
                  <div class="form-group">
              <select class="form-control" type="dropdown" id="make" name="entry.562376282" required="required">
                <option value="">Choose Make</option>
                <option value="AC">AC</option>
                <option value="Acura">Acura</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="AMG">AMG</option>
                <option value="ARO">ARO</option>
                <option value="Asia">Asia</option>
                <option value="Aston Martin">Aston Martin</option>
                <option selected value="Audi">Audi</option>
                <option value="Beijing">Beijing</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="BMW Alpina">BMW Alpina</option>
                <option value="Brilliance">Brilliance</option>
                <option value="Bristol">Bristol</option>
                <option value="Bugatti">Bugatti</option>
                <option value="Buick">Buick</option>
                <option value="BYD">BYD</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Callaway">Callaway</option>
                <option value="Carbodies">Carbodies</option>
                <option value="Caterham">Caterham</option>
                <option value="Chana">Chana</option>
                <option value="Chery">Chery</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Citroen">Citroen</option>
                <option value="Cizeta">Cizeta</option>
                <option value="Dacia">Dacia</option>
                <option value="DADI">DADI</option>
                <option value="Daewoo">Daewoo</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="De Tomaso">De Tomaso</option>
                <option value="Derways">Derways</option>
                <option value="Dodge">Dodge</option>
                <option value="Doninvest">Doninvest</option>
                <option value="Eagle">Eagle</option>
                <option value="FAW">FAW</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Ford USA">Ford USA</option>
                <option value="Foton">Foton</option>
                <option value="FSO">FSO</option>
                <option value="Fuqi">Fuqi</option>
                <option value="Geely">Geely</option>
                <option value="Ginetta">Ginetta</option>
                <option value="GMC">GMC</option>
                <option value="Great Wall">Great Wall</option>
                <option value="Harbin Hafei">Harbin Hafei</option>
                <option value="Hindustan">Hindustan</option>
                <option value="Holden">Holden</option>
                <option value="Honda">Honda</option>
                <option value="Huabei">Huabei</option>
                <option value="Hummer">Hummer</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Infiniti">Infiniti</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Iveco">Iveco</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Lancia">Lancia</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Lexus">Lexus</option>
                <option value="Lifan">Lifan</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Lotec">Lotec</option>
                <option value="Lotus">Lotus</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Marcos">Marcos</option>
                <option value="Maruti">Maruti</option>
                <option value="Maserati">Maserati</option>
                <option value="Maybach">Maybach</option>
                <option value="Mazda">Mazda</option>
                <option value="McLaren">McLaren</option>
                <option value="Mega">Mega</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Mercury">Mercury</option>
                <option value="MG">MG</option>
                <option value="MINI">MINI</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Morgan.">Morgan.</option>
                <option value="Nissan">Nissan</option>
                <option value="Oldsmobile">Oldsmobile</option>
                <option value="Opel">Opel</option>
                <option value="Pagani">Pagani</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Pininfarina">Pininfarina</option>
                <option value="Plymouth">Plymouth</option>
                <option value="Pontiac">Pontiac</option>
                <option value="Porsche">Porsche</option>
                <option value="Proton">Proton</option>
                <option value="Renault">Renault</option>
                <option value="Rolls-Royce">Rolls-Royce</option>
                <option value="Rover">Rover</option>
                <option value="Saab">Saab</option>
                <option value="Samand">Samand</option>
                <option value="Samsung">Samsung</option>
                <option value="Saturn">Saturn</option>
                <option value="Scion">Scion</option>
                <option value="Seat">Seat</option>
                <option value="Shuanghuan">Shuanghuan</option>
                <option value="Skoda">Skoda</option>
                <option value="Smart">Smart</option>
                <option value="Soueast">Soueast</option>
                <option value="SSangYong">SSangYong</option>
                <option value="Subaru">Subaru</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Talbot">Talbot</option>
                <option value="Tatra">Tatra</option>
                <option value="Tianma">Tianma</option>
                <option value="Tianye">Tianye</option>
                <option value="Tofas">Tofas</option>
                <option value="Toyota">Toyota</option>
                <option value="TVR">TVR</option>
                <option value="Vauxhall">Vauxhall</option>
                <option value="Venturi">Venturi</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
                <option value="Wanfeng">Wanfeng</option>
                <option value="Wartburg">Wartburg</option>
                <option value="Wiesmann">Wiesmann</option>
                <option value="Xin Kai">Xin Kai</option>
                <option value="Yugo">Yugo</option>
                <option value="Zastava">Zastava</option>
                <option value="Zhongxing">Zhongxing</option>
              </select>
              <div>
                    <span id="makeerror" className="text-danger font-weight-bold"></span>
                  </div>
            </div>

                <div class="form-group">
                  <small id="CarBatteryModel" class="form-text">
                    <i class="fas fa-car-battery"></i>
                    Vehicle Details
                  </small>
                  <input type="text" name="entry.1911907904" id="carbattery" class="form-control " aria-describedby="CarBatteryModel" placeholder=" Car Model Year" autoComplete="off"/>
                  <div>
                    <span id="carbatteryerror" className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="AreaName" class="form-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Delivery Location
                  </small>
                  <input type="text" name="entry.1153362739" id="area" class="form-control" aria-describedby="AreaName" placeholder=" Area Name, Emirate" autoComplete="off"/>
                  <div>
                    <span id="areaerror" className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <div class="form-group">
                  <small id="ContactNo" class="form-text">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    Contact
                  </small>
                  <input type="text" name="entry.153243795" id="contactno" class="form-control " aria-describedby="ContactNo" placeholder="(Country code)(No.)" autoComplete="off"/>
                  <div>
                    <span id="contactnoerror" className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <input type="hidden" id="ref" name="entry.376651987" value="AJB"/>
                <button type="submit" class="btn btn-danger btn-lg btn-block pb-3 form-btn" target="_self">
                  <i class="fab fa-whatsapp"></i>
                  &nbsp;&nbsp;SEND
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="text-center">
          <Footer/>
        </div>

      </div>
    );
  }
}

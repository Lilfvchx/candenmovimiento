import primerimagen from "./primerfoto.jpg";
import segundaimagen from "./segundafoto.jpg";
import tercerimagen from "./tecerfoto.jpg";

const Carrusel = () => {
  const link = "https://www.youtube.com/watch?v=qUSG9fu6TyI";
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={primerimagen} alt="" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={segundaimagen} alt="" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={tercerimagen} alt="" />
          </div>
          <div className="embed-responsive embed-responsive-16by9"></div>
          <div className="carousel-item">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe title="reel"
                class="embed-responsive-item"
                src={link}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <nav className="nav nav-pills flex-column flex-sm-row p-1">
        <a
          className="flex-sm-fill text-sm-center nav-link "
          href="mailto: candelaenmovimiento@gmail.com?Subject=Contacto%20desde%20website"
        >
          Contacto
        </a>
        
        <a
          className="flex-sm-fill text-sm-center nav-link border border-white border-2 "
          href="https://www.youtube.com/channel/UCwI67p72iKpxwr8LSz-dv0A"
          
        >
          <i class="fa-brands fa-youtube fa-2x "> </i>
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"

          href="https://www.instagram.com/candelaenmovimiento/"
        >
          Redes sociales
        </a>
      </nav>
    </>
  );
};

const Info = () => {
  return (
    <>
      <div class="mt-4 p-5 bg-danger text-white rounded">
        <h1>About me: </h1>
        <p>Estoy estudiando licencitura en composicion coreografica con mencion en danza. Tengo un profesorado en danza clasica, <a href="http://www.alternativateatral.com/obra67717-pulsion">fui interprete en la obra "pulsion"</a></p>
      </div>
    </>
  );
};
const Redes = () => {
  return(
   <>
   <div className="d-grid">
  <a className="btn btn-success btn"
  href="https://www.instagram.com/candelaenmovimiento/?hl=es-la"> <i class="fa-brands fa-instagram fa-5x"></i>  </a>;
  <div className="d-flex justify-content-between">
  <a className="btn btn-light" href="https://m.facebook.com/candelaenmovimiento/"><i class="fa-brands fa-facebook-square fa-5x"></i></a>
  <a className="btn btn-light" href="https://www.linkedin.com/in/candela-errandonea-931113236/"><i class="fa-brands fa-linkedin fa-5x"></i></a>

  </div>
  <div></div>
  </div>
  </>
  
  
)};

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Carrusel />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <Redes />
      </div>
    </>
  );
}

export default App;

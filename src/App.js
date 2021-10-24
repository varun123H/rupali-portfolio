
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import './App.css';


function App() {
  return (
    <>

     <ul style={{"backgroundColor":"black"}} class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">About</a>
  </li>
  <li  class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Subjects</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="https://maths-5th.herokuapp.com/">5th Maths</a></li>
      <li><a class="dropdown-item" href="https://varun123h.github.io/rb6/">6th Maths</a></li>
      <li><a class="dropdown-item" href="https://varun123h.github.io/rvb6S/">6th Science</a></li>
      <li><a class="dropdown-item" href="https://varun123h.github.io/rvb7/">7th Maths</a></li>
      <li><a class="dropdown-item" href="https://rb7science.web.app">7th Science</a></li>
    </ul>
  </li>
  
</ul>
 <div style={{"text-align" : "center", "margin": "40px 40px 40px 40px"}}>
        <div class="polaroid">
        <div  class="container">
<div class="jumbotron jumbotron-fluid">
  <div class="container">

  <div class="card mb-3" style={{"max-width":"100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={process.env.PUBLIC_URL + "/mom1.jpg"} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">Mrs.Rupali Vinayak Badave</h1>
        <h4 class="card-text">Education: B.Com,D.Ed</h4>
        <h4 class="card-text">Profession: Associate Teacher (Maths,Science) <br/>at Kumar Bhavan Pushpanagar</h4>
        <h4 class="card-text">Experience: 10+ years</h4>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
   
  </div>
</div>
</div>
</div>
</div>
<div style={{"text-align": "center"}}>
  <h2>Contact:</h2>
    <a href="https://wa.me/+919890045164" target="_blank" class="fa fa-whatsapp"></a>
<a href="tel:516-922-9463" class="fa fa-phone"></a>
<a href="mailto:2456viru@gmail.com" target="_blank" class="fa fa-envelope"></a>
</div>


    
   
    {/* <Router>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/blogs">Blog Articles</Link>
    </div>
    <div>
      <Link to="/contact">Contact Me</Link>
    </div>

    

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
    </Router>*/}
    
  </>
);
}

export default App;

import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Info from "./components/Info.jsx";
import Navbar from "./components/Navbar.jsx";
import Reviews from "./components/Reviews.jsx";
import Usage from "./components/Usage.jsx";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Header />
         <Info />
         <Usage />
         <Reviews />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;

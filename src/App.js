import "./App.css";

//Componenten Importieren
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//Aufbau der Seite
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

//Fuction wird exportiert
export default App;

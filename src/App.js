import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Inicio from './components/Inicio/Inicio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Transparencia from './components/Transparencia/Transparencia';
import Rubros from './components/Rubros/Rubros';
import DetalleRubro from './components/DetalleRubro/DetalleRubro';
import RubrosHistoricos from "./components/RubrosHistoricos/RubrosHistoricos";
import Agenda from "./components/Agenda/Agenda";
import ArmonizacionContable from "./components/ArmonizacionContable/ArmonizacionContable";
import Licitaciones from "./components/Licitaciones/Licitaciones";
import NewArmonizacion from "./components/NewArmonizacion/NewArmonizacion";
import Error404 from "./components/Error404/Error404";

import { Armonizacion } from "./json/armonizacionContable";
import { Disciplina } from "./json/disciplinaFinanciera";
import Labagua from "./components/labagua/labagua";




function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={ <Inicio /> } />
          <Route exact path="/transparencia" element={ <Transparencia/> } />
          <Route exact path="/labagua" element={ <Labagua/> } />
          <Route exact path="/Transparencia/Rubros" element={ <Rubros/> } />
          <Route exact path="/Transparencia/Rubros/DetalleRubro/:nombre" element={ <DetalleRubro/> } />
          <Route exact path="/Transparencia/Rubros/RubrosHistoricos" element={ <RubrosHistoricos/> } />
          {/* <Route exact path="/Transparencia/Armonizacion" element={ <ArmonizacionContable data={Armonizacion} title="Armonizacion Contable" dataType="/Armonizacion" /> } />
          <Route exact path="/Transparencia/Disciplina" element={ <ArmonizacionContable data={Disciplina} title="Disciplina Financiera" dataType="/Disciplina" /> } /> */}
          <Route exact path="/Transparencia/Armonizacion" element={ <NewArmonizacion data={Armonizacion} title="Armonizacion Contable" /> } />
          <Route exact path="/Transparencia/Disciplina" element={ <NewArmonizacion data={Disciplina} title="Disciplina Financiera"  /> } />
          <Route exact path="/Transparencia/Licitaciones" element={<Licitaciones /> } />
          <Route exact path="/Agenda" element={ <Agenda/> } />
          <Route exact path="*" element={<Error404 /> } />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

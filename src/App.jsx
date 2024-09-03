import './App.css';
import { Route, Routes } from "react-router";
import Rus from './RU/Rus';
import Language from './Language';
import KG from './KG/Kg';
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Language/>}/>
        <Route path='/RU' element={<Rus/>}/>
        <Route path='/KG' element={<KG/>}/>
      </Routes>
    </>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Departamentos from './paginas/Departamentos';
import Lancamentos from './paginas/Lancamentos';
import Destaques from './paginas/Destaques';
import PcGamer from './paginas/PcGamer';
import Eletronicos from './paginas/Eletronicos';
import SejaPrime from './paginas/SejaPrime';
import OfertaDoDia from './paginas/OfertaDoDia'
import BaixeOApp from './paginas/BaixeOApp'

export default function Rotas() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path='/departamentos' element={<Departamentos /> } />
                <Route path='/lancamentos' element={<Lancamentos />}/>
                <Route path='/destaques' element={<Destaques />} />
                <Route path='/pcgamer' element={<PcGamer />} />
                <Route path='/eletronicos' element={<Eletronicos />} />
                <Route path="/sejaprime" element={<SejaPrime />} />
                <Route path="/ofertadodia" element={<OfertaDoDia />} />
                <Route path='/baixeoapp' element={<BaixeOApp />} />


            </Routes>
        </BrowserRouter>
    </div>
  )
}

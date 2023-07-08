import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomeComponent } from "./page/home/Home";
import { FormularioComponent } from "./page/formulario/Formulario";
import { ChatComponent } from "./page/chat/Chat";
import { HomeDemo } from "./page/home/homeDemo";


export const RouterComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeDemo/>}/>
                <Route path="/formulario" element={<FormularioComponent />} />
                <Route path="/chat" element={<ChatComponent />} />
            </Routes>
        </BrowserRouter>

    );
};

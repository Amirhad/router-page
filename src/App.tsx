import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App:React.FC = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </div>
  );
};

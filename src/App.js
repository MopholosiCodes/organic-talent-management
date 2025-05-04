import React from "react";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BecomeModel } from "./pages/BecomeModel";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Models } from "./pages/Models";
import { Model } from "./pages/Model";
import { Clients} from "./pages/Clients";
import { Contact } from "./pages/Contact";
import { Client } from "./pages/Client";

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/become-a-model" element={<BecomeModel />} />
          <Route exact path="/models/:gender" element={<Models />} />
          <Route exact path="/model/:name" element={<Model />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/client/:client" element={<Client />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;

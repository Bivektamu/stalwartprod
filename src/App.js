import React from "react";
import { Hero } from './components/Hero'
import { Plan } from './components/Plan'
import Work from './components/Work'
// import Team from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Services } from "./components/Services";
function App() {
  return (
    <>
      <Header />
        <Layout>
          <Hero />
          <Services />
          <Plan />
          <Work />
          {/* <Team /> */}
          <Contact />
        </Layout>
        <Footer />
    </>
  );
}

export default App;

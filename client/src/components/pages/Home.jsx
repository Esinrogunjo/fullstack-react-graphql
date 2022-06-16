import React from "react";
import AddClientModal from "../AddClientModal";
import Clients from "../Clients";
import Projects from "../Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;

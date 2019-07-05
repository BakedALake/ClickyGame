import React from "react";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Jumbotron from "./components/Jumbotron";

function App() {
    return (
        <div>
            <NavTabs />
            <Jumbotron />
            <Container />
        </div>
    );
}


export default App;

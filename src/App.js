import React from "react";
import ContextProvider, { AppConsumer } from "./ContextProvider";
import "./App.scss";
import HeaderMobile from "./components/HeaderMobile";
import HeadeDesktop from "./components/HeaderDesktop";
import MenuSidebar from "./components/Sidebar";
import LoadFile from "./components/LoadFile";
import LineChart from "./components/LineChart";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    /** Main wrapper */
    <ContextProvider>
      <div className="page-wrapper">
        {/* Header */}
        <HeaderMobile />
        <MenuSidebar />
        <div className="page-container">
          <HeadeDesktop />
          <div className="main-content">
            <LoadFile />
            <div className="section__content section__content--p30">
              <div className="card-columns">
                <div
                  class="card bg-light text-white"
                  style={{ width: "650px" }}
                >
                  <div className="card-body">
                    <h4 className="card-title">Line Chart</h4>
                    <AppConsumer>
                      {context => (
                        <LineChart data={context.state.objectsData} />
                      )}
                    </AppConsumer>
                    <p className="card-text">Some example text.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;

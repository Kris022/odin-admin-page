import "./style.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Header />
        {/* main */}
        <main>
          <Projects />
          <div className="right-side">
            <h3>Annoucements</h3>
            <div className="annoucement-card">
              <div className="ann-row">
                <h5>Site something</h5>
                <p>lorem impsum sometin soemhwer everywhere what the fuck.</p>
              </div>
              <div className="ann-row">
                <h5>Site something</h5>
                <p>lorem impsum sometin soemhwer everywhere what the fuck.</p>
              </div>
              <div className="ann-row">
                <h5>Site something</h5>
                <p>lorem impsum sometin soemhwer everywhere what the fuck.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;

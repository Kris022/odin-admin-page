import "./style.css";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import pfp from "../../assets/pfp.jpeg";
const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="left">
          <AiOutlineSearch size={20} />
          <input type="text" />
        </div>
        <div className="right">
          <AiOutlineBell size={24} />
          <img src={pfp} id="top-pfp" alt="" />
          <h4>Morgan Oakley</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
            <img src={pfp} id="pfp-bottom" alt="" />
            <div className="username-text" >
                <h6>Hi there,</h6>
                <h4>Morgan oakley (@morgano)</h4>
            </div>
        </div>
        <div className="right">
            <button>New</button>
            <button>Upload</button>
            <button>Share</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

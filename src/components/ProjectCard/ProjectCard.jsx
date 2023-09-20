import "./style.css";

import { AiOutlineShareAlt, AiOutlineStar, AiOutlineEye } from "react-icons/ai";

const ProjectCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <h3>Project Title</h3>
        <p>
          Some short description of the proejct or other. Consider using text
          wrapping/or whatever it was called on TOP.
        </p>
      </div>
      <div className="card-footer">
        <div>
          <AiOutlineStar size={24} />
        </div>
        <div>
          <AiOutlineEye size={24} />
        </div>
        <div>
          <AiOutlineShareAlt size={24} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

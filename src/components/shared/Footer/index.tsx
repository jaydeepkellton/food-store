import { useNavigate } from "react-router-dom";
import MUIGrid from "../MUI-Grid";
import "./footer.scss";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='footer-main'>
        <MUIGrid
          container
          className='d-flex justify-content-between align-items-center'
          spacing={2}
        >
          <MUIGrid item md={6} lg={6}>
            <div onClick={() => navigate("/about-me")}>About Me</div>
          </MUIGrid>
        </MUIGrid>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { MUIButton, MUIGrid } from "../../components/shared";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <MUIGrid
          container
          className='d-flex justify-content-between align-items-center'
          spacing={2}
        >
          <MUIGrid item md={4}>
            <MUIButton
              handleClickCB={() => navigate("/menu")}
              type={"submit"}
              className='c-btn'
              label={"Menu"}
            />
          </MUIGrid>
          <MUIGrid item md={4}>
            <MUIButton
              handleClickCB={() => navigate("/my-favourites")}
              type={"submit"}
              className='c-btn'
              label={"My Favourites"}
            />
          </MUIGrid>
          <MUIGrid item md={4}>
            <MUIButton
              handleClickCB={() => navigate("/random-meal")}
              type={"submit"}
              className='c-btn'
              label={"Random Meal"}
            />
          </MUIGrid>
        </MUIGrid>
      </div>
    </>
  );
};

export default React.memo(Home);

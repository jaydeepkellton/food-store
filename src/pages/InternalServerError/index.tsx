import { Container } from "@mui/material";
import React from "react";
import "./InternalServerError.scss";

const InternalServerError: React.FC = () => {
  return (
    <>
      <Container>
        <p className='message'>INTERNAL SERVER ERROR</p>
      </Container>
    </>
  );
};

export default React.memo(InternalServerError);

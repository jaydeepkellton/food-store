import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectLoader, setLoader } from "../../../store/slice/loader.slice";

const Loader: React.FC = () => {
  const loading: boolean = useAppSelector(selectLoader);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoader(false));
  }, [location]);

  return loading ? (
    <div className='loader'>
      <CircularProgress variant='indeterminate' />
    </div>
  ) : null;
};

export default Loader;

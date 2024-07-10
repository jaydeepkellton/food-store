import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { menuList, selectMenu } from "../../store/slice/menu.slice";
import { useDispatch } from "react-redux";
import { MUIGrid } from "../../components/shared";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const menuCategories = useAppSelector(selectMenu);
  const [menu, setMenu] = useState<any>([]);

  useEffect(() => {
    dispatch(menuList() as any);
  }, [dispatch]);

  useEffect(() => {
    const res = menuCategories;
    setMenu(res?.data?.categories);
  }, [menuCategories]);

  return (
    <>
      <MUIGrid
        container
        className='d-flex justify-content-start align-items-center'
        spacing={2}
      >
        {menu?.map((category: any) => (
          <MUIGrid item md={4}>
            <Link
              to={`/category/${category?.strCategory}`}
              state={{ type: category?.strCategory }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={category?.strCategoryThumb}
                    alt={category?.strCategory}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {category?.strCategory}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </MUIGrid>
        ))}
      </MUIGrid>
    </>
  );
};

export default React.memo(Menu);

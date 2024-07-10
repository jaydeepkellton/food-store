import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../helpers/Storage";
import { MUIGrid } from "../../components/shared";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MyFavourites: React.FC = () => {
  const [favourites, setFavourites] = useState<any>([]);

  useEffect(() => {
    const savedFavourites = getLocalStorage("favourites") || [];
    setFavourites(savedFavourites);
  }, []);

  return (
    <>
      <h1>My Favourites</h1>
      <MUIGrid
        container
        className='d-flex justify-content-start align-items-center'
        spacing={2}
      >
        {favourites?.map((category: any) => (
          <MUIGrid item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={category?.strMealThumb}
                  alt={category?.strMeal}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {category?.strMeal}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </MUIGrid>
        ))}
      </MUIGrid>
    </>
  );
};

export default React.memo(MyFavourites);

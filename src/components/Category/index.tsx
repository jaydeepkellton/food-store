import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { categoryList, selectCategories } from "../../store/slice/menu.slice";
import MUIGrid from "../shared/MUI-Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const categories = useAppSelector(selectCategories);
  const [items, setItems] = useState<any>([]);
  const [favourites, setFavourites] = useState<any>([]);

  useEffect(() => {
    dispatch(categoryList(categoryName) as any);
  }, [dispatch]);

  useEffect(() => {
    const res = categories;
    setItems(res.data.meals);
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourite = (category: any) => {
    setFavourites((prevFavorites: any) => {
      const newFavorites = [...prevFavorites, category];
      return newFavorites;
    });
  };

  const removeFavourite = (idMeal: any) => {
    setFavourites((prevFavorites: any) =>
      prevFavorites.filter((category: any) => category.idMeal !== idMeal)
    );
  };

  const isFavourite = (idMeal: any) =>
    favourites.some((category: any) => category.idMeal === idMeal);

  return (
    <>
      <h1>Category Name: {categoryName}</h1>
      <MUIGrid
        container
        className='d-flex justify-content-start align-items-center'
        spacing={2}
      >
        {items?.map((category: any) => (
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
                {isFavourite(category.idMeal) ? (
                  <FavoriteIcon
                    onClick={() => removeFavourite(category.idMeal)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => addToFavourite(category)}
                  />
                )}
              </CardActionArea>
            </Card>
          </MUIGrid>
        ))}
      </MUIGrid>
    </>
  );
};

export default Category;

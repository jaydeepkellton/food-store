import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { randomMealList, selectRandomMeal } from "../../store/slice/menu.slice";
import { MUIButton, MUIGrid } from "../../components/shared";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const RandomMeal: React.FC = () => {
  const dispatch = useDispatch();
  const randomMeals = useAppSelector(selectRandomMeal);
  const [randomMeal, setRandomMeal] = useState<any>([]);

  const handleGenerateMeal = () => {
    dispatch(randomMealList() as any);
  };

  useEffect(() => {
    const res = randomMeals;
    setRandomMeal(res.data.meals);
    console.log(res.data.meals, "res");
  }, [randomMeals]);

  return (
    <>
      <div>
        <h1>Random Meal Page</h1>
        {randomMeal?.map((category: any) => (
          <MUIGrid item md={4}>
            <Card sx={{ maxWidth: 345, marginBottom: "15px" }}>
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
        <MUIButton
          handleClickCB={handleGenerateMeal}
          type={"submit"}
          className='c-btn'
          label={"Generate Meal"}
        />
      </div>
    </>
  );
};

export default React.memo(RandomMeal);

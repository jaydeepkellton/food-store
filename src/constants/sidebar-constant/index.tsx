import { PAGE_NAME } from "../../constants/pages-routes";
import { PAGE_URL, PageNames } from "../../constants/pages-routes/PageURLs";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";

export const DrawerData = [
  {
    lable: PAGE_NAME.Home,
    icon: <HomeIcon />,
    activeIcon: <HomeIcon color={"primary"} />,
    id: 1,
    navigate: true,
    disabled: false,
    path: PAGE_URL[PageNames.Home],
    child: [],
  },
  {
    lable: PAGE_NAME.Menu,
    icon: <RestaurantMenuIcon />,
    activeIcon: <RestaurantMenuIcon />,
    id: 2,
    navigate: true,
    disabled: false,
    path: PAGE_URL[PageNames.Menu],
    child: [],
  },
  {
    lable: PAGE_NAME.MyFavourites,
    icon: <FavoriteIcon />,
    activeIcon: <FavoriteIcon />,
    id: 3,
    navigate: true,
    disabled: false,
    path: PAGE_URL[PageNames.MyFavourites],
    child: [],
  },
  {
    lable: PAGE_NAME.RandomMeal,
    icon: <ShuffleOnIcon />,
    activeIcon: <ShuffleOnIcon />,
    id: 4,
    navigate: true,
    disabled: false,
    path: PAGE_URL[PageNames.RandomMeal],
    child: [],
  },
];

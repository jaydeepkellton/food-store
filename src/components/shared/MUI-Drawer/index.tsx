import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import { Drawer, DrawerHeader } from "./MUI-Drawer-Style";
import "./muiDrawer.scss";
import Footer from "../Footer";

export interface layoutPorpsType {
  children?: ReactNode;
  drawerData?: any[];
}

export default function MUIDrawer({
  children,
  drawerData = [],
}: layoutPorpsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarItems, setSidebarItems] = useState<any>([]);

  const [open, setOpen] = useState(true);
  const [openNav, setOpenNav] = useState<any>([]);

  const activateSelectedRoute = (drawerDataArgs: any = []) => {
    const openNavCopy: any = [];
    const makeActive = (data: any, parentDetails: any = "") => {
      for (let i = 0; i < data.length; i++) {
        if (location.pathname.includes(data[i].path)) {
          data[i].active = true;
          if (parentDetails) {
            parentDetails.active = true;
            openNavCopy.push(parentDetails.id);
          }
          openNavCopy.push(data[i].id);
        } else {
          data[i].active = false;
        }
        if (data[i].child?.length) {
          makeActive(data[i].child, data[i]);
        }
      }
    };
    makeActive(drawerDataArgs);
    setOpenNav(openNavCopy);
    setSidebarItems(drawerData);
  };

  const handleOnClickItem = (listItemObj: any) => {
    let openNavCopy = [...openNav];
    if (listItemObj.child?.length) {
      if (!open) {
        const path = listItemObj.path;
        navigate(path);
        return;
      }
      if (openNavCopy.includes(listItemObj.id)) {
        openNavCopy = openNavCopy.filter((item) => item !== listItemObj.id);
      } else {
        openNavCopy.push(listItemObj.id);
      }
      setOpenNav(openNavCopy);
    } else {
      const path = listItemObj.path;
      navigate(path);
    }
  };

  useEffect(() => {
    activateSelectedRoute(drawerData);
  }, [location.pathname, drawerData]);

  return (
    <Box>
      <CssBaseline />
      <Header setOpen={setOpen} drawerState={open} />

      <Drawer variant='permanent' open={open}>
        <Divider />
        <List
          className={`sidebar-list text-inter ${open ? "open-sidebar" : ""}`}
          style={{ marginTop: "90px" }}
        >
          {sidebarItems.map((listItemObj: any) => (
            <ListItem
              className='text-inter'
              key={listItemObj.id}
              disablePadding
              sx={{ display: "block" }}
            >
              <DrawerListItem
                listItemObj={listItemObj}
                openNav={openNav}
                onClickItem={() => handleOnClickItem(listItemObj)}
                isChild={false}
                open={open}
              />
              {(openNav || []).includes(listItemObj.id) &&
                open &&
                listItemObj.child?.map((childItemObj: any) => (
                  <DrawerListItem
                    key={childItemObj.id}
                    listItemObj={childItemObj}
                    openNav={openNav}
                    isChild={true}
                    open={open}
                  />
                ))}
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, p: 0 }}>
        <Grid
          className={`${open ? "content-open-layout" : "content-close-layout"}`}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12 }}
          style={{ marginTop: "10px" }}
        >
          <DrawerHeader />
          <Grid item xs={12} style={{ paddingBottom: "80px" }}>
            {children}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export interface ListItemPorpsType {
  listItemObj: any;
  openNav?: any[];
  onClickItem?: any;
  isChild: boolean;
  open: boolean;
}

export const DrawerListItem = ({
  listItemObj,
  openNav,
  onClickItem,
  isChild,
  open,
}: ListItemPorpsType) => {
  const isOpen = (openNav || []).includes(listItemObj.id);

  return (
    <ListItemButton
      sx={{
        minHeight: "52px",
        display: "flex",
        alignItems: "center",
        margin: "10px",
        borderRadius: "4px",
        justifyContent: open ? "initial" : "center",
        borderBottom: isChild ? "1px solid #E6F3FF" : "",
        color: listItemObj.active ? (isChild ? "#ffff" : "#1F66A8") : "",
        borderLeft: isChild
          ? ""
          : listItemObj.active
          ? "2px solid #1F66A8"
          : "2px solid #ffff",
        backgroundColor: listItemObj.active
          ? isChild
            ? "#1F66A8"
            : "#E6F3FF"
          : "",
        ":hover": { backgroundColor: "#E6F3FF", color: "black" },
      }}
      className={`text-inter ${listItemObj.active ? "active" : ""}`}
      onClick={onClickItem}
      data-testid={listItemObj.id}
    >
      {listItemObj.icon && (
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 1.5 : 0,
            justifyContent: "center",
          }}
        >
          {listItemObj.icon}
        </ListItemIcon>
      )}
      {listItemObj.child?.length ? (
        <ListItemText
          primary={
            <div className='d-flex align-items-center justify-content-between'>
              <Typography className='text-inter font-medium'>
                {" "}
                {listItemObj.lable}
              </Typography>
              {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </div>
          }
          sx={{ opacity: open ? 1 : 0 }}
        />
      ) : (
        <ListItemText
          className='text-inter font-medium'
          primary={listItemObj.lable}
          sx={{ paddingLeft: isChild ? 4 : 0, opacity: open ? 1 : 0 }}
        />
      )}
    </ListItemButton>
  );
};

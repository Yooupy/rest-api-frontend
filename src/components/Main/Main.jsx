import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Categories from "../Categories/Categories";
import Filter from "../Filter/Filter";
import ItemList from "../Items/ItemList";
import styles from "./Main.module.scss";
import axios from "axios";
// import items from "../../utils/items";

const Main = () => {
  const [items, setItems] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/items");
      setItems(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <Grid container spacing={4}>
        {/* Left side container */}
        <Grid item xs={12} md={2}>
          <Categories />
        </Grid>

        {/* Right side container */}
        <Grid item xs={12} md={10}>
          <div className={styles.filter}>
            <Typography variant="h5">Filter</Typography>
            <Filter />
          </div>
          <ItemList items={items} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;

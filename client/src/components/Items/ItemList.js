import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import styles from "./styles.module.scss";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2} className={styles.itemList}>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <div className={styles.itemCardWrapper}>
            <ItemCard key={item.id} item={item} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;

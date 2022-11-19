import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = ({ setCategory, setSelectPrice, setOrder }) => {
  const [listSort, setListSort] = useState();
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:3004/category",
      }).then(function (res) {
        setListSort(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSort = (e) => {
    console.log(e.target.value);
    setSelectPrice("price");
    if (e.target.value === "Mặc định") {
      setOrder();
    } else if (e.target.value === "Giá từ thấp tới cao") {
      setOrder("asc");
    } else {
      setOrder("desc");
    }
  };
  return (
    <select onChange={handleSort} className="product-category">
      {listSort &&
        listSort.map((value, index) => {
          // console.log(item);
          return (
            <option key={index} value={value} className="product-category-item">
              {value}
            </option>
          );
        })}
    </select>
  );
};

export default Category;

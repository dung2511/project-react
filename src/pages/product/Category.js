import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = ({ setSelectPrice, setOrder }) => {
  const [listSort, setListSort] = useState();
  // const [listCategory, setListCategory] = useState();
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:3004/sort_price`,
      }).then(function (res) {
        setListSort(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSort = (e) => {
    // console.log(e.target.value);
    setSelectPrice("price"); // lấy price trong từng sản phẩm
    if (e.target.value === "Mặc định") {
      setOrder(setSelectPrice);
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
          // console.log(value);
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

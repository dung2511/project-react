// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
// import {ThemeContext} from "./Search";

// const ListSearch = () => {
//   const [productSearch, setProductSearch] = useState();
//   // Lấy Context từ Search
//   const keyword = useContext(ThemeContext);
//   useEffect(() => {
//     try {
//       axios({
//         method: "get",
//         url: `http://localhost:3004/product-all?q=${keyword}}`,
//       }).then(function (res) {
//         console.log(res);
//         setProductSearch(res.data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, [keyword]);
//   return (
//     <main id="product">
//       <section className="flow-user">
//         <Link to={"/"}> Trang chủ </Link>/ Sản phẩm
//       </section>
//       <section className="product">
//         <div className="product-item">
//           <Row>
//             <Col xs={12}>
//               <h3>Tất cả sản phẩm</h3>
//               <div className="product-list-item">
//                 {productSearch &&
//                   productSearch.map((item, index) => {
//                     const product_current = {
//                       id: item.id,
//                       name: item.name,
//                       price: item.price,
//                       url: item.url,
//                     };
//                     return (
//                       <Card
//                         className="home-item-product-feature product-item-all-list"
//                         key={index}
//                       >
//                         <div className="product-item-list">
//                           <Link to={`/product/${item.id}`}>
//                             <img alt="Card cap" src={item.url} width="100%" />
//                           </Link>

//                           <CardBody>
//                             <CardTitle className="home-item-feature-name">
//                               {item.name}
//                             </CardTitle>
//                             <CardText className="product-price">
//                               {item.price}đ
//                             </CardText>
//                             <div className="home-btn-item-product">
//                               <Button
//                                 className="home-add-to-card"
                                
//                               >
//                                 Add to Cart
//                               </Button>
//                               <Button className="home-buy-now">
//                                 <div>Buy Now</div>
//                               </Button>
//                             </div>
//                           </CardBody>
//                         </div>
//                       </Card>
//                     );
//                   })}
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ListSearch;

import React, { useState, useEffect } from "react";

import { GetProducts } from "./service";
import ProductCards from '../../components/Cards/ProductCards';
import BreadCrumbNCover from '../../BreadCrumbNCover';
const Product = (props) => {
    const {data} = props;
    const [products, setProducts] = useState([]);
    // const { state, dispatch } = useContext(context);
    // useEffect(() => {
    //     async function fetchData() {
    //         const { data } = await GetProducts();
    //         // dispatch({ type: CART.ADD_PRODUCTS, payload: data });
    //         setProducts(data);
    //     }
    //     fetchData();
    // },[]);
    const offset=(props.pageNo-1)*props.pageSize;
    const limit=offset+props.pageSize;
console.log("Products",props.pageNo,"-",props.pageSize);
    return (
        <div className="container">
                <div className="row">
                    {
                        !data.length ? <h6>No data found</h6>
                            :
                            data.map((item, index) => (
                                <div key={index} className="col-xl-4 col-lg-4">
                                    <ProductCards item={item} />
                                </div>)
                            )
                    }
                </div>
        </div>
    );
};

export default Product;

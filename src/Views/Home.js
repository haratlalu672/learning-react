import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";
import Product from "../Components/Product";
import useAxiosGet from '../Hooks/HttpRequest';


function Home() {
    const url = `https://5ffb7ed763ea2f0017bdb1c1.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if (products.error) {
        content = <p>Ada kesalahan, silahkan coba lagi</p>
    }
    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <Product product={product} />
                </div>
            )

    }


    return (
        <div>
            <h1 className="font-bold text-2xl">Best Seller</h1>
            {content}
            {/* <HelloWorld name="harat" /> */}
        </div>
    )
}

export default Home
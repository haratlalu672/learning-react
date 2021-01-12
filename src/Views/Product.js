import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";
import useAxiosGet from '../Hooks/HttpRequest';

function Product() {
    const { id } = useParams()
    const url = `https://5ffb7ed763ea2f0017bdb1c1.mockapi.io/api/v1/products/${id}`

    let product = useAxiosGet(url)

    let content = null

    if (product.error) {
        content = <p>Ada kesalahan, silahkan coba lagi</p>
    }
    if (product.loading) {
        content = <Loader />
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
                <div>
                    <img src={product.data.gambar[0].imageUrl} alt={product.data.name} />
                    <h1>{product.data.gambar[0].imageUrl}</h1>
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>{product.data.description}</div>
            </div>
    }

    return (
        <div>
            <h1>{content}</h1>
        </div>
    )
}

export default Product
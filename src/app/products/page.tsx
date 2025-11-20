"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsServer } from '@/redux/store/Product';
import { AppDispatch, RootState } from '@/redux/store';

function Products() {


  const dispatch = useDispatch<AppDispatch>();
  let reducerProducts = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProductsServer("http://localhost:3000/api/products"))
  }, [])

  console.log(reducerProducts)

  return (
    <div>Products</div>
  )
}

export default Products
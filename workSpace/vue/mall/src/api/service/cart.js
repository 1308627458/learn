import axios from "../axios";

export function getCart(params) {
  return axios.get('/shop-cart', { params });
}

export function addCart(params) {
  return axios.post('/shop-cart',  params );
}

export function modifyCart(params) {
  return axios.put('/shop-cart',  params)
}
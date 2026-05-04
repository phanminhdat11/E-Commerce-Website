// redux/epics/rootEpic.ts
import { fetchProductEpic, getDetailProductEpic } from '@/lib/redux/products/epic/product.epic';
import { combineEpics } from 'redux-observable';
import { addToCartEpic, deleteItemInCartEpic, fetchCartEpic, increamentQuanityProduct } from '../cart/epic/cart.epic';


export const rootEpic = combineEpics(
  fetchProductEpic,
  addToCartEpic,
  fetchCartEpic,
  getDetailProductEpic,
  deleteItemInCartEpic

);
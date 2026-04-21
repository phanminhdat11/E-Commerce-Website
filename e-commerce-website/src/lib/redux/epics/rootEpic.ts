// redux/epics/rootEpic.ts
import { fetchProductEpic } from '@/lib/redux/products/epic/product.epic';
import { combineEpics } from 'redux-observable';


export const rootEpic = combineEpics(
  fetchProductEpic
);
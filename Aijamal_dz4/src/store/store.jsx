import { createStore } from 'redux';

import Porducts from '../assets/products.json';

export const ADD_BASKET = 'addBasket';
export const BASKET_INCREMENT = 'icrement';
export const BASKET_DICREMENT = 'dicrement';

let initialState = {
  products: Porducts,
  basketCount: [],
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return {
        ...state,
        basketCount: [
          ...state.basketCount,
          { ...action.payload, countPorduct: 1 },
        ],
      };
    case BASKET_INCREMENT:
      const newBasketIncrement = state.basketCount.map((basketpProduct) => {
        return basketpProduct._id === action.payload
          ? {
              ...basketpProduct,
              countPorduct: basketpProduct.countPorduct + 1,
            }
          : basketpProduct;
      });
      return {
        ...state,
        basketCount: newBasketIncrement,
      };
    case BASKET_DICREMENT:
      const newBasketDicrenent = state.basketCount.map((basketpProduct) => {
        if (basketpProduct._id === action.payload) {
          if (basketpProduct.countPorduct <= 0) {
            return {
              ...basketpProduct,
              countPorduct: (basketpProduct.countPorduct = 0),
            };
          } else {
            return {
              ...basketpProduct,
              countPorduct: basketpProduct.countPorduct - 1,
            };
          }
        } else {
          return basketpProduct;
        }
      });
      return {
        ...state,
        basketCount: newBasketDicrenent,
      };
    default:
      return state;
  }
});

export default store;

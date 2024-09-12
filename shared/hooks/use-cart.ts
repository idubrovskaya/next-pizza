import { useEffect } from 'react';
import { CartStateItem, useCartStore } from '../store/cart';
import { CreateCartItemValues } from '../services/dto/cart.dto';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = () => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};

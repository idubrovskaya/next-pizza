import { Ingredient } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';
import { CartItemDTO } from '../services/dto/cart.dto';
import { CartStateItem } from './get-cart-details';

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: CartStateItem['ingredients']
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${pizzaSize} см ${typeName} тесто `);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};

'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { X } from 'lucide-react';
import * as CartItemDetails from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details-types';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  className,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between',
        {
          'opacity-50 pointer-events-none': disabled,
        },
        className
      )}
    >
      <div className='flex items-center gap-5 flex-1'>
        <CartItemDetails.CartItemDetailsImage src={imageUrl} />
        <CartItemDetails.CartItemInfo name={name} details={details} />
      </div>

      <CartItemDetails.CartItemDetailsPrice value={price} />

      <div className='flex items-center gap-5 ml-20'>
        <CartItemDetails.CartItemDetailsCountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button type='button' onClick={onClickRemove}>
          <X
            className='text-gray-400 cursor-pointer hover:text-gray-600'
            size={20}
          />
        </button>
      </div>
    </div>
  );
};

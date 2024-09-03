import { cn } from '@/shared/lib/utils';
import * as CartItem from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details-types';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  className?: string;
  onCLickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
}

export const CartDrawerItem: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  price,
  quantity,
  details,
  onCLickCountButton,
  onClickRemove,
}) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItem.CartItemDetailsImage src={imageUrl} />

      <div className='flex-1'>
        <CartItem.CartItemInfo details={details} name={name} />
        <hr className='my-3' />

        <div className='flex justify-between items-center'>
          <CartItem.CartItemDetailsCountButton
            value={quantity}
            onClick={onCLickCountButton}
            size='sm'
          />

          <div className='flex items-center gap-3'>
            <CartItem.CartItemDetailsPrice value={price} />
            <Trash2Icon
              className='text-gray-400 cursor-pointer hover:text-gray-600'
              size={16}
              onClick={onClickRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { CheckoutItemDetails, WhiteBlock } from '.';
import { Button, Skeleton } from '../ui';

interface Props {
  totalAmount: number;
  loading?: boolean;
}

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, loading }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <WhiteBlock className='p-6 sticky top-4'>
      <div className='flex flex-col gap-1'>
        <span className='text-xl'>Итого:</span>
        {loading ? (
          <Skeleton className='w-56 h-11' />
        ) : (
          <span className='h-11 text-[34px] font-extrabold'>
            {totalPrice} руб.
          </span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className='flex items-center'>
            <Package size={18} className='mr-2 text-gray-400' />
            Стоимость корзины:
          </div>
        }
        value={
          loading ? (
            <Skeleton className='w-16 h-6 rounded-[6px]' />
          ) : (
            `${totalAmount} руб.`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className='flex items-center'>
            <Percent size={18} className='mr-2 text-gray-400' />
            Налоги:
          </div>
        }
        value={
          loading ? (
            <Skeleton className='w-16 h-6 rounded-[6px]' />
          ) : (
            `${vatPrice} руб.`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className='flex items-center'>
            <Truck size={18} className='mr-2 text-gray-400' />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className='w-16 h-6 rounded-[6px]' />
          ) : (
            `${DELIVERY_PRICE} руб.`
          )
        }
      />
      <Button
        loading={loading}
        className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
      >
        Перейти к оплате
        <ArrowRight className='w-5 ml-2' />
      </Button>
    </WhiteBlock>
  );
};

import { Container, Title, WhiteBlock } from '@/shared/components/shared';
import { Input } from '@/shared/components/ui';

export default function CheckoutPage() {
  return (
    <Container className='mt-10'>
      <Title
        text={'Оформление заказа'}
        className='font-extrabold mb-8 text-[36px] '
      />

      <div className='flex gap-10'>
        {/* Левая часть */}
        <div className='flex flex-col gap-10 flex-1 mb-20'></div>

        <WhiteBlock title='1. Корзина'>1111</WhiteBlock>

        <WhiteBlock title='2. Персональные данные' className={''}>
          <div className='grid grid-cols-2 gap-5'>
            <Input name='firstName' className='text-base' placeholder='Имя' />
            <Input
              name='lastName'
              className='text-base'
              placeholder='Фамилия'
            />
            <Input name='email' className='text-base' placeholder='E-Mail' />
            <Input name='phone' className='text-base' placeholder='Телефон' />
          </div>
        </WhiteBlock>

        <WhiteBlock title='3. Адрес доставки'>
          <div className='grid grid-cols-2 gap-5'>
            <Input name='firstName' className='text-base' placeholder='Имя' />
            <Input
              name='lastName'
              className='text-base'
              placeholder='Фамилия'
            />
            <Input name='email' className='text-base' placeholder='E-Mail' />
            <Input name='phone' className='text-base' placeholder='Телефон' />
          </div>
        </WhiteBlock>
      </div>

      {/* Правая часть */}
      <div className='w-[450px]'>ddddd</div>
    </Container>
  );
}

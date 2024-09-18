'use client';

import { cn } from '@/shared/lib/utils';
import React, { useEffect } from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';
import Link from 'next/link';
import { CartButton, SearchInput } from '.';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface IHeaderProps {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<IHeaderProps> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has('paid')) {
      setTimeout(() => {
        toast.success(
          'Заказ успешно оплачен! Информация будет передана вам на почту'
        );
      }, 500);
    }
  }, []);

  return (
    <header className={cn(' border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* Левая часть */}
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Image src='/logo.png' alt='logo' width={35} height={35} />
            <div>
              <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
              <p className='text-sm text-gray-400 leading-3'>
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className='mx-10 flex-1'>
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <User size={16} />
            Войти
          </Button>

          <div> {hasCart && <CartButton />}</div>
        </div>
      </Container>
    </header>
  );
};

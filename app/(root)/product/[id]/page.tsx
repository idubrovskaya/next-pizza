import { Container, GroupVariants, Title } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { PizzaImage } from '@/shared/components/shared';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  console.log(product);

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <PizzaImage imageUrl={product.imageUrl} size={40} />
        <div className='w-[490px] bg-[#fcfcfc] p-7'>
          <Title
            text={product.name}
            size='md'
            className='font-extrabold mb-1'
          />

          <p className='text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            qui soluta suscipit quo ipsum, adipisci nulla voluptatum accusamus
            iste. Numquam explicabo sapiente consequatur facere officia
            asperiores, quod deleniti enim minima!
          </p>

          <GroupVariants
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}

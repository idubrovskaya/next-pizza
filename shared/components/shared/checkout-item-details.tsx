interface Props {
  title?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({ title, value }) => {
  return (
    <div className='flex my-4'>
      <span className='flex flex-1 text-lg text-neutral-500'>
        {title}
        <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'></div>
      </span>
      <span className='font-bold text-lg'>{value}</span>
    </div>
  );
};

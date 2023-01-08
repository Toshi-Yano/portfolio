type Props = {
  children: React.ReactNode;
  title: string;
};

export default function SectionHeader({ children, title }: Props) {
  return (
    <>
      <h2 className='mx-auto mt-4 mb-5 border-b border-gray-500 pb-2 text-center text-2xl font-bold tracking-wider sm:text-3xl'>
        {title}
      </h2>
      {children}
    </>
  );
}

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function SectionHeader({ children, title }: Props) {
  return (
    <section>
      <h2 className='mx-auto mt-4 mb-5 border-b border-gray-500 pb-2 text-center text-2xl font-bold tracking-wider'>
        {title}
      </h2>
      {children}
    </section>
  );
}

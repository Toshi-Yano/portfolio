import SectionHeader from '@/components/SectionHeader';

const skillsOnWork = ['JavaScript', 'Java', 'Apex', 'Visualforce', 'Lightning Web Components'];
const skillsOnPrivate = ['TypeScript', 'Node.js', 'React', 'NestJS', 'Next.js'];

export default function Skills() {
  const generateParagraph = (text: string) => {
    return (
      <p key={text} className='text-center text-l leading-7'>
        {text}
      </p>
    );
  };
  return (
    <SectionHeader title='Skills'>
      <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 '>
          <div className='flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-500'>
            <p className='pb-1 mb-1 text-center text-xl font-bold border-b border-gray-500'>Work</p>
            <div className='flex flex-col items-center'>
              <div>{skillsOnWork.map((skill) => generateParagraph(skill))}</div>
            </div>
          </div>
          <div className='flex flex-col justify-center border-b lg:border-b-0 border-gray-500'>
            <p className='pb-1 mb-1 text-center text-xl font-bold border-b border-gray-500'>
              Private
            </p>
            <div className='flex flex-col items-center'>
              <div>{skillsOnPrivate.map((skill) => generateParagraph(skill))}</div>
            </div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}

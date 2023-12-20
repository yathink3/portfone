import { Link } from 'react-router-dom';

const FiraCode = () => {
  return (
    <section className='max-container'>
      <h3 className='head-text'>
        Here is the <span className='blue-gradient_text font-semibold drop-shadow'>Firacode</span>
      </h3>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <Link to={'/FiraCode.ttf'} target='_blank' className='neo-brutalism-white neo-btn'>
          Download Firacode
        </Link>
      </div>
    </section>
  );
};

export default FiraCode;

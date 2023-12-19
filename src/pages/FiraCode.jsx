import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <Link to={'/FiraCode.ttf'} target='_blank' className='neo-brutalism-white neo-btn'>
        Download Firacode
      </Link>
    </section>
  );
};

export default Contact;

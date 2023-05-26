import React, { useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

useEffect(() => {
  console.log('Process env is: ' + process.env);
  console.log('Set env variable is:' + proccess.env.REACT_APP_BACKEND_URL);
}, []);

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

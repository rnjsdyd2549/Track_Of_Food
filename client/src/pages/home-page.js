// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Foods from '../components/Food/searching-food';
import StickyHeader from '../components/Header/header';
import StickyFooter from '../components/Footer/footer';
import SignInSide from '../components/Landing/intorductory-service';


import UserForm from '../components/Landing/user-form';

const HomePage = () => {
  return (
    <>
      <StickyHeader />
      <UserForm />
      <StickyFooter />
      <SignInSide />
    </>
  )
} 

export default HomePage

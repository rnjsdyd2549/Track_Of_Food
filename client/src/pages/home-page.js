// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Foods from '../components/Food/searching-food';
import UserForm from '../components/Landing/user-form';

const HomePage = () => {
  return (
    <>
      {/* useContext 사용 */}
      <h1>HomePage</h1>
      <UserForm />
      <Foods />
    </>
  )
}

export default HomePage

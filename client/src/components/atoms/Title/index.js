import React from 'react';
import { styled } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { withStyles } from '@material-ui/styles';

// const Heading = styled(Typography)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });

export default function Title() {
  return (
    <Typography variant="h4" gutterBottom component="div">
        h4. Heading
    </Typography>
  );
}



// import React from 'react'
// import { shallow } from 'enzyme'
// import Caption from '.'

// const wrap = (props = {}) => shallow(<Caption {...props} />)

// it('renders children when passed in', () => {
//   const wrapper = wrap({ children: 'test' })
//   expect(wrapper.contains('test')).toBe(true)
// })

// it('renders props when passed in', () => {
//   const wrapper = wrap({ id: 'foo' })
//   expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
// })

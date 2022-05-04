import { Link, Stack } from '@chakra-ui/react';
import React from 'react';

const Nav = (props= {}) => {
  return (
    <Stack 
    direction={'row'}
    spacing={4}>
      <Link href="/">Home</Link>
    </Stack>
  );
}

export default Nav;
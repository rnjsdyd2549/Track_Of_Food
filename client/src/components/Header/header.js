import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import styled from 'styled-components';
import LogoImg from '../../assets/common/logo.png';

const Logo = styled.img`
  width : 9.5rem;
`

export default function Header() {
  return (
      <Box
        component="header"
        sx={{
          py: 1.2,
          width: '100%',
          height: '4rem',
          align: 'center',
          position: 'fixed',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="false">
          <Link href="/" underline="none">
            <Logo src={LogoImg} />
          </Link>
        </Container>
      </Box>
  );
}
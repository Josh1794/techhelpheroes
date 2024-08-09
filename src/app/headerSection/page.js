// 'use client';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

const drawerWidth = 240;
const navItems = ['About', 'Services', 'Contact'];

export default function HeaderSection(props) {
  const titleText = 'Tech Help Heroes';

  const { window } = props;
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState);
  // };

  // const drawer = (
  //   <Box
  //     onClick={handleDrawerToggle}
  //     sx={{
  //       textAlign: 'center',
  //     }}
  //   >
  //     <Image
  //       src='/Tech Help Heroes.png'
  //       width={75}
  //       height={75}
  //       alt='Tech Help Heroes Logo'
  //     />
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: 'center' }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component='nav'
        style={{
          backgroundColor: 'lightgray',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Image
            priority
            src='/Tech Help Heroes.png'
            width={75}
            height={75}
            alt='Tech Help Heroes Logo'
          />
          <Link
            href='https://calendly.com/techhelpheroes/15min'
            className={styles.bookingButton}
          >
            <h4>Book Now</h4>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

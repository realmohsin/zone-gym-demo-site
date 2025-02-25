import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';

import { Nav, NavUl } from '../components';
import { NavList } from './nav-mobile-list';

// ----------------------------------------------------------------------

export function NavMobile({ data, open, onClose, slots, sx }) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: [
          {
            display: 'flex',
            flexDirection: 'column',
            width: 'var(--layout-nav-mobile-width)',
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ],
      }}
    >
      {slots?.topArea ?? (
        <Box
          sx={{
            pt: 3,
            pb: 2,
            pl: 2.5,
            display: 'flex',
          }}
        >
          <Logo />
        </Box>
      )}

      <Scrollbar fillContent>
        <Nav
          sx={{
            pb: 3,
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
          }}
        >
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </Nav>
      </Scrollbar>

      {/* {slots?.bottomArea ?? (
        <Box sx={{ py: 3, px: 2.5 }}>
          <PurchaseButton
            sx={{ width: 1 }}
            slotProps={{
              button: {
                fullWidth: true,
                size: 'large',
              },
            }}
          />
        </Box>
      )} */}
    </Drawer>
  );
}

import { m } from 'framer-motion';

import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { MotionViewport, varFade } from 'src/components/animate';

const variants = varFade('inUp', { distance: 24 });

// import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export function TravelLandingHero({ tours, sx, ...other }) {
  return (
    <Box
      sx={[{ position: 'relative', bgcolor: 'common.black' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Box
        sx={[
          (theme) => ({
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '800px',
            '&::before': {
              top: 0,
              left: 0,
              width: 1,
              height: 1,
              zIndex: 8,
              content: "''",
              position: 'absolute',
              backgroundImage: `linear-gradient(to bottom, transparent 0%, ${
                theme.vars.palette.common.black
              } 100%)`,
            },
            [theme.breakpoints.up('md')]: { minHeight: 760, height: '100vh', maxHeight: 1440 },
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Box
          component={MotionViewport}
          sx={{
            gap: 5,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            px: 2,
            py: 16,
            zIndex: 9,
            textAlign: 'center',
            position: 'relative',
            color: 'common.white',
          }}
        >
          <m.div variants={variants}>
            <Typography variant="overline" sx={{ color: 'primary.light', fontSize: { md: 16 } }}>
              Best Gym in Gulshan
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h1" component="h1" sx={{ maxWidth: 560 }}>
              Iron Fitness Gym
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 2.5, md: 5 },
              }}
            >
              <Box
                sx={{
                  gap: 1,
                  display: 'flex',
                  alignItems: 'center',
                  typography: 'subtitle1',
                  color: 'primary.lighter',
                  fontSize: { md: 20 },
                }}
              >
                Join Today to Reach your Fitness Goals
              </Box>
            </Box>
          </m.div>

          <m.div variants={variants}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              component={Link}
              href="tel:+8801786892425"
            >
              Call Now +880 1786-892425
            </Button>
          </m.div>
        </Box>

        <Box
          component="img"
          alt="Gym"
          src="/assets/img/hero-gym.jpg"
          sx={{
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 7,
            objectFit: 'cover',
            position: 'absolute',
          }}
        />
      </Box>
    </Box>
  );
}

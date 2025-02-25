import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { AnimateBorder, MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeAdvertisement({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.72)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.72)})`,
              `url(${CONFIG.assetsDir}/assets/images/home/final.jpg)`,
            ],
          }),
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          color: 'common.white',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 10, md: 16 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <m.div variants={variants}>
          <Typography variant="h1" component="h2" sx={{ mb: 5 }}>
            <Box
              component="span"
              sx={(theme) => ({
                ...theme.mixins.textGradient(
                  `90deg, ${theme.vars.palette.primary.light} 20%, ${theme.vars.palette.secondary.light} 100%`
                ),
              })}
            >
              Join Iron Fitness Gym Today!
            </Box>
          </Typography>
        </m.div>

        <m.div variants={variants}>{renderActionButton()}</m.div>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const renderActionButton = () => (
  <AnimateBorder
    sx={(theme) => ({
      borderRadius: 1.25,
      position: 'relative',
      display: 'inline-flex',
      bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.4),
    })}
    duration={12}
    slotProps={{
      outlineColor: (theme) =>
        `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.04)})`,
      primaryBorder: {
        size: 50,
        width: '1.5px',
        sx: (theme) => ({ color: theme.vars.palette.primary.main }),
      },
      secondaryBorder: { sx: (theme) => ({ color: theme.vars.palette.primary.light }) },
    }}
  >
    <Button
      size="large"
      variant="text"
      sx={{ px: 2, borderRadius: 'inherit' }}
      component={Link}
      href="tel:+8801786892425"
    >
      Call Now +880 1786-892425
    </Button>
  </AnimateBorder>
);

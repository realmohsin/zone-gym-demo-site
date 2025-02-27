import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Members', number: 450 },
  { name: 'Trainers', number: 10 },
  { name: 'Square Ft', number: 500 },
  { name: 'Workout Hours', number: 25000 },
];

// ----------------------------------------------------------------------

export function CareerAbout({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 10, md: 14 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{
            mb: 1,
            display: 'block',
            color: 'primary.main',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Iron Fitness Gym
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'space-between',
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography variant="h2">We have hundreds of members from the Gulshan area!</Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{
              rowGap: 3,
              columnGap: 10,
              display: 'grid',
              color: 'text.secondary',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            }}
          >
            <Typography>
              We are one of the oldest gyms in the Gulshan / Banani area. Our founder started this
              gym with just a small room and a few pieces of equipment.
            </Typography>

            <Typography>
              We grew to be the most popular gym in our area with hundreds of members. We are now a
              strong and connected community.
            </Typography>
          </Grid>
        </Grid>

        <Section />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Section({ sx, ...other }) {
  return (
    <Box
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [`url(${CONFIG.assetsDir}/assets/img/gym-numbers-bg.jpg)`],
          }),
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={(theme) => ({
          py: 10,
          ml: 'auto',
          width: { lg: 0.5 },
          textAlign: 'center',
          color: 'common.white',
          px: { xs: 2.5, md: 5 },
          backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
        })}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Iron Fitness Gym by the numbers
        </Typography>

        {/* <Typography sx={{ mb: 5, opacity: 0.72 }}>
          Hello. Our agency has been present for over 20 years. We make the best for all our
          customers.
        </Typography> */}

        <Box sx={{ gap: 5, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {SUMMARY.map((value) => (
            <Box
              key={value.name}
              sx={{
                color: 'grey.500',
                overflow: 'hidden',
                typography: 'body2',
              }}
            >
              <Box
                sx={{
                  mb: 1,
                  gap: 0.5,
                  mx: 'auto',
                  display: 'flex',
                  color: 'primary.main',
                  justifyContent: 'center',
                }}
              >
                <AnimateCountUp variant="h2" to={value.number} toFixed={2} />
                <Box component="span" sx={{ typography: 'h3' }}>
                  +
                </Box>
              </Box>
              {value.name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

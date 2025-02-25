import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const SERVICES = [
  {
    title: 'World Class Equipment',
    description: 'We make sure our gym has the best equipment available in Bangladesh.',
    icon: iconPath('ic-gym-equipment.svg'),
  },
  {
    title: 'Expert Trainers',
    description: 'Our trainers are famous in Gulshan for their accomplishments.',
    icon: iconPath('ic-gym-trainer.svg'),
  },
  {
    title: 'Open 7 Days',
    description: 'We are open every day of the week for our gym members.',
    icon: iconPath('ic-gym-days.svg'),
  },
  {
    title: 'Personal Locker',
    description: 'We provide a personal locker for every gym member to use.',
    icon: iconPath('ic-gym-locker.svg'),
  },
  {
    title: 'Refreshing Shower Rooms',
    description: 'Our shower rooms are extremely clean and refreshing to use after workout.',
    icon: iconPath('ic-gym-shower.svg'),
  },
  {
    title: 'Diet Plan',
    description: 'Our trainers will help you create a healthy diet plan for your goals.',
    icon: iconPath('ic-gym-diet.svg'),
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesInclude({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        { textAlign: 'center', pt: { xs: 5, md: 10 }, pb: { xs: 10, md: 15 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography variant="h2">Gym Services</Typography>

        <Typography
          sx={{ mt: 3, mx: 'auto', maxWidth: 480, color: 'text.secondary', mb: { xs: 5, md: 10 } }}
        >
          Our state of the art gym offers the following
        </Typography>

        <Box
          sx={{
            rowGap: 8,
            columnGap: 10,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SERVICES.map((item) => (
            <div key={item.title}>
              <SvgColor
                src={item.icon}
                sx={(theme) => ({
                  background: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                  width: 64,
                  height: 64,
                })}
              />

              <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
                {item.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {item.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

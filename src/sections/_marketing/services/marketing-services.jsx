import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingServices({ sx, ...other }) {
  const renderImage = () => (
    <Box
      component="img"
      alt="Services"
      src={`${CONFIG.assetsDir}/assets/img/about-gym.jpg`}
      sx={{ width: 480 }}
    />
  );

  const renderTexts = () => (
    <>
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        Iron Fitness Gym
      </Typography>
      <Typography variant="h2">Best Gym In Gulshan</Typography>
      <Typography sx={{ my: 3, color: 'text.secondary' }}>
        We are a co- fitness centre providing our valued members with the best gym experience
        anywhere. Our journey began more than a decade ago with a small thousand square feet space,
        few equipments, very few trusted members but with a larger than life dedication and
        commitment to bring fitness and nutrition to the forefront in Bangladesh.
      </Typography>

      <Typography sx={{ my: 3, color: 'text.secondary' }}>
        And today we are proud to say that over the years our hard work and commitment towards our
        members has bought us the honour of being the front runner in this profession. This
        privilege has given us more strength than ever to provide our valued members with best
        guidance towards achieving their body building and nutrition goals.
      </Typography>
    </>
  );

  // const renderList = () => (
  //   <Box component="ul" sx={{ mb: 5, gap: 1, display: 'flex', flexDirection: 'column' }}>
  //     {[
  //       'First class flights',
  //       '5 Star accommodations',
  //       'Inclusive packages',
  //       'Latest model vehicles',
  //     ].map((text) => (
  //       <Box component="li" key={text} sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
  //         <Box
  //           component="span"
  //           sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }}
  //         />
  //         {text}
  //       </Box>
  //     ))}
  //   </Box>
  // );

  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>{renderImage()}</Grid>

          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            {renderTexts()}
            {/* {renderList()} */}

            <Button
              component={RouterLink}
              href="/about"
              size="large"
              color="primary.main"
              variant="outlined"
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
              sx={{ color: 'primary.main' }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

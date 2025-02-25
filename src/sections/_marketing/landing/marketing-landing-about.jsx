import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const ITEMS = [
  {
    label: 'Members',
    total: 100,
    content: 'We are proud to have over 100 paying memberships.',
  },
  {
    label: 'Trainers',
    total: 5,
    content: 'Our team of trainers are the best in Gulshan.',
  },
  {
    label: 'Square Feet',
    total: 350,
    content: 'We are a large gym with over 350 sq ft. in space',
  },
];

// ----------------------------------------------------------------------

export function MarketingLandingAbout({ sx, ...other }) {
  const renderImage = () => (
    <Box
      component="img"
      alt="Landing about"
      src={`${CONFIG.assetsDir}/assets/images/marketing/marketing-large-1.webp`}
      sx={{ borderRadius: 1.5, mb: { xs: 5, md: 10 }, mt: 5 }}
    />
  );

  const renderTexts = () => (
    <>
      <Typography variant="overline" sx={{ color: 'primary.main', display: 'block' }}>
        Our Story
      </Typography>

      <Typography variant="h2" sx={{ my: 3 }}>
        Who we are
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
        Nibras Panni has been working in the fitness industry for over two decades now. Nationally
        recognized and committed to the growth of the fitness industry, Nibras Panni has been
        serving as the executive director of aamraActive since 2021. She brings a unique blend of
        corporate etiquette and athletic robustness to the gym scene which makes her the perfect
        addition to aamraActive.
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
        Rebranding aamraActive as a corporate boutique gym, Miss Panni helped pull aamraActive out
        of the post-Covid slump that many businesses were facing in 2021. After months of renovation
        and preparation, aamraActive had gone through a complete transformation with improvements in
        equipment, training services, and the overall environment of the gym.
      </Typography>
    </>
  );

  const renderItems = () =>
    ITEMS.map((item) => (
      <Box key={item.label} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: 1, maxWidth: 100 }}>
          <Box sx={{ mb: 1, gap: 0.5, display: 'flex', typography: 'h2' }}>
            {fShortenNumber(item.total)}
            <Box component="span" sx={{ typography: 'h4', color: 'primary.main' }}>
              +
            </Box>
          </Box>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {item.label}
          </Typography>
        </Box>

        <Divider flexItem orientation="vertical" sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content}
        </Typography>
      </Box>
    ));

  return (
    <Box
      component="section"
      sx={[{ pb: { xs: 5, md: 10 }, mt: 6 }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: 'space-between' }}>
          <Grid sx={{ textAlign: { xs: 'center', md: 'right' } }} size={{ xs: 12, md: 5 }}>
            {renderTexts()}
            {/* <Button
              size="large"
              color="inherit"
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
              sx={{ my: 5 }}
            >
              Learn more
            </Button> */}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}>
            {renderItems()}
          </Grid>
        </Grid>

        {/* {renderImage()} */}
      </Container>
    </Box>
  );
}

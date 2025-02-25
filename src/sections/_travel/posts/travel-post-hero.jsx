import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials } from 'src/_mock';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'src/assets/icons';

// ----------------------------------------------------------------------

export function TravelPostHero({ heroUrl, duration, createdAt, title, sx, ...other }) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <TwitterIcon sx={{ color: 'common.white' }} />}
          {social.value === 'facebook' && <FacebookIcon />}
          {social.value === 'instagram' && <InstagramIcon />}
          {social.value === 'linkedin' && <LinkedinIcon />}
        </IconButton>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
              `url(${heroUrl})`,
            ],
          }),
          position: 'relative',
          py: { xs: 15, md: 14 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              gap: 3,
              display: 'flex',
              color: 'common.white',
              flexDirection: 'column',
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            {/* <Typography variant="body2" sx={{ opacity: 0.72 }}>
              {duration}
            </Typography> */}

            <Typography variant="h2" component="h1">
              {title}
            </Typography>

            {/* <Typography variant="caption" sx={{ opacity: 0.72 }}>
              {fDate(createdAt)}
            </Typography> */}

            {/* {renderSocials()} */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

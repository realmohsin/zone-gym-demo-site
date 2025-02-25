import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { _offices, _socials } from 'src/_mock';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'src/assets/icons';

import { Iconify } from 'src/components/iconify';
import { Map } from 'src/components/map';

// ----------------------------------------------------------------------

export function ElearningContactInfo({ sx, ...other }) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <TwitterIcon />}
          {social.value === 'facebook' && <FacebookIcon />}
          {social.value === 'instagram' && <InstagramIcon />}
          {social.value === 'linkedin' && <LinkedinIcon />}
        </IconButton>
      ))}
    </Box>
  );

  const rowStyles = {
    mb: 3,
    gap: 1.5,
    display: 'flex',
  };

  const renderEmail = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="carbon:email" color="#E22E21" />
      <div>
        <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
          Email
        </Box>

        <Link color="inherit" variant="body2" href="mailto:hello@example.com">
          info@ironfitnessgym.com
        </Link>
      </div>
    </Box>
  );

  const renderPhone = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="solar:smartphone-outline" color="#E22E21" />
      <div>
        <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
          Phone
        </Box>
        <Typography variant="body2" component={Link} href="tel:+8801786892425">
          +880 1786-892425
        </Typography>
      </div>
    </Box>
  );

  const renderAddress = () => (
    <Box sx={rowStyles}>
      <Iconify width={22} icon="carbon:location" color="#E22E21" />
      <div>
        <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
          Address
        </Box>
        <Typography variant="body2">
          34 Awal Center, Level 4, Kemal Ataturk Avenue, Banani, Dhaka 1213
        </Typography>
      </div>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 3, md: 5 }, pb: { xs: 10, md: 15 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Grid container spacing={3} sx={{ justifyContent: { md: 'space-between' } }}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              Call or Visit Now
            </Typography>

            <>
              {renderPhone()}
              {renderEmail()}
              {renderAddress()}

              {/* <Divider sx={{ mb: 3, width: 1, borderStyle: 'dashed' }} /> */}

              {/* <div>
                <Typography variant="overline" sx={{ mb: 1, display: 'block' }}>
                  Follow us
                </Typography>
                {renderSocials()}
              </div> */}
            </>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 7 }}>
            <Map locations={_offices} sx={{ borderRadius: 2 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import { isEqualPath, varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button, { buttonClasses } from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { usePathname } from 'src/routes/hooks';

import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'src/assets/icons';

import { Logo } from 'src/components/logo';

import { navData as listItems } from '../nav-config-main';

// ----------------------------------------------------------------------

export function Footer({ layoutQuery = 'md', sx, ...other }) {
  const pathname = usePathname();

  const renderInfo = () => (
    <>
      <Box sx={{ pl: { xs: 4, sm: 0 } }}>
        <Logo />
      </Box>
      <Typography variant="body2" sx={{ maxWidth: 360, color: 'text.secondary' }}>
        Come visit Iron Fitness Gym and find out why everybody says we are the best gym in the
        Gulshan / Banani area.
      </Typography>
    </>
  );

  const renderSocials = () => (
    <>
      {/* <Typography variant="h6">Social</Typography> */}

      <Box sx={{ display: 'flex' }}>
        <Link href="https://www.facebook.com/mohsinconsulting" target="__blank">
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Link>

        <Link href="https://www.instagram.com/mohsinconsulting/" target="__blank">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Link>

        <Link href="https://x.com/llc_mohsin" target="__blank">
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Link>

        <Link href="https://www.linkedin.com/company/mohsinconsulting/" target="__blank">
          <IconButton>
            <LinkedinIcon />
          </IconButton>
        </Link>
      </Box>
    </>
  );

  // const renderApps = () => (
  //   <>
  //     <Typography variant="h6">Apps</Typography>

  //     <Box
  //       sx={{
  //         gap: 2,
  //         display: 'flex',
  //         flexWrap: 'wrap',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       <AppStoreButton
  //         startIcon={<Iconify width={28} icon="ri:apple-fill" />}
  //         caption="Download on the"
  //         title="Apple Store"
  //       />
  //       <AppStoreButton
  //         startIcon={<Iconify width={28} icon="logos:google-play-icon" />}
  //         caption="Download from"
  //         title="Google Play"
  //       />
  //     </Box>
  //   </>
  // );

  const renderList = () => (
    <Box
      component="ul"
      sx={(theme) => ({
        // columnGap: 2,
        // display: 'none',
        // columnCount: { xs: 3, lg: 4 },
        // [theme.breakpoints.up(layoutQuery)]: {
        //   display: 'block',
        // },
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <Box
        component="li"
        sx={{
          mb: 2,
          gap: 1.25,
          display: 'flex',
          breakInside: 'avoid',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* <Typography variant="subtitle2">{list.subheader}</Typography> */}

        <Box
          component="ul"
          sx={{
            gap: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {listItems.map((item) => {
            const isActive = isEqualPath(item.path, pathname);

            return (
              <Box component="li" key={item.title} sx={{ display: 'inline-flex' }}>
                <Link
                  component={RouterLink}
                  href={item.path}
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'text.primary' },
                    ...(isActive && { color: 'text.primary', fontWeight: 'fontWeightSemiBold' }),
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );

  const rowStyles = {
    mb: { xs: 3, sm: 4 },
    gap: 1.5,
    // display: 'flex',
    pl: { md: 7 },
    textAlign: { xs: 'center' },
  };

  const renderMiddle = () => (
    <>
      <Box sx={rowStyles}>
        <Box component="span" sx={{ typography: 'subtitle2', display: 'block' }}>
          Email
        </Box>

        <Link
          color="inherit"
          variant="body2"
          href="mailto:hello@example.com"
          sx={{ color: 'text.secondary' }}
        >
          info@ironfitness.com
        </Link>
      </Box>

      <Box sx={rowStyles}>
        <Box component="span" sx={{ typography: 'subtitle2', display: 'block' }}>
          Phone
        </Box>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
          component={Link}
          href="tel:+8801786892425"
        >
          +880 1786-892425
        </Typography>
      </Box>

      <Box sx={rowStyles}>
        <Box component="span" sx={{ typography: 'subtitle2', display: 'block' }}>
          Address
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          34 Awal Center, Level 4, Kemal Ataturk Avenue, <br />
          Banani, Dhaka 1213
        </Typography>
      </Box>
    </>
  );

  const renderTop = () => (
    <Container sx={{ py: 10, pb: { xs: 5, sm: 10 } }}>
      <Grid
        container
        spacing={3}
        // justifyContent={{ md: 'space-between' }}
      >
        <Grid
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 5 },
            mb: { xs: 3, sm: 0 },
          }}
        >
          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) }), { gap: 3 }]}>
            {renderInfo()}
          </Box>

          {/* <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) }), { gap: 1 }]}>
            {renderCommunity()}
          </Box> */}

          {/* <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) })]}>{renderSubscribe()}</Box> */}

          <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) })]}>{renderSocials()}</Box>

          {/* <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) })]}>{renderApps()}</Box> */}
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }} sx={{ mb: { xs: 3, sm: 0 } }}>
          {renderMiddle()}{' '}
        </Grid>

        {/* <Box sx={[(theme) => ({ ...blockStyles(theme, layoutQuery) }), { gap: 3 }]}>
          {renderInfo()}
        </Box> */}

        <Grid component="nav" size={{ xs: 12, md: 4, lg: 4 }}>
          {renderList()}
        </Grid>
      </Grid>
    </Container>
  );

  const renderBottom = () => (
    <Container
      sx={{
        py: 3,
        gap: 2.5,
        display: 'flex',
        textAlign: 'center',
        color: 'text.secondary',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Typography variant="caption">
        {' '}
        ©2024 Iron Fitness Gym &nbsp; &#x2022; &nbsp;All rights reserved.
      </Typography>

      <Box
        component="span"
        sx={{
          gap: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" color="inherit">
          Website by&nbsp;
          <Link
            variant="caption"
            color="inherit"
            href="https://mohsinconsulting.com"
            target="__blank"
          >
            Mohsin Consulting
          </Link>
        </Typography>
      </Box>
    </Container>
  );

  return (
    <Box
      component="footer"
      sx={[
        (theme) => ({
          borderTop: `solid 1px ${theme.vars.palette.divider}`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderTop()}
      <Divider />
      {renderBottom()}
    </Box>
  );
}

// ----------------------------------------------------------------------

const blockStyles = (theme, layoutQuery) => ({
  gap: 2,
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up(layoutQuery)]: {
    textAlign: 'left',
    alignItems: 'flex-start',
  },
});

const AppStoreButton = styled(({ title, caption, ...other }) => (
  <Button {...other}>
    <div>
      <Box
        component="span"
        sx={{
          opacity: 0.72,
          display: 'block',
          textAlign: 'left',
          typography: 'caption',
        }}
      >
        {caption}
      </Box>

      <Box component="span" sx={{ mt: -0.5, typography: 'h6' }}>
        {title}
      </Box>
    </div>
  </Button>
))(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.vars.palette.common.white,
  border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.vars.palette.grey[900]}, ${theme.vars.palette.common.black})`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MemberItem } from './marketing-team';

// ----------------------------------------------------------------------

export function MarketingTeamAbout({ members, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ py: { xs: 10, md: 15 }, pb: { xs: 10, md: 20 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Meet Our Trainers
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
            color: 'text.secondary',
          }}
        >
          We have the best fitness team in Bangladesh. Our trainers have helped our Iron Fitness
          members achieve their goals.
        </Typography>

        <Box
          sx={{
            columnGap: 3,
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {members.map((item) => (
            <MemberItem key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

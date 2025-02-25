'use client';

import Box from '@mui/material/Box';

import { _members, _tours, _travelPosts } from 'src/_mock';

import { CareerAbout } from 'src/sections/_career/about/career-about';
import { CareerNewsletter } from 'src/sections/_career/career-newsletter';
import { ElearningContactInfo } from 'src/sections/_elearning/contact/elearning-contact-info';
import { LightboxView } from 'src/sections/_examples/lightbox-view';
import { HomeAdvertisement } from 'src/sections/_home/home-advertisement';
import { MarketingTeamAbout } from 'src/sections/_marketing/marketing-team-about';
import { MarketingServices } from 'src/sections/_marketing/services/marketing-services';
import { MarketingServicesInclude } from 'src/sections/_marketing/services/marketing-services-include';

import { TravelLandingHero } from '../landing/travel-landing-hero';
// import { TravelLandingIntroduce } from '../landing/travel-landing-introduce';

// ----------------------------------------------------------------------

const heroTours = _tours.slice(0, 1);
const cityTours = _tours.slice(0, 8);
const featuredTours = _tours.slice(0, 4);
const favoriteTours = _tours.slice(0, 4);
const posts = _travelPosts.slice(5, 8);
const carouselPosts = _travelPosts.slice(0, 4);

// ----------------------------------------------------------------------

export function TravelLandingView() {
  return (
    <>
      <Box component="section" sx={{ position: 'relative' }}>
        <TravelLandingHero tours={heroTours} />

        {/* <Container
          sx={(theme) => ({
            pt: 3,
            [theme.breakpoints.up('md')]: {
              pt: 0,
              mb: 10,
              left: 0,
              right: 0,
              bottom: 0,
              mx: 'auto',
              position: 'absolute',
            },
          })}
        >
          <TravelFilters
            sx={(theme) => ({
              bgcolor: {
                xs: 'background.neutral',
                md: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
              },
              [`& .${inputBaseClasses.input}`]: { color: { md: 'common.white' } },
            })}
          />
        </Container> */}
      </Box>

      {/* <TravelLandingIntroduce /> */}

      {/* <ElearningLandingIntroduce /> */}

      {/* <MarketingLandingAbout /> */}

      <MarketingServices />

      <MarketingTeamAbout members={_members} />

      <CareerNewsletter />

      <CareerAbout />

      <MarketingServicesInclude />

      {/* <MarketingPricing plans={_pricingMarketing} /> */}

      <LightboxView />

      <ElearningContactInfo />

      {/* <CareerNewsletter /> */}

      <HomeAdvertisement />

      {/* <TravelAbout />

      <MarketingAbout />

      <CareerAbout /> */}

      {/* <TravelLandingSummary />

      <TravelLandingFavoriteDestinations tours={favoriteTours} />

      <TravelLandingTourFeatured tours={featuredTours} />

      <TravelLandingToursByCity tours={cityTours} />

      <TravelLandingPosts posts={posts} carouselPosts={carouselPosts} />

      <TravelTestimonial testimonials={_testimonials} />

      <TravelNewsletter /> */}
    </>
  );
}

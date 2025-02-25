'use client';

import { _travelPosts } from 'src/_mock';

import { ElearningContactInfo } from 'src/sections/_elearning/contact/elearning-contact-info';
import { LightboxView } from 'src/sections/_examples/lightbox-view';
import { HomeAdvertisement } from 'src/sections/_home/home-advertisement';

import { TravelPostHero } from '../posts/travel-post-hero';

const post = _travelPosts[0];

// ----------------------------------------------------------------------

export function TravelToursView({ tours }) {
  return (
    <>
      <TravelPostHero
        title="Iron Fitness Gallery"
        heroUrl={post?.heroUrl || ''}
        duration={post?.duration || ''}
        createdAt={post?.createdAt || ''}
      />

      <LightboxView noHeader />

      <ElearningContactInfo />

      {/* <CareerNewsletter /> */}

      <HomeAdvertisement />
    </>
  );
}

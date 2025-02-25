'use client';

import { _travelPosts } from 'src/_mock';

import { ElearningContactForm } from 'src/sections/_elearning/contact/elearning-contact-form';
import { ElearningContactInfo } from 'src/sections/_elearning/contact/elearning-contact-info';
import { HomeAdvertisement } from 'src/sections/_home/home-advertisement';

import { TravelPostHero } from '../posts/travel-post-hero';

const post = _travelPosts[0];

// ----------------------------------------------------------------------

export function TravelContactView() {
  return (
    <>
      <TravelPostHero
        title="Contact Iron Fitness"
        heroUrl={post?.heroUrl || ''}
        duration={post?.duration || ''}
        createdAt={post?.createdAt || ''}
      />

      <ElearningContactInfo />

      <ElearningContactForm />

      {/* <CareerNewsletter /> */}

      <HomeAdvertisement />

      {/* <TravelContactInfo locations={_offices} />

      <TravelContactForm />

      <TravelNewsletter /> */}
    </>
  );
}

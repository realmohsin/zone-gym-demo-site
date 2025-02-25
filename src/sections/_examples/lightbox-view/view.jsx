'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { _mock } from 'src/_mock';

import { Lightbox, useLightBox } from 'src/components/lightbox';

import { ComponentLayout } from '../layout';

// ----------------------------------------------------------------------

const IMAGES = Array.from({ length: 12 }, (_, index) => ({
  src: _mock.image.cover(index + 1),
  title: 'Iron Fitness Gym',
  description: 'Iron Fitness Gym',
}));

const slides = [
  ...IMAGES,
  // {
  //   type: 'video',
  //   width: 1280,
  //   height: 720,
  //   poster:
  //     'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
  //   sources: [
  //     {
  //       src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //       type: 'video/mp4',
  //     },
  //   ],
  // },
];

// ----------------------------------------------------------------------

export function LightboxView({ noHeader }) {
  const lightbox = useLightBox(slides);

  const [state, setState] = useState({
    disableZoom: false,
    disableVideo: false,
    disableTotal: false,
    disableCaptions: false,
    disableSlideshow: false,
    disableThumbnails: false,
    disableFullscreen: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <ComponentLayout
        heroProps={{
          heading: 'Iron Fitness Gallery',
          // moreLinks: ['https://www.npmjs.com/package/yet-another-react-lightbox'],
        }}
      >
        <Card sx={{ p: 1, gap: 2, display: 'flex', alignItems: 'flex-start' }}>
          <Box
            sx={{
              gap: 1,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {slides.map((slide) => {
              const thumbnail = slide.type === 'video' ? slide.poster : slide.src;

              return (
                <Box
                  component="img"
                  key={thumbnail}
                  alt={thumbnail}
                  src={thumbnail}
                  onClick={() => lightbox.onOpen(`${thumbnail}`)}
                  sx={{
                    width: 240,
                    borderRadius: 1,
                    cursor: 'pointer',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                  }}
                />
              );
            })}
          </Box>
        </Card>
      </ComponentLayout>

      <Lightbox
        open={lightbox.open}
        close={lightbox.onClose}
        slides={slides}
        index={lightbox.selected}
        disableZoom={state.disableZoom}
        disableTotal={state.disableTotal}
        disableVideo={state.disableVideo}
        disableCaptions={state.disableCaptions}
        disableSlideshow={state.disableSlideshow}
        disableThumbnails={state.disableThumbnails}
        disableFullscreen={state.disableFullscreen}
      />
    </>
  );
}

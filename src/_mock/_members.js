import { CONFIG } from 'src/global-config';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _members = Array.from({ length: 4 }, (_, index) => ({
  id: _mock.id(index),
  // role: _mock.role(index),
  name: _mock.fullName(index),
  photoUrl: `${CONFIG.assetsDir}/assets/img/gym-trainer-${index + 1}.jpg`,
  // socialLinks: {
  //   facebook: `facebook/${_mock.fullName(index)}`,
  //   instagram: `instagram/${_mock.fullName(index)}`,
  //   linkedin: `linkedin/${_mock.fullName(index)}`,
  //   twitter: `twitter/${_mock.fullName(index)}`,
  // },
}));

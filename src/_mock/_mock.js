import { fSub } from 'src/utils/format-time';

import { CONFIG } from 'src/global-config';

import {
  _ages,
  _booleans,
  _companyNames,
  _courseNames,
  _descriptions,
  _emails,
  _firstNames,
  _fullAddress,
  _fullNames,
  _id,
  _jobTitles,
  _lastNames,
  _nativeL,
  _nativeM,
  _nativeS,
  _percents,
  _phoneNumbers,
  _postTitles,
  _prices,
  _productNames,
  _ratings,
  _roles,
  _sentences,
  _taskNames,
  _tourNames,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index) => _id[index],
  time: (index) => fSub({ days: index, hours: index }),
  boolean: (index) => _booleans[index],
  role: (index) => _roles[index],
  // Text
  courseNames: (index) => _courseNames[index],
  taskNames: (index) => _taskNames[index],
  postTitle: (index) => _postTitles[index],
  jobTitle: (index) => _jobTitles[index],
  tourName: (index) => _tourNames[index],
  productName: (index) => _productNames[index],
  sentence: (index) => _sentences[index],
  description: (index) => _descriptions[index],
  // Contact
  email: (index) => _emails[index],
  phoneNumber: (index) => _phoneNumbers[index],
  fullAddress: (index) => _fullAddress[index],
  // Name
  firstName: (index) => _firstNames[index],
  lastName: (index) => _lastNames[index],
  fullName: (index) => _fullNames[index],
  companyName: (index) => _companyNames[index],
  // Number
  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
    nativeS: (index) => _nativeS[index],
    nativeM: (index) => _nativeM[index],
    nativeL: (index) => _nativeL[index],
  },
  // Media
  image: {
    cover: (index) => `${CONFIG.assetsDir}/assets/img/gym-gallery-${index + 1}.jpg`,
    course: (index) => `${CONFIG.assetsDir}/assets/images/course/course-${index + 1}.webp`,
    avatar: (index) => `${CONFIG.assetsDir}/assets/img/gym-testimonial-${index + 1}.jpg`,
    travel: (index) => `${CONFIG.assetsDir}/assets/images/travel/travel-${index + 1}.webp`,
    career: (index) => `${CONFIG.assetsDir}/assets/images/career/career-${index + 1}.webp`,
    company: (index) => `${CONFIG.assetsDir}/assets/images/company/company-${index + 1}.webp`,
    product: (index) => `${CONFIG.assetsDir}/assets/images/z-product/product-${index + 1}.webp`,
    portrait: (index) => `${CONFIG.assetsDir}/assets/images/portrait/portrait-${index + 1}.webp`,
    marketing: (index) => `${CONFIG.assetsDir}/assets/images/marketing/marketing-${index + 1}.webp`,
  },
  video: (index) =>
    [
      `${CONFIG.assetsDir}/assets/video/video-1.mp4`,
      `${CONFIG.assetsDir}/assets/video/video-2.mp4`,
    ][index],
};

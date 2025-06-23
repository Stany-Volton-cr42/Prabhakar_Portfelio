import React from 'react';
import { useDeviceType } from '../hooks/useDeviceType';
import EducationalPlatformsDesktop from './EducationalPlatforms/EducationalPlatformsDesktop';
import EducationalPlatformsMobile from './EducationalPlatforms/EducationalPlatformsMobile';

const EducationalPlatforms = () => {
  const deviceType = useDeviceType();

  // Render different components based on device type
  if (deviceType === 'mobile') {
    return <EducationalPlatformsMobile />;
  }

  return <EducationalPlatformsDesktop />;
};

export default EducationalPlatforms;
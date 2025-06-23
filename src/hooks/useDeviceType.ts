import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'desktop';

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    const checkDeviceType = () => {
      // Check screen width - mobile if less than 640px (sm breakpoint)
      // This covers most phones and ensures mobile layout is used
      const isMobile = window.innerWidth < 640;
      const newDeviceType = isMobile ? 'mobile' : 'desktop';

      // Debug logging
      console.log(`Screen width: ${window.innerWidth}px, Device type: ${newDeviceType}`);

      setDeviceType(newDeviceType);
    };

    // Check on mount
    checkDeviceType();

    // Add event listener for window resize
    window.addEventListener('resize', checkDeviceType);

    // Cleanup
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return deviceType;
};

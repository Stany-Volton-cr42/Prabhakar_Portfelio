import { useDeviceType } from '../hooks/useDeviceType';
import YoutubeChannelMainDesktop from './YoutubeChannel/YoutubeChannelMainDesktop';
import YoutubeChannelMainMobile from './YoutubeChannel/YoutubeChannelMainMobile';

const YoutubeChannel = () => {
  const deviceType = useDeviceType();

  // Debug logging
  console.log('YouTube Channel - Device Type:', deviceType);

  // Render different components based on device type
  if (deviceType === 'mobile') {
    console.log('Rendering Mobile YouTube Component');
    return <YoutubeChannelMainMobile />;
  }

  console.log('Rendering Desktop YouTube Component');
  return <YoutubeChannelMainDesktop />;
};

export default YoutubeChannel;

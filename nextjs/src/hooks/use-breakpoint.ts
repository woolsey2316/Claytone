import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

const getDeviceConfig = (width: number) => {
  if (width < 768) {
    return 'mobile';
  } else if (width >= 768 && width < 1280) {
    return 'tablet';
  } else if (width >= 1280) {
    return 'desktop';
  } else {
    return 'desktop';
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<'mobile' | 'tablet' | 'desktop'>(() =>
    getDeviceConfig(1280)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;

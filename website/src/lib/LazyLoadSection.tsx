import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyLoadSectionProps {
  importFunc: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: any;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({
  importFunc,
  fallback = <div className="w-full flex justify-center py-20"><LoadingSpinner size="large" /></div>,
  props = {}
}) => {
  const LazyComponent = lazy(importFunc);
  
  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoadSection;
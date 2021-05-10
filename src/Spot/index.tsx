import React, { lazy, Suspense } from "react";
import { TypeSpotName } from './Spot.model';
import { IconErrorBoundary } from '../Icon/IconErrorBoundary';
import IconComponents from './generated-spots';

interface IProps {
  name: TypeSpotName;
  width?: number;
  height?: number;
}

const Loading = (props: any) => {
  return null;
};

export const Spot = (props: IProps) => {
  const LazyComponent: any = lazy(
    IconComponents[props.name] ||
      IconComponents['icon-placeholder']
  );

  return (
    <IconErrorBoundary {...props}>
      <Suspense fallback={<Loading />}>
        <LazyComponent {...props} />
      </Suspense>
    </IconErrorBoundary>
  );
};

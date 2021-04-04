import React, { lazy, Suspense } from "react";
import { TypeIconName } from './Icon.model';
import { IconErrorBoundary } from './IconErrorBoundary';
import IconComponents from './generated-icons';

interface IProps {
  name: TypeIconName;
  width?: number;
  height?: number;
}

const Loading = (props: any) => {
  return null;
};

export const Icon = (props: IProps) => {
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

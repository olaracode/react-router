import React, { Suspense } from "react";

const Data = React.lazy(() => import("./Data.jsx"));

const LazyLoaders = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Data />
    </Suspense>
  );
};

export default LazyLoaders;

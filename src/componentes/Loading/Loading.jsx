import React from 'react';
// import Lottie from "lottie-react";

import loadingAnimation from "../../assets/json/loading.json";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="max-w-sm relative">
        <h1>loading</h1>
        {/* <Lottie
          options={{
            animationData: loadingAnimation,
            autoplay: true,
            loop: true,
          }}
        ></Lottie> */}
      </div>
    </div>
  );
};

export default Loading;
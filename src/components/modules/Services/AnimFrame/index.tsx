import Lottie from "react-lottie";

const AnimFrame = ({ title, animation }: { title: string; animation: any }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      isClickToPauseDisabled
      options={defaultOptions}
      height={320}
      width={320}
      title={title}
      style={{ cursor: "default" }}
    />
  );
};

export default AnimFrame;

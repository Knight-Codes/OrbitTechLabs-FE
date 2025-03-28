export const blocks = [
  { label: "React", src: "/images/react.png" },
  {
    label: "Apple",
    src: "/images/apple.png",
  },
  {
    label: "Firebase",
    src: "/images/firebase.png",
  },
  {
    label: "Flask",
    src: "/images/flask.png",
  },
  { label: "Kotlin", src: "/images/kotlin.png" },
  { label: "Next", src: "/images/next.png" },
  { label: "Python", src: "/images/python.png" },
  { label: "Spring Boot", src: "/images/spring-boot.png" },
];

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

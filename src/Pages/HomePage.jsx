import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/Image/team.png";
import image1 from "../assets/Image/bhim.jpeg"

const teamMembers = [
  {
    name: "Bhim Baduhar Saud",
    role: "Co Founder",
    image: image1,
    read: "read more",
  },
  {
    name: "Jennie Roberts",
    role: "Partner",
    image: image,
    read: "read more",
  },
  {
    name: "Mila Parker",
    role: "Partner",
    image: image,
    read: "read more",
  },
  {
    name: "Monica Pouli",
    role: "Creative Leader",
    image: image,
    read: "read more",
  },
  {
    name: "Mila Parker",
    role: "Partner",
    image: image,
    read: "read more",
  },
  {
    name: "Monica Pouli",
    role: "Creative Leader",
    image: image,
    read: "read more",
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <div className="pt-6 mb-20 ">
        <h1 className="text text-3xl font-bold text-center">
          Meet Our Members
        </h1>

        <div className="w-3/4 m-auto mt-5 ">
          <Slider {...settings}>
            {teamMembers.map((item, index) => (
              <div className=" bg-white rounded shadow py-3 px-2   " key={index}>
                <img
                  className="w-[150px] m-auto rounded-full"
                  src={item.image}
                  alt=""
                />
                <p className="text-center">{item.name}</p>
                <p className="text-center">{item.role}</p>
                <p className="bg-sky-500 py-1 px-3 text-center rounded text-white">
                  {item.read}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomePage;

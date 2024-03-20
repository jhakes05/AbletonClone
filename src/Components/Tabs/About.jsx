import React from "react";
import about from "../../assets/about.jpg";
import { Image, Link } from "@chakra-ui/react";
const About = () => {
  return (
    <div>
      <Image
        boxSize="1200.030px x 690px"
        objectFit="cover"
        src={about}
        alt="about image"
      />
      <div className="text-[5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold shadow-lg">
        Ableton
      </div>
      <p className="mx-auto max-w-lg border border-none p-4">
        We make{" "}
        <Link color="blue" href="#">
          Live
        </Link>
        {", "}
        <Link color="blue" href="#">
          Push
        </Link>
        {", and "}
        <Link color="blue" href="#">
          Link
        </Link>{" "}
        — unique software and hardware for music creation and performance. With
        these products, our community of users creates amazing things.
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </p>
    </div>
  );
};

export default About;

import React from 'react'
import jobs from "../../assets/jobs.jpg";
import { Image, Link } from "@chakra-ui/react";
const Jobs = () => {
  return (
    <div>
        
        <Image
        boxSize="1200.030px x 690px"
        objectFit="cover"
        src={jobs}
        alt="jobs image"
      />
      <div className="text-[5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold shadow-lg">
        Jobs
      </div>

    </div>
  )
}

export default Jobs
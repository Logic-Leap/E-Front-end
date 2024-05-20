"use client"

import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Ads() {

    const images = [
        { url: "https://cdn.confect.io/uploads/media/designing-dynamic-product-ads-800x420.jpg" },
        { url: "https://alidropship.com/wp-content/uploads/2019/12/8.-Product-Advertising.jpg" },
        { url: "https://media.licdn.com/dms/image/D5612AQE4XG-2791K3w/article-cover_image-shrink_720_1280/0/1666284357985?e=2147483647&v=beta&t=ELSyI4qVF8hKYoMrucmGJI_CWUdCrq_VTdOAaC0RYLA" },
        { url: "https://media.licdn.com/dms/image/D4D12AQGyri1tknSt1Q/article-cover_image-shrink_720_1280/0/1683712488477?e=2147483647&v=beta&t=GS08e-eVreQLJZIHskFkzT1sUYPY_1TkwKaDebBObng" }
      ];
  return (
    <div  className='mt-6'>
    <SimpleImageSlider
      width={1420}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      autoPlayDelay={2000}
    />
  </div>
  )
}

export default Ads
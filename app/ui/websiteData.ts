import { ReactNode } from "react";

import { Section1, Section2, Section3 } from "./pages";

export type PageData ={
    image?: string;
    imageAltText?: string
    title: string;
    pageContent: ReactNode ;
}

const websiteData: {pages:PageData[], websiteTitle:string}= {
  pages: [
    {
      title: "About Bats",
      imageAltText: "photograph of brown bat on tree branch on black background",
      pageContent: Section1(),
      image: "./images/image1.png",
    },

    {
      title: "Photos",
      pageContent: Section2(),
    },

    {
      title: "Fun Facts",
      pageContent: Section3(),
      imageAltText: "photograph of 4 brown bats hanging in a cave",
      image: "./images/image3.png",
    },
  ],

  websiteTitle: "I love Bats",
};

export default websiteData;

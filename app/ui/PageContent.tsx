import siteData from "./siteData";
import { useContext } from "react";

import { PageIndexContext } from "./PageIndexContext";
export function PageContent() {
  const { state } = useContext(PageIndexContext);
  const page = siteData.pages[state];
  console.log(page.image);
  return (
    <div className={"hero-content flex-col lg:flex-row"}>
      {page.image ? (
        <img
          alt={page.imageAltText}
          src={page.image}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl"
        />
      ) : undefined}
      <div>
        <h1 className="text-5xl font-bold">{page.title}</h1>
        {page.pageContent}
      </div>
    </div>
  );
}

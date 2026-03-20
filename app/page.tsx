"use client";
import { PageContent } from "./ui/PageContent";
import { VisitorCounter } from "./ui/VisitorCounter";
import websiteData from "./ui/websiteData";

export default function Home() {
  return (
    <main>
      <hr />
      <div className="hero min-h-screen flex flex-col">
        {websiteData.pages.map((page) => {
          return <PageContent pageData={page} />;
        })}
        <VisitorCounter />
      </div>
    </main>
  );
}

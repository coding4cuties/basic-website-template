export function Section2() {
  const page = {
    image: "./images/image2.png",
    imageAltText: "test",
    class: " rounded-lg shadow-2xl",
  };
  return (
    <>
      <p className="py-4">This is my cool image gallery!</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
        <img alt={page.imageAltText} src={page.image} className={page.class} />
        <img alt={page.imageAltText} src={page.image} className={page.class} />
        <img alt={page.imageAltText} src={page.image} className={page.class} />
        <img alt={page.imageAltText} src={page.image} className={page.class} />
        <img alt={page.imageAltText} src={page.image} className={page.class} />
        <img alt={page.imageAltText} src={page.image} className={page.class} />
      </div>
    </>
  );
}

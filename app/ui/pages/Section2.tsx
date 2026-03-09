export function Section2() {
  const imageClass = "rounded-lg shadow-2xl";
  return (
    <>
      <p className="py-4">This is my cool image gallery!</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
        <img
          src={"./images/image2.png"}
          alt={
            "photograph of close up on bats face drinking nectar out of yellow flower"
          }
          className={imageClass}
        />
        <img
          alt={`a photograph of a group of brown bats hanging from a wood structure. The bats are looking at the camera.`}
          src={`./images/image4.png`}
          className={imageClass}
        />
        <img
          alt={`a close up photograph of a bat's face. It has a black face with brown fur collar.`}
          src={`./images/image5.png`}
          className={imageClass}
        />
        <img
          alt={`a photo of a close up on a bats face. It has wild light brown fur and sharp teeth.`}
          src={`./images/image6.png`}
          className={imageClass}
        />
        <img
          alt={`photograph of brown bat on tree branch on black background`}
          src={`./images/image1.png`}
          className={imageClass}
        />
        <img
          alt={"photograph of 4 brown bats hanging in a cave"}
          src={`./images/image3.png`}
          className={imageClass}
        />
      </div>
    </>
  );
}

import { Link } from "../Link";

export function About() {
  return (
    <>
      <p className="py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
        <br />
        <br />
        Check out my <Link href="#" title={"Link #1"} />
        , <Link href="#" title="Link #2" />, or{" "}
        <Link href="#" title="Link #3" />!
      </p>

      <img
        alt="row of white sparkles"
        src="https://blob.gifcities.org/gifcities/66PVHQI3WTVHAMX4RC4VNSLOSBCO4BPS.gif"
      />
    </>
  );
}

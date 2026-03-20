import { Link } from "../Link";

export function Blog() {
  return (
    <>
      <p className="py-6">
        Lorem ipsum <Link href="#" title="dolor sit amet" /> consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat
        <br />
        <br />
        Quia dolor <Link href="#" title="minima veniam" />
        {". "}Quis autem vel eum iure reprehenderit qui in ea voluptate velit
        esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
        quo voluptas nulla pariatur{" "}
        <Link href="#" title="enim ad minima veniam." />
      </p>
      <img
        alt="black and white cat head blinking"
        src="https://blob.gifcities.org/gifcities/GH365M7YYOMLHHADCBFGVWIKAVTIHYBJ.gif"
      />
    </>
  );
}

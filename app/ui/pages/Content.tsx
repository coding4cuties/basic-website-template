import { Link } from "../Link";

export function Content() {
  return (
    <>
      <p className="py-6">
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, <Link href="#" title="cum soluta nobisu" />, est eligendi optio{" "}
        <Link href="#" title="cumque nihil impedit quo minus" />
        !
        <br />
        <br />
        od maxime placeat facere possimus, omnis voluptas assumenda est, omnis
        dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
        aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
        et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.
      </p>

      <img
        alt="red dasiy spinning"
        src="https://blob.gifcities.org/gifcities/DROJ2XHWJ7JGVD7CLBGFWUBHNP2HC5HG.gif"
      />
    </>
  );
}

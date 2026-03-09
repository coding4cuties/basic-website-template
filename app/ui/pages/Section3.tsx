import { Button } from "../Button";

export function Section3() {
  return (
    <>
      <ul className="list-decimal m-4">
        <li>
          Bats are the only mammal capable of true flight. Tequila is produced
          from agave plants that in the wild rely on bats as their primary
          pollinators.
        </li>
        <li>
          {" "}
          The world’s smallest bat is the Bumblebee Bat measuring up to 29 – 33
          mm (1.1 –3 in) in length and 2 g (0.071 oz) in mass as a full-grown
          adult.
        </li>
        <li>
          The world’s largest bat is the Giant Golden-crowned Flying Fox with a
          wingspan up to 6 ft!
        </li>
        <li>
          {" "}
          The oldest known bat was a male Brandt’s myotis who lived at least 41
          years.
        </li>
        <li>
          The fastest bat in the world is the Mexican Free-tailed Bat, flying in
          short bursts at speeds up to 100 mph! Of the 1,400+ species of bats in
          the world, only three are vampire bats that drink blood.
        </li>
      </ul>

      <div className="flex flex-row gap-3">
        <Button href={undefined} title="Learn More" />
        <Button href={undefined} title="Donate" />
      </div>
    </>
  );
}

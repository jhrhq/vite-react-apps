import Heading from "../Heading";
import TeamCard from "./TeamCard";

const teams = [
  {
    id: 1,
    img: "./assets/images/team/team-01.png",
    name: "Melissa Tatcher",
    designation: "Marketing Expert",
  },
  {
    id: 2,
    img: "./assets/images/team/team-02.png",
    name: "Stuard Ferrel",
    designation: "Digital Marketer",
  },
  {
    id: 3,
    img: "./assets/images/team/team-03.png",
    name: "Eva Hudson",
    designation: "Creative Designer",
  },
  {
    id: 4,
    img: "./assets/images/team/team-04.png",
    name: "Jackie Sanders",
    designation: "Founder of Facebook",
  },
];

function Team() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <Heading
          heading="Our Team Members"
          subHeading="Our Clients"
          text="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              name={team.name}
              designation={team.designation}
              image={team.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

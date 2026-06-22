import teamImg01 from "../../assets/images/team/team-01.png";
import teamImg02 from "../../assets/images/team/team-02.png";
import teamImg03 from "../../assets/images/team/team-03.png";
import teamImg04 from "../../assets/images/team/team-04.png";
import Heading from "../Heading";
import TeamCard from "./TeamCard";

const teams = [
  { id: 1, img: teamImg01, name: "Melissa Tatcher", designation: "Marketing Expert" },
  { id: 2, img: teamImg02, name: "Stuard Ferrel", designation: "Digital Marketer" },
  { id: 3, img: teamImg03, name: "Eva Hudson", designation: "Creative Designer" },
  { id: 4, img: teamImg04, name: "Jackie Sanders", designation: "Founder of Facebook" }
];

export default function Team() {
  return (
    <section id="team" className="overflow-hidden bg-gray-50 pb-12 pt-20 dark:bg-slate-800 lg:pb-[90px] lg:pt-[120px]" >
      <div className="container mx-auto">
        <Heading heading="Our Team Members" subHeading="Our Clients" text="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form." />
        <div className="-mx-4 flex flex-wrap justify-center">
          {teams.map((team) => (
            <TeamCard key={team.id} name={team.name} designation={team.designation} image={team.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
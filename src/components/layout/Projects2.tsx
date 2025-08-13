import ProjectPortrait from "../ui/navigation/links/Editing";
import projects from "public/data/projects.json";
import otherProjects from "public/data/otherProjects.json";

export default function Projects() {
  return (
    <div
      id="Work"
      className="flex flex-col ultra:items-center w-full bg-gradient-to-r from-gradientRight to-gradientLeft"
    >
      {/* Transisi awal */}
      <img
        className="w-full h-44 object-cover"
        src="/transitions/transition_grey.svg"
        alt="transition"
        style={{ marginBottom: "-1px" }}
      />

      {/* Bagian 2 */}
      <p className="text-4xl mb-8 mt-16 justify-center text-white font-bold text-center">
        Project Editing Video
      </p>
      <div className="flex flex-wrap w-full desktop:px-20 justify-center ultra:max-w-[1920px] pb-12">
        {otherProjects.map((item, index) => (
          <ProjectPortrait
            key={`other-${index}`}
            headline={item.title}
            image={item.image}
            text={item.text}
            tags={item.tags}
            link={item.link}// tambahan agar ditampilkan vertikal/potret
          />
        ))}
      </div>

      {/* Transisi keluar */}
      <img
        className="w-full h-0 object-cover"
        src="/transitions/transition_gradient.svg"
        alt="transition"
        style={{ marginTop: "-1px" }}
      />
    </div>
  );
}

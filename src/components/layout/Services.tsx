import ContactBtn from "../ui/navigation/menu/elements/ContactBtn";
import Service from "../ui/content/Service";

export default function Services() {
  return (
    <div id="Services" className="flex h-fit text-white flex-col items-center bg-slate-800">
      <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
      <p className="text-4xl mb-8 mt-8 text-white font-bold">Services</p>

      <div className="flex desktop:flex-row mobile:flex-col flex-wrap mobile:items-center pb-8 justify-center text-center h-full">
        <Service
          hl="Web Developer"
          desc="Build modern web applications using a Node.js backend, Next.js frontend, and a MySQL database."
          img="/images/webdeveloper.jpg"
        />
        <Service
          hl="React Native App"
          desc="Create simple mobile apps with React Native, perfect for personal or small business needs."
          img="/images/appdeveloper.jpg"
        />
        <Service
          hl="Video Editing"
          desc="Professional video editing with Adobe Premiere Pro and CapCut according to promotional, event, or creative content needs."
          img="/images/editingvideo.jpg"
        />
        
      </div>


      <p className="desktop:text-[40px] mobile:text-[24px] font-bold my-4 text-center">
        You have a project? Get in Touch
      </p>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
}

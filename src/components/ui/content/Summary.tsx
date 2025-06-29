export default function Summary() {
  return (
    <>
      <p className="text-4xl mb-8 font-bold mobile:text-center">About me</p>
      <article
        className="desktop:text-xl mobile:text-md"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">
          I&apos;m a Frontend developer with a vocational high school degree🎓.
          So far I&apos;ve completed IT Programmer training at{" "}
          <b>
            <a
              className="hover:animate-pulse"
              href="https://www.unitedtractors.com/yayasan/ut-school/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heavy equipment distribution company
            </a>
          </b>
          . My main focus these days is building high performance web
          applications for desktop and mobile devices using the latest
          technologies.
        </p>

        <p className="mb-5">
          I have a passion for learning new technologies and I am always looking
          for ways to improve my skills. I am also a big fan of open source
          software and I love contributing to the community. In addition, I have
          also participated in{" "}
          <b>
            <a
              className="hover:animate-pulse"
              href="https://www.instagram.com/midasvisualstudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Editing Studio
            </a>
          </b>{" "}
          Field Work Training from vocational high school for 6 months as a
          Video Editor using Adobe Premiere and After Effects.
        </p>
      </article>
    </>
  );
}

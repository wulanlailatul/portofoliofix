
export default function Summary() {
    return (<>
        <p className="text-4xl mb-8 font-bold mobile:text-center">About me</p>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">I&apos;m a Frontend developer with a vocational high school degree🎓. So far I&apos;ve completed IT Programmer training at <b><a className="hover:animate-pulse" href="https://www.unitedtractors.com/yayasan/ut-school/">Heavy equipment distribution company.</a></b>
                My main focus these days is building high performance web applications for desktop and mobile devices using the latest technologies. I&apos;m also running a <a className="hover:animate-pulse font-bold" href="https://www.youtube.com/@fullstacklab">Youtube channel</a> where I create tutorials about software development and 3D printing.</p>
            <p className="mb-5">When I&apos;m not at the computer, I usually go for a run &#127939;&#8205;&#9794;&#65039;, create my own tasty pizza &#127829;or explore places which are on my travel list &#128747;. Recently, I pursued a working holiday in Australia, greatly enriching my personal and professional growth.</p>
        </article>
    </>);
}
import Image from 'next/image';
import BounceIn from 'src/components/animation/BounceIn';

export default function SocialMedia({ size }: { size: number }) {

  return (<div className="flex" style={{ pointerEvents: 'auto' }}>
    <BounceIn delay={0.2}>
      <a className="flex bg-black bg-opacity-50 p-4 mr-1 my-1 rounded-full transition-all hover:scale-110 scale-100" href="https://www.linkedin.com/in/wulan-lailatul/"><Image src="/icons/linkedin.svg" alt="Icon" width={size} height={size} /></a>
      <a className="flex bg-black bg-opacity-50 p-4 mr-1 my-1 rounded-full transition-all hover:scale-110 scale-100" href="https://github.com/wulanlailatul"><Image src="/icons/github.svg" alt="Icon" width={size} height={size} /></a>
      <a className="flex bg-black bg-opacity-50 p-4 mr-1 my-1 rounded-full transition-all hover:scale-110 scale-100" href="https://www.youtube.com/@wlnlailatul"><Image src="/icons/youtube.svg" alt="Icon" width={size} height={size} /></a>
      <a className="flex bg-black bg-opacity-50 p-4 my-1 rounded-full transition-all hover:scale-110 scale-100" href="https://www.instagram.com/wlnlailamfdh/"><Image src="/icons/insta.svg" alt="Icon" width={size} height={size} /></a>
      <a className="flex bg-white bg-opacity-50 p-4 my-1 rounded-full transition-all hover:scale-110 scale-100" href="https://drive.google.com/drive/folders/1LV6Ym3rAI4PxN0lchnhTLacJHlius3Nf?usp=sharing"><Image src="/icons/gallery-icon.png" alt="Icon" width={size} height={size} /></a>
    </BounceIn>
  </div>)
}
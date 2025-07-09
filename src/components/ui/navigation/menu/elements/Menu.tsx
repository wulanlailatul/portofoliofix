'use client';

import MenuItem from './MenuItem';
import ContactBtn from './ContactBtn';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

type MenuProps = {
  onlyToggle?: boolean;
};

export default function Menu({ onlyToggle = false }: MenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const currentLang = pathname.split('/')[1];
    setIsEnglish(currentLang === 'en');
  }, [pathname]);

  const switchLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
  };

  const handleToggle = () => {
    const newLang = isEnglish ? 'id' : 'en';
    setIsEnglish(!isEnglish);
    switchLanguage(newLang);
  };

  if (onlyToggle) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm"></span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnglish}
            onChange={handleToggle}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
        </label>
        <span className="text-sm"></span>
      </div>
    );
  }

  return (
    <>
      <MenuItem title="Services" />
      <MenuItem title="Work" />
      <MenuItem title="About" />
      <ContactBtn title="Contact Me" />
    </>
  );
}

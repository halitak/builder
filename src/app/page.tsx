'use client';

import useStore from '@/store';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Layers from './sections/layers';
import ElementSection from './sections/elementSection';
import { TSection } from './types/base';
import localforage from 'localforage';
import { initBanner, initCategories, initHero } from './data/sections';

export default function Home() {
  const { setThemeSections } = useStore((state) => state);

  const [target, setTarget] = useState<{ sectionId: string; path: string[] }>();
  const refIframe = useRef<HTMLIFrameElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    refIframe.current?.contentWindow?.postMessage({ section: `hero` }, '*');
  };

  useEffect(() => {
    const initDB = async () => {
      try {
        let value = await localforage.getItem('sections') as TSection[];
        if (value === null) {
          value = await localforage.setItem('sections', [
            initHero,
            initBanner,
            initCategories,
          ]);
        }
        setThemeSections(value);
      } catch (err) {
        console.log(err);
      }
    };
    initDB();
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<any>) => {
      if (event.origin !== 'http://localhost:3000') return;
      if (event.data.type === 'click') {
        setTarget({ sectionId: event.data.sectionId, path: event.data.path });
      }
    };
    window.addEventListener('message', handleMessage, false);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <main className="grid h-[90vh] grid-cols-3 md:h-screen md:grid-cols-[240px,1fr,240px]">
      <div className="z-50 flex h-[90vh] flex-col border-r bg-background md:h-screen">
        <Layers />
      </div>
      <div className="flex flex-col">
        <div>top</div>
        <div className="w-full h-full">
          <iframe
            ref={refIframe}
            src="/preview"
            className="w-full h-full"
            title="preview"
          />
        </div>
      </div>
      <div className="z-50 flex h-[90vh] flex-col border-l bg-background md:h-screen">
        <ElementSection target={target} />
      </div>
    </main>
  );
}

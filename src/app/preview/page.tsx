'use client';

import { useEffect } from 'react';
import useStore from '../store';
import Banner, { TBanner } from './components/banner';
import Hero, { THero } from './components/hero';
import Categories, { TCategories } from './components/categories';
import localforage from 'localforage';
import { initBanner, initCategories, initHero } from '../data/sections';
import { TSection } from '../types/base';

export default function Home() {
  const { themeSections, setThemeSections } = useStore((state) => state);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<any>) => {
      if (event.origin !== 'http://localhost:3000') return;
      // setThemeSections(event.data);
    };
    const handleClick = (event: MouseEvent) => {
      console.log('handleClick');
      
      let target = event.target as HTMLElement;
      if (target.hasAttribute('data-block')) {
        event.preventDefault();
        event.stopPropagation();
        const name = target.getAttribute('data-block');
        const path: string[] = [];
        do {
          const parent = target.parentElement?.closest('[data-block]');
          if (!parent) break;
          target = parent as HTMLElement;
          path.push(target.getAttribute('data-block') as string);
        } while (target);
        path.reverse();
        path.push(name as string);
        window.parent.postMessage(
          { type: 'click', sectionId: path.shift(), path },
          '*'
        );
      }
    };

    const initDB = async () => {
      try {
        let value = (await localforage.getItem('sections')) as TSection[];
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

    window.addEventListener('message', handleMessage, false);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <header className="border-b h-10 flex items-center justify-center">
        <nav>
          <ul className="flex gap-x-4">
            <li>home</li>
            <li>store</li>
            <li>about</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-y-20">
        {themeSections.map((section) => {
          return section.name === 'hero' ? (
            <Hero data={section as THero} key={section.id} />
          ) : section.name === 'banner' ? (
            <Banner data={section as TBanner} key={section.id} />
          ) : section.name === 'categories' ? (
            <Categories data={section as TCategories} key={section.id} />
          ) : null;
        })}
      </main>
    </>
  );
}

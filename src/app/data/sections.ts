
import { TSection } from '../types/base';
import { nanoid } from 'nanoid'

export const initHero: TSection = {
  id: nanoid(10),
  template: 'components/hero.html',
  name: 'hero',
  data: {
    title: {
      text: 'Lorem ipsum dolor sit amet.',
    },
  },
};

export const initBanner: TSection = {
  id: nanoid(10),
  template: 'components/banner.html',
  name: 'banner',
  data: {
    title: {
      text: 'Lorem, ipsum.',
    },
    desc: {
      text: 'lorem ipsum dolor sit amet. consectetur adipisicing elit. doloremque, quos.',
    },
    link: {
      text: 'Button',
      url: '#',
    },
    img: {
      mobile: '16-9.jpg',
      desktop: '16-9.jpg',
    },
  },
};

export const initCategories: TSection = {
  id: nanoid(10),
  template: 'components/categories.html',
  name: 'categories',
  data: {
    title: {
      text: 'Lorem ipsum dolor sit amet.',
    },
    categories: [
      {
        title: {
          text: 'Category 1',
        },
        desc: {
          text: 'Lorem ipsum dolor sit amet.',
        },
        img: {
          mobile: '4-3.jpg',
          desktop: '4-3.jpg',
        },
      },
      {
        title: {
          text: 'Category 2',
        },
        desc: {
          text: 'Lorem ipsum dolor sit amet.',
        },
        img: {
          mobile: '4-3.jpg',
          desktop: '4-3.jpg',
        },
      },
      {
        title: {
          text: 'Category 3',
        },
        desc: {
          text: 'Lorem ipsum dolor sit amet.',
        },
        img: {
          mobile: '4-3.jpg',
          desktop: '4-3.jpg',
        },
      },
    ],
  },
};
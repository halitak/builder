import { TImage, TLink, TList, TText } from '@/app/types/base';
import Image from 'next/image';

export type TCategories = {
  id: string;
  template: string;
  name: string;
  data: {
    title: TText;
    categories: TList;
  };
};

const Categories = ({ data }: { data: TCategories }) => {
  const { title, categories } = data.data;

  return (
    <section
      className="categories flex flex-col gap-y-10"
      data-name={data.name}
      data-block={data.id}
    >
      <div className="text-4xl text-center" data-block="title">
        {title.text}
      </div>
      <div className="flex gap-x-4 justify-evenly" data-block="categories">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col gap-y-2" data-block={index}>
            <Image
              src={`/images/${(category.img as TImage).mobile}`}
              alt={(category.title as TText).text}
              width={300}
              height={400}
              data-block="img"
            />
            <div className="text-lg" data-block="title">
              {(category.title as TText).text}
            </div>
            <div data-block="desc">{(category.desc as TText).text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

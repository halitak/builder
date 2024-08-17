import { TImage, TLink, TText } from '@/app/types/base';
import Image from 'next/image';

export type TBanner = {
  id: string;
  template: string;
  name: string;
  data: {
    title: TText;
    desc: TText;
    link: TLink;
    img: TImage;
  };
};

const Banner = ({ data }: { data: TBanner }) => {
  const { title, desc, link, img } = data.data;

  return (
    <section
      className="banner relative flex justify-center items-center"
      data-name={data.name}
      data-block={data.id}
    >
      <Image
        data-block="img"
        src={`/images/${img.mobile}`}
        width={160}
        height={90}
        alt="16*9"
        className="w-full h-auto aspect-video object-cover max-h-[600px]"
      />
      <div className="absolute">
        <div className="flex flex-col justify-center items-center text-center gap-y-4 py-4 max-w-[600px] px-4">
          <h1
            className="text-3xl font-medium"
            data-block="title"
            data-type="text"
          >
            {title.text}
          </h1>
          <h3 className="text-xl" data-block="desc" data-type="text">
            {desc.text}
          </h3>
          <a
            href={link.url}
            className="rounded bg-blue-600 px-4 py-2 text-white"
            data-block="link"
            data-type="text"
          >
            {link.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;

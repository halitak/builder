import { TText } from '@/app/types/base';

export type THero = {
  id: string;
  template: string;
  name: string;
  data: {
    title: TText;
  };
};

const Hero = ({ data }: { data: THero }) => {
  const { title } = data.data;
  return (
    <section className="hero" data-name={data.name} data-block={data.id}>
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h1 className="text-6xl" data-block="title" data-type="text">
            {title.text}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

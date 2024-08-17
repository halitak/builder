import { TImage } from '../types/base';
import Image from 'next/image';

const EditImg = ({ slug, data }: { slug?: string; data: TImage }) => {
  return (
    <div>
      <Image
        src={`/images/${data.mobile}`}
        width={160}
        height={90}
        alt="16*9"
        className="w-full h-auto aspect-video object-cover"
      />
    </div>
  );
};

export default EditImg;

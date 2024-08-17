import { TLink } from '../types/base';

const EditLink = ({ slug, data }: { slug?: string; data: TLink }) => {

  return (
    <div className='flex flex-col gap-y-4'>
      <label>
        <span>text</span>
        <input
          type="text"
          name="text"
          defaultValue={data.text}
          className="border p-2 rounded"
        />
      </label>
      <label>
        <span>url</span>
        <input
          type="text"
          name="url"
          defaultValue={data.url}
          className="border p-2 rounded"
        />
      </label>
    </div>
  );
};

export default EditLink;

import { TText } from '../types/base';

const EditText = ({ slug, data }: { slug?: string; data: TText }) => {

  return (
    <div>
      <label>
        <span>text</span>
        <input
          type="text"
          name="text"
          defaultValue={data.text}
          className="border p-2 rounded"
        />
      </label>
    </div>
  );
};

export default EditText;

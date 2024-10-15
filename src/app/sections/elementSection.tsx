import { DeepKeys, get } from '../utils/getByPath';
import useStore from '../store';
import EditText from '../edit/text';
import EditLink from '../edit/link';
import {
  TSection,
  TText,
  TLink,
  TImage,
  TList,
  isImage,
  isLink,
  isText,
} from '../types/base';
import EditImg from '../edit/img';

const ElementSection = ({
  target,
}: {
  target: { sectionId: string; path: string[] } | undefined;
}) => {

  const { themeSections, setThemeSections } = useStore((state) => state);
  const section = themeSections.find((section) => {
    return section.id === target?.sectionId;
  });


  if (!section || !target)
    return <div>Select an element on the canvas to edit its settings.</div>;

  let element: TText | TLink | TImage | TList;
  const targetStr = target.path.join('.');

  element = get(section.data, targetStr as DeepKeys<TSection>);
  

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <>
        <div>Element</div>
        <div>{section.name}</div>
        {isImage(element) ? (
          <EditImg key={targetStr} data={element} />
        ) : isLink(element) ? (
          <EditLink key={targetStr} data={element} />
        ) : isText(element) ? (
          <EditText key={targetStr} data={element} />
        ) : (
          <div>Unknown</div>
        )}
        {/* {Object.keys(section.data).map((key) => {
          const keyList = Object.keys(section.data[key]);
          switch (key) {
            case 'title':
              return (
                <EditText
                  key={key}
                  slug={key}
                  data={section.data[key] as TText}
                />
              );
              break;
            case 'link':
              return (
                <EditLink
                  key={key}
                  slug={key}
                  data={section.data[key] as TLink}
                />
              );
              break;
            default:
              break;
          }
        })} */}
      </>
    </div>
  );
};

export default ElementSection;

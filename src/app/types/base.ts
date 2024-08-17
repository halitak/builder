export type TText = {
  text: string;
};

export type TLink = {
  text: string;
  url: string;
};

export type TImage = {
  mobile: string;
  desktop: string;
};

export type TList = {
  [x: string]: TText | TLink | TImage | TList;
}[];

export type TSection = {
  id: string;
  template: string;
  name: string;
  data: {
    [x: string]: TText | TLink | TImage | TList;
  };
};

export type TElement = TText | TLink | TImage | TList;

export const isLink = (el: TElement): el is TLink => {
  return (el as TLink).url !== undefined;
};

export const isImage = (el: TElement): el is TImage => {
  return (el as TImage).mobile !== undefined;
};

export const isText = (el: TElement): el is TText => {
  return (el as TText).text !== undefined;
};
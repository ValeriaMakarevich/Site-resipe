
interface Resipe{
 id: number;
  name: string;
  img: string;
  tag: string;
  ingredients?: Array<string>;
  manual?: Array<string>;
}

export interface ModalWindowtProps {
    active: boolean;
    setActive: (open: boolean) => void;
    resipe: Array<Resipe>;
    random:() => void
  }
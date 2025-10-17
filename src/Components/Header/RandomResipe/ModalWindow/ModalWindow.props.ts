import type { ResipeObject } from "../../../../data";

export interface ModalWindowProps {
  active: boolean;
  setActive: (active: boolean) => void;
  resipe: ResipeObject;
  random: () => void;
}

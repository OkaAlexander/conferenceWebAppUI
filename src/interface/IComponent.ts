import { ChangeEvent } from "react";
import { IGender } from "./IForm";
import { IRoute } from "./IRoute";

export interface IDrawerLink {
  route: IRoute;
  base: string;
  handleLink?: () => void;
}

export interface IInput {
  label: string;
  row_child?: boolean;
  col_child?: boolean;
  full?: boolean;
  data?: IGender[];
  required?: boolean;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: any;
}

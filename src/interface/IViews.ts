import { ReactNode } from "react";
import { IRoute } from "./IRoute";

export interface IDrawer {
  routes: IRoute[];
  handleClose: () => void;
  open: boolean;
  base: string;
}

export interface IModal {
  title: string;
  handleClose: () => void;
  width: any;
  open: boolean;
  children: ReactNode;
}

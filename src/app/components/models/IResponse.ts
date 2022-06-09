import { IException } from "./IException";

export type IResponse<T> = {
  status: "success" | "error";
  response: T | IException;
}
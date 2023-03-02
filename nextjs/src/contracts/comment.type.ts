import { IUser } from "@/contracts/user.type";

export type IComment = {
  message: string;
  user: IUser;
}
import { IUser } from "@/contracts/user.type";

export type IComment = {
  comment: string;
  createdAt: string;
  updatedAt: string;
  blogpostId: string;
  user: IUser;
}
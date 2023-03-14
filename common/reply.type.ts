import { IUser } from "./user.type";

export type IReply = {
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  blogpostId: string;
  parentCommentId: string;
  user: IUser;
}
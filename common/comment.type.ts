import { IUser } from "./user.type";

export type IComment = {
  _id: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  blogpostId?: string;
  user: string;
  parentCommentId?: string
}

export type InputComment = {
  comment: string
  createdAt: string
  updatedAt: string
  blogpostId: string
  user: string
  parentCommentId?: string
}
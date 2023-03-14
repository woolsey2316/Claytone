import { IComment } from "@/contracts/comment.type";
import { IUser } from "@/contracts/user.type";

export type IBlogpost = {
  author: IUser; 
  title: string;
  _id: string;
  imageurl: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  featuredPost: boolean;
  comments: IComment[];

}
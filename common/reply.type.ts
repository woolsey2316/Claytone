export type IReply = {
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  blogpostId: string;
  parentCommentId: string;
  user: string;
}
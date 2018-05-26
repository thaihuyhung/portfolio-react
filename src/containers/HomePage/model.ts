export interface IQueryCommentRequestModel {
  query: string;
}

export interface IQueryCommentResponseModel {
  list: string[]
}

export interface IQueryCommentErrorModel {
  error: number;
}
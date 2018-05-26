import {
  QUERY_COMMENTS,
  QUERY_COMMENTS_ERROR,
  QUERY_COMMENTS_SUCCESS
} from './constant';

import {
  IQueryCommentErrorModel,
  IQueryCommentRequestModel,
  IQueryCommentResponseModel
} from './model'

export interface IQueryComments {
  type: QUERY_COMMENTS,
  param?: IQueryCommentRequestModel
}

export interface IQueryCommentsSuccess {
  type: QUERY_COMMENTS_SUCCESS,
  data: IQueryCommentResponseModel
}

export interface IQueryCommentsError {
  type: QUERY_COMMENTS_ERROR,
  error: IQueryCommentErrorModel
}

export type HomePageAction = IQueryComments | IQueryCommentsSuccess | IQueryCommentsError;

export function queryComments(param?: IQueryCommentRequestModel): IQueryComments {
  return {
    param,
    type: QUERY_COMMENTS,
  };
}

export function queryCommentsSuccess(data: IQueryCommentResponseModel): IQueryCommentsSuccess {
  return {
    data,
    type: QUERY_COMMENTS_SUCCESS,
  };
}

export function queryCommentsError(error: IQueryCommentErrorModel): IQueryCommentsError {
  return {
    error,
    type: QUERY_COMMENTS_ERROR,
  };
}
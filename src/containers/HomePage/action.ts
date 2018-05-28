import {
  QUERY_PROFILE,
  QUERY_PROFILE_ERROR,
  QUERY_PROFILE_SUCCESS
} from './constant';

import {
  IQueryProfileErrorModel,
  IQueryProfileRequestModel,
  IQueryProfileResponseModel
} from './model'

export interface IQueryProfile {
  type: QUERY_PROFILE,
  param?: IQueryProfileRequestModel
}

export interface IQueryProfileSuccess {
  type: QUERY_PROFILE_SUCCESS,
  response: IQueryProfileResponseModel
}

export interface IQueryProfileError {
  type: QUERY_PROFILE_ERROR,
  error: IQueryProfileErrorModel
}

export type HomePageAction = IQueryProfile | IQueryProfileSuccess | IQueryProfileError;

export function queryProfile(param?: IQueryProfileRequestModel): IQueryProfile {
  return {
    param,
    type: QUERY_PROFILE,
  };
}

export function queryProfileSuccess(response: IQueryProfileResponseModel): IQueryProfileSuccess {
  return {
    response,
    type: QUERY_PROFILE_SUCCESS,
  };
}

export function queryProfileError(error: IQueryProfileErrorModel): IQueryProfileError {
  return {
    error,
    type: QUERY_PROFILE_ERROR,
  };
}
export interface IQueryProfileRequestModel {
  query: string;
}

export interface IQueryProfileResponseModel {
  data: {
    profile: object;
  }
}

export interface IQueryProfileErrorModel {
  error: boolean;
}
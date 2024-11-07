/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProcedures = /* GraphQL */ `query GetProcedures($id: ID!) {
  getProcedures(id: $id) {
    id
    procedure
    code
    claimed
    difference
    authorized
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProceduresQueryVariables,
  APITypes.GetProceduresQuery
>;
export const listProcedures = /* GraphQL */ `query ListProcedures(
  $filter: ModelProceduresFilterInput
  $limit: Int
  $nextToken: String
) {
  listProcedures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      procedure
      code
      claimed
      difference
      authorized
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProceduresQueryVariables,
  APITypes.ListProceduresQuery
>;

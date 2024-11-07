/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProcedures = /* GraphQL */ `mutation CreateProcedures(
  $input: CreateProceduresInput!
  $condition: ModelProceduresConditionInput
) {
  createProcedures(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProceduresMutationVariables,
  APITypes.CreateProceduresMutation
>;
export const updateProcedures = /* GraphQL */ `mutation UpdateProcedures(
  $input: UpdateProceduresInput!
  $condition: ModelProceduresConditionInput
) {
  updateProcedures(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProceduresMutationVariables,
  APITypes.UpdateProceduresMutation
>;
export const deleteProcedures = /* GraphQL */ `mutation DeleteProcedures(
  $input: DeleteProceduresInput!
  $condition: ModelProceduresConditionInput
) {
  deleteProcedures(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProceduresMutationVariables,
  APITypes.DeleteProceduresMutation
>;

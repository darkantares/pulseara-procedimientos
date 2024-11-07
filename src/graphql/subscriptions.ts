/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProcedures = /* GraphQL */ `subscription OnCreateProcedures(
  $filter: ModelSubscriptionProceduresFilterInput
) {
  onCreateProcedures(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProceduresSubscriptionVariables,
  APITypes.OnCreateProceduresSubscription
>;
export const onUpdateProcedures = /* GraphQL */ `subscription OnUpdateProcedures(
  $filter: ModelSubscriptionProceduresFilterInput
) {
  onUpdateProcedures(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProceduresSubscriptionVariables,
  APITypes.OnUpdateProceduresSubscription
>;
export const onDeleteProcedures = /* GraphQL */ `subscription OnDeleteProcedures(
  $filter: ModelSubscriptionProceduresFilterInput
) {
  onDeleteProcedures(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProceduresSubscriptionVariables,
  APITypes.OnDeleteProceduresSubscription
>;

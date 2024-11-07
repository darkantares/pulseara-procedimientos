/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProceduresInput = {
  id?: string | null,
  procedure?: string | null,
  code?: string | null,
  claimed?: number | null,
  difference?: number | null,
  authorized?: number | null,
};

export type ModelProceduresConditionInput = {
  procedure?: ModelStringInput | null,
  code?: ModelStringInput | null,
  claimed?: ModelFloatInput | null,
  difference?: ModelFloatInput | null,
  authorized?: ModelFloatInput | null,
  and?: Array< ModelProceduresConditionInput | null > | null,
  or?: Array< ModelProceduresConditionInput | null > | null,
  not?: ModelProceduresConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Procedures = {
  __typename: "Procedures",
  id: string,
  procedure?: string | null,
  code?: string | null,
  claimed?: number | null,
  difference?: number | null,
  authorized?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProceduresInput = {
  id: string,
  procedure?: string | null,
  code?: string | null,
  claimed?: number | null,
  difference?: number | null,
  authorized?: number | null,
};

export type DeleteProceduresInput = {
  id: string,
};

export type ModelProceduresFilterInput = {
  id?: ModelIDInput | null,
  procedure?: ModelStringInput | null,
  code?: ModelStringInput | null,
  claimed?: ModelFloatInput | null,
  difference?: ModelFloatInput | null,
  authorized?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProceduresFilterInput | null > | null,
  or?: Array< ModelProceduresFilterInput | null > | null,
  not?: ModelProceduresFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProceduresConnection = {
  __typename: "ModelProceduresConnection",
  items:  Array<Procedures | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProceduresFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  procedure?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  claimed?: ModelSubscriptionFloatInput | null,
  difference?: ModelSubscriptionFloatInput | null,
  authorized?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProceduresFilterInput | null > | null,
  or?: Array< ModelSubscriptionProceduresFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateProceduresMutationVariables = {
  input: CreateProceduresInput,
  condition?: ModelProceduresConditionInput | null,
};

export type CreateProceduresMutation = {
  createProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProceduresMutationVariables = {
  input: UpdateProceduresInput,
  condition?: ModelProceduresConditionInput | null,
};

export type UpdateProceduresMutation = {
  updateProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProceduresMutationVariables = {
  input: DeleteProceduresInput,
  condition?: ModelProceduresConditionInput | null,
};

export type DeleteProceduresMutation = {
  deleteProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProceduresQueryVariables = {
  id: string,
};

export type GetProceduresQuery = {
  getProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProceduresQueryVariables = {
  filter?: ModelProceduresFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProceduresQuery = {
  listProcedures?:  {
    __typename: "ModelProceduresConnection",
    items:  Array< {
      __typename: "Procedures",
      id: string,
      procedure?: string | null,
      code?: string | null,
      claimed?: number | null,
      difference?: number | null,
      authorized?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProceduresSubscriptionVariables = {
  filter?: ModelSubscriptionProceduresFilterInput | null,
};

export type OnCreateProceduresSubscription = {
  onCreateProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProceduresSubscriptionVariables = {
  filter?: ModelSubscriptionProceduresFilterInput | null,
};

export type OnUpdateProceduresSubscription = {
  onUpdateProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProceduresSubscriptionVariables = {
  filter?: ModelSubscriptionProceduresFilterInput | null,
};

export type OnDeleteProceduresSubscription = {
  onDeleteProcedures?:  {
    __typename: "Procedures",
    id: string,
    procedure?: string | null,
    code?: string | null,
    claimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

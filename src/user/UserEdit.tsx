import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { ProfileTitle } from "../profile/ProfileTitle";
import { TeamTitle } from "../team/TeamTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Admin" source="isAdmin" />
        <BooleanInput label="Is Viewer" source="isViewer" />
        <TextInput label="Language" source="language" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="teams"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="workspaces"
          reference="Workspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

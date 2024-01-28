import { User } from "../user/User";
import { Workspace } from "../workspace/Workspace";

export type Team = {
  avatarUrl: string | null;
  canComment: boolean | null;
  canShare: boolean | null;
  createdAt: Date;
  defaultUserRole: string | null;
  id: string;
  inviteRequired: boolean | null;
  name: string | null;
  subDomain: string | null;
  theme: string | null;
  updatedAt: Date;
  url: string | null;
  users?: Array<User>;
  workspaces?: Array<Workspace>;
};

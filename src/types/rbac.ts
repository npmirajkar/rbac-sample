export type Role = 'admin' | 'manager' | 'user';

export interface User {
  id: string;
  name: string;
  role: Role;
}

export interface RBACRule {
  route: string;
  allowedRoles: Role[];
}

export interface Action {
  id: string;
  name: string;
  allowedRoles: Role[];
}

export interface ActionResult {
  success: boolean;
  message: string;
}
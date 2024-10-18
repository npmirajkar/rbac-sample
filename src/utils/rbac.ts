import { RBACRule, Action, Role } from '../types/rbac';

export const rbacRules: RBACRule[] = [
  { route: '/', allowedRoles: ['admin', 'manager', 'user'] },
  { route: '/dashboard', allowedRoles: ['admin', 'manager', 'user'] },
  { route: '/admin', allowedRoles: ['admin'] },
];

export const actions: Action[] = [
  { id: 'view_reports', name: 'View Reports', allowedRoles: ['admin', 'manager', 'user'] },
  { id: 'manage_team', name: 'Manage Team', allowedRoles: ['admin', 'manager'] },
  { id: 'system_settings', name: 'System Settings', allowedRoles: ['admin'] },
  { id: 'create_task', name: 'Create Task', allowedRoles: ['admin', 'manager', 'user'] },
  { id: 'approve_expense', name: 'Approve Expense', allowedRoles: ['admin', 'manager'] },
  { id: 'generate_report', name: 'Generate Report', allowedRoles: ['admin', 'manager'] },
  { id: 'create_user', name: 'Create User', allowedRoles: ['admin'] },
  { id: 'assign_roles', name: 'Assign Roles', allowedRoles: ['admin'] },
  { id: 'system_backup', name: 'System Backup', allowedRoles: ['admin'] },
];

export const checkAccess = (userRole: Role, route: string): boolean => {
  const rule = rbacRules.find((r) => r.route === route);
  return rule ? rule.allowedRoles.includes(userRole) : false;
};

export const checkActionAccess = (userRole: Role, actionId: string): boolean => {
  const action = actions.find((a) => a.id === actionId);
  return action ? action.allowedRoles.includes(userRole) : false;
};

export const getAvailableActions = (userRole: Role): Action[] => {
  return actions.filter(action => action.allowedRoles.includes(userRole));
};
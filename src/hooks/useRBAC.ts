import { useAuth } from '../context/AuthContext';
import { checkActionAccess, getAvailableActions } from '../utils/rbac';
import { Action, ActionResult } from '../types/rbac';

export const useRBAC = () => {
  const { user } = useAuth();

  const canPerformAction = (actionId: string): boolean => {
    if (!user) return false;
    return checkActionAccess(user.role, actionId);
  };

  const getActions = (): Action[] => {
    if (!user) return [];
    return getAvailableActions(user.role);
  };

  const performAction = async (actionId: string): Promise<ActionResult> => {
    if (!canPerformAction(actionId)) {
      return { success: false, message: 'Access denied' };
    }
    // Simulate action execution
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, message: `Action ${actionId} performed successfully` };
  };

  return { canPerformAction, getActions, performAction };
};
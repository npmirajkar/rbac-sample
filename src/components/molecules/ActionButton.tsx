import React from 'react';
import Button from '../atoms/Button';
import { useRBAC } from '../../hooks/useRBAC';

interface ActionButtonProps {
  actionId: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

const ActionButton: React.FC<ActionButtonProps> = ({ actionId, label, variant = 'primary' }) => {
  const { canPerformAction, performAction } = useRBAC();

  const handleClick = async () => {
    const result = await performAction(actionId);
    alert(result.message);
  };

  if (!canPerformAction(actionId)) {
    return null;
  }

  return (
    <Button onClick={handleClick} variant={variant}>
      {label}
    </Button>
  );
};

export default ActionButton;
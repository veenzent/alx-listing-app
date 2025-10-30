export interface CardProps {
  children?: React.ReactNode;
  // Add more card-specific props here
}

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  // Add more button-specific props here
}

// Add more interfaces as needed for the project
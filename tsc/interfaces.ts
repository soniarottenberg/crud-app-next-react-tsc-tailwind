import { Role } from "./enums";
import { User } from "./types";

// APP
export interface Props {
  data: {
    id: "string";
    first_name: "string";
    last_name: "string";
    email: "string";
    role: Role;
  }[];
}

// commons Props

export interface ArrowProps {
  arrowDirection: string;
}

export interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
}

export interface TitleProps {
  title: string;
}

export interface SquareProps {
  icon: any;
  alt: string;
  size: "small" | "medium";
  isActive: boolean;
  handleClick: () => void;
}

export interface SelectInputProps {
  title: string;
  name: string;
  value: string;
  placeholder: string;
  options: {};
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextInputProps {
  type: string;
  title: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: string) => void;
}

// component Props
export interface AddUserButtonProps {
  handleAddUser: () => void;
}

export interface FormProps {
  handleGoBack: () => void;
}

export interface SearchBarProps {
  filterUsers: (e: string) => void;
}

export interface UserCardProps {
  user: User;
}

// container
export interface UserCardContainerProps {
  users: User[];
  handleAddUser: () => void;
}

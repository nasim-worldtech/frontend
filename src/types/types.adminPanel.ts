export interface ISignInInputs {
  email: string;
  password: string;
}

export interface ISignUpInputs extends ISignInInputs {
  name: string;
  confirmPassword: string;
}

export interface IPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface BreadcrumbProps {
  pageName: string;
}

export interface PaginationProps {
  handlePageClick: ({ selected }: { selected: number }) => void;
  pageCount: number;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export type HandleDeleteFunction = (postId: number) => void;

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
export interface IUser {
  address: null;
  addressBn: null;
  contact: string;
  contactVerified: number;
  createdAt: string;
  createdBy: null;
  email: string;
  emailVerifiedAt: null;
  id: number;
  isLocked: number;
  loginStatus: number;
  mailVerified: number;
  name: string;
  name_bn: null;
  nid: null;
  otpVerified: number;
  passwordChangeStatus: number;
  status: number;
  updatedAt: string;
  updatedBy: null;
  userName: string;
}

export type handlePagination = (postString: number) => void;

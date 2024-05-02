export interface ISignInInputs  {
  email: string;
  password: string;
};

export interface ISignUpInputs extends  ISignInInputs  {
  name: string;
  confirmPassword: string;
};

export interface IPost{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
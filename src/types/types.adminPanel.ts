export interface SignInInputs  {
  email: string;
  password: string;
};

export interface SignUpInputs extends SignInInputs  {
  name: string;
  confirmPassword: string;
};
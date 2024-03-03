interface AuthForm {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

interface AuthFaliure {
  message: string;
}

interface AuthSuccess {
  result: Document;
  token: string;
}

interface AuthProps {
  handleSubmit: ChangeEventHandler<HTMLInputElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  switchAuthMode: ChangeEventHandler<HTMLInputElement>;
  isLoading: boolean;
  isSignIn: boolean;
}

export { AuthForm, AuthFaliure, AuthSuccess, AuthProps };

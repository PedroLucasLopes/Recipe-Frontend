interface ISignData {
  signIn: {
    username: string;
    password: string;
  };
  signUp: {
    email: string;
    city: string;
    country: string;
  };
}

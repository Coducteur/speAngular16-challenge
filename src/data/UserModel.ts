export class User {
  constructor(
    public username: string,
    public credentials: {
      email: string | null;
      password: string | null;
    },
    public adress: {
      rue: string | null;
      cp: string | null;
      ville: string | null;
    } | null
  ) {}
}

export class User {
  constructor(
    public username: string | null,
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

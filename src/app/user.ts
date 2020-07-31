// Simple class to hold user data.
export class User {
  // We will always have a username
  username: string;
  // We may or may not know the fullname (e.g., Login form doesn't include it)
  fullname?: string;
  // We may or may not know the password (e.g., token payload doesn't include it)
  password?: string;
}

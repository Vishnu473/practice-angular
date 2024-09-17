export interface UserDetails {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: {
    plot: string | null;
    street: string | null;
    country: string | null;
    city: string | null;
    region: string | null;
    postal: string | null;
  };
}

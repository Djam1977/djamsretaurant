export interface Comment {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  rating: number;
  verifiedByAdmin: boolean;
}
export interface NewComment {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  rating: number;
}
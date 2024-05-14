export interface UpdateInfoRequest {
  name: string;
}

export interface UpdateUserInfoRequest {
  name: string;
  age: number;
  married?: boolean;
  birthdate: string;
}

import { ValidationError } from 'class-validator';
import { UpdateUserInfoRequest } from 'src/info/models';

export function validateBirthdateMatchesAge(
  data: UpdateUserInfoRequest,
): ValidationError[] {
  const errors: ValidationError[] = [];

  const today = new Date();
  const birthDate = new Date(data.birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (age !== data.age) {
    const error = new ValidationError();
    error.property = 'birthdate';
    error.constraints = {
      isBirthdateMatchingAge: 'Birthdate does not match the age',
    };
    errors.push(error);
  }

  return errors;
}

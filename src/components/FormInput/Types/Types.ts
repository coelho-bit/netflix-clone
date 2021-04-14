export type InputType = IEmail | IPassword;

class IEmail {
  regex: RegExp;

  constructor(regex: RegExp) {
    this.regex = regex;
  }
}

class IPassword {
  minLength: number;
  specialChar: boolean;

  constructor(minLength: number, specialChar: boolean) {
    this.minLength = minLength;
    this.specialChar = specialChar;
  }
}

export const Email = new IEmail(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const Password = new IPassword(8, true);

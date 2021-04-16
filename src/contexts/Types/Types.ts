export type InputType = IEmail | IPassword;

class IEmail {
  regex: RegExp;

  constructor(regex: RegExp) {
    this.regex = regex;
  }
}

class IPassword {
  minLength: number;

  constructor(minLength: number) {
    this.minLength = minLength;
  }
}

export const Email = new IEmail(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const Password = new IPassword(6);

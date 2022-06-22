export enum INPUT_FIELDS{
  USERNAME = 'username',
  PASSWORD = "password",

  EMAIL = "email",
  PHONE = "phone",

  FULL_NAME = "fullName",
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  MIDDLE_NAME = "middleName",

  MESSAGE = "message",
  SHORT_TEXT = "shortText",
  FILE = "file",
  IMAGE = "image",

  CARD = "card",
  ID = "id",
  IIN = "iin",
  SMS = "sms",
  PRICE = "prices",

  TEXT = "text",
  COMPANY_NAME = "companyName",
  PRODUCT_NAME = "productName",
  DESCRIPTION = "description",
  ADDRESS = "addresses"
}

export const MESSAGES = {
  ERROR: {
    LOGIN:        "eroor logion",
    FULLNAME:     "fullname",
    EMAIL:        "EMAIL",
    PHONE:        "phone",
    DESCRIPTION:  "desc",
    COMPANY_NAME: "COMPANY_NAME",
    IIN:          "IIN",
    ADDRESS:      "ADDRESS",
    PRODUCT_NAME: "PRODUCT_NAME",
    PRICE:        "PRICE",
    PASSWORD:     "PASSWORD"
  },
  SUCCESS:{
    LOGIN:        "LOGIN",
    REGISTER: "REGISTER"
  },
  INFO:{
    NOTIFICATION:        "NOTIFICATION",
  }
}

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  ADD_POST = '/add-post',
  LOGOUT = '/logout',
  PROFILE = '/profile',
  ERROR_500 = '/500',
  ERROR_404 = '/404',
}
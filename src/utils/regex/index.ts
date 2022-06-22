import {INPUT_FIELDS} from '../../types/enums';

export type REGEX = Record<string, RegExp>;

export const REGS: REGEX = {
  companyName: /^.{2,250}$/,
  productName: /^.{2,150}$/,
  // legalName:        /^.{2,250}$/,
  // legalType:        /[\s\S]+/,

  sms: /^\d{4}$/,
  password: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}/g,
  email: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/g,
  shortText: /^.{5,50}$/,
  message: /^.$/,
  text: /^.{5,250}$/,
  description: /^.{10,400}$/,
  iin: /^[0-9]{12}$/,

  fullName: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g,
  firstName: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g,
  lastName: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g,
  middleName: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g,

  phone: /^\+?[0-9]{8,15}$/g,
  staticPhone: /^[0-9]{10}$/,
  responseFullName: /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ ]{4,}$/,

  addresses: /^.{4,}$/,
  cities: /[\s\S]+/,
  provinces: /[\s\S]+/,
  places: /[\s\S]+/,
  prices: /^[+-]?([0-9]+([0-9]*)?)$/,

  minOrderAmount: /^[+-]?([0-9]+([0-9]*)?)$/,
  deliveryDays: /^(?:[1-9]\d*|0)$/,
  workTime: /^.{4,}$/,

  supportDesc: /^.{5,250}$/,
  username: /(?=^[a-zA-Z0-9-_]{3,15}$)(?=.*[a-zA-Z].*)/g,
};

export function validateRegex(value: string, field: INPUT_FIELDS): boolean {
  // if (field === "phone" && (value.length > 10 || value[0] === "0")) return;
  return REGS[field].test(value);
}
export const toPersianDigits = (s: string): string =>
  s.replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

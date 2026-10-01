export const getFormattedTime = (date = new Date()) =>
  new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

export function cx(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}

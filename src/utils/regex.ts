export const regex = {
  hex: /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
  rgb: /^rgb\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/,
  rgba: /^rgba\(\s*(\d{1,3}\s*,\s*){3}(\d(\.\d+)?|1(\.0+)?)\s*\)$/,
}

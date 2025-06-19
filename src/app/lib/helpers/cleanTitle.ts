export const cleanTitle = (title: string): string =>
  title
    .normalize("NFKD")
    .replace(/[''’"]/g, "")
    .replace(/[?:!.,]/g, "")
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase()
    .trim();

export class Pays {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  translations: {
    fra: {
      official: string;
      common: string;
    };
  };

  constructor(
    flags: { png: string; svg: string; alt: string },
    translations: { fra: { official: string; common: string; } }
  ) {
    this.flags = flags;
    this.translations = translations;
  }
}

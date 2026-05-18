export class Pays {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };


  constructor(name: { common: string; official: string }, flags: {
    png: string;
    svg: string;
    alt: string
  }) {
    this.name = name;
    this.flags = flags;
  }
}

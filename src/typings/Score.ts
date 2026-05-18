export class Score {
  private _score: number;

  constructor(score: number) {
    this._score = score;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }
}

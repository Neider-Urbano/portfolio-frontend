export interface Phrase {
  id: number;
  phrase: string;
  author: string;
  url: string;
}

export type Phrases = Array<Phrase>;

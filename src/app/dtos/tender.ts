import { LanguageEntity } from './languageentity';

export class Tender {
  constructor(
    public id: string,
    public cpvs: string[],
    public languageentities: LanguageEntity[]
    ) {
  }
}

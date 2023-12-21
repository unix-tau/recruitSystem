 // Model for ApplicantInformation
import { PersonalInformation } from './personal-information.model';


export class ApplicantInformation {
  private _personalInformation: PersonalInformation = new PersonalInformation();
  private _resumeCV: string = '';
  private _coverLetter: string = '';
  private _portfolio: string = '';

  // Getter and Setter for personalInformation
  get personalInformation(): PersonalInformation {
    return this._personalInformation;
  }

  set personalInformation(value: PersonalInformation) {
    this._personalInformation = value;
  }

  // Getter and Setter for resumeCV
  get resumeCV(): string {
    return this._resumeCV;
  }

  set resumeCV(value: string) {
    this._resumeCV = value;
  }

  // Getter and Setter for coverLetter
  get coverLetter(): string {
    return this._coverLetter;
  }

  set coverLetter(value: string) {
    this._coverLetter = value;
  }

  // Getter and Setter for portfolio
  get portfolio(): string {
    return this._portfolio;
  }

  set portfolio(value: string) {
    this._portfolio = value;
  }

  // Add other methods or logic as needed
}


import { ApplicantInformation } from '../model/applicant-information.model';
import { PersonalInformation } from '../model/personal-information.model';




export class ApplicantInformationState {
  private _personalInformation: PersonalInformation = new PersonalInformation();
  private _applicantInformation: ApplicantInformation = new ApplicantInformation();

  get personalInformation(): PersonalInformation {
    return this._personalInformation;
  }

  set personalInformation(personalInformation: PersonalInformation) {
    this._personalInformation = personalInformation;
  }

  get applicantInformation(): ApplicantInformation {
    return this._applicantInformation;
  }

  set applicantInformation(applicantInformation: ApplicantInformation) {
    this._applicantInformation = applicantInformation;
  }
}


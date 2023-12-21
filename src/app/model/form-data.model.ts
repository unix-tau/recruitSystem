
// form-data.model.ts
import { JobInformation } from './job-information.model';
import { ApplicantInformation } from './applicant-information.model';
import { ApplicationDetails } from './application-details.model';

 export interface FormDataModel {
  jobInformation: JobInformation;
  applicantInformation: ApplicantInformation;
  applicationDetails: ApplicationDetails;
  // Add other properties for educational background, work experience, skills, etc.
}
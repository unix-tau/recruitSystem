import { JobInformation } from '../model/job-information.model'
import { FormState } from './form-state'

export class JobInformationState implements  FormState{
    private _jobInformation: JobInformation = new JobInformation();

    // Getter and Setter for jobInformation
    get jobInformation(): JobInformation {
      return this._jobInformation;
    }
  
    set jobInformation(value: JobInformation) {
      this._jobInformation = value;
    }    // Add other methods or logic as needed
  }
  
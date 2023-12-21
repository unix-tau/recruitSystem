import { ApplicationDetails } from "../model/application-details.model";

export class ApplicationDetailsState {

    private _applicationDetails: ApplicationDetails = new ApplicationDetails();

    // Getter and Setter for applicationDetails
    get applicationDetails(): ApplicationDetails {
      return this._applicationDetails;
    }
  
    set applicationDetails(value: ApplicationDetails) {
      this._applicationDetails = value;
    }
}

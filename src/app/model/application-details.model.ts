export class ApplicationDetails {
    private _applicationDate: string = '';
    private _applicationStatus: string = '';
  
    // Getter and Setter for applicationDate
    get applicationDate(): string {
      return this._applicationDate;
    }
  
    set applicationDate(value: string) {
      this._applicationDate = value;
    }
  
    // Getter and Setter for applicationStatus
    get applicationStatus(): string {
      return this._applicationStatus;
    }
  
    set applicationStatus(value: string) {
      this._applicationStatus = value;
    }
  
    // Add other methods or logic as needed
  }
  
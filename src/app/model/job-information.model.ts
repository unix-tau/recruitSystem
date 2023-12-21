export class JobInformation {
  private _jobTitle: string = '';
  private _jobDescription: string = '';
  private _jobLocation: string = '';

  // Getter and Setter for jobTitle
  get jobTitle(): string {
    return this._jobTitle;
  }

  set jobTitle(value: string) {
    this._jobTitle = value;
  }

  // Getter and Setter for jobDescription
  get jobDescription(): string {
    return this._jobDescription;
  }

  set jobDescription(value: string) {
    this._jobDescription = value;
  }

  // Getter and Setter for jobLocation
  get jobLocation(): string {
    return this._jobLocation;
  }

  set jobLocation(value: string) {
    this._jobLocation = value;
  }

  // Add other methods or logic as needed
}


  
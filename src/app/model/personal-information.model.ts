export class PersonalInformation {
    private _name: string = '';
    private _contactDetails: string = '';
    private _address: string = '';
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get contactDetails(): string {
      return this._contactDetails;
    }
  
    set contactDetails(value: string) {
      this._contactDetails = value;
    }
  
    get address(): string {
      return this._address;
    }
  
    set address(value: string) {
      this._address = value;
    }
  
    // You can also define other methods or logic related to PersonalInformation here
  }
  
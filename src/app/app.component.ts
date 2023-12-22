import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobInformation } from "./model/job-information.model";
import { ApplicantInformation } from "./model/applicant-information.model";
import { ApplicationDetails } from "./model/application-details.model";
import { FormDataModel } from "./model/form-data.model";
import { JobInformationState } from "./states/job-information-state";
import { ApplicantInformationState } from "./states/applicant-information-state";
import { FormState } from "./states/form-state";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentFormState: FormState = new JobInformationState();

  currentFormGroup: string = 'jobInformation';
  showReviewSection: boolean = false; // Track whether to show the review section
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      jobInformation: this.fb.group({
        jobTitle: ['', Validators.required],
        jobDescription: ['', Validators.required],
        jobLocation: ['', Validators.required],
      }),
      applicantInformation: this.fb.group({
        personalInformation: this.fb.group({
          name: ['', Validators.required],
          contactDetails: ['', Validators.required],
          address: ['', Validators.required],
          resumeCV: ['', Validators.required],
          coverLetter: ['', Validators.required],
          portfolio: ['', Validators.required],
        }),
        // ... Other controls in the applicantInformation group
      }),
      applicationDetails: this.fb.group({
        applicationDate: ['', Validators.required],
        applicationStatus: ['', Validators.required],
      }),
      // ... Add other form controls for educational background, work experience, skills, etc.
    });
  }

  // ... (rest of the methods)
  onSubmit() {
    // Perform any necessary form submission logic
    // If in the review section, save data to the database
    if (this.showReviewSection) {
      // Add logic to save data to SQL database
      const formData = this.applicationForm.value as FormDataModel;

      console.log(formData);

      this.saveToDatabase(formData);

      // Reset the form or navigate to a success page
      // this.applicationForm.reset();
      //this.showReviewSection = false;
    } else {
      // Switch to the next form group
      if (this.currentFormGroup === 'jobInformation') {
        const formData = this.applicationForm.get('jobInformation')?.value as JobInformation;
        console.log(formData);
        this.currentFormGroup = 'applicantInformation';
      } else if (this.currentFormGroup === 'applicantInformation') {
        const formData = this.applicationForm.get('applicantInformation')?.value as ApplicantInformation;
        console.log(formData);
        this.currentFormGroup = 'applicationDetails';
      } else if (this.currentFormGroup === 'applicationDetails') {
        const formData = this.applicationForm.get('applicationDetails')?.value as ApplicationDetails;
        console.log(formData);
        this.currentFormGroup = 'packageModel';
      } else {
        // console.log(formData);
        // Handle completion, navigate, or reset the form as needed
        // For example, you might navigate to a success page
      }
    }
  }

  private saveToDatabase(data: FormDataModel) {


    console.log("saving below information to database :")
    console.log(data)
    // Implement your logic to send data to the server and save to the SQL database
    // You might want to use Angular's HttpClient to make a request to your server API
    // Example using HttpClient (import it and inject it in the constructor):
    // this.httpClient.post('your-api-endpoint', data).subscribe(response => {
    //   console.log('Data saved successfully!', response);
    // }, error => {
    //   console.error('Error saving data:', error);
    // });
  }


  onSkip() {
    // Skip to the next form group
    this.onNext();
  }

  onPrevious() {
    // Go to the previous form group
    if (this.currentFormGroup === 'applicantInformation') {
      this.currentFormGroup = 'jobInformation';
    } else if (this.currentFormGroup === 'applicationDetails') {
      this.currentFormGroup = 'applicantInformation';
    }
    // Add more conditions if you have additional form groups
  }

  onNext() {
    // Go to the next form group
    if (this.currentFormGroup === 'jobInformation') {
      this.currentFormGroup = 'applicantInformation';
    } else if (this.currentFormGroup === 'applicantInformation') {
      this.currentFormGroup = 'applicationDetails';
    }
    else if (this.currentFormGroup === 'applicationDetails') {
      this.currentFormGroup = 'review-section';
    }
  }

  onReview() {
    // Set the flag to show the review section
    this.showReviewSection = true;
  }

  onEdit() {
    // Set the flag to hide the review section
    this.showReviewSection = false;
  }


  updateFormState() {
    if (this.currentFormState instanceof JobInformationState) {
      // this.currentFormState = new ApplicantInformationState();
    } else if (this.currentFormState instanceof ApplicantInformationState) {
      // this.currentFormState = new ApplicationDetailsState();
    }
    // Add more conditions if you have additional form states
  } 


  getFlattenedControls(formGroup: FormGroup) {
    const flatControls: { [key: string]: any } = {};
  
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
  
      if (control instanceof FormGroup) {
        Object.assign(flatControls, this.getFlattenedControls(control));
      } else {
        flatControls[key] = control?.value;
      }
    });
  
    return flatControls;
  }
  


}

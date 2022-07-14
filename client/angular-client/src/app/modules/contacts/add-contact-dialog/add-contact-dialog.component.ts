import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { usernameMinLength } from '@env';
import IDialogData from '@shared/models/dialog-data.model';

/**
 * Component for handle add contact form
 */
@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.css']
})
export class AddContactDialogComponent {

  // Attributes

  constructor(
    private dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: IDialogData
  ) {
    this.dialogRef.disableClose = true;
  }

  // Methods

  /**
   * Call when the cancel button is performed
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Submit the form data
   */
  onSubmit(): void {
    // Complete here the add contact feature
    this.dialogRef.close();
  }

}

import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewDialogSService } from 'src/app/services/new-dialog-s.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.css']
})
export class NewDialogComponent {
  constructor(public newDialogService : NewDialogSService, public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  reactiveForm : FormGroup

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      dogsName : new FormControl(null),
      lifeExpectancy : new FormControl(null),
      goodWithchildren : new FormControl(null),
      energyLvl : new FormControl(null),
      image : new FormControl("placeholder")
    });
  }

  onSubmit() {
    const data = {
      name: this.reactiveForm.value.dogsName,
      good_with_children: this.reactiveForm.value.goodWithchildren,
      max_life_expectancy: this.reactiveForm.value.lifeExpectancy,
      energy: this.reactiveForm.value.energyLvl,
      id: this.reactiveForm.value.dogsName + "-userAdded",
      image : this.reactiveForm.value.image,
      image_link : "assets/" + this.reactiveForm.value.image + ".jpg"
    }

    this.newDialogService.updateResultList(data);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}

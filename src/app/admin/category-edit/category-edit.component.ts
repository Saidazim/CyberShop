import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'src/app/stores/category-store/category.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/app.reducers';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateCategory, AddCategory } from 'src/app/stores/category-store/category.actions';

export interface DialogData{
  editMode: boolean,
  category: Category,
  index: number
  }

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup
  
  constructor(private store: Store<AppState>,
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder) { }

    ngOnInit() {
      this.initForm()
    }
  
    initForm() {
      if (this.data.editMode) {
        this.categoryForm =this.fb.group({
          name: [this.data.category.name, Validators.required],
          icon: [this.data.category.icon, Validators.required],
        })
      } else {
        this.categoryForm = this.fb.group({
          name: ['', Validators.required],
          icon: ['', Validators.required],
        })
      }
    }
  
    onSubmit() {
      const form = this.categoryForm.value
      
      if (this.data.editMode) {
        let updatedCategory = {...this.data.category, ...form}
        this.store.dispatch(new UpdateCategory(updatedCategory))
      } else {
        this.store.dispatch(new AddCategory(form))
      }
      this.dialogRef.close(form)
    }
  
    onCancel() {
      this.dialogRef.close()
    }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  constructor(private fb: FormBuilder) { }
  submit = false

  bookForm = this.fb.group({

    bookName: ['', Validators.required],
    author: ['', Validators.required],
    publication: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(0)]],
    genre: ['', Validators.required],
    publishedDate: [null, Validators.required],
    country: ['', Validators.required],
    description: ['', Validators.required],
  })

  get f() {
    return this.bookForm.controls;
  }

  onSubmit() {
    this.submit = true
    console.log('clicked');
    console.log('f', this.f);
  }

}

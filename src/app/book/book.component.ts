import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      genre: ['', Validators.required],
      publishedDate: [null, Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log(this.bookForm.value);
    }
  }

}

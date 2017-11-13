import { Component, OnInit } from '@angular/core';
//import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import swal from 'sweetalert2';
import '../../../node_modules/sweetalert2/dist/sweetalert2.css'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message() {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      timer: null
    }).then(function() {
      swal(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
    }, function(dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}


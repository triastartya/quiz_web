import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frist-screen',
  templateUrl: './frist-screen.component.html',
  styleUrls: ['./frist-screen.component.scss']
})
export class FristScreenComponent {

  constructor(
    private _router: Router,
  ){}
  
  handleClickMulai(){
    this._router.navigate(['/datadiri']);
  }

}

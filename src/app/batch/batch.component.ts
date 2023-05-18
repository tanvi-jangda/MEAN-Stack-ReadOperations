import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  
  serviceResponse:any;
  constructor(private serviceObj:MarvellousService){
  }

  getBatch(){
    this.serviceObj.getBatchInfo().subscribe(data=>
      {
        this.serviceResponse=data
      });
    console.log(this.serviceResponse);
  }
  ngOnInit()
  {
   
  }
}

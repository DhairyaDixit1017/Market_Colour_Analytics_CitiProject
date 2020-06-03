import { Component, OnInit } from '@angular/core';
import {DataservService} from '../dataserv.service';
import {IData} from '../data';

@Component({
  selector: 'app-avgvol',
  templateUrl: './avgvol.component.html',
  styleUrls: ['./avgvol.component.css']
})
export class AvgvolComponent implements OnInit {

  public data = [];
  public d = [];
  public name="";
  public val="";
  public v="";
  public tickers = [];
  
  constructor(private _dataService: DataservService) { 

    this.tickers = ["ABBV","ABT","ACN","AMT","ANTM","AXP","AZN","BABA","BAC",
    "BCDRF","BDX","BLK","BMY","BNS","BSAC","BSBR","BSMX","BTI","C","CAT","CNI",
    "CRM","CVS","D","DEO","DUK","EL","ENB","EQNR","FIS","GE","GS","GSK","HD","HON",
    "HSBC","JNJ","JPM","LFC","LLY","LMT","MA","MBFJF","MDT","MO","MS","NEE","NKE","NVO",
    "NVS","PBR","PFE","PM","PNC","RIO","RY","SAP","SNP","T","TM","TMO","TSM","UN","UNH",
    "UNP","UPS","UTX","XOM"];

  }

  ngOnInit(): void {
  }

  sendVal(val){
    this.name = val;
    this.callGetData();
    console.log("Sending the value of selected tckr to getVal")
  }

  getval(): string{
    return this.name;
  }

  callGetData(){
    console.log("Now in callGetData");
    this.v = this.getval()
    this._dataService.getData(this.v)
      .subscribe(data => 
        {this.data = data;
        console.log(data);
        });
  }

  dis(value) {

    var myDemo = document.getElementById('demo');
    for(let i in this.tickers){
        if(value==this.tickers[i]){
          console.log(value);
          myDemo.style.display="block";
          this.val=value;
          break;
        }
        else console.log("No Matches");
        }
    }

}

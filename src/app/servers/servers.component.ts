import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  input: any;
  nameStr: any; // = "biren patel,harsh shah,bhuvi,swapnil patel,tapan,x,y,z,nine";
  names: any;
  /*names = [
    "biren",
    "harsh",
    "bhuvi",
    "swapnil",
    "tapan",
    "x",
    "y",
    "z",
    "nine"
  ];*/
  namesRand: any;
  namesDoc: any;
  constructor() {}

  ngOnInit() {}
  formTheTeam() {
    if (this.names != "") {
      this.names = this.nameStr.split(",");
      this.namesRand = this.shuffle(this.names);
    }
    this.shuffle(this.namesRand);
  }
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

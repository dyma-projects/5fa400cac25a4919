import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  myColor: string = "red";
  newColor: string;

  constructor() {}

  buttonClicked(): void {
    if (this.myColor === "blue") {
      this.newColor = "blue";
      this.myColor = "red";
    } else {
      this.newColor = "red";
      this.myColor = "blue";
    }
  }

  ngOnInit(): void {
    this.myColor = "blue";
    this.newColor = "red";
  }
}

import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonNote,
  IonLabel,
  IonIcon,
  IonItem,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton,
} from "@ionic/angular/standalone"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonCol,
    IonRow,
    IonGrid,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonNote,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class ContactPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

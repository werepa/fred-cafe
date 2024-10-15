import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from "@ionic/angular/standalone"

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class ProductDetailPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

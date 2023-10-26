import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DrinkService } from "./services/drink.service";
import { ApiService } from "./services/api.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    constructor(
        private apiService: ApiService,
        private drinkService: DrinkService
    ) {}

    ngOnInit(): void {
        
    }
}

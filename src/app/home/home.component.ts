import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Drink } from "../model/drink.interface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    drinks: Array<Drink> = [];
    lang: string = "IT";

    constructor(
        private http: HttpClient,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // una get verso un indirizzo che da una risposta
        const observable = this.http.get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        observable.subscribe((response: any) => {
            console.log(response);
            this.drinks = response.drinks;
        });
    }
}

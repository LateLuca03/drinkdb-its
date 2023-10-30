import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Drink } from "../model/drink.interface";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {
    detailDrink!: Drink;
    error: string = "error";
    ingredients: string = "";
    lingue: string = "";

    constructor(private http: HttpClient) {}

    cambiaLingua(lang: string) {
        if (lang) {
            this.lingue = lang;
        }
    }

    ngOnInit(): void {
        // una get verso un indirizzo che da una risposta
        const observable = this.http.get(
            "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200"
        );
        observable.subscribe((response: any) => {
            console.log(response);
            if (response.drinks === null) {
                this.error = "errore drink non trovato";
            } else {
                this.detailDrink = response.drinks[0];
            }
        });
    }
}

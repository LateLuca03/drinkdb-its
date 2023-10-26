import { HttpClient } from "@angular/common/http";
import { ElementSchemaRegistry } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root",
})
export class DrinkService {
    constructor(private apiService: ApiService) {}

    getElencoDrinks(letter: string) {
        this.apiService.searchByF(letter);
    }
}

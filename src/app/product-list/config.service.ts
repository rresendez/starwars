import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get("https://swapi.co/api/people/");
  }

  deletePet (id: number) {
    const url = "https://crudcrud.com/api/34965b279199489ab9a1902d10f7c10c/pets/"+id.toString(); // DELETE api/heroes/42
    return this.http.delete(url)
    .toPromise();
  }
}

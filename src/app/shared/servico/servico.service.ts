import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Foto } from "src/app/fotografia/foto.model";


@Injectable({
    providedIn: 'root'
})
export class ServicoService{

    httpOptions = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      }
    
    constructor(private http: HttpClient){}

    readonly API = "http://localhost:3000/imagem/";

    getPhoto(){
        return this.http.get<Foto[]>(this.API);
    }

    postFoto(valor:any){
        this.http.post(this.API, JSON.stringify(valor.value), this.httpOptions).subscribe();
    }

    delFoto(id: number){
        return this.http.delete(this.API + id).subscribe();
    }
}
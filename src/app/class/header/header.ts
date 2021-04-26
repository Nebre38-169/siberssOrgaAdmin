import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class Header {

    static getHeader(): HttpHeaders{
        let headers = new HttpHeaders().set('spice',environment.apiKey);
        let token = localStorage.getItem('access_token');
        if(token!=undefined){
            headers = headers.set('token',token);
            headers = headers.set('boquetteId',localStorage.getItem('boquetteId'));
        }
        return headers;
    }
}

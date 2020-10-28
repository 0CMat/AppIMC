import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IImcService } from 'src/interfaces/IIMCService';
import { Imc } from 'src/models/Imc';

@Injectable({
    'providedIn': 'root',
})
    export class ImcService implements IImcService{

        calcularImc(dados: Imc): Observable<Imc> {
            throw new Error('Method not implemented.');
        }
    }
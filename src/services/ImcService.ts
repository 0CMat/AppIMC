import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IImcService } from 'src/interfaces/IIMCService';
import { Imc } from 'src/models/Imc';

@Injectable({
    'providedIn': 'root',
})
    export class ImcService implements IImcService{

        constructor(){}

        calcularImc(imc: Imc): number {
            if(!imc.altura)  throw new Error('Falta de dados.Preencha o campo solicitado');
            if(!imc.peso)  throw new Error('Falta de dados. Preencha o campo solicitado');
            var resultado: number = 10000*(imc.peso/Math.pow(imc.altura,2));
            return parseFloat(resultado.toFixed(2));
            
        }
    }
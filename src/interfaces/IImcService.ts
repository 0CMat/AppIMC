
import { from, Observable } from 'rxjs';
import { Imc } from "src/models/Imc";

export interface IImcService {
    calcularImc (dados: Imc) : Observable<Imc>;
    // Diz que precisa retornar
}
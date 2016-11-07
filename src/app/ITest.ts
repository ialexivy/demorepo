import { ITest } from './ITest';
export interface ITest {
    name: string;
    makeCake();
}


let ob: ITest;


ob= {
    name:'ddd',
    makeCake(){

    }
}
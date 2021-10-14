import{factorial} from './factorial';

//suite de pruebas para factorial

describe('factorial', () =>{
    
    //prueba 1
    it('should return 1 if input is 0', () =>{

        const result = factorial(0);
        expect(result).toBe(1);

    })


    //prueba 2
    it('should return 2 the input if it is 2', () => {
        const result = factorial(2);
        expect(result).toBe(2);

    })

     //prueba 3
     it('should return 24 the input if it is 4', () => {
        const result = factorial(4);
        expect(result).toBe(24);

    })

     //prueba 2
     it('should return 0 the input if >= 10', () => {
        const result = factorial(10);
        expect(result).toBe(-1);

    })


})
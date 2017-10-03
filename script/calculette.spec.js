describe("class Calculette", () => {
    let calc;

    beforeEach(() => {
        calc = new Calculette();
    });

    it("should be an addition", () => {
        let myCalc = calc.calcul(2, 2, "+")
        expect(myCalc).toBe(4);
    });

    it("should be a soustraction", () => {
        let myCalc = calc.calcul(2, 2, "-")
        expect(myCalc).toBe(0);
    });

    it("should be a multiplication", () => {
        let myCalc = calc.calcul(2, 2, "*")
        expect(myCalc).toBe(4);
    });

    it("should be a division", () => {
        let myCalc = calc.calcul(2, 2, "/")
        expect(myCalc).toBe(1);
    });
});
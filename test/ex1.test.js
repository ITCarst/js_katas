define(function (require) {

    var ex = require("/base/katas/ex1.js");

    describe("Fix Timmys Regex", function () {
        
        it("Fixed Tests", function () {
            expect(ex("You're Bad! timmy!")).toEqual("You're awesome! timmy!");
            expect(ex("You're MEAN! timmy!")).toEqual("You're awesome! timmy!");
            expect(ex("You're Soo HorrIbLe and awesome!")).toEqual("You're Soo awesome and awesome!");

            expect(ex("Go on timmy you HoRRiBlE person!")).toEqual("Go on timmy you awesome person!");
            expect(ex("You MeaN and awesome and bad and MEaN!!")).toEqual("You awesome and awesome and awesome and awesome!!");
            expect(ex("You're Soo MEAN and UglY!")).toEqual("You're Soo awesome and awesome!");

            expect(ex("Man timmy you really are MeaN")).toEqual("Man timmy you really are awesome");
            expect(ex("You're Soo UglY and UglY!")).toEqual("You're Soo awesome and awesome!");
            expect(ex("Go on timmy you Badish person!")).toEqual("Go on timmy you awesomeish person!");
            expect(ex("Man timmy you really are HORRIBLE")).toEqual("Man timmy you really are awesome");
            expect(ex("You UglY and MeaN and baD and awesome!!")).toEqual("You awesome and awesome and awesome and awesome!!");
        });
    
    });

});

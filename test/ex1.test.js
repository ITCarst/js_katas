define(function (require) {

    var ex = require("/base/katas/ex1.js");

    describe("Fix Timmys Regex", function () {
        
        it("Fixed Tests", function () {
            expect(ex("You're Bad! timmy!")).toEqual("You're awesome! timmy!");
            expect(ex("You're MEAN! timmy!")).toEqual("You're awesome! timmy!");
        });
    
    });

});

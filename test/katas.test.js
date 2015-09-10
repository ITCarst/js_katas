define(function (require) {

    var main = require("/base/katas/katas.js"),
        fw = main.filterWords,
        filterNumbers = main.filterNumbers; 

    describe("Fix Timmys Regex", function () {
        
        it("Fixed Tests", function () {
            expect(fw("You're Bad! timmy!")).toEqual("You're awesome! timmy!");
            expect(fw("You're MEAN! timmy!")).toEqual("You're awesome! timmy!");
            expect(fw("You're Soo HorrIbLe and awesome!")).toEqual("You're Soo awesome and awesome!");

            expect(fw("Go on timmy you HoRRiBlE person!")).toEqual("Go on timmy you awesome person!");
            expect(fw("You MeaN and awesome and bad and MEaN!!")).toEqual("You awesome and awesome and awesome and awesome!!");
            expect(fw("You're Soo MEAN and UglY!")).toEqual("You're Soo awesome and awesome!");

            expect(fw("Man timmy you really are MeaN")).toEqual("Man timmy you really are awesome");
            expect(fw("You're Soo UglY and UglY!")).toEqual("You're Soo awesome and awesome!");
            expect(fw("Go on timmy you Badish person!")).toEqual("Go on timmy you awesomeish person!");
            expect(fw("Man timmy you really are HORRIBLE")).toEqual("Man timmy you really are awesome");
            expect(fw("You UglY and MeaN and baD and awesome!!")).toEqual("You awesome and awesome and awesome and awesome!!");
        });
    });

    describe("FilterNumber", function () {
        it("should remove all numbers from string", function () {
            expect(filterNumbers("test123")).toEqual("test");
            expect(filterNumbers("a1b2c3")).toEqual("abc");
            expect(filterNumbers("aa1bb2cc3dd")).toEqual("aabbccdd");

            expect(filterNumbers("ace0debf0afdeb")).toEqual("acedebfafdeb");
            expect(filterNumbers("acdbed0a0dc0bfaf")).toEqual("acdbedadcbfaf");
            expect(filterNumbers("feffeefc00fc")).toEqual("feffeefcfc");
            expect(filterNumbers("bf0bd0cddfd0eb")).toEqual("bfbdcddfdeb");
            expect(filterNumbers("0d0eeadeeebbf")).toEqual("deeadeeebbf");

            expect(filterNumbers("e0dccacf0c0fccb")).toEqual("edccacfcfccb");
            expect(filterNumbers("fcfcc0")).toEqual("fcfcc");
            expect(filterNumbers("ec00dd0a0acff")).toEqual("ecddaacff");
        });

    });

    var sumFromString = main.sumFromString;
    describe("Sum Number from String", function () {
        it("should sum up the numbers in the string", function () {
            expect(sumFromString("In 2015, I want to know how much" +
               "does iPhone 6s+ cost?")).toBe(2021);
            expect(sumFromString("1+1=2")).toBe(4);
            expect(sumFromString("e=mc^2")).toBe(2);
            expect(sumFromString("")).toBe(0);
            expect(sumFromString("Hello World")).toBe(0);

        });
    });








});


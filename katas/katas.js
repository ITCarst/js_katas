define(function () {
    //filter words based on regex
    function filterWords (phrase) {
        return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
    }

    //remove the numbers from a string
    var FilterNumbers = function (str) {
        return str.split('').filter(function (c) { 
            return isNaN(parseInt(c)) 
        }).join('');
    }

    //sum the numbers from a string
    function sumFromString(str) {
        var match;
        //in case there is an empty string
        if(!str) return 0;
        match = str.match(/\d+/gi);
        //in case there are no digits in the string
        if(!match) return 0;
        //if there is only one digit push a 0 for reduce
        if (match.length === 1) match.push(0);
        return match.reduce(function (prev, curr) {
            return parseInt(prev) +  parseInt(curr);
        });
    }

    return {
        filterWords: filterWords,
        filterNumbers: FilterNumbers,
        sumFromString: sumFromString
    }
});


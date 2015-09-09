define(function () {

    function filterWords (phrase) {
        //phrase = phrase.toLowerCase(); 


        console.log(phrase.replace(/(bad|mean|ugly|horrible|hideous)/,'awesome'));


        return phrase.replace(/(bad|mean|ugly|horrible|hideous)/,'awesome');

    }

    return filterWords;
});


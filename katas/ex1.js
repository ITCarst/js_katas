define(function () {

    function filterWords (phrase) {
        return phrase.replace(/(bad|mean|ugly|horrible|hideous)/i,'awesome');
    }

    return filterWords;
});


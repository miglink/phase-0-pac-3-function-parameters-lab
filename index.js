function introduction(name){
    const string = `Hi, my name is ${name}.`;
    return string
}

function introductionWithLanguage(name, language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase
}

const result = introductionWithLanguageOptional ("Aki", "Ember.js")

console.log(result);

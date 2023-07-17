
    
function analyzeSentence(sentence){
    // intialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // iterate over each character in the sentence

    for(let i = 0;i < sentence.length; i++){
        const character = sentence[i]

        // increment length counter
        length++;

        // check if the character is a space or a point
        if(character === '' || character === ''){
            // if the character is a space or a PointerEvent,increment word if it's not the last character

            if(i!== sentence.length -1){
                wordCount++;
            }
        }else{
            // if the character is not a space or a PointerEvent,check if it'ss a vowel
            if (isVowel(character)){
                vowelCount++;
            }
        }
    }
    return{
        length:length,
        wordCount:wordCount,
        vowelCount:vowelCount
    };
}
    // helper function to check if a character is a vowel

    function isVowel(character){
        return ['a','e','i','o','u'].includes(character.toLowerCase());
    }
    // Example usage
    const sentence = "Hello, how are you today?";
    const analysis = analyzeSentence(sentence);
    console.log("Length:",analysis.length);
    console.log("Word Count:",analysis.wordCount);
    console.log("Vowel Count:", analysis.vowelCount)
    


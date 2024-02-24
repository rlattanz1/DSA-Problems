var checkIfPangram = function(sentence) {
let alph = new Set();
const sentArr = sentence.split('');
for (i = 0; i < sentArr.length; i++) {
    const char = sentArr[i];
    if (!alph.has(char)) {
        alph.add(char);
    }
}
const res = alph.size===26?true:false;
return res;
};

const inputString = document.getElementById('tev');
const checkPalindrome = document.getElementById('btn-check');
const result = document.getElementById('result');
const clearResults = document.getElementById('input_result');
const multipleStrings = document.getElementById('Multiple-strings');
const checkMultiple = document.getElementById('multiple-btn');
const multipleResults = document.querySelector('.multiple-results');

checkPalindrome.addEventListener('click', () => {
    const input = inputString.value.trim();
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');
    result.textContent = isPalindrome ? 'Yes, it\'s a palindrome😍!' : 'No, it\'s not a palindrome🗿.';
});

clearResults.addEventListener('click', () => {
    result.textContent = '';
    inputString.value = '';
});

checkMultiple.addEventListener('click', () => {
    const inputs = multipleStrings.value.trim().split('\n');
    const results = [];
    inputs.forEach((input) => {
        const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');
        results.push(`${input}: ${isPalindrome ? 'Yes, it\'s a palindrome!' : 'No, it\'s not a palindrome.'}`);
    });
    multipleResults.innerHTML = results.join('<br>');
});

multipleStrings.addEventListener('input', () => {
    multipleResults.innerHTML = '';
});
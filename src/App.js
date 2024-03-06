import React, {useState}  from 'react';

// create a palindrome checker function that takes a string as an argument
//  it pe­rforms palindrome checks by removing non-alphanume­ric characters
//  it has an input and a a button to check if the input is a palindrome
// it returns a message if the input is a palindrome or not


const  PalindromeChecker = () =>{
  const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    // const [isPalindrome, setIsPalindrome] =
    //     useState(false);

        const handleButtonClick = () => {
          const text = inputText
              .trim()
              .toLowerCase()
              .replace(/[^a-zA-Z0-9]/g, '');
          if (text.length === 0) {
              alert('Input cannot be empty');
              return;
          }
          const cleanedText = text.split('')
              .reverse().join('');
          const palindrome = text === cleanedText;
          setResult(
              palindrome ? "Yes. It's a palindrome!" :
                  'Nope. Not a palindrome!'
          );
          // setIsPalindrome(palindrome);
      };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Palindrome Checker</h1>
        <input onChange={(e) => setInputText(e.target.value)} type="text" id="input" placeholder="Enter a word" />
        <button id="check" onClick={handleButtonClick}>Check</button>
        <p id="message">{result}</p>
      </header>
    </div>
  );
}

export default PalindromeChecker;

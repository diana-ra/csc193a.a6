/*
 * encrypt-it.js - Refactored version
 */
(function () {
  "use strict";

  // Runs after the DOM has fully loaded
  window.addEventListener("load", setup);

  /**
   * Sets up event listeners on buttons after DOM is ready.
   */
  function setup() {
    console.log("Window loaded!");

    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");

    encryptButton.addEventListener("click", onEncrypt);
    resetButton.addEventListener("click", onReset);
  }

  /**
   * Handles encryption button click:
   * Gets input text, encrypts it, and displays result.
   */
  function onEncrypt() {
    console.log("Encrypt-It! button clicked");

    const inputField = document.getElementById("input-text");
    const message = inputField.value;
    const encryptedMessage = applyShiftCipher(message);

    const resultParagraph = document.getElementById("result");
    resultParagraph.textContent = encryptedMessage;
  }

  /**
   * Handles reset button click:
   * Clears input and result fields.
   */
  function onReset() {
    console.log("Reset button clicked");

    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Applies a basic shift cipher to input text (a → b, z → a).
   * Non-letter characters are preserved.
   * @param {string} text - Text to encrypt
   * @returns {string} - Encrypted text
   */
  function applyShiftCipher(text) {
    let output = "";
    text = text.toLowerCase();

    for (let char of text) {
      if (char >= 'a' && char <= 'y') {
        output += String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char === 'z') {
        output += 'a';
      } else {
        output += char; // Preserve non-letters
      }
    }

    return output;
  }
})();

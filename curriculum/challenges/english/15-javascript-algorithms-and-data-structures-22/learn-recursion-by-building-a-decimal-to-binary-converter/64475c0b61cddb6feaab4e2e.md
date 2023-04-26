---
id: 64475c0b61cddb6feaab4e2e
title: Step 14
challengeType: 0
dashedName: step-14
---

# --description--

If you open your browser's console and type in the number input, you'll see event objects logged to the browser. If you take a closer look at one of those event objects, you'll see helpful properties like `type` and `target`.

But since you want to perform an action when the `Enter` key is pressed, the most helpful property is `key`, which tells you the string value of the key that was pressed.

Remove the `console.log()` statement from the callback function and add an `if` statement that checks if `e.key` is equal to `"Enter"`. Leave the body of your `if` statement empty for now.

Note: Since the `Enter` and `Return` keys have similar functions, they both have the same string value of `"Enter"`.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Decimal to Binary Converter</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <h1>Decimal to Binary Converter</h1>
    <div class="input-container">
      <input
        value=""
        placeholder="Type in a number"
        type="number"
        name="decimal"
        id="number"
        class="number-input"
      />
      <button class="convert-btn" id="convert">Convert</button>
    </div>

    <h2 id="result"></h2>
    <div id="show-animation"></div>
    <script src="script.js"></script>
  </body>
</html>
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --light-grey: #f5f6f7;
  --dark-blue: #1b1b32;
  --orange: #f1be32;
}

body {
  background-color: var(--dark-blue);
  font-family: "Times New Roman", Times, serif;
  color: var(--light-grey);
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin: 20px 0;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.convert-btn {
  background-color: var(--orange);
  cursor: pointer;
  border: none;
  padding: 4px;
}

.number-input {
  height: 25px;
}

#result {
  width: 200px;
  padding: 15px 0;
  margin: 30px auto 0;
  border: 5px solid var(--orange);
  font-size: 2rem;
  text-align: center;
}

.show-animation {
  width: 30%;
  margin: 250px auto 0;
  padding: 15px 0;
  border: 5px solid var(--orange);
  font-size: 1.2rem;
  text-align: center;
}
```

```js
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert");

const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a number");
    return;
  }

  console.log(numberInput.value);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  --fcc-editable-region--
  console.log(e);
  --fcc-editable-region--
});
```

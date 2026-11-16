# Calculator

An on-screen calculator built with HTML, CSS and vanilla JavaScript — the final project of [The Odin Project Foundations](https://www.theodinproject.com/lessons/foundations-calculator).

**Live demo:** https://kaldrosh-cmd.github.io/calculator/

## Features

- Addition, subtraction, multiplication and division
- Evaluates one pair of numbers at a time: `12 + 7 - 1` shows `19` after `-`, then `18` after `=`
- Continues calculating from the previous result (`1 + 2 =`, then `+ 4 =` gives `7`)
- Typing a digit after `=` starts a new calculation
- Pressing two operators in a row just replaces the operator
- Decimal point with protection against multiple dots (`.5` becomes `0.5`)
- No leading zeros (`007` becomes `7`)
- Backspace and clear (`C`)
- Results rounded to 3 decimal places
- A message instead of a crash when dividing by zero

## How it works

The calculator keeps its state in four variables:

| Variable | Holds |
| --- | --- |
| `firstNumber` | the first number, as text while it is being typed |
| `operator` | the chosen operator, or `null` |
| `secondNumber` | the second number, as text while it is being typed |
| `shouldResetDisplay` | `true` right after `=`, so the next digit starts a new number |

Numbers are kept as strings while typing (so `1` and `2` become `"12"`) and converted with `Number()` only when calculating.

## Built with

- HTML
- CSS (Flexbox)
- JavaScript (DOM manipulation, event listeners)

## What I learned

Building the Odin Calculator taught me how to manage state between clicks, which I solved with flag that is set after pressing =. Testing edge cases also caught a bug where typing 0 and a decimal point produced .. and eventually NaN. Finally, I learned how JavaScript type coercion hides mistakes, since forgetting Number() turned '12' + '7' into string concatenation while subtraction worked fine and masked the bug.
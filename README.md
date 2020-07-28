# multi-page-local-storage
 Using HTML5 Local Storage API to store and restore data across multiple pages.

## push.html

Contains buttons that call the push() function. Each button calls the function with a different colour. 

## pop.html

Uses an interval to attempt to pop an item from local storage. If one exists, it uses the value to add an input element to the page using the addFormItem() function.

## main.js

Provides push(colour), pop() and addFormItem(colour) functions.

push(colour) adds items to local storage. The function is currently using the current epoch time from Date.now() as a key. Note this does not grantee unique key, if the function was called twice in the same millisecond.

pop() returns a colour from local storage if one exists, otherwise it logs a message to the console.

## style.css

Provides some very basic styling.
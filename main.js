function push(colour) {
    // Log the colour that has been pushed.
    console.log(colour);

    // Storage key:value pair in local storage.
    // Using Date.Now() as a basic way to attempt to avoid duplicate keys. This could be improved.
    try {
        localStorage.setItem(Date.now(), colour);
    } catch (err) {
        console.log(err.message);
    }
}

function pop() {
    // Returns the 0th item in local storage. Order is not guaranteed.
    try {
        if (localStorage.length > 0) {
            var key = localStorage.key(0);
            var item = localStorage.getItem(key);
            console.log('Popping: ' + item);
            localStorage.removeItem(key);
            return item;
        } else {
            console.log('Local storage is empty.');
        }
    } catch (err) {
        console.log(err.message);
    }
}

function addFormItem(colour) {
    // Add new input with value of the colour provided.
    try {
        var input = document.createElement("input");
        input.type = "text";
        input.value = colour;
        document.getElementById("colours-form").appendChild(input);
    } catch (err) {
        console.log(err.message);
    }
}
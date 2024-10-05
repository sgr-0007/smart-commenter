// Generated Comments:
// Begin: Define User class
class User {
    // Define the User class constructor that initializes the object with properties: name, age, and an empty shopping cart
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.cart = [];
    }

    // Add item method: this method allows us to add items to the user's shopping cart  
    addItemToCart(item) {
      // Append the item to the cart array
      this.cart.push(item);
      // Print a message to the user stating that the item has been added
      console.log(`${item} has been added to your cart.`);
    }

    // Remove item method: this method allows user to remove an item from the shopping cart
    removeItemFromCart(item) {
      // Get the item's index in the shopping cart array
      const index = this.cart.indexOf(item);
      // If the item is in the cart, remove it
      if (index > -1) {
        this.cart.splice(index, 1);
        // Notify the user that the item has been removed
        console.log(`${item} has been removed from your cart.`);
      } else {
        // If the item doesn't exist in the shopping cart, notify the user
        console.log(`${item} is not in your cart.`);
      }
    }
  }

  // Fetch product data function: this async function fetches a product's details 
  async function fetchProductData(productId) {
    try {
      // Use the Fetch API to retrieve the product details from an API endpoint
      const response = await fetch(`https://api.example.com/products/${productId}`);
      // Parse the Fetch API response into JSON format
      const data = await response.json();
      // Return the parsed product details
      return data;
    } catch (error) {
      // If there's an error fetching the product details, print the error message and re-throw the error
      console.error('Error fetching product data:', error);
      throw error;
    }
  }
  
  // Process purchase function: this async function processes the user's purchase
  async function processUserPurchase(user) {
    // If the user's cart is empty, print a message then stop execution of the function
    if (user.cart.length === 0) {
      console.log('Your cart is empty. Add some items before checking out.');
      return;
    }

    // Print a message to indicate the start of the purchase process
    console.log('Processing purchase for:', user.name);

    // Loop through each item in the user's cart
    for (const item of user.cart) {
      // Fetch the product details of the current item
      const productData = await fetchProductData(item);
      // Print a message indicating that user has purchased this item
      console.log(`Purchased ${productData.name} for $${productData.price}.`);
    }
  
    // After all the items in the cart have been processed, thank the user and reset their cart
    console.log(`Thank you for your purchase, ${user.name}!`);
    user.cart = [];
  }
  
  // Immediately invoke an async function to perform an end-to-end purchase process for a user
  (async () => {
    // Instantiate a new User object
    const john = new User('John Doe', 30);
    // Add some items to the User's cart
    john.addItemToCart('product_123');
    john.addItemToCart('product_456');
    // Process the purchase for the User
    await processUserPurchase(john);
  })();

// End of User class and associated functions


// Generated Comments:
// Begin the User class
class User {
    // Create the User class with a constructor that takes two parameters: the user's name and age, and initializes an empty cart
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.cart = [];
    }

    // Define a method that allows the user to add an item to their cart  
    addItemToCart(item) {
      // Add the item to the cart array
      this.cart.push(item);
      // Display a message to user that the item has been added
      console.log(`${item} has been added to your cart.`);
    }

    // Define a method that allows the user to remove an item from their cart
    removeItemFromCart(item) {
      // Get the location of the item in the user's cart
      const index = this.cart.indexOf(item);
      // Check if item exists in cart, if it does, remove it
      if (index > -1) {
        this.cart.splice(index, 1);
        // Display a message to user that the item has been removed
        console.log(`${item} has been removed from your cart.`);
      } else {
        // If item doesn't exist in cart, display a message to the user
        console.log(`${item} is not in your cart.`);
      }
    }
  }

  // Define an async function to fetch details about a specific product
  async function fetchProductData(productId) {
    try {
      // Use the Fetch API to get the product details
      const response = await fetch(`https://api.example.com/products/${productId}`);
      // Convert the Fetch API response into JSON format
      const data = await response.json();
      // Return the product details
      return data;
    } catch (error) {
      // If there's an error fetching the product details, display the error message and throw the error
      console.error('Error fetching product data:', error);
      throw error;
    }
  }
  
  // Define an async function to process the user's purchase
  async function processUserPurchase(user) {
    // If the user's cart is empty, display a message and return from the function
    if (user.cart.length === 0) {
      console.log('Your cart is empty. Add some items before checking out.');
      return;
    }

    // Display a message that the user's purchase is being processed
    console.log('Processing purchase for:', user.name);

    // Iterate over the items in the user's cart
    for (const item of user.cart) {
      // Fetch the details of the current item
      const productData = await fetchProductData(item);
      // Display a message to user about their purchase
      console.log(`Purchased ${productData.name} for $${productData.price}.`);
    }
  
    // Once all items have been processed, thank the user for their purchase and clear the user's cart
    console.log(`Thank you for your purchase, ${user.name}!`);
    user.cart = [];
  }
  
  // Immediately Invoked Function Expression (IIFE) to create a user, add items to their cart, and process their purchase
  (async () => {
    // Initialize a new user
    const john = new User('John Doe', 30);
    // Add items to the user's cart
    john.addItemToCart('product_123');
    john.addItemToCart('product_456');
    // Process the user's purchase
    await processUserPurchase(john);
  })();

// Generated Comments:
// This JavaScript code creates an object-oriented User class with methods to manage a shopping cart, fetch product details, and process purchases.
// It includes error handling and uses Promises and the Fetch API for asynchronous operations. Immediately Invoked Function Expression (IIFE) is used at the end.

class User {
    // The constructor sets the initial state of the object, taking two arguments: name and age, and initializing an empty 'cart' array
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.cart = [];
    }
  
    // The 'addItemToCart' method adds an item to the 'cart' array and logs a message about the operation
    addItemToCart(item) {
      this.cart.push(item);
      console.log(`${item} has been added to your cart.`);
    }
  
    // The 'removeItemFromCart' method removes an item from the 'cart' array if it is present, and logs a message about the operation
    removeItemFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
        console.log(`${item} has been removed from your cart.`);
      } else {
        console.log(`${item} is not in your cart.`);
      }
    }
  }
  
  // The 'fetchProductData' function is an async function that fetches product data from an API, logs any errors and returns the product data
  async function fetchProductData(productId) {
    try {
      const response = await fetch(`https://api.example.com/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error);
      throw error;
    }
  }
  
  // The 'processUserPurchase' function is an async function that checks if the 'cart' is empty, if not, it fetches product data for each product in the cart, logs a purchase message for each product and clears the cart at the end
  async function processUserPurchase(user) {
    if (user.cart.length === 0) {
      console.log('Your cart is empty. Add some items before checking out.');
      return;
    }
  
    console.log('Processing purchase for:', user.name);
  
    for (const item of user.cart) {
      const productData = await fetchProductData(item);
      console.log(`Purchased ${productData.name} for $${productData.price}.`);
    }
  
    console.log(`Thank you for your purchase, ${user.name}!`);
    user.cart = [];
  }
  
  // An Immediately Invoked Function Expression (IIFE) which creates a new User, adds some items to the 'cart' and carries out the purchase
  (async () => {
    const john = new User('John Doe', 30);
    john.addItemToCart('product_123');
    john.addItemToCart('product_456');
    await processUserPurchase(john);
  })();

// Declaring a User Class.
class User {
    // When a new User object is created, a constructor method is used to initialize the object.
    // name and age arguments are passed into the constructor.
    constructor(name, age) {
      // Assigns passed arguments to the User instance. Additionally, cart property is initialized as empty.
      this.name = name;
      this.age = age;
      this.cart = [];
    }
  
    // Method to add item to the user's cart.
    addItemToCart(item) {
      // Using push method to add the item to the cart array
      this.cart.push(item);
      // Log a message indicating the item has been added to the cart.
      console.log(`${item} has been added to your cart.`);
    }
  
    // Method to remove item from the user's cart.
    removeItemFromCart(item) {
      // Using indexOf method to find index of the item in the cart array.
      const index = this.cart.indexOf(item);
      // If the item exists in the cart array (index > -1), it will be removed
      if (index > -1) {
        this.cart.splice(index, 1);
        // Log a message indicating the item has been removed from the cart.
        console.log(`${item} has been removed from your cart.`);
      } else {
        // If item was not found in the cart, this message is shown.
        console.log(`${item} is not in your cart.`);
      }
    }
  }
  
  // Uses Fetch API to asynchronously get product data from an API endpoint.
  async function fetchProductData(productId) {
    try {
      // Awaits for the fetch to complete and stores the response.
      const response = await fetch(`https://api.example.com/products/${productId}`);
      // Awaits for the response to be converted to json and stores that data.
      const data = await response.json();
      // Returns the data from the API
      return data;
    } catch (error) {
      // If an error occurs in the try block, it's caught and logged in the console.
      console.error('Error fetching product data:', error);
      // And the error is thrown so it can be caught by a calling function.
      throw error;
    }
  }
  
  // Processes user's purchase based on items in their cart.
  async function processUserPurchase(user) {
    // If the user's cart is empty, this message is shown and the function is exited.
    if (user.cart.length === 0) {
      console.log('Your cart is empty. Add some items before checking out.');
      return;
    }
  
    // A message indicating the purchase is being processed is shown.
    console.log('Processing purchase for:', user.name);
  
    // Iterates over each item in the user's cart.
    for (const item of user.cart) {
      // Awaits for the product data of the current item to be fetched from the back-end.
      const productData = await fetchProductData(item);
      // Success! Purchase message with the product name and price is shown.
      console.log(`Purchased ${productData.name} for $${productData.price}.`);
    }
  
    // A thank you message is shown
    console.log(`Thank you for your purchase, ${user.name}!`);
    // The user's cart is cleared after the successful purchase.
    user.cart = [];
  }
  
  // Immediately-Invoked Function Expression (IIFE) that executes right away.
  (async () => {
    // Create a new instance of the User class named John Doe with age 30.
    const john = new User('John Doe', 30);
    // Add item 'product_123' to John's cart.
    john.addItemToCart('product_123');
    // Add item 'product_456' to John's cart.
    john.addItemToCart('product_456');
    // Process the purchase of the items in John's cart.
    await processUserPurchase(john);
  })();

class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.cart = [];
    }
  
    addItemToCart(item) {
      this.cart.push(item);
      console.log(`${item} has been added to your cart.`);
    }
  
    removeItemFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
        console.log(`${item} has been removed from your cart.`);
      } else {
        console.log(`${item} is not in your cart.`);
      }
    }
  }
  
  async function fetchProductData(productId) {
    try {
      const response = await fetch(`https://api.example.com/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error);
      throw error;
    }
  }
  
  async function processUserPurchase(user) {
    if (user.cart.length === 0) {
      console.log('Your cart is empty. Add some items before checking out.');
      return;
    }
  
    console.log('Processing purchase for:', user.name);
  
    for (const item of user.cart) {
      const productData = await fetchProductData(item);
      console.log(`Purchased ${productData.name} for $${productData.price}.`);
    }
  
    console.log(`Thank you for your purchase, ${user.name}!`);
    user.cart = [];
  }
  
  (async () => {
    const john = new User('John Doe', 30);
    john.addItemToCart('product_123');
    john.addItemToCart('product_456');
    await processUserPurchase(john);
  })();
  
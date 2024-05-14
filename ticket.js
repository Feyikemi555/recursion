// TASK 1
function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

const age = parseInt(prompt("Enter your age:"));

if (isNaN(age) || age < 0) {
    console.log("Please enter a valid age.");
} else {
    const price = calculateTicketPrice(age);
    console.log("The price of your movie ticket is $" + price + ".");
}

//TASK 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// TASK 3
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

//TASK 4
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        // For negative exponents
        return 1 / power(base, -exponent);
    }
}

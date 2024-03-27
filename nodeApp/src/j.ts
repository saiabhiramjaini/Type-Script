/*
enums
Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
There are no enums in JS.
*/

/* 
Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, 
down arrow key, left arrow key or right arrow key.

function doSomething(keyPressed) {
	// do something.
}

What should the type of keyPressed be?
Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
Should it be numbers? (1, 2, 3, 4) ?

The best thing to use in such a case is an enum.
*/

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
console.log(Direction.Up)

// The final value stored at runtime is still a number (0, 1, 2, 3). 

// Now how to change these values?

enum Direction1 {
    Up = 1, // these can also be strings like "up", "down", "right", "left"
    Down, // becomes 2 by default
    Left, // becomes 3
    Right // becomes 4
}

function doSomething1(keyPressed: Direction1) {
	// do something.
}

doSomething1(Direction1.Down)
console.log(Direction1.Down);



// A common use case of enums in Express

/*
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
*/
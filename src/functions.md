# Functions

The following section contains the main functions of the library, those being `learn` and `run`.

These main functions are significantly expensive, and, therefore they have the `#[must_use]` attribute guaranteeing that they're used when being called.

Also, these functions are highly reliant on the [Fundamentals][fund], and, therefore, it's highly recommended to read the [Fundamentals][fund] section before using these functions.

However, using these functions is very easy, here's an example:

```rust
use speak::*;

fn main() {
	// Declaring the dataset (It can be serialized / deserialized with the SerDe implementations.)
	let map = map![
		("How are you?", "I'm fine, thanks!"),
		("What's your name?", "My name is Alex"),
		("Do you have a name?", 1usize),
		// ...
	];

	let learnt = learn(&map, None); // I use `None` because I want to use the defualt settings.

	let ran = run("How are you? What's your name? lol", &map, &learnt, None, None, None, None); // I use `run` to get the response.

	// Now we can print the response
	println!("{}", ran);
}
```


[fund]: ./fundamentals.md
[learn]: ./fn/learn.md
# Getting started

Before reading this section, make sure that you have read the [installation][install] section
Getting started with Speak is very easy, you can create your own code, or use the provided examples

<small>

**Protip**: Try to understand what you're doing
</small>

The first thing you should do is to import the `speak` crate, this is the crate that you're going to use to write your code. If you want to customize the features of Speak, you can use the `--features` flag or by changing the import code in your `Cargo.toml` file. Personally I recommend you to try the default experience before changing anything.

```rust
use speak::*; // <- Import the `speak` crate, I like to use wildcards (*).
fn main() {
	/* Magical stuff here */
}
```

Now, we can start by understanding how to use the `speak` crate.

## A little example

Take a look a this example (**Very simplified**)

```rust
use speak::*;
fn main() {
	
	//> Declaring the dataset
	//> (You can also serialize or deserialize your dataset.)
	let mut map = map! [
		("Hi, how are you?", "I'm fine, thanks!~"),
		("What's your name?", "My name is Alex"),
		("Do you have a name", 1),
		//> Here we use a number as a value, so we
		//> reuse the same value for a different key.
	];

	//> Training the algorithm.

	let learnt = learn(&map, None);
	//> I used `None` because I wanted to use
	//> the default values, don't worry about
	//> the length or content of your map, because
	//> everything is checked. (If you're worried,
	//> you can use the easy_panic feature, that
	//> panics the thread if anything is wrong.)

	//> Running the algorithm.

	let response = run("your name?", &map, &learnt, 2, None, None, None);
	//> I use '2' as the second parameter because
	//> I want the memory to be explicitly 2. 

	//> Now you can use the response in any
	//> way you want, it outputs a `String` type.
}
```

## Next steps

If you understanded the code, you can continue with the [`DynMap`][dynmap] section, going deep into the first object you'll need to know.

**Next:** [`DynMap`][dynmap]


[dynmap]: struct/dynmap
[install]: installation
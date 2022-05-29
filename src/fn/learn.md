# Learn

The `learn` function is used to train the algorithm into learning a new dataset, and it's used in the following way:

```rust
use speak::*;

fn main() {
	let map = map![
		("How are you?", "I'm fine, thanks!"),
		("What's your name?", "My name is Alex"),
		("Do you have a name?", 1usize),
		// ...
	];

	let learnt = learn(&map, None);
}
```

The `learn` function takes two arguments, the first one being a [`DynMap`][dynmap] (dataset) and the second one (Optional) being an usize, representing the 

[dynmap]: ../struct/dynmap.md

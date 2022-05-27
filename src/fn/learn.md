# Learn

The `learn` function is used to learn a dataset, it takes a [`DynMap`][dynmap] as input and returns a `Vec<Vec<f32>>` as output.

```rust
use speak::*;

fn main() {
	let map = map![
		"a" => 1.0,
		"b" => 2.0,
		"c" => 3.0,
	];

	let learnt = learn(&map, None);
}
```
As you can see, the `learn(...)` not only takes a `DynMap` as input, but also takes a `Option<usize>` as the second argument, this second argument is the [memory]

# WIP

[dynmap]: ../struct/dynmap.md

# Learn

`learn(...)` (a.k.a `train` in other libraries) is the first main function you'll use in your code, it takes two arguments:

* The Map (`&DynMap`)
* Memory (Optional)

The Map is the dataset that is being fed to the algorithm, it's a key-value pair  meant for storing expected input and ideal output, for more information, visit [DynMap (struct)][dynmap]. While the memory is the internal amount of words in each chunk (A chunk is a group of words, forming a syntagma). See also [memory][mem].

Here's an example of using the `learn` function to train the function:

```rust
use speak::*;

fn main() {

	// Declaring the dataset (It also can be deserded with Serde)
	let map = map![
		("<Expected input>", "<Expected output>"),
		// ···
	]

	// Learn the dataset.
	// I'll use <None> because I want to use the default values.

	let learnt = learn(&map, None)
	
	// ···
}
```

In these main functions ([run][run] and learn) you can use `None` as a value if you don't want to use custom values.

[dynmap]: "./../struct/dynmap.md"
[mem]: "./../fundamentals/memory.md"
[run]: "./run.md"

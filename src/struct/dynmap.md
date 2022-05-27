<!-- {{ use_mermaid }} -->

# DynMap

The `DynMap`, sometimes called simply _"map"_ is the object that you'll use to create your dataset.

To create a map, the recommended way is to use the `map![···]` macro. It takes a list of key-value pairs and returns a `DynMap`.

```rust
use speak::*;

fn main() {
	let mut map = map![
		("key1", "value1"),
		("key2", "value2"),
		("key3", 0_usize), // ← !!
		// ...
	];
}
```

<small>**Protip:** As this is a macro, it can take any number of arguments.</small>

Maybe you've noticed the weird number in the last key-value pair. That's because the `map![···]` macro can do a little bit of magic, not only you can input the macro a string (`&str`) but also a number (`usize`), this number is the index of another key-value pair in the list.

Take this diagram, for example.

<!-- <div class="mermaid"> -->
%%{init: {'theme' : 'dark'} }%%
graph TD
A("Key 1")
B("Key 2")
C("Key 3")
D("Value 1")
E("Value 2")
F["Reference: Value 1"]
B-->E
A-->D
C-->F
F-->D
<!-- </div> -->

<!-- <script>mermaid.initialize({ startOnLoad: true });</script> -->

As you can see, both `Key 1` & `Key 3` are connected to `Value 1`, because `Value 3` is just a reference to `Value 1`.

### The ranking system

The ranking system is the way that `DynMap`(s) can value some key-value pairs over others, that way we can sort them, and only use the most valuable ones (Lefting out the less valuable ones, like nonsense phrases if you're storing user input.)

The way that the ranking system works is by generating a random number, if the random number is higher than the ranking of the key-value pair, then the key-value pair is ignored, **This has some exceptions:**

This ranking system is only used when surpased the `RANGE` variable, set in the [`run`][run] function, then, the ranking system will take place accounting since the last index in range.

Take this diagram (Not fancy because of some errors that `Mermaid.js` can't handle):

```text
+---------+       +----------------------+
| Index 0 | +---> | In range: Guaranteed |
+---------+       +----------------------+

+---------+       +----------------------+
| Index 1 | +---> | In range: Guaranteed |
+---------+       +----------------------+

+---------+       +----------------------+
| Index 2 | +---> | In range: Guaranteed |
+---------+       +----------------------+

+---------+       +----------------------+
| Index 3 | +---> | In range: Guaranteed |
+---------+       +----------------------+

+---------+       +---+---+
| Index 4 | +---> | R > 1 | +---> Analyzed
+---------+       +---+---+

+---------+       +---+---+
| Index 5 | +---> | R > 2 | +---> Analyzed
+---------+       +---+---+

+---------+       +---+---+
| Index 6 | +---> | R < 3 | +---> Not
+---------+       +---+---+

+---------+       +---+---+
| Index 7 | +---> | R > 4 | +---> Analyzed
+---------+       +---+---+

+---------+       +---+---+
| Index 8 | +---> | R > 5 | +---> Analyzed
+---------+       +---+---+

+---------+       +---+---+
| Index 9 | +---> | R < 6 | +---> Not
+---------+       +---+---+

+---------+       +---+---+
| Index a | +---> | R > 7 | +---> Analyzed
+---------+       +---+---+

+---------+       +---+---+
| Index b | +---> | R < 8 | +---> Not
+---------+       +---+---+
```

As you can see, the ranking system is simply, yet powerful, because with a simple if-else statement it can create a way to sort the key-value pairs, and only take into account the most important ones. It creates a distribution.

### The DynMap methods

The `DynMap` struct has a lot of methods, a lot of them being just inline wrappers of `Vec` methods (like `push`), but some of them are more interesting.

#### Encouraging

Encouraging a specific key-value pair is done by using the `encourage` method.

```rust
use speak::*;

fn main() {
	let mut map = map![
		("key1", "value1"),
		("key2", "value2"),
		("key3", 0_usize), // ← !!
		// ...
	];

	map.encourage(1, 1);
}
```

The `encourage` takes two arguments, the first is the index of the key-value pair, and the second is the amount of points to give to the key-value pair. It moves the index up in the ranking system, so the key-value pair will be more valuable.

If the *"how much?"* argument (the second) is more than the current index, it will move the index to the first place.

<small>**Protip:**You can use `encourage_by_str` to search the key that you're giving before encouraging, if you want to encourage a value, use `encourage` with the `search_value` function (That function will return the index of the value.)</small>

Note that [`DynMap` documentation][dynmap_doc] include a list of all the methods that `DynMap` has.

#### Discouraging

Discouraging is very similar to the `encourage` method, but it moves the index down in the ranking system, so the key-value pair will be less valuable, for everything else, it's the same, so I won't repeat it.

[run]: ../fn/run.md
[dynmap_doc]: https://docs.rs/speak/latest/speak/struct.DynMap.html
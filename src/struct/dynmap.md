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

### The DynMap methods

The `DynMap` struct has a lot of methods, a lot of them being just inline wrappers of `Vec` methods.

**Currently working on this**
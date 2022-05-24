# Installation

Installing Speak is very simple, if you know how to use any Rust Crate, you know how to install Speak!

<small>

**Protip:** We cannot maintain this book totally up to date, remember to check the latest version of the crate before copy + pasting the snippets.

</small>

## Easy Way

You can install Speak by writing this in your `Cargo.toml` file:

```toml
[dependencies]
speak = "0.1.10"
```


One of the main philosophies of the Speak project is the customizability, that's why we have a lot of options to customize not only the way that your code behaves, but also the way that is compiled.

### Features

The way to configure the features of Speak without having to write a lot of code is by using the `--features` flag (Or by customizing the import in your `Cargo.toml`).

This is the recommended way to configure the features of Speak:

```toml
[dependencies]
speak = { version = "0.1.10", features = [···] } # Use the features that you want.
```

**The available features are featured in the [main documentation of the crate][maindoc].**

## Hard Way

If you really want the beta experience, you can install Speak using the **git** method.

```toml
[dependencies]
speak = { git = "https://github.com/speakml/speak.git", branch = "current" }
```

Using this way isn't recommended (it may have bugs and undocumented code), but it's possible.

## Getting Started

At this point, you should have installed Speak, for any errors, you can open an issue on the [Github repository][repo].

**Next: [Getting Started](getting-started.html)**

[repo]: https://github.com/speakml/speak
[maindoc]: https://docs.rs/speak/latest/speak/

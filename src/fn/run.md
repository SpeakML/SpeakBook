# run

`run` is the main function you'll use in your code, it takes **7** arguments (4 Being optional):

 * Input (`&str`)
 * A Map (`&DynMap`)
 * Learnt/ed values (`&Vec<Vec<f32>>`)
 * A Memory (`Option<usize>`)
 * A Threshold (`Option<f32>`)
 * A Max Output Length (`Option<usize>`)
 * A Range (`Option<usize>`)

And it outputs a `String`, which is the output of the chatbot.
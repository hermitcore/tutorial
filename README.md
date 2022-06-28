# RustyHermit Tutorial

This repository contains a RustyHermit tutorial and a small web server to make the slides available.

Please read the README of [RustyHermit](https://github.com/hermitcore/rusty-hermit-rs) for more information about RustyHermit.


## Requirements

* [`rustup`](https://www.rust-lang.org/tools/install)
* [NASM](https://nasm.us/) (only for x86_64)
* [QEMU](https://www.qemu.org/) for running the web server
* [Bundler](https://bundler.io) to build the slides
* The build managment system `make`


## Usage

### Build slides

```
$ cd slides
$ make
$ cd ..
```

### Build bootloader

```
$ cd loader
$ cargo xtask build --arch x86_64 --release
$ cd ..
```

### Build RustyHermit web server

``` 
$ cargo build \
    -Zbuild-std=core,alloc,std,panic_abort \
    -Zbuild-std-features=compiler-builtins-mem \
    --target x86_64-unknown-hermit \
    --release
```


### Run web server

```
$ qemu-system-x86_64 \
    -cpu qemu64,apic,fsgsbase,fxsr,rdrand,rdtscp,xsave,xsaveopt \
    -smp 1 -m 512M \
    -device isa-debug-exit,iobase=0xf4,iosize=0x04 \
    -display none -serial stdio \
    -kernel loader/target/x86_64/release/rusty-loader \
    -initrd target/x86_64-unknown-hermit/release/hello_world
```

### Read the tutorial

Open `http://127.0.0.1:9975/` with your browser and read the tutorial.

## License

Text and pictures are licensed by http://creativecommons.org/licenses/by-nc-sa/3.0/de/[Creative Commons BY-NC-SA 3.0 DE]

Source code licensed under either of

* Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.
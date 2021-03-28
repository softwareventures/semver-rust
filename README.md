# semver-rust

Alternative implementation of [Semantic Versioning 2.0.0](https://semver.org/), compatible with the crate [semver](https://github.com/steveklabnik/semver) as used by Cargo and other Rust projects.


## Why

This library is useful when building JavaScript programs that integrate with Rust, or with Cargo, its standard dependency management system.

Like npm, Cargo uses Semantic Versioning 2.0.0 to specify dependency versions. However, Cargo uses a different and subtly incompatible format to specify version ranges.

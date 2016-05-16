# Text Mask

[![Build Status](https://travis-ci.org/msafi/text-mask.svg?branch=master)](https://travis-ci.org/msafi/text-mask)

Text Mask let's you turn a plain `<input />`, into one that conforms
any user input, as they type, to a given mask pattern. For example:

With mask `(111) 111-1111` and user input `5845739`, the output would be `(584) 573-9___`

## Demo

To see Text Mask in action, [checkout the website](https://msafi.github.io/text-mask/).

## Features

### Guided mode

Guided mode lets the user type while displaying placeholder characters and the mask itself

![Guided mode](assets/guidedMode.gif)

### Unguided mode

Unguided mode naturally fills the mask as the user types

![Unguided mode](assets/unguidedMode.gif)

### Masking characters

Character | Description
--- | ---
`1` | Any number
`A` | Any letter
`?` | Any number or letter
`U` | Any letter (will be transformed to uppercase)
`L` | Any letter (will be transformed to lowercase)

### Expected to work with...

IE9+, Android, Samsung Internet, Windows Phone, iOS, Opera, Firefox, Safari, and Chrome

## Installation and usage

* [React](https://msafi.github.io/text-mask/#/react)
* [Angular 2](https://msafi.github.io/text-mask/#/angular2)
* [Vanilla JS](https://msafi.github.io/text-mask/#/vanilla)

## Support

For support or questions, please
[file an issue](https://github.com/msafi/text-mask/issues).

## License

Public domain - [CC0 1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)

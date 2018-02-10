# scatter-swap-js

JavaScript implementation of Nathan and David Amick's [Scatter Swap](https://github.com/namick/scatter_swap)

## Usage

### Hashing

```
> new ScatterSwap(1).hash();
'4517239960'
> new ScatterSwap(2).hash();
'7023641925'
> new ScatterSwap(3).hash();
'2057964173'
```

### Reverse Hashing

```
> new ScatterSwap(4517239960).reverseHash();
'0000000001'
> new ScatterSwap(7023641925).reverseHash();
'0000000002'
> new ScatterSwap(2057964173).reverseHash();
'0000000003'
```

### Spin

```
> new ScatterSwap(1, 1234).hash();
'8169752143'
> new ScatterSwap(8169752143, 1234).reverseHash();
'0000000001'
```

### Digit

You can specify length of digits within 10.

```
// 4 digits
> new ScatterSwap(1, 1234, 4).hash();
'3741'
> new ScatterSwap(3741, 1234, 4).reverseHash();
'0001'
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

# License

MIT

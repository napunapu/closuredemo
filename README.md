# closuredemo
A very minimal JS code for teaching about closures

## Software needed

Node.js from http://nodejs.org/ or installed by your favourite package manager.

## Usage

```bash
node server.js
```

Fetch the file with a browser: `http://localhost:3000/demo.html`

## Teaching

File: `demo.html`

The point is to show how the `req` variable is usable even if it is executed only after the network request returns.

To stress the point it may be handy to make the server code slower with e.g. `setTimeout` function. (Which incidentally can teach more about closures.)

Another demonstration is to make the `req` object `null` after the `req.send(null)` function call.
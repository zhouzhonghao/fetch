# @r-ui/fetch

Fetch url contents.

## Install

    npm install @r-ui/fetch

## Fetch from URL

`fetch(options)`

Where

  * **options** is an options object

Example

    var fetch = require("fetch");

    fetch({
        url: "http://localhost/"
    });


## Options

Possible option values

 * **headers** optional header fields, in the form of `{'Header-Field':'value'}`
 * **method** defaults to GET
 * **url** defaults to an empty string
 * **data** is an optional data object

## Headers

Request headers can be set with `options.headers`

    options = {
        headers:{
            "X-My-Header": "This is a custom header field"
        }
    }

## User-Agent
User-Agent value can be set with `options.headers['User-Agent']` value.

    options = {
        headers: {
            "User-Agent": "MyUseragent/1.0"
        }
    }

## License

MIT

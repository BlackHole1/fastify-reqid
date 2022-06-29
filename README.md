# fastify-reqid

![CI](https://github.com/BlackHole1/fastify-reqid/workflows/CI/badge.svg)
[![NPM version](https://img.shields.io/npm/v/fastify-reqid.svg?style=flat)](https://www.npmjs.com/package/fastify-reqid)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)
[![NPM size](https://img.shields.io/bundlephobia/min/fastify-reqid)](https://www.npmjs.com/package/fastify-reqid)

A plugin for Fastify that adds support for `request-id`.

Supports Fastify versions 4.x.

> Support TypeScript

## Install

```shell
# npm
npm i fastify-reqid

# pnpm
pnpm add fastify-reqid

# yarn
yarn add fastify-reqid
```

## Usage

```JavaScript
const fastify = require('fastify')()

fastify.register(require('fastify-reqid'), {
  // put your options here
})

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000)
```

You can use it as is without passing any option or you can configure it as explained below.

### Options

* `generateHash`: Generate x-request-id hash. For example:

```javascript
generateHash: () => {
  return uuidv4();
}
```

* `findRequestHeader`: Find request id in header. If found, the hash in the request header is used first.

* `addResponseHeader`: Add request id to header. If it is undefined, it will not be added.

## License

Licensed under [MIT](./LICENSE).

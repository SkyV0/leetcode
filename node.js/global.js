const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

most common hello world above
To run this snippet, save it as a server.js file and run node server.js in your terminal.-->

This code first includes the Node.js http module.

Node.js has a fantastic standard library, including first-class support for networking.

The createServer() method of http creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name.
 When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object)
 and a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

In this case with:

JS
copy
res.statusCode = 200;
we set the statusCode property to 200, to indicate a successful response.

We set the Content-Type header:

JS
copy
res.setHeader('Content-Type', 'text/plain');
and we close the response, adding the content as an argument to end():

JS
copy
res.end('Hello World\n');

Node.js Frameworks and Tools
Node.js is a low-level platform. In order to make things easy and exciting for developers, thousands of libraries were built upon Node.js by the community.

Many of those established over time as popular options. Here is a non-comprehensive list of the ones worth learning:

AdonisJS: A TypeScript-based fully featured framework highly focused on developer ergonomics, stability, and confidence. Adonis is one of the fastest Node.js web frameworks.
Egg.js: A framework to build better enterprise frameworks and apps with Node.js & Koa.
Express: It provides one of the most simple yet powerful ways to create a web server. Its minimalist approach, unopinionated, focused on the core features of a server, is key to its success.
Fastify: A web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. Fastify is one of the fastest Node.js web frameworks.
FeatherJS: Feathers is a lightweight web-framework for creating real-time applications and REST APIs using JavaScript or TypeScript. Build prototypes in minutes and production-ready apps in days.
Gatsby: A React-based, GraphQL powered, static site generator with a very rich ecosystem of plugins and starters.
hapi: A rich framework for building applications and services that enables developers to focus on writing reusable application logic instead of spending time building infrastructure.
koa: It is built by the same team behind Express, aims to be even simpler and smaller, building on top of years of knowledge. The new project born out of the need to create incompatible changes without disrupting the existing community.
Loopback.io: Makes it easy to build modern applications that require complex integrations.
Meteor: An incredibly powerful full-stack framework, powering you with an isomorphic approach to building apps with JavaScript, sharing code on the client and the server. Once an off-the-shelf tool that provided everything, now integrates with frontend libs React, Vue, and Angular. Can be used to create mobile apps as well.
Micro: It provides a very lightweight server to create asynchronous HTTP microservices.
NestJS: A TypeScript based progressive Node.js framework for building enterprise-grade efficient, reliable and scalable server-side applications.
Next.js: React framework that gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
Nx: A toolkit for full-stack monorepo development using NestJS, Express, React, Angular, and more! Nx helps scale your development from one team building one application to many teams collaborating on multiple applications!
Remix: Remix is a fullstack web framework for building excellent user experiences for the web. It comes out of the box with everything you need to build modern web applications (both frontend and backend) and deploy them to any JavaScript-based runtime environment (including Node.js).
Sapper: Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. Offers SSR and more!
Socket.io: A real-time communication engine to build network applications.
Strapi: Strapi is a flexible, open-source Headless CMS that gives developers the freedom to choose their favorite tools and frameworks while also allowing editors to easily manage and distribute their content. By making the admin panel and API extensible through a plugin system, Strapi enables the world's largest companies to accelerate content delivery while building beautiful digital experiences.

----------------------------------------
Differences Between Node.Js And The Browser
Both the browser and Node.js use JavaScript as their programming language.

Building apps that run in the browser is a completely different thing than building a Node.js application.

Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.

From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.

You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language, and by using the same language to perform all your work on the web - both on the client and on the server, you're in a unique position of advantage.

What changes is the ecosystem.

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.

And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.

Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient.

This means that you can write all the modern ES6-7-8-9 JavaScript that your Node.js version supports.

Since JavaScript moves so fast, but browsers can be a bit slow to upgrade, sometimes on the web you are stuck with using older JavaScript / ECMAScript releases.

You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.

Another difference is that Node.js supports both the CommonJS and ES module systems (since Node.js v12), while in the browser we are starting to see the ES Modules standard being implemented.

In practice, this means that you can use both require() and import in Node.js, while you are limited to import in the browser.
--------------------------------------
This environment variable is a convention that is widely used in external libraries as well.

Setting the environment to production generally ensures that

logging is kept to a minimum, essential level
more caching levels take place to optimize performance
For example Pug, the templating library used by Express, compiles in debug mode if NODE_ENV is not set to production. Express views are compiled in every request in development mode, while in production they are cached. There are many more examples.
-------------------
What's the difference between module.exports and exports?

The first exposes the object it points to. The latter exposes the properties of the object it points to.
------------------------

// car.js
exports.car = {
    brand: 'Ford',
    model: 'Fiesta',
  };
  
  module.exports = {
    brand: 'Tesla',
    model: 'Model S',
  };
  
  // app.js
  const tesla = require('./car');
  const ford = require('./car').car;
  
  console.log(tesla, ford);
  This will print { brand: 'Tesla', model: 'Model S' } undefined since the require function's 
  return value has been updated to the object that module.exports points to, so the property that exports added can't be accessed.

You can use conditional statements to execute code in different environments:

JS
copy
if (process.env.NODE_ENV === 'development') {
  // ...
}
if (process.env.NODE_ENV === 'production') {
  // ...
}
if (['production', 'staging'].includes(process.env.NODE_ENV)) {
  // ...
}
---------------------------------------------
As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. 
In the following "hello world" example, many connections can be handled concurrently. 
Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
This is in contrast to today's more common concurrency model, in which OS threads are employed. 
Thread-based networking is relatively inefficient and very difficult to use. Furthermore, 
users of Node.js are free from worries of dead-locking the process, since there are no locks. 
Almost no function in Node.js directly performs I/O, so the process never blocks except 
when the I/O is performed using synchronous methods of Node.js standard library.
 Because nothing blocks, scalable systems are very reasonable to develop in Node.js.

If some of this language is unfamiliar, there is a full article on Blocking vs. Non-Blocking.

Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. 
Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems,
 there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, 
 and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. 
 Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. 
 This behavior is like browser JavaScript — the event loop is hidden from the user.

HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. 
This makes Node.js well suited for the foundation of a web library or framework.

Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment.
 Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with.
  Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores.

  Libraries
V8
The V8 library provides Node.js with a JavaScript engine, which Node.js controls via the V8 C++ API. V8 is maintained by Google, for use in Chrome.

Documentation
libuv
Another important dependency is libuv, a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. 
It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming.
 It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.

Documentation
llhttp
HTTP parsing is handled by a lightweight TypeScript and C library called llhttp. 
It is designed to not make any syscalls or allocations, so it has a very small per-request memory footprint.

Documentation
c-ares
For some asynchronous DNS requests, Node.js uses a C library called c-ares.
 It is exposed through the DNS module in JavaScript as the resolve() family of functions. 
 The lookup() function, which is what the rest of core uses, makes use of threaded getaddrinfo(3) calls in libuv. 
 The reason for this is that c-ares supports /etc/hosts, /etc/resolv.conf and /etc/svc.conf, but not things like mDNS.

Documentation
OpenSSL
OpenSSL is used extensively in both the tls and crypto modules.
 It provides battle-tested implementations of many cryptographic functions that the modern web relies on for security.

Documentation
zlib
For fast compression and decompression, Node.js relies on the industry-standard zlib library, 
also known for its use in gzip and libpng. Node.js uses zlib to create sync, async and streaming compression and decompression interfaces.

Documentation
Tools
npm
Node.js is all about modularity, and with that comes the need for a quality package manager; for this purpose, npm was made.
 With npm comes the largest selection of community-created packages of any programming ecosystem, which makes building Node.js apps quick and easy.

Documentation
gyp
The build system is handled by gyp, a python-based project generator copied from V8.
 It can generate project files for use with build systems across many platforms. 
 Node.js requires a build system because large parts of it — and its dependencies — are written in languages that require compilation.

Documentation
gtest
Native code can be tested using gtest, which is taken from Chromium. It allows testing C/C++ without needing an existing node executable to bootstrap from.

Documentation
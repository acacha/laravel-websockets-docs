(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"custom-websocket-handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-websocket-handlers","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom WebSocket Handlers")]),t._v(" "),a("p",[t._v('While this package\'s main purpose is to make the usage of either the Pusher Javascript client or Laravel Echo as easy as possible, you are not limited to the Pusher protocol at all.\nThere might be situations where all you need is a simple, bare-bone, websocket server where you want to have full control over the incoming payload and what you want to do with it - without having "channels" in the way.')]),t._v(" "),a("p",[t._v("You can easily create your own custom WebSocketHandler class. All you need to do is implement Ratchets "),a("code",[t._v("Ratchet\\WebSocket\\MessageComponentInterface")]),t._v(".")]),t._v(" "),a("p",[t._v("Once implemented, you will have a class that looks something like this:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("App")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Ratchet"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConnectionInterface")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Ratchet"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RFC6455"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Messaging"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageInterface")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Ratchet"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WebSocket"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageComponentInterface")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyCustomWebSocketHandler")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MessageComponentInterface")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onOpen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),a("span",{attrs:{class:"token variable"}},[t._v("$connection")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// TODO: Implement onOpen() method.")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onClose")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),a("span",{attrs:{class:"token variable"}},[t._v("$connection")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// TODO: Implement onClose() method.")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),a("span",{attrs:{class:"token variable"}},[t._v("$connection")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("Exception")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$e")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// TODO: Implement onError() method.")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onMessage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),a("span",{attrs:{class:"token variable"}},[t._v("$connection")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MessageInterface "),a("span",{attrs:{class:"token variable"}},[t._v("$msg")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// TODO: Implement onMessage() method.")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In the class itself you have full control over all the lifecycle events of your WebSocket connections and can intercept the incoming messages and react to them.")]),t._v(" "),a("p",[t._v("The only part missing is, that you will need to tell our WebSocket server to load this handler at a specific route endpoint. This can be achieved using the "),a("code",[t._v("WebSocketsRouter")]),t._v(" facade.")]),t._v(" "),a("p",[t._v("This class takes care of registering the routes with the actual webSocket server. You can use the "),a("code",[t._v("websocket")]),t._v(" method to define a custom WebSocket endpoint. The method needs two arguments: the path where the WebSocket handled should be available and the fully qualified classname of the WebSocket handler class.")]),t._v(" "),a("p",[t._v("This could, for example, be done inside your "),a("code",[t._v("routes/web.php")]),t._v(" file.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("WebSocketsRouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("websocket")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/my-websocket'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("App"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MyCustomWebSocketHandler")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Once you've added the custom WebSocket route, be sure to restart our WebSockets server for the changes to take place.")])])}],!1,null,null,null);e.options.__file="custom-websocket-handlers.md";s.default=e.exports}}]);
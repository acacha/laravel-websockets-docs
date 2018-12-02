(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{171:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"deploying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying")]),e._v(" "),a("p",[e._v("When your application is ready to get deployed, here are some tips to improve your WebSocket Server.")]),e._v(" "),a("h3",{attrs:{id:"open-connection-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-connection-limit","aria-hidden":"true"}},[e._v("#")]),e._v(" Open Connection Limit")]),e._v(" "),a("p",[e._v('On Unix systems, every user that connects to your WebSocket server is represented as a file somewhere on the system.\nAs a security measurement of every Unix based OS, the number of "file descriptors" an application may have open at a time is limited - most of the time to a default value of 1024 - which would result in a maximum number of 1024 concurrent users on your WebSocket server.')]),e._v(" "),a("p",[e._v('In addition to the OS restrictions, this package makes use of an event loop called "stream_select", which has a hard limit of 1024.')]),e._v(" "),a("h4",{attrs:{id:"increasing-the-maximum-number-of-file-descriptors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-maximum-number-of-file-descriptors","aria-hidden":"true"}},[e._v("#")]),e._v(" Increasing the maximum number of file descriptors")]),e._v(" "),a("p",[e._v('The operating system limit of open "file descriptors" can be increased using the '),a("code",[e._v("ulimit")]),e._v(" command. The "),a("code",[e._v("-n")]),e._v(" option modifies the number of open file descriptors.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("ulimit")]),e._v(" -n 10000\n")])])]),a("p",[e._v("The "),a("code",[e._v("ulimit")]),e._v(" command only "),a("strong",[e._v("temporarily")]),e._v(" increases the maximum number of open file descriptors. To permanently modify this value, you can edit it in your operating system "),a("code",[e._v("limits.conf")]),e._v(" file.")]),e._v(" "),a("p",[e._v("You are best to do so by creating a file in the "),a("code",[e._v("limits.d")]),e._v(" directory. This will work for both Red Hat & Ubuntu derivatives.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{attrs:{class:"token function"}},[e._v("cat")]),e._v(" /etc/security/limits.d/laravel-echo.conf\nlaravel-echo\t\tsoft\t\tnofile\t\t10000\n")])])]),a("p",[e._v("The above example assumes you will run your echo server as the "),a("code",[e._v("laravel-echo")]),e._v(" user, you are free to change that to your liking.")]),e._v(" "),a("h4",{attrs:{id:"changing-the-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-event-loop","aria-hidden":"true"}},[e._v("#")]),e._v(" Changing the event loop")]),e._v(" "),a("p",[e._v("To make use of a different event loop, that does not have a hard limit of 1024 concurrent connections, you can either install the "),a("code",[e._v("ev")]),e._v(" or "),a("code",[e._v("event")]),e._v(" PECL extension using:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pecl "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" ev\n"),a("span",{attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),a("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pecl "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" event\n")])])])])}],!1,null,null,null);n.options.__file="deploying.md";t.default=n.exports}}]);
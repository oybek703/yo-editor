#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var serve_1 = require("./commands/serve");
commander_1.program.addCommand(serve_1.serveCommand);
commander_1.program.parse(process.argv);

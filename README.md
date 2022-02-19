Run with: 

	meteor npm i
	meteor --production

I'm not sure if it makes a difference, but I'm running in Windows 10.0.19042 Build 19042 with WSL1 / Ubuntu 20.04.3 LTS and have the repro cloned on a directory located at ``/c/mnt/Users/MyUserName/foo``. I have an issue connecting to local mongo (running as a Windows service -- this is a known WSL issue), and so I'm connecting to Atlas via ``MONGO_URL=... meteor --production``; I'm guessing this will not matter for a reproduction, however.


Error output from running 'meteor --production' with hell.js in its default state:

=> Errors prevented startup:

   While minifying app code:

   /home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/error.js:148:12:
   Identifier 's' has already been declared. (1:92)
   at Object._raise
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/error.js:148:12)
   at Object.raiseWithData
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/error.js:142:39)
   at Object.raise
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/error.js:91:36)
   at FlowScopeHandler.checkRedeclarationInScope
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/util/scope.js:153:6)
   at FlowScopeHandler.declareName
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/util/scope.js:113:7)
   at FlowScopeHandler.declareName
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/scope.js:32:4)
   at Object.checkLVal
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/lval.js:532:10)
   at Object.checkLVal
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:2347:8)
   at Object.parseVarId
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1247:4)
   at Object.parseVarId
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:2746:7)
   at Object.parseVar
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1201:7)
   at Object.parseVarStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:892:10)
   at Object.parseStatementContent
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:391:9)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:332:4)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1831:7)
   at Object.parseBlockOrModuleBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1067:7)
   at Object.parseBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1050:4)
   at Object.parseBlock
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1013:5)
   at Object.parseStatementContent
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:398:9)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:332:4)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1831:7)
   at Object.parseBlockOrModuleBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1067:7)
   at Object.parseBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1050:4)
   at Object.parseBlock
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1013:5)
   at Object.parseFunctionBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2407:26)
   at Object.parseFunctionBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1791:6)
   at Object.parseFunctionBodyAndFinish
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2376:10)
   at Object.parseFunctionBodyAndFinish
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1814:6)
   at
   /home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1286:5
   at Object.withSmartMixTopicForbiddingContext
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2881:6)
   at Object.parseFunction
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1288:7)
   at Object.parseFunctionStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:747:4)
   at Object.parseStatementContent
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:368:9)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:332:4)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1831:7)
   at Object.parseBlockOrModuleBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1067:7)
   at Object.parseBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1050:4)
   at Object.parseBlock
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1013:5)
   at Object.parseFunctionBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2407:26)
   at Object.parseFunctionBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1791:6)
   at Object.parseFunctionBodyAndFinish
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2376:10)
   at Object.parseFunctionBodyAndFinish
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1814:6)
   at
   /home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1286:5
   at Object.withSmartMixTopicForbiddingContext
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2881:6)
   at Object.parseFunction
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1288:7)
   at Object.parseFunctionOrFunctionSent
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:1555:4)
   at Object.parseExprAtom
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:1146:9)
   at Object.parseExprAtom
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/jsx/index.js:568:8)
   at Object.parseExprSubscripts
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:670:5)
   at Object.parseUpdate
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:651:14)
   at Object.parseMaybeUnary
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:621:5)
   at Object.parseMaybeUnaryOrPrivate
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:375:4)
   at Object.parseExprOps
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:384:5)
   at Object.parseMaybeConditional
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:342:5)
   at Object.parseMaybeAssign
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:302:5)
   at Object.parseMaybeAssign
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:2910:6)
   at
   /home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:258:4
   at Object.allowInAnd
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2907:4)
   at Object.parseMaybeAssignAllowIn
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:258:4)
   at Object.parseObjectProperty
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2142:7)
   at Object.parseObjPropValue
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2207:16)
   at Object.parseObjPropValue
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:2508:7)
   at Object.parsePropertyDefinition
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2049:5)
   at Object.parseObjectLike
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:1924:14)
   at Object.parseExprAtom
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:1144:8)
   at Object.parseExprAtom
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/jsx/index.js:568:8)
   at Object.parseExprSubscripts
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:670:5)
   at Object.parseUpdate
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:651:14)
   at Object.parseMaybeUnary
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:621:5)
   at Object.parseMaybeUnaryOrPrivate
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:375:4)
   at Object.parseExprOps
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:384:5)
   at Object.parseMaybeConditional
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:342:5)
   at Object.parseMaybeAssign
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:302:5)
   at Object.parseMaybeAssign
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:2910:6)
   at
   /home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:258:4
   at Object.allowInAnd
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2907:4)
   at Object.parseMaybeAssignAllowIn
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:258:4)
   at Object.parseExprListItem
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2551:6)
   at Object.parseCallExpressionArguments
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:999:6)
   at Object.parseCoverCallAndAsyncArrowHead
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:856:6)
   at Object.parseSubscript
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:742:12)
   at Object.parseSubscript
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:3103:6)
   at Object.parseSubscripts
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:694:13)
   at Object.parseSubscripts
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:3047:6)
   at Object.parseExprSubscripts
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:677:4)
   at Object.parseUpdate
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:651:14)
   at Object.parseMaybeUnary
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:621:5)
   at Object.parseMaybeUnaryOrPrivate
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:375:4)
   at Object.parseExprOps
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:384:5)
   at Object.parseMaybeConditional
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:342:5)
   at Object.parseMaybeAssign
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:302:5)
   at Object.parseMaybeAssign
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:2910:6)
   at
   /home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:258:4
   at Object.allowInAnd
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:2900:7)
   at Object.parseMaybeAssignAllowIn
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/expression.js:258:4)
   at Object.parseVar
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1206:14)
   at Object.parseVarStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:892:10)
   at Object.parseStatementContent
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:391:9)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:332:4)
   at Object.parseStatement
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:1831:7)
   at Object.parseBlockOrModuleBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1067:7)
   at Object.parseBlockBody
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:1050:4)
   at Object.parseProgram
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:214:5)
   at Object.parseTopLevel
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/statement.js:198:21)
   at Object.parseTopLevel
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/plugins/flow/index.js:3162:7)
   at Object.parse
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/parser/index.js:42:10)
   at Object.parse
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@babel/parser/src/index.js:59:4)
   at Object.parse
   (/home/.../.meteor/packages/standard-minifier-js/.2.8.0.hahvcl.u8aoe++os+web.browser+web.browser.legacy+web.cordova/plugin.minifyStdJS.os/npm/node_modules/meteor/babel-compiler/node_modules/@meteorjs/babel/parser.js:7:22)
   at Object.parse (packages/babel-compiler.js:40:29)
   at extractModuleSizesTree (packages/minifyStdJS/plugin/stats.js:25:23)
   at packages/minifyStdJS/plugin/minify-js.js:83:21
   at Array.forEach (<anonymous>)
   at MeteorMinifier.processFilesForBundle (packages/minifyStdJS/plugin/minify-js.js:66:11)


=> Your application has errors. Waiting for file change.

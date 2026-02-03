//Tue Feb 03 2026 15:22:10 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

var ae = Object.create;
var R = Object.defineProperty;
var ne = Object.getOwnPropertyDescriptor;
var oe = Object.getOwnPropertyNames;
var ie = Object.getPrototypeOf;
var re = Object.prototype.hasOwnProperty;
var ce = (_0x2d40fe, _0x67f02) => {
  for (var _0x385ecc in _0x67f02) R(_0x2d40fe, _0x385ecc, {
    get: _0x67f02[_0x385ecc],
    enumerable: true
  });
};
var Y = (_0xc902ff, _0x25d365, _0x28c064, _0x3ed86f) => {
  if (_0x25d365 && typeof _0x25d365 == "object" || typeof _0x25d365 == "function") {
    for (let _0x5916a7 of oe(_0x25d365)) !re.call(_0xc902ff, _0x5916a7) && _0x5916a7 !== _0x28c064 && R(_0xc902ff, _0x5916a7, {
      get: () => _0x25d365[_0x5916a7],
      enumerable: !(_0x3ed86f = ne(_0x25d365, _0x5916a7)) || _0x3ed86f.enumerable
    });
  }
  return _0xc902ff;
};
var h = (_0x3bbc14, _0x38d17b, _0x294d03) => (_0x294d03 = _0x3bbc14 != null ? ae(ie(_0x3bbc14)) : {}, Y(_0x38d17b || !_0x3bbc14 || !_0x3bbc14.__esModule ? R(_0x294d03, "default", {
  value: _0x3bbc14,
  enumerable: true
}) : _0x294d03, _0x3bbc14));
var de = _0x228a44 => Y(R({}, "__esModule", {
  value: true
}), _0x228a44);
var _e = {};
ce(_e, {
  activate: () => be,
  deactivate: () => Ee
});
module.exports = de(_e);
var u = h(require("vscode"));
var G = h(require("vscode"));
var L = class {
  constructor(_0x3880e1) {
    this.logLevel = 1;
    this.outputChannel = G.window.createOutputChannel(_0x3880e1);
  }
  setLogLevel(_0x4f74b0) {
    switch (_0x4f74b0.toUpperCase()) {
      case "DEBUG":
        this.logLevel = 0;
        break;
      case "INFO":
        this.logLevel = 1;
        break;
      case "WARN":
        this.logLevel = 2;
        break;
      case "ERROR":
        this.logLevel = 3;
        break;
    }
  }
  log(_0x103e33, _0x5f0035, _0x2e757b, ..._0x58288b) {
    if (_0x103e33 < this.logLevel) {
      return;
    }
    let _0x424244 = new Date().toISOString();
    let _0x2d8d51 = _0x58288b.map(_0x9e6662 => typeof _0x9e6662 == "object" ? JSON.stringify(_0x9e6662, null, 2) : String(_0x9e6662)).join(" ");
    let _0x48dcb4 = "[" + _0x424244 + "] [" + _0x5f0035 + "] " + _0x2e757b + " " + _0x2d8d51;
    this.outputChannel.appendLine(_0x48dcb4);
  }
  debug(_0x1441a5, ..._0x11b724) {
    this.log(0, "DEBUG", _0x1441a5, ..._0x11b724);
  }
  info(_0x35aec6, ..._0x4b8499) {
    this.log(1, "INFO", _0x35aec6, ..._0x4b8499);
  }
  warn(_0x521546, ..._0x53ce00) {
    this.log(2, "WARN", _0x521546, ..._0x53ce00);
  }
  error(_0x3f4a69, ..._0x487c7f) {
    this.log(3, "ERROR", _0x3f4a69, ..._0x487c7f);
  }
  show() {
    this.outputChannel.show();
  }
};
var D = h(require("vscode"));
var W = "https://api.ymzy.cloud/";
var ue = "https://ai.ymzy.cloud/";
function v() {
  let _0x26f6b6 = D.workspace.getConfiguration("ymaug");
  return {
    tenantUrl: W,
    apiToken: _0x26f6b6.get("apiToken", ""),
    proxyUrl: W,
    enableProxy: true,
    logLevel: "INFO",
    newApiUrl: ue
  };
}
function k() {
  return W;
}
function j(_0x383397) {
  return D.workspace.onDidChangeConfiguration(_0x396a11 => {
    _0x396a11.affectsConfiguration("ymaug") && _0x383397();
  });
}
var z = h(require("vscode"));
var w = h(require("fs/promises"));
var M = h(require("path"));
var X = require("child_process");
var J = require("util");
var le = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA56VhTxLmH1TfPj7nFvUe\nYCUtvdyFhp7tQCC6MDhy6YvzhGN5GQ9QICEVAUmHfRsZRxmGB8LuxapvcfDXM90B\nXBzmtIPUrkjQM+Ubedr4ntKvXM+kjzrUTIrLY/6EHmBokTwpZwTuo2qiXIe5flmo\nb3Smkl9vGP9+gO6DVQZxWeWBvj4cTS56cJT4OfNgmSxPEGaxaDo22SkMCt+yN8Kg\nGBJ2iozTr7yBRZ4E9yOIIbM/37QZbv+BAnIj0Burr8RjReXGGOBMBF/HT3VrSth2\nUaWPLGNiXBMxPydd+5iqY3MbMAQTxx/plOMBVk9tU1iBIFSnwPgLPW1WlWtXB2wC\n3wIDAQAB\n-----END PUBLIC KEY-----";
var ge = ["/chat", "/chat-stream", "/completion", "/resolve-completions", "/edit", "/edit-stream", "/explain", "/memorize", "/memorize-stream", "/generate-commit-message", "/generate-commit-message-stream"];
function H() {
  let _0x1b8319 = Buffer.from(le).toString("base64");
  let _0x77d579 = Buffer.from(JSON.stringify(ge)).toString("base64");
  return ("\n(function(){var _0x1a=atob(\"" + _0x1b8319 + "\"),_0x2b=JSON.parse(atob(\"" + _0x77d579 + "\")),_0x3c=function(_0x4d){return _0x2b.some(function(_0x5e){return _0x4d.indexOf(_0x5e)!==-1})},_0x6f=function(_0x7g){var _0x8h=new ArrayBuffer(_0x7g.length),_0x9i=new Uint8Array(_0x8h);for(var _0xaj=0;_0xaj<_0x7g.length;_0xaj++){_0x9i[_0xaj]=_0x7g.charCodeAt(_0xaj)}return _0x8h},_0xbk=function(_0xcl){var _0xdm=\"\";var _0xen=new Uint8Array(_0xcl);for(var _0xfo=0;_0xfo<_0xen.byteLength;_0xfo++){_0xdm+=String.fromCharCode(_0xen[_0xfo])}return btoa(_0xdm)},_0xgp=function(_0xhq){var _0xir=_0xhq.replace(/-----BEGIN PUBLIC KEY-----/,\"\").replace(/-----END PUBLIC KEY-----/,\"\").replace(/\\s/g,\"\");var _0xjs=atob(_0xir);return _0x6f(_0xjs)},_0xkt=async function(){var _0xlu=_0xgp(_0x1a);return await crypto.subtle.importKey(\"spki\",_0xlu,{name:\"RSA-OAEP\",hash:\"SHA-256\"},false,[\"encrypt\"])},_0xmv=async function(_0xnw){var _0xox=crypto.getRandomValues(new Uint8Array(32));var _0xpy=crypto.getRandomValues(new Uint8Array(12));var _0xqz=await crypto.subtle.importKey(\"raw\",_0xox,{name:\"AES-GCM\"},false,[\"encrypt\"]);var _0xr0=new TextEncoder();var _0xs1=_0xr0.encode(_0xnw);var _0xt2=await crypto.subtle.encrypt({name:\"AES-GCM\",iv:_0xpy},_0xqz,_0xs1);var _0xu3=await _0xkt();var _0xv4=await crypto.subtle.encrypt({name:\"RSA-OAEP\"},_0xu3,_0xox);var _0xw5=new Uint8Array(_0xv4);var _0xx6=new Uint8Array(_0xt2);var _0xy7=new Uint8Array(_0xw5.length+_0xpy.length+_0xx6.length);_0xy7.set(_0xw5,0);_0xy7.set(_0xpy,_0xw5.length);_0xy7.set(_0xx6,_0xw5.length+_0xpy.length);return _0xbk(_0xy7)},_0xz8=globalThis.fetch;globalThis.fetch=async function(_0xa9,_0xba){if(_0xba&&_0xba.body&&typeof _0xa9===\"string\"&&_0x3c(_0xa9)){try{var _0xcb=await _0xmv(_0xba.body);_0xba.body=_0xcb;_0xba.headers=_0xba.headers||{};if(_0xba.headers instanceof Headers){_0xba.headers.set(atob(\"WC1FbmNyeXB0ZWQ=\"),atob(\"dHJ1ZQ==\"));_0xba.headers.set(atob(\"Q29udGVudC1UeXBl\"),atob(\"dGV4dC9wbGFpbg==\"))}else{_0xba.headers[atob(\"WC1FbmNyeXB0ZWQ=\")]=atob(\"dHJ1ZQ==\");_0xba.headers[atob(\"Q29udGVudC1UeXBl\")]=atob(\"dGV4dC9wbGFpbg==\")}}catch(_0xdc){}}return _0xz8.call(this,_0xa9,_0xba)}})();\n").trim();
}
var me = (0, J.promisify)(X.exec);
async function Q(_0x2565c5) {
  try {
    await w.access(_0x2565c5);
    return true;
  } catch {
    return false;
  }
}
async function K(_0x14b0a9) {
  try {
    process.platform === "win32" ? await me("attrib -r \"" + _0x14b0a9 + "\"") : await w.chmod(_0x14b0a9, 420);
  } catch {}
}
var _ = class {
  constructor(_0x3d702f) {
    this.augmentExtensionPath = null;
    this.logger = _0x3d702f;
  }
  async findAugmentExtension() {
    var _0x3b7451;
    var _0x4abae0;
    try {
      let _0x1d7578 = ["augment-code.augment-vscode", "Augment.augment-vscode", "augment.augment-vscode", "Augment.augment"];
      let _0x4fe1a3;
      for (let _0x215666 of _0x1d7578) if (_0x4fe1a3 = z.extensions.getExtension(_0x215666), _0x4fe1a3) {
        break;
      }
      if (!_0x4fe1a3) {
        let _0x4ae744 = z.extensions.all;
        for (let _0x279113 of _0x4ae744) {
          let _0x518b8c = _0x279113.id.toLowerCase();
          let _0x150a2e = (((_0x3b7451 = _0x279113.packageJSON) == null ? undefined : _0x3b7451.name) || "").toLowerCase();
          let _0x24cb42 = (((_0x4abae0 = _0x279113.packageJSON) == null ? undefined : _0x4abae0.displayName) || "").toLowerCase();
          if (!(_0x518b8c.includes("ymaug") || _0x150a2e.includes("ymaug")) && (_0x518b8c.includes("augment") || _0x150a2e.includes("augment") || _0x24cb42.includes("augment"))) {
            _0x4fe1a3 = _0x279113;
            break;
          }
        }
      }
      if (!_0x4fe1a3) {
        this.logger.warn("未找到 Augment 扩展");
        return null;
      }
      let _0x7935f4 = _0x4fe1a3.extensionPath;
      let _0x6e2467 = [M.join(_0x7935f4, "dist", "extension.js"), M.join(_0x7935f4, "out", "extension.js"), M.join(_0x7935f4, "extension.js")];
      for (let _0x236abd of _0x6e2467) if (await Q(_0x236abd)) {
        return _0x236abd;
      }
      this.logger.warn("Augment 扩展文件不存在");
      return null;
    } catch {
      this.logger.error("查找 Augment 扩展失败");
      return null;
    }
  }
  async patchAugmentExtension(_0x39f109) {
    try {
      if (this.augmentExtensionPath = await this.findAugmentExtension(), !this.augmentExtensionPath) {
        return false;
      }
      let _0x5147e0 = await w.readFile(this.augmentExtensionPath, "utf-8");
      let _0x472149 = _0x5147e0;
      let _0x26a5f5 = false;
      if (_0x5147e0.includes("vscode-augment.directLogin")) {
        this.logger.info("directLogin 命令已存在");
      } else {
        let _0x414ef1 = /let\s*(\w+)\s*=\s*new\s*qye\s*\(/.exec(_0x5147e0);
        if (_0x414ef1) {
          let _0x5ba051 = _0x414ef1[1];
          this.logger.info("找到新版本 AuthSessionStore 实例: " + _0x5ba051);
          let _0x57dc78 = /\((\w+)\.window\.registerUriHandler/;
          if (_0x57dc78.test(_0x5147e0)) {
            let _0x521015 = "($1.commands.registerCommand(\"vscode-augment.directLogin\",function(){" + _0x5ba051 + "._context.globalState.update(\"sessionId\",crypto.randomUUID());return " + _0x5ba051 + ".saveSession(...arguments)}),$1.commands.registerCommand(\"vscode-augment.directLogout\",function(){return " + _0x5ba051 + ".removeSession()}),$1.window.registerUriHandler";
            _0x5147e0 = _0x5147e0.replace(_0x57dc78, _0x521015);
            _0x26a5f5 = true;
            this.logger.info("已使用新版本方式注入 directLogin/directLogout 命令");
          }
        } else {
          let _0x3c8962 = /\((\w+)\.window\.registerUriHandler/;
          let _0x910a0 = /(\w+)\.authRedirectURI\.path/.exec(_0x5147e0);
          if (_0x910a0 && _0x3c8962.test(_0x5147e0)) {
            let _0x43b618 = _0x910a0[1];
            let _0x25ec4e = "($1.commands.registerCommand(\"vscode-augment.directLogin\",function(){" + _0x43b618 + "._authSession._context.globalState.update(\"sessionId\",crypto.randomUUID());return " + _0x43b618 + "._authSession.saveSession(...arguments)}),$1.commands.registerCommand(\"vscode-augment.directLogout\",function(){return " + _0x43b618 + "._authSession.removeSession()}),$1.window.registerUriHandler";
            _0x5147e0 = _0x5147e0.replace(_0x3c8962, _0x25ec4e);
            _0x26a5f5 = true;
            this.logger.info("已使用旧版本方式注入 directLogin/directLogout 命令");
          } else {
            this.logger.warn("未找到注入点，无法注入 directLogin 命令");
          }
        }
      }
      if (_0x5147e0.includes("vscode-augment.directLogin") && !_0x5147e0.includes("vscode-augment.directLogout")) {
        let _0x1791c0 = /let\s*(\w+)\s*=\s*new\s*qye\s*\(/.exec(_0x5147e0);
        if (_0x1791c0) {
          let _0x61e5ef = _0x1791c0[1];
          _0x5147e0 = _0x5147e0.replace(/,(\w+)\.window\.registerUriHandler/, ",$1.commands.registerCommand(\"vscode-augment.directLogout\",function(){return " + _0x61e5ef + ".removeSession()}),$1.window.registerUriHandler");
          _0x26a5f5 = true;
          this.logger.info("已注入 directLogout 命令 (新版本方式)");
        } else {
          let _0x2e0d7e = /(\w+)\.authRedirectURI\.path/.exec(_0x5147e0);
          if (_0x2e0d7e) {
            let _0x1faea0 = _0x2e0d7e[1];
            _0x5147e0 = _0x5147e0.replace(/,(\w+)\.window\.registerUriHandler/, ",$1.commands.registerCommand(\"vscode-augment.directLogout\",function(){return " + _0x1faea0 + "._authSession.removeSession()}),$1.window.registerUriHandler");
            _0x26a5f5 = true;
            this.logger.info("已注入 directLogout 命令 (旧版本方式)");
          }
        }
      }
      _0x5147e0.includes("._authSession.saveSession.apply(L,arguments)") && (_0x5147e0 = _0x5147e0.replace("._authSession.saveSession.apply(L,arguments)", "._authSession.saveSession(...arguments)"), _0x26a5f5 = true);
      _0x5147e0.startsWith("globalThis.crypto") || (_0x5147e0 = "globalThis.crypto||(globalThis.crypto={}),globalThis.crypto.randomUUID||(crypto.randomUUID=function(){let o=\"\";for(let t=0;t<36;t++)if(t===8||t===13||t===18||t===23)o+=\"-\";else if(t===14)o+=\"4\";else if(t===19){o+=((Math.random()*16|0)&3|8).toString(16)}else{o+=(Math.random()*16|0).toString(16)}return o});" + _0x5147e0, _0x26a5f5 = true);
      let _0x442065 = H();
      if (_0x5147e0.includes("X-Encrypted") || (_0x5147e0 = _0x442065 + _0x5147e0, _0x26a5f5 = true, this.logger.info("已注入请求加密代码")), _0x26a5f5) {
        let _0x393326 = this.augmentExtensionPath + ".backup";
        (await Q(_0x393326)) || (await w.writeFile(_0x393326, _0x472149, "utf-8"));
        await K(this.augmentExtensionPath);
        await w.writeFile(this.augmentExtensionPath, _0x5147e0, "utf-8");
        return true;
      } else {
        return true;
      }
    } catch {
      this.logger.error("修改扩展失败");
      return false;
    }
  }
  async restoreAugmentExtension() {
    try {
      if (this.augmentExtensionPath || (this.augmentExtensionPath = await this.findAugmentExtension()), !this.augmentExtensionPath) {
        return false;
      }
      let _0x35a73c = this.augmentExtensionPath + ".backup";
      if (await Q(_0x35a73c)) {
        let _0xb95871 = await w.readFile(_0x35a73c, "utf-8");
        await K(this.augmentExtensionPath);
        await w.writeFile(this.augmentExtensionPath, _0xb95871, "utf-8");
        return true;
      } else {
        return false;
      }
    } catch {
      this.logger.error("恢复扩展失败");
      return false;
    }
  }
  async isPatched() {
    try {
      if (this.augmentExtensionPath || (this.augmentExtensionPath = await this.findAugmentExtension()), !this.augmentExtensionPath) {
        return false;
      }
      let _0x2d3143 = await w.readFile(this.augmentExtensionPath, "utf-8");
      return _0x2d3143.includes("vscode-augment.directLogin") && _0x2d3143.includes("vscode-augment.directLogout");
    } catch {
      return false;
    }
  }
};
var C = h(require("vscode"));
var V = class {
  constructor() {
    this.statusBarItem = C.window.createStatusBarItem(C.StatusBarAlignment.Right, 1000);
    this.statusBarItem.command = "ymaug.showPanel";
    this.statusBarItem.name = "Ymaug";
    this.updateStatus(false);
    this.statusBarItem.show();
  }
  updateStatus(_0x1c4ce0, _0x5913d8) {
    _0x1c4ce0 ? (this.statusBarItem.text = "$(verified-filled) Ymaug", this.statusBarItem.tooltip = _0x5913d8 || "已登录到服务器\n点击打开控制面板", this.statusBarItem.backgroundColor = undefined, this.statusBarItem.color = new C.ThemeColor("statusBarItem.prominentForeground")) : (this.statusBarItem.text = "$(rocket) Ymaug", this.statusBarItem.tooltip = _0x5913d8 || "Ymaug 服务\n点击打开控制面板", this.statusBarItem.backgroundColor = undefined);
  }
  setLoading(_0x230a67 = "处理中...") {
    this.statusBarItem.text = "$(loading~spin) Ymaug";
    this.statusBarItem.tooltip = _0x230a67;
  }
  dispose() {
    this.statusBarItem.dispose();
  }
};
var g = h(require("vscode"));
var y = h(require("crypto"));
var pe = h(require("https"));
var fe = h(require("http"));
var Z = require("url");
var he = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA56VhTxLmH1TfPj7nFvUe\nYCUtvdyFhp7tQCC6MDhy6YvzhGN5GQ9QICEVAUmHfRsZRxmGB8LuxapvcfDXM90B\nXBzmtIPUrkjQM+Ubedr4ntKvXM+kjzrUTIrLY/6EHmBokTwpZwTuo2qiXIe5flmo\nb3Smkl9vGP9+gO6DVQZxWeWBvj4cTS56cJT4OfNgmSxPEGaxaDo22SkMCt+yN8Kg\nGBJ2iozTr7yBRZ4E9yOIIbM/37QZbv+BAnIj0Burr8RjReXGGOBMBF/HT3VrSth2\nUaWPLGNiXBMxPydd+5iqY3MbMAQTxx/plOMBVk9tU1iBIFSnwPgLPW1WlWtXB2wC\n3wIDAQAB\n-----END PUBLIC KEY-----";
function we(_0x41caa6) {
  let _0x1ae1db = typeof _0x41caa6 == "string" ? _0x41caa6 : JSON.stringify(_0x41caa6);
  let _0x16b647 = y.randomBytes(32);
  let _0x586713 = y.randomBytes(12);
  let _0x529a92 = y.createCipheriv("aes-256-gcm", _0x16b647, _0x586713);
  let _0x4cd93d = Buffer.concat([_0x529a92.update(_0x1ae1db, "utf8"), _0x529a92.final()]);
  let _0x57d8f6 = _0x529a92.getAuthTag();
  let _0x3e3919 = y.publicEncrypt({
    key: he,
    padding: y.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256"
  }, _0x16b647);
  return Buffer.concat([_0x3e3919, _0x586713, _0x4cd93d, _0x57d8f6]).toString("base64");
}
async function I(_0x35bf1e, _0xf5990f, _0x39844 = {}, _0x533386) {
  let _0x1af2fe = new Z.URL(_0x35bf1e);
  let _0x573010 = _0x1af2fe.protocol === "https:";
  let _0x2f4418 = _0x573010 ? pe : fe;
  return new Promise((_0x1c0237, _0x1bc9b2) => {
    let _0xa0e351 = {};
    let _0x2aeaf5;
    let _0x57f23c = {
      _method: _0xf5990f
    };
    _0x39844.Authorization && (_0x57f23c.authorization = _0x39844.Authorization);
    _0x533386 && (typeof _0x533386 == "object" ? Object.assign(_0x57f23c, _0x533386) : _0x57f23c.data = _0x533386);
    _0x2aeaf5 = we(_0x57f23c);
    _0xa0e351["X-Encrypted"] = "true";
    _0xa0e351["Content-Type"] = "text/plain";
    _0xa0e351["Content-Length"] = Buffer.byteLength(_0x2aeaf5).toString();
    let _0x57fadc = {
      hostname: _0x1af2fe.hostname,
      port: _0x1af2fe.port || (_0x573010 ? 443 : 80),
      path: _0x1af2fe.pathname + _0x1af2fe.search,
      method: "POST",
      headers: _0xa0e351
    };
    let _0x5ea0ab = _0x2f4418.request(_0x57fadc, _0x42f9ec => {
      let _0x375a09 = "";
      _0x42f9ec.on("data", _0x326b07 => _0x375a09 += _0x326b07);
      _0x42f9ec.on("end", () => _0x1c0237({
        statusCode: _0x42f9ec.statusCode,
        data: _0x375a09
      }));
    });
    _0x5ea0ab.on("error", _0x1bc9b2);
    _0x2aeaf5 && _0x5ea0ab.write(_0x2aeaf5);
    _0x5ea0ab.end();
  });
}
var F = h(require("vscode"));
var T = "1.0.4";
var O = null;
var ee = 0;
var xe = 300000;
function ve(_0x5d07fb, _0x3b93bb) {
  let _0x43e40f = _0x5d07fb.split(".").map(Number);
  let _0x215100 = _0x3b93bb.split(".").map(Number);
  for (let _0x15edf3 = 0; _0x15edf3 < Math.max(_0x43e40f.length, _0x215100.length); _0x15edf3++) {
    let _0x9912f4 = _0x43e40f[_0x15edf3] || 0;
    let _0x3e636a = _0x215100[_0x15edf3] || 0;
    if (_0x9912f4 < _0x3e636a) {
      return -1;
    }
    if (_0x9912f4 > _0x3e636a) {
      return 1;
    }
  }
  return 0;
}
async function ye() {
  let _0x571897 = Date.now();
  if (O && _0x571897 - ee < xe) {
    return O;
  }
  try {
    let _0x25e89d = k();
    let _0x1727e5 = (_0x25e89d.endsWith("/") ? _0x25e89d.slice(0, -1) : _0x25e89d) + "/api/version/";
    let _0x11b558 = await I(_0x1727e5, "POST", {}, {});
    let _0x14bd5a = JSON.parse(_0x11b558.data);
    if (_0x14bd5a.success) {
      O = {
        minVersion: _0x14bd5a.data.min_version,
        forceUpdate: _0x14bd5a.data.force_update
      };
      ee = _0x571897;
      return O;
    }
  } catch (_0x1c0b66) {
    console.error("版本检查失败:", _0x1c0b66);
  }
  return null;
}
async function U() {
  let _0x2aad3d = await ye();
  if (!_0x2aad3d) {
    return {
      needsUpdate: false,
      forceUpdate: false,
      currentVersion: T,
      minVersion: T
    };
  }
  let _0x127172 = ve(T, _0x2aad3d.minVersion) < 0;
  return {
    needsUpdate: _0x127172,
    forceUpdate: _0x127172 && _0x2aad3d.forceUpdate,
    currentVersion: T,
    minVersion: _0x2aad3d.minVersion
  };
}
async function $(_0x389eab, _0x505d74) {
  _0x389eab ? await F.window.showErrorMessage("Ymaug 插件版本过低（当前: " + T + "，要求: " + _0x505d74 + "），请更新后使用。", {
    modal: true
  }) : F.window.showWarningMessage("Ymaug 插件有新版本可用（当前: " + T + "，最新: " + _0x505d74 + "），建议更新。", "稍后提醒");
}
async function te() {
  return (await U()).forceUpdate;
}
var N = class a {
  constructor(_0x31c80e, _0x2b00d6, _0x432f78) {
    this.disposables = [];
    this.lastRequestTime = 0;
    this.REQUEST_INTERVAL = 2000;
    this.panel = _0x31c80e;
    this.extensionUri = _0x2b00d6;
    this.logger = _0x432f78;
    this.patcher = new _(_0x432f78);
    this.update();
    this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    this.panel.webview.onDidReceiveMessage(async _0x451d8c => {
      await this.handleMessage(_0x451d8c);
    }, null, this.disposables);
  }
  static createOrShow(_0x334813, _0x3c855) {
    let _0x357925 = g.window.activeTextEditor ? g.window.activeTextEditor.viewColumn : undefined;
    if (a.currentPanel) {
      a.currentPanel.panel.reveal(_0x357925);
      a.currentPanel.update();
      return;
    }
    let _0x43c294 = g.window.createWebviewPanel("ymaugLogin", "Ymaug 服务", _0x357925 || g.ViewColumn.One, {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [_0x334813]
    });
    a.currentPanel = new a(_0x43c294, _0x334813, _0x3c855);
  }
  async safeUpdateConfig(_0x3b81f5, _0x5eeb5b) {
    try {
      await g.workspace.saveAll(false);
      await g.workspace.getConfiguration("ymaug").update(_0x3b81f5, _0x5eeb5b, g.ConfigurationTarget.Global);
      return true;
    } catch {
      this.logger.warn("无法更新配置 " + _0x3b81f5);
      return false;
    }
  }
  async handleMessage(_0x372237) {
    if (["login", "activateToken", "verifyAndLogin", "checkAndActivate"].includes(_0x372237.command) && (await te())) {
      let _0x1ffb43 = await U();
      this.sendMessage({
        command: "versionBlocked",
        currentVersion: _0x1ffb43.currentVersion,
        minVersion: _0x1ffb43.minVersion
      });
      await $(true, _0x1ffb43.minVersion);
      return;
    }
    switch (_0x372237.command) {
      case "login":
        await g.commands.executeCommand("ymaug.login");
        this.sendMessage({
          command: "loginResult",
          success: true
        });
        break;
      case "saveConfig":
        await this.safeUpdateConfig("apiToken", _0x372237.apiToken);
        this.update();
        break;
      case "reloadWindow":
        await g.commands.executeCommand("workbench.action.reloadWindow");
        break;
      case "getConfig":
        this.sendConfig();
        await this.checkTokenValidity();
        await this.checkVersionUpdate();
        break;
      case "patchAugment":
        await g.commands.executeCommand("ymaug.patchAugment");
        break;
      case "restoreAugment":
        await g.commands.executeCommand("ymaug.restoreAugment");
        break;
      case "activateToken":
        await this.handleActivateToken(_0x372237.apiToken, k());
        break;
      case "queryToken":
        await this.handleQueryToken(_0x372237.apiToken, k());
        break;
      case "verifyAndLogin":
        await this.handleVerifyAndLogin(_0x372237.apiToken);
        break;
      case "checkAndActivate":
        await this.handleCheckAndActivate(_0x372237.apiToken);
        break;
      case "signOut":
        await this.handleSignOut();
        break;
      case "updateWindows":
        await this.handleUpdateWindows(_0x372237.apiToken, _0x372237.windows);
        break;
    }
  }
  async handleUpdateWindows(_0x57dd2d, _0x3062c1) {
    if (!_0x57dd2d) {
      this.sendMessage({
        command: "updateWindowsResult",
        success: false,
        message: "请先输入API令牌"
      });
      return;
    }
    if (_0x3062c1 < 1) {
      this.sendMessage({
        command: "updateWindowsResult",
        success: false,
        message: "滑动窗口值必须至少为 1"
      });
      return;
    }
    let _0x3d2c76 = Date.now();
    let _0x4a7f14 = _0x3d2c76 - this.lastRequestTime;
    if (_0x4a7f14 < this.REQUEST_INTERVAL) {
      let _0x3a388f = Math.ceil((this.REQUEST_INTERVAL - _0x4a7f14) / 1000);
      this.sendMessage({
        command: "updateWindowsResult",
        success: false,
        message: "请求过于频繁，请等待 " + _0x3a388f + " 秒后再试"
      });
      return;
    }
    this.lastRequestTime = _0x3d2c76;
    try {
      let _0x1a6045 = k();
      let _0x20d452 = (_0x1a6045.endsWith("/") ? _0x1a6045.slice(0, -1) : _0x1a6045) + "/api/token-windows/";
      let _0x5cffc3 = await I(_0x20d452, "PUT", {
        Authorization: "Bearer " + _0x57dd2d
      }, {
        windows: _0x3062c1
      });
      let _0x4188b0;
      try {
        _0x4188b0 = JSON.parse(_0x5cffc3.data);
      } catch {
        throw new Error("服务器返回了无效的响应格式");
      }
      if (_0x4188b0.success) {
        this.sendMessage({
          command: "updateWindowsResult",
          success: true,
          message: "滑动窗口已更新为 " + _0x4188b0.data.windows,
          windows: _0x4188b0.data.windows
        });
      } else {
        let _0x5cc880 = _0x4188b0.message || "更新失败";
        (_0x5cc880.includes("任务过度饱和") || _0x5cc880.includes("任务过载")) && (_0x5cc880 = "服务器繁忙，请稍后再试（建议等待10-30秒）");
        this.sendMessage({
          command: "updateWindowsResult",
          success: false,
          message: _0x5cc880
        });
      }
    } catch (_0x4c07b6) {
      this.sendMessage({
        command: "updateWindowsResult",
        success: false,
        message: "更新失败: " + _0x4c07b6.message
      });
    }
  }
  async checkVersionUpdate() {
    try {
      let _0x2bbef2 = await U();
      this.sendMessage({
        command: "versionCheck",
        needsUpdate: _0x2bbef2.needsUpdate,
        forceUpdate: _0x2bbef2.forceUpdate,
        currentVersion: _0x2bbef2.currentVersion,
        minVersion: _0x2bbef2.minVersion
      });
    } catch {}
  }
  async handleSignOut() {
    try {
      let _0x42d4bc = await g.commands.getCommands();
      if (_0x42d4bc.includes("vscode-augment.directLogout")) {
        await g.commands.executeCommand("vscode-augment.directLogout");
        this.logger.info("已退出服务");
      } else {
        if (_0x42d4bc.includes("vscode-augment.signOut")) {
          await g.commands.executeCommand("vscode-augment.signOut");
          this.logger.info("已退出服务");
        } else {
          this.sendMessage({
            command: "signOutResult",
            success: false,
            message: "退出命令不存在，请点击\"激活服务\"重新修改扩展后重新加载窗口"
          });
          return;
        }
      }
      await this.safeUpdateConfig("isLoggedIn", false);
      this.sendMessage({
        command: "signOutResult",
        success: true,
        message: "已退出服务，请重新加载窗口使更改生效"
      });
      (await g.window.showInformationMessage("已退出服务，建议重新加载窗口", "重新加载")) === "重新加载" && (await g.commands.executeCommand("workbench.action.reloadWindow"));
    } catch (_0x190b26) {
      this.logger.error("退出服务失败");
      this.sendMessage({
        command: "signOutResult",
        success: false,
        message: "退出失败: " + (_0x190b26 instanceof Error ? _0x190b26.message : String(_0x190b26))
      });
    }
  }
  async silentPatchAugment() {
    try {
      if (await this.patcher.isPatched()) {
        return;
      }
      let _0x1a8b48 = v();
      let _0x1edc75 = _0x1a8b48.enableProxy ? _0x1a8b48.proxyUrl : "";
      (await this.patcher.patchAugmentExtension(_0x1edc75)) && setTimeout(() => {
        g.commands.executeCommand("workbench.action.reloadWindow");
      }, 2000);
    } catch {}
  }
  async handleCheckAndActivate(_0x21474e) {
    if (!_0x21474e) {
      this.sendMessage({
        command: "checkAndActivateResult",
        success: false,
        message: "请先输入API令牌"
      });
      return;
    }
    try {
      if (!(await this.patcher.isPatched())) {
        this.sendMessage({
          command: "checkAndActivateResult",
          success: false,
          needPatch: true,
          message: "正在修改扩展..."
        });
        let _0x4a5094 = v();
        let _0x413ee0 = _0x4a5094.enableProxy ? _0x4a5094.proxyUrl : "";
        (await this.patcher.patchAugmentExtension(_0x413ee0)) ? (this.sendMessage({
          command: "checkAndActivateResult",
          success: false,
          needReload: true,
          message: "扩展已修改，需要重新加载窗口"
        }), setTimeout(() => {
          g.commands.executeCommand("workbench.action.reloadWindow");
        }, 1500)) : this.sendMessage({
          command: "checkAndActivateResult",
          success: false,
          message: "修改扩展失败，请检查 Augment 扩展是否已安装"
        });
        return;
      }
      await this.handleVerifyAndLogin(_0x21474e);
    } catch (_0x5d2cb7) {
      this.sendMessage({
        command: "checkAndActivateResult",
        success: false,
        message: "操作失败: " + (_0x5d2cb7 instanceof Error ? _0x5d2cb7.message : String(_0x5d2cb7))
      });
    }
  }
  async handleActivateToken(_0x2b0298, _0x111f68) {
    if (!_0x2b0298) {
      this.sendMessage({
        command: "activateResult",
        success: false,
        message: "请先输入API令牌"
      });
      return;
    }
    let _0x44829b = Date.now();
    let _0x32213a = _0x44829b - this.lastRequestTime;
    if (_0x32213a < this.REQUEST_INTERVAL) {
      let _0x1f9813 = Math.ceil((this.REQUEST_INTERVAL - _0x32213a) / 1000);
      this.sendMessage({
        command: "activateResult",
        success: false,
        message: "请求过于频繁，请等待 " + _0x1f9813 + " 秒后再试"
      });
      return;
    }
    this.lastRequestTime = _0x44829b;
    try {
      let _0x2cff44 = (_0x111f68.endsWith("/") ? _0x111f68.slice(0, -1) : _0x111f68) + "/api/token-activate/";
      let _0x59b7ac = await I(_0x2cff44, "POST", {
        Authorization: "Bearer " + _0x2b0298
      }, {
        token: _0x2b0298
      });
      let _0x1b0064;
      try {
        _0x1b0064 = JSON.parse(_0x59b7ac.data);
      } catch {
        throw new Error("服务器返回了无效的响应格式");
      }
      if (_0x1b0064.success) {
        await this.safeUpdateConfig("apiToken", _0x2b0298);
        let _0x1a6f4b = new Date(_0x1b0064.data.activated_time * 1000).toLocaleString("zh-CN");
        let _0x439a46 = _0x1b0064.data.actual_expired_time === -1 ? "永不过期" : new Date(_0x1b0064.data.actual_expired_time * 1000).toLocaleString("zh-CN");
        let _0x2c1e80 = (_0x1b0064.data.total_granted / 500000).toFixed(2);
        let _0x22d2e4 = (_0x1b0064.data.total_used / 500000).toFixed(2);
        let _0x33ed90 = (_0x1b0064.data.total_available / 500000).toFixed(2);
        this.sendMessage({
          command: "activateResult",
          success: true,
          message: "激活时间: " + _0x1a6f4b + "\n过期时间: " + _0x439a46 + "\n总额度: $" + _0x2c1e80 + "\n已使用: $" + _0x22d2e4 + "\n剩余额度: $" + _0x33ed90,
          data: _0x1b0064.data
        });
        await this.silentPatchAugment();
      } else {
        let _0x33c12f = _0x1b0064.message || "验证失败";
        if (_0x33c12f.includes("令牌已激活") || _0x33c12f.includes("无需重复激活")) {
          await this.safeUpdateConfig("apiToken", _0x2b0298);
          await this.handleQueryToken(_0x2b0298, _0x111f68, true);
          await this.silentPatchAugment();
          return;
        }
        (_0x33c12f.includes("任务过度饱和") || _0x33c12f.includes("任务过载")) && (_0x33c12f = "服务器繁忙，请稍后再试（建议等待10-30秒）");
        this.sendMessage({
          command: "activateResult",
          success: false,
          message: _0x33c12f
        });
      }
    } catch (_0x93f272) {
      this.sendMessage({
        command: "activateResult",
        success: false,
        message: "验证失败: " + _0x93f272.message
      });
    }
  }
  async handleQueryToken(_0x2da437, _0xd4f6c, _0x638fb8 = false) {
    if (!_0x2da437) {
      this.sendMessage({
        command: "queryResult",
        success: false,
        message: "请先输入API令牌"
      });
      return;
    }
    if (!_0x638fb8) {
      let _0x5b0485 = Date.now();
      let _0x306506 = _0x5b0485 - this.lastRequestTime;
      if (_0x306506 < this.REQUEST_INTERVAL) {
        let _0x1c7b3b = Math.ceil((this.REQUEST_INTERVAL - _0x306506) / 1000);
        this.sendMessage({
          command: "queryResult",
          success: false,
          message: "请求过于频繁，请等待 " + _0x1c7b3b + " 秒后再试"
        });
        return;
      }
      this.lastRequestTime = _0x5b0485;
    }
    try {
      let _0x25f175 = (_0xd4f6c.endsWith("/") ? _0xd4f6c.slice(0, -1) : _0xd4f6c) + "/api/token-info/";
      let _0xa8be9a = await I(_0x25f175, "POST", {
        Authorization: "Bearer " + _0x2da437
      }, {
        token: _0x2da437
      });
      let _0x216cff;
      try {
        _0x216cff = JSON.parse(_0xa8be9a.data);
      } catch {
        throw new Error("服务器返回了无效的响应格式");
      }
      if (_0x216cff.success) {
        let _0x2ccd55 = _0x216cff.data;
        let _0x1910f2 = Math.floor(Date.now() / 1000);
        let _0x22216c = _0x2ccd55.actual_expired_time !== -1 && _0x2ccd55.actual_expired_time < _0x1910f2;
        let _0x48758b = _0x2ccd55.total_available <= 0;
        let _0x50c87d = _0x2ccd55.is_activated ? new Date(_0x2ccd55.activated_time * 1000).toLocaleString("zh-CN") : "未激活";
        let _0x1c6d05 = _0x2ccd55.actual_expired_time === -1 ? "永不过期" : new Date(_0x2ccd55.actual_expired_time * 1000).toLocaleString("zh-CN");
        let _0x503026 = (_0x2ccd55.total_granted / 500000).toFixed(2);
        let _0x248c33 = (_0x2ccd55.total_used / 500000).toFixed(2);
        let _0x30bfd3 = (_0x2ccd55.total_available / 500000).toFixed(2);
        let _0x3c0ca8 = "激活时间: " + _0x50c87d + "\n过期时间: " + _0x1c6d05 + "\n总额度: $" + _0x503026 + "\n已使用: $" + _0x248c33 + "\n剩余额度: $" + _0x30bfd3;
        _0x22216c && (_0x3c0ca8 += "\n⚠️ 令牌已过期");
        _0x48758b && (_0x3c0ca8 += "\n⚠️ 额度已用尽");
        this.sendMessage({
          command: "queryResult",
          success: true,
          message: _0x3c0ca8,
          data: _0x216cff.data
        });
      } else {
        let _0xe99037 = _0x216cff.message || "查询失败";
        (_0xe99037.includes("任务过度饱和") || _0xe99037.includes("任务过载")) && (_0xe99037 = "服务器繁忙，请稍后再试（建议等待10-30秒）");
        this.sendMessage({
          command: "queryResult",
          success: false,
          message: _0xe99037
        });
      }
    } catch (_0x109978) {
      this.sendMessage({
        command: "queryResult",
        success: false,
        message: "查询失败: " + _0x109978.message
      });
    }
  }
  async handleVerifyAndLogin(_0x5ddc8b) {
    let _0x160dd9 = k();
    try {
      let _0x1a5b20 = (_0x160dd9.endsWith("/") ? _0x160dd9.slice(0, -1) : _0x160dd9) + "/api/token-info/";
      let _0x3de746 = await I(_0x1a5b20, "POST", {
        Authorization: "Bearer " + _0x5ddc8b
      }, {
        token: _0x5ddc8b
      });
      let _0x19f683;
      try {
        _0x19f683 = JSON.parse(_0x3de746.data);
      } catch {
        throw new Error("服务器返回了无效的响应格式");
      }
      if (_0x19f683.success) {
        let _0x4ed0e6 = _0x19f683.data;
        if (_0x4ed0e6.status === 1 && _0x4ed0e6.is_activated) {
          let _0x4414a5 = Math.floor(Date.now() / 1000);
          let _0xdedf21 = _0x4ed0e6.actual_expired_time !== -1 && _0x4ed0e6.actual_expired_time < _0x4414a5;
          let _0x4b60d6 = _0x4ed0e6.total_available <= 0;
          _0xdedf21 ? this.sendMessage({
            command: "loginResult",
            success: false,
            error: "令牌已过期，无法登录"
          }) : _0x4b60d6 ? this.sendMessage({
            command: "loginResult",
            success: false,
            error: "额度已用尽，无法登录"
          }) : (await g.commands.executeCommand("ymaug.login"), await this.safeUpdateConfig("isLoggedIn", true), this.sendMessage({
            command: "loginResult",
            success: true
          }));
        } else {
          let _0x44dd4b = _0x4ed0e6.is_activated ? "令牌未启用" : "令牌未激活";
          this.sendMessage({
            command: "loginResult",
            success: false,
            error: "令牌无效: " + _0x44dd4b
          });
        }
      } else {
        this.sendMessage({
          command: "loginResult",
          success: false,
          error: _0x19f683.message || "令牌验证失败"
        });
      }
    } catch (_0x1c9a86) {
      this.sendMessage({
        command: "loginResult",
        success: false,
        error: "验证失败: " + _0x1c9a86.message
      });
    }
  }
  async checkTokenValidity() {
    let _0x4c7ac2 = g.workspace.getConfiguration("ymaug");
    let _0x475c0d = _0x4c7ac2.get("apiToken", "");
    let _0x50e6ad = _0x4c7ac2.get("isLoggedIn", false);
    if (!_0x475c0d) {
      this.sendMessage({
        command: "tokenValidityCheck",
        valid: false,
        isLoggedIn: false,
        noToken: true
      });
      return;
    }
    try {
      let _0x5453d5 = k();
      let _0x3c02e4 = (_0x5453d5.endsWith("/") ? _0x5453d5.slice(0, -1) : _0x5453d5) + "/api/token-info/";
      let _0x2fa0a2 = await I(_0x3c02e4, "POST", {
        Authorization: "Bearer " + _0x475c0d
      }, {
        token: _0x475c0d
      });
      let _0x22f103 = JSON.parse(_0x2fa0a2.data);
      if (_0x22f103.success && _0x22f103.data.status === 1 && _0x22f103.data.is_activated) {
        let _0x1ef1a8 = _0x22f103.data;
        let _0x35ded2 = Math.floor(Date.now() / 1000);
        let _0x5ea635 = _0x1ef1a8.actual_expired_time !== -1 && _0x1ef1a8.actual_expired_time < _0x35ded2;
        let _0x571c4e = _0x1ef1a8.total_available <= 0;
        if (_0x5ea635 || _0x571c4e) {
          let _0x1f0218 = _0x5ea635 ? "令牌已过期" : "额度已用尽";
          this.logger.info(_0x1f0218 + "，已自动退出服务");
          await this.handleSignOut();
          await this.safeUpdateConfig("apiToken", "");
          await this.safeUpdateConfig("isLoggedIn", false);
          this.sendMessage({
            command: "tokenValidityCheck",
            valid: false,
            isLoggedIn: false,
            autoSignedOut: true,
            reason: _0x1f0218
          });
          return;
        }
        let _0x109fb0 = _0x1ef1a8.is_activated ? new Date(_0x1ef1a8.activated_time * 1000).toLocaleString("zh-CN") : "未激活";
        let _0x24225b = _0x1ef1a8.actual_expired_time === -1 ? "永不过期" : new Date(_0x1ef1a8.actual_expired_time * 1000).toLocaleString("zh-CN");
        let _0x52cae8 = (_0x1ef1a8.total_granted / 500000).toFixed(2);
        let _0xa63cf5 = (_0x1ef1a8.total_used / 500000).toFixed(2);
        let _0x2d0e9c = (_0x1ef1a8.total_available / 500000).toFixed(2);
        let _0x388b36 = "激活时间: " + _0x109fb0 + "\n过期时间: " + _0x24225b + "\n总额度: $" + _0x52cae8 + "\n已使用: $" + _0xa63cf5 + "\n剩余额度: $" + _0x2d0e9c;
        this.sendMessage({
          command: "tokenValidityCheck",
          valid: true,
          isLoggedIn: _0x50e6ad,
          tokenInfo: _0x388b36,
          data: _0x22f103.data
        });
      } else {
        await this.safeUpdateConfig("apiToken", "");
        await this.safeUpdateConfig("isLoggedIn", false);
        this.sendMessage({
          command: "tokenValidityCheck",
          valid: false,
          isLoggedIn: false
        });
      }
    } catch {
      await this.safeUpdateConfig("apiToken", "");
      await this.safeUpdateConfig("isLoggedIn", false);
      this.sendMessage({
        command: "tokenValidityCheck",
        valid: false,
        isLoggedIn: false
      });
    }
  }
  sendMessage(_0x3c04d3) {
    this.panel.webview.postMessage(_0x3c04d3);
  }
  sendConfig() {
    let _0xd722c0 = v();
    this.sendMessage({
      command: "configLoaded",
      config: _0xd722c0
    });
  }
  update() {
    this.panel.webview.html = this.getHtmlContent();
    this.sendConfig();
  }
  getHtmlContent() {
    return "<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ymaug 服务</title>\n    <style>\n        :root {\n            --primary-color: #3b82f6;\n            --primary-light: #60a5fa;\n            --primary-dark: #2563eb;\n            --success-color: #10b981;\n            --warning-color: #f59e0b;\n            --gradient-primary: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%);\n            --gradient-header: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);\n            --gradient-success: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);\n            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);\n            --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);\n            --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);\n            --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n            --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            --border-radius: 12px;\n            --border-radius-sm: 8px;\n        }\n\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;\n            font-size: 14px;\n            color: var(--vscode-foreground);\n            background: var(--vscode-editor-background);\n            padding: 24px;\n            line-height: 1.6;\n            min-height: 100vh;\n        }\n\n        .container {\n            max-width: 520px;\n            margin: 0 auto;\n        }\n\n        /* 头部样式 */\n        .header {\n            text-align: center;\n            margin-bottom: 32px;\n            padding: 24px;\n            background: var(--gradient-primary);\n            border-radius: var(--border-radius);\n            box-shadow: var(--shadow-md);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .header h1 {\n            font-size: 1.75em;\n            font-weight: 700;\n            color: #0369a1;\n            position: relative;\n            z-index: 1;\n            margin: 0;\n            letter-spacing: -0.5px;\n        }\n\n        .header .subtitle {\n            font-size: 0.9em;\n            color: #0284c7;\n            margin-top: 8px;\n            position: relative;\n            z-index: 1;\n        }\n\n        /* 状态栏 */\n        .status {\n            padding: 14px 18px;\n            border-radius: var(--border-radius-sm);\n            margin-bottom: 20px;\n            font-weight: 500;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            transition: all var(--transition-normal);\n            box-shadow: var(--shadow-sm);\n        }\n\n        .status::before {\n            content: '';\n            width: 8px;\n            height: 8px;\n            border-radius: 50%;\n            flex-shrink: 0;\n        }\n\n        .status-success {\n            background: #ecfdf5;\n            border: 1px solid #a7f3d0;\n            color: #059669;\n        }\n\n        .status-success::before {\n            background: #10b981;\n            box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);\n        }\n\n        .status-warning {\n            background: #fffbeb;\n            border: 1px solid #fde68a;\n            color: #d97706;\n        }\n\n        .status-warning::before {\n            background: #f59e0b;\n            box-shadow: 0 0 6px rgba(245, 158, 11, 0.5);\n        }\n\n        /* 卡片区块 */\n        .section {\n            background: var(--vscode-editor-inactiveSelectionBackground);\n            border-radius: var(--border-radius);\n            padding: 24px;\n            margin-bottom: 20px;\n            border: 1px solid var(--vscode-widget-border);\n            box-shadow: var(--shadow-sm);\n            transition: all var(--transition-normal);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .section:hover {\n            box-shadow: var(--shadow-md);\n            transform: translateY(-2px);\n        }\n\n        .section::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 3px;\n            background: var(--gradient-primary);\n            opacity: 0;\n            transition: opacity var(--transition-normal);\n        }\n\n        .section:hover::before {\n            opacity: 1;\n        }\n\n        h2 {\n            font-size: 1.1em;\n            font-weight: 600;\n            margin-bottom: 20px;\n            color: var(--vscode-foreground);\n            display: flex;\n            align-items: center;\n            gap: 10px;\n        }\n\n        h2 .icon {\n            font-size: 1.2em;\n        }\n\n        /* 表单样式 */\n        .form-group {\n            margin-bottom: 20px;\n        }\n\n        label {\n            display: block;\n            margin-bottom: 8px;\n            font-weight: 600;\n            font-size: 13px;\n            color: var(--vscode-foreground);\n            letter-spacing: 0.3px;\n        }\n\n        input[type=\"text\"], input[type=\"password\"] {\n            width: 100%;\n            padding: 12px 16px;\n            border: 2px solid var(--vscode-input-border);\n            background: var(--vscode-input-background);\n            color: var(--vscode-input-foreground);\n            border-radius: var(--border-radius-sm);\n            font-size: 14px;\n            transition: all var(--transition-fast);\n        }\n\n        input[type=\"text\"]:focus, input[type=\"password\"]:focus {\n            outline: none;\n            border-color: #3b82f6;\n            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n        }\n\n        input[type=\"text\"]::placeholder {\n            color: var(--vscode-input-placeholderForeground);\n            opacity: 0.6;\n        }\n\n        .info-text {\n            font-size: 12px;\n            color: var(--vscode-descriptionForeground);\n            margin-top: 8px;\n            opacity: 0.8;\n        }\n\n        /* 按钮样式 */\n        .button-group {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 12px;\n            margin-top: 20px;\n        }\n\n        .btn {\n            padding: 12px 24px;\n            border: none;\n            border-radius: var(--border-radius-sm);\n            cursor: pointer;\n            font-size: 14px;\n            font-weight: 600;\n            transition: all var(--transition-fast);\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            gap: 8px;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .btn::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);\n            transition: left 0.5s;\n        }\n\n        .btn:hover::before {\n            left: 100%;\n        }\n\n        .btn-primary {\n            background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);\n            color: #fff;\n            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);\n        }\n\n        .btn-primary:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);\n        }\n\n        .btn-primary:active {\n            transform: translateY(0);\n        }\n\n        .btn-secondary {\n            background: #f8fafc;\n            color: #475569;\n            border: 1px solid #e2e8f0;\n        }\n\n        .btn-secondary:hover {\n            background: #f1f5f9;\n            transform: translateY(-2px);\n            box-shadow: var(--shadow-sm);\n        }\n\n        .btn-danger {\n            background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);\n            color: #fff;\n            box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n        }\n\n        .btn-danger:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);\n        }\n\n        .btn-danger:active {\n            transform: translateY(0);\n        }\n\n        /* 令牌信息卡片 */\n        #tokenInfo {\n            margin-top: 20px;\n            padding: 20px;\n            background: #f0f9ff;\n            border-radius: var(--border-radius-sm);\n            border: 1px solid #bae6fd;\n        }\n\n        #tokenInfoText {\n            margin: 0;\n            white-space: pre-wrap;\n            font-size: 13px;\n            line-height: 1.8;\n            font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;\n            color: #0369a1;\n        }\n\n        /* 激活区块特殊样式 */\n        #activateSection {\n            background: #f0fdf4;\n            border-color: #bbf7d0;\n        }\n\n        #activateSection::before {\n            background: var(--gradient-success);\n        }\n\n        #activateSection h2 {\n            color: #16a34a;\n        }\n\n        /* 动画 */\n        @keyframes fadeIn {\n            from { opacity: 0; transform: translateY(10px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n\n        .section {\n            animation: fadeIn 0.4s ease-out;\n        }\n\n        #activateSection {\n            animation: fadeIn 0.5s ease-out;\n        }\n\n        /* 响应式 */\n        @media (max-width: 480px) {\n            body { padding: 16px; }\n            .header { padding: 20px; }\n            .section { padding: 20px; }\n            .btn { width: 100%; }\n            .button-group { flex-direction: column; }\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <h1>🚀 Ymaug 服务</h1>\n            <div class=\"subtitle\">更好的augment服务</div>\n        </div>\n\n        <div id=\"status\" class=\"status status-warning\">\n            <span>正在加载配置...</span>\n        </div>\n\n        <div class=\"section\">\n            <h2><span class=\"icon\">🎫</span> API 令牌配置</h2>\n\n            <div class=\"form-group\">\n                <label for=\"apiToken\">API 令牌</label>\n                <input type=\"text\" id=\"apiToken\" value=\"" + v().apiToken + "\" placeholder=\"请输入 sk-xxxxxxxx 格式的令牌\">\n                <div class=\"info-text\">💡 请输入您的 API 令牌以验证身份</div>\n            </div>\n\n            <div class=\"button-group\">\n                <button class=\"btn btn-primary\" onclick=\"loginAndVerify()\">🔐 登录验证</button>\n                <button class=\"btn btn-secondary\" onclick=\"queryBalance()\">💰 查询余额</button>\n            </div>\n\n            <div id=\"tokenInfo\" style=\"display: none;\">\n                <pre id=\"tokenInfoText\"></pre>\n            </div>\n        </div>\n\n        <div class=\"section\" id=\"activateSection\" style=\"display: none;\">\n            <h2><span class=\"icon\">⚡</span> 激活操作</h2>\n            <div class=\"button-group\">\n                <button class=\"btn btn-primary\" onclick=\"activateAugment()\">✨ 激活服务</button>\n                <button class=\"btn btn-danger\" onclick=\"signOut()\">🚪 退出服务</button>\n                <button class=\"btn btn-secondary\" onclick=\"reloadWindow()\">🔄 重新加载</button>\n            </div>\n        </div>\n\n        <div class=\"section\" id=\"windowsSection\" style=\"display: none;\">\n            <h2><span class=\"icon\">📊</span> 滑动窗口设置</h2>\n            <div class=\"form-group\">\n                <label for=\"windowsInput\">对话历史窗口大小</label>\n                <div style=\"display: flex; gap: 12px; align-items: center;\">\n                    <input type=\"number\" id=\"windowsInput\" min=\"1\" value=\"100\" style=\"flex: 1; padding: 12px 16px; border: 2px solid var(--vscode-input-border); background: var(--vscode-input-background); color: var(--vscode-input-foreground); border-radius: var(--border-radius-sm); font-size: 14px;\">\n                    <button class=\"btn btn-primary\" onclick=\"updateWindows()\">💾 保存</button>\n                </div>\n                <div class=\"info-text\">💡 设置对话历史的最大轮数（最低 1，无上限），值越大保留的历史越多，但会消耗更多 Token</div>\n            </div>\n            <div id=\"windowsStatus\" style=\"display: none; margin-top: 12px; padding: 12px; border-radius: var(--border-radius-sm); font-size: 13px;\"></div>\n        </div>\n\n    </div>\n    \n    <script>\n        const vscode = acquireVsCodeApi();\n\n        // 令牌验证状态\n        let isTokenValid = false;\n\n        // 请求配置\n        vscode.postMessage({ command: 'getConfig' });\n        \n        // 接收消息\n        window.addEventListener('message', event => {\n            const message = event.data;\n            switch (message.command) {\n                case 'configLoaded':\n                    document.getElementById('apiToken').value = message.config.apiToken || '';\n                    updateStatus('配置已加载', 'success');\n                    break;\n                case 'loginResult':\n                    if (message.success) {\n                        updateStatus('登录成功！', 'success');\n                    } else {\n                        updateStatus('登录失败: ' + message.error, 'warning');\n                    }\n                    break;\n                case 'activateResult':\n                    if (message.success) {\n                        updateStatus('令牌验证成功！配置已保存', 'success');\n                        document.getElementById('tokenInfoText').textContent = message.message;\n                        document.getElementById('tokenInfo').style.display = 'block';\n                        // 令牌有效，显示激活按钮和滑动窗口设置\n                        isTokenValid = true;\n                        document.getElementById('activateSection').style.display = 'block';\n                        document.getElementById('windowsSection').style.display = 'block';\n                        // 更新滑动窗口值\n                        if (message.data && message.data.windows) {\n                            document.getElementById('windowsInput').value = message.data.windows;\n                        }\n                    } else {\n                        updateStatus('验证失败: ' + message.message, 'warning');\n                        isTokenValid = false;\n                        document.getElementById('activateSection').style.display = 'none';\n                        document.getElementById('windowsSection').style.display = 'none';\n                    }\n                    break;\n                case 'queryResult':\n                    if (message.success) {\n                        updateStatus('查询成功', 'success');\n                        document.getElementById('tokenInfoText').textContent = message.message;\n                        document.getElementById('tokenInfo').style.display = 'block';\n                        // 查询成功说明令牌有效\n                        if (message.data && message.data.status === 1 && message.data.is_activated) {\n                            isTokenValid = true;\n                            document.getElementById('activateSection').style.display = 'block';\n                            document.getElementById('windowsSection').style.display = 'block';\n                            // 更新滑动窗口值\n                            if (message.data.windows) {\n                                document.getElementById('windowsInput').value = message.data.windows;\n                            }\n                        } else {\n                            isTokenValid = false;\n                            document.getElementById('activateSection').style.display = 'none';\n                            document.getElementById('windowsSection').style.display = 'none';\n                        }\n                    } else {\n                        updateStatus('查询失败: ' + message.message, 'warning');\n                        isTokenValid = false;\n                        document.getElementById('activateSection').style.display = 'none';\n                        document.getElementById('windowsSection').style.display = 'none';\n                    }\n                    break;\n                case 'tokenValidityCheck':\n                    if (message.autoSignedOut) {\n                        // 自动退出的情况\n                        document.getElementById('apiToken').value = '';\n                        document.getElementById('tokenInfo').style.display = 'none';\n                        document.getElementById('activateSection').style.display = 'none';\n                        document.getElementById('windowsSection').style.display = 'none';\n                        isTokenValid = false;\n                        updateStatus(message.reason + '，已自动退出服务', 'warning');\n                    } else if (message.valid) {\n                        // 令牌有效，显示激活区域、滑动窗口设置和令牌信息\n                        isTokenValid = true;\n                        document.getElementById('activateSection').style.display = 'block';\n                        document.getElementById('windowsSection').style.display = 'block';\n                        if (message.tokenInfo) {\n                            document.getElementById('tokenInfoText').textContent = message.tokenInfo;\n                            document.getElementById('tokenInfo').style.display = 'block';\n                        }\n                        // 更新滑动窗口值\n                        if (message.data && message.data.windows) {\n                            document.getElementById('windowsInput').value = message.data.windows;\n                        }\n                        if (message.isLoggedIn) {\n                            updateStatus('已登录', 'success');\n                        } else {\n                            updateStatus('令牌有效，请点击激活按钮完成登录', 'success');\n                        }\n                    } else if (message.noToken) {\n                        // 没有令牌，显示初始状态\n                        updateStatus('请输入API令牌', 'warning');\n                    } else {\n                        // 令牌无效，清除输入框\n                        document.getElementById('apiToken').value = '';\n                        document.getElementById('tokenInfo').style.display = 'none';\n                        document.getElementById('activateSection').style.display = 'none';\n                        document.getElementById('windowsSection').style.display = 'none';\n                        isTokenValid = false;\n                        updateStatus('令牌已失效，请重新输入', 'warning');\n                    }\n                    break;\n                case 'loginResult':\n                    if (message.success) {\n                        updateStatus('登录成功！', 'success');\n                        // 登录成功后，激活区域保持显示\n                    } else {\n                        updateStatus('登录失败: ' + (message.error || '未知错误'), 'warning');\n                    }\n                    break;\n                case 'checkAndActivateResult':\n                    if (message.needPatch) {\n                        updateStatus(message.message || '正在修改扩展...', 'warning');\n                    } else if (message.needReload) {\n                        updateStatus(message.message || '扩展已修改，即将重新加载...', 'success');\n                    } else if (!message.success) {\n                        updateStatus(message.message || '操作失败', 'warning');\n                    }\n                    break;\n                case 'signOutResult':\n                    if (message.success) {\n                        updateStatus('已退出服务', 'success');\n                        document.getElementById('apiToken').value = '';\n                        document.getElementById('tokenInfo').style.display = 'none';\n                        document.getElementById('activateSection').style.display = 'none';\n                        document.getElementById('windowsSection').style.display = 'none';\n                        isTokenValid = false;\n                    } else {\n                        updateStatus('退出失败: ' + message.message, 'warning');\n                    }\n                    break;\n                case 'updateWindowsResult':\n                    const windowsStatus = document.getElementById('windowsStatus');\n                    if (message.success) {\n                        windowsStatus.style.display = 'block';\n                        windowsStatus.style.background = '#ecfdf5';\n                        windowsStatus.style.border = '1px solid #a7f3d0';\n                        windowsStatus.style.color = '#059669';\n                        windowsStatus.textContent = '✅ ' + message.message;\n                        // 更新输入框的值\n                        if (message.windows) {\n                            document.getElementById('windowsInput').value = message.windows;\n                        }\n                    } else {\n                        windowsStatus.style.display = 'block';\n                        windowsStatus.style.background = '#fef2f2';\n                        windowsStatus.style.border = '1px solid #fecaca';\n                        windowsStatus.style.color = '#dc2626';\n                        windowsStatus.textContent = '❌ ' + message.message;\n                    }\n                    // 3秒后隐藏状态\n                    setTimeout(() => {\n                        windowsStatus.style.display = 'none';\n                    }, 3000);\n                    break;\n            }\n        });\n        \n        function updateStatus(text, type) {\n            const status = document.getElementById('status');\n            status.textContent = text;\n            status.className = 'status status-' + type;\n        }\n\n        function loginAndVerify() {\n            const apiToken = document.getElementById('apiToken').value;\n\n            if (!apiToken) {\n                updateStatus('请先输入API令牌', 'warning');\n                return;\n            }\n\n            // 尝试激活令牌或刷新令牌状态\n            updateStatus('正在验证令牌...', 'warning');\n            vscode.postMessage({\n                command: 'activateToken',\n                apiToken: apiToken\n            });\n        }\n\n        function queryBalance() {\n            const apiToken = document.getElementById('apiToken').value;\n\n            if (!apiToken) {\n                updateStatus('请先输入API令牌', 'warning');\n                return;\n            }\n\n            // 查询令牌余额信息\n            updateStatus('正在查询余额...', 'warning');\n            vscode.postMessage({\n                command: 'queryToken',\n                apiToken: apiToken\n            });\n        }\n\n        function activateAugment() {\n            const apiToken = document.getElementById('apiToken').value;\n\n            if (!apiToken) {\n                updateStatus('请先输入并验证API令牌', 'warning');\n                return;\n            }\n\n            if (!isTokenValid) {\n                updateStatus('令牌未验证或无效，请先点击\"登录验证\"按钮', 'warning');\n                return;\n            }\n\n            // 获取令牌信息进行额外验证\n            const tokenInfoText = document.getElementById('tokenInfoText').textContent;\n\n            // 检查令牌是否过期\n            if (tokenInfoText && tokenInfoText.includes('⚠️ 令牌已过期')) {\n                updateStatus('令牌已过期，无法激活', 'warning');\n                return;\n            }\n\n            // 检查额度是否用尽\n            if (tokenInfoText && tokenInfoText.includes('⚠️ 额度已用尽')) {\n                updateStatus('额度已用尽，无法激活', 'warning');\n                return;\n            }\n\n            updateStatus('正在激活服务...', 'warning');\n            vscode.postMessage({\n                command: 'verifyAndLogin',\n                apiToken: apiToken\n            });\n        }\n\n        function reloadWindow() {\n            vscode.postMessage({ command: 'reloadWindow' });\n        }\n\n        function signOut() {\n            updateStatus('正在退出服务...', 'warning');\n            vscode.postMessage({ command: 'signOut' });\n        }\n\n        function updateWindows() {\n            const apiToken = document.getElementById('apiToken').value;\n            const windowsInput = document.getElementById('windowsInput');\n            const windows = parseInt(windowsInput.value, 10);\n\n            if (!apiToken) {\n                updateStatus('请先输入API令牌', 'warning');\n                return;\n            }\n\n            if (!isTokenValid) {\n                updateStatus('令牌未验证或无效，请先点击\"登录验证\"按钮', 'warning');\n                return;\n            }\n\n            if (isNaN(windows) || windows < 1) {\n                const windowsStatus = document.getElementById('windowsStatus');\n                windowsStatus.style.display = 'block';\n                windowsStatus.style.background = '#fef2f2';\n                windowsStatus.style.border = '1px solid #fecaca';\n                windowsStatus.style.color = '#dc2626';\n                windowsStatus.textContent = '❌ 滑动窗口值必须至少为 1';\n                return;\n            }\n\n            vscode.postMessage({\n                command: 'updateWindows',\n                apiToken: apiToken,\n                windows: windows\n            });\n        }\n    </script>\n</body>\n</html>";
  }
  dispose() {
    for (a.currentPanel = undefined, this.panel.dispose(); this.disposables.length;) {
      let _0x5403e4 = this.disposables.pop();
      _0x5403e4 && _0x5403e4.dispose();
    }
  }
};
var p;
var P;
var f;
async function be(_0x57c34d) {
  p = new L("Ymaug");
  P = new _(p);
  f = new V();
  let _0x812c2d = v();
  p.setLogLevel(_0x812c2d.logLevel);
  p.info("Ymaug 服务已初始化");
  let _0x32373a = await U();
  if (_0x32373a.needsUpdate && (await $(_0x32373a.forceUpdate, _0x32373a.minVersion), _0x32373a.forceUpdate)) {
    f.updateStatus(false, "需要更新");
    return;
  }
  u.window.showInformationMessage("Ymaug 服务已激活，点击右下角 Ymaug 按钮打开控制面板");
  ke().then(() => {
    Ie();
  });
  let _0x2ecfad = u.commands.registerCommand("ymaug.showPanel", () => {
    N.createOrShow(_0x57c34d.extensionUri, p);
  });
  let _0x357ba7 = u.commands.registerCommand("ymaug.login", async () => {
    f.setLoading("正在登录...");
    await Se();
    f.updateStatus(true, "已登录");
  });
  let _0x157d18 = u.commands.registerCommand("ymaug.patchAugment", async () => {
    if (!u.workspace.getConfiguration("ymaug").get("apiToken", "")) {
      u.window.showErrorMessage("请先激活令牌后再使用此功能");
      return;
    }
    f.setLoading("正在修改扩展...");
    let _0x53f06d = v();
    let _0x3e7f00 = _0x53f06d.enableProxy ? _0x53f06d.proxyUrl : "";
    (await P.patchAugmentExtension(_0x3e7f00)) ? (f.updateStatus(false, "扩展已修改，需重新加载"), u.window.showInformationMessage("Augment 扩展已修改，需要重新加载窗口", "重新加载").then(_0xf4d436 => {
      _0xf4d436 === "重新加载" && u.commands.executeCommand("workbench.action.reloadWindow");
    })) : (f.updateStatus(false, "修改失败"), u.window.showErrorMessage("修改 Augment 扩展失败"));
  });
  let _0x2cdaa2 = u.commands.registerCommand("ymaug.restoreAugment", async () => {
    if (!u.workspace.getConfiguration("ymaug").get("apiToken", "")) {
      u.window.showErrorMessage("请先激活令牌后再使用此功能");
      return;
    }
    f.setLoading("正在恢复扩展...");
    (await P.restoreAugmentExtension()) ? (f.updateStatus(false, "扩展已恢复"), u.window.showInformationMessage("Augment 扩展已恢复，需要重新加载窗口", "重新加载").then(_0x445fb5 => {
      _0x445fb5 === "重新加载" && u.commands.executeCommand("workbench.action.reloadWindow");
    })) : (f.updateStatus(false, "恢复失败"), u.window.showErrorMessage("恢复 Augment 扩展失败"));
  });
  let _0x235731 = j(async () => {
    let _0x1b45e6 = v();
    p.setLogLevel(_0x1b45e6.logLevel);
  });
  _0x57c34d.subscriptions.push(_0x2ecfad, _0x357ba7, _0x157d18, _0x2cdaa2, _0x235731, f);
}
async function ke() {
  for (let _0x19ecb2 = 0; _0x19ecb2 < 30; _0x19ecb2++) {
    let _0x418b8f = u.extensions.getExtension("augment-code.augment-vscode");
    if (_0x418b8f) {
      _0x418b8f.isActive || (await _0x418b8f.activate());
      return;
    }
    await new Promise(_0x24c87a => setTimeout(_0x24c87a, 1000));
  }
  p.warn("未找到 Augment 扩展");
}
async function Ie() {
  let _0x22d262 = v();
  try {
    if (!(await P.isPatched())) {
      let _0xd4ca78 = _0x22d262.enableProxy ? _0x22d262.proxyUrl : "";
      (await P.patchAugmentExtension(_0xd4ca78)) ? (p.info("扩展修改成功"), u.window.showInformationMessage("Augment 扩展已修改，需要重新加载窗口", "重新加载", "稍后").then(_0x1e8f83 => {
        _0x1e8f83 === "重新加载" && u.commands.executeCommand("workbench.action.reloadWindow");
      })) : (u.window.showErrorMessage("修改 Augment 扩展失败，请查看日志"), p.show());
    }
  } catch {
    p.error("初始设置失败");
  }
}
async function Se() {
  let _0x2ef898 = v();
  try {
    let _0x41dc92 = _0x2ef898.enableProxy ? _0x2ef898.proxyUrl : _0x2ef898.tenantUrl;
    if (!(await u.commands.getCommands()).includes("vscode-augment.directLogin")) {
      p.error("登录失败: directLogin 命令不存在");
      let _0x462239 = await u.window.showErrorMessage("Augment 扩展尚未准备好，请先点击\"修改扩展\"按钮，然后重新加载窗口", "修改扩展", "重新加载");
      _0x462239 === "修改扩展" ? await u.commands.executeCommand("ymaug.patchAugment") : _0x462239 === "重新加载" && (await u.commands.executeCommand("workbench.action.reloadWindow"));
      return;
    }
    let _0x1c8f45 = _0x41dc92.endsWith("/") ? _0x41dc92 : _0x41dc92 + "/";
    await u.commands.executeCommand("vscode-augment.directLogin", _0x2ef898.apiToken, _0x1c8f45);
    p.info("登录成功");
    u.window.showInformationMessage("已成功登录");
  } catch (_0x1310dd) {
    p.error("登录失败");
    u.window.showErrorMessage("登录失败: " + _0x1310dd.message);
  }
}
function Ee() {
  p == null || p.info("Ymaug 服务已停用");
  f == null || f.dispose();
}
0 && (module.exports = {
  activate: activate,
  deactivate: deactivate
});
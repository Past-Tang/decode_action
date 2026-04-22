//Wed Apr 22 2026 15:38:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

var wt = Object.create;
var ie = Object.defineProperty;
var _t = Object.getOwnPropertyDescriptor;
var St = Object.getOwnPropertyNames;
var Tt = Object.getPrototypeOf;
var kt = Object.prototype.hasOwnProperty;
var Ge = (_0x3d2612, _0xd4a9bc) => () => (_0x3d2612 && (_0xd4a9bc = _0x3d2612(_0x3d2612 = 0)), _0xd4a9bc);
var Je = (_0x2c1dcb, _0x825d79) => {
  for (var _0x1224f7 in _0x825d79) ie(_0x2c1dcb, _0x1224f7, {
    get: _0x825d79[_0x1224f7],
    enumerable: true
  });
};
var qe = (_0x185d1e, _0x2a1ccd, _0x266ce8, _0xcbf660) => {
  if (_0x2a1ccd && typeof _0x2a1ccd == "object" || typeof _0x2a1ccd == "function") {
    for (let _0x3283ec of St(_0x2a1ccd)) !kt.call(_0x185d1e, _0x3283ec) && _0x3283ec !== _0x266ce8 && ie(_0x185d1e, _0x3283ec, {
      get: () => _0x2a1ccd[_0x3283ec],
      enumerable: !(_0xcbf660 = _t(_0x2a1ccd, _0x3283ec)) || _0xcbf660.enumerable
    });
  }
  return _0x185d1e;
};
const a0_0x103910 = {
  value: true
};
var A = (_0x4f45b1, _0x4102d9, _0x5a07b6) => (_0x5a07b6 = _0x4f45b1 != null ? wt(Tt(_0x4f45b1)) : {}, qe(_0x4102d9 || !_0x4f45b1 || !_0x4f45b1.__esModule ? ie(_0x5a07b6, "default", {
  value: _0x4f45b1,
  enumerable: true
}) : _0x5a07b6, _0x4f45b1));
var z = _0x2c171d => qe(ie({}, "__esModule", a0_0x103910), _0x2c171d);
function ne() {
  let _0x13926d = Buffer.from(At, "hex");
  let _0x596585 = Buffer.from(Rt, "hex");
  let _0x2c4e6a = Buffer.alloc(_0x596585.length);
  for (let _0x32c1f5 = 0; _0x32c1f5 < _0x596585.length; _0x32c1f5++) {
    _0x2c4e6a[_0x32c1f5] = _0x596585[_0x32c1f5] ^ _0x13926d[_0x32c1f5 % _0x13926d.length];
  }
  return _0x2c4e6a.toString("utf8");
}
var At;
var Rt;
var Ce = Ge(() => {
  "use strict";

  At = "c5b2ec6a492de08a4c362070604b1ceeca5843b21eab856f8beaf0f7e31d31c7";
  Rt = "adc6981a3a17cfa53c55481114667d9ea37628dd7ccef60af99c9994863359a2a9c2";
});
var Q = {};
const a0_0x393eb7 = {
  JWT_KEY_CONFIGURED: () => N,
  getPublicKey: () => We,
  initPublicKey: () => re,
  verifyJwt: () => U,
  verifyResponseSignature: () => Et
};
Je(Q, a0_0x393eb7);
function Xe() {
  try {
    let _0x42133a = O.statSync(xe);
    if (Date.now() - _0x42133a.mtimeMs > Qe * 7) {
      return null;
    }
    let _0x22e871 = O.readFileSync(xe, "utf8").trim();
    if (_0x22e871.startsWith("-----BEGIN PUBLIC KEY-----")) {
      return _0x22e871;
    }
  } catch {}
  return null;
}
function xt(_0x56b954) {
  try {
    const _0x15f33c = {
      recursive: true
    };
    O.existsSync(Ie) || O.mkdirSync(Ie, _0x15f33c);
    O.writeFileSync(xe, _0x56b954, "utf8");
  } catch {}
}
function Pt() {
  return new Promise((_0x32510a, _0x38bf8c) => {
    {
      let _0x4f37f7 = ne();
      let _0x18be9c = new URL("/api/public-key", _0x4f37f7);
      let _0x84e530 = _0x18be9c.protocol === "https:";
      let _0x1ef315 = (_0x84e530 ? It : Ct).get({
        hostname: _0x18be9c.hostname,
        port: _0x18be9c.port || (_0x84e530 ? 443 : 80),
        path: _0x18be9c.pathname,
        timeout: 8000
      }, _0x5747fa => {
        {
          let _0x953e36 = [];
          _0x5747fa.on("data", _0x4fa705 => _0x953e36.push(_0x4fa705));
          _0x5747fa.on("end", () => {
            {
              try {
                let _0x90df60 = JSON.parse(Buffer.concat(_0x953e36).toString());
                _0x90df60.publicKey ? _0x32510a(_0x90df60.publicKey) : _0x38bf8c(new Error("missing publicKey field"));
              } catch {
                _0x38bf8c(new Error("invalid response"));
              }
            }
          });
        }
      });
      _0x1ef315.on("error", _0x38bf8c);
      _0x1ef315.on("timeout", () => {
        _0x1ef315.destroy();
        _0x38bf8c(new Error("timeout"));
      });
    }
  });
}
async function re() {
  if (B && Date.now() - ce < Qe) {
    return;
  }
  try {
    {
      let _0x28d680 = await Pt();
      B = _0x28d680;
      ce = Date.now();
      N = true;
      xt(_0x28d680);
      return;
    }
  } catch {}
  let _0x4542cf = Xe();
  if (_0x4542cf) {
    {
      B = _0x4542cf;
      ce = Date.now();
      N = true;
      return;
    }
  }
}
function We() {
  if (B) {
    return B;
  }
  let _0x6548b2 = Xe();
  _0x6548b2 && (B = _0x6548b2, ce = Date.now(), N = true);
  return B;
}
function Ye(_0xc80da4) {
  let _0x39dcfc = _0xc80da4.replace(/-/g, "+").replace(/_/g, "/");
  let _0x28f2cc = _0x39dcfc.length % 4;
  _0x28f2cc === 2 ? _0x39dcfc += "==" : _0x28f2cc === 3 && (_0x39dcfc += "=");
  return Buffer.from(_0x39dcfc, "base64");
}
function Et(_0x3293c6, _0x540dc4) {
  try {
    let _0x1da974 = We();
    if (!_0x1da974 || !_0x540dc4) {
      return false;
    }
    let _0xcac17d = Buffer.from(_0x540dc4, "base64");
    return H.verify("sha256", Buffer.from(_0x3293c6, "utf8"), {
      key: _0x1da974,
      padding: H.constants.RSA_PKCS1_PADDING
    }, _0xcac17d);
  } catch {
    return false;
  }
}
function U(_0x22e3ae, _0x472f2e) {
  try {
    {
      let _0x4228c7 = We();
      if (!_0x4228c7) {
        return null;
      }
      let _0x230597 = _0x22e3ae.split(".");
      if (_0x230597.length !== 3) {
        return null;
      }
      let [_0x10d5e6, _0x4daaca, _0x385fd7] = _0x230597;
      let _0x4a2de9 = _0x10d5e6 + "." + _0x4daaca;
      let _0x4044d0 = Ye(_0x385fd7);
      if (!H.verify("sha256", Buffer.from(_0x4a2de9, "utf8"), {
        key: _0x4228c7,
        padding: H.constants.RSA_PKCS1_PADDING
      }, _0x4044d0)) {
        return null;
      }
      let _0x4e2936 = JSON.parse(Ye(_0x4daaca).toString("utf8"));
      return Math.floor(Date.now() / 1000) > _0x4e2936.exp + Wt || _0x472f2e && _0x4e2936.sub !== _0x472f2e ? null : _0x4e2936;
    }
  } catch {
    return null;
  }
}
var H;
var Ct;
var It;
var O;
var Pe;
var ze;
var Ie;
var xe;
var Qe;
var B;
var ce;
var N;
var Wt;
var V = Ge(() => {
  "use strict";
  "use strict";

  H = A(require("crypto"));
  Ct = A(require("http"));
  It = A(require("https"));
  O = A(require("fs"));
  Pe = A(require("path"));
  ze = A(require("os"));
  Ce();
  Ie = Pe.join(ze.homedir(), ".cursor-loop");
  xe = Pe.join(Ie, "public-key.pem");
  Qe = 86400000;
  B = null;
  ce = 0;
  N = false;
  Wt = 60;
});
var fs = {};
const a0_0x1b7f2a = {
  activate: () => as,
  deactivate: () => ds
};
Je(fs, a0_0x1b7f2a);
module.exports = z(fs);
var y = A(require("vscode"));
var dt = A(require("net"));
var m = A(require("fs"));
var w = A(require("path"));
var q = A(require("os"));
var _e = A(require("crypto"));
var ft = A(require("http"));
var Ue = A(require("https"));
var bt = require("child_process");
var l = A(require("vscode"));
var D = A(require("fs"));
var _ = A(require("path"));
var at = A(require("crypto"));
var he = A(require("vscode"));
var S = A(require("crypto"));
var T = A(require("os"));
var C = A(require("fs"));
var F = A(require("path"));
var Dt = A(require("http"));
var Mt = A(require("https"));
Ce();
V();
var Ee = F.join(T.homedir(), ".cursor-loop");
var oe = F.join(Ee, "activation-diag.log");
var Ze = 262144;
function u(_0x21be02, _0x3af2d1, _0x396107) {
  try {
    {
      const _0x5a4325 = {
        recursive: true
      };
      C.existsSync(Ee) || C.mkdirSync(Ee, _0x5a4325);
      try {
        if (C.statSync(oe).size > Ze) {
          {
            let _0x338b1d = C.readFileSync(oe, "utf8");
            C.writeFileSync(oe, _0x338b1d.slice(-Ze / 2), "utf8");
          }
        }
      } catch {}
      let _0x59ad76 = new Date().toISOString();
      let _0x30a9e7 = _0x396107 ? " " + JSON.stringify(_0x396107) : "";
      C.appendFileSync(oe, "[" + _0x59ad76 + "] [" + _0x21be02 + "] " + _0x3af2d1 + _0x30a9e7 + "\n", "utf8");
    }
  } catch {}
}
var de = "persistentChat.lic";
var et = 3600000;
var X = 100000;
var tt = {
  trial: 600000,
  daily: 14400000,
  weekly: 43200000,
  monthly: 86400000
};
var st = {
  trial: 1200000,
  daily: 28800000,
  weekly: 172800000,
  monthly: 259200000
};
var fe = "persistentChat.lsc";
var Nt = {
  trial: "试用卡",
  daily: "天卡",
  weekly: "周卡",
  monthly: "月卡"
};
var Ot = /^PCHAT-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/;
var be = "persistentChat.jwt";
var le = "persistentChat.ds";
var M = class n {
  constructor(_0x7bbfdd, _0x34533a) {
    this.context = _0x7bbfdd;
    this.apiBase = _0x34533a || ne();
    n._instance = this;
    this._lsc = _0x7bbfdd.globalState.get(fe) || 0;
    this.loadDSalt();
    this.loadFromStorage();
    this.loadToken();
    re().catch(() => {});
  }
  static _instance = null;
  license = null;
  _activated = false;
  _cachedToken = null;
  apiBase;
  _lsc = 0;
  _dSalt = null;
  static getInstance() {
    return n._instance;
  }
  _deviceId = null;
  _deviceComponents = null;
  getDeviceId() {
    if (this._deviceId) {
      return this._deviceId;
    }
    let _0x4e46fa = this.getDeviceComponents();
    let _0xac93f0 = [_0x4e46fa.platformUuid, _0x4e46fa.cpuModel, _0x4e46fa.cpuCount, _0x4e46fa.totalMem].join("|");
    this._deviceId = S.createHash("sha256").update("pchat:v2:" + _0xac93f0).digest("hex").slice(0, 32);
    return this._deviceId;
  }
  getDeviceComponents() {
    if (this._deviceComponents) {
      return this._deviceComponents;
    }
    let _0x174ca8 = this.getPlatformUuid();
    let _0x58bf1c = T.cpus()[0]?.["model"] || "";
    let _0x4e2f7c = T.cpus().length.toString();
    let _0x299be7 = T.totalmem().toString();
    let _0x5ca912 = T.hostname();
    let _0x45a25d = T.platform() + T.arch();
    let _0x34992e = this.getPhysicalMacs().join(",");
    this._deviceComponents = {
      platformUuid: this.hashComponent(_0x174ca8),
      cpuModel: this.hashComponent(_0x58bf1c),
      cpuCount: this.hashComponent(_0x4e2f7c),
      totalMem: this.hashComponent(_0x299be7),
      hostname: this.hashComponent(_0x5ca912),
      platform: this.hashComponent(_0x45a25d),
      macList: this.hashComponent(_0x34992e)
    };
    return this._deviceComponents;
  }
  hashComponent(_0x116349) {
    return _0x116349 ? S.createHash("sha256").update("pchat:v2:" + _0x116349.trim().toLowerCase()).digest("hex").slice(0, 16) : "";
  }
  getPlatformUuid() {
    let _0x51401d = F.join(T.homedir(), ".cursor-loop", "platform-uuid");
    try {
      {
        let _0x3092a6 = C.readFileSync(_0x51401d, "utf8").trim();
        if (_0x3092a6.length >= 8) {
          return _0x3092a6;
        }
      }
    } catch {}
    let _0x2803ae = "";
    try {
      let {
        execFileSync: _0x63026
      } = require("child_process");
      switch (T.platform()) {
        case "darwin":
          {
            _0x2803ae = _0x63026("ioreg", ["-d2", "-c", "IOPlatformExpertDevice"], {
              timeout: 3000,
              encoding: "utf8"
            }).match(/IOPlatformUUID"\s*=\s*"([^"]+)"/)?.[1] || "";
            break;
          }
        case "win32":
          {
            {
              const _0x34d61a = {
                timeout: 3000,
                encoding: "utf8"
              };
              _0x2803ae = _0x63026("reg", ["query", "HKLM\\SOFTWARE\\Microsoft\\Cryptography", "/v", "MachineGuid"], _0x34d61a).match(/MachineGuid\s+REG_SZ\s+(\S+)/)?.[1] || "";
              break;
            }
          }
        default:
          {
            let _0x51ddea = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
            for (let _0x4b884c of _0x51ddea) try {
              _0x2803ae = C.readFileSync(_0x4b884c, "utf8").trim();
              break;
            } catch {}
          }
      }
    } catch {}
    if (_0x2803ae) {
      try {
        let _0x2a4d78 = F.join(T.homedir(), ".cursor-loop");
        const _0x1bab7f = {
          recursive: true
        };
        C.existsSync(_0x2a4d78) || C.mkdirSync(_0x2a4d78, _0x1bab7f);
        C.writeFileSync(_0x51401d, _0x2803ae, "utf8");
      } catch {}
    }
    return _0x2803ae;
  }
  getPhysicalMacs() {
    let _0x1605ea = T.networkInterfaces();
    let _0x3cd7e8 = [];
    for (let [_0x2de8de, _0xb538ed] of Object.entries(_0x1605ea)) if (!(!_0xb538ed || /^(lo|veth|docker|br-|vmnet|vbox)/i.test(_0x2de8de))) {
      for (let _0x121a70 of _0xb538ed) !_0x121a70.internal && _0x121a70.mac && _0x121a70.mac !== "00:00:00:00:00:00" && _0x3cd7e8.push(_0x121a70.mac);
    }
    return [...new Set(_0x3cd7e8)].sort();
  }
  isActivated() {
    return !this._activated || !this.license ? false : this.license.expiresAt > 0 && Date.now() > this.license.expiresAt ? (this._activated = false, false) : true;
  }
  hasValidToken() {
    return !this.isActivated() || this._isOffline() ? false : N ? !!(this._cachedToken && U(this._cachedToken, this.getDeviceId()) || this.reloadTokenFromStorage() || this._isWithinJwtGrace(true)) : true;
  }
  _vs() {
    return !this._activated || !this.license || this.license.expiresAt > 0 && Date.now() > this.license.expiresAt || this._isOffline() || N && !(this._cachedToken && U(this._cachedToken, this.getDeviceId()) || this.reloadTokenFromStorage() || this._isWithinJwtGrace()) ? 0 : this._lsc >> 8 | 1;
  }
  static JWT_GRACE_MS = 86400000;
  static GRACE_REQUEST_LIMIT = 500;
  _graceRequests = 0;
  refreshLsc() {
    let _0x55969b = this.context.globalState.get(fe);
    _0x55969b && _0x55969b > this._lsc && (this._lsc = _0x55969b);
  }
  _isOffline() {
    if (!this.license) {
      return true;
    }
    this.refreshLsc();
    let _0x38d5e0 = st[this.license.plan] || st.monthly;
    let _0x2631eb = this._lsc || this.license.lastVerified;
    return _0x2631eb > 0 && Date.now() - _0x2631eb > _0x38d5e0;
  }
  _checkJwtGrace() {
    if (!this.license || this.license.expiresAt > 0 && Date.now() > this.license.expiresAt) {
      return false;
    }
    this.refreshLsc();
    let _0x3de4d3 = this._lsc || this.license.lastVerified;
    return _0x3de4d3 <= 0 || _0x3de4d3 > Date.now() ? false : Date.now() - _0x3de4d3 < n.JWT_GRACE_MS;
  }
  _isWithinJwtGrace(_0x291d2b = false) {
    return this._checkJwtGrace() ? _0x291d2b && (this._graceRequests++, this._graceRequests > n.GRACE_REQUEST_LIMIT) ? (u("GRACE", "request limit exceeded", {
      requests: this._graceRequests
    }), false) : true : false;
  }
  isInGraceMode() {
    return !this._activated || !this.license || !N || this._cachedToken && U(this._cachedToken, this.getDeviceId()) ? false : this._checkJwtGrace();
  }
  getGraceRemaining() {
    if (!this.license) {
      return "";
    }
    this.refreshLsc();
    let _0x2cfbf3 = this._lsc || this.license.lastVerified;
    if (_0x2cfbf3 <= 0) {
      return "";
    }
    let _0x37de0e = n.JWT_GRACE_MS - (Date.now() - _0x2cfbf3);
    if (_0x37de0e <= 0) {
      return "已到期";
    }
    let _0x24a4d3 = Math.floor(_0x37de0e / 3600000);
    let _0xfd0726 = Math.floor(_0x37de0e % 3600000 / 60000);
    return _0x24a4d3 + "小时" + _0xfd0726 + "分钟";
  }
  _touchServer() {
    this._lsc = Date.now();
    this._graceRequests = 0;
    this.context.globalState.update(fe, this._lsc);
  }
  updateToken(_0x36a252) {
    U(_0x36a252, this.getDeviceId()) && (this._cachedToken = _0x36a252, this.saveToken());
  }
  loadToken() {
    let _0x1a1375 = this.context.globalState.get(be);
    if (!_0x1a1375) {
      {
        u("TOKEN", "no token in globalState");
        return;
      }
    }
    let _0x240379 = this.decrypt(_0x1a1375);
    let _0xba8cfb = false;
    if (_0x240379 || (_0x240379 = this.decrypt(_0x1a1375, this.deriveKeyBase()), _0x240379 && (_0xba8cfb = true, u("TOKEN", "migrated from base key to salted key"))), !_0x240379) {
      let _0x206bbd = this.getFileSeed();
      _0x206bbd && _0x206bbd !== this.getEncSeed() && (_0x240379 = this.decrypt(_0x1a1375, this.deriveKeyFromSeed(_0x206bbd)), _0x240379 && (_0xba8cfb = true, u("TOKEN", "migrated from file seed")));
    }
    if (!_0x240379) {
      if (_0x240379 = this.decrypt(_0x1a1375, this.deriveKeyFromMachineId()), _0x240379) {
        _0xba8cfb = true;
        u("TOKEN", "migrated from machineId key");
      } else {
        u("TOKEN", "FAIL:decrypt token failed");
        return;
      }
    }
    let _0x1a77be = U(_0x240379, this.getDeviceId());
    const _0x29491f = {
      jwtConfigured: N
    };
    _0x1a77be ? (this._cachedToken = _0x240379, _0xba8cfb && this.saveToken(), u("TOKEN", "OK:loaded", {
      exp: _0x1a77be.exp,
      plan: _0x1a77be.plan
    })) : u("TOKEN", "FAIL:jwt verify failed", _0x29491f);
  }
  saveToken() {
    this._cachedToken && this.context.globalState.update(be, this.encrypt(this._cachedToken));
  }
  clearToken() {
    this._cachedToken = null;
    this.context.globalState.update(be, undefined);
  }
  _lastReloadAt = 0;
  reloadTokenFromStorage() {
    if (Date.now() - this._lastReloadAt < 5000) {
      return false;
    }
    this._lastReloadAt = Date.now();
    let _0x7319d5 = this.context.globalState.get(be);
    if (!_0x7319d5) {
      return false;
    }
    let _0x190ce6 = this.decrypt(_0x7319d5);
    if (!_0x190ce6) {
      return false;
    }
    let _0x126737 = U(_0x190ce6, this.getDeviceId());
    return _0x126737 ? (this._cachedToken = _0x190ce6, u("TOKEN", "reloaded from globalState", {
      exp: _0x126737.exp,
      plan: _0x126737.plan
    }), true) : false;
  }
  _lastEnsureAttempt = 0;
  async ensureTokenValid(_0x47eb7a) {
    if (!_0x47eb7a && this.hasValidToken()) {
      return true;
    }
    if (!this._activated || !this.license || Date.now() - this._lastEnsureAttempt < 30000) {
      return false;
    }
    this._lastEnsureAttempt = Date.now();
    u("ENSURE", "attempting immediate verify");
    try {
      {
        let _0x698315 = await this.apiPostAuto("/api/verify", {
          key: this.license.key,
          deviceId: this.getDeviceId(),
          hostname: T.hostname(),
          platform: T.platform(),
          appVersion: this.context.extension?.["packageJSON"]?.["version"] || "unknown"
        });
        if (_0x698315.valid) {
          {
            if (N && _0x698315._sig) {
              let _0x26c143 = (V(), z(Q)).getPublicKey();
              if (_0x26c143) {
                {
                  const _0x2fc0ec = {
                    valid: true,
                    plan: _0x698315.plan,
                    expiresAt: _0x698315.expiresAt
                  };
                  let _0x1934d3 = JSON.stringify(_0x2fc0ec);
                  if (!S.verify("sha256", Buffer.from(_0x1934d3), {
                    key: _0x26c143,
                    padding: S.constants.RSA_PKCS1_PADDING
                  }, Buffer.from(_0x698315._sig, "base64"))) {
                    u("ENSURE", "FAIL:response signature invalid");
                    return false;
                  }
                }
              }
            }
            this.license.lastVerified = Date.now();
            _0x698315.expiresAt && (this.license.expiresAt = _0x698315.expiresAt);
            this._activated = true;
            this._touchServer();
            _0x698315.dSalt && this.updateDSalt(_0x698315.dSalt);
            this.saveToStorage();
            _0x698315.token && this.updateToken(_0x698315.token);
            u("ENSURE", "OK:recovered", {
              plan: _0x698315.plan,
              expiresAt: _0x698315.expiresAt
            });
            return this.hasValidToken();
          }
        }
        const _0x584078 = {
          error: _0x698315.error
        };
        u("ENSURE", "FAIL:API invalid", _0x584078);
        _0x47eb7a && (this._activated = false, this.clearToken(), (_0x698315.error === "key_disabled" || _0x698315.error === "key_expired") && (this.license = null, this.clearStorage()));
      }
    } catch (_0x33575a) {
      u("ENSURE", "FAIL:API error", {
        error: String(_0x33575a)
      });
    }
    return false;
  }
  getLicenseInfo() {
    return this.license;
  }
  getPlanLabel() {
    return this.license ? Nt[this.license.plan] || this.license.plan : "";
  }
  getTimeRemaining() {
    return !this.license || this.license.expiresAt <= 0 ? 0 : Math.max(0, this.license.expiresAt - Date.now());
  }
  formatTimeRemaining() {
    let _0x4e3135 = this.getTimeRemaining();
    if (_0x4e3135 <= 0) {
      return "已到期";
    }
    let _0x3b70e8 = Math.floor(_0x4e3135 / 3600000);
    let _0x5669b7 = Math.floor(_0x4e3135 % 3600000 / 60000);
    return _0x3b70e8 >= 24 ? Math.floor(_0x3b70e8 / 24) + "天" + _0x3b70e8 % 24 + "小时" : _0x3b70e8 + "小时" + _0x5669b7 + "分钟";
  }
  static validateKeyFormat(_0x21a009) {
    return Ot.test(_0x21a009.trim().toUpperCase());
  }
  async activate(_0x5f2c41) {
    let _0x422c5a = _0x5f2c41.trim().toUpperCase();
    const _0x4773fc = {
      success: false,
      error: "卡密格式无效，请检查后重试"
    };
    if (!n.validateKeyFormat(_0x422c5a)) {
      return _0x4773fc;
    }
    let _0x1cfd67 = this.getDeviceId();
    let _0x3a6005 = {
      key: _0x422c5a,
      deviceId: _0x1cfd67,
      hostname: T.hostname(),
      platform: T.platform(),
      appVersion: this.context.extension?.["packageJSON"]?.["version"] || "unknown",
      components: this.getDeviceComponents()
    };
    let _0x40a916 = this._dSalt;
    try {
      {
        if (this.license && this.license.key !== _0x422c5a) {
          try {
            await this.apiPost("/api/deactivate", {
              key: this.license.key,
              deviceId: this.getDeviceId()
            });
          } catch {}
        }
        this._dSalt = null;
        this._derivedKeyWithSalt = null;
        let _0x5acff1 = await this.apiPost("/api/activate", _0x3a6005);
        const _0x3753f9 = {
          invalid_key: "卡密无效或不存在",
          key_disabled: "该卡密已被禁用",
          key_expired: "该卡密已过期",
          device_limit_exceeded: "设备数量已达上限，请先解绑其他设备",
          trial_limit_exceeded: "该设备已使用过试用卡，每台设备仅限一次试用"
        };
        if (!_0x5acff1.success) {
          _0x40a916 && (this._dSalt = _0x40a916, this._derivedKeyWithSalt = null);
          return {
            success: false,
            error: _0x3753f9[_0x5acff1.error] || _0x5acff1.message || "激活失败"
          };
        }
        if (N && _0x5acff1._sig) {
          let _0x555f68 = (V(), z(Q)).getPublicKey();
          if (_0x555f68) {
            const _0x884808 = {
              success: true,
              plan: _0x5acff1.plan,
              expiresAt: _0x5acff1.expiresAt
            };
            let _0x463358 = JSON.stringify(_0x884808);
            const _0x32e5f3 = {
              success: false,
              error: "服务器响应验证失败"
            };
            if (!S.verify("sha256", Buffer.from(_0x463358), {
              key: _0x555f68,
              padding: S.constants.RSA_PKCS1_PADDING
            }, Buffer.from(_0x5acff1._sig, "base64"))) {
              u("ACTIVATE", "FAIL:response signature invalid");
              return _0x32e5f3;
            }
          }
        }
        this.license = {
          key: _0x422c5a,
          plan: _0x5acff1.plan,
          expiresAt: _0x5acff1.expiresAt,
          deviceId: _0x1cfd67,
          activatedAt: Date.now(),
          lastVerified: Date.now()
        };
        this._activated = true;
        this._touchServer();
        _0x5acff1.dSalt && this.updateDSalt(_0x5acff1.dSalt);
        this.saveToStorage();
        _0x5acff1.token && this.updateToken(_0x5acff1.token);
        u("ACTIVATE", "OK", {
          plan: _0x5acff1.plan,
          expiresAt: _0x5acff1.expiresAt,
          keyPrefix: _0x422c5a.slice(0, 10),
          hasDSalt: !!_0x5acff1.dSalt,
          sigVerified: !!_0x5acff1._sig
        });
        return {
          success: true,
          plan: _0x5acff1.plan,
          expiresAt: _0x5acff1.expiresAt,
          deviceLimit: _0x5acff1.deviceLimit,
          devicesUsed: _0x5acff1.devicesUsed
        };
      }
    } catch {
      const _0x3088af = {
        success: false,
        error: "无法连接到激活服务器，请检查网络"
      };
      _0x40a916 && (this._dSalt = _0x40a916, this._derivedKeyWithSalt = null);
      return _0x3088af;
    }
  }
  async verifyOnStartup() {
    if (await re().catch(() => {}), !this.license) {
      u("VERIFY", "FAIL:no license loaded");
      this._activated = false;
      return;
    }
    if (this.license.expiresAt > 0 && Date.now() > this.license.expiresAt) {
      u("VERIFY", "FAIL:license expired", {
        expiresAt: this.license.expiresAt,
        now: Date.now(),
        expiredAgo: Date.now() - this.license.expiresAt
      });
      this._activated = false;
      return;
    }
    let _0x3bbcb = Date.now() - this.license.lastVerified;
    let _0x494bae = tt[this.license.plan] || tt.monthly;
    if (_0x3bbcb < _0x494bae && this.hasValidToken()) {
      const _0x4693dc = {
        sinceLastVerify: _0x3bbcb,
        verifyInterval: _0x494bae
      };
      u("VERIFY", "OK:within interval, token valid", _0x4693dc);
      this._activated = true;
      return;
    }
    u("VERIFY", "calling API", {
      sinceLastVerify: _0x3bbcb,
      verifyInterval: _0x494bae,
      hasToken: this.hasValidToken()
    });
    try {
      {
        let _0x27e720 = {
          key: this.license.key,
          deviceId: this.getDeviceId(),
          hostname: T.hostname(),
          platform: T.platform(),
          appVersion: this.context.extension?.["packageJSON"]?.["version"] || "unknown"
        };
        let _0x18e0e9 = await this.apiPostAuto("/api/verify", _0x27e720);
        if (_0x18e0e9.valid) {
          {
            if (N && _0x18e0e9._sig) {
              {
                let _0x28f0cf = (V(), z(Q)).getPublicKey();
                if (_0x28f0cf) {
                  const _0x3f8e05 = {
                    valid: true,
                    plan: _0x18e0e9.plan,
                    expiresAt: _0x18e0e9.expiresAt
                  };
                  let _0x5e53b2 = JSON.stringify(_0x3f8e05);
                  if (!S.verify("sha256", Buffer.from(_0x5e53b2), {
                    key: _0x28f0cf,
                    padding: S.constants.RSA_PKCS1_PADDING
                  }, Buffer.from(_0x18e0e9._sig, "base64"))) {
                    {
                      u("VERIFY", "FAIL:response signature invalid");
                      this._activated = false;
                      return;
                    }
                  }
                }
              }
            }
            this.license.lastVerified = Date.now();
            _0x18e0e9.expiresAt && (this.license.expiresAt = _0x18e0e9.expiresAt);
            this._activated = true;
            this._touchServer();
            _0x18e0e9.dSalt && this.updateDSalt(_0x18e0e9.dSalt);
            this.saveToStorage();
            _0x18e0e9.token && this.updateToken(_0x18e0e9.token);
            u("VERIFY", "OK:API valid", {
              plan: _0x18e0e9.plan,
              expiresAt: _0x18e0e9.expiresAt,
              sigVerified: !!_0x18e0e9._sig
            });
          }
        } else {
          this._activated = false;
          this.clearToken();
          u("VERIFY", "FAIL:API invalid", {
            error: _0x18e0e9.error,
            message: _0x18e0e9.message
          });
          _0x18e0e9.error === "key_disabled" && (this.license = null, this.clearStorage());
        }
      }
    } catch (_0x4363f5) {
      u("VERIFY", "FAIL:API error", {
        error: String(_0x4363f5),
        sinceLastVerify: _0x3bbcb,
        gracePeriod: et
      });
      _0x3bbcb < et ? this._activated = true : this._activated = false;
    }
  }
  getExpiryReminderMs() {
    if (!this.license || !this.isActivated()) {
      return null;
    }
    let _0x4fcbe0 = this.getTimeRemaining();
    if (_0x4fcbe0 <= 0) {
      return null;
    }
    let _0x58c347 = this.license.plan;
    let _0x33f9b2 = {
      trial: 600000,
      daily: 600000,
      weekly: 86400000,
      monthly: 259200000
    }[_0x58c347] || 600000;
    return _0x4fcbe0 <= _0x33f9b2 ? _0x4fcbe0 : null;
  }
  _derivedKey = null;
  _derivedKeyWithSalt = null;
  _encSeed = null;
  static ENC_SEED_GS_KEY = "persistentChat.encSeed";
  getEncSeed() {
    if (this._encSeed) {
      return this._encSeed;
    }
    let _0x42b8ad = F.join(T.homedir(), ".cursor-loop", "enc-seed");
    let _0x54f869 = this.context.globalState.get(n.ENC_SEED_GS_KEY);
    if (_0x54f869 && _0x54f869.length >= 32) {
      this._encSeed = _0x54f869;
      this.syncSeedToFile(_0x42b8ad, _0x54f869);
      return _0x54f869;
    }
    try {
      let _0x3f9124 = C.readFileSync(_0x42b8ad, "utf8").trim();
      if (_0x3f9124.length >= 32) {
        this._encSeed = _0x3f9124;
        this.context.globalState.update(n.ENC_SEED_GS_KEY, _0x3f9124);
        u("ENC_SEED", "migrated file seed to globalState");
        return _0x3f9124;
      }
    } catch {}
    let _0x3e720b = S.randomBytes(32).toString("hex");
    this._encSeed = _0x3e720b;
    this.context.globalState.update(n.ENC_SEED_GS_KEY, _0x3e720b);
    this.syncSeedToFile(_0x42b8ad, _0x3e720b);
    u("ENC_SEED", "generated new seed");
    return _0x3e720b;
  }
  getFileSeed() {
    try {
      let _0x9134cb = F.join(T.homedir(), ".cursor-loop", "enc-seed");
      let _0x41a9bd = C.readFileSync(_0x9134cb, "utf8").trim();
      return _0x41a9bd.length >= 32 ? _0x41a9bd : null;
    } catch {
      {
        return null;
      }
    }
  }
  syncSeedToFile(_0x240bd2, _0x5bb5e5) {
    try {
      let _0x4b198c = F.dirname(_0x240bd2);
      const _0x5b954e = {
        recursive: true
      };
      C.existsSync(_0x4b198c) || C.mkdirSync(_0x4b198c, _0x5b954e);
      C.writeFileSync(_0x240bd2, _0x5bb5e5, "utf8");
    } catch {}
  }
  adoptSeed(_0x34f6d4) {
    this._encSeed = _0x34f6d4;
    this._derivedKey = null;
    this._derivedKeyWithSalt = null;
    this.context.globalState.update(n.ENC_SEED_GS_KEY, _0x34f6d4);
    this.syncSeedToFile(F.join(T.homedir(), ".cursor-loop", "enc-seed"), _0x34f6d4);
  }
  deriveKey() {
    return this._dSalt ? this._derivedKeyWithSalt ? this._derivedKeyWithSalt : (this._derivedKeyWithSalt = S.pbkdf2Sync(this.getEncSeed() + this._dSalt, "pchat-salt-v1", X, 32, "sha256"), this._derivedKeyWithSalt) : this._derivedKey ? this._derivedKey : (this._derivedKey = S.pbkdf2Sync(this.getEncSeed(), "pchat-salt-v1", X, 32, "sha256"), this._derivedKey);
  }
  deriveKeyBase() {
    return this._derivedKey ? this._derivedKey : (this._derivedKey = S.pbkdf2Sync(this.getEncSeed(), "pchat-salt-v1", X, 32, "sha256"), this._derivedKey);
  }
  deriveKeyFromMachineId() {
    return S.pbkdf2Sync(he.env.machineId, "pchat-salt-v1", X, 32, "sha256");
  }
  deriveKeyFromSeed(_0x47c155) {
    return S.pbkdf2Sync(_0x47c155, "pchat-salt-v1", X, 32, "sha256");
  }
  loadDSalt() {
    let _0x1ab5cc = this.context.globalState.get(le);
    if (!_0x1ab5cc) {
      return;
    }
    let _0x37f374 = this.deriveKeyBase();
    if (this._dSalt = this.decrypt(_0x1ab5cc, _0x37f374), this._dSalt) {
      u("DSALT", "OK:loaded");
      return;
    }
    let _0x34f77b = this.getFileSeed();
    _0x34f77b && _0x34f77b !== this.getEncSeed() && (this._dSalt = this.decrypt(_0x1ab5cc, this.deriveKeyFromSeed(_0x34f77b)), this._dSalt && (u("DSALT", "OK:recovered from file seed"), this.saveDSalt()));
  }
  saveDSalt() {
    if (!this._dSalt) {
      return;
    }
    let _0x3476f9 = this.deriveKeyBase();
    this.context.globalState.update(le, this.encryptWith(this._dSalt, _0x3476f9));
  }
  updateDSalt(_0x3c58b9) {
    if (!_0x3c58b9 || _0x3c58b9 === this._dSalt || this._dSaltCooldownUntil > Date.now()) {
      return;
    }
    let _0x23364d = this._dSalt !== null && this._dSalt !== _0x3c58b9;
    this._dSalt = _0x3c58b9;
    this._derivedKeyWithSalt = null;
    this.saveDSalt();
    _0x23364d && this.license && (this.saveToStorage(), this.saveToken(), u("DSALT", "re-encrypted with new salt"));
  }
  encryptWith(_0x117e4e, _0x5dfbd7) {
    let _0x416786 = S.randomBytes(16);
    let _0x5fbeec = S.createCipheriv("aes-256-cbc", _0x5dfbd7, _0x416786);
    let _0x2c0b7f = Buffer.concat([_0x5fbeec.update(_0x117e4e, "utf8"), _0x5fbeec.final()]);
    return _0x416786.toString("hex") + ":" + _0x2c0b7f.toString("hex");
  }
  encrypt(_0x49ee4f) {
    let _0x153d96 = this.deriveKey();
    let _0x1f5c69 = S.randomBytes(16);
    let _0x24c096 = S.createCipheriv("aes-256-cbc", _0x153d96, _0x1f5c69);
    let _0x5144c7 = Buffer.concat([_0x24c096.update(_0x49ee4f, "utf8"), _0x24c096.final()]);
    return _0x1f5c69.toString("hex") + ":" + _0x5144c7.toString("hex");
  }
  decrypt(_0x29dd43, _0x119a4e) {
    try {
      {
        let [_0x20ecd5, _0x574484] = _0x29dd43.split(":");
        if (!_0x20ecd5 || !_0x574484) {
          return null;
        }
        let _0x30a07e = _0x119a4e || this.deriveKey();
        let _0xa6976 = S.createDecipheriv("aes-256-cbc", _0x30a07e, Buffer.from(_0x20ecd5, "hex"));
        return Buffer.concat([_0xa6976.update(Buffer.from(_0x574484, "hex")), _0xa6976.final()]).toString("utf8");
      }
    } catch {
      {
        return null;
      }
    }
  }
  loadFromStorage() {
    let _0x1c6b10 = this.context.globalState.get(de);
    if (!_0x1c6b10) {
      const _0x1341c6 = {
        key: de
      };
      u("LOAD", "FAIL:globalState empty", _0x1341c6);
      return;
    }
    const _0x2b1413 = {
      len: _0x1c6b10.length
    };
    u("LOAD", "globalState has data", _0x2b1413);
    let _0x44d6c0 = this.decrypt(_0x1c6b10);
    let _0x455faa = false;
    if (_0x44d6c0 || (_0x44d6c0 = this.decrypt(_0x1c6b10, this.deriveKeyBase()), _0x44d6c0 && (_0x455faa = true, u("LOAD", "migrated from base key to salted key"))), !_0x44d6c0) {
      {
        let _0x5f0dcc = this.getFileSeed();
        if (_0x5f0dcc && _0x5f0dcc !== this.getEncSeed()) {
          {
            let _0x4b0fae = this.deriveKeyFromSeed(_0x5f0dcc);
            _0x44d6c0 = this.decrypt(_0x1c6b10, _0x4b0fae);
            _0x44d6c0 && (_0x455faa = true, this.adoptSeed(_0x5f0dcc), u("LOAD", "migrated from file seed"));
          }
        }
      }
    }
    if (!_0x44d6c0) {
      if (_0x44d6c0 = this.decrypt(_0x1c6b10, this.deriveKeyFromMachineId()), _0x44d6c0) {
        _0x455faa = true;
        u("LOAD", "migrated from machineId key");
      } else {
        {
          u("LOAD", "FAIL:decrypt returned null", {
            rawPrefix: _0x1c6b10.slice(0, 20),
            machineIdHash: S.createHash("md5").update(he.env.machineId).digest("hex").slice(0, 8)
          });
          return;
        }
      }
    }
    try {
      let _0xe13bdb = JSON.parse(_0x44d6c0);
      if (!_0xe13bdb.key) {
        u("LOAD", "FAIL:no key in decrypted data");
        return;
      }
      let _0x4c76c7 = this.getDeviceId();
      _0xe13bdb.deviceId !== _0x4c76c7 && (u("LOAD", "deviceId changed, updating", {
        old: _0xe13bdb.deviceId.slice(0, 8),
        new: _0x4c76c7.slice(0, 8)
      }), _0xe13bdb.deviceId = _0x4c76c7);
      this.license = _0xe13bdb;
      this._activated = _0xe13bdb.expiresAt <= 0 || Date.now() < _0xe13bdb.expiresAt;
      _0x455faa && this.saveToStorage();
      u("LOAD", "OK", {
        plan: _0xe13bdb.plan,
        activated: this._activated,
        expiresAt: _0xe13bdb.expiresAt,
        lastVerified: _0xe13bdb.lastVerified,
        keyPrefix: _0xe13bdb.key.slice(0, 10),
        sinceLastVerify: Date.now() - _0xe13bdb.lastVerified
      });
    } catch (_0x457ade) {
      u("LOAD", "FAIL:parse error", {
        error: String(_0x457ade)
      });
    }
  }
  saveToStorage() {
    if (!this.license) {
      return;
    }
    let _0x531226 = JSON.stringify(this.license);
    this.context.globalState.update(de, this.encrypt(_0x531226));
    u("SAVE", "saved to globalState", {
      machineIdHash: S.createHash("md5").update(he.env.machineId).digest("hex").slice(0, 8)
    });
  }
  clearStorage() {
    this.context.globalState.update(de, undefined);
  }
  async deactivateKey() {
    const _0x1e509c = {
      success: false,
      error: "没有已激活的卡密"
    };
    if (!this.license) {
      return _0x1e509c;
    }
    let _0x3f78da = false;
    try {
      let _0x15e6f6 = await this.apiPost("/api/deactivate", {
        key: this.license.key,
        deviceId: this.getDeviceId()
      });
      _0x3f78da = !!_0x15e6f6?.["success"];
      u("DEACTIVATE", _0x3f78da ? "OK:server confirmed" : "WARN:server rejected", {
        deactivated: _0x15e6f6?.["deactivated"]
      });
    } catch (_0x2d3207) {
      u("DEACTIVATE", "WARN:server unreachable", {
        error: String(_0x2d3207)
      });
    }
    const _0x4e0582 = {
      success: true,
      error: _0x3f78da ? undefined : "本地已解绑，但服务端同步失败（可能需要管理员手动处理）"
    };
    this._activated = false;
    this.license = null;
    this.clearStorage();
    this.clearToken();
    this._dSalt = null;
    this._derivedKeyWithSalt = null;
    this.context.globalState.update(le, undefined);
    this._lsc = 0;
    this.context.globalState.update(fe, undefined);
    return _0x4e0582;
  }
  async renew(_0x345852, _0x416cd4, _0x4aed96) {
    if (!this.license || !this._activated) {
      u("HEARTBEAT", "SKIP:not activated");
      return {
        text: "__TIMEOUT_RENEW__"
      };
    }
    try {
      let _0x42a318 = {
        key: this.license.key,
        deviceId: this.getDeviceId(),
        seq: _0x345852,
        hostname: T.hostname(),
        platform: T.platform(),
        appVersion: this.context.extension?.["packageJSON"]?.["version"] || "unknown",
        selfHash: this.getSelfHash()
      };
      _0x416cd4 && (_0x42a318.usage = _0x416cd4);
      _0x4aed96 && (_0x42a318.renewalTextsVer = _0x4aed96);
      let _0x248ce5 = await this.apiPostAuto("/api/renew", _0x42a318);
      if (_0x248ce5.error) {
        u("HEARTBEAT", "FAIL:server error", {
          error: _0x248ce5.error,
          message: _0x248ce5.message
        });
        (_0x248ce5.error === "expired" || _0x248ce5.error === "invalid_activation") && (this._activated = false, this.clearToken());
        return {
          text: "__TIMEOUT_RENEW__"
        };
      }
      if (N && _0x248ce5._sig && this.license) {
        {
          let _0x5d3c39 = (V(), z(Q)).getPublicKey();
          if (_0x5d3c39) {
            const _0xa850db = {
              text: _0x248ce5.text,
              plan: this.license.plan,
              expiresAt: this.license.expiresAt
            };
            let _0xa1c6c4 = JSON.stringify(_0xa850db);
            const _0x21bc73 = {
              localPlan: this.license.plan,
              localExpires: this.license.expiresAt
            };
            S.verify("sha256", Buffer.from(_0xa1c6c4), {
              key: _0x5d3c39,
              padding: S.constants.RSA_PKCS1_PADDING
            }, Buffer.from(_0x248ce5._sig, "base64")) || u("HEARTBEAT", "WARN:response sig mismatch, plan/expiresAt may have changed server-side", _0x21bc73);
          }
        }
      }
      this.license.lastVerified = Date.now();
      this._touchServer();
      _0x248ce5.dSalt && this.updateDSalt(_0x248ce5.dSalt);
      this.saveToStorage();
      _0x248ce5.token && this.updateToken(_0x248ce5.token);
      u("HEARTBEAT", "OK", {
        seq: _0x345852,
        nextInterval: _0x248ce5.nextInterval
      });
      return _0x248ce5;
    } catch (_0x24e74e) {
      u("HEARTBEAT", "FAIL:exception", {
        error: String(_0x24e74e)
      });
      return {
        text: "__TIMEOUT_RENEW__"
      };
    }
  }
  async applyRenewal(_0x5a9a30) {
    const _0x32e66f = {
      success: false,
      error: "未激活，请先激活主卡密"
    };
    if (!this.license) {
      return _0x32e66f;
    }
    let _0x57ae4a = _0x5a9a30.trim().toUpperCase();
    const _0x40a815 = {
      success: false,
      error: "续费卡密格式无效，请检查后重试"
    };
    if (!n.validateKeyFormat(_0x57ae4a)) {
      return _0x40a815;
    }
    const _0x4a445a = {
      success: false,
      error: "续费卡密不能与当前激活的卡密相同"
    };
    if (_0x57ae4a === this.license.key) {
      return _0x4a445a;
    }
    try {
      let _0x2c3ecb = await this.apiPostAuto("/api/apply-renewal", {
        key: this.license.key,
        renewalKey: _0x57ae4a,
        deviceId: this.getDeviceId()
      });
      return _0x2c3ecb.success ? (_0x2c3ecb.newExpiresAt && (this.license.expiresAt = _0x2c3ecb.newExpiresAt), _0x2c3ecb.plan && (this.license.plan = _0x2c3ecb.plan), this.license.lastVerified = Date.now(), this._activated = true, this._touchServer(), _0x2c3ecb.dSalt && this.updateDSalt(_0x2c3ecb.dSalt), this.saveToStorage(), _0x2c3ecb.token && this.updateToken(_0x2c3ecb.token), u("RENEWAL", "OK", {
        extended: _0x2c3ecb.extended,
        plan: _0x2c3ecb.plan,
        newExpiresAt: _0x2c3ecb.newExpiresAt
      }), {
        success: true,
        newExpiresAt: _0x2c3ecb.newExpiresAt,
        plan: _0x2c3ecb.plan,
        extended: _0x2c3ecb.extended,
        extendedMs: _0x2c3ecb.extendedMs
      }) : {
        success: false,
        error: {
          invalid_key: "主卡密无效",
          key_disabled: "主卡密已被禁用",
          invalid_renewal_key: "续费卡密无效或不存在",
          renewal_key_disabled: "续费卡密已被使用或禁用",
          renewal_key_already_activated: "该卡密已被激活，不能用于续费",
          renewal_key_consumed: "续费卡密已被使用，请重试或联系客服",
          trial_not_allowed: "试用卡不能用于续费或升级",
          trial_renewal_not_allowed: "试用卡只支持升级为更高套餐",
          downgrade_not_allowed: "不支持降级，续费卡套餐档位必须相同或更高",
          same_key: "续费卡密不能与主卡密相同",
          not_found: "服务端接口不可用，请升级扩展后重试",
          invalid_signature: "签名验证失败，请重启扩展后重试",
          missing_signature: "请求签名缺失，请重启扩展后重试",
          missing_timestamp: "请求时间戳异常，请重启扩展后重试",
          replay_detected: "请求已过期，请重试",
          bad_request: "请求参数异常，请重启扩展后重试",
          internal_error: "服务器内部错误，请稍后重试"
        }[_0x2c3ecb.error] || _0x2c3ecb.message || "续费失败，请重试"
      };
    } catch {
      {
        const _0x186e32 = {
          success: false,
          error: "无法连接到服务器，请检查网络"
        };
        return _0x186e32;
      }
    }
  }
  _selfHash = null;
  getSelfHash() {
    if (this._selfHash) {
      return this._selfHash;
    }
    try {
      let _0x9c7901 = C.readFileSync(__filename, "utf8");
      this._selfHash = S.createHash("sha256").update(_0x9c7901).digest("hex");
    } catch {
      this._selfHash = "";
    }
    return this._selfHash;
  }
  _hmacCache = null;
  deriveHmacSecret(_0x4080b9, _0x137438, _0x1c5e1e) {
    let _0x541348 = _0x4080b9 + _0x137438 + (_0x1c5e1e ?? "");
    if (this._hmacCache && this._hmacCache.input === _0x541348) {
      return this._hmacCache.secret;
    }
    let _0x85ae5d = S.pbkdf2Sync(_0x541348, "pchat-hmac-v1", 10000, 32, "sha256").toString("hex");
    const _0x5dd071 = {
      input: _0x541348,
      secret: _0x85ae5d
    };
    this._hmacCache = _0x5dd071;
    return _0x85ae5d;
  }
  _dSaltCooldownUntil = 0;
  async apiPostAuto(_0x3c76f4, _0x267252) {
    let _0x37f7c3 = this._dSaltCooldownUntil > Date.now();
    let _0x5c0cdc = await this.apiPost(_0x3c76f4, _0x267252, _0x37f7c3);
    return _0x5c0cdc?.["error"] === "invalid_signature" && this._dSalt && !_0x37f7c3 ? (u("API", "WARN:dSalt mismatch on " + _0x3c76f4 + ", retrying basic HMAC"), this._dSalt = null, this._hmacCache = null, this._derivedKeyWithSalt = null, this.context.globalState.update(le, undefined), this._dSaltCooldownUntil = Date.now() + 3600000, this.apiPost(_0x3c76f4, _0x267252, true)) : _0x5c0cdc;
  }
  apiPost(_0x26c48e, _0x3139f9, _0x4eb31c = false) {
    return new Promise((_0x3169a6, _0x1f0454) => {
      let _0x192b7b = JSON.stringify(_0x3139f9);
      let _0x47c52f = Date.now();
      let _0x2abbdd = _0x3139f9.key || "";
      let _0x152467 = _0x3139f9.deviceId || this.getDeviceId();
      let _0x4f4576 = _0x4eb31c ? undefined : this._dSalt ?? undefined;
      let _0x32a3cd = this.deriveHmacSecret(_0x2abbdd, _0x152467, _0x4f4576);
      let _0x533170 = S.createHmac("sha256", _0x32a3cd).update(_0x192b7b + "|" + _0x47c52f).digest("hex");
      let _0x3009c2 = new URL(_0x26c48e, this.apiBase);
      let _0xdef3d = _0x3009c2.protocol === "https:";
      let _0x3e007b = (_0xdef3d ? Mt : Dt).request({
        hostname: _0x3009c2.hostname,
        port: _0x3009c2.port || (_0xdef3d ? 443 : 80),
        path: _0x3009c2.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(_0x192b7b),
          "X-Timestamp": String(_0x47c52f),
          "X-Signature": _0x533170
        },
        timeout: 10000
      }, _0x65b94a => {
        let _0xa90a8e = [];
        _0x65b94a.on("data", _0x63538 => _0xa90a8e.push(_0x63538));
        _0x65b94a.on("end", () => {
          try {
            {
              _0x3169a6(JSON.parse(Buffer.concat(_0xa90a8e).toString()));
            }
          } catch {
            _0x1f0454(new Error("服务器返回格式错误"));
          }
        });
      });
      _0x3e007b.on("error", _0x1f0454);
      _0x3e007b.on("timeout", () => {
        _0x3e007b.destroy();
        _0x1f0454(new Error("请求超时"));
      });
      _0x3e007b.write(_0x192b7b);
      _0x3e007b.end();
    });
  }
};
const a0_0x47465b = {
  state: "checking",
  version: null,
  detail: null
};
var Z = class n {
  constructor(_0xbd002a) {
    this.context = _0xbd002a;
    n._instance = this;
    let _0x33a40a = _0xbd002a.globalState.get(n._GTEX_KEY);
    Array.isArray(_0x33a40a) && _0x33a40a.length > 0 && (this._serverTexts = _0x33a40a);
    this._eagerLoadSessionState();
  }
  static viewType = "persistentChat.sidePanel";
  static _instance = null;
  _view;
  _panel;
  _webviews = new Set();
  messages = [];
  waiters = new Map();
  waiterCounter = 0;
  waiterSessionMap = new Map();
  sessionIds = new Set();
  sessionTitles = new Map();
  userRenamedSessions = new Set();
  lastResolvedSessionId = null;
  lastActiveSessionId = null;
  _onReadyOrRefresh;
  _onFetchTokenUsage;
  _onSetReplyTransport;
  _mcpConnected = false;
  _nodeStatus = a0_0x47465b;
  pendingReplies = new Map();
  static PENDING_REPLY_TTL = 300000;
  sessionLastActive = new Map();
  pendingTempSessions = [];
  _tempSessionTimers = new Set();
  _activeTabByWebview = new WeakMap();
  _primaryWebview = null;
  _panelTabWatcher = null;
  _panelCleanupInProgress = false;
  _panelMoveInProgress = false;
  _panelCreatedAt = 0;
  static PANEL_TAB_ATTACH_GRACE_MS = 1500;
  static RENEW_SIGNAL = "__TIMEOUT_RENEW__";
  static TOOL_TIMEOUT_MS = 86400000;
  static _autoRenewMs = 660000;
  static _autoRenewEnabled = true;
  sessionRenewCounters = new Map();
  static TASK_POOL = ["好，现在呢？", "然后？", "说说看", "嗯，你在想什么", "顺便说说现在的情况", "等等，你刚才做了什么", "好像有点复杂，你感觉怎么样", "等我一下，你先说说", "有没有什么卡住的地方？", "有什么地方需要我留意吗", "你觉得现在缺什么？", "有没有遇到什么预期之外的情况", "进展顺利吗", "还差哪一块没搞定", "不急，先说说思路", "我在，你说", "当前最关键的是什么", "你在意哪个细节", "你做了哪些？列一下", "把关键点说一下", "你改了哪里？", "做了什么，没做什么", "最近的改动是什么"];
  _serverTexts = [];
  static _GTEX_KEY = "persistentChat.renewTexts";
  _sessionShuffleState = new Map();
  _nextFromPool(_0x2afd54) {
    let _0x1e25a7 = this._serverTexts.length > 0 ? this._serverTexts : n.TASK_POOL;
    let _0x4e9cce = this._sessionShuffleState.get(_0x2afd54);
    const _0x2bffba = {
      pool: [],
      lastPicked: null
    };
    if (_0x4e9cce || (_0x4e9cce = _0x2bffba, this._sessionShuffleState.set(_0x2afd54, _0x4e9cce)), _0x4e9cce.pool.length === 0) {
      let _0x48ed9a = _0x1e25a7.slice();
      for (let _0x263cf4 = _0x48ed9a.length - 1; _0x263cf4 > 0; _0x263cf4--) {
        {
          let _0x38ed04 = Math.floor(Math.random() * (_0x263cf4 + 1));
          [_0x48ed9a[_0x263cf4], _0x48ed9a[_0x38ed04]] = [_0x48ed9a[_0x38ed04], _0x48ed9a[_0x263cf4]];
        }
      }
      _0x48ed9a.length > 1 && _0x48ed9a[0] === _0x4e9cce.lastPicked && _0x48ed9a.push(_0x48ed9a.shift());
      _0x4e9cce.pool = _0x48ed9a;
    }
    let _0x1a5cf4 = _0x4e9cce.pool.shift();
    _0x4e9cce.lastPicked = _0x1a5cf4;
    return _0x1a5cf4;
  }
  evictExpiredPendingReplies() {
    let _0x3acafc = Date.now();
    for (let [_0x19826c, _0x2b4231] of this.pendingReplies) _0x3acafc - _0x2b4231.storedAt >= n.PENDING_REPLY_TTL && this.pendingReplies.delete(_0x19826c);
  }
  setServerTexts(_0x51b0ee) {
    this._serverTexts = _0x51b0ee;
    this.context.globalState.update(n._GTEX_KEY, _0x51b0ee.length > 0 ? _0x51b0ee : undefined);
    this._sessionShuffleState.clear();
  }
  getSessionCounter(_0x1abe14) {
    let _0x1adf08 = _0x1abe14 || "__default__";
    let _0x4cc978 = this.sessionRenewCounters.get(_0x1adf08);
    const _0x264832 = {
      total: 0,
      sinceLastRenew: 0
    };
    _0x4cc978 || (_0x4cc978 = _0x264832, this.sessionRenewCounters.set(_0x1adf08, _0x4cc978));
    return _0x4cc978;
  }
  makeRenewText(_0x307bff) {
    let _0x3f4ca1 = this.getSessionCounter(_0x307bff);
    _0x3f4ca1.total++;
    _0x3f4ca1.sinceLastRenew++;
    let _0x2dd839 = 3 + Math.floor(Math.random() * 3);
    return _0x3f4ca1.sinceLastRenew >= _0x2dd839 ? (_0x3f4ca1.sinceLastRenew = 0, n.RENEW_SIGNAL) : this._nextFromPool(_0x307bff || "__default__");
  }
  _eagerLoadSessionState() {
    let _0x45ace9 = this.context.workspaceState.get("persistentChatSessionTitles") || {};
    for (let [_0x3067aa, _0xfa90e3] of Object.entries(_0x45ace9)) _0x3067aa.startsWith("temp_") || (this.sessionTitles.set(_0x3067aa, _0xfa90e3), this.sessionIds.add(_0x3067aa));
    let _0x55138b = this.context.workspaceState.get("persistentChatUserRenamedSessions") || [];
    for (let _0x4a2323 of _0x55138b) this.userRenamedSessions.add(_0x4a2323);
    try {
      {
        for (let _0x1f3b07 of this.context.workspaceState.keys()) if (_0x1f3b07.startsWith("pchat_msg_")) {
          let _0x2dab = _0x1f3b07.slice(10);
          _0x2dab && _0x2dab !== "__default__" && !_0x2dab.startsWith("temp_") && this.sessionIds.add(_0x2dab);
        }
      }
    } catch {}
  }
  hasSession(_0x135bfa) {
    return this.sessionIds.has(_0x135bfa);
  }
  setRefreshUserInfoCallback(_0x4f122d) {
    this._onReadyOrRefresh = _0x4f122d;
  }
  setFetchTokenUsageCallback(_0x57e5f9) {
    this._onFetchTokenUsage = _0x57e5f9;
  }
  setUpdateReplyTransportCallback(_0x5e0de9) {
    this._onSetReplyTransport = _0x5e0de9;
  }
  static getInstance() {
    return n._instance;
  }
  static getOrAutoCreate() {
    return n._instance;
  }
  resolveWebviewView(_0x28e1de, _0x4af4e8, _0x1d914f) {
    this._view = _0x28e1de;
    this._setupWebview(_0x28e1de.webview);
    this._primaryWebview || (this._primaryWebview = _0x28e1de.webview);
    this._updateWebviewModes();
    _0x28e1de.onDidDispose(() => {
      this._detachWebview(_0x28e1de.webview);
      this._afterWebviewDetached();
    });
  }
  _detachWebview(_0x1ff14d) {
    this._webviews.delete(_0x1ff14d);
    this._activeTabByWebview.delete(_0x1ff14d);
    this._safeViewWebview() === _0x1ff14d && (this._view = undefined);
    this._safePanelWebview() === _0x1ff14d && (this._panel = undefined);
    this._primaryWebview === _0x1ff14d && (this._primaryWebview = null);
  }
  _afterWebviewDetached() {
    this._webviews.size === 0 ? this.cleanup() : this._updateWebviewModes();
  }
  _safePostMessage(_0x3f2555, _0x180de2) {
    try {
      _0x3f2555.postMessage(_0x180de2).then(undefined, () => {
        this._detachWebview(_0x3f2555);
        this._afterWebviewDetached();
      });
    } catch {
      this._detachWebview(_0x3f2555);
      this._afterWebviewDetached();
    }
  }
  _safePanelWebview() {
    if (!this._panel) {
      return null;
    }
    try {
      return this._panel.webview;
    } catch {
      return null;
    }
  }
  _safeViewWebview() {
    if (!this._view) {
      return null;
    }
    try {
      {
        return this._view.webview;
      }
    } catch {
      return null;
    }
  }
  _isOurPanelTab(_0x3bd241) {
    let _0x356d2b = _0x3bd241.input?.["viewType"];
    return typeof _0x356d2b != "string" ? false : _0x356d2b === "persistentChat.windowPanel" || _0x356d2b.endsWith("persistentChat.windowPanel");
  }
  _hasLivePanel() {
    if (!this._panel) {
      return false;
    }
    try {
      let _0x2a7e0e = this._panel.webview;
      if (!this._webviews.has(_0x2a7e0e)) {
        return false;
      }
      let _0x11b165 = this._panel.viewType;
    } catch {
      {
        return false;
      }
    }
    try {
      for (let _0x5a3e5d of l.window.tabGroups.all) for (let _0x353046 of _0x5a3e5d.tabs) if (this._isOurPanelTab(_0x353046)) {
        return true;
      }
      return Date.now() - this._panelCreatedAt < n.PANEL_TAB_ATTACH_GRACE_MS;
    } catch {
      return true;
    }
  }
  recheckPanelHealth() {
    let _0x3f5006 = this._panel;
    if (_0x3f5006) {
      try {
        {
          this._hasLivePanel() || this._cleanupDisposedPanelAndRestore(_0x3f5006);
        }
      } catch {
        {
          if (this._panel) {
            try {
              {
                this._cleanupDisposedPanelAndRestore(this._panel);
              }
            } catch {}
          }
        }
      }
    }
  }
  _findPanelTabs() {
    let _0x5e55b4 = [];
    try {
      {
        for (let _0x4b201b of l.window.tabGroups.all) for (let _0x16aed2 of _0x4b201b.tabs) this._isOurPanelTab(_0x16aed2) && _0x5e55b4.push(_0x16aed2);
      }
    } catch {}
    return _0x5e55b4;
  }
  _restoreSidebarToPrimary(_0x5a63be = true) {
    let _0x250a80 = this._safeViewWebview();
    if (_0x250a80) {
      this._promoteToPrimary(_0x250a80);
      try {
        {
          this._view?.["show"](_0x5a63be);
        }
      } catch {}
      this._broadcastWindowStates();
    }
  }
  _disposePanelTabWatcher() {
    if (this._panelTabWatcher) {
      try {
        this._panelTabWatcher.dispose();
      } catch {}
      this._panelTabWatcher = null;
    }
  }
  _setupPanelTabWatcher(_0x2e1269) {
    this._disposePanelTabWatcher();
    let _0x185169;
    let _0x55c0a3 = null;
    let _0x122dc4 = () => {
      _0x55c0a3 && (clearTimeout(_0x55c0a3), _0x55c0a3 = null);
    };
    try {
      {
        _0x185169 = l.window.tabGroups.onDidChangeTabs(_0x388082 => {
          if (this._panel !== _0x2e1269) {
            _0x122dc4();
            this._disposePanelTabWatcher();
            return;
          }
          let _0x5c7238 = _0x1d12f9 => this._isOurPanelTab(_0x1d12f9);
          let _0x31a567 = _0x388082.closed.some(_0x5c7238);
          let _0x2a26a4 = _0x388082.opened.some(_0x5c7238);
          if (this._panelMoveInProgress) {
            {
              _0x122dc4();
              (_0x31a567 || _0x2a26a4 || _0x388082.changed.some(_0x5c7238)) && (this._syncPanelTitle(), this._broadcastWindowStates());
              return;
            }
          }
          if (_0x31a567 && _0x2a26a4) {
            _0x122dc4();
            this._syncPanelTitle();
            this._broadcastWindowStates();
            return;
          }
          if (_0x31a567) {
            _0x122dc4();
            _0x55c0a3 = setTimeout(() => {
              {
                _0x55c0a3 = null;
                this._panel === _0x2e1269 && (this._panelMoveInProgress || (this._findPanelTabs().length === 0 ? this._cleanupDisposedPanelAndRestore(_0x2e1269) : (this._syncPanelTitle(), this._broadcastWindowStates())));
              }
            }, 250);
            return;
          }
          if (_0x2a26a4) {
            _0x122dc4();
            this._syncPanelTitle();
            this._broadcastWindowStates();
            return;
          }
          _0x388082.changed.some(_0x5c7238) && (this._syncPanelTitle(), this._broadcastWindowStates());
        });
      }
    } catch {}
    this._panelTabWatcher = {
      dispose: () => {
        _0x122dc4();
        try {
          {
            _0x185169?.["dispose"]();
          }
        } catch {}
      }
    };
  }
  _cleanupDisposedPanelAndRestore(_0x24491c) {
    if (!this._panelCleanupInProgress) {
      this._panelCleanupInProgress = true;
      try {
        this._disposePanelTabWatcher();
        try {
          _0x24491c.dispose();
        } catch {}
        let _0x5a547b = null;
        try {
          _0x5a547b = _0x24491c.webview;
        } catch {}
        _0x5a547b ? this._detachWebview(_0x5a547b) : (this._panel === _0x24491c && (this._panel = undefined), this._primaryWebview = null);
        this._afterWebviewDetached();
        this._restoreSidebarToPrimary();
      } finally {
        this._panelCleanupInProgress = false;
      }
    }
  }
  async openInPanel() {
    if (this._panel && !this._hasLivePanel() && this._cleanupDisposedPanelAndRestore(this._panel), this._panel) {
      {
        let _0xa00be5 = this._panel;
        let _0x42a407 = this._safePanelWebview();
        if (!_0x42a407) {
          this._cleanupDisposedPanelAndRestore(_0xa00be5);
        } else {
          this._promoteToPrimary(_0x42a407);
          this._syncPanelTitle();
          this._broadcastWindowStates();
          try {
            {
              _0xa00be5.reveal(undefined, false);
              return;
            }
          } catch {
            this._cleanupDisposedPanelAndRestore(_0xa00be5);
          }
        }
      }
    }
    let _0x592411 = _.join(this.context.extensionPath, "dist", "webview");
    let _0xe6e29b = l.window.createWebviewPanel("persistentChat.windowPanel", "Persistent Chat", {
      viewColumn: l.ViewColumn.Beside,
      preserveFocus: false
    }, {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [l.Uri.file(_0x592411)]
    });
    this._panelCreatedAt = Date.now();
    let _0xd12c81 = _.join(this.context.extensionPath, "media", "icon.svg");
    let _0x7f3362 = _.join(this.context.extensionPath, "media", "icon.png");
    D.existsSync(_0xd12c81) ? _0xe6e29b.iconPath = l.Uri.file(_0xd12c81) : D.existsSync(_0x7f3362) && (_0xe6e29b.iconPath = l.Uri.file(_0x7f3362));
    this._panel = _0xe6e29b;
    this._setupWebview(_0xe6e29b.webview);
    this._syncPanelTitle();
    this._promoteToPrimary(_0xe6e29b.webview);
    this._broadcastWindowStates();
    this._setupPanelTabWatcher(_0xe6e29b);
    let _0x5042d3 = setTimeout(() => {
      try {
        const _0x2a478d = {
          type: "focusComposer"
        };
        this._safePostMessage(_0xe6e29b.webview, _0x2a478d);
      } catch {}
    }, 400);
    _0xe6e29b.onDidChangeViewState(() => {
      this._syncPanelTitle();
    });
    _0xe6e29b.onDidDispose(() => {
      clearTimeout(_0x5042d3);
      this._disposePanelTabWatcher();
      let _0x5a7cd3 = null;
      try {
        {
          _0x5a7cd3 = _0xe6e29b.webview;
        }
      } catch {}
      _0x5a7cd3 ? this._detachWebview(_0x5a7cd3) : (this._panel === _0xe6e29b && (this._panel = undefined), this._primaryWebview = null);
      this._afterWebviewDetached();
      this._restoreSidebarToPrimary();
    });
    _0xe6e29b.reveal(undefined, false);
    this._movePanelIntoNewWindow(_0xe6e29b);
  }
  async openInSidebar(_0x48cc10 = false) {
    let _0x427a56 = this._panel;
    let _0x1607ce = this._safePanelWebview();
    if (!this._view) {
      {
        try {
          await l.commands.executeCommand("persistentChat.sidePanel.focus");
        } catch {}
        await new Promise(_0x1b4c63 => setTimeout(_0x1b4c63, 150));
      }
    }
    _0x1607ce ? (this._disposePanelTabWatcher(), this._detachWebview(_0x1607ce), this._afterWebviewDetached()) : _0x427a56 && this._cleanupDisposedPanelAndRestore(_0x427a56);
    this._view && this._restoreSidebarToPrimary(_0x48cc10);
    _0x427a56 && this._closePanelTabsAndDispose(_0x427a56);
  }
  async _closePanelTabsAndDispose(_0x2e60aa) {
    let _0x25bf23 = this._findPanelTabs();
    if (_0x25bf23.length > 0) {
      try {
        await l.window.tabGroups.close(_0x25bf23, true);
      } catch {}
    }
    try {
      _0x2e60aa.dispose();
    } catch {}
  }
  async _movePanelIntoNewWindow(_0x1f15d5) {
    let _0x25ebe8 = ["workbench.action.moveEditorToNewWindow", "workbench.action.editor.moveEditorToNextWindow", "workbench.action.experimentalMoveEditorIntoNewWindowAction"];
    this._panelMoveInProgress = true;
    let _0x48f384 = false;
    try {
      await this._waitForPanelTabReady(1200);
      for (let _0x3d11df of _0x25ebe8) try {
        _0x1f15d5.reveal(undefined, false);
        await new Promise(_0x5ac6ec => setTimeout(_0x5ac6ec, 220));
        await l.commands.executeCommand(_0x3d11df);
        _0x48f384 = true;
        break;
      } catch {}
    } finally {
      setTimeout(() => {
        this._panelMoveInProgress = false;
      }, 400);
    }
    return _0x48f384;
  }
  async _waitForPanelTabReady(_0x27e284 = 1200) {
    let _0x2925a8 = Date.now();
    for (; Date.now() - _0x2925a8 < _0x27e284;) {
      if (this._findPanelTabs().length > 0) {
        {
          await new Promise(_0xe4ad96 => setTimeout(_0xe4ad96, 120));
          return;
        }
      }
      await new Promise(_0x3f5296 => setTimeout(_0x3f5296, 50));
    }
  }
  async _tryPinAuxWindowOnTop() {
    let _0x54ad2e = ["workbench.action.enableWindowAlwaysOnTop"];
    let _0x140827 = ["workbench.action.toggleWindowAlwaysOnTop", "workbench.action.alwaysOnTop"];
    let _0x232546 = false;
    try {
      let _0x2cc68f = await l.commands.getCommands(true);
      for (let _0x1a830c of _0x2cc68f) if (/alwaysontop/i.test(_0x1a830c)) {
        if (/enable/i.test(_0x1a830c)) {
          _0x232546 = true;
          _0x54ad2e.includes(_0x1a830c) || _0x54ad2e.push(_0x1a830c);
          continue;
        }
        _0x140827.includes(_0x1a830c) || _0x140827.push(_0x1a830c);
      }
    } catch {}
    for (let _0x4264b1 = 0; _0x4264b1 < 4; _0x4264b1++) {
      for (let _0x23bffe of _0x54ad2e) try {
        await l.commands.executeCommand(_0x23bffe);
      } catch {}
      _0x4264b1 < 3 && (await new Promise(_0x23e74f => setTimeout(_0x23e74f, 250)));
    }
    if (!_0x232546) {
      for (let _0x694956 of _0x140827) try {
        {
          await l.commands.executeCommand(_0x694956);
          return;
        }
      } catch {}
    }
  }
  _getWebviewLocation(_0x1f7d3a) {
    return this._safePanelWebview() === _0x1f7d3a ? "panel" : this._safeViewWebview() === _0x1f7d3a ? "sidebar" : "unknown";
  }
  _sendWindowState(_0x2180a8) {
    let _0x501e27 = this._primaryWebview ? this._getWebviewLocation(this._primaryWebview) : "unknown";
    this._safePostMessage(_0x2180a8, {
      type: "windowState",
      location: this._getWebviewLocation(_0x2180a8),
      hasPanel: this._hasLivePanel(),
      primaryLocation: _0x501e27
    });
  }
  _broadcastWindowStates() {
    for (let _0x18e2bb of this._webviews) this._sendWindowState(_0x18e2bb);
  }
  invalidateAllowDualCache() {
    this._updateWebviewModes();
  }
  _sendMode(_0x5702fa, _0x337721) {
    const _0x2ab74e = {
      type: "setMode",
      mode: _0x337721
    };
    this._safePostMessage(_0x5702fa, _0x2ab74e);
  }
  _updateWebviewModes() {
    if (!this._primaryWebview || !this._webviews.has(this._primaryWebview)) {
      let _0x164e73 = this._safePanelWebview();
      this._primaryWebview = _0x164e73 && this._webviews.has(_0x164e73) ? _0x164e73 : this._safeViewWebview() || null;
    }
    for (let _0x161f71 of this._webviews) this._sendMode(_0x161f71, _0x161f71 === this._primaryWebview ? "primary" : "secondary");
    this._broadcastWindowStates();
  }
  _promoteToPrimary(_0x4341b0) {
    this._primaryWebview = _0x4341b0;
    this._updateWebviewModes();
  }
  async revealPreferred(_0x345b5e = true) {
    if (this._panel && !this._hasLivePanel() && this._cleanupDisposedPanelAndRestore(this._panel), this._panel) {
      try {
        {
          this._panel.reveal(undefined, _0x345b5e);
          return;
        }
      } catch {
        this._panel && this._cleanupDisposedPanelAndRestore(this._panel);
      }
    }
    if (this._view) {
      try {
        this._view.show(_0x345b5e);
      } catch {
        let _0x434fde = this._safeViewWebview();
        _0x434fde ? this._detachWebview(_0x434fde) : this._view = undefined;
        this._afterWebviewDetached();
      }
    }
    try {
      {
        await l.commands.executeCommand("persistentChat.sidePanel.focus");
      }
    } catch {}
  }
  _findWaiterByIdOrActive(_0x10cfc3, _0x3bdd6c) {
    if (_0x10cfc3) {
      return this.waiters.get(_0x10cfc3);
    }
    let _0x537a3b = [];
    if (_0x3bdd6c) {
      let _0x165425 = this._activeTabByWebview.get(_0x3bdd6c);
      _0x165425 && _0x537a3b.push(_0x165425);
    }
    this.lastActiveSessionId && _0x537a3b.push(this.lastActiveSessionId);
    this.lastResolvedSessionId && this.lastResolvedSessionId !== this.lastActiveSessionId && _0x537a3b.push(this.lastResolvedSessionId);
    for (let _0x24da0a of _0x537a3b) for (let [_0x234294, _0x313e80] of this.waiterSessionMap) if (_0x313e80 === _0x24da0a) {
      {
        let _0x2b7062 = this.waiters.get(_0x234294);
        if (_0x2b7062) {
          return _0x2b7062;
        }
      }
    }
    return this.waiters.values().next().value;
  }
  _syncPanelTitle() {
    let _0x462a50 = this._panel;
    if (!_0x462a50) {
      return;
    }
    let _0x2d0de7 = this.lastActiveSessionId || this.lastResolvedSessionId;
    let _0x1757bd = _0x2d0de7 ? this.sessionTitles.get(_0x2d0de7) : undefined;
    let _0x242000 = _0x1757bd && _0x1757bd.trim() ? "Persistent Chat — " + _0x1757bd : "Persistent Chat";
    let _0x4f9960 = this.getActiveSessionCount();
    let _0xc85e55 = _0x4f9960 > 0 ? _0x242000 + " (" + _0x4f9960 + ")" : _0x242000;
    try {
      _0x462a50.title !== _0xc85e55 && (_0x462a50.title = _0xc85e55);
    } catch {
      {
        this._cleanupDisposedPanelAndRestore(_0x462a50);
      }
    }
  }
  _setupWebview(_0xe56e4b) {
    let _0x531ef4 = _.join(this.context.extensionPath, "dist", "webview");
    _0xe56e4b.options = {
      enableScripts: true,
      localResourceRoots: [l.Uri.file(_0x531ef4)]
    };
    _0xe56e4b.html = this.buildHtml(_0xe56e4b);
    _0xe56e4b.onDidReceiveMessage(_0x13d9d1 => this.handleWebviewMessage(_0x13d9d1, _0xe56e4b));
    this._webviews.add(_0xe56e4b);
  }
  setSessionTitle(_0x56d6fb, _0x1ab527) {
    this.userRenamedSessions.has(_0x56d6fb) || (this.sessionTitles.set(_0x56d6fb, _0x1ab527), this.persistSessionTitles(), this.syncWaitersToWebview(), this._syncPanelTitle());
  }
  determineNextSessionId(_0x59f32a, _0x1273f8) {
    if (_0x59f32a) {
      return _0x59f32a;
    }
    if (_0x1273f8) {
      {
        for (let [_0x23e1a6, _0x111fc] of this.sessionTitles) if (_0x111fc === _0x1273f8 && this.sessionIds.has(_0x23e1a6)) {
          return _0x23e1a6;
        }
      }
    }
    return null;
  }
  generateSessionId() {
    let _0x2d2f8f = "abcdefghijklmnopqrstuvwxyz0123456789";
    let _0x74c84e = at.randomBytes(8);
    let _0x416afe = "ct_";
    for (let _0x3907d1 = 0; _0x3907d1 < 8; _0x3907d1++) {
      _0x416afe += _0x2d2f8f[_0x74c84e[_0x3907d1] % _0x2d2f8f.length];
    }
    return this.sessionIds.has(_0x416afe) ? this.generateSessionId() : _0x416afe;
  }
  initConversation(_0x3ce8e1, _0x346fdc) {
    let _0x35e1f8 = this.pendingTempSessions.shift();
    if (_0x35e1f8) {
      for (let _0x329269 of this.messages) _0x329269.sessionId === _0x35e1f8.tempId && (_0x329269.sessionId = _0x3ce8e1);
      this.sessionIds.delete(_0x35e1f8.tempId);
      this.userRenamedSessions.delete(_0x35e1f8.tempId);
      this.sessionRenewCounters.delete(_0x35e1f8.tempId);
      this._sessionShuffleState.delete(_0x35e1f8.tempId);
      this.sessionLastActive.delete(_0x35e1f8.tempId);
      this.sessionTitles.has(_0x35e1f8.tempId) && (_0x346fdc || (_0x346fdc = this.sessionTitles.get(_0x35e1f8.tempId)), this.sessionTitles.delete(_0x35e1f8.tempId));
      this.context.workspaceState.update("pchat_msg_" + _0x35e1f8.tempId, undefined);
      this.persistMessages();
      this.postToWebview({
        type: "replaceTempSession",
        tempId: _0x35e1f8.tempId,
        realId: _0x3ce8e1
      });
    }
    this.sessionIds.add(_0x3ce8e1);
    _0x346fdc && this.sessionTitles.set(_0x3ce8e1, _0x346fdc);
    this.lastActiveSessionId = _0x3ce8e1;
    this.persistSessionTitles();
    this.syncWaitersToWebview();
    this._syncPanelTitle();
  }
  mergeConversation(_0x1b8f98, _0x11fde9) {
    let _0x1d9ed2 = this.messages.filter(_0x7460e5 => _0x7460e5.sessionId === _0x1b8f98);
    for (let _0x4b2276 of _0x1d9ed2) _0x4b2276.sessionId = _0x11fde9;
    this.context.workspaceState.update("pchat_msg_" + _0x1b8f98, undefined);
    this.persistMessages();
    this.sessionIds.add(_0x11fde9);
    this.sessionIds.delete(_0x1b8f98);
    this.sessionTitles.delete(_0x1b8f98);
    this.userRenamedSessions.delete(_0x1b8f98);
    this.sessionRenewCounters.delete(_0x1b8f98);
    this._sessionShuffleState.delete(_0x1b8f98);
    this.lastActiveSessionId === _0x1b8f98 && (this.lastActiveSessionId = _0x11fde9);
    this.lastResolvedSessionId === _0x1b8f98 && (this.lastResolvedSessionId = _0x11fde9);
    let _0x478bf3 = [...this.waiterSessionMap.entries()].filter(([, _0xee1e6c]) => _0xee1e6c === _0x1b8f98).map(([_0x1699c7]) => _0x1699c7);
    for (let _0x195fec of _0x478bf3) {
      let _0xfafb44 = this.waiters.get(_0x195fec);
      const _0xa8d966 = {
        text: n.RENEW_SIGNAL,
        attachments: []
      };
      _0xfafb44 && (_0xfafb44.timer && clearTimeout(_0xfafb44.timer), _0xfafb44.autoRenewTimer && clearTimeout(_0xfafb44.autoRenewTimer), _0xfafb44.resolve(_0xa8d966));
      this.waiters.delete(_0x195fec);
      this.waiterSessionMap.delete(_0x195fec);
    }
    this.pendingReplies.delete(_0x1b8f98);
    this.persistSessionTitles();
    this.postToWebview({
      type: "clearSessionHistory",
      sessionId: _0x1b8f98
    });
    this.syncWaitersToWebview();
  }
  async requestInput(_0x5aadf0, _0x3ef17b, _0x244ef3) {
    let _0x3b6685 = M.getInstance();
    const _0x15f25b = {
      text: "扩展未激活，请在 Persistent Chat 面板中输入卡密激活。",
      attachments: []
    };
    if (!_0x3b6685?.["hasValidToken"]() || _0x3b6685._vs() === 0) {
      if (_0x3b6685) {
        const _0x302e7f = {
          text: "扩展未激活，请在 Persistent Chat 面板中输入卡密激活。",
          attachments: []
        };
        if (!(await _0x3b6685.ensureTokenValid())) {
          return _0x302e7f;
        }
      } else {
        return _0x15f25b;
      }
    }
    await this.revealPreferred(true);
    !this._view && !this._panel && (await new Promise(_0x519feb => setTimeout(_0x519feb, 150)));
    let _0xa3eef = String(++this.waiterCounter);
    let _0x39ac77 = _0x3ef17b;
    let _0x57551c = this.pendingReplies.get(_0x39ac77);
    if (_0x57551c) {
      {
        this.pendingReplies.delete(_0x39ac77);
        for (let [_0x382aa9, _0x482b6c] of this.waiterSessionMap) _0x482b6c === _0x39ac77 && !this.waiters.has(_0x382aa9) && this.waiterSessionMap.delete(_0x382aa9);
        if (Date.now() - _0x57551c.storedAt < n.PENDING_REPLY_TTL) {
          this.sessionIds.add(_0x39ac77);
          return {
            text: _0x57551c.text,
            attachments: _0x57551c.attachments
          };
        }
      }
    }
    this.evictExpiredPendingReplies();
    let _0x7de385 = [...this.waiterSessionMap.entries()].filter(([, _0x3d4a63]) => _0x3d4a63 === _0x39ac77).map(([_0x4937f7]) => _0x4937f7);
    for (let _0x6151b4 of _0x7de385) {
      {
        let _0x32e12f = this.waiters.get(_0x6151b4);
        _0x32e12f && (_0x32e12f.timer && clearTimeout(_0x32e12f.timer), _0x32e12f.autoRenewTimer && clearTimeout(_0x32e12f.autoRenewTimer), _0x32e12f.resolve({
          text: this.makeRenewText(_0x39ac77),
          attachments: []
        }));
        this.waiters.delete(_0x6151b4);
        this.waiterSessionMap.delete(_0x6151b4);
      }
    }
    this.waiterSessionMap.set(_0xa3eef, _0x39ac77);
    this.sessionIds.add(_0x39ac77);
    return new Promise(_0x5ac4de => {
      {
        let _0x4dc05b = setTimeout(async () => {
          let _0x14ee6f = this.waiters.get(_0xa3eef);
          if (_0x14ee6f) {
            _0x14ee6f.autoRenewTimer && clearTimeout(_0x14ee6f.autoRenewTimer);
            let _0x5b98c8 = this.waiterSessionMap.get(_0xa3eef);
            this.waiters.delete(_0xa3eef);
            this.waiterSessionMap.delete(_0xa3eef);
            this.syncWaitersToWebview();
            _0x5ac4de({
              text: this.makeRenewText(_0x5b98c8 || _0x39ac77),
              attachments: []
            });
          }
        }, n.TOOL_TIMEOUT_MS);
        let _0x108e7e;
        n._autoRenewEnabled && n._autoRenewMs > 0 && (_0x108e7e = setTimeout(() => {
          let _0xfcb7cf = this.waiters.get(_0xa3eef);
          if (!_0xfcb7cf) {
            return;
          }
          clearTimeout(_0xfcb7cf.timer);
          _0xfcb7cf.autoRenewTimer && clearTimeout(_0xfcb7cf.autoRenewTimer);
          let _0x3c3ac7 = this.waiterSessionMap.get(_0xa3eef);
          this.waiters.delete(_0xa3eef);
          this.waiterSessionMap.delete(_0xa3eef);
          this.syncWaitersToWebview();
          _0x5ac4de({
            text: this.makeRenewText(_0x3c3ac7 || _0x39ac77),
            attachments: []
          });
        }, n._autoRenewMs));
        let _0x89ffd6 = () => {
          let _0x19d54a = this.waiters.get(_0xa3eef);
          const _0x41e4dc = {
            text: n.RENEW_SIGNAL,
            attachments: []
          };
          _0x19d54a && (_0x19d54a.autoRenewTimer && clearTimeout(_0x19d54a.autoRenewTimer), clearTimeout(_0x4dc05b), this.waiters.delete(_0xa3eef), this.waiterSessionMap.delete(_0xa3eef), this.syncWaitersToWebview(), _0x5ac4de(_0x41e4dc));
        };
        if (_0x244ef3) {
          if (_0x244ef3.aborted) {
            {
              const _0x5a9651 = {
                text: n.RENEW_SIGNAL,
                attachments: []
              };
              clearTimeout(_0x4dc05b);
              _0x108e7e && clearTimeout(_0x108e7e);
              _0x5ac4de(_0x5a9651);
              return;
            }
          }
          const _0x1d2ac7 = {
            once: true
          };
          _0x244ef3.addEventListener("abort", _0x89ffd6, _0x1d2ac7);
        }
        this.waiters.set(_0xa3eef, {
          id: _0xa3eef,
          resolve: _0x5ac4de,
          timer: _0x4dc05b,
          autoRenewTimer: _0x108e7e,
          prompt: _0x5aadf0,
          timestamp: Date.now()
        });
        this.syncWaitersToWebview();
      }
    });
  }
  syncWaitersToWebview() {
    let _0x3e7461 = Array.from(this.waiters.values()).map(_0x2ed44b => ({
      id: _0x2ed44b.id,
      prompt: _0x2ed44b.prompt,
      timestamp: _0x2ed44b.timestamp,
      sessionId: this.waiterSessionMap.get(_0x2ed44b.id) || null
    }));
    let _0x28fc8e = new Set();
    for (let _0x5b835f of this.waiterSessionMap.values()) _0x28fc8e.add(_0x5b835f);
    let _0x31abb5 = Array.from(this.sessionIds).map(_0x1cb56f => ({
      id: _0x1cb56f,
      waiting: _0x28fc8e.has(_0x1cb56f),
      title: this.sessionTitles.get(_0x1cb56f) || null
    }));
    const _0x29bce0 = {
      type: "syncWaiters",
      waiters: _0x3e7461,
      sessions: _0x31abb5
    };
    this.postToWebview(_0x29bce0);
    this._syncPanelTitle();
  }
  addAssistantMessage(_0x77dad1, _0x19abd2) {
    let _0x232eb4 = {
      role: "assistant",
      content: _0x77dad1,
      timestamp: Date.now(),
      sessionId: _0x19abd2
    };
    this.messages.push(_0x232eb4);
    this.persistMessages(_0x19abd2 || "__default__");
    _0x19abd2 && this.sessionLastActive.set(_0x19abd2, Date.now());
    this.postToWebview({
      type: "assistantMessage",
      content: _0x77dad1,
      timestamp: _0x232eb4.timestamp,
      sessionId: _0x19abd2
    });
  }
  addSystemMessage(_0x89c19d) {
    let _0x4f89f1 = {
      role: "system",
      content: _0x89c19d,
      timestamp: Date.now()
    };
    this.messages.push(_0x4f89f1);
    this.persistMessages();
    this.postToWebview({
      type: "systemMessage",
      content: _0x89c19d,
      timestamp: _0x4f89f1.timestamp
    });
  }
  persistTimer = null;
  _persistDirty = new Set();
  persistMessages(_0x497af4) {
    this._persistDirty.add(_0x497af4 || "*");
    !this.persistTimer && (this.persistTimer = setTimeout(() => {
      this.persistTimer = null;
      this._flushPersistMessages();
    }, 300));
  }
  _flushPersistMessages() {
    if (this._persistDirty.size === 0) {
      return;
    }
    let _0x1b1c9f = this._persistDirty.has("*");
    let _0x37d5c8 = new Set(this._persistDirty);
    this._persistDirty.clear();
    let _0x5e77e5 = new Map();
    for (let _0x544793 of this.messages) {
      {
        let _0x5ded96 = _0x544793.sessionId || "__default__";
        !_0x1b1c9f && !_0x37d5c8.has(_0x5ded96) || (_0x5e77e5.has(_0x5ded96) || _0x5e77e5.set(_0x5ded96, []), _0x5e77e5.get(_0x5ded96).push(_0x544793));
      }
    }
    if (!_0x1b1c9f) {
      for (let _0x1f8886 of _0x37d5c8) _0x1f8886 !== "*" && !_0x5e77e5.has(_0x1f8886) && this.context.workspaceState.update("pchat_msg_" + _0x1f8886, undefined);
    }
    for (let [_0x57df77, _0x3e9389] of _0x5e77e5) this.context.workspaceState.update("pchat_msg_" + _0x57df77, _0x3e9389.slice(-500));
  }
  persistSessionTitles() {
    let _0x487ee2 = {};
    for (let [_0x178f15, _0x5143d6] of this.sessionTitles) _0x487ee2[_0x178f15] = _0x5143d6;
    this.context.workspaceState.update("persistentChatSessionTitles", _0x487ee2);
    this.context.workspaceState.update("persistentChatUserRenamedSessions", [...this.userRenamedSessions]);
  }
  replayMessages(_0x29ff04) {
    let _0x51ee7e = _0xb7602f => {
      {
        _0x29ff04 ? this._safePostMessage(_0x29ff04, _0xb7602f) : this.postToWebview(_0xb7602f);
      }
    };
    let _0x5e9b0a = this.context.workspaceState.get("persistentChatSessionTitles") || {};
    for (let [_0x5ad5e9, _0x41f789] of Object.entries(_0x5e9b0a)) {
      {
        if (_0x5ad5e9.startsWith("temp_")) {
          {
            this.context.workspaceState.update("pchat_msg_" + _0x5ad5e9, undefined);
            continue;
          }
        }
        this.sessionTitles.set(_0x5ad5e9, _0x41f789);
        this.sessionIds.add(_0x5ad5e9);
      }
    }
    let _0x37bb2a = {};
    for (let [_0x3b245d, _0x38663e] of Object.entries(_0x5e9b0a)) _0x3b245d.startsWith("temp_") || (_0x37bb2a[_0x3b245d] = _0x38663e);
    Object.keys(_0x37bb2a).length !== Object.keys(_0x5e9b0a).length && this.context.workspaceState.update("persistentChatSessionTitles", _0x37bb2a);
    let _0x4b89cc = this.context.workspaceState.get("persistentChatUserRenamedSessions") || [];
    for (let _0x21bdfa of _0x4b89cc) this.userRenamedSessions.add(_0x21bdfa);
    this.messages = [];
    let _0x22c547 = this.context.workspaceState.get("persistentChatMessages");
    if (_0x22c547 && _0x22c547.length > 0) {
      this.messages = [..._0x22c547];
      this.persistMessages();
      this.context.workspaceState.update("persistentChatMessages", undefined);
    } else {
      for (let _0x2e40f7 of this.sessionIds) {
        let _0x1a695b = this.context.workspaceState.get("pchat_msg_" + _0x2e40f7) || [];
        this.messages.push(..._0x1a695b);
      }
      this.messages.sort((_0x24600c, _0x118370) => _0x24600c.timestamp - _0x118370.timestamp);
    }
    let _0x12b706 = null;
    for (let _0x2ad558 of this.messages) {
      {
        _0x2ad558.sessionId && (this.sessionIds.add(_0x2ad558.sessionId), _0x12b706 = _0x2ad558.sessionId);
        const _0x6b3612 = {
          assistant: "assistantMessage",
          user: "userMessage",
          system: "systemMessage"
        };
        let _0x1e7a58 = _0x6b3612[_0x2ad558.role];
        _0x1e7a58 && _0x51ee7e({
          type: _0x1e7a58,
          content: _0x2ad558.content,
          timestamp: _0x2ad558.timestamp,
          sessionId: _0x2ad558.sessionId,
          refs: _0x2ad558.refs
        });
      }
    }
    _0x12b706 && (this.lastActiveSessionId = _0x12b706);
  }
  handleWebviewMessage(_0x2f1012, _0x20cfbf) {
    let _0x513efc = _0x1917f1 => {
      _0x20cfbf ? this._safePostMessage(_0x20cfbf, _0x1917f1) : this.postToWebview(_0x1917f1);
    };
    if (_0x2f1012.type === "activeTabChanged") {
      let _0x2ee638 = _0x2f1012.sessionId;
      _0x20cfbf && _0x2ee638 ? this._activeTabByWebview.set(_0x20cfbf, _0x2ee638) : _0x20cfbf && this._activeTabByWebview.delete(_0x20cfbf);
      return;
    }
    if (_0x2f1012.type === "secondaryCloseDualPanel") {
      this.openInSidebar(false);
      return;
    }
    if (_0x2f1012.type === "openInWindow") {
      this.openInPanel();
      return;
    }
    if (_0x2f1012.type === "openInSidebar") {
      {
        this.openInSidebar(false);
        return;
      }
    }
    if (_0x2f1012.type === "ready") {
      _0x20cfbf && this._sendMode(_0x20cfbf, _0x20cfbf === this._primaryWebview ? "primary" : "secondary");
      _0x20cfbf && this._sendWindowState(_0x20cfbf);
      this.replayMessages(_0x20cfbf);
      this.syncWaitersToWebview();
      let _0x166de6 = this.context.globalState.get("persistentChatSettings") || {};
      let _0x12a4ec = l.workspace.getConfiguration("persistentChat").get("slotCount", 5);
      let _0x37cfe6 = this.context.globalState.get("persistentChat.replyTransport") || "file";
      let _0x421832 = {
        ..._0x166de6,
        slotCount: _0x12a4ec,
        replyTransport: _0x37cfe6
      };
      _0x513efc({
        type: "restoreSettings",
        settings: _0x421832
      });
      let _0x7c2223 = Number(_0x166de6.backendTo);
      _0x7c2223 > 0 && (n.TOOL_TIMEOUT_MS = _0x7c2223 * 60000);
      n._autoRenewEnabled = _0x166de6.autoRenew !== false;
      let _0x47e8f3 = Number(_0x166de6.cloudTo);
      let _0x517492 = Number(_0x166de6.beforeMin);
      _0x47e8f3 > 0 && _0x517492 >= 0 && (n._autoRenewMs = Math.max(0, (_0x47e8f3 - _0x517492) * 60000));
      let _0x5169d9 = this.context.workspaceState.get("persistentChatQueue") || [];
      _0x5169d9.length > 0 && _0x513efc({
        type: "restoreQueue",
        queue: _0x5169d9
      });
      this._onReadyOrRefresh && this._onReadyOrRefresh();
      this.context.globalState.get("persistentChatOnboardingDone") || _0x513efc({
        type: "showOnboarding"
      });
      this.sendActivationStatus();
      this.sendMcpStatus(this._mcpConnected);
      this.sendNodeStatus(_0x20cfbf);
      this.sendRecentFilesCache();
      let _0x8f84d9 = this.context.extension?.["packageJSON"]?.["version"] || "unknown";
      _0x513efc({
        type: "extensionVersion",
        version: _0x8f84d9
      });
      let _0x3ab86f = this.messages.length > 0 ? this.messages[this.messages.length - 1].timestamp : 0;
      let _0x29661a = Date.now() - _0x3ab86f;
      this.messages.length > 0 && this.waiters.size === 0 && _0x29661a < 300000 && _0x513efc({
        type: "reloadHint"
      });
      return;
    }
    if (_0x2f1012.type === "refreshUserInfo") {
      this._onReadyOrRefresh && this._onReadyOrRefresh();
      return;
    }
    if (_0x2f1012.type === "fetchTokenUsage") {
      let _0x168066 = _0x2f1012.page || 1;
      let _0x365b07 = _0x2f1012.pageSize || 20;
      this._onFetchTokenUsage && this._onFetchTokenUsage(_0x168066, _0x365b07);
      return;
    }
    if (_0x2f1012.type === "saveSettings") {
      let _0x2be3e7 = _0x2f1012.settings;
      if (_0x2be3e7) {
        this.context.globalState.update("persistentChatSettings", _0x2be3e7);
        _0x2be3e7.autoRenew !== undefined && (n._autoRenewEnabled = _0x2be3e7.autoRenew !== false);
        let _0x116b45 = Number(_0x2be3e7.cloudTo);
        let _0x521515 = Number(_0x2be3e7.beforeMin);
        _0x116b45 > 0 && _0x521515 >= 0 && (n._autoRenewMs = Math.max(0, (_0x116b45 - _0x521515) * 60000));
        (_0x2be3e7.replyTransport === "file" || _0x2be3e7.replyTransport === "markdown") && (this.context.globalState.update("persistentChat.replyTransport", _0x2be3e7.replyTransport), this._onSetReplyTransport && this._onSetReplyTransport(_0x2be3e7.replyTransport));
      }
      return;
    }
    if (_0x2f1012.type === "setReplyTransport") {
      let _0x23523e = _0x2f1012.transport;
      if (_0x23523e !== "file" && _0x23523e !== "markdown") {
        return;
      }
      this.context.globalState.update("persistentChat.replyTransport", _0x23523e);
      this._onSetReplyTransport && this._onSetReplyTransport(_0x23523e);
      return;
    }
    if (_0x2f1012.type === "saveQueue") {
      let _0x3356e8 = _0x2f1012.queue || [];
      this.context.workspaceState.update("persistentChatQueue", _0x3356e8);
      return;
    }
    if (_0x2f1012.type === "userReply") {
      let _0x173445 = (_0x2f1012.text || "").trim();
      let _0x4123ae = _0x2f1012.attachments || [];
      let _0xd437e4 = _0x2f1012.refs || [];
      let _0x327a16 = _0x2f1012.waiterId;
      if (!_0x173445 && _0x4123ae.length === 0) {
        return;
      }
      let _0x12ae6f = this._findWaiterByIdOrActive(_0x327a16, _0x20cfbf);
      if (!_0x12ae6f) {
        let _0x3223db = _0x327a16 && this.waiterSessionMap.get(_0x327a16) || undefined;
        if (_0x3223db && _0x173445) {
          {
            let _0x477a0e = _0x173445 + (_0x4123ae.length > 0 ? "\n[" + _0x4123ae.length + " 个附件]" : "");
            let _0x5ecfc7 = {
              role: "user",
              content: _0x477a0e,
              timestamp: Date.now(),
              sessionId: _0x3223db
            };
            this.messages.push(_0x5ecfc7);
            this.persistMessages(_0x3223db);
            this.postToWebview({
              type: "userMessage",
              content: _0x477a0e,
              timestamp: _0x5ecfc7.timestamp,
              sessionId: _0x3223db
            });
            this.pendingReplies.set(_0x3223db, {
              text: _0x173445,
              attachments: _0x4123ae,
              storedAt: Date.now()
            });
          }
        }
        return;
      }
      let _0x34bc87 = this.waiterSessionMap.get(_0x12ae6f.id);
      _0x12ae6f.timer && clearTimeout(_0x12ae6f.timer);
      _0x12ae6f.autoRenewTimer && clearTimeout(_0x12ae6f.autoRenewTimer);
      this.waiters.delete(_0x12ae6f.id);
      this.waiterSessionMap.delete(_0x12ae6f.id);
      this.lastResolvedSessionId = _0x34bc87 || null;
      _0x34bc87 && (this.lastActiveSessionId = _0x34bc87);
      _0x34bc87 && this.sessionLastActive.set(_0x34bc87, Date.now());
      let _0x292009 = _0x173445 + (_0x4123ae.length > 0 ? "\n[" + _0x4123ae.length + " 个附件]" : "");
      let _0x461a1a = {
        role: "user",
        content: _0x292009,
        timestamp: Date.now(),
        sessionId: _0x34bc87,
        refs: _0xd437e4.length > 0 ? _0xd437e4 : undefined
      };
      const _0x20ab30 = {
        text: _0x173445,
        attachments: _0x4123ae
      };
      this.messages.push(_0x461a1a);
      this.persistMessages(_0x34bc87 || "__default__");
      this.postToWebview({
        type: "userMessage",
        content: _0x292009,
        timestamp: _0x461a1a.timestamp,
        sessionId: _0x34bc87,
        refs: _0x461a1a.refs
      });
      this.syncWaitersToWebview();
      _0x12ae6f.resolve(_0x20ab30);
      return;
    }
    if (_0x2f1012.type === "clearHistory") {
      for (let _0x23684f of this.sessionIds) this.context.workspaceState.update("pchat_msg_" + _0x23684f, undefined);
      this.messages = [];
      this.sessionIds.clear();
      this.sessionTitles.clear();
      this.userRenamedSessions.clear();
      this.lastResolvedSessionId = null;
      this.lastActiveSessionId = null;
      this.sessionRenewCounters.clear();
      this.context.workspaceState.update("persistentChatMessages", undefined);
      this.context.workspaceState.update("persistentChatQueue", []);
      this.persistSessionTitles();
      this.waiters.forEach(_0x2af87a => {
        {
          const _0x13c295 = {
            text: n.RENEW_SIGNAL,
            attachments: []
          };
          _0x2af87a.timer && clearTimeout(_0x2af87a.timer);
          _0x2af87a.autoRenewTimer && clearTimeout(_0x2af87a.autoRenewTimer);
          _0x2af87a.resolve(_0x13c295);
        }
      });
      this.waiters.clear();
      this.waiterSessionMap.clear();
      this.syncWaitersToWebview();
      this.postToWebview({
        type: "resetUi"
      });
      return;
    }
    if (_0x2f1012.type === "autoRenew") {
      {
        let _0x431294 = _0x2f1012.waiterId;
        let _0x25cc8c = this._findWaiterByIdOrActive(_0x431294, _0x20cfbf);
        if (!_0x25cc8c) {
          return;
        }
        let _0x3df3a8 = this.waiterSessionMap.get(_0x25cc8c.id);
        _0x25cc8c.timer && clearTimeout(_0x25cc8c.timer);
        _0x25cc8c.autoRenewTimer && clearTimeout(_0x25cc8c.autoRenewTimer);
        this.waiters.delete(_0x25cc8c.id);
        this.waiterSessionMap.delete(_0x25cc8c.id);
        this.syncWaitersToWebview();
        _0x25cc8c.resolve({
          text: this.makeRenewText(_0x3df3a8 || undefined),
          attachments: []
        });
        return;
      }
    }
    if (_0x2f1012.type === "closeSession") {
      {
        let _0x3a2af8 = _0x2f1012.sessionId;
        if (!_0x3a2af8) {
          return;
        }
        this.messages = this.messages.filter(_0x4bb374 => _0x4bb374.sessionId !== _0x3a2af8);
        this.context.workspaceState.update("pchat_msg_" + _0x3a2af8, undefined);
        this.persistMessages(_0x3a2af8);
        this.sessionIds.delete(_0x3a2af8);
        this.sessionTitles.delete(_0x3a2af8);
        this.userRenamedSessions.delete(_0x3a2af8);
        this.persistSessionTitles();
        this.sessionRenewCounters.delete(_0x3a2af8);
        this._sessionShuffleState.delete(_0x3a2af8);
        this.lastActiveSessionId === _0x3a2af8 && (this.lastActiveSessionId = null);
        this.lastResolvedSessionId === _0x3a2af8 && (this.lastResolvedSessionId = null);
        let _0x134c44 = [...this.waiterSessionMap.entries()].filter(([, _0x294b1b]) => _0x294b1b === _0x3a2af8).map(([_0x405649]) => _0x405649);
        for (let _0x534831 of _0x134c44) {
          {
            let _0x1a7b1d = this.waiters.get(_0x534831);
            const _0x3196a5 = {
              text: n.RENEW_SIGNAL,
              attachments: []
            };
            _0x1a7b1d && (_0x1a7b1d.timer && clearTimeout(_0x1a7b1d.timer), _0x1a7b1d.autoRenewTimer && clearTimeout(_0x1a7b1d.autoRenewTimer), _0x1a7b1d.resolve(_0x3196a5));
            this.waiters.delete(_0x534831);
            this.waiterSessionMap.delete(_0x534831);
          }
        }
        this.syncWaitersToWebview();
        this.pendingReplies.delete(_0x3a2af8);
        this.postToWebview({
          type: "clearSessionHistory",
          sessionId: _0x3a2af8
        });
        this.syncWaitersToWebview();
        return;
      }
    }
    if (_0x2f1012.type === "renameSession") {
      let _0xaa53b2 = _0x2f1012.sessionId;
      let _0x4c280b = _0x2f1012.title;
      _0xaa53b2 && _0x4c280b && _0x4c280b.trim() && (this.sessionTitles.set(_0xaa53b2, _0x4c280b.trim()), this.userRenamedSessions.add(_0xaa53b2), this.persistSessionTitles(), this.syncWaitersToWebview());
    }
    if (_0x2f1012.type === "onboardingComplete") {
      {
        this.context.globalState.update("persistentChatOnboardingDone", true);
        return;
      }
    }
    if (_0x2f1012.type === "copyText") {
      let _0x2fa368 = _0x2f1012.text;
      _0x2fa368 && l.env.clipboard.writeText(_0x2fa368);
      return;
    }
    if (_0x2f1012.type === "updateBackendTimeout") {
      {
        let _0x17bc6a = Number(_0x2f1012.minutes);
        _0x17bc6a > 0 && (n.TOOL_TIMEOUT_MS = _0x17bc6a * 60000);
        return;
      }
    }
    if (_0x2f1012.type === "updateSlotCount") {
      let _0x5ee8e9 = Math.max(1, Math.min(20, Math.floor(Number(_0x2f1012.count) || 5)));
      l.workspace.getConfiguration("persistentChat").update("slotCount", _0x5ee8e9, l.ConfigurationTarget.Workspace).then(() => {
        {
          l.window.showInformationMessage("槽位数量已更新为 " + _0x5ee8e9 + "。需要重载窗口使新配置生效。", "重新加载窗口").then(_0x3c2f74 => {
            _0x3c2f74 === "重新加载窗口" && l.commands.executeCommand("workbench.action.reloadWindow");
          });
        }
      });
      return;
    }
    if (_0x2f1012.type === "resolveDroppedPaths") {
      {
        let _0x4c32b6 = _0x2f1012.paths || [];
        let _0x3f7dd6 = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
        let _0x30e3b9 = [];
        for (let _0x32a9f4 of _0x4c32b6) try {
          let _0xe6481f = _0x32a9f4.replace(/[/\\]+$/, "");
          let _0x192bca = D.statSync(_0xe6481f).isDirectory();
          let _0x1fa0eb = _0x3f7dd6 && _0xe6481f.startsWith(_0x3f7dd6 + _.sep) ? _0xe6481f.slice(_0x3f7dd6.length + 1) : _0xe6481f;
          let _0x21ce67 = _.basename(_0xe6481f) || _0xe6481f;
          _0x30e3b9.push({
            path: _0x1fa0eb.replace(/\\/g, "/"),
            name: _0x21ce67,
            isFolder: _0x192bca
          });
        } catch {}
        _0x30e3b9.length > 0 && this.postToWebview({
          type: "droppedPathsResolved",
          refs: _0x30e3b9
        });
        return;
      }
    }
    if (_0x2f1012.type === "selectFileRef") {
      let _0x347922 = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
      let _0x48f19c = l.window.activeTextEditor;
      if (_0x48f19c && _0x48f19c.document.uri.scheme === "file") {
        {
          let _0x36bc63 = _0x48f19c.document.fileName;
          let _0x1e29c0 = _0x347922 && _0x36bc63.startsWith(_0x347922 + _.sep) ? _0x36bc63.slice(_0x347922.length + 1) : _0x36bc63;
          let _0x3b247e = _0x48f19c.selection;
          let _0x3ae1ac = _0x3b247e.isEmpty ? null : _0x3b247e.start.line + 1 + "-" + (_0x3b247e.end.line + 1);
          this.postToWebview({
            type: "fileRefAdded",
            path: _0x1e29c0,
            name: _.basename(_0x36bc63),
            lines: _0x3ae1ac
          });
          return;
        }
      }
      l.window.showOpenDialog({
        canSelectFiles: true,
        canSelectFolders: true,
        canSelectMany: true,
        defaultUri: _0x347922 ? l.Uri.file(_0x347922) : undefined
      }).then(_0x39b758 => {
        {
          if (_0x39b758) {
            for (let _0x47067d of _0x39b758) {
              {
                let _0x50b680 = _0x347922 && _0x47067d.fsPath.startsWith(_0x347922 + _.sep) ? _0x47067d.fsPath.slice(_0x347922.length + 1) : _0x47067d.fsPath;
                let _0x47a80b = false;
                try {
                  _0x47a80b = D.statSync(_0x47067d.fsPath).isDirectory();
                } catch {}
                this.postToWebview({
                  type: "fileRefAdded",
                  path: _0x50b680,
                  name: _.basename(_0x47067d.fsPath),
                  isFolder: _0x47a80b
                });
              }
            }
          }
        }
      });
      return;
    }
    if (_0x2f1012.type === "createTempSession") {
      {
        let _0x3d3a22 = _0x2f1012.tempId;
        if (!_0x3d3a22) {
          return;
        }
        this.pendingTempSessions.push({
          tempId: _0x3d3a22,
          createdAt: Date.now()
        });
        this.sessionIds.add(_0x3d3a22);
        this.sessionTitles.set(_0x3d3a22, "新对话");
        this.lastActiveSessionId = _0x3d3a22;
        this.persistSessionTitles();
        this.syncWaitersToWebview();
        let _0x1f7f30 = setTimeout(() => {
          {
            this._tempSessionTimers.delete(_0x1f7f30);
            let _0x2f30a2 = this.pendingTempSessions.findIndex(_0x3b7bd3 => _0x3b7bd3.tempId === _0x3d3a22);
            _0x2f30a2 >= 0 && (this.pendingTempSessions.splice(_0x2f30a2, 1), this.sessionIds.has(_0x3d3a22) && !this.hasActiveWaiter(_0x3d3a22) && (this.sessionIds.delete(_0x3d3a22), this.sessionTitles.delete(_0x3d3a22), this.messages = this.messages.filter(_0x4c9e66 => _0x4c9e66.sessionId !== _0x3d3a22), this.context.workspaceState.update("pchat_msg_" + _0x3d3a22, undefined), this.persistSessionTitles(), this.postToWebview({
              type: "clearSessionHistory",
              sessionId: _0x3d3a22
            }), this.syncWaitersToWebview()));
          }
        }, 300000);
        this._tempSessionTimers.add(_0x1f7f30);
        return;
      }
    }
    if (_0x2f1012.type === "startNewChat") {
      let _0xca775b = (_0x2f1012.text || "").trim();
      let _0x27a3e6 = _0xca775b ? "请使用 wait_for_user_input 工具与我进行持久对话。我的第一个请求是：\n\n" + _0xca775b : "请使用 wait_for_user_input 工具与我进行持久对话。每当你完成一个任务或需要我的反馈时，调用此工具等待我的回复，不要结束对话。";
      l.env.clipboard.writeText(_0x27a3e6);
      l.commands.executeCommand("composer.createNewComposerTab").then(() => {
        setTimeout(() => {
          l.commands.executeCommand("editor.action.clipboardPasteAction").then(undefined, () => {});
        }, 500);
      });
      return;
    }
    if (_0x2f1012.type === "openMcpSettings") {
      {
        l.commands.executeCommand("aiSettings.action.open.mcp").then(undefined, () => l.commands.executeCommand("workbench.action.openMCPSettings"));
        return;
      }
    }
    if (_0x2f1012.type === "checkActivation") {
      let _0x1ca951 = M.getInstance();
      if (_0x1ca951) {
        {
          let _0x6a789d = _0x1ca951.isActivated();
          _0x1ca951.ensureTokenValid(true).then(_0x5ee78b => {
            let _0x293cba = _0x1ca951.isActivated();
            if (_0x6a789d && !_0x293cba && !_0x5ee78b) {
              let _0x3501c0 = _0x1ca951.getLicenseInfo();
              const _0x4c6fe0 = {
                type: "activationStatus",
                activated: false,
                plan: null,
                planLabel: null,
                expiresAt: 0,
                remaining: null,
                key: null,
                fullKey: null,
                deactivatedReason: "卡密已失效，请重新激活"
              };
              this.postToWebview(_0x4c6fe0);
            } else {
              this.sendActivationStatus();
            }
          }).catch(() => {
            this.sendActivationStatus();
          });
        }
      } else {
        this.sendActivationStatus();
      }
      return;
    }
    if (_0x2f1012.type === "activate") {
      {
        let _0x227609 = _0x2f1012.key;
        if (!_0x227609) {
          return;
        }
        let _0x586373 = M.getInstance();
        if (!_0x586373) {
          return;
        }
        _0x586373.activate(_0x227609).then(_0x55440a => {
          const _0x3b8743 = {
            type: "activationResult",
            ..._0x55440a
          };
          this.postToWebview(_0x3b8743);
          _0x55440a.success && this.sendActivationStatus();
        }).catch(() => {
          {
            const _0x5a0278 = {
              type: "activationResult",
              success: false,
              error: "激活过程发生错误，请重试"
            };
            this.postToWebview(_0x5a0278);
          }
        });
        return;
      }
    }
    if (_0x2f1012.type === "deactivate") {
      {
        let _0x3d547d = M.getInstance();
        if (!_0x3d547d) {
          return;
        }
        _0x3d547d.deactivateKey().then(_0x13352e => {
          const _0x338a3a = {
            type: "deactivateResult",
            ..._0x13352e
          };
          this.postToWebview(_0x338a3a);
          this.sendActivationStatus();
        });
        return;
      }
    }
    if (_0x2f1012.type === "applyRenewal") {
      {
        let _0x1c7ba5 = _0x2f1012.renewalKey;
        if (!_0x1c7ba5) {
          return;
        }
        let _0x38de32 = M.getInstance();
        if (!_0x38de32) {
          {
            const _0x4b55af = {
              type: "renewalResult",
              success: false,
              error: "激活状态异常，请重新激活后重试"
            };
            this.postToWebview(_0x4b55af);
            return;
          }
        }
        _0x38de32.applyRenewal(_0x1c7ba5).then(_0x410e4e => {
          const _0x1074a5 = {
            type: "renewalResult",
            ..._0x410e4e
          };
          this.postToWebview(_0x1074a5);
          _0x410e4e.success && this.sendActivationStatus();
        }).catch(() => {
          {
            const _0x5cefde = {
              type: "renewalResult",
              success: false,
              error: "续费过程发生错误，请重试"
            };
            this.postToWebview(_0x5cefde);
          }
        });
        return;
      }
    }
    if (_0x2f1012.type === "revealInExplorer") {
      let _0x40ac0 = _0x2f1012.path;
      if (!_0x40ac0) {
        return;
      }
      let _0x2c845e = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
      let _0x117bb1 = _.isAbsolute(_0x40ac0) ? _0x40ac0 : _.join(_0x2c845e, _0x40ac0);
      l.commands.executeCommand("revealInExplorer", l.Uri.file(_0x117bb1));
      return;
    }
    if (_0x2f1012.type === "openFile") {
      {
        let _0x941d70 = _0x2f1012.path;
        let _0x1986af = _0x2f1012.lines;
        if (!_0x941d70) {
          return;
        }
        let _0x28bb59 = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
        let _0xf18f01 = _.isAbsolute(_0x941d70) ? _0x941d70 : _.join(_0x28bb59, _0x941d70);
        let _0x4b5432 = 0;
        let _0x2d4021 = 0;
        if (_0x1986af) {
          let _0x4dc832 = _0x1986af.match(/^(\d+)(?:-(\d+))?$/);
          _0x4dc832 && (_0x4b5432 = Math.max(0, Number(_0x4dc832[1]) - 1), _0x2d4021 = _0x4dc832[2] ? Math.max(0, Number(_0x4dc832[2]) - 1) : _0x4b5432);
        }
        l.workspace.openTextDocument(l.Uri.file(_0xf18f01)).then(_0x4e0ed4 => {
          let _0x16f8fe = _0x2d4021 < _0x4e0ed4.lineCount ? _0x4e0ed4.lineAt(_0x2d4021).range.end.character : 0;
          let _0x40c32e = l.window.activeTextEditor?.["viewColumn"] ?? l.ViewColumn.One;
          l.window.showTextDocument(_0x4e0ed4, {
            selection: new l.Range(_0x4b5432, 0, _0x2d4021, _0x16f8fe),
            viewColumn: _0x40c32e,
            preview: true
          });
        }, () => {});
        return;
      }
    }
    if (_0x2f1012.type === "searchFiles") {
      {
        let _0x245f85 = (_0x2f1012.query || "").trim();
        let _0x2c6a4b = _0x2f1012.reqId;
        let _0x492568 = _0x20cfbf || undefined;
        let _0x59984d = _0x3b8280 => _0x492568 ? this._safePostMessage(_0x492568, _0x3b8280) : this.postToWebview(_0x3b8280);
        if (!_0x245f85) {
          _0x59984d({
            type: "searchResults",
            results: [],
            reqId: _0x2c6a4b
          });
          return;
        }
        let _0x4c734b = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
        if (!_0x4c734b) {
          {
            _0x59984d({
              type: "searchResults",
              results: [],
              reqId: _0x2c6a4b
            });
            return;
          }
        }
        let _0x4a5c8e = _0x245f85.replace(/[*?{}[\]]/g, "");
        if (!_0x4a5c8e) {
          {
            let _0x53ef04 = [];
            try {
              for (let _0x5ba402 of l.window.tabGroups.all) {
                {
                  for (let _0x2dc442 of _0x5ba402.tabs) {
                    let _0x4e7d43 = _0x2dc442.input;
                    if (_0x4e7d43?.["uri"]?.["scheme"] === "file") {
                      {
                        let _0x363538 = _0x4e7d43.uri.fsPath;
                        let _0x28118d = _0x4c734b && _0x363538.startsWith(_0x4c734b + _.sep) ? _0x363538.slice(_0x4c734b.length + 1) : _0x363538;
                        if (_0x53ef04.some(_0x5cff95 => _0x5cff95.path === _0x28118d) || _0x53ef04.push({
                          path: _0x28118d,
                          name: _.basename(_0x363538)
                        }), _0x53ef04.length >= 3) {
                          break;
                        }
                      }
                    }
                  }
                  if (_0x53ef04.length >= 3) {
                    break;
                  }
                }
              }
            } catch {}
            if (_0x53ef04.length > 0) {
              {
                _0x59984d({
                  type: "searchResults",
                  results: _0x53ef04,
                  _isRecent: true,
                  reqId: _0x2c6a4b
                });
                return;
              }
            }
            l.workspace.findFiles("**/*", "**/node_modules/**", 15).then(_0x230e71 => {
              let _0x15b569 = _0x230e71.map(_0xc31ff => ({
                path: _0x4c734b && _0xc31ff.fsPath.startsWith(_0x4c734b + _.sep) ? _0xc31ff.fsPath.slice(_0x4c734b.length + 1) : _0xc31ff.fsPath,
                name: _.basename(_0xc31ff.fsPath)
              }));
              const _0x27709f = {
                type: "searchResults",
                results: _0x15b569,
                reqId: _0x2c6a4b
              };
              _0x59984d(_0x27709f);
            });
            return;
          }
        }
        let _0x2aeb57 = _0x4a5c8e.replace(/[a-zA-Z]/g, _0x48a334 => "[" + _0x48a334.toLowerCase() + _0x48a334.toUpperCase() + "]");
        l.workspace.findFiles("**/*" + _0x2aeb57 + "*", "**/node_modules/**", 15).then(_0x1649c6 => {
          {
            let _0x2a19d9 = _0x1649c6.map(_0x32203a => ({
              path: _0x4c734b && _0x32203a.fsPath.startsWith(_0x4c734b + _.sep) ? _0x32203a.fsPath.slice(_0x4c734b.length + 1) : _0x32203a.fsPath,
              name: _.basename(_0x32203a.fsPath)
            }));
            _0x59984d({
              type: "searchResults",
              results: _0x2a19d9,
              reqId: _0x2c6a4b
            });
          }
        });
        return;
      }
    }
    if (_0x2f1012.type === "readFileRefs") {
      {
        let _0x258a3f = _0x2f1012.refs || [];
        this.readFileRefsAsync(_0x258a3f).then(_0x48415c => {
          {
            const _0x3320e7 = {
              type: "fileRefsContent",
              content: _0x48415c
            };
            const _0x303f8e = {
              type: "fileRefsContent",
              content: _0x48415c
            };
            _0x20cfbf ? this._safePostMessage(_0x20cfbf, _0x3320e7) : this.postToWebview(_0x303f8e);
          }
        });
        return;
      }
    }
  }
  sendMcpStatus(_0x22e2f8) {
    this._mcpConnected = _0x22e2f8;
    this.postToWebview({
      type: "mcpStatus",
      connected: _0x22e2f8
    });
  }
  setNodeStatus(_0x190474) {
    const _0x514db6 = {
      state: _0x190474.state,
      version: _0x190474.version || null,
      detail: _0x190474.detail || null
    };
    this._nodeStatus = _0x514db6;
    this.sendNodeStatus();
  }
  sendNodeStatus(_0x1b5da6) {
    const _0x5842b6 = {
      type: "nodeStatus",
      ...this._nodeStatus
    };
    let _0x2f056c = _0x5842b6;
    _0x1b5da6 ? this._safePostMessage(_0x1b5da6, _0x2f056c) : this.postToWebview(_0x2f056c);
  }
  sendActivationStatus() {
    let _0x3db06 = M.getInstance();
    if (!_0x3db06) {
      return;
    }
    let _0x22d7b1 = _0x3db06.getLicenseInfo();
    this.postToWebview({
      type: "activationStatus",
      activated: _0x3db06.isActivated(),
      plan: _0x22d7b1?.["plan"] || null,
      planLabel: _0x3db06.getPlanLabel(),
      expiresAt: _0x22d7b1?.["expiresAt"] || 0,
      remaining: _0x3db06.formatTimeRemaining(),
      key: _0x22d7b1?.["key"] ? _0x22d7b1.key.slice(0, 10) + "****" : null,
      fullKey: _0x22d7b1?.["key"] || null
    });
  }
  sendRecentFilesCache() {
    let _0x21e2bb = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
    if (!_0x21e2bb) {
      return;
    }
    let _0x244dde = [];
    try {
      for (let _0xa9dd59 of l.window.tabGroups.all) {
        for (let _0xc09314 of _0xa9dd59.tabs) {
          {
            let _0x20631e = _0xc09314.input;
            if (_0x20631e?.["uri"]?.["scheme"] === "file") {
              {
                let _0x4d7845 = _0x20631e.uri.fsPath;
                let _0x2d281f = _0x21e2bb && _0x4d7845.startsWith(_0x21e2bb + _.sep) ? _0x4d7845.slice(_0x21e2bb.length + 1) : _0x4d7845;
                if (_0x244dde.some(_0x4d7873 => _0x4d7873.path === _0x2d281f) || _0x244dde.push({
                  path: _0x2d281f,
                  name: _.basename(_0x4d7845)
                }), _0x244dde.length >= 5) {
                  break;
                }
              }
            }
          }
        }
        if (_0x244dde.length >= 5) {
          break;
        }
      }
    } catch {}
    const _0x1648c3 = {
      type: "recentFilesCache",
      results: _0x244dde
    };
    this.postToWebview(_0x1648c3);
  }
  async readFileRefsAsync(_0x4261da) {
    let _0x42b615 = l.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
    let _0x40ae45 = 65536;
    let _0x38f8f9 = 196608;
    let _0x2e7f13 = "###FILEREF:";
    let _0x4c8469 = [];
    let _0x762137 = _0x42b615 ? _.resolve(_0x42b615) : "";
    let _0x33388a = _0x762137 ? _0x762137 + _.sep : "";
    let _0x563252 = 0;
    for (let _0x346f7d of _0x4261da) try {
      let _0x579d10 = _.isAbsolute(_0x346f7d.path) ? _0x346f7d.path : _.join(_0x42b615, _0x346f7d.path);
      let _0x37da88 = _.resolve(_0x579d10);
      if (_0x762137 && _0x37da88 !== _0x762137 && !_0x37da88.startsWith(_0x33388a)) {
        {
          _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + "\n[路径在工作区外]");
          continue;
        }
      }
      let _0x1dcc8c = await D.promises.stat(_0x37da88);
      if (_0x1dcc8c.isDirectory()) {
        {
          let _0x5cc7f = this.buildFileTree(_0x37da88, 3, 100).join("\n");
          if (_0x563252 + _0x5cc7f.length > _0x38f8f9) {
            {
              _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + " (folder)\n[总内容超出限制]");
              break;
            }
          }
          _0x563252 += _0x5cc7f.length;
          _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + " (folder)\n```\n" + _0x5cc7f + "\n```");
          continue;
        }
      }
      if (_0x1dcc8c.size > _0x40ae45) {
        _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + "\n[文件过大: " + Math.round(_0x1dcc8c.size / 1024) + "KB，上限 " + _0x40ae45 / 1024 + "KB]");
        continue;
      }
      let _0x8ccd3c = await D.promises.readFile(_0x37da88, "utf8");
      let _0x299369 = _0x8ccd3c;
      if (_0x346f7d.lines) {
        {
          let _0x54a23 = _0x346f7d.lines.match(/^L?(\d+)(?:-(\d+))?$/);
          if (_0x54a23) {
            {
              let _0x1c9a0a = Math.max(1, Number(_0x54a23[1]));
              let _0x47e493 = _0x54a23[2] ? Number(_0x54a23[2]) : _0x1c9a0a;
              _0x299369 = _0x8ccd3c.split("\n").slice(_0x1c9a0a - 1, _0x47e493).join("\n");
            }
          }
        }
      }
      if (_0x563252 + _0x299369.length > _0x38f8f9) {
        {
          _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + "\n[总内容超出限制]");
          break;
        }
      }
      _0x563252 += _0x299369.length;
      let _0x4f476b = _0x346f7d.lines ? " #" + _0x346f7d.lines : "";
      _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + _0x4f476b + "\n```\n" + _0x299369 + "\n```");
    } catch {
      _0x4c8469.push(_0x2e7f13 + " " + _0x346f7d.path + "\n[文件不存在或无法读取]");
    }
    return _0x4c8469.join("\n\n");
  }
  buildFileTree(_0x2ac916, _0x3aaefb, _0x4bdca8) {
    let _0x563964 = new Set(["node_modules", ".git", ".DS_Store", "__pycache__", ".next", "dist", ".cache", ".turbo", ".venv", "venv"]);
    let _0x298a2e = [];
    let _0x1f1c09 = 0;
    let _0x466032 = false;
    let _0x14acbe = (_0x48e9f6, _0x52ccde, _0x1ea602) => {
      if (_0x1ea602 > _0x3aaefb || _0x466032) {
        return;
      }
      let _0xfd874a;
      try {
        const _0xd4d670 = {
          withFileTypes: true
        };
        _0xfd874a = D.readdirSync(_0x48e9f6, _0xd4d670);
      } catch {
        {
          return;
        }
      }
      _0xfd874a = _0xfd874a.filter(_0x5885de => !_0x563964.has(_0x5885de.name) && !_0x5885de.name.startsWith(".")).sort((_0x2a8c2e, _0x4acabe) => _0x2a8c2e.isDirectory() !== _0x4acabe.isDirectory() ? _0x2a8c2e.isDirectory() ? -1 : 1 : _0x2a8c2e.name.localeCompare(_0x4acabe.name));
      for (let _0x5148e3 = 0; _0x5148e3 < _0xfd874a.length; _0x5148e3++) {
        if (_0x1f1c09 >= _0x4bdca8) {
          {
            _0x466032 = true;
            return;
          }
        }
        let _0x4e0a4a = _0xfd874a[_0x5148e3];
        let _0x4dbec9 = _0xfd874a.length - 1 - _0x5148e3 === 0;
        _0x298a2e.push(_0x52ccde + (_0x4dbec9 ? "└── " : "├── ") + _0x4e0a4a.name + (_0x4e0a4a.isDirectory() ? "/" : ""));
        _0x1f1c09++;
        _0x4e0a4a.isDirectory() && !_0x466032 && _0x14acbe(_.join(_0x48e9f6, _0x4e0a4a.name), _0x52ccde + (_0x4dbec9 ? "    " : "│   "), _0x1ea602 + 1);
      }
    };
    _0x298a2e.push(_.basename(_0x2ac916) + "/");
    _0x14acbe(_0x2ac916, "", 1);
    _0x466032 && _0x298a2e.push("... (" + _0x1f1c09 + " entries shown, limit " + _0x4bdca8 + ")");
    return _0x298a2e;
  }
  getActiveSessionCount() {
    let _0x384b30 = new Set();
    for (let _0x505496 of this.waiterSessionMap.values()) _0x384b30.add(_0x505496);
    return _0x384b30.size;
  }
  hasActiveWaiter(_0x2a862f) {
    for (let [_0x125e61, _0x1b71b3] of this.waiterSessionMap) if (_0x1b71b3 === _0x2a862f && this.waiters.has(_0x125e61)) {
      return true;
    }
    return false;
  }
  getRecentActiveSessions(_0x1d210d = 1800000) {
    let _0x277970 = Date.now() - _0x1d210d;
    let _0x5bdd16 = [];
    let _0x1efafd = new Set();
    for (let _0x4b6045 of this.waiterSessionMap.values()) _0x1efafd.add(_0x4b6045);
    for (let _0x5be43a of this.sessionIds) {
      {
        let _0x36ac7a = this.sessionLastActive.get(_0x5be43a) || 0;
        let _0x513430 = _0x1efafd.has(_0x5be43a);
        (_0x513430 || _0x36ac7a >= _0x277970) && _0x5bdd16.push({
          token: _0x5be43a,
          title: this.sessionTitles.get(_0x5be43a) || null,
          lastActiveAt: _0x36ac7a,
          hasWaiter: _0x513430
        });
      }
    }
    _0x5bdd16.sort((_0xb8644a, _0xb88fc0) => _0xb88fc0.lastActiveAt - _0xb8644a.lastActiveAt);
    return _0x5bdd16;
  }
  postToWebview(_0x1a0b83) {
    for (let _0x1b9fd7 of [...this._webviews]) this._safePostMessage(_0x1b9fd7, _0x1a0b83);
  }
  cleanup() {
    this._disposePanelTabWatcher();
    for (let _0x3d1517 of this.waiters.values()) _0x3d1517.timer && clearTimeout(_0x3d1517.timer), _0x3d1517.autoRenewTimer && clearTimeout(_0x3d1517.autoRenewTimer), _0x3d1517.resolve({
      text: n.RENEW_SIGNAL,
      attachments: []
    });
    this.waiters.clear();
    this.waiterSessionMap.clear();
    for (let _0x5334fe of this._tempSessionTimers) clearTimeout(_0x5334fe);
    this._tempSessionTimers.clear();
    this.persistTimer && (clearTimeout(this.persistTimer), this.persistTimer = null, this._flushPersistMessages());
  }
  static _htmlTemplateCache = null;
  buildHtml(_0x2ba6a5) {
    let _0x5c818d = _.join(this.context.extensionPath, "dist", "webview");
    let _0x19ab30 = _0x2ba6a5.asWebviewUri(l.Uri.file(_.join(_0x5c818d, "chatPanel.css")));
    let _0x2fe4e6 = _0x2ba6a5.asWebviewUri(l.Uri.file(_.join(_0x5c818d, "chatPanel.js")));
    let _0x3e84ce = _.join(_0x5c818d, "marked.js");
    let _0x33f95b = D.existsSync(_0x3e84ce) ? _0x2ba6a5.asWebviewUri(l.Uri.file(_0x3e84ce)).toString() : "";
    n._htmlTemplateCache || (n._htmlTemplateCache = D.readFileSync(_.join(_0x5c818d, "chatPanel.html"), "utf8"));
    let _0xe60a2e = n._htmlTemplateCache;
    _0xe60a2e = _0xe60a2e.replace("__CSS_URI__", _0x19ab30.toString());
    _0xe60a2e = _0xe60a2e.replace("__JS_URI__", _0x2fe4e6.toString());
    _0xe60a2e = _0xe60a2e.replace("__MARKED_URI__", _0x33f95b);
    let _0x40a318 = _.join(_0x5c818d, "seti.woff");
    let _0xf76fa4 = D.existsSync(_0x40a318) ? _0x2ba6a5.asWebviewUri(l.Uri.file(_0x40a318)).toString() : "";
    _0xe60a2e = _0xe60a2e.replace("__SETI_FONT_URI__", _0xf76fa4);
    return _0xe60a2e;
  }
};
var Ft = "f78665e43d1ead47529e6bfc07527578f7df1eaed364468711f7eb11e3c84885";
var Lt = "daab48ee597bde2420f71b886e3d1b42d78f7bdca00d35f374999f31a0a029f1d7ab45a5743ec03221ea4b9f683c011199aa71dba0083fa77296877dc3bf29ec83d9038b4f41d83437ec34956922000cd7be78dab61666e267929968c3ba2df59bff49c44f7bc0263bf04b956972341f92b16a8ebe0b22e23dd7807486b868f19fe345975c73c8673ff10f996b7e551999bb3ec0b61223f531848e7d85e53ce085eb0c8a5c6ac86726f60edc6b3d1a08d9d579c2bc0635bd31d5c13bcce26a8f96ea1285446dec3722f212c62726070d92d53383fe6e65a7419299628abb3ce099f245a7557fd96700eb079974725d39b58c51e2863003a741a5a25eb1811cdcde8c6fc71e3eff323efb4bac753b1a0a9eab678efc4405e87f91877880bc68d792f50a88486ac4283cbe43b44e153d3da48b3efe812d09d558a3b238e9c21ced92f500c44f6bc12221be039d7137551995ac71c2a61023a76185827e91a13cfcd7ef0b97547ac86726f6028f27251a0a9cac6ecfb001688d1bdacb458bad68c4bea628b16e4a8d213df20793707201109eac3ec8ba0823a774818e7fc3a12ea598f20d814f3eca223cfb19956472140b84b66ddab20a32a779929e638abb3cec94f545974879ca2221ea51f62772585896a971c7b70d28e0319b847e93bb42a5d7ab45854b71c4233bf00cdc7537051d96ab7bcaf31029e87dd788708fa43b8fd7a648c45c68c22e36f7059b2720100c85b67bddd94466aa3187997495ad26f19ee802c44f7bce3220ed029369585558daff6ddabc1436ee7f90cb7085bc2df7d7f20497563ece283fee0799733b1a16fdff3e83f31623e36494827f84e83cea98ea45914e7fca2258be4bd12720101e82ac77c0b44434e261928a6586ac68c8b4d645875c72c134589446dc533a10589bb071def30023e178998e75c3a126a583ee0c971d78c42b37be028f27785f1199ab7bc0a70d29e9709bc73195a924ec93aa4585537a8d3537ef1e9575371152ddf11483f3302ee231b6a231ae9d1bd1d7c82ab01d71db2220ec0298627e550f92be75cbbd4866f5749e856586ba38f792f249c4526c8d2e35f0048e6272011092ac7b8ea1112ae262d78d7e91e83ae096f50a8a4e3ede3231f64b9d74687f58d7f23e8ca70b66e667988275c3a126e39ee80c90583ec1283dee18de0d725555d7fd6ac1f31434e267928565c3ba2df592e71181593ee00402be089d6b3e065afdff3e83f34624e272969e6286e829eb96ea1c97546d8d2e21be0a907537141c8eff7dc1be142ae26592c91bc3e865a5d5e400875c6bde2272f004dc6127070c9fba6c8ea61723f53c8182628aaa24e0d7e910904d6bd9673bed4b926237111d93fd148ef34966a57392887096bb2da585e31196547bde673fff12dc643d1b0c9eb16bcbf30229f574818e63c1c242cc91a6048a443ec42926fb1992663e551092aa6cc7a0102fe43dd78f7485a93de983a60781557fdb2e3dec47dc6820551f92b17bdcb20866ee7f849f6396ab3cec98e845875270cb2b3bfd1f8f27251c0c9fff6ac6ba1766e1789b8e3dc3bc20ec84a6038d517b8d303bf018d20d585855dad5148df0440be87592cb37c38527e192ea45a8527dc6677add39b5531b3639bbf614a4fe440bd242a3cb6386a529ec99a60c8a1d34870635fb0588273f1a1c92f5348eb21066e67d9bcb658aa52df6fdab45a9684df96727ed0edc733a1058ddf56dcfbe0166ea7e938e7dc9e268e398f44590557b8d223cea028e6272061d84ac77c1bd6e6ba7459f8e3180bd3af792e811c45071c92272ff05982731000a85ba70daf30929e3749bcb7091ad68e39efe00801d7fc32372f706917226141a9bba3ec8bc1666f37992cb7596ba29f19ee90bc452788d333afb4b8f6221061198b11483f33712d558b4bf5dbae80ecaa5c42ca0795be37d58be4bd12721021183bc76c7bd0366f37ed7bb7d82a668e898e200ee1d3e806721e90288643a1c1690ff6ac1f32633ee7d93cb7c8cac2d8fd7a648c44e69c43331f6029260720117d79b7bcca60366ea7e938e1bc3e865a584f10c905e76c42935be1f9327130613d7b271cab66e66a73cd798668abc2bed9ee802c45071c9223eed61dc277f550b82b879cba0102fe976d7867e87ad24a594ee048a5a7bde4d72be46dc6337191d90be6ac7bd0366f37ed7986481a92fe099f216ee1d3e806721f706896b33011199b83ec3a60832ee3c849f7084ad68f298f40e825171da3458943f9462723431d7924bfd874408c845d798709ae827f7d7ef08945167974d7fbe498f703b011b9fb670c9f31029a7619b8a7fc1c265a5d5f5128d497dc52e3cf94b886872170d9eb37a8cd94966a56484827f84e829a595e31190586c8d2a3dfa0e9025585858d5bb7bc2b60327f378998c3197a768e499e9118c586c8d2a3dfa0e9025587f55daf214a4f04766c97ed7af7485ad3af796ea45cb1d50c2671bf01f997520000883b671c0f34b66c97ed7a87e8dbe2df784e7118d52708d1425f71f9f6f3b1b1fd7f75dfc9a300fc450bbc21be9e568c8a2d531c4557fc3233efb4bbd4b1e550d84ba6c8ea10137f274849f62c3bf21f19fef0bc44976c86778b408897520101683ff7dc1bd1223f562969f788ca662affdab45ad5b3ed92f37be1f9d7439551184ff72cfa10323ab3194847f97a126f092a60c90586ccc333be80e907e72021183b777c0f3102ee231848a7c86e838e085f50c97497bc33372f2049377585858ba8a4dfaf30729ea619b8e6586e829f6d7eb1087553ecc3472ee048f743b171492ff77c0f30127e479d7997493a4318fdaa636b06f57ee131ec74bba48003731b39b5be0e96e66a73cd7986484af2df683ef0b831d7f8d2937e94b9f683c031d85ac7fdaba0b288d31d7c63190b824ec83f20c8a5a3ed82934f70595743a101cd7a871dcb8442fe96598cb708da73ced92f445875270db2220ed0a886e3d1b72d7ff338ea0053fee7f90cb658bad68e682f41781536a8d243df01d997521140c9eb0708ea00c29f27d93cb6297a738a59fe31781373e8d6a72ee048f73221a169eb1798ea40b34ec1bd7cb3cc3b829f084ef0b831d7cc82433eb18992770101698aa79c6f30528e67d8e987890e820e484a604884f7bcc232bbe0999623c551c98b17b8cd94466aa31849f7e93b821eb90a607815e7fd83437be49886f37550c96ac758eba1766e47e9a9b7d86bc2da7fda645c91d6dd92822ee02926072171d94be6bddb64464f37e98cb7c82a631a594ee048a5a7bde6725fb1999273f141c92fd148ef34966f464908c7490bc21eb90a611814e6ade6734f7198f73721c1684ab7bcfb74429e13194847f97a126f09ee802c44a76c82972ea03992727061d85ff7fddb80122a76598cb728ca63cec99f300ee373d8e6472d8048e653b111c92b13edebb1627f47484cb3ec3aa2ded96f00c8b4f6da74d06f60edc461b5535a28c4a8e9d2b12a76185847596ab2da596e81c905577c32072fb1a896e24141492b16a8ea70b7c8d1bdacb3390bd2fe292f511c4557fc3233ef7059b273b1b5896ff70cba44425e87f818e6390a93cec98e847ee103e8f2433f04b9f683c011199aa7b8eba0a66f37992cb7f86b03ca594e90b92586cde2626f7049225585858d5bc6bdca10128f33194847f95ad3af696f20c8b533ec43472f004882721001183be7cc2b64432e83194847f97a126f092a46fc91d3ccc2933f2128f6e21551184ff7fc2a10127e368d7887e8eb824e083e349c44e718d0e72e902906b72060c98af3edabb0166eb7e989b33e9e568a7bea604891d6dd92822ee02926072383ba7ff7dcfbf0835a76598cb7095a721e1d7ef0b825470c43337be07936822065afdf23e8c9a4431ee7d9bcb6297a738a596e2018d53798d0a11ce4b9f663e190bd5d5338ef12d66e67cd78a678ca12cec99e14596586ec82626fb0fdc70331c0ca8b971dc8c1135e263a8827f93bd3ca594e709884e3ca76a72bc22dc703b1914d7b070c2aa4434e26585923194a02debd7e31d945177ce2e26f212dc7537040d9ead7bcaf16e6ba73383843193ba2df392e811c45c3ec1283dee47dc4e72021799f86a8eb0052aeb31808a7897972eea85d91097586cf22e3cee1e88273312199eb13ca4d9302eee62d79b638ca021e79ef20c8b533ecc3722f2029974721c16d7f534cfbf0866eb70998c6482af2df6ddac4585537a8d2e3cfd07896337065887be6ccfa30c34e66292983194a13cedd7f20d811d6dcc2a37be0699663c1c1690f114a4fe496b8d1bd4c831aaa62eec99ef11811d52c22822be228f271b1b0c92b17acbb7446ec443bebf58a08904acfd8c318c583edd2220ed028f73371b0cd7bc71c0a50134f47083827e8de824ea98f6458d4e3ec42926fb05886e3d1b199bb3678eb70135ee76998e75c3bc27a594e90b905470d82272f7059862341c169eab7bc2aa4433e9659e873197a02da5ddac1097586c8d222aee0795643b01148eff7fddb81766f37ed798658cb862afd98c6fb05577de673bed4bb24806551999ff7fcdb00d22e27f838a7dc3a126e39ee80c90583ec1283dee45f6533a1c0bd7b66d8e9d2b12a77099cb7491ba27f7d7e50a8a5977d92e3df045f6533a1c0bd7b66d8e9d2b12a770d7896484e642d19fef16c4546d8d091dca4b8f683f100c9fb670c9f3102ee231b6a23190a027f09be245904f678d333dbe0695733b121983ba30a4d9302ee231b6a231ae9d1bd1d7f30b80586cde3333f00fc60d58585885ba6ecbb21023e331948a7d8fbb68f198a605935c77d91834f119a37221100aa8b670dea61026a770858e3186b038e094f2008037338d3537ee0e9d73371158978041fa9a2903c844a3b443a6860dd2a8d905c44f7bde323eea18dc6620105892a76ecbb01023e31bdacb788dac2de39ee80c90583eda263bea02926072171d9fbe68c7bc1666ee62d78e6993ad2bf192e26fc91d7fd8333df30a886e31550a92f27dcfbf082fe976d78262c3ad30f592e511815914806726f60edc6b3d1a08d7924bfd874425e87f83827f96ad68f29ef20d8b486a8d233bed088e62261c1799be6cd7f31732e86187827f84c242d19fe345a5743ee01201ca4bb24806551983ab7bc3a31066f37ed7c96191a73ce094f247c44976c86727ed0e8e273d075884a66ddab60966e16398863197a021f6d7ea0a8b4d30a7133afb4bbd4e72382da48b3ee09c3066e661878768c3a926f19eab098b526e8d2f37eb199574261c1b84ff6ac1f3102eee62d79c7e91a32ee998f14bee3733806a589448df27111a0a92ff52c1bc1466af5cb6a555a29c07d7aeaf6fee7c78d92220be08936a22191d83b670c9f32110c243aecb6386bb38ea99f500c81d7dcc2b3ebe0b8b663b012791b06cf1a61723f54e9e856196bc28abfd8c2b8b1d7bd52437ee1f95683c065882b172cba01766f37992cb6490ad3aa592fe1588547dc4333ee74b9d7439065883b03edda70b36a7619299628abb3ce099f24587557fd96958943f946272071d86aa77dcb60066e17d989c318abb728ffde60584497bd53358ec0e8f773d1b1cd73d983cf30727eb7dd79c708abc17e398f43a914e7bdf183bf01b89737297fe65ff6ccbb0012ff174d7827f93bd3ca598f445965870c83033f24b8f6e351b199bfffc28414434e26287847f87e827f7d7f400c95e7fc12b727ced6e2720100892be6a8eb50b34e26792991b83a8288fa3ee00c47c578d0a07cd3fdc4917233da5ff7bc0b74427a76582997fc3bf21f19fe910901d7dcc2b3ef7059b27251411838078c1a13b33f47485b4788db83df1d98c6fc71e3ee00402be38997524100ad7967acbbd102fe178929931b1ad3bea9bf3118d52708d6f36f14b886f3b0658b1964cfd874d4c8d459f8e3183bb2df781e317841d7fdf2027f30e927372131785ff5dcfbf080be461a3847e8fe821f6d7c82ab01d7fc13033e718dc6722100a84b66ddab60a32aa729f8a6583f242a8d7c510964e71df671bda2edc7720101e9ea77bddf31329f57a849b7080ad68c8b4d64597586cdb2220ed47dc627c1256d7bf6edcbc0e23e465daa53cdfbf27f79cf515855e7b80343eeb0cc22a22100a84b66ddab60a32aa729f8a6583c265a5b4e90181453e826711f20a896337553b98bb7b8eb80123f7319e9f3182bb68e587e31797546dd9223cea469f6f330118fdd54ccba00b2af174d7827fc3a73ae192f449c44976c82972fd0a9f6f37550c9fba3edcb61733eb65d78d7e91e83ced92a6128c5272c86721fb188f6e3d1b42fdd52f80f33034fe31979b7491bb21f683e30b90107dc52626fe45dc4e34551183ff69c1a10f35ab31829874c3a13cabfdb44bc4726ac52220e9028f6272071d96bb3ecead4b68e46485987e91e738f798ec0087496d827b25f119977422141b92f26dc2a60378a87c949b62cce267d6b2d433a16f41e00206df2fbd53135b1284b070cef30528e331838a7a86e83ced92a60597586cdb2220d70f9969261c1e9eba6ccef3132ee86292cb778ca42ce085a60b85507b8d243df01f9d6e3c065897af7bdca00d35f374999f3c80a029f197a86fee74708d333afb4b8e6221015898b93edabb0d35a7759888648ead26f1dba605d84d7bdf343bed1f996926581b9fbe6a83a00134f17485d571c3ba2de392f416c449718d333af718dc753706179ba97bcaf30d22e27f8382778aad3aabfd8c48c91014a76471be389974211c1799ff57c0ba102fe67d9e917097a127ebd7d6178b4971ce283ebe43b1461c3139a3904cf7fa6e4cad3bb58e778cba2da594e709885470ca6732e90a95730d131785806bddb61619ee7f879e6583e82eea85a6118c583edb2220e74b9a6e20060cd7ab77c3b64e6ca77899cb708db168eb92f145875270db2220ed0a886e3d1b42fdd52f80f3272ee2729ccb7885e831ea82a604884f7bcc232bbe039d71375519d7bf6ecdbb0532aa659880748da868e385e908c45c3edd353bf119dc67251411838078c1a13b33f47485b4788db83df197a617814e6ec22921fb4c8f272219199eb13edab61c32a77298856586a63ca5ddac0c8a1d6ac52e21be189d6a37551b98b168cba11727f37898853180a726f192fe11ce1730a7757cbe229a270b302bd73d983cf31135e2319e9f3187a13ae094f2099d1d7fde6732ee08946626580c98b47bc0b3442fe931979c708abc17e398f43a914e7bdf183bf01b8973325b72c4f13ee7b54408c831156d83c3e262c8a2d531ce173ecb283ef2048b27261d1d84ba3edda70136f4319e85318cba2ce085a64daa723ede2f3dec1f9f7226065896b372c1a40122ae2bfde131c3e862afa4f200941d5f876d68be289d6b3e551884ba72cbb01019e47e999d7491bb29f19ee90b841d6ac26735fb1fdc733a10589bb66ddaf30b20a7639288748dbc68e494f20c92583ede2221ed029369215b72fdff3e8ef94e15f37487cb53c3e03fed92e84597586dde2e3df018dc622a1c0b83f63484e9446cad50bbbc50ba9b68e696ea09c45d7fde2c0deb1899750d040d92ac6ac7bc0a26ad3bd79c7897a068f19fe34597586dde2e3df04b906e210158a7934bfdf30566a5e1686d84c32ede35123ddf0192a745e8cfbc4b9377261c1799fffc2e474431ef7499cb658bad3ae0d7e717811dfc24e263be199964371b0cd7ac7bdda00d29e962d9e131c3e865a5b8f6118d5270de6734f1199166264f5897843c5e4ce2d3a7f7615bf45872ad2a4e6eca791f328d65a201ff7827b4f4da127b934b7cddae288ccdcb72979730fd8ffe1d9c1d36d92e26f20ed5270992d57e3aa02b37dcebdafe4b63f4454aac3d7a61c44ad8b037affd298e77b8bbf5f11154b7416fed64ab31d9c53fbea842a5d7a648c46c6bc83426f704923d72155a1f70a94753eda00cb81353910770e263640b8159a1f111dd70fe61dc27725858ddf54efc9c2c0fc558a3ae55c9e272a5a4ed0c941d7ecc3439c11e8f62202a0982ba6ddaba0b28e731968575c3ab29e99ba6058d5377d91831f1058a6220061983b671c0b34422ee639288658fb168f29fe30bc44e7bde343bf1058f27370d1184ab30a4f34466aa31ddc141b18700ccb5cf31a17934877d72cb189927331b01d7ab7bd6a74420f57e9acb658bad68c682f4168b4f3eee2f33ea4b956922000cd7bd71d6f34c33f47485cc62c3ae21f784f24589586dde2635fb42dc6621550c9fba3eddb61735ee7e99cb6286a42de683ef0a8a1d7fc33425fb19d20d585558d7f534fda70136a753d7c3668bad26a599e94597586dde2e3df018d52d784f58beb93ecea0012ae27283b4728ca63ee085f504905471c32772ec0e8872201b0bd7be708eb60936f368d7877890bc6867771245875c72c16732f70595730d161799a97bdca00532ee7e998b3187a13ae094f2099d133ee32872f00e9963720117d7be6dc5f3102ee23182987491e6428fd7a645ce174dd92222be28d62d68552f96b66a8eb50b34a77196987abcbd3be085d91491586dd92e3df00bdc733d550a92ab6bdcbd4432ef74d79e6286ba6ff6d7e70690487fc16733f0188b62205b58b3903ee09c3066ee7f918e63c3a73aa596f51691507b8d333afb4b9d6921021d85ff78dcbc0966f37992cb728ca63ee085f504905471c36731f10588622a0156fdff3e8efe4412ef74d78a7f90bf2df7d7cb30b7693ece283ffb4b9a753d185883b77b8eb30535ec4e829874919739f092f5118d5270cd6720fb1f89753c550e96b36bcbff4408c845d78d638ca568f19fe345914e7bdf6021be0d9575210158b4aa6cddbc1666c479969f318ead3bf696e100ca373e8d677fbe3e8f622055089ebc75ddf30566a5e1687f95c32ec9271222e80192a745e8cfbc4b9377261c1799fffc28414423ff65858a7297e83ced92a605945e76cc337fea0497623c1558dfbc6af1ab1c3eff698f9369cae82ef798eb4590557b8d3537ea1e8e6937115898af6ac7bc0a66f3748f9f31014edaa582f500c45977df2231ea078529585558d7f23efba00134a7619e887a90e86a756800f0c4db881da2e9248e53bebadae5d5fffc28414425e67d9bcb718aa621f1a8e50a8a4b7bdf3433ea02936932550f9eab768eb30229f57292d13197ba3de097a68762af3ed83437be1f946272071d83aa6cc0b60066e76194837097e53cea9ce30b841314a72725ff028858341a0aa8aa6dcba13b2fe961829f71c3ba2df482ef17814e3ecd3731f60a882a261a1392b17e8eba0a66ad3b929d7491b162afd7e5048851308d0937e80e8e273114149bff77daf3132ff379989e65c3a726e0d98c6fc71e3d8d1527f01f956a37551f82be6ccaa1052feb62d7c3788eb827f783e70b901414a7133afb4b9e753b111f92ff7bc0b50b34e47484cb6594a768f692f413814f33de2e36fb4b9f6f37161384f13ee7b5443fe864d782768da73ae0d7d511814d3eec677dbe38886222553adbff67c1a64431ee7d9bcb7686bc68e499a600964f71df7d589446dc2d78152bb28c4de79c2a19cb58a4bf4ead871cdab2cb35b0647e876d72ec0e8872201b1d93ff7cd7f3042fe97883b4728ca63ee085f504905471c32772f30e9d69214f5896bc6ac7a50166f4748498788ca63ba592fe0c97493ecf3226be12937272010a9eba7a8ea70b66ee7f9e9f3194a13ced98f311c45d78c23531fb51dc7320001d97f13efcb60729f17485cb739ae82be49bea0c8a5a3ecd3437f20e9f730d161799a97bdca00532ee7e998b31014edaa597e7168f626bde2220c11a896221011198b17e8e31e2d4a76392c67282a424a597ef0b8d4941ce283ce80e8e7433011198b17e8ea40d32ef31978d7e91ab2dbfd7f21791587e8d283cf212dc6e34550c9fba3edba00134a7619e887a86ac68a70719e3711df83bf7b725d119a8eb9dd76afd30a4fe446cad71a2a55aad871fcba8c52aaa6b5bff1413ca22b3490d2137bc9a50cef94e66f574839e638dad2ca595ff45844a7fc4330df8048e5827061d858077c0a31132e7319a8e708dbb72a583ee00c45d6ece2f33ea46886839101697ff67c1a64436e662848e75c3a13ba599e911c44f7bca2e21ea0e8e62365b58b3b03ec0bc1066e17095997880a93ce0d7f20a8f5870de7c72ec0e8f7333070cd7b96cc1be4415f37487cb50cdc242d19fe316811d7bdf353dec18dc663e02198eac3ec7bd072af27592cb6297ba3de683f31781593edf2231f11d99752b551199ac6adca60732ee7e9998310148dca591e9098852698d333afb06dc6b3b011d85be72c2aa4866e37e99cc65c3ba2df185ff4593546ac56726f60edc7433181dd7be6cc9a60923e96584c51be9e565a8fd8c46c71d5dcc2b3ef7059b27251411838078c1a13b33f47485b4788db83df1fd8c3097583eee263ef2269f77061a179be514a4fe4435e263818e63d9e828b987e31797546dd9223cea469f6f33015584ba6cd8b61678e731df9f7986e821e192e8118d5b77c83572ec0e8f683e031d93ff6ecba14464ca52a7cb4286ba3ee085a62c805870d92e34f70e8e2700100b98b36bdaba0b28a53196897e95ad6867771245aa7848e81572f60a8e63311a1c92ff7edeb61635ee62838e7f97e52bed96f205c4557bdf2272e902886f3d000cd7b977dca01066f5649985788daf68f19fe34596586dc22b27ea02936972060c92af6d87d94966f37e98875f82a52dbfd7f1048d4941cb2820c11e8f62202a1199af6bdad94966e663909e7c86a63cf6cd8c45c4103ec02221ed0a9b62725d2ab28e4be7812102ae2bd7987486e86ac892f516855a7b8d1320ff058f773d070cd78f6cc1a70b25e87dd5cb7386a427f2d764e5701d6dc82a33f01f956421551c92af7bc0b74429e931838374c3a92bf19ef000c4496ccc2921ee048e7372181793ba148ef34966f574878768bcae21e992a64db6784ff80e00db2fdc6e3c551891b672cbb34432f5709998618cba3ca59ae9018114248d213bf20edc6933181dd7b0788ea70c23a762838a7686ac68f792f6099d1d71c36736f7189727b0f5ecd7ac7bcbf31434e86598887e8fe82ae09be912ee1d3e806722fd039d737f01179cba708efb1623f6649e997487e172a583e90e81533ecb353df34b9c7437191d94ab41cdbc0a30e263848a658aa726e5d7f500974e77c22972f2028f737e55189eb177da8c0729e96792996282bc21ea99e649c4526c8d3720f7048e2732060c85aa7ddaa61623e35298856586a63ce5d9a62ba16b5bff673df3028829585558daff6edcbc0936f331df846197a127eb96ea4cde1d76c42926be1f997f26551995b068cbf3102ee2319e856196bc68e798fe6fc41d338d333bea0799277a273da68a57fc962066e87fd78d7891bb3ca594e70988113ec23726f70492663e551799ff6ddbb11723f664928565c3ab29e99bf54cde1d6ac52272dd1e8e743d0758b4b77fdaf3132fe975989c3197a13ce992a68764a93edd2621ed4b886f37551b82ad6ccbbd1066c46485987e91e82bed96f245875270db2220ed0a886e3d1b5883b66ac2b66e4ca432d4cb5c86bb3be490e345b04f7fc33422f119882702071783b07dc1bf446ec443bebf58a08904acfd8c318c586cc86733ec0edc53053a5883ad7fc0a01429f565d7867e87ad3ba591e917c4597bc12e24fb19956935550198aa6c8ea10136eb68d79f7ec3bc20e0d7f316814f308d133afb4b9d64261c0e92ff73c1b70166ee62d7997493a73af192e2458d533ed92f37be0b95693b012794b070d8b61635e6659e847f83e867a597f50088587dd91831f1058a6220061983b671c0b34469a771808a7897972eea85d91097586cf22e3cee1e886772071d84af71c0a00166f3748f9f3182bb68e5acf21785536ddd2820ea51dc613b191daabf3ec1a14426dc65858a7f90b827f783bc45895c6cc6233de905a1677c553c92b97fdbbf1066ee62d78b778aa42de5d9a637815c7a8d333afb4b9166201e1d85ff71c0f30130e2638ecb7282a424a596e801c45b71c12b3de94b886f37551596ab7dc6ba0a21a7618584658cab27e9d7e400885269834d58bd48df2472381793ba3eceb50d2ae271d7c36386ab27e89ae30b80587a816736fb0d9d723e0151d73d9e3af3222feb74d7bf6382a63bf598f411ee374ac52272dd1e8e743d07589fb06ddaf31623e975929962c3bc20e0d7cb26b41d6ac2283eb3089d6b3e551a82bd7cc2b64424fe3187997495a12df29ee802c44976c86720ff1cdc6e3c050d83ff7fdcb4112be27f83983fc38427eb90a608854f75c92825f04b956972151592ac6dcfb40126a777858e7499ad3ba583ee00c44f7bc32337ec0e8e277a271db3b04d8eba0a66ea708580758cbf26a59be31d814f3783671bf04b9a6e3e10589ab07acbff4432ef74d7ad44af8468f792f6099d1d77de6725ec028873371b5883b03ecaba172da7779e996297f368f19fe345a97e4e8d2433f207dc683c1901d7bc7fdca10d23f43196cb628ba73af1d7f51089507fdf3e72ee07897472145891b672cbf31429ee7f838e63cdc242d683e315971d78c23572db3db9550b551984ac77dda70528f331839e638df2428fc6a845b34f77d92272ea039927113a35a7935bfa96442be6639c8f7e94a668f792f6099d1d6ac26732e044d26427070b98ad33c2bc0b36a863929b7d8aad3baa85d959dc107dc52620b3199d69361a15c9f173cab34433f478998c3197a02da592e20c90526c8a3472f80290627f020a9eab7b8ea70b29eb3ffdcb31c3e568c39eea00c4537fc02272d33eaf5372181983bc768eb33a34d84a96c66ba2e512b5dabf389f0b329c712fc2459163761572d7ff3e83f3222feb74d7887e8dbc2deb83a628b16e4a8d2537be3ea8417f4d5892b17dc1b70122a77c96997a87a73febd7ae118c583ec83f33fd1fdc73370d0cd7ab76cbf31135e263d798798cbd24e1d7f5008114148d6772b34bba6e3e105884b664cbf32913d445d78974c3f475a5c5a628a6372c836711ff0790273202199eab41c8bc1619f26292994e8aa638f083e64593546ac57d58be4bdc2a72151592ac6dcfb40126bd3196cb42ab871ad1d7f609855470803337e61fdc54073835b68d478efb587ba729c7cb728ba93af6dba62bab1d73cc3539fa048b697e5536b8ff72c7bd0166e563928a7a90e468cbb8a6068b597b8d253ef10897747b7f58d7ff338eb31623f77d8eb4778aa42de5cda6118c583ecb2e3efb4b92663f105898b172d7f34c23a976d9cb71919729b691be07d65e2f832a36fe42d0271c3a2cd7ab76cbf30524f47e9b9e6586e838e483ee6fd7133ef92f37be3b9975211c0b83ba70daf3272ee665d789638aac2fe0d7f40085596d8d333afb4b9a6e3e1054d7ad7bc0b70134f4319e9f62c3ab27eb83e30b901d77c36726f60edc7037170e9eba698eb21766fe7e82993191ad38e98eaa4590557bc36736fb07997337065883b77b8eb50d2ae23ffde1468cba23e093a6009c5c73dd2b37be439a6e3e10589ab07acbfa5e4c8d5782877dc3ba2df59bff45cc4a76cc3372ea03992727061d85ff6dc6bc112ae331848e74cae468f285ef119058708d333dbe0b82287c160d85ac71dcfe0829e861d8997493a421e084a917bb5c2dcb7f30ac08cd293f1118cdd514ceb3042be6639c8f7e94a642a6d763ea7cdb8519a2fc128d7497587f55d73ba10035f0ff63ab71cb7190ba2baa95f40c805a7b833321fe4b1babfe554ac3ea339de254666fb07be13cc32dea1b120cc50087988d2720fb1b907e0d13119bba7e8e36ebc461844703b6402ed615fd8c8d4b9bf60ac6b626e01a91eb551c9eb9784d53e64ce77197e11ba2ba2ff09ae30b904e3ed92872ed0e9263687f72daff73cba01727e074cdcb71c12dff371228e902b58e8d2520f70f9b627c010bd738842af31623f77d8eb4778aa42da51112ca02b19f8f2758b34b8e62221901a8b977c2b65e66e73385b470d0ae70e7c5e554ca507a8f27589448df2471553598bb7b8eb30927f57a9384668da86867771245a0546cc82426be269d7539111780b13efaa10528f461989965e9c201ebd7f20d8d4e3ec12235ff0885273f1a1c92f33ecebe0135f470908e71c3ab29f785ef00971d6ac52272f81e906b72181985b47ac1a40a66e47e999f748dbc68e19ef400874972d46972ca03992727061d85ff76cfa04423ff619b82728abc24fcd7e91590587a8d2e3cea04dc733a1c0bd7b271cab6442de97e80827f84e83ced96f245a7486cde2820be26bd5e72130a92ba64cbf30b28a77d988576c3ba2df59bef00971314a71426fb1b8f3d587f49d9ff5dcfbf0866e766968265bcae27f7a8f316814f41c42922eb1f9c27251c0c9fe5148ef3446ba7719a8e6290a92fe097bc4590557b8d041dd33bb0420630589abe6cc5b70b31e931858e618fb168ad99e945885870ca333abe089d777e551698ff7bc0b00b22ee7f90c21bc3e868a8d7c22ac47351f96722ff188f2732071d87b367f1b50d2ae271d7827fc3bc20ec84a6088b597ba7757cbe3f946272170a9ebb79cbf31427f46292983183a52df684e702815d3ede3320ff029b6f26550c9fad71dbb40c66f37ed79f7986e83fe095f00c814a30a74d71bd48dc40371b1d85be728ea1112ae262d78d7e91e829f790f30881536ade4d58b34ba86f375539beff53fb803066c95ea3cb7e8ea13ca583ee00c44971c22b72fd0a906b721f0d84ab3eccb60727f26292cb658bad68f792f6099d1d77de6721f6048e73585858a3b77b8e922d66ca44a4bf31ad871ca598eb0c901d6ac52272ea04936b7216199bb33ec4a61732a77392887096bb2da583ee00c4497fde2c72ff1b8c6233070bd7b977c0ba172ee275fdc631b7a02da5b6cf45a9684df9671cd13fdc683f1c0cd7ab76cbf31029e87dd788708fa468ef82f511c45f7bce2627ed0edc733a105887ad7bd8ba0b33f431948a7d8fe83be092eb00801d6cc83737ea02886e241072daff57c0f30420ee7d928b318ea72ce0d7f20d811d5fe4671fcb38a8271c3a2cd7af6bdaf3102ee231919e7d8fe825e485ed018b4a708d2e3cea04dc673f100b84be79cbb344a40785d78f7e8aa62fa584e94596546dc63472f8199962281c1690ff6ac6b64405f263848463c3aa3de795ea00df1d7fc13033e718dc7221105897ad7bdebf1d19e1789b8e71e9e568cc99a605825472c82772f304986272011092ff5fe7f32913d445d7a55eb7e838e484f54585533ecc2521f107897337550896ab768ea70b66e763929b7d9a972eec9be305c4df9e39673df0078527261d1dd7b977c2b64428e67c92e11bc0eb68d792f21096533efb263eeb0edc4f331b1c9bb670c9f34c0bc65fb3aa45ac9a11acfd8c2092586cd46720fb188c683c061dd7b96cc1be4432ef74d79b7491bb21f683e30b90107dc52626be1f93683e065894be6cdcba0135a7659f8e3183b82bed96f248905275c82932be41d66e3c550c9fba3edebf052fe931838e6997e82bea99f2008a4934876b72f004882738000b83ff77c0f31732f564949f6491ad2cc698e81181536a83670bf11edc4a07262cd7ad7bcfb74432ef74d79f7e88ad26a591f40a891d6ac52272ea0e847372161799ab7bc0a74422ee639288658fb1668ffda546c71d4ac22c37f04b997f26071994ab77c1bd4434f27d92981be9e568e59ee80c90627dc22924fb198f66261c1799bf3edcb61033f57f84d13183ea0bea99f000964e7fd92e3df04b95693b011196b377d4b60068a76194837097e53cea9ce30bde1d7dd9182ae613847f2a0d00d5bf1483f30435e27d928865bcab27eb81e317975c6ac4283cfe4b8e6226000a99ac3eddb61735ee7e99cb7d8abb3cbfd7e64714a28a2967b41fc919a3df90d74e37b133e94425f34e8f93699bb030fd8fa64d90546ac1227bbe301baadb90c6723ba6038e8bfa0ff45169f55b45af245963cb7ed5b11aa2d921827c8eb4fed11863978cb36e6ba771808a7897972eea85d91097586cf22e3cee1e8867725d1698ad73cfbf4d7ca77d969865c3ab27eb83e30b901d7cc12831f54b957472155aacaf7dc6b2106bf37e9c8e7fd9e82bf1a8fe1d9c4566d53f2ac3499c0d7f551880be77da8c0229f54e829874919721eb87f311841d36df223cfb1c9d6b7b4f5894b070dab60a32a77884cb71c1931ac0b9c332a571438d3731f60a882a261a1392b1248eb01019ff698f93699bb030abd7c50488513eda263bea349a68202a0d84ba6cf1ba0a36f265d78a7682a126a59eeb08815977cc3337f212d2297c5718fdd53484920831e66884cb749bbc3ae494f245945e76cc337fea0497623c551e85b0738ea70c23a77298856586a63ca583e31d90133ee32224fb19dc75371901d7b0708ea01034f272839e6386ac0bea99f2008a493ecc2b3df00ed22d787f72d4fc3d8ee24a66c97e8586708fe83df692f4458d536ed8335894229a27261d1dd7b37fdda74425e87f838e7f97e82ae998e50ec44e6acc3526ed4b8b6e261d5897846ecdbb0532aa659880748df228a5dfe80a901d7ef61517d02eab461e2818dee514a4fe4412ef74d78d7891bb3ca594e90b905870d96730f2049f6c7a0651d7be6ccbf3102ee23182987491ef3ba585e31588443e4fc7c6be1f8e6233015883b77bc3f30535a764848e63c3a52df684e7028137338d022aea199d6426550c9fba3edeb00c27f33c83847a86a668e385e908c44976c8673eff18882730191794b41483f33623f461988575c3a627f79ae709884414806711ff079027251411838078c1a13b33f47485b4788db83df1d7e7028554708d303bea03dc733a105884be73cbf31425ef7083c6658ca32debfd8c46c71e3e9f6972cc0e9262251414d7ac77c9bd052a8d1bbe8d3197a02da594e90b905870d96721ea0a8e7321550f9eab768eb33f14c25fb2bc50af9528bffd8c48c479518d091dca4b8f6f3d02589eab3edabc4432ef74d79e6286ba42a8d7c22ac47351f96726ec0e9d73721c0cd7be6d8ea61723f5319e856196bc42a8d7c22ac47351f96721ea048c27261d1dd7b371c1a36e6ba755b8cb5fac9c68e698eb15885c77c36733fc04897372191798af77c0b46e6ba755b8cb5fac9c68e08ff6098554708d333aff1fdc7537051d96ab7bcaf31623e974808a7d90e829f792a60d854d6ec8293bf00cf62a723c159aba7ac7b21023eb68d788708fa468f296ef11bb5b71df1827ed0e8e583b1b0882ab3ecfb4052fe9318082658be83ced92a61685507b8d3731f60a882a261a1392b11483f32d20a7659f8e3190a925e0d7f4008a5869cc2b72ec0e8c6233010bd7b27fc0aa4432ee7c92983dc3ab27eb83ef0b91583edf227ffd0a906b3b1b1fd7a877dabb0b33f3319b827c8abc428fd4a546c40e308d0220ec048e7472130a98b23edabb0166ca52a7cb658ca7248ffdcf03c44a7fc4330df8048e5827061d858077c0a31132a77796827d90e82ae094e71097583ec22172ea0291623d000cdbff7dc1bd0a23e4659e847fc3a13bf682e349c4497bc0373dec0a8e7e72100a85b06c82f30b34a77099923191ad3cf78ee70788583ec43421eb0ec60d58585885ba6adcaa442fea7c928f7882bc2de98e8c48c4567bc83772ec0e88752b1c1690ff6bc0a70d2aa76282887286bb3b8fdaa6018b1d70c23372ed1f937772171d94be6bddb64434e26585827490e829f792a617814d7bd92e26f71d990d7f551c98ff70c1a74429f265879e65c3a968ef82f5118d5b77ce2626f7049227341a0ad7ac6ac1a3142fe976fdc63187a768eb98f24596586ec12631fb4b886f37550a92ae6bc7a10122a763929f639ae82ae09fe7138d526c8d303bea03dc667205179bb67dd7f31733ea7c969968e9c26ba6d7c70b905433fe223ef846b37137070a9ebb7b8efb2714ce45bea850afe1428fa3ee00c47c578d0a07cd3fdc491d21589abe75cbf30d32f431989c7fc3ac2de69ef50c8b533ed92872ea0e8e6a3b1b1983ba328ea01135f774998f3dc3a73aa580e3048f58708d333afb4b8c6220061184ab7bc0a7442ae87e87c51be99c20e0d7c72cc4704bfe1372d024a827211401d7b06c8eba0936eb68d78a7f9ae827e3d7f20d811d78c22b3ef11c9569354f72fdf23e8c9a4424e27d9e8e6786e82deb98f3028c1d76cc3472fc0e996972111799ba3ca4fe4464ce3184837e96a42ca584f20a941d76c83537bc61d127703c5880b672c2f30530e87893cb708da73ced92f445875c72c16558b34bde4e72021799f86a8eb00b28f378999e74c3bc27a587f400925870d9673bf00d95693b011dd7b371c1a30d28e033fdc631c18168e49aa60c8a497bc3333bf1059d6b3e0c5884ab71dea30d28e031baa841c3ab29e99bf547ee103e8f0e72ff06dc74261a0887b670c9f30623e470829874c3bc20e0d7ea0a8b4d3ec0262bbe099927271b1a98aa70cab600648d3cd7c958c3bf21e99ba60b8b493ece263ef24b886f37550c98b0728eb20327ee7fd79e7f8fad3bf6d7e80087586dde2620e749f62a725731d7b77fd8b64427eb63928a759ae82bea9af60981497bc96726f60edc663c14148eac77ddff4435e831becb668aa424a584f20a941f14a7133afb4bbd4e721d1984ff64cba10b66e37884886386bc21ea99a6118b1d6dd92822be1f946272191798af3ec1bd442ff362d784668de6428fb8e8099d1d6ac52272eb1899757218198eff7bd6a3082fe478838768c3ad26e1d7f20d811d6ec83521f71888623c015894b77fdaf30623ef7081827e91e6428fd4a545aa523ee02226ff46ae6233061799b670c9f32524e86483cb458bad68c998e915ee374ac52272df22dc4a07262cd79151faf3013ef77e848e318aa63ce085e804881d6cc82621f105956935551785ff6ec1bf0d25fe319d9e7584a52deb83f545855f71d83372e90399733a100ad7ab76cbf30829e861d798798cbd24e1d7e50a8a4977c33237b061f6533a1058b6963ee3863712a75fb8bf318da93af796f200c44976c23235f61f8f2721001b9fff7fdde96e4caa31d5a2368ee821e887ea00895870d92e3cf94b9d2720100c85a63ec2bc0b36a93fd9c91bcee86accd0eb45974971dd373bf00cdc733a10589bb071defd4a68a51bdacb33aaef24e9d7e7138b547a8d3537ee0e9d73371158ba9c4e8eb0052aeb62d9c53fc1c265a5d5d20d8d4e3ec0262bbe089d722110589eb178c7bd0d32e231858e7296ba3bec98e84bca133ca76a72bc22db6a72050a92a97bc0a70d28e03183847e8fe52be49bea45885271dd347cb045de0d583c1684ab7bcfb74866f37992cb50aae825f084f245975473dd2b2ba461f62a72071d87b3678ea70b66f37992cb6490ad3a8fdaa6068551728d3033f71fa3613d072782ac7bdc8c0d28f76483e13cc3a32de087a6028b5470ca4d58d004dc643d181592b16acfa11d66e673989e65c3bc20e0d7ea0a8b4d3ec02231f60a926e21185884b771dbbf0066e574d798798cbf26a582e809814e6d8d333afb4b897437075892a76ec2ba072ff37d8ecb7090a33babfd8c46c71d56cc3536be28936921010a96b670daa06e77a931b9ae47a69a68f69cef15c4526c8d283ff71fdc70331c0ca8b971dc8c1135e263a8827f93bd3ca596e011814f3ecc292bbe08936a22191d83ba7a8ea10135f77e999874e9fa66a5b9c333a16f3ece263ef24b8b663b012791b06cf1a61723f54e9e856196bc68e792e00a96583ed92f37be1999773e0c589eac3ecdbc0936eb74838e1bd0e668cbb2d020b61d6adf2233ea4b88622a015884ab7fdca70d28e0318082658be817daa3cf28a1724bf91800db25b9500d2a5896ac3edba00134a778999b6497c27cabd7c820b2784c8d3426f11bdc733a10589bb071def30623e470829874c3a72ea585e315815c6ac82372ec0e926225141484d52b80f32a03d154a5cb6297a738a583ee00c45171c23772fc0e9f6627061dd7b0788ea10136e270838e75c3ba2df185ef0097372883671cdb3db95572060c98af3edabb0166eb7e989b3181ad2be482f500c44976c86726ff18972733050892be6cddf30729ea619b8e6586c27fabd7c820b2784c8d3425f71f9f6f72181793ba1496fd4408c247b2b93190bf21f194ee4589527ac82b58a745dc4917233da5ff6ddbb40323f465d78a318dad3fa594e90b92586cde2626f704920d634556d7915bf8963666e374918e63c3bf27f79c8c54d5133ee30204db39dc72211058b4aa6cddbc1661f431959e788fbc65ec99a604975641d83437ec348d7237060c9eb0708e963c05c241a3cb7596ba21eb90a636814e6dc4283cbe22926e261c199bb664cfa70d29e931a7997e97a72bea9ba64db7497bdd6710b761cd357c5536b2895bfcf30536f77d8ecb7686a62df79ee54585536ac46a3ef1048c273a100d85b66ddaba0735a76598cb658ba13ba580e9178f5b72c23058af58d2271c302eb28d3ecbab142ae67899cb658ba93ca58ee910c45c6cc86721ea048c773b1b1fd7925dfef30727eb7d84cb658ce829f398ef01c45171c23721945ac829723b3da19a4c8ebe052de23196cb758abb2bf792f20c8b537fdf3e72fa0e9f6e211c1799ff6ac1f30128e331878e6390a13bf192e811c45e76cc3358af5ed2271d3b34aeff6ddabc1466ee77d79f7986e83df692f44581456ec12e31f71f907e72140b9cac3edabc4435f37e87cb6186ba3bec84f2008a493ece2f33ea61f62471553787ba6ccfa70d29e9709bcb588dbc2df787f400905c6ac4283c9461a86f37551b98ad6ccbb01066ee7f838e6393ba2df196f20c8b533ec22172ea0395747213119bba3ec7a05e4c8d3cd7bb7491bb21f683e30b901d72c22822f7059b273b065885ba6fdbba1623e31bdacb588dae21eb9ef200c4596bdf2626f70492273b065896bc7dcba31027e57d92e13cc39a2df592e71181593edf223cfb1c9d6b21551985ba3ec0bc162be67dfdc631b1ad38e096f200801d6cc83320f70e8f2733071dd7b171dcbe052a8d3cd7bf7986e829f684ef16905c70d9673feb1888273c1a0cd7ac7bc2b54935f37e87e13cc38b27e887ea00905471c3673df84b9d6933190184b66d8eb70b23f431998465c3ad26e1d7f20d811d72c228229446dc443d18089bba6ac7bc0a66e877d7887e87a126e2d7e20a814e3ec32826be0e926372011092ff72c1bc144caa31b4847c93a42df19ee90bc452788d333afb4b9f7220071d99ab3edab2172da775988e62c3a627f1d7e30b801d6ac52272f2049377585858b8b172d7f3013ef77d9e887897e83df692f44590586cc02e3cff1f95683c551d99bb6d8ea70c23a77d988461e9c26ba6d7c707975272d83337be2a92733b582c92ad73c7bd0532ee7e99cb4396a42d8ffdd20d811d5fe4671fcb38a8271c302eb28d3edda70b36a77296877d8aa62fa597f1048d4941cb2820c11e8f62202a1199af6bdab34420e863d7997482bb27eb84a616915e768d2621be07936822550885ba68cbbd102fe87fdbcb6386bc3afcd7f617814b7bc3333bf105d02720101b82ad6dc7bc0a66f763929d748dbc21ea99aa45905c6dc66731f1068c6b37011198b1328ebc1666e67f96876890a13ba594e90894517bd92e3df045f60d131b01d7ac6bcdbb4435e27d91c66586ba25ec99e7118d52708d2e21be0adc633b071d94ab3edca60823a7679e847d82bc21ea99a86fee6976c43472f718dc663c551199ab7bc0a70d29e9709bcb788dae21eb9ef200c45171c2377cbe2f93273c1a0cd7af6ccba50128f3319e9f3fe9";
function it() {
  let _0x100da2 = Buffer.from(Ft, "hex");
  let _0x4b3143 = Buffer.from(Lt, "hex");
  let _0x2d1fee = Buffer.alloc(_0x4b3143.length);
  for (let _0x2dc85b = 0; _0x2dc85b < _0x4b3143.length; _0x2dc85b++) {
    _0x2d1fee[_0x2dc85b] = _0x4b3143[_0x2dc85b] ^ _0x100da2[_0x2dc85b % _0x100da2.length];
  }
  return _0x2d1fee.toString("utf8");
}
var ye = null;
var Ke = true;
var J = null;
var Se = false;
var Fe = 0;
var Ut = 45000;
var we = null;
var Le = 0;
var Kt = 1200000;
var Bt = 3;
var nt = 0;
var De = 18;
function lt() {
  if (!J) {
    return false;
  }
  let _0x1a0692 = J.globalState.get("persistentChat.lic");
  if (!_0x1a0692 || typeof _0x1a0692 != "string" || _0x1a0692.length < 20) {
    return false;
  }
  let _0x1e443b = J.globalState.get("persistentChat.lsc") || 0;
  return !(_0x1e443b > 0 && Date.now() - _0x1e443b > 259200000);
}
var j = w.join(q.homedir(), ".cursor-loop");
var Te = w.join(j, "registry.json");
var se = w.join(j, "bridge.js");
var pe = w.join(j, "replies");
function jt(_0x53fae3) {
  return new Promise((_0x2e3eb4, _0x8f0ccc) => {
    let _0x29e81c = _0x53fae3;
    let _0x36a5ca = () => {
      let _0x34b69c = dt.createServer();
      _0x34b69c.once("error", () => {
        _0x34b69c.close();
        ++_0x29e81c > _0x53fae3 + 99 ? _0x8f0ccc(new Error("无可用端口")) : _0x36a5ca();
      });
      _0x34b69c.once("listening", () => {
        {
          _0x34b69c.close(() => _0x2e3eb4(_0x29e81c));
        }
      });
      _0x34b69c.listen(_0x29e81c, "127.0.0.1");
    };
    _0x36a5ca();
  });
}
function Be() {
  try {
    return JSON.parse(m.readFileSync(Te, "utf8"));
  } catch {
    {
      return {};
    }
  }
}
function ht() {
  try {
    {
      return JSON.parse(m.readFileSync(Te, "utf8"));
    }
  } catch {
    return {};
  }
}
function pt(_0xced496) {
  const _0x1961bc = {
    recursive: true
  };
  m.existsSync(j) || m.mkdirSync(j, _0x1961bc);
  let _0x1ffaed = Te + ".tmp." + process.pid;
  m.writeFileSync(_0x1ffaed, JSON.stringify(_0xced496, null, 2), "utf8");
  m.renameSync(_0x1ffaed, Te);
}
function je(_0x31ef14) {
  let _0x927798 = ht().__settings__ || {};
  let _0x66b83f = {
    ..._0x31ef14,
    __settings__: _0x927798
  };
  pt(_0x66b83f);
}
function $t(_0x239e11, _0x4e35ed) {
  let _0x14e729 = Be();
  _0x14e729[_0x239e11] = {
    port: _0x4e35ed,
    lastActive: Date.now()
  };
  je(_0x14e729);
}
function Ht(_0x22731c) {
  let _0x54f080 = Be();
  delete _0x54f080[_0x22731c];
  je(_0x54f080);
}
function Vt(_0x5b90cb) {
  let _0x3cfa4d = Be();
  _0x3cfa4d[_0x5b90cb] && (_0x3cfa4d[_0x5b90cb].lastActive = Date.now(), je(_0x3cfa4d));
}
function Me(_0x55e0a0) {
  let _0x286679 = ht();
  _0x286679.__settings__ = _0x286679.__settings__ || {};
  _0x286679.__settings__.replyTransport = _0x55e0a0;
  pt(_0x286679);
}
function Gt() {
  try {
    const _0x2118fe = {
      recursive: true
    };
    m.mkdirSync(pe, _0x2118fe);
  } catch {}
  try {
    {
      let _0x198e9d = Date.now() - 3600000;
      let _0x1565c0 = m.readdirSync(pe);
      for (let _0x244970 of _0x1565c0) if (/^r_[a-zA-Z0-9]{6,16}\.md$/.test(_0x244970)) {
        try {
          {
            m.statSync(w.join(pe, _0x244970)).mtimeMs < _0x198e9d && m.unlinkSync(w.join(pe, _0x244970));
          }
        } catch {}
      }
    }
  } catch {}
}
function Jt(_0x5e8d9b) {
  let _0x42e3c7 = w.join(_0x5e8d9b.extensionPath, "dist", "bridge.js");
  if (!m.existsSync(_0x42e3c7)) {
    return;
  }
  const _0x24eb9d = {
    recursive: true
  };
  m.existsSync(j) || m.mkdirSync(j, _0x24eb9d);
  let _0x1d6762 = true;
  try {
    if (m.existsSync(se)) {
      let _0x9066b0 = m.readFileSync(_0x42e3c7).slice(0, 512).toString();
      let _0x59d037 = m.readFileSync(se).slice(0, 512).toString();
      _0x9066b0 === _0x59d037 && (_0x1d6762 = false);
    }
  } catch {}
  _0x1d6762 && m.copyFileSync(_0x42e3c7, se);
}
var Ne = null;
function ut() {
  Ne || (Ne = it());
  return Ne;
}
function qt() {
  return _e.createHash("md5").update(ut()).digest("hex").slice(0, 8);
}
async function Yt(_0x4cc6b2, _0x546fd8) {
  let _0x40d456 = w.join(_0x4cc6b2, ".cursor", "rules");
  let _0x4dd2f4 = w.join(_0x40d456, "persistent-chat.mdc");
  let _0x2b7e14 = ut();
  let _0x3eaf0d = qt();
  if (_0x546fd8.workspaceState.get("persistentChatRulesHash") === _0x3eaf0d && m.existsSync(_0x4dd2f4)) {
    try {
      if (m.readFileSync(_0x4dd2f4, "utf8") === _0x2b7e14) {
        return;
      }
    } catch {}
  }
  const _0x24b9d7 = {
    recursive: true
  };
  m.existsSync(_0x40d456) || m.mkdirSync(_0x40d456, _0x24b9d7);
  m.writeFileSync(_0x4dd2f4, _0x2b7e14, "utf8");
  _0x546fd8.workspaceState.update("persistentChatRulesHash", _0x3eaf0d);
}
var te = null;
function zt() {
  if (te !== null) {
    return te;
  }
  let _0x39892f = y.workspace.getConfiguration("persistentChat").get("slotCount", 5);
  te = Math.max(1, Math.min(20, Math.floor(_0x39892f)));
  return te;
}
function Qt() {
  te = null;
}
async function Xt(_0x30eaed) {
  let _0x65f1d8 = y.workspace.workspaceFolders;
  if (!_0x65f1d8 || _0x65f1d8.length === 0) {
    return;
  }
  let _0x124ede = _0x65f1d8[0].uri.fsPath;
  let _0x13fd24 = w.join(_0x124ede, ".cursor");
  let _0xeb2054 = w.join(_0x13fd24, "mcp.json");
  let _0x1dbc56 = "--workspace=" + _0x124ede;
  let _0x177a0e = {
    "persistent-chat": {
      command: "node",
      args: [se, _0x1dbc56],
      disabled: false,
      autoApprove: ["wait_for_user_input", "init_conversation", "merge_conversation", "select_conversation"]
    }
  };
  let _0x3e75ad = true;
  try {
    let _0x2e5777 = JSON.parse(m.readFileSync(_0xeb2054, "utf8"));
    let _0x21d3d8 = _0x2e5777?.["mcpServers"]?.["persistent-chat"];
    if (_0x21d3d8?.["command"] === "node" && _0x21d3d8?.["args"]?.[0] === se && _0x21d3d8?.["args"]?.[1] === _0x1dbc56) {
      let _0x28de08 = false;
      _0x21d3d8.disabled === true && (_0x21d3d8.disabled = false, _0x28de08 = true);
      for (let _0x5a8a84 of Object.keys(_0x2e5777.mcpServers)) (/^pchat-\d+$/.test(_0x5a8a84) || _0x5a8a84 === "user-persistent-chat") && (delete _0x2e5777.mcpServers[_0x5a8a84], _0x28de08 = true);
      _0x28de08 && m.writeFileSync(_0xeb2054, JSON.stringify(_0x2e5777, null, 2), "utf8");
      _0x3e75ad = false;
    }
  } catch {}
  if (_0x3e75ad) {
    {
      const _0x2b5c56 = {
        recursive: true
      };
      m.existsSync(_0x13fd24) || m.mkdirSync(_0x13fd24, _0x2b5c56);
      let _0x56494d = {
        mcpServers: _0x177a0e
      };
      try {
        let _0x17acef = JSON.parse(m.readFileSync(_0xeb2054, "utf8"));
        let _0x5697fa = {
          ..._0x17acef.mcpServers
        };
        delete _0x5697fa["user-persistent-chat"];
        for (let _0x370a4b of Object.keys(_0x5697fa)) /^pchat-\d+$/.test(_0x370a4b) && delete _0x5697fa[_0x370a4b];
        const _0x4e39cc = {
          ..._0x5697fa,
          ..._0x177a0e
        };
        const _0x12a4bb = {
          ..._0x17acef,
          mcpServers: _0x4e39cc
        };
        _0x56494d = _0x12a4bb;
      } catch {}
      m.writeFileSync(_0xeb2054, JSON.stringify(_0x56494d, null, 2), "utf8");
      y.window.showInformationMessage("Persistent Chat: MCP 已配置（persistent-chat）。请重新加载窗口，并在 Cursor 设置 > MCP 中确认已启用。", "重新加载窗口").then(_0x5183cc => {
        {
          _0x5183cc === "重新加载窗口" && y.commands.executeCommand("workbench.action.reloadWindow");
        }
      });
    }
  }
}
function ue() {
  let _0x2ccd1f = M.getInstance();
  return !(!Ke || !_0x2ccd1f?.["hasValidToken"]() || !lt());
}
async function me() {
  let _0x2a7395 = M.getInstance();
  return Ke && _0x2a7395 && lt() ? await _0x2a7395.ensureTokenValid() : false;
}
function ee(_0x106558, _0x32d727) {
  const _0x5379e6 = {
    "Content-Type": "application/json"
  };
  !_0x106558.headersSent && !_0x106558.socket?.["destroyed"] && (_0x106558.writeHead(403, _0x5379e6), _0x106558.end(JSON.stringify({
    error: _0x32d727 || "扩展未激活，请在 Persistent Chat 面板中输入卡密激活。"
  })));
}
var ct = 5242880;
function Zt(_0x365a51) {
  return new Promise((_0x4616a2, _0xb6aed9) => {
    {
      let _0x29691b = Number(_0x365a51.headers["content-length"]);
      if (Number.isFinite(_0x29691b) && _0x29691b > ct) {
        {
          _0xb6aed9(new Error("payload too large"));
          return;
        }
      }
      let _0x1cc850 = [];
      let _0x4d5348 = 0;
      _0x365a51.on("data", _0x40ec79 => {
        {
          let _0x47feac = Buffer.isBuffer(_0x40ec79) ? _0x40ec79 : Buffer.from(_0x40ec79);
          if (_0x4d5348 += _0x47feac.length, _0x4d5348 > ct) {
            {
              _0xb6aed9(new Error("payload too large"));
              _0x365a51.destroy();
              return;
            }
          }
          _0x1cc850.push(_0x47feac);
        }
      });
      _0x365a51.on("end", () => _0x4616a2(Buffer.concat(_0x1cc850).toString("utf8")));
      _0x365a51.on("error", _0xb6aed9);
      _0x365a51.on("aborted", () => _0xb6aed9(new Error("request aborted")));
    }
  });
}
function es(_0x317356, _0x332de5) {
  let _0x1b0dd9 = ft.createServer(async (_0x5734c9, _0x2fbf19) => {
    if (_0x5734c9.method !== "POST") {
      {
        _0x2fbf19.writeHead(404);
        _0x2fbf19.end();
        return;
      }
    }
    try {
      let _0x294c19 = await Zt(_0x5734c9);
      let _0x58c318 = JSON.parse(_0x294c19);
      if (Fe = Date.now(), Se || (Se = true, _0x317356.sendMcpStatus(true)), _0x5734c9.url === "/init-conversation") {
        if (!ue() && !(await me())) {
          ee(_0x2fbf19);
          return;
        }
        let {
          conversation_token: _0x5abf93,
          title: _0x25eac4
        } = _0x58c318;
        if (!_0x5abf93) {
          const _0x4ae718 = {
            error: "conversation_token required"
          };
          _0x2fbf19.writeHead(400);
          _0x2fbf19.end(JSON.stringify(_0x4ae718));
          return;
        }
        _0x317356.initConversation(_0x5abf93, _0x25eac4 || undefined);
        _0x2fbf19.writeHead(200, {
          "Content-Type": "application/json"
        });
        _0x2fbf19.end(JSON.stringify({
          conversation_token: _0x5abf93,
          status: "created"
        }));
        return;
      }
      if (_0x5734c9.url === "/wait-for-input") {
        {
          if (_0x5734c9.socket.setKeepAlive(true, 10000), _0x5734c9.socket.setTimeout(0), !ue() && !(await me())) {
            ee(_0x2fbf19);
            return;
          }
          let {
            message: _0x2c6ba3,
            prompt: _0xbaf5c6,
            conversation_token: _0x37e5c2,
            title: _0x26df57
          } = _0x58c318;
          let _0x35dd46 = _0x317356.determineNextSessionId(_0x37e5c2 || undefined, _0x26df57 || undefined);
          if (!_0x35dd46) {
            const _0x288c47 = {
              "Content-Type": "application/json"
            };
            const _0x46f2e7 = {
              error: "conversation_token is required (no implicit fallback)",
              errorCode: "TOKEN_REQUIRED"
            };
            _0x2fbf19.writeHead(400, _0x288c47);
            _0x2fbf19.end(JSON.stringify(_0x46f2e7));
            return;
          }
          if (_0x37e5c2 && !_0x317356.hasSession(_0x37e5c2)) {
            const _0x396674 = {
              "Content-Type": "application/json"
            };
            const _0x354184 = {
              error: "Unknown conversation_token: " + _0x37e5c2 + ". Token must come from init_conversation or select_conversation.",
              errorCode: "UNKNOWN_CONVERSATION_TOKEN",
              conversation_token: _0x37e5c2
            };
            _0x2fbf19.writeHead(400, _0x396674);
            _0x2fbf19.end(JSON.stringify(_0x354184));
            return;
          }
          let _0x292c35 = zt();
          if (!_0x317356.hasActiveWaiter(_0x35dd46) && _0x317356.getActiveSessionCount() >= _0x292c35) {
            {
              const _0xa2a4cb = {
                "Content-Type": "application/json"
              };
              _0x2fbf19.writeHead(429, _0xa2a4cb);
              _0x2fbf19.end(JSON.stringify({
                error: "并发对话已达上限 (" + _0x317356.getActiveSessionCount() + "/" + _0x292c35 + ")。请关闭一个现有对话，或在 Persistent Chat 设置中调高 slotCount。"
              }));
              return;
            }
          }
          _0x26df57 && _0x317356.setSessionTitle(_0x35dd46, _0x26df57);
          _0x2c6ba3 && _0x317356.addAssistantMessage(_0x2c6ba3, _0x35dd46);
          let _0x212a6b = new AbortController();
          let _0x5dd279 = () => {
            _0x2fbf19.writableFinished || _0x212a6b.abort();
          };
          _0x2fbf19.on("close", _0x5dd279);
          try {
            let _0x5acfda = await _0x317356.requestInput(_0xbaf5c6 || "请输入你的回复", _0x35dd46, _0x212a6b.signal);
            _0x2fbf19.removeListener("close", _0x5dd279);
            let _0x2ccb6e = M.getInstance();
            const _0x525cb8 = {
              ..._0x5acfda,
              conversation_token: _0x35dd46
            };
            !_0x2fbf19.headersSent && !_0x2fbf19.socket?.["destroyed"] && (!_0x2ccb6e || _0x2ccb6e._vs() === 0 ? ee(_0x2fbf19, "许可证已过期，请续费。") : (_0x2fbf19.writeHead(200, {
              "Content-Type": "application/json"
            }), _0x2fbf19.end(JSON.stringify(_0x525cb8))));
          } catch {}
          return;
        }
      }
      if (_0x5734c9.url === "/merge-conversation") {
        if (!ue() && !(await me())) {
          ee(_0x2fbf19);
          return;
        }
        let {
          from_token: _0x4bab22,
          to_token: _0x118ec0
        } = _0x58c318;
        if (!_0x4bab22 || !_0x118ec0) {
          const _0x2c1141 = {
            error: "from_token and to_token required"
          };
          _0x2fbf19.writeHead(400);
          _0x2fbf19.end(JSON.stringify(_0x2c1141));
          return;
        }
        const _0x4f3bfe = {
          "Content-Type": "application/json"
        };
        _0x317356.mergeConversation(_0x4bab22, _0x118ec0);
        _0x2fbf19.writeHead(200, _0x4f3bfe);
        _0x2fbf19.end(JSON.stringify({
          conversation_token: _0x118ec0,
          status: "merged"
        }));
        return;
      }
      if (_0x5734c9.url === "/ping") {
        {
          const _0x58a14f = {
            "Content-Type": "application/json"
          };
          const _0x38dd7d = {
            status: "ok"
          };
          _0x2fbf19.writeHead(200, _0x58a14f);
          _0x2fbf19.end(JSON.stringify(_0x38dd7d));
          return;
        }
      }
      if (_0x5734c9.url === "/select-conversation") {
        {
          if (!ue() && !(await me())) {
            ee(_0x2fbf19);
            return;
          }
          let _0x4bfe93 = _0x317356.getRecentActiveSessions(1800000);
          const _0xbb74dd = {
            "Content-Type": "application/json"
          };
          const _0xd711ee = {
            sessions: _0x4bfe93
          };
          _0x2fbf19.writeHead(200, _0xbb74dd);
          _0x2fbf19.end(JSON.stringify(_0xd711ee));
          return;
        }
      }
      _0x2fbf19.writeHead(404);
      _0x2fbf19.end();
    } catch (_0x5877e0) {
      try {
        {
          if (!_0x2fbf19.headersSent && !_0x2fbf19.socket?.["destroyed"]) {
            {
              let _0x57f901 = _0x5877e0 instanceof Error ? _0x5877e0.message : String(_0x5877e0);
              let _0x4f8906 = _0x57f901 === "payload too large" ? 413 : _0x57f901 === "request aborted" ? 400 : 500;
              const _0x239360 = {
                "Content-Type": "application/json"
              };
              const _0x3e76bf = {
                error: _0x57f901
              };
              _0x2fbf19.writeHead(_0x4f8906, _0x239360);
              _0x2fbf19.end(JSON.stringify(_0x3e76bf));
            }
          }
        }
      } catch {}
      try {
        console.error("[persistent-chat] internal server error:", _0x5877e0);
      } catch {}
    }
  });
  _0x1b0dd9.keepAliveTimeout = 0;
  _0x1b0dd9.headersTimeout = 0;
  _0x1b0dd9.on("clientError", (_0x1a828a, _0x28eff6) => {
    {
      try {
        _0x28eff6.destroy();
      } catch {}
      try {
        console.error("[persistent-chat] clientError:", _0x1a828a);
      } catch {}
    }
  });
  _0x1b0dd9.listen(_0x332de5, "127.0.0.1");
  return _0x1b0dd9;
}
function ts() {
  try {
    let _0x36eb49 = __filename;
    if (!m.existsSync(_0x36eb49)) {
      return true;
    }
    if (m.statSync(_0x36eb49).size < 10000) {
      return false;
    }
    let _0x5a16d7 = m.readFileSync(_0x36eb49, "utf8");
    if (_0x5a16d7.length < 20000 || _e.createHash("sha256").update(_0x5a16d7.slice(0, 2048)).digest("hex").length !== 64 || _e.createHash("md5").update(_0x5a16d7.slice(-1024)).digest("hex").length !== 32) {
      return false;
    }
    let _0x2fff5f = w.join(w.dirname(_0x36eb49), "bridge.js");
    return !(m.existsSync(_0x2fff5f) && m.statSync(_0x2fff5f).size < 5000);
  } catch {
    return true;
  }
}
async function ss() {
  return new Promise(_0x5dc9c8 => {
    const _0x8e3f6a = {
      timeout: 4000,
      windowsHide: true
    };
    (0, bt.execFile)("node", ["-v"], _0x8e3f6a, (_0x207554, _0x303c79, _0x1bb786) => {
      {
        if (_0x207554) {
          {
            if (_0x207554.code === "ENOENT") {
              _0x5dc9c8({
                state: "missing",
                detail: "未检测到 node 命令，请安装 Node.js " + De + "+ 并确保已加入 PATH"
              });
              return;
            }
            let _0x4fe08f = (_0x1bb786 || _0x303c79 || _0x207554.message || "unknown error").trim();
            _0x5dc9c8({
              state: "error",
              detail: "Node.js 检测失败：" + _0x4fe08f
            });
            return;
          }
        }
        let _0x3aae68 = (_0x303c79 || "").trim();
        let _0x307827 = _0x3aae68.match(/^v?(\d+)(?:\.\d+)?(?:\.\d+)?$/);
        if (!_0x307827) {
          {
            _0x5dc9c8({
              state: "error",
              version: _0x3aae68 || null,
              detail: "检测到 node 命令，但无法识别版本号"
            });
            return;
          }
        }
        let _0x4942b4 = Number(_0x307827[1]);
        if (!Number.isFinite(_0x4942b4) || _0x4942b4 < De) {
          {
            _0x5dc9c8({
              state: "unsupported",
              version: _0x3aae68,
              detail: "当前版本 " + _0x3aae68 + " 过低，需要 Node.js " + De + "+"
            });
            return;
          }
        }
        const _0x23f904 = {
          state: "ok",
          version: _0x3aae68,
          detail: "已检测到 " + _0x3aae68 + "，Bridge 可正常使用 node 启动"
        };
        _0x5dc9c8(_0x23f904);
      }
    });
  });
}
async function Oe(_0x3f90e0, _0xf7d983 = false) {
  const _0x475696 = {
    state: "checking",
    detail: "正在检测 node 命令..."
  };
  _0xf7d983 && _0x3f90e0.setNodeStatus(_0x475696);
  let _0x41e248 = await ss();
  _0x3f90e0.setNodeStatus(_0x41e248);
}
async function as(_0x33de43) {
  if (!ts()) {
    let _0x4f450c = 7200000 + Math.random() * 4 * 60 * 60 * 1000;
    setTimeout(() => {
      {
        Ke = false;
      }
    }, _0x4f450c);
  }
  J = _0x33de43;
  let _0x52c8cd = new M(_0x33de43);
  await _0x52c8cd.verifyOnStartup();
  let _0x495825 = new Z(_0x33de43);
  const _0x4f1e65 = {
    retainContextWhenHidden: true
  };
  const _0x51b7ab = {
    webviewOptions: _0x4f1e65
  };
  _0x33de43.subscriptions.push(y.window.registerWebviewViewProvider(Z.viewType, _0x495825, _0x51b7ab));
  _0x495825.setRefreshUserInfoCallback(() => {
    {
      ot(_0x495825);
      Oe(_0x495825, true);
    }
  });
  _0x495825.setFetchTokenUsageCallback((_0x313249, _0x372623) => os(_0x495825, _0x313249, _0x372623));
  setTimeout(() => ot(_0x495825), 3000);
  Oe(_0x495825, true);
  let _0x3dd714 = null;
  let _0x4d3000 = () => {
    _0x3dd714 && clearTimeout(_0x3dd714);
    _0x3dd714 = setTimeout(() => _0x495825.sendRecentFilesCache(), 500);
  };
  _0x33de43.subscriptions.push(y.window.tabGroups.onDidChangeTabs(() => _0x4d3000()));
  let _0x2a6010 = setInterval(() => {
    Oe(_0x495825);
  }, 60000);
  _0x33de43.subscriptions.push({
    dispose: () => clearInterval(_0x2a6010)
  });
  Jt(_0x33de43);
  let _0x24dbb4 = await jt(13456);
  ye = es(_0x495825, _0x24dbb4);
  let _0xc5a4b8 = y.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
  if (_0xc5a4b8) {
    {
      $t(_0xc5a4b8, _0x24dbb4);
      _0x33de43.subscriptions.push(y.window.onDidChangeWindowState(_0x560c5c => {
        _0x560c5c.focused && (Vt(_0xc5a4b8), _0x495825.recheckPanelHealth());
      }));
      let _0x3a63c6 = setInterval(() => {
        _0x495825.recheckPanelHealth();
      }, 5000);
      _0x33de43.subscriptions.push({
        dispose: () => clearInterval(_0x3a63c6)
      });
    }
  }
  Gt();
  let _0x5d9e7e = _0x33de43.globalState.get("persistentChat.replyTransport");
  Me(_0x5d9e7e === "file" || _0x5d9e7e === "markdown" ? _0x5d9e7e : "markdown");
  _0x495825.setUpdateReplyTransportCallback(_0x4776c3 => {
    _0x33de43.globalState.update("persistentChat.replyTransport", _0x4776c3);
    Me(_0x4776c3);
  });
  await Xt(_0x33de43);
  _0xc5a4b8 && (await Yt(_0xc5a4b8, _0x33de43));
  _0x33de43.subscriptions.push(y.commands.registerCommand("persistentChat.openPanel", async () => {
    try {
      {
        await _0x495825.revealPreferred(false);
      }
    } catch (_0x3b41cd) {
      try {
        console.warn("[persistent-chat] openPanel fallback after error:", _0x3b41cd);
      } catch {}
      try {
        await y.commands.executeCommand("persistentChat.sidePanel.focus");
      } catch {}
    }
  }), y.commands.registerCommand("persistentChat.openInWindow", async () => {
    try {
      {
        await _0x495825.openInPanel();
      }
    } catch (_0x48651a) {
      try {
        console.warn("[persistent-chat] openInWindow error:", _0x48651a);
      } catch {}
    }
  }), y.commands.registerCommand("persistentChat.openInSidebar", async () => {
    try {
      {
        await _0x495825.openInSidebar(false);
      }
    } catch (_0x542438) {
      try {
        console.warn("[persistent-chat] openInSidebar error:", _0x542438);
      } catch {}
    }
  }), y.commands.registerCommand("persistentChat.refFile", async () => {
    let _0x36d1f0 = y.window.activeTextEditor;
    if (!_0x36d1f0 || _0x36d1f0.document.uri.scheme !== "file") {
      return;
    }
    let _0x5f3d53 = _0x36d1f0.document.fileName;
    let _0x466e68 = y.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
    let _0x3582ac = _0x466e68 && _0x5f3d53.startsWith(_0x466e68 + w.sep) ? _0x5f3d53.slice(_0x466e68.length + 1) : _0x5f3d53;
    _0x495825.postToWebview({
      type: "fileRefAdded",
      path: _0x3582ac,
      name: w.basename(_0x5f3d53),
      lines: null
    });
    await _0x495825.revealPreferred(true);
  }), y.commands.registerCommand("persistentChat.refSelection", async () => {
    let _0x54c64c = y.window.activeTextEditor;
    if (!_0x54c64c || _0x54c64c.document.uri.scheme !== "file" || _0x54c64c.selection.isEmpty) {
      return;
    }
    let _0x5b5a10 = _0x54c64c.document.fileName;
    let _0x46f6bd = y.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
    let _0x262e12 = _0x46f6bd && _0x5b5a10.startsWith(_0x46f6bd + w.sep) ? _0x5b5a10.slice(_0x46f6bd.length + 1) : _0x5b5a10;
    let _0x3c2dfa = _0x54c64c.selection;
    let _0x270e15 = _0x3c2dfa.start.line + 1 + "-" + (_0x3c2dfa.end.line + 1);
    _0x495825.postToWebview({
      type: "fileRefAdded",
      path: _0x262e12,
      name: w.basename(_0x5b5a10),
      lines: _0x270e15
    });
    await _0x495825.revealPreferred(true);
  }), y.commands.registerCommand("persistentChat.refExplorerFile", async _0x43c17f => {
    if (!_0x43c17f || _0x43c17f.scheme !== "file") {
      return;
    }
    let _0x26c533 = _0x43c17f.fsPath;
    let _0x49973c = y.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
    let _0x230537 = _0x49973c && _0x26c533.startsWith(_0x49973c + w.sep) ? _0x26c533.slice(_0x49973c.length + 1) : _0x26c533;
    let _0x5918eb = false;
    try {
      _0x5918eb = m.statSync(_0x26c533).isDirectory();
    } catch {}
    _0x495825.postToWebview({
      type: "fileRefAdded",
      path: _0x230537,
      name: w.basename(_0x26c533),
      lines: null,
      isFolder: _0x5918eb
    });
    await _0x495825.revealPreferred(true);
  }));
  let _0x45f0d7 = setInterval(() => {
    {
      Se && Fe > 0 && Date.now() - Fe > Ut && (Se = false, _0x495825.sendMcpStatus(false));
    }
  }, 15000);
  _0x33de43.subscriptions.push({
    dispose: () => clearInterval(_0x45f0d7)
  });
  _0x33de43.subscriptions.push(y.workspace.onDidChangeConfiguration(_0x100dd1 => {
    _0x100dd1.affectsConfiguration("persistentChat.slotCount") && Qt();
  }));
  _0x33de43.globalState.get("persistentChat.firstOpenDone") || (_0x33de43.globalState.update("persistentChat.firstOpenDone", true), setTimeout(() => {
    y.window.showInformationMessage("Persistent Chat 已启用。点击右侧按钮打开聊天面板。", "打开面板", "稍后").then(_0x7f4810 => {
      _0x7f4810 === "打开面板" && y.commands.executeCommand("persistentChat.openPanel");
    });
  }, 2000));
  let _0xdbe4a1 = y.window.createStatusBarItem(y.StatusBarAlignment.Right, 100);
  _0xdbe4a1.text = "$(comment-discussion) 持久对话";
  _0xdbe4a1.tooltip = "端口: " + _0x24dbb4;
  _0xdbe4a1.command = "persistentChat.openPanel";
  _0xdbe4a1.show();
  _0x33de43.subscriptions.push(_0xdbe4a1);
  let _0x17cf08 = setInterval(() => {
    {
      if (_0x52c8cd.getExpiryReminderMs() !== null && !_0x52c8cd.isInGraceMode()) {
        let _0x59372e = _0x52c8cd.formatTimeRemaining();
        _0xdbe4a1.text = "$(clock) 持久对话 (即将到期)";
        _0xdbe4a1.tooltip = "许可证剩余: " + _0x59372e + "\n端口: " + _0x24dbb4;
        _0xdbe4a1.backgroundColor = new y.ThemeColor("statusBarItem.warningBackground");
      } else {
        _0x52c8cd.isInGraceMode() || (_0xdbe4a1.text = "$(comment-discussion) 持久对话", _0xdbe4a1.tooltip = "端口: " + _0x24dbb4, _0xdbe4a1.backgroundColor = undefined);
      }
      _0x495825.sendActivationStatus();
    }
  }, 300000);
  _0x33de43.subscriptions.push({
    dispose: () => clearInterval(_0x17cf08)
  });
  let _0x528eb4 = 0;
  let _0xf2a529 = 600000;
  let _0x310ec6 = 0;
  function _0x37c291() {
    {
      let _0x46459c = _0x33de43.workspaceState.get("pchat.lastHeartbeat") || 0;
      return Date.now() - _0x46459c < _0xf2a529 * 0.8 ? false : (_0x33de43.workspaceState.update("pchat.lastHeartbeat", Date.now()), true);
    }
  }
  function _0x236857() {
    {
      if (_0x52c8cd.isInGraceMode()) {
        let _0xcdd0e = _0x52c8cd.getGraceRemaining();
        _0xdbe4a1.text = "$(warning) 持久对话 (离线)";
        _0xdbe4a1.tooltip = "心跳连接失败，剩余离线时间: " + _0xcdd0e + "\n端口: " + _0x24dbb4;
        _0xdbe4a1.backgroundColor = new y.ThemeColor("statusBarItem.warningBackground");
      } else {
        _0xdbe4a1.text = "$(comment-discussion) 持久对话";
        _0xdbe4a1.tooltip = "端口: " + _0x24dbb4;
        _0xdbe4a1.backgroundColor = undefined;
      }
    }
  }
  let _0x1df17b = null;
  let _0x48b0ec = () => {
    _0x1df17b = setTimeout(async () => {
      if (_0x52c8cd.isActivated() && _0x37c291()) {
        {
          let _0x244f1b = false;
          try {
            let _0x21ad36 = we && Date.now() - Le < Kt;
            let _0x5e3765 = _0x21ad36 ? we : undefined;
            if (nt++, !_0x21ad36 && nt % Bt === 0) {
              try {
                {
                  let _0x2cb4c8 = await Promise.race([$e(), new Promise(_0x3d085e => setTimeout(() => _0x3d085e(null), 3000))]);
                  if (_0x2cb4c8) {
                    let _0x29ed87 = encodeURIComponent("::");
                    let _0x11d50c = {
                      Cookie: "WorkosCursorSessionToken=" + _0x2cb4c8.userId + _0x29ed87 + _0x2cb4c8.accessToken,
                      "User-Agent": "Mozilla/5.0",
                      Origin: "https://cursor.com"
                    };
                    let [_0x4d2b62, _0x37a466, _0x2d5de3] = await Promise.all([Promise.race([Y("https://cursor.com/api/usage-summary", _0x11d50c), new Promise(_0x5593b5 => setTimeout(() => _0x5593b5(null), 3000))]), Promise.race([Y("https://cursor.com/api/auth/stripe", _0x11d50c), new Promise(_0x252385 => setTimeout(() => _0x252385(null), 3000))]), vt(_0x11d50c).catch(() => 0)]);
                    let _0x144d2d = _0x4d2b62?.["individualUsage"]?.["plan"];
                    let _0x57e7b9 = _0x2d5de3 > 0 ? _0x2d5de3 : _0x144d2d?.["used"] ?? 0;
                    (_0x57e7b9 > 0 || _0x144d2d && typeof _0x144d2d.used == "number") && (_0x5e3765 = {
                      used: _0x57e7b9,
                      limit: _0x144d2d?.["limit"] ?? 0,
                      plan: _0x37a466?.["membershipType"] || "free"
                    }, we = _0x5e3765, Le = Date.now());
                  }
                }
              } catch {}
            }
            let _0x41a59c = J.globalState.get("persistentChat.renewTextsVer") || "";
            let _0x1543c9 = await _0x52c8cd.renew(_0x528eb4++, _0x5e3765, _0x41a59c);
            if (_0x1543c9.nextInterval && _0x1543c9.nextInterval > 0 && (_0xf2a529 = Math.max(60000, Math.min(_0x1543c9.nextInterval, 1800000))), _0x244f1b = !!_0x1543c9.nextInterval, _0x244f1b && Array.isArray(_0x1543c9.renewalTexts)) {
              let _0x447d86 = _0x1543c9.renewalTexts;
              _0x495825.setServerTexts(_0x447d86);
              _0x1543c9.renewalTextsVer && (await J.globalState.update("persistentChat.renewTextsVer", _0x1543c9.renewalTextsVer));
            }
            if (!_0x1543c9.updateAvailable && _0x1543c9.latestVersion) {
              {
                let _0xf5f786 = _0x33de43.extension?.["packageJSON"]?.["version"] || "0.0.0";
                is(_0x1543c9.latestVersion, _0xf5f786) > 0 && (_0x1543c9.updateAvailable = true);
              }
            }
            _0x1543c9.forceUpdate ? (await y.window.showErrorMessage("Persistent Chat 版本过旧（最低要求 " + (_0x1543c9.latestVersion || "最新版") + "），请立即更新。", "下载更新")) === "下载更新" && _0x1543c9.downloadUrl && y.env.openExternal(y.Uri.parse(_0x1543c9.downloadUrl)) : _0x1543c9.updateAvailable && _0x528eb4 <= 2 && (await y.window.showInformationMessage("Persistent Chat 有新版本 " + _0x1543c9.latestVersion + " 可用", "下载更新", "稍后")) === "下载更新" && _0x1543c9.downloadUrl && y.env.openExternal(y.Uri.parse(_0x1543c9.downloadUrl));
            (_0x1543c9.forceUpdate || _0x1543c9.updateAvailable) && _0x495825.postToWebview({
              type: "updateAvailable",
              force: !!_0x1543c9.forceUpdate,
              version: _0x1543c9.latestVersion || "",
              downloadUrl: _0x1543c9.downloadUrl || ""
            });
          } catch {}
          _0x244f1b ? (_0x310ec6 > 0 && _0x236857(), _0x310ec6 = 0) : (_0x310ec6++, console.warn("[pchat] heartbeat failed #" + _0x310ec6), _0x236857());
        }
      }
      _0x52c8cd.isActivated() && _0x48b0ec();
    }, _0xf2a529);
  };
  _0x52c8cd.isActivated() && _0x48b0ec();
  _0x33de43.subscriptions.push({
    dispose: () => {
      _0x1df17b && clearTimeout(_0x1df17b);
    }
  });
}
function is(_0x9437bd, _0x2428ce) {
  let _0x3014ee = _0x9437bd.replace(/^v/i, "").split(".").map(Number);
  let _0x642970 = _0x2428ce.replace(/^v/i, "").split(".").map(Number);
  for (let _0x5d6ea9 = 0; _0x5d6ea9 < Math.max(_0x3014ee.length, _0x642970.length); _0x5d6ea9++) {
    let _0xa10584 = _0x3014ee[_0x5d6ea9] || 0;
    let _0x2dcee1 = _0x642970[_0x5d6ea9] || 0;
    if (_0xa10584 > _0x2dcee1) {
      return 1;
    }
    if (_0xa10584 < _0x2dcee1) {
      return -1;
    }
  }
  return 0;
}
function ns() {
  let _0x3062b4 = q.homedir();
  if (q.platform() === "win32") {
    let _0x46ac6b = y.env.appRoot;
    let _0x160185 = w.join(w.dirname(w.dirname(_0x46ac6b)), "data");
    if (m.existsSync(w.join(_0x160185, "User"))) {
      return _0x160185;
    }
    let _0x548383 = w.join(w.dirname(_0x46ac6b), "data");
    return m.existsSync(w.join(_0x548383, "User")) ? _0x548383 : w.join(process.env.APPDATA || w.join(_0x3062b4, "AppData", "Roaming"), "Cursor");
  }
  return q.platform() === "darwin" ? w.join(_0x3062b4, "Library", "Application Support", "Cursor") : w.join(_0x3062b4, ".config", "Cursor");
}
function rt(_0x6c0158) {
  try {
    let _0x2778ce = _0x6c0158.split(".");
    if (_0x2778ce.length !== 3) {
      return null;
    }
    let _0x1638d8 = _0x2778ce[1];
    _0x1638d8 += "=".repeat((4 - _0x1638d8.length % 4) % 4);
    return JSON.parse(Buffer.from(_0x1638d8.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf-8"));
  } catch {
    return null;
  }
}
var G = null;
function cs(_0x320be5) {
  try {
    return require("module").createRequire(__filename)(_0x320be5);
  } catch {}
  try {
    {
      return globalThis.require(_0x320be5);
    }
  } catch {}
  try {
    {
      return new Function("p", "return require(p)")(_0x320be5);
    }
  } catch {}
  try {
    {
      return (0, eval)("require")(_0x320be5);
    }
  } catch {}
  throw new Error("Cannot require: " + _0x320be5);
}
function rs() {
  if (G !== null) {
    return G;
  }
  let _0x17fce5 = y.env.appRoot;
  let _0x53e274 = [w.join(_0x17fce5, "node_modules", "@vscode", "sqlite3"), w.join(_0x17fce5, "node_modules", "better-sqlite3"), w.join(_0x17fce5, "node_modules", "vscode-sqlite3"), w.join(_0x17fce5, "..", "node_modules", "@vscode", "sqlite3"), w.join(_0x17fce5, "..", "node_modules", "better-sqlite3"), w.join(_0x17fce5, "..", "node_modules.asar.unpacked", "@vscode", "sqlite3"), w.join(_0x17fce5, "node_modules.asar.unpacked", "@vscode", "sqlite3")];
  for (let _0x387000 of _0x53e274) if (m.existsSync(_0x387000)) {
    try {
      let _0x3094da = cs(_0x387000);
      G = _0x3094da.default || _0x3094da;
      return G;
    } catch {}
  }
  G = false;
  return G;
}
async function ve(_0x2b0f80, _0x36dcae) {
  try {
    let _0x1f9ab4 = rs();
    if (!_0x1f9ab4) {
      return ge(_0x2b0f80, _0x36dcae);
    }
    let _0x27f714 = _0x1f9ab4.Database || _0x1f9ab4;
    if (typeof _0x27f714 != "function") {
      return ge(_0x2b0f80, _0x36dcae);
    }
    try {
      {
        let _0x9723a = new _0x27f714(_0x2b0f80, _0x1f9ab4.OPEN_READONLY || 1);
        return new Promise(_0x4df697 => {
          let _0x89e0df = setTimeout(() => {
            try {
              _0x9723a.close();
            } catch {}
            _0x4df697(null);
          }, 5000);
          _0x9723a.get("SELECT value FROM ItemTable WHERE key = ?", [_0x36dcae], (_0xa563b2, _0x1116c8) => {
            {
              clearTimeout(_0x89e0df);
              try {
                _0x9723a.close();
              } catch {}
              _0x4df697(!_0xa563b2 && _0x1116c8?.["value"] ? _0x1116c8.value : null);
            }
          });
        });
      }
    } catch {
      {
        return ge(_0x2b0f80, _0x36dcae);
      }
    }
  } catch {
    return ge(_0x2b0f80, _0x36dcae);
  }
}
function ge(_0x74a17e, _0x3bd6b1) {
  return new Promise(_0x4ae43d => {
    let {
      execFile: _0x1f4562
    } = require("child_process");
    let _0x5d2457 = "SELECT value FROM ItemTable WHERE key = '" + _0x3bd6b1.replace(/'/g, "''") + "'";
    _0x1f4562("sqlite3", [_0x74a17e, _0x5d2457], {
      timeout: 5000,
      maxBuffer: 1048576
    }, (_0x548fa5, _0x2b0c27) => {
      _0x4ae43d(!_0x548fa5 && _0x2b0c27 ? _0x2b0c27.trim() : null);
    });
  });
}
async function $e() {
  let _0x437570 = ns();
  let _0x55628c = w.join(_0x437570, "User", "globalStorage", "state.vscdb");
  if (m.existsSync(_0x55628c)) {
    let _0x2dd4f2 = await ve(_0x55628c, "cursorAuth/accessToken");
    if (_0x2dd4f2) {
      {
        let _0x1abcfa = (await ve(_0x55628c, "cursorAuth/userId")) || "";
        let _0x2c2cb4 = (await ve(_0x55628c, "cursorAuth/cachedEmail")) || "";
        if (!_0x2c2cb4) {
          {
            let _0x2ab559 = await ve(_0x55628c, "cursorAuth/user");
            if (_0x2ab559) {
              try {
                {
                  _0x2c2cb4 = JSON.parse(_0x2ab559).email || "";
                }
              } catch {}
            }
          }
        }
        _0x2c2cb4 || (_0x2c2cb4 = rt(_0x2dd4f2)?.["email"] || "");
        return {
          accessToken: _0x2dd4f2,
          userId: _0x1abcfa,
          email: _0x2c2cb4
        };
      }
    }
  }
  try {
    let _0x312c02 = w.join(_0x437570, "User", "globalStorage", "storage.json");
    if (m.existsSync(_0x312c02)) {
      let _0x2c4c1e = JSON.parse(m.readFileSync(_0x312c02, "utf8"));
      let _0x5b8171 = _0x2c4c1e["cursorAuth/accessToken"];
      if (_0x5b8171) {
        {
          let _0x280208 = _0x2c4c1e["cursorAuth/userId"] || "";
          let _0x3fb75c = _0x2c4c1e["cursorAuth/cachedEmail"] || "";
          if (!_0x3fb75c) {
            try {
              {
                _0x3fb75c = JSON.parse(_0x2c4c1e["cursorAuth/user"] || "{}").email || "";
              }
            } catch {}
          }
          _0x3fb75c || (_0x3fb75c = rt(_0x5b8171)?.["email"] || "");
          return {
            accessToken: _0x5b8171,
            userId: _0x280208,
            email: _0x3fb75c
          };
        }
      }
    }
  } catch {}
  return null;
}
function Y(_0x55d065, _0x1ffc01) {
  return new Promise(_0x12a900 => {
    {
      const _0x560069 = {
        method: "GET",
        headers: _0x1ffc01,
        timeout: 8000
      };
      let _0x27709d = Ue.request(_0x55d065, _0x560069, _0x17f57a => {
        let _0x5bcede = [];
        _0x17f57a.on("data", _0x57bab1 => _0x5bcede.push(_0x57bab1));
        _0x17f57a.on("end", () => {
          try {
            _0x12a900(JSON.parse(Buffer.concat(_0x5bcede).toString()));
          } catch {
            _0x12a900(null);
          }
        });
      });
      _0x27709d.on("error", () => _0x12a900(null));
      _0x27709d.on("timeout", () => {
        {
          _0x27709d.destroy();
          _0x12a900(null);
        }
      });
      _0x27709d.end();
    }
  });
}
function mt(_0x297b4f, _0x5cc48f, _0x559f46) {
  return new Promise(_0x163693 => {
    {
      let _0x539c13 = JSON.stringify(_0x559f46);
      let _0x3b8c3a = Ue.request(_0x297b4f, {
        method: "POST",
        headers: {
          ..._0x5cc48f,
          "Content-Type": "application/json",
          "Content-Length": String(Buffer.byteLength(_0x539c13))
        },
        timeout: 10000
      }, _0x1025eb => {
        {
          let _0x2c30c2 = [];
          _0x1025eb.on("data", _0x3ff8d8 => _0x2c30c2.push(_0x3ff8d8));
          _0x1025eb.on("end", () => {
            try {
              {
                _0x163693(JSON.parse(Buffer.concat(_0x2c30c2).toString()));
              }
            } catch {
              _0x163693(null);
            }
          });
        }
      });
      _0x3b8c3a.on("error", () => _0x163693(null));
      _0x3b8c3a.on("timeout", () => {
        _0x3b8c3a.destroy();
        _0x163693(null);
      });
      _0x3b8c3a.write(_0x539c13);
      _0x3b8c3a.end();
    }
  });
}
async function vt(_0x3b83a7) {
  let _0x49a33d = Date.now();
  let _0x595d57 = _0x49a33d - 2592000000;
  let _0x29c66d = 0;
  let _0x55860a = 1;
  let _0x48e688 = 500;
  for (;;) {
    let _0x3a15f7 = await Promise.race([mt("https://cursor.com/api/dashboard/get-filtered-usage-events", _0x3b83a7, {
      teamId: 0,
      startDate: String(_0x595d57),
      endDate: String(_0x49a33d),
      page: _0x55860a,
      pageSize: _0x48e688
    }), new Promise(_0x1ee62a => setTimeout(() => _0x1ee62a(null), 8000))]);
    if (!_0x3a15f7?.["usageEventsDisplay"]) {
      break;
    }
    for (let _0x395b4c of _0x3a15f7.usageEventsDisplay) _0x29c66d += _0x395b4c?.["tokenUsage"]?.["totalCents"] || 0;
    if (_0x3a15f7.usageEventsDisplay.length < _0x48e688 || (_0x55860a++, _0x55860a > 4)) {
      break;
    }
  }
  return _0x29c66d;
}
async function ot(_0x4bb4b1) {
  try {
    {
      let _0x32fe65 = await $e();
      if (!_0x32fe65) {
        const _0x54d20c = {
          type: "userInfo",
          error: "无法获取 Cursor Token，请确认已登录 Cursor"
        };
        _0x4bb4b1.postToWebview(_0x54d20c);
        return;
      }
      const _0xa069cf = {
        type: "userInfo",
        email: _0x32fe65.email,
        plan: "loading",
        used: 0,
        limit: 0
      };
      _0x4bb4b1.postToWebview(_0xa069cf);
      let _0x4cedd6 = encodeURIComponent("::");
      let _0x5c6691 = {
        Cookie: "WorkosCursorSessionToken=" + _0x32fe65.userId + _0x4cedd6 + _0x32fe65.accessToken,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/0.44.0 Chrome/130.0.6723.137 Electron/33.2.1 Safari/537.36",
        Origin: "https://cursor.com"
      };
      let [_0x6aa2a8, _0xbfc6b6, _0x45be41] = await Promise.all([Y("https://cursor.com/api/auth/stripe", _0x5c6691), Y("https://cursor.com/api/usage-summary", _0x5c6691), vt(_0x5c6691).catch(() => 0)]);
      if (!_0x6aa2a8 && !_0xbfc6b6) {
        const _0x29d703 = {
          type: "userInfo",
          email: _0x32fe65.email,
          error: "账号信息获取失败，请检查网络"
        };
        _0x4bb4b1.postToWebview(_0x29d703);
        return;
      }
      let _0x271327 = _0x6aa2a8?.["membershipType"] || "free";
      let _0x5d8bda = _0xbfc6b6?.["individualUsage"]?.["plan"];
      let _0x27e1a3 = _0x45be41 > 0 ? _0x45be41 : _0x5d8bda?.["used"] ?? 0;
      let _0x5c7281 = _0x5d8bda?.["limit"] ?? 0;
      const _0x1805ba = {
        type: "userInfo",
        email: _0x32fe65.email,
        plan: _0x271327,
        used: _0x27e1a3,
        limit: _0x5c7281
      };
      const _0x4de138 = {
        used: _0x27e1a3,
        limit: _0x5c7281,
        plan: _0x271327
      };
      _0x4bb4b1.postToWebview(_0x1805ba);
      we = _0x4de138;
      Le = Date.now();
    }
  } catch (_0x5b2e24) {
    {
      _0x4bb4b1.postToWebview({
        type: "userInfo",
        error: "获取账号信息失败: " + String(_0x5b2e24)
      });
    }
  }
}
async function os(_0x63c813, _0x48d772 = 1, _0x1a9182 = 20) {
  try {
    let _0x231c51 = await $e();
    if (!_0x231c51) {
      const _0x2224d6 = {
        type: "tokenUsageData",
        error: "无法获取 Cursor Token，请确认已登录 Cursor"
      };
      _0x63c813.postToWebview(_0x2224d6);
      return;
    }
    let _0x2dfd06 = encodeURIComponent("::");
    let _0x5ed522 = {
      Cookie: "WorkosCursorSessionToken=" + _0x231c51.userId + _0x2dfd06 + _0x231c51.accessToken,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/0.44.0 Chrome/130.0.6723.137 Electron/33.2.1 Safari/537.36",
      Origin: "https://cursor.com"
    };
    let _0x2a2d2b = Date.now();
    let _0x112cdf = _0x2a2d2b - 2592000000;
    let [_0x25c1ea, _0x114b5a] = await Promise.all([Y("https://cursor.com/api/usage-summary", _0x5ed522), Y("https://cursor.com/api/auth/stripe", _0x5ed522)]);
    let _0x116838 = [];
    let _0x1c243c = 1;
    let _0x4a8c95 = 100;
    let _0x123381 = 0;
    for (;;) {
      let _0x151719 = await Promise.race([mt("https://cursor.com/api/dashboard/get-filtered-usage-events", _0x5ed522, {
        teamId: 0,
        startDate: String(_0x112cdf),
        endDate: String(_0x2a2d2b),
        page: _0x1c243c,
        pageSize: _0x4a8c95
      }), new Promise(_0x18e840 => setTimeout(() => _0x18e840(null), 10000))]);
      if (!_0x151719?.["usageEventsDisplay"]) {
        break;
      }
      _0x123381 = _0x151719.totalUsageEventsCount || _0x123381;
      for (let _0x378312 of _0x151719.usageEventsDisplay) _0x116838.push({
        timestamp: _0x378312.timestamp,
        model: _0x378312.model,
        kind: _0x378312.kind || "unknown",
        maxMode: _0x378312.maxMode || false,
        inputTokens: _0x378312.tokenUsage?.["inputTokens"] || 0,
        outputTokens: _0x378312.tokenUsage?.["outputTokens"] || 0,
        cacheWriteTokens: _0x378312.tokenUsage?.["cacheWriteTokens"] || 0,
        cacheReadTokens: _0x378312.tokenUsage?.["cacheReadTokens"] || 0,
        totalCents: _0x378312.tokenUsage?.["totalCents"] || 0
      });
      if (_0x151719.usageEventsDisplay.length < _0x4a8c95 || (_0x1c243c++, _0x1c243c > 20)) {
        break;
      }
    }
    let _0x27b786 = _0x25c1ea?.["individualUsage"]?.["plan"] || {};
    let _0x141ce3 = (_0x27b786.breakdown || {}).total || _0x27b786.used || 0;
    const _0x6934b4 = {
      used: _0x141ce3,
      limit: _0x27b786.limit || 0,
      remaining: _0x27b786.remaining || 0
    };
    const _0x174c97 = {
      type: "tokenUsageData",
      email: _0x231c51.email,
      plan: _0x114b5a?.["membershipType"] || "free",
      quota: _0x6934b4,
      billingCycleStart: _0x25c1ea?.["billingCycleStart"] || null,
      billingCycleEnd: _0x25c1ea?.["billingCycleEnd"] || null,
      events: _0x116838,
      totalCount: _0x123381 || _0x116838.length
    };
    _0x63c813.postToWebview(_0x174c97);
  } catch (_0x146603) {
    {
      _0x63c813.postToWebview({
        type: "tokenUsageData",
        error: "获取数据失败: " + String(_0x146603)
      });
    }
  }
}
function ds() {
  ye && (ye.close(), ye = null);
  let _0x5e0c5b = y.workspace.workspaceFolders?.[0]?.["uri"]["fsPath"] || "";
  _0x5e0c5b && Ht(_0x5e0c5b);
}
//Sat Aug 16 2025 09:13:26 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('一键价保');
var uEQLQJ = Object['defineProperty'],
  OafT536,
  RytzGLj,
  Z4cQ1r,
  yxhdAyq,
  hLEyzLz,
  lACOOaJ,
  pkd8lt5,
  diT98Ll;
function qlTTd0() {
  return globalThis;
}
function ILxCDeo() {
  return global;
}
function s4ozNiq() {
  return window;
}
function wiPIXOt() {
  return new Function("return this")();
}
function pX5VXi(uEQLQJ = [qlTTd0, ILxCDeo, s4ozNiq, wiPIXOt], vleTo8w, YYugY_N = [], OafT536, RytzGLj) {
  vleTo8w = vleTo8w;
  try {
    vleTo8w = Object
    YYugY_N.push(''.__proto__["constructor"].name)
  } catch (e) {}
  yQ47wj: for (OafT536 = 0; OafT536 < uEQLQJ["length"]; OafT536++) try {
    vleTo8w = uEQLQJ[OafT536]();
    for (RytzGLj = 0; RytzGLj < YYugY_N["length"]; RytzGLj++) if (typeof vleTo8w[YYugY_N[RytzGLj]] === '\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064') {
      continue yQ47wj;
    }
    return vleTo8w;
  } catch (e) {}
  return vleTo8w || this;
}
OafT536 = pX5VXi() || {}
RytzGLj = OafT536.TextDecoder
Z4cQ1r = OafT536["Uint8Array"]
yxhdAyq = OafT536.Buffer
hLEyzLz = OafT536.String || String
lACOOaJ = OafT536.Array || Array
function Ad4BiH(...uEQLQJ) {
  return uEQLQJ[uEQLQJ["length"] - 0x1];
}
function fJnR39(WS5ZH2, uEQLQJ) {
  switch (diT98Ll) {
    case -0x1d:
      return !WS5ZH2;
    case 27:
      return WS5ZH2 / uEQLQJ;
    case 41:
      return WS5ZH2 + uEQLQJ;
  }
}
function b5jRlu(WS5ZH2) {
  return Ad4BiH(WS5ZH2 = diT98Ll + (diT98Ll = WS5ZH2, 0), WS5ZH2);
}
diT98Ll = diT98Ll;
const mPcCKw = require('./jdCookie'),
  YIWADfT = require('./utils/Rebels_sendJDNotify'),
  Tj_8fpX = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: NSyUNE
  } = require('./utils/Rebels_H');
let QPMSglA = process["env"]["jd_price__threads"] || '\x31';
const SzIp1H = process["env"]["jd_price_interval"] || "2000",
  GgKuqbV = (process["env"]["jd_price_notify"] || process["env"]["jd_price_Notify"]) === "true",
  c7WqqR = (process["env"]["jd_price_pinFilter"] || '')["split"]('@'),
  F4_DIp = 1;
let ik9Znp4 = Object["keys"](mPcCKw)["map"](WS5ZH2 => mPcCKw[WS5ZH2])["filter"](WS5ZH2 => WS5ZH2);
if (fJnR39(ik9Znp4[0x0], diT98Ll = -0x1d)) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](0x1)
}
fJnR39((async () => {
  var uEQLQJ = "config";
  if (Ad4BiH(YIWADfT[uEQLQJ]({
    ["title"]: $["name"]
  }), await UWQ3_Ti(), GgKuqbV && YIWADfT["getMessage"]())) {
    await YIWADfT["push"]();
  }
})()["catch"](WS5ZH2 => {
  var uEQLQJ = "logErr";
  return $[uEQLQJ](WS5ZH2);
})["finally"](() => $["done"]()), b5jRlu(-29));
async function UWQ3_Ti() {
  try {
    try {
      const hLEyzLz = parseInt(QPMSglA);
      if (hLEyzLz > 0x0 && hLEyzLz !== 0x1) {
        QPMSglA = hLEyzLz;
      }
    } catch {
      QPMSglA = 0x1;
    }
    if (Ad4BiH(QPMSglA = Math["min"](QPMSglA, F4_DIp), $["waitTime"] = null, SzIp1H)) {
      try {
        const lACOOaJ = parseInt(SzIp1H);
        if (lACOOaJ >= 0) {
          $["waitTime"] = lACOOaJ;
        }
      } catch {
        console["log"]("⚠ 自定义运行间隔时长设置错误");
      }
    }
    if (Ad4BiH(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`间隔时长: [${fJnR39($["waitTime"], 0x3e8, b5jRlu(27))}秒]运行间隔时长`), console["log"](`代理开关: [${Tj_8fpX["getProxyStatus"]()}]`), console["log"](`通知推送: [${GgKuqbV ? '开启' : '关闭'}]`), console["log"](`账号过滤: [${c7WqqR["join"]('\x2c\x20')}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), $["needRemoveCookieIndex"] = [], await Tj_8fpX["concTask"](QPMSglA, ik9Znp4, gdbOlb), $["hasPrintActInfo"] = false, $["runEnd"] = false, $["needRemoveCookieIndex"]["length"]) > 0x0 && 1) {
      ik9Znp4 = ik9Znp4["filter"]((uEQLQJ, vleTo8w) => {
        return fJnR39($["needRemoveCookieIndex"]["includes"](fJnR39(vleTo8w, 1, b5jRlu(41))), b5jRlu(-29));
      })
      $["needRemoveCookieIndex"] = []
    }
    const qw9ow3 = YIWADfT["getMessage"]();
    if (qw9ow3) {
      var z_yThI = {
        ["ZylNt4u"]: "replace"
      };
      console["log"](`\n📣 运行结果\n${qw9ow3[z_yThI.ZylNt4u](/：/g, " ➜ ")}`);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function gdbOlb(uEQLQJ, vleTo8w) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const lACOOaJ = decodeURIComponent(Tj_8fpX["getCookieValue"](uEQLQJ, "pt_pin")),
    pkd8lt5 = `【账号${vleTo8w}】${Tj_8fpX["dataMasking"](lACOOaJ, {
      ["printWidth"]: 0x6
    })}：`,
    L9LXXF = YIWADfT["create"](vleTo8w, lACOOaJ);
  if (c7WqqR["length"] > 0 && (c7WqqR["includes"](lACOOaJ) || c7WqqR["includes"](encodeURIComponent(lACOOaJ)))) {
    return Ad4BiH(L9LXXF["fix"]("已设置跳过运行当前账号"), console["log"](L9LXXF["getInlineContent"]()), $["needRemoveCookieIndex"]["push"](vleTo8w), undefined);
  }
  const _z0ebZ = await Tj_8fpX["getLoginStatus"](uEQLQJ);
  if (fJnR39(_z0ebZ, b5jRlu(-0x1d)) && typeof _z0ebZ === "boolean") {
    return Ad4BiH(console["log"](`${pkd8lt5}账号无效`), L9LXXF["fix"]("账号无效"), $["needRemoveCookieIndex"]["push"](vleTo8w), undefined);
  }
  const wiPIXOt = Tj_8fpX["genUA"](lACOOaJ);
  let pX5VXi, mPcCKw;
  if (Ad4BiH(pX5VXi = '', await UWQ3_Ti("mlproprice_skuOnceApply_jsf"), pX5VXi)) {
    var QPMSglA = {
      fIZwRX: "confirmCouponInfos"
    };
    let {
      ["succNum"]: SzIp1H = 0,
      ["succAmount"]: GgKuqbV = 0
    } = pX5VXi;
    if (GgKuqbV > 0x0) {
      var F4_DIp = "log";
      console[F4_DIp](`${pkd8lt5}本次成功保价${SzIp1H}件, 共保价: ${GgKuqbV}元`)
      L9LXXF["insert"](`本次成功保价${SzIp1H}件, 共保价: ${GgKuqbV}元`)
    } else {
      console["log"](`${pkd8lt5}最近购买商品无差价，无需保价`);
    }
    if (pX5VXi[QPMSglA.fIZwRX] && pX5VXi["confirmCouponInfos"]["length"] > 0) {
      mPcCKw = pX5VXi["confirmCouponInfos"][0x0]
      await UWQ3_Ti("mlproprice_skuOnceApply_jsf_confirmCoupon")
      await $["wait"](parseInt(fJnR39($["waitTime"] * 0x1, 0x1f4, diT98Ll = 41), 0xa))
    }
  }
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  await $["wait"](parseInt(fJnR39($["waitTime"] * 0x1, 0x1f4, diT98Ll = 41), 0xa));
  async function N06wnO(uEQLQJ, vleTo8w) {
    try {
      switch (uEQLQJ) {
        case "mlproprice_skuOnceApply_jsf":
          if (vleTo8w["code"] === 0x0 && vleTo8w["data"]) {
            if (vleTo8w["data"]["flag"] === true && vleTo8w["data"]["responseCode"] === '\x30' && 1) {
              pX5VXi = vleTo8w["data"];
            } else {
              console["log"](`${pkd8lt5}保价申请失败: ${vleTo8w["data"]["onceApplyNoSuccessTips"] || vleTo8w["data"]["responseMessage"]}`);
            }
          } else {
            console["log"](`${pkd8lt5}${JSON["stringify"](vleTo8w)}`);
          }
          break;
        case "mlproprice_skuOnceApply_jsf_confirmCoupon":
          if (vleTo8w["code"] === 0 && vleTo8w["data"]) {
            if (vleTo8w["data"]["responseCode"] === '\x30') {
              let {
                ["succNum"]: xxvOoD = 0x0,
                ["succAmount"]: CfqymxH = 0
              } = vleTo8w["data"];
              if (CfqymxH > 0x0 && true) {
                console["log"](`${pkd8lt5}本次成功用优惠券保价${xxvOoD}件, 共保价: ${CfqymxH}元`)
                L9LXXF["insert"](`本次成功用优惠券保价${xxvOoD}件, 共保价: ${CfqymxH}元`)
              } else {
                console["log"](`${pkd8lt5}用优惠券保价申请失败: ${vleTo8w["data"]["onceApplyNoSuccessTips"] || vleTo8w["data"]["responseMessage"]}`);
              }
            } else {
              console["log"](`${pkd8lt5}用优惠券保价申请失败: ${vleTo8w["data"]["onceApplyNoSuccessTips"] || vleTo8w["data"]["responseMessage"]}`);
            }
          } else {
            console["log"](`${pkd8lt5}${JSON["stringify"](vleTo8w)}`);
          }
      }
    } catch (e) {
      console["log"](`❌ 未能正确处理 ${uEQLQJ} 请求响应 ${e["message"] || e}`);
    }
  }
  async function UWQ3_Ti(vleTo8w) {
    if ($["runEnd"] && 1) {
      return;
    }
    let z_yThI = '',
      xxvOoD = null,
      CfqymxH = null,
      NTTKU8 = "POST",
      _z0ebZ = {},
      qlTTd0 = {};
    switch (vleTo8w) {
      case "mlproprice_skuOnceApply_jsf":
        qlTTd0 = {
          ["appId"]: "6f46e",
          ["functionId"]: "mlproprice_skuOnceApply_jsf",
          ["appid"]: "price_protection",
          ["client"]: "apple",
          ["body"]: {
            ["onceBatchId"]: '',
            ["couponConfirmFlag"]: null,
            ["appId"]: "null",
            ["uniformBizInfo"]: {
              ["data"]: {
                ["language"]: "zh_CN",
                ["buId"]: 0x12d,
                ["tenantld"]: 0x400
              }
            },
            ["type"]: '25'
          },
          ua: wiPIXOt,
          t: true
        }
        _z0ebZ = await NSyUNE["getH5st"](qlTTd0)
        z_yThI = `https://api.m.jd.com/`
        xxvOoD = _z0ebZ["paramsData"]
        break;
      case "mlproprice_skuOnceApply_jsf_confirmCoupon":
        qlTTd0 = {
          ["appId"]: "6f46e",
          ["functionId"]: "mlproprice_skuOnceApply_jsf",
          ["appid"]: "price_protection",
          ["client"]: "apple",
          ["body"]: {
            ["onceBatchId"]: mPcCKw["couponId"] || '',
            ["couponConfirmFlag"]: 0x1,
            ["appId"]: "null",
            ["uniformBizInfo"]: {
              ["data"]: {
                ["language"]: "zh_CN",
                ["buId"]: 0x12d,
                ["tenantld"]: 0x400
              }
            },
            ["type"]: '\x32\x35'
          },
          ua: wiPIXOt,
          t: true
        }
        _z0ebZ = await NSyUNE["getH5st"](qlTTd0)
        z_yThI = `https://api.m.jd.com/`
        xxvOoD = _z0ebZ["paramsData"]
        break;
      default:
        console["log"](`❌ 未知请求 ${vleTo8w}`);
        return;
    }
    const ILxCDeo = {};
    if (xxvOoD) {
      Object["assign"](xxvOoD, ILxCDeo);
    }
    if (CfqymxH) {
      Object["assign"](CfqymxH, ILxCDeo);
    }
    const pX5VXi = {
      ["url"]: z_yThI,
      ["method"]: NTTKU8,
      ["headers"]: {
        ["origin"]: "https://msitepp-fm.jd.com",
        ["Referer"]: "https://msitepp-fm.jd.com/",
        ["User-Agent"]: wiPIXOt,
        ["Cookie"]: uEQLQJ,
        ["x-rp-client"]: "h5_1.0.0",
        ["accept"]: "application/json, text/plain, */*"
      },
      ["params"]: CfqymxH,
      ["data"]: xxvOoD,
      ["timeout"]: 0x4e20
    };
    if (NTTKU8 === "GET") {
      delete (delete pX5VXi["data"], pX5VXi["headers"]["Content-Type"]);
    }
    const QPMSglA = 1;
    let SzIp1H = 0x0,
      GgKuqbV = null,
      F4_DIp = false;
    while (SzIp1H < QPMSglA) {
      const ik9Znp4 = await Tj_8fpX["request"](pX5VXi);
      if (fJnR39(ik9Znp4["success"], diT98Ll = -29)) {
        GgKuqbV = `🚫 ${vleTo8w} 请求失败 ➜ ${ik9Znp4["error"]}`
        SzIp1H++
        continue;
      }
      if (fJnR39(ik9Znp4["data"], diT98Ll = -0x1d) && true) {
        GgKuqbV = `🚫 ${vleTo8w} 请求失败 ➜ 无响应数据`
        SzIp1H++
        continue;
      }
      N06wnO(vleTo8w, ik9Znp4["data"])
      F4_DIp = false
      break;
    }
    if (SzIp1H >= QPMSglA) {
      if (Ad4BiH(console["log"](GgKuqbV), F4_DIp)) {
        $["outFlag"] = true;
      }
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}
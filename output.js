//Wed Apr 22 2026 16:47:15 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

(function () {
  var _0x22b854 = acquireVsCodeApi();
  var _0x491cd2 = false;
  var _0x592853 = null;
  var _0xd09afd = null;
  function _0x5899f2() {
    _0x592853 = document.getElementById("activationView");
    _0xd09afd = document.getElementById("chatView");
    var _0x3a32b2 = document.getElementById("licenseKeyInput");
    var _0x373215 = document.getElementById("activateBtn");
    var _0x42d4e4 = document.getElementById("activationError");
    _0x3a32b2.addEventListener("input", function () {
      {
        var _0x5d19dd = _0x3a32b2.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
        _0x5d19dd.startsWith("PCHAT") && (_0x5d19dd = _0x5d19dd.slice(5));
        for (var _0x5ce7aa = [], _0x3011e7 = 0; _0x3011e7 < _0x5d19dd.length && _0x3011e7 < 16; _0x3011e7 += 4) {
          _0x5ce7aa.push(_0x5d19dd.slice(_0x3011e7, _0x3011e7 + 4));
        }
        var _0x107e09 = _0x5ce7aa.length > 0 ? "PCHAT-" + _0x5ce7aa.join("-") : "";
        _0x3a32b2.value !== _0x107e09 && (_0x3a32b2.value = _0x107e09);
        _0x373215.disabled = !/^PCHAT-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/.test(_0x107e09);
        _0x42d4e4.style.display = "none";
      }
    });
    _0x3a32b2.addEventListener("paste", function (_0x42601d) {
      var _0x417e1d = (_0x42601d.clipboardData || window.clipboardData).getData("text");
      _0x417e1d && /^PCHAT-/.test(_0x417e1d.trim().toUpperCase()) && (_0x42601d.preventDefault(), _0x3a32b2.value = _0x417e1d.trim().toUpperCase(), _0x3a32b2.dispatchEvent(new Event("input")));
    });
    _0x3a32b2.addEventListener("keydown", function (_0x37e90b) {
      {
        _0x37e90b.key === "Enter" && !_0x373215.disabled && _0xedf15c();
      }
    });
    _0x373215.addEventListener("click", _0xedf15c);
    function _0xedf15c() {
      {
        var _0x270010 = _0x3a32b2.value.trim();
        _0x270010 && (_0x373215.disabled = true, _0x373215.textContent = "激活中...", _0x42d4e4.style.display = "none", _0x22b854.postMessage({
          type: "activate",
          key: _0x270010
        }));
      }
    }
  }
  var _0x2de269 = document.getElementById("deactivateBtn");
  _0x2de269 && _0x2de269.addEventListener("click", function () {
    _0xe5b56d("确定要解绑当前卡密吗？解绑后需要重新输入卡密激活。").then(function (_0x1a675f) {
      {
        var _0x6d6660 = {
          type: "deactivate"
        };
        _0x1a675f && (_0x2de269.disabled = true, _0x2de269.textContent = "解绑中...", _0x22b854.postMessage(_0x6d6660));
      }
    });
  });
  (function () {
    var _0x104b91 = document.getElementById("renewBtn");
    var _0x33384f = document.getElementById("renewForm");
    var _0x4e0e7d = document.getElementById("renewalKeyInput");
    var _0x1b56c4 = document.getElementById("renewalMsg");
    var _0xa8f46b = document.getElementById("renewSubmitBtn");
    if (!_0x104b91 || !_0x33384f || !_0x4e0e7d || !_0x1b56c4 || !_0xa8f46b) {
      return;
    }
    function _0x5a671a(_0x3d48f5, _0x18aa2a) {
      if (!_0x3d48f5) {
        _0x1b56c4.style.display = "none";
        return;
      }
      _0x1b56c4.textContent = _0x3d48f5;
      _0x1b56c4.style.display = "";
      _0x1b56c4.style.background = _0x18aa2a ? "color-mix(in srgb, var(--danger,#e53e3e) 15%, transparent)" : "color-mix(in srgb, var(--accent) 15%, transparent)";
      _0x1b56c4.style.color = _0x18aa2a ? "var(--danger,#e53e3e)" : "var(--accent)";
      _0x1b56c4.style.border = "1px solid " + (_0x18aa2a ? "color-mix(in srgb, var(--danger,#e53e3e) 40%, transparent)" : "color-mix(in srgb, var(--accent) 40%, transparent)");
    }
    _0x104b91.addEventListener("click", function () {
      {
        var _0x1f4903 = _0x33384f.style.display !== "none";
        _0x33384f.style.display = _0x1f4903 ? "none" : "";
        _0x104b91.classList.toggle("active", !_0x1f4903);
        _0x1f4903 || (_0x4e0e7d.value = "", _0xa8f46b.disabled = true, _0x5a671a("", false), setTimeout(function () {
          _0x4e0e7d.focus();
        }, 50));
      }
    });
    _0x4e0e7d.addEventListener("input", function () {
      var _0x1d3944 = _0x4e0e7d.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
      _0x1d3944.startsWith("PCHAT") && (_0x1d3944 = _0x1d3944.slice(5));
      for (var _0x56408d = [], _0x31d2fc = 0; _0x31d2fc < _0x1d3944.length && _0x31d2fc < 16; _0x31d2fc += 4) {
        _0x56408d.push(_0x1d3944.slice(_0x31d2fc, _0x31d2fc + 4));
      }
      var _0x4b6785 = _0x56408d.length > 0 ? "PCHAT-" + _0x56408d.join("-") : "";
      _0x4e0e7d.value !== _0x4b6785 && (_0x4e0e7d.value = _0x4b6785);
      _0xa8f46b.disabled = !/^PCHAT-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/.test(_0x4b6785);
      _0x5a671a("", false);
    });
    _0x4e0e7d.addEventListener("paste", function (_0x1a2a4a) {
      {
        var _0x2499ba = (_0x1a2a4a.clipboardData || window.clipboardData).getData("text");
        _0x2499ba && /^PCHAT-/i.test(_0x2499ba.trim()) && (_0x1a2a4a.preventDefault(), _0x4e0e7d.value = _0x2499ba.trim().toUpperCase(), _0x4e0e7d.dispatchEvent(new Event("input")));
      }
    });
    _0x4e0e7d.addEventListener("keydown", function (_0x5472f7) {
      {
        _0x5472f7.key === "Enter" && !_0xa8f46b.disabled && _0x201604();
      }
    });
    _0xa8f46b.addEventListener("click", _0x201604);
    function _0x201604() {
      {
        var _0x1706b3 = _0x4e0e7d.value.trim();
        _0x1706b3 && (_0xa8f46b.disabled = true, _0xa8f46b.textContent = "续费中...", _0x5a671a("", false), _0x22b854.postMessage({
          type: "applyRenewal",
          renewalKey: _0x1706b3
        }));
      }
    }
    window._handleRenewalResult = function (_0x152814) {
      {
        if (_0xa8f46b.disabled = false, _0xa8f46b.textContent = "确认续费", _0x152814.success) {
          var _0x2722ad = _0x152814.extended === "upgrade" ? "升级成功" : "续费成功";
          _0x5a671a(_0x2722ad + "！已生效，无需重启扩展。", false);
          _0x4e0e7d.value = "";
          _0xa8f46b.disabled = true;
          setTimeout(function () {
            _0x33384f.style.display = "none";
            _0x104b91.classList.remove("active");
            _0x5a671a("", false);
          }, 5000);
        } else {
          _0x5a671a(_0x152814.error || "续费失败，请重试", true);
          _0xa8f46b.disabled = false;
        }
      }
    };
  })();
  function _0x477d3b(_0x5639c3) {
    !_0x592853 || !_0xd09afd || (_0x592853.style.display = _0x5639c3 ? "" : "none", _0xd09afd.style.display = _0x5639c3 ? "none" : "", _0x5639c3 && _0xe9d0fa(false));
  }
  var _0x372938 = "";
  var _0x4678da = false;
  function _0x58fa6c(_0x256ba4) {
    {
      var _0x41a588 = document.getElementById("licenseGroup");
      var _0x4e0d22 = document.getElementById("licDiv");
      var _0x40e82a = document.getElementById("sbLic");
      var _0xdf00b0 = document.getElementById("sbPlan");
      var _0x125358 = document.getElementById("sbTime");
      if (!_0x256ba4 || !_0x256ba4.activated) {
        _0x41a588 && (_0x41a588.style.display = "none");
        _0x4e0d22 && (_0x4e0d22.style.display = "none");
        _0x40e82a && (_0x40e82a.style.display = "none");
        return;
      }
      _0x41a588 && (_0x41a588.style.display = "");
      _0x4e0d22 && (_0x4e0d22.style.display = "");
      var _0x207e97 = document.getElementById("licPlan");
      var _0x32bc1e = document.getElementById("licRemain");
      var _0x465227 = document.getElementById("licKey");
      _0x207e97 && (_0x207e97.textContent = _0x256ba4.planLabel || _0x256ba4.plan || "-");
      _0x32bc1e && (_0x32bc1e.textContent = _0x256ba4.remaining || "-");
      _0x372938 = _0x256ba4.fullKey || "";
      var _0x24f770 = _0x256ba4.key || "-";
      if (_0x465227 && (_0x465227.textContent = _0x4678da && _0x372938 ? _0x372938 : _0x24f770), _0x40e82a) {
        _0x40e82a.style.display = "";
        var _0x4af3d1 = _0x256ba4.planLabel || _0x256ba4.plan || "";
        var _0x856f60 = _0x4af3d1.toLowerCase();
        var _0x576a8a = "pro";
        _0x856f60.includes("年") || _0x856f60.includes("终身") || _0x856f60.includes("enterprise") ? _0x576a8a = "enterprise" : (_0x856f60.includes("体验") || _0x856f60.includes("试用") || _0x856f60.includes("基础") || _0x856f60.includes("premium")) && (_0x576a8a = "premium");
        var _0x1fddc1 = "lic-" + _0x576a8a;
        _0x40e82a.className = "th-lic " + _0x1fddc1;
      }
      if (_0xdf00b0 && (_0xdf00b0.textContent = _0x256ba4.planLabel || _0x256ba4.plan || ""), _0x125358) {
        var _0x1e7e46 = _0x256ba4.remaining || "";
        _0x125358.textContent = _0x1e7e46;
        var _0x47ea7a = "time-normal";
        if (/expired|已过期/i.test(_0x1e7e46)) {
          _0x47ea7a = "time-expired";
        } else {
          if (/day|天/i.test(_0x1e7e46)) {
            {
              var _0x97ec29 = parseInt(_0x1e7e46, 10);
              _0x97ec29 <= 3 ? _0x47ea7a = "time-danger" : _0x97ec29 <= 7 && (_0x47ea7a = "time-warning");
            }
          } else {
            /hour|minute|小时|分钟/i.test(_0x1e7e46) && (_0x47ea7a = "time-danger");
          }
        }
        _0x125358.className = "th-lic-time " + _0x47ea7a;
      }
    }
  }
  document.addEventListener("click", function (_0x486d33) {
    if (_0x486d33.target && _0x486d33.target.id === "licKey") {
      if (!_0x372938) {
        return;
      }
      _0x4678da = !_0x4678da;
      var _0x23937d = document.getElementById("licKey");
      _0x23937d && (_0x4678da ? (_0x23937d.textContent = _0x372938, navigator.clipboard.writeText(_0x372938).then(function () {
        {
          var _0x11ad58 = _0x23937d.textContent;
          _0x23937d.textContent = "✅ 已复制";
          setTimeout(function () {
            {
              _0x23937d.textContent = _0x11ad58;
            }
          }, 1200);
        }
      })) : _0x23937d.textContent = _0x372938.slice(0, 10) + "****");
    }
  });
  function _0x1b3535() {
    for (var _0x2a2c4f = document.getElementsByName("layoutMode"), _0x19cc36 = "sidebar", _0x246e40 = 0; _0x246e40 < _0x2a2c4f.length; _0x246e40++) {
      _0x2a2c4f[_0x246e40].checked && (_0x19cc36 = _0x2a2c4f[_0x246e40].value);
    }
    for (var _0x323260 = document.getElementsByName("replyTransport"), _0x435434 = "file", _0x246e40 = 0; _0x246e40 < _0x323260.length; _0x246e40++) {
      _0x323260[_0x246e40].checked && (_0x435434 = _0x323260[_0x246e40].value);
    }
    var _0x3ee995 = Number(document.getElementById("backendTo").value);
    _0x22b854.postMessage({
      type: "saveSettings",
      settings: {
        autoRenew: document.getElementById("autoChk").checked,
        cloudTo: document.getElementById("cloudTo").value,
        beforeMin: document.getElementById("beforeMin").value,
        testChk: document.getElementById("testChk").checked,
        initMin: document.getElementById("initMin").value,
        stepMin: document.getElementById("stepMin").value,
        backendTo: document.getElementById("backendTo").value,
        layoutMode: _0x19cc36,
        replyTransport: _0x435434
      }
    });
    _0x3ee995 > 0 && _0x22b854.postMessage({
      type: "updateBackendTimeout",
      minutes: _0x3ee995
    });
    document.body.classList.toggle("layout-tab", _0x19cc36 === "tab");
    _0x1048d6();
  }
  var _0x5174b1 = [];
  function _0x368a79(_0x2e7e24) {
    return new Promise(function (_0x5c1133) {
      var _0x11fc45 = new FileReader();
      _0x11fc45.onload = function (_0x18857b) {
        _0x5c1133(_0x18857b.target.result.split(",")[1]);
      };
      _0x11fc45.readAsDataURL(_0x2e7e24);
    });
  }
  async function _0x3aa89e(_0x310db6) {
    {
      var _0x2dbc0b = _0x310db6.type.startsWith("image/");
      var _0x3aeb49 = await _0x368a79(_0x310db6);
      var _0x264289 = {
        type: _0x2dbc0b ? "image" : "file",
        data: _0x3aeb49,
        mediaType: _0x310db6.type || "application/octet-stream",
        name: _0x310db6.name
      };
      _0x5174b1.push(_0x264289);
      _0x494830();
      _0x2a2b34();
      _0x59d484();
    }
  }
  function _0x404b8f(_0x384d9f) {
    {
      var _0x23de27 = document.createElement("div");
      _0x23de27.className = "img-overlay";
      var _0x163051 = document.createElement("img");
      _0x163051.src = _0x384d9f;
      _0x23de27.appendChild(_0x163051);
      _0x23de27.addEventListener("click", function () {
        document.body.removeChild(_0x23de27);
      });
      document.body.appendChild(_0x23de27);
    }
  }
  function _0x494830() {
    {
      var _0x2e9ef0 = document.getElementById("attachArea");
      _0x2e9ef0.innerHTML = "";
      var _0x2f6d1e = _0x5174b1.filter(function (_0x1508d7) {
        return _0x1508d7.type === "image";
      }).length;
      var _0x328b9b = 0;
      _0x5174b1.forEach(function (_0xfb800d, _0x1ba7ae) {
        {
          var _0x312a61 = document.createElement("div");
          _0x312a61.className = "attach-item";
          var _0x43cd94 = _0xfb800d.name.split(".");
          var _0x2b1751 = _0x43cd94.length > 1 ? _0x43cd94.pop() : "";
          var _0x3d4f91 = _0x43cd94.join(".");
          var _0x36c008 = "";
          if (_0xfb800d.type === "image") {
            _0x328b9b++;
            var _0xc0bc3 = "data:" + _0xfb800d.mediaType + ";base64," + _0xfb800d.data;
            _0x36c008 += "<img src=\"" + _0xc0bc3 + "\" data-src=\"" + _0xc0bc3 + "\">";
            _0x2f6d1e > 1 && (_0x36c008 += "<span class=\"anum\">" + _0x328b9b + "</span>");
          } else {
            {
              var _0x2fccf2 = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 15 15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 1h5l3 3v10H4V1z\"/><path d=\"M9 1v3h3\"/><line x1=\"5.5\" y1=\"7\" x2=\"9.5\" y2=\"7\"/><line x1=\"5.5\" y1=\"9.5\" x2=\"9.5\" y2=\"9.5\"/></svg>";
              var _0x28840c = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 15 15\" fill=\"none\" stroke=\"#f05050\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 1h5l3 3v10H4V1z\"/><path d=\"M9 1v3h3\"/><text x=\"5.5\" y=\"11\" font-size=\"4\" fill=\"#f05050\" stroke=\"none\" font-weight=\"700\">PDF</text></svg>";
              var _0x414ab8 = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 15 15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"1\" width=\"5\" height=\"13\" rx=\"0.5\"/><line x1=\"7.5\" y1=\"3\" x2=\"7.5\" y2=\"3\"/><line x1=\"7.5\" y1=\"5\" x2=\"7.5\" y2=\"5\"/><line x1=\"7.5\" y1=\"7\" x2=\"7.5\" y2=\"7\"/><line x1=\"7.5\" y1=\"9\" x2=\"7.5\" y2=\"9\"/></svg>";
              var _0x2c6882 = {
                pdf: _0x28840c,
                zip: _0x414ab8,
                tar: _0x414ab8,
                gz: _0x414ab8
              };
              var _0x3ca8f6 = _0x2c6882[_0x2b1751.toLowerCase()] || _0x2fccf2;
              _0x36c008 += "<span class=\"aicon\">" + _0x3ca8f6 + "</span>";
            }
          }
          if (_0x36c008 += "<div class=\"ainfo\"><span class=\"aname\">" + _0xcb8b3f(_0x3d4f91) + "</span>", _0x2b1751 && (_0x36c008 += "<span class=\"aext\">" + _0xcb8b3f(_0x2b1751) + "</span>"), _0x36c008 += "</div>", _0x36c008 += "<span class=\"adel\" data-i=\"" + _0x1ba7ae + "\">&#x2715;</span>", _0x312a61.innerHTML = _0x36c008, _0x312a61.querySelector(".adel").addEventListener("click", function (_0x21a376) {
            _0x5174b1.splice(Number(_0x21a376.target.getAttribute("data-i")), 1);
            _0x494830();
            _0x2a2b34();
            _0x59d484();
          }), _0xfb800d.type === "image") {
            {
              var _0x4cf112 = _0x312a61.querySelector("img");
              _0x4cf112.addEventListener("click", function () {
                _0x404b8f(_0x4cf112.getAttribute("data-src"));
              });
            }
          }
          _0x2e9ef0.appendChild(_0x312a61);
        }
      });
    }
  }
  function _0x4aee4e(_0x2e5d17) {
    {
      if (_0x2e5d17.autoRenew !== undefined && (document.getElementById("autoChk").checked = _0x2e5d17.autoRenew), _0x2e5d17.cloudTo && (document.getElementById("cloudTo").value = _0x2e5d17.cloudTo), _0x2e5d17.beforeMin && (document.getElementById("beforeMin").value = _0x2e5d17.beforeMin), _0x2e5d17.testChk !== undefined && (document.getElementById("testChk").checked = _0x2e5d17.testChk, document.getElementById("testOpts").style.display = _0x2e5d17.testChk ? "block" : "none"), _0x2e5d17.initMin && (document.getElementById("initMin").value = _0x2e5d17.initMin), _0x2e5d17.stepMin && (document.getElementById("stepMin").value = _0x2e5d17.stepMin), _0x2e5d17.backendTo && (document.getElementById("backendTo").value = _0x2e5d17.backendTo), _0x2e5d17.layoutMode) {
        {
          for (var _0xa38c5e = document.getElementsByName("layoutMode"), _0x22b7e4 = 0; _0x22b7e4 < _0xa38c5e.length; _0x22b7e4++) {
            _0xa38c5e[_0x22b7e4].checked = _0xa38c5e[_0x22b7e4].value === _0x2e5d17.layoutMode;
          }
          document.body.classList.toggle("layout-tab", _0x2e5d17.layoutMode === "tab");
        }
      }
      if (_0x2e5d17.replyTransport) {
        for (var _0x5527ed = document.getElementsByName("replyTransport"), _0x22b7e4 = 0; _0x22b7e4 < _0x5527ed.length; _0x22b7e4++) {
          _0x5527ed[_0x22b7e4].checked = _0x5527ed[_0x22b7e4].value === _0x2e5d17.replyTransport;
        }
      }
      if (_0x2e5d17.sidebarCollapsed !== undefined) {
        _0x2ddc71 = _0x2e5d17.sidebarCollapsed;
        var _0x1044d8 = document.getElementById("sessionSidebar");
        _0x1044d8 && _0x1044d8.classList.toggle("collapsed", _0x2ddc71);
        _0x2ddc71 && typeof _0x4f757e == "function" && _0x4f757e();
      }
      _0x521186();
    }
  }
  var _0x171601 = document.getElementById("msgs");
  var _0x23e187 = document.getElementById("empty");
  var _0xd6a522 = document.getElementById("inp");
  var _0x3203a0 = [];
  var _0x592bbc = document.getElementById("sendBtn");
  var _0x3a921f = document.getElementById("stopBtn");
  var _0x541ce1 = document.getElementById("dot");
  var _0x6c571a = document.getElementById("stxt");
  var _0x4d2f69 = document.getElementById("pbar");
  var _0x217c23 = document.getElementById("ptxt");
  var _0x268229 = document.getElementById("timer");
  var _0x501d85 = document.getElementById("bfill");
  var _0x5dbdc9 = document.getElementById("tlabel");
  var _0xef197e = document.getElementById("hint2");
  var _0x26a6aa = document.getElementById("chipTime");
  var _0x1876c4 = document.getElementById("pbarChip");
  var _0x8fd6ba = document.getElementById("pbarBody");
  var _0x22530b = document.getElementById("pbarClose");
  var _0x365764 = false;
  var _0x204b99 = null;
  var _0x1b51f2 = null;
  var _0x4601f5 = null;
  var _0x54bd01 = 0;
  var _0x3124c2 = 0;
  var _0x3be2ab = false;
  var _0x2329ce = -1;
  function _0x521186() {
    var _0x2bc10c = document.getElementById("autoChk").checked;
    var _0x57af09 = document.getElementById("renewFields");
    _0x57af09 && (_0x57af09.style.opacity = _0x2bc10c ? "1" : "0.4", _0x57af09.style.pointerEvents = _0x2bc10c ? "" : "none");
  }
  _0x521186();
  ["autoChk", "cloudTo", "beforeMin", "testChk", "initMin", "stepMin", "backendTo"].forEach(function (_0xa9b097) {
    var _0x41aca6 = document.getElementById(_0xa9b097);
    _0x41aca6 && _0x41aca6.addEventListener("change", function () {
      _0x1b3535();
      _0xa9b097 === "autoChk" && _0x521186();
    });
  });
  for (var _0x5086a7 = document.getElementsByName("layoutMode"), _0x10e95d = 0; _0x10e95d < _0x5086a7.length; _0x10e95d++) {
    _0x5086a7[_0x10e95d].addEventListener("change", _0x1b3535);
  }
  for (var _0x4a7ee9 = document.getElementsByName("replyTransport"), _0x10e95d = 0; _0x10e95d < _0x4a7ee9.length; _0x10e95d++) {
    _0x4a7ee9[_0x10e95d].addEventListener("change", function () {
      for (var _0x30ac64 = "file", _0x59f2e3 = document.getElementsByName("replyTransport"), _0x2d94cc = 0; _0x2d94cc < _0x59f2e3.length; _0x2d94cc++) {
        if (_0x59f2e3[_0x2d94cc].checked) {
          _0x30ac64 = _0x59f2e3[_0x2d94cc].value;
          break;
        }
      }
      var _0x1ede07 = {
        type: "setReplyTransport",
        transport: _0x30ac64
      };
      _0x22b854.postMessage(_0x1ede07);
      _0x1b3535();
    });
  }
  function _0xe9d0fa(_0x1a794c) {
    var _0x4651ab = document.getElementById("settingsDrop");
    _0x1a794c === undefined && (_0x1a794c = !_0x4651ab.classList.contains("open"));
    _0x4651ab.classList.toggle("open", _0x1a794c);
  }
  document.getElementById("shdr").addEventListener("click", function () {
    {
      _0xe9d0fa();
      var _0x2e2519 = document.getElementById("settingsDot");
      _0x2e2519 && (_0x2e2519.style.display = "none");
    }
  });
  var _0x5704d5 = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"></rect><path d=\"M8 20h8\"></path></svg>";
  var _0x55b51a = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line></svg>";
  var _0x51e906 = {
    location: "sidebar",
    hasPanel: false,
    primaryLocation: "sidebar"
  };
  function _0x3e274f() {
    {
      var _0x75e974 = document.getElementById("windowToggleBtn");
      if (_0x75e974) {
        var _0x3e2f6b = _0x51e906.location === "panel";
        if (_0x3e2f6b) {
          {
            _0x75e974.innerHTML = _0x55b51a;
            _0x75e974.title = "切回侧栏";
            _0x75e974.setAttribute("aria-label", "切回侧栏");
            return;
          }
        }
        _0x75e974.innerHTML = _0x5704d5;
        _0x75e974.title = "在新窗口打开";
        _0x75e974.setAttribute("aria-label", "在新窗口打开");
      }
    }
  }
  function _0x5e9639(_0x5aaf33) {
    {
      var _0x2edf1f = {
        location: _0x5aaf33 && _0x5aaf33.location ? _0x5aaf33.location : "sidebar",
        hasPanel: !!(_0x5aaf33 && _0x5aaf33.hasPanel),
        primaryLocation: _0x5aaf33 && _0x5aaf33.primaryLocation ? _0x5aaf33.primaryLocation : "sidebar"
      };
      _0x51e906 = _0x2edf1f;
      _0x3e274f();
    }
  }
  var _0x3a11b5 = "请使用 wait_for_user_input 工具与我进行持久对话。每当你完成一个任务或需要我的反馈时，调用此工具等待我的回复，不要结束对话。";
  document.getElementById("copyPromptBtn").addEventListener("click", function () {
    var _0x3a6e34 = document.getElementById("copyPromptBtn");
    navigator.clipboard.writeText(_0x3a11b5).then(function () {
      _0x3a6e34.classList.add("copy-success");
      _0x3a6e34.title = "已复制！";
      setTimeout(function () {
        _0x3a6e34.classList.remove("copy-success");
        _0x3a6e34.title = "复制提示词";
      }, 1500);
    }).catch(function () {
      var _0x467748 = {
        type: "copyText",
        text: _0x3a11b5
      };
      _0x22b854.postMessage(_0x467748);
      _0x3a6e34.classList.add("copy-success");
      _0x3a6e34.title = "已复制！";
      setTimeout(function () {
        _0x3a6e34.classList.remove("copy-success");
        _0x3a6e34.title = "复制提示词";
      }, 1500);
    });
  });
  document.getElementById("windowToggleBtn").addEventListener("click", function () {
    if (_0x51e906.location === "panel") {
      {
        var _0x140a1e = {
          type: "openInSidebar"
        };
        _0x22b854.postMessage(_0x140a1e);
        return;
      }
    }
    var _0x5bedbb = {
      type: "openInWindow"
    };
    _0x22b854.postMessage(_0x5bedbb);
  });
  var _0x872b8c = null;
  function _0x846ddb() {
    return _0x872b8c || (_0x872b8c = document.createElement("div"), _0x872b8c.className = "tab-context-menu", document.body.appendChild(_0x872b8c), _0x872b8c);
  }
  function _0x16f4d6() {
    {
      _0x872b8c && (_0x872b8c.style.display = "none");
    }
  }
  function _0x2d5784(_0x539e63) {
    navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(_0x539e63).catch(function () {
      var _0x2d1ee4 = {
        type: "copyText",
        text: _0x539e63
      };
      _0x22b854.postMessage(_0x2d1ee4);
    }) : _0x22b854.postMessage({
      type: "copyText",
      text: _0x539e63
    });
  }
  function _0xd97306(_0xdb60d3, _0x3e6fca, _0x2eea4f, _0x13017a) {
    var _0x10297c = _0x846ddb();
    _0x10297c.innerHTML = "";
    var _0x4714e1 = {
      sep: true
    };
    var _0x3c7bbf = [{
      label: "复制 token",
      action: function () {
        _0x2d5784(_0x2eea4f);
      }
    }, {
      label: "复制提示词",
      action: function () {
        _0x2d5784(_0x3a11b5 + "\n\npchat-token: " + _0x2eea4f);
      }
    }, _0x4714e1, {
      label: "重命名",
      action: function () {
        _0x40716c(_0x2eea4f, _0x13017a);
      }
    }, {
      label: "关闭",
      danger: true,
      action: function () {
        _0x111940(_0x2eea4f, _0x13017a);
      }
    }];
    _0x3c7bbf.forEach(function (_0xb72fc2) {
      {
        if (_0xb72fc2.sep) {
          {
            var _0x2cb941 = document.createElement("div");
            _0x2cb941.className = "tab-menu-sep";
            _0x10297c.appendChild(_0x2cb941);
            return;
          }
        }
        var _0x10f240 = document.createElement("div");
        _0x10f240.className = "tab-menu-item" + (_0xb72fc2.danger ? " danger" : "");
        _0x10f240.textContent = _0xb72fc2.label;
        _0x10f240.addEventListener("click", function () {
          _0x16f4d6();
          _0xb72fc2.action();
        });
        _0x10297c.appendChild(_0x10f240);
      }
    });
    _0x10297c.style.display = "block";
    _0x10297c.style.left = "0px";
    _0x10297c.style.top = "0px";
    var _0x5d5e0c = _0x10297c.offsetWidth;
    var _0xe665d0 = _0x10297c.offsetHeight;
    var _0x5a8362 = window.innerWidth;
    var _0xae631d = window.innerHeight;
    var _0x283e58 = _0xdb60d3 + _0x5d5e0c > _0x5a8362 ? Math.max(0, _0x5a8362 - _0x5d5e0c - 4) : _0xdb60d3;
    var _0x20826d = _0x3e6fca + _0xe665d0 > _0xae631d ? Math.max(0, _0xae631d - _0xe665d0 - 4) : _0x3e6fca;
    _0x10297c.style.left = _0x283e58 + "px";
    _0x10297c.style.top = _0x20826d + "px";
  }
  function _0x40716c(_0x5021f1, _0x1f041d) {
    {
      var _0x411c78 = document.querySelector(".top-tab-item[data-sid=\"" + _0x5021f1 + "\"]");
      var _0x402ea7 = _0x411c78 ? _0x411c78.querySelector(".top-tab-label") : null;
      if (_0x402ea7) {
        {
          let _0xac469f = function () {
            if (!_0x480e3a) {
              _0x480e3a = true;
              var _0x560fe1 = _0x5c83c3.value.trim() || _0x1f041d;
              _0x560fe1 !== _0x1f041d && _0x22b854.postMessage({
                type: "renameSession",
                sessionId: _0x5021f1,
                title: _0x560fe1
              });
              typeof _0x1048d6 == "function" && _0x1048d6();
            }
          };
          var _0x5ea441 = _0xac469f;
          var _0x5c83c3 = document.createElement("input");
          _0x5c83c3.type = "text";
          _0x5c83c3.value = _0x1f041d;
          _0x5c83c3.style.cssText = "width:auto;min-width:60px;max-width:160px;box-sizing:border-box;font:inherit;font-size:11px;background:var(--ibg,rgba(255,255,255,0.1));border:1px solid var(--accent);border-radius:3px;padding:1px 4px;color:inherit;outline:none;";
          _0x402ea7.replaceWith(_0x5c83c3);
          _0x5c83c3.focus();
          _0x5c83c3.select();
          var _0x480e3a = false;
          _0x5c83c3.addEventListener("keydown", function (_0x3b9383) {
            _0x3b9383.key === "Enter" ? (_0x3b9383.preventDefault(), _0xac469f()) : _0x3b9383.key === "Escape" && (_0x3b9383.preventDefault(), _0x480e3a = true, typeof _0x1048d6 == "function" && _0x1048d6());
            _0x3b9383.stopPropagation();
          });
          _0x5c83c3.addEventListener("blur", _0xac469f);
          _0x5c83c3.addEventListener("click", function (_0x487e0d) {
            _0x487e0d.stopPropagation();
          });
        }
      } else {
        var _0xb0baaf = window.prompt("重命名对话", _0x1f041d);
        _0xb0baaf && _0xb0baaf.trim() && _0xb0baaf.trim() !== _0x1f041d && _0x22b854.postMessage({
          type: "renameSession",
          sessionId: _0x5021f1,
          title: _0xb0baaf.trim()
        });
      }
    }
  }
  function _0x111940(_0x19ab74, _0x3f5185) {
    if (typeof _0xe5b56d != "function") {
      {
        var _0x279a66 = {
          type: "closeSession",
          sessionId: _0x19ab74
        };
        _0x22b854.postMessage(_0x279a66);
        return;
      }
    }
    _0xe5b56d("关闭「" + _0x3f5185 + "」？\n该对话的所有记录将被清空，操作不可撤销。").then(function (_0x3fe25f) {
      {
        var _0x40bd00 = {
          type: "closeSession",
          sessionId: _0x19ab74
        };
        _0x3fe25f && _0x22b854.postMessage(_0x40bd00);
      }
    });
  }
  document.addEventListener("mousedown", function (_0x5aa732) {
    _0x872b8c && _0x872b8c.style.display !== "none" && !_0x872b8c.contains(_0x5aa732.target) && _0x16f4d6();
  });
  document.addEventListener("keydown", function (_0x34bce6) {
    _0x34bce6.key === "Escape" && _0x872b8c && _0x872b8c.style.display !== "none" && _0x16f4d6();
  }, true);
  window.addEventListener("blur", _0x16f4d6);
  window.addEventListener("resize", _0x16f4d6);
  document.getElementById("settingsClose").addEventListener("click", function () {
    _0xe9d0fa(false);
  });
  document.getElementById("settingsDrop").addEventListener("click", function (_0x4fdc91) {
    {
      _0x4fdc91.target === document.getElementById("settingsDrop") && _0xe9d0fa(false);
    }
  });
  var _0x199cf3 = 0;
  document.getElementById("licRefreshBtn").addEventListener("click", function () {
    var _0x220bef = {
      type: "checkActivation"
    };
    document.getElementById("licRefreshBtn").classList.add("spinning");
    document.getElementById("settingsLicRefresh").classList.add("spinning");
    _0x199cf3 = Date.now() + 1200;
    _0x22b854.postMessage(_0x220bef);
  });
  document.getElementById("settingsLicRefresh").addEventListener("click", function () {
    var _0x3d4702 = {
      type: "checkActivation"
    };
    document.getElementById("licRefreshBtn").classList.add("spinning");
    document.getElementById("settingsLicRefresh").classList.add("spinning");
    _0x199cf3 = Date.now() + 1200;
    _0x22b854.postMessage(_0x3d4702);
  });
  var _0x15cbf1 = 0;
  document.getElementById("refreshUsageBtn").addEventListener("click", function () {
    var _0xa60b55 = document.getElementById("refreshUsageBtn");
    var _0x4ac823 = {
      type: "refreshUserInfo"
    };
    _0xa60b55.classList.add("spinning");
    _0x15cbf1 = Date.now() + 1200;
    _0x22b854.postMessage(_0x4ac823);
  });
  var _0x909a4a = 1;
  var _0x3fbcf4 = 10;
  var _0x4afe4d = null;
  var _0x268582 = null;
  document.getElementById("tokenUsageBtn").addEventListener("click", function () {
    {
      _0x909a4a = 1;
      _0x3fbcf4 = 10;
      _0x4afe4d = null;
      _0x268582 = null;
      document.getElementById("tokenUsageBtn").classList.add("spinning");
      _0x28c8da();
      _0x22b854.postMessage({
        type: "fetchTokenUsage",
        page: 1,
        pageSize: 100
      });
    }
  });
  document.getElementById("tuClose").addEventListener("click", function () {
    document.getElementById("tuOverlay").style.display = "none";
  });
  document.getElementById("tuOverlay").addEventListener("click", function (_0x41cfd0) {
    {
      _0x41cfd0.target === document.getElementById("tuOverlay") && (document.getElementById("tuOverlay").style.display = "none");
    }
  });
  function _0x34cb4a(_0x370916) {
    {
      if (!_0x370916) {
        return null;
      }
      if (typeof _0x370916 == "number") {
        return new Date(_0x370916);
      }
      var _0x318fc6 = Number(_0x370916);
      if (!isNaN(_0x318fc6) && _0x318fc6 > 1000000000000) {
        return new Date(_0x318fc6);
      }
      if (!isNaN(_0x318fc6) && _0x318fc6 > 1000000000) {
        return new Date(_0x318fc6 * 1000);
      }
      var _0x507aa1 = new Date(_0x370916);
      return isNaN(_0x507aa1.getTime()) ? null : _0x507aa1;
    }
  }
  function _0x747416(_0x1c25d2) {
    if (!_0x1c25d2) {
      return "";
    }
    var _0x583ece = _0x1c25d2.toLowerCase();
    return _0x583ece.indexOf("pro") >= 0 ? "tu-plan-pro" : _0x583ece.indexOf("business") >= 0 || _0x583ece.indexOf("enterprise") >= 0 ? "tu-plan-business" : _0x583ece.indexOf("trial") >= 0 ? "tu-plan-trial" : _0x583ece.indexOf("free") >= 0 ? "tu-plan-free" : "";
  }
  function _0x449827(_0x57dca2) {
    {
      if (!_0x57dca2) {
        return "tu-model-other";
      }
      var _0x5cee92 = _0x57dca2.toLowerCase();
      return _0x5cee92.indexOf("claude") >= 0 ? "tu-model-claude" : _0x5cee92.indexOf("gemini") >= 0 ? "tu-model-gemini" : _0x5cee92.indexOf("gpt") >= 0 ? "tu-model-gpt" : _0x5cee92.indexOf("composer") >= 0 ? "tu-model-composer" : "tu-model-other";
    }
  }
  function _0x41b0dc(_0x58276e) {
    return _0x58276e ? _0x58276e.replace(/^USAGE_EVENT_KIND_/i, "").toLowerCase().replace(/_/g, "-") : "unknown";
  }
  function _0x28c8da() {
    {
      document.getElementById("tuOverlay").style.display = "";
      document.getElementById("tuLoading").style.display = "none";
      document.getElementById("tuError").style.display = "none";
      document.getElementById("tuInfo").innerHTML = "<div class=\"tu-info-item\"><span>邮箱：</span><span class=\"tu-info-email\" style=\"opacity:0.5\">加载中...</span></div><div class=\"tu-info-item\"><span>类型：</span><span class=\"tu-info-badge\" style=\"opacity:0.5\">-</span></div><div class=\"tu-info-item\"><span>剩余：</span><span class=\"tu-info-days\" style=\"opacity:0.5\">-</span></div><div class=\"tu-info-item tu-info-item-right\"><span>周期：</span><span style=\"opacity:0.5\">-</span></div>";
      document.getElementById("tuSummary").innerHTML = "<div class=\"tu-sum-card\"><div class=\"tu-sum-title\">额度汇总</div><div style=\"padding:16px;text-align:center;color:var(--desc);font-size:12px;opacity:0.5\">加载中...</div></div><div class=\"tu-sum-card\"><div class=\"tu-sum-title\">Token 汇总</div><div style=\"padding:16px;text-align:center;color:var(--desc);font-size:12px;opacity:0.5\">加载中...</div></div><div class=\"tu-sum-card\"><div class=\"tu-sum-title\">Token 消耗</div><div style=\"padding:16px;text-align:center;color:var(--desc);font-size:12px;opacity:0.5\">加载中...</div></div>";
      document.getElementById("tuBody").innerHTML = "<tr><td colspan=\"5\" style=\"text-align:center;padding:24px;color:var(--desc);opacity:0.5\">加载中...</td></tr>";
      document.getElementById("tuTableHdr").innerHTML = "Token 使用记录";
      document.getElementById("tuFooter").innerHTML = "";
    }
  }
  function _0x341712(_0x18ee80) {
    {
      if (document.getElementById("tuLoading").style.display = "none", document.getElementById("tokenUsageBtn").classList.remove("spinning"), _0x18ee80.error) {
        {
          document.getElementById("tuError").style.display = "";
          document.getElementById("tuError").textContent = _0x18ee80.error;
          return;
        }
      }
      document.getElementById("tuError").style.display = "none";
      _0x4afe4d = _0x18ee80.events || [];
      _0x268582 = _0x18ee80;
      var _0x313581 = document.getElementById("tuInfo");
      var _0x2e0a46 = "";
      if (_0x18ee80.billingCycleStart && _0x18ee80.billingCycleEnd) {
        {
          var _0x1f2997 = new Date(_0x18ee80.billingCycleStart);
          var _0x226a2f = new Date(_0x18ee80.billingCycleEnd);
          _0x2e0a46 = _0x1f2997.getFullYear() + "/" + _0x64d8af(_0x1f2997.getMonth() + 1) + "/" + _0x64d8af(_0x1f2997.getDate()) + " – " + _0x226a2f.getFullYear() + "/" + _0x64d8af(_0x226a2f.getMonth() + 1) + "/" + _0x64d8af(_0x226a2f.getDate());
        }
      }
      var _0x1cfd1c = "";
      var _0x4900bd = "ok";
      if (_0x18ee80.billingCycleEnd) {
        var _0xb3b224 = Math.ceil((new Date(_0x18ee80.billingCycleEnd).getTime() - Date.now()) / 86400000);
        _0x1cfd1c = _0xb3b224 + " 天";
        _0x4900bd = _0xb3b224 <= 3 ? "danger" : _0xb3b224 <= 7 ? "warn" : "ok";
      }
      _0x313581.innerHTML = "<div class=\"tu-info-item\"><span>邮箱：</span><span class=\"tu-info-email\" title=\"" + _0xcb8b3f(_0x18ee80.email || "") + "\">" + _0xcb8b3f(_0x18ee80.email || "") + "</span></div><div class=\"tu-info-item\"><span>类型：</span><span class=\"tu-info-badge " + _0x747416(_0x18ee80.plan) + "\">" + _0xcb8b3f(_0x18ee80.plan || "") + "</span></div>" + (_0x1cfd1c ? "<div class=\"tu-info-item\"><span>剩余：</span><span class=\"tu-info-days " + _0x4900bd + "\">" + _0x1cfd1c + "</span></div>" : "") + (_0x2e0a46 ? "<div class=\"tu-info-item tu-info-item-right\"><span>周期：</span>" + _0x2e0a46 + "</div>" : "");
      var _0x52ef1e = (_0x18ee80.quota.used / 100).toFixed(2);
      var _0x3f5b8b = (_0x18ee80.quota.limit / 100).toFixed(2);
      var _0x2c24a0 = (_0x18ee80.quota.remaining / 100).toFixed(2);
      var _0x392856 = _0x18ee80.quota.limit > 0 ? Math.round(_0x18ee80.quota.used / _0x18ee80.quota.limit * 100) : 0;
      var _0x51b4db = _0x392856 > 100 ? "var(--danger)" : _0x392856 > 80 ? "var(--warn)" : "var(--ok)";
      var _0x3fd870 = 0;
      var _0x3191e1 = {};
      var _0x4c9a77 = 0;
      var _0x1328c9 = {};
      _0x4afe4d.forEach(function (_0x3d8579) {
        _0x3fd870 += _0x3d8579.totalCents || 0;
        var _0x5d6a87 = _0x3d8579.model || "unknown";
        _0x3191e1[_0x5d6a87] = (_0x3191e1[_0x5d6a87] || 0) + (_0x3d8579.totalCents || 0);
        var _0x3ef5d8 = (_0x3d8579.inputTokens || 0) + (_0x3d8579.outputTokens || 0) + (_0x3d8579.cacheWriteTokens || 0) + (_0x3d8579.cacheReadTokens || 0);
        _0x4c9a77 += _0x3ef5d8;
        _0x1328c9[_0x5d6a87] = (_0x1328c9[_0x5d6a87] || 0) + _0x3ef5d8;
      });
      var _0x561b28 = ["#4090f0", "#00bcd4", "#4caf7d", "#f0a050", "#9b59b6", "#e91e63"];
      var _0x2f0569 = "";
      var _0x412f43 = Object.keys(_0x3191e1).sort(function (_0x21592a, _0x51caa7) {
        return _0x3191e1[_0x51caa7] - _0x3191e1[_0x21592a];
      });
      var _0x1e77e7 = "";
      _0x412f43.forEach(function (_0x4ab242, _0x5981fb) {
        var _0x4ce7ee = _0x3fd870 > 0 ? _0x3191e1[_0x4ab242] / _0x3fd870 * 100 : 0;
        var _0x39d001 = _0x561b28[_0x5981fb % _0x561b28.length];
        _0x1e77e7 += "<div style=\"width:" + _0x4ce7ee + "%;background:" + _0x39d001 + ";height:100%\"></div>";
        _0x2f0569 += "<div class=\"tu-sum-legend-item\"><span class=\"tu-sum-legend-dot\" style=\"background:" + _0x39d001 + "\"></span><span class=\"tu-sum-legend-val\">$" + (_0x3191e1[_0x4ab242] / 100).toFixed(2) + "</span><span class=\"tu-model-name-truncate\" title=\"" + _0xcb8b3f(_0x4ab242) + "\">" + _0xcb8b3f(_0x4ab242) + "</span></div>";
      });
      var _0x454db8 = "";
      var _0x35873c = "";
      var _0x35f031 = Object.keys(_0x1328c9).sort(function (_0x5c3090, _0x38319e) {
        return _0x1328c9[_0x38319e] - _0x1328c9[_0x5c3090];
      });
      _0x35f031.forEach(function (_0xf6d745, _0x469158) {
        var _0x34fef7 = _0x4c9a77 > 0 ? _0x1328c9[_0xf6d745] / _0x4c9a77 * 100 : 0;
        var _0x23a379 = _0x561b28[_0x469158 % _0x561b28.length];
        _0x35873c += "<div style=\"width:" + _0x34fef7 + "%;background:" + _0x23a379 + ";height:100%\"></div>";
        _0x454db8 += "<div class=\"tu-sum-legend-item\"><span class=\"tu-sum-legend-dot\" style=\"background:" + _0x23a379 + "\"></span><span class=\"tu-sum-legend-val\">" + (_0x1328c9[_0xf6d745] / 10000).toFixed(1) + "万</span><span class=\"tu-sum-legend-pct\">" + (_0x4c9a77 > 0 ? Math.round(_0x1328c9[_0xf6d745] / _0x4c9a77 * 100) : 0) + "%</span><span class=\"tu-model-name-truncate\" title=\"" + _0xcb8b3f(_0xf6d745) + "\">" + _0xcb8b3f(_0xf6d745) + "</span></div>";
      });
      document.getElementById("tuSummary").innerHTML = "<div class=\"tu-sum-card\"><div class=\"tu-sum-title\">额度汇总</div><div class=\"tu-sum-row\"><span>已用额度</span><span class=\"tu-sum-val\">$" + _0x52ef1e + "</span></div><div class=\"tu-sum-row\"><span>总额度</span><span class=\"tu-sum-val\">$" + _0x3f5b8b + "</span></div><div class=\"tu-sum-row\"><span>剩余额度</span><span class=\"tu-sum-val\">$" + _0x2c24a0 + "</span></div><div class=\"tu-sum-bar\"><div class=\"tu-sum-fill\" style=\"width:" + Math.min(_0x392856, 100) + "%;background:" + _0x51b4db + "\"></div></div><div class=\"tu-sum-pct\" style=\"color:" + _0x51b4db + "\">已用 " + _0x392856 + "%</div></div><div class=\"tu-sum-card\"><div class=\"tu-sum-title\">Token 汇总</div><div class=\"tu-sum-row\"><span>tokens消耗：</span><span class=\"tu-sum-val\">$" + (_0x3fd870 / 100).toFixed(2) + "</span></div><div class=\"tu-sum-bar\"><div class=\"tu-sum-bar-progress\" style=\"border-radius:2px;overflow:hidden\">" + _0x1e77e7 + "</div></div><div class=\"tu-sum-legend\">" + _0x2f0569 + "</div></div><div class=\"tu-sum-card\"><div class=\"tu-sum-title\">Token 消耗</div><div class=\"tu-sum-row\"><span>tokens总计：</span><span class=\"tu-sum-val\">" + (_0x4c9a77 / 10000).toFixed(0) + " 万</span></div><div class=\"tu-sum-bar\"><div class=\"tu-sum-bar-progress\" style=\"border-radius:2px;overflow:hidden\">" + _0x35873c + "</div></div><div class=\"tu-sum-legend\">" + _0x454db8 + "</div></div>";
      _0x164c86();
    }
  }
  function _0x164c86() {
    {
      var _0x35e763 = _0x4afe4d ? _0x4afe4d.length : 0;
      var _0x5e45ee = Math.max(1, Math.ceil(_0x35e763 / _0x3fbcf4));
      _0x909a4a > _0x5e45ee && (_0x909a4a = _0x5e45ee);
      var _0x49920e = (_0x909a4a - 1) * _0x3fbcf4;
      var _0x1b2992 = Math.min(_0x49920e + _0x3fbcf4, _0x35e763);
      var _0x16acd8 = _0x4afe4d ? _0x4afe4d.slice(_0x49920e, _0x1b2992) : [];
      document.getElementById("tuTableHdr").innerHTML = "Token 使用记录 (共 " + _0x35e763 + " 条)";
      var _0xc58af3 = document.getElementById("tuBody");
      _0xc58af3.innerHTML = "";
      _0x16acd8.forEach(function (_0x535068) {
        {
          var _0x2e974d = document.createElement("tr");
          var _0x25599a = _0x34cb4a(_0x535068.timestamp);
          var _0x3c6088 = _0x25599a ? _0x25599a.getFullYear() + "/" + _0x64d8af(_0x25599a.getMonth() + 1) + "/" + _0x64d8af(_0x25599a.getDate()) + " " + _0x64d8af(_0x25599a.getHours()) + ":" + _0x64d8af(_0x25599a.getMinutes()) + ":" + _0x64d8af(_0x25599a.getSeconds()) : String(_0x535068.timestamp || "-");
          var _0x43518a = (_0x535068.inputTokens || 0) + (_0x535068.outputTokens || 0) + (_0x535068.cacheWriteTokens || 0) + (_0x535068.cacheReadTokens || 0);
          var _0x582b61 = _0x535068.maxMode ? " <span class=\"tu-max-badge\">MAX</span>" : "";
          var _0x31a1da = _0x41b0dc(_0x535068.kind || "unknown");
          var _0x418225 = _0x535068.totalCents / 100;
          var _0x3eb99e = _0x418225 >= 10 ? "tu-cost-red" : _0x418225 >= 1 ? "tu-cost-yellow" : "tu-cost-green";
          _0x2e974d.innerHTML = "<td>" + _0x3c6088 + "</td><td><span class=\"tu-kind-badge\">" + _0xcb8b3f(_0x31a1da) + "</span></td><td><div class=\"tu-model-full\" title=\"" + _0xcb8b3f(_0x535068.model || "") + "\"><span class=\"tu-model-badge tu-model-name-truncate " + _0x449827(_0x535068.model) + "\">" + _0xcb8b3f(_0x535068.model || "") + "</span>" + _0x582b61 + "</div></td><td style=\"text-align:right\">" + (_0x43518a / 10000).toFixed(1) + " 万</td><td style=\"text-align:right;font-weight:700\" class=\"" + _0x3eb99e + "\">$" + _0x418225.toFixed(2) + "</td>";
          _0xc58af3.appendChild(_0x2e974d);
        }
      });
      var _0x43ac49 = document.getElementById("tuFooter");
      var _0x2355ee = "<div class=\"tu-page-size\">";
      [10, 20, 50, 100].forEach(function (_0x241ee4) {
        {
          _0x2355ee += "<button" + (_0x3fbcf4 === _0x241ee4 ? " class=\"active\"" : "") + " data-ps=\"" + _0x241ee4 + "\">" + _0x241ee4 + "</button>";
        }
      });
      _0x2355ee += "</div>";
      var _0x3f589b = "<div class=\"tu-pagination\">";
      _0x3f589b += "<button data-pg=\"prev\"" + (_0x909a4a <= 1 ? " disabled" : "") + ">&lsaquo;</button>";
      for (var _0x476079 = Math.max(1, _0x909a4a - 3), _0x312b48 = Math.min(_0x5e45ee, _0x476079 + 6), _0x3f3118 = _0x476079; _0x3f3118 <= _0x312b48; _0x3f3118++) {
        _0x3f589b += "<button data-pg=\"" + _0x3f3118 + "\"" + (_0x3f3118 === _0x909a4a ? " class=\"active\"" : "") + ">" + _0x3f3118 + "</button>";
      }
      _0x3f589b += "<button data-pg=\"next\"" + (_0x909a4a >= _0x5e45ee ? " disabled" : "") + ">&rsaquo;</button>";
      _0x3f589b += "</div>";
      _0x43ac49.innerHTML = "<span class=\"tu-footer-total\">共 " + _0x35e763 + " 条</span><div class=\"tu-footer-right\">" + _0x2355ee + _0x3f589b + "</div>";
      _0x43ac49.querySelectorAll(".tu-page-size button").forEach(function (_0x3be9d4) {
        _0x3be9d4.addEventListener("click", function () {
          var _0x53f962 = Number(_0x3be9d4.getAttribute("data-ps"));
          _0x53f962 && _0x53f962 !== _0x3fbcf4 && (_0x3fbcf4 = _0x53f962, _0x909a4a = 1, _0x164c86());
        });
      });
      _0x43ac49.querySelectorAll(".tu-pagination button").forEach(function (_0x3bfad2) {
        {
          _0x3bfad2.addEventListener("click", function () {
            var _0x2cdfa1 = _0x3bfad2.getAttribute("data-pg");
            var _0x46c1d6 = _0x909a4a;
            _0x2cdfa1 === "prev" ? _0x46c1d6 = Math.max(1, _0x909a4a - 1) : _0x2cdfa1 === "next" ? _0x46c1d6 = _0x909a4a + 1 : _0x46c1d6 = Number(_0x2cdfa1);
            _0x46c1d6 !== _0x909a4a && _0x46c1d6 >= 1 && _0x46c1d6 <= _0x5e45ee && (_0x909a4a = _0x46c1d6, _0x164c86());
          });
        }
      });
    }
  }
  var _0x3c8483 = document.getElementById("confirmOverlay");
  var _0x31026a = document.getElementById("confirmMsg");
  var _0x2bb499 = null;
  function _0xe5b56d(_0x21f196) {
    return new Promise(function (_0x24233d) {
      {
        _0x31026a.textContent = _0x21f196;
        _0x3c8483.style.display = "";
        _0x2bb499 = _0x24233d;
      }
    });
  }
  document.getElementById("confirmOk").addEventListener("click", function () {
    {
      _0x3c8483.style.display = "none";
      _0x2bb499 && (_0x2bb499(true), _0x2bb499 = null);
    }
  });
  document.getElementById("confirmCancel").addEventListener("click", function () {
    {
      _0x3c8483.style.display = "none";
      _0x2bb499 && (_0x2bb499(false), _0x2bb499 = null);
    }
  });
  _0x3c8483.addEventListener("click", function (_0x1f4843) {
    _0x1f4843.target === _0x3c8483 && (_0x3c8483.style.display = "none", _0x2bb499 && (_0x2bb499(false), _0x2bb499 = null));
  });
  document.getElementById("clearBtn").addEventListener("click", function () {
    {
      _0xe5b56d("确定要清空所有聊天记录吗？此操作不可撤销。").then(function (_0x24e23e) {
        _0x24e23e && (_0x171601.querySelectorAll(".msg").forEach(function (_0x5568f9) {
          _0x5568f9.remove();
        }), _0x23e187.style.display = "", _0x3203a0 = [], _0xdfb83 = [], _0x2abfb2(null), _0x21bccf = null, _0x4f6a1d = {}, _0x3c6ed9 = {}, _0x5a18ed = 0, _0x58bb1d = {}, _0x2d05c5 = {}, _0x42b40f(), _0x57254a(), _0x1048d6(), _0x22b854.postMessage({
          type: "clearHistory"
        }));
      });
    }
  });
  _0x1876c4.addEventListener("click", function () {
    {
      _0x365764 = true;
      _0x1876c4.style.display = "none";
      _0x8fd6ba.classList.remove("hidden");
    }
  });
  _0x22530b.addEventListener("click", function () {
    _0x365764 = false;
    _0x1876c4.style.display = "";
    _0x8fd6ba.classList.add("hidden");
  });
  document.getElementById("testChk").addEventListener("change", function () {
    {
      var _0x1f9a92 = document.getElementById("testChk").checked;
      document.getElementById("testOpts").style.display = _0x1f9a92 ? "block" : "none";
      _0x1f9a92 || _0x217ba4();
    }
  });
  _0x592bbc.addEventListener("click", _0x236e01);
  _0x3a921f.addEventListener("click", _0x217ba4);
  document.getElementById("uploadImgBtn").addEventListener("click", function () {
    document.getElementById("imgInput").click();
  });
  document.getElementById("uploadFileBtn").addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });
  document.getElementById("addRefBtn").addEventListener("click", function () {
    var _0x35aae0 = {
      type: "selectFileRef"
    };
    _0x22b854.postMessage(_0x35aae0);
  });
  function _0x3e348f() {}
  document.getElementById("imgInput").addEventListener("change", function (_0xe7db56) {
    {
      for (var _0x3da017 = _0xe7db56.target.files, _0x505183 = 0; _0x505183 < _0x3da017.length; _0x505183++) {
        _0x3aa89e(_0x3da017[_0x505183]);
      }
      _0xe7db56.target.value = "";
    }
  });
  document.getElementById("fileInput").addEventListener("change", function (_0x30c8fe) {
    {
      for (var _0x389e0b = _0x30c8fe.target.files, _0x5a0c3c = 0; _0x5a0c3c < _0x389e0b.length; _0x5a0c3c++) {
        _0x3aa89e(_0x389e0b[_0x5a0c3c]);
      }
      _0x30c8fe.target.value = "";
    }
  });
  function _0x38fad9(_0x1db971) {
    var _0x339020 = _0x1db971.split("\n");
    if (_0x339020.length < 3) {
      return false;
    }
    var _0x3a1ec9 = _0x339020.filter(function (_0x2ae7c4) {
      return /^(\s{2,}|\t)/.test(_0x2ae7c4);
    }).length;
    return _0x3a1ec9 >= 2 ? true : /[{};]|^\s*(def |class |import |function |const |let |var |return |if \(|for \(|while \(|async |public |private |export )/.test(_0x1db971);
  }
  function _0x5c0be9() {
    var _0x10c190 = "";
    function _0x5acd3a(_0x44d826) {
      if (_0x44d826.nodeType === 3) {
        _0x10c190 += _0x44d826.textContent;
        return;
      }
      if (_0x44d826.nodeType === 1 && !(_0x44d826.classList && _0x44d826.classList.contains("inline-ref"))) {
        {
          if (_0x44d826.tagName === "BR") {
            _0x10c190 += "\n";
            return;
          }
          _0x44d826.tagName === "DIV" && _0x10c190.length > 0 && !_0x10c190.endsWith("\n") && (_0x10c190 += "\n");
          for (var _0x4cda09 = _0x44d826.firstChild; _0x4cda09; _0x4cda09 = _0x4cda09.nextSibling) {
            _0x5acd3a(_0x4cda09);
          }
        }
      }
    }
    _0x5acd3a(_0xd6a522);
    return _0x10c190.replace(/\u00A0/g, " ");
  }
  function _0xda5b6c() {
    for (var _0x3539ae = [], _0x15dee4 = _0xd6a522.querySelectorAll(".inline-ref"), _0x494f29 = 0; _0x494f29 < _0x15dee4.length; _0x494f29++) {
      _0x3539ae.push({
        path: _0x15dee4[_0x494f29].getAttribute("data-path") || "",
        name: _0x15dee4[_0x494f29].getAttribute("data-name") || "",
        lines: _0x15dee4[_0x494f29].getAttribute("data-lines") || null,
        isFolder: _0x15dee4[_0x494f29].getAttribute("data-folder") === "1"
      });
    }
    return _0x3539ae;
  }
  function _0x4334b6(_0x5072dd) {
    {
      for (var _0x2b8740 = _0xd6a522.querySelectorAll(".inline-ref"), _0x44665c = [], _0x6662fb = 0; _0x6662fb < _0x2b8740.length; _0x6662fb++) {
        _0x44665c.push(_0x2b8740[_0x6662fb].cloneNode(true));
      }
      _0xd6a522.textContent = _0x5072dd;
      for (var _0x4ac75d = 0; _0x4ac75d < _0x44665c.length; _0x4ac75d++) {
        _0xd6a522.firstChild ? _0xd6a522.insertBefore(_0x44665c[_0x4ac75d], _0xd6a522.firstChild) : _0xd6a522.appendChild(_0x44665c[_0x4ac75d]);
      }
    }
  }
  function _0x3b4c34() {
    _0xd6a522.innerHTML = "";
  }
  function _0x7fc883() {
    var _0x46468b = window.getSelection();
    if ((!_0x46468b || _0x46468b.rangeCount === 0 || !_0xd6a522.contains(_0x46468b.anchorNode)) && (_0xd6a522.focus(), _0x46468b = window.getSelection(), !_0x46468b || _0x46468b.rangeCount === 0)) {
      {
        var _0x14883c = document.createRange();
        _0x14883c.selectNodeContents(_0xd6a522);
        _0x14883c.collapse(false);
        _0x46468b.removeAllRanges();
        _0x46468b.addRange(_0x14883c);
      }
    }
    return _0x46468b;
  }
  function _0x52e6cb(_0x2a9db1) {
    {
      var _0x568ba6 = _0x7fc883();
      if (!(!_0x568ba6 || _0x568ba6.rangeCount === 0)) {
        {
          var _0x4d5d8b = _0x568ba6.getRangeAt(0);
          _0x4d5d8b.deleteContents();
          var _0xf5d8c7 = document.createTextNode(_0x2a9db1);
          _0x4d5d8b.insertNode(_0xf5d8c7);
          _0x4d5d8b.setStartAfter(_0xf5d8c7);
          _0x4d5d8b.setEndAfter(_0xf5d8c7);
          _0x568ba6.removeAllRanges();
          _0x568ba6.addRange(_0x4d5d8b);
        }
      }
    }
  }
  function _0xd8c86b(_0x496182, _0x28cb0e, _0x338e3f, _0x35765b) {
    {
      var _0x18d7db = _0x7fc883();
      if (!(!_0x18d7db || _0x18d7db.rangeCount === 0)) {
        var _0x93793f = _0x18d7db.getRangeAt(0);
        _0x93793f.deleteContents();
        var _0x4772b6 = document.createElement("span");
        _0x4772b6.className = "inline-ref";
        _0x4772b6.contentEditable = "false";
        _0x4772b6.setAttribute("data-path", _0x496182);
        _0x4772b6.setAttribute("data-name", _0x28cb0e);
        _0x338e3f && _0x4772b6.setAttribute("data-folder", "1");
        _0x35765b && _0x4772b6.setAttribute("data-lines", _0x35765b);
        var _0x59ca54 = _0x28cb0e;
        var _0x1dc18a = "";
        _0x35765b && (_0x1dc18a = "<span class=\"ref-lines\">(" + _0xcb8b3f(_0x35765b) + ")</span>");
        var _0x1a4493;
        if (_0x338e3f) {
          _0x1a4493 = "<span class=\"ref-ficon\" style=\"color:#dcb67a\"></span>";
        } else {
          var _0x4982eb = (_0x28cb0e.match(/\.([^.]+)$/) || [])[1] || "";
          _0x4982eb = _0x4982eb.toLowerCase();
          var _0x1df1c6 = {
            ch: "",
            c: "#cbcb41"
          };
          var _0x4d1051 = {
            ch: "",
            c: "#519aba"
          };
          var _0x6947e = {
            ch: "",
            c: "#519aba"
          };
          var _0x2aad76 = {
            ch: "",
            c: "#519aba"
          };
          var _0x51ef9e = {
            ch: "",
            c: "#cbcb41"
          };
          var _0x4e17ab = {
            ch: "",
            c: "#519aba"
          };
          var _0xfce9c = {
            ch: "",
            c: "#519aba"
          };
          var _0xb1fbb5 = {
            ch: "",
            c: "#f55385"
          };
          var _0x5201bd = {
            ch: "",
            c: "#e37933"
          };
          var _0x3a3ce6 = {
            ch: "",
            c: "#e37933"
          };
          var _0x89f4 = {
            ch: "",
            c: "#a074c4"
          };
          var _0x36134f = {
            ch: "",
            c: "#8dc149"
          };
          var _0x1a9f8b = {
            ch: "",
            c: "#cc3e44"
          };
          var _0x5288c2 = {
            ch: "",
            c: "#519aba"
          };
          var _0x45b4ed = {
            ch: "",
            c: "#8dc149"
          };
          var _0x45eefd = {
            ch: "",
            c: "#8dc149"
          };
          var _0x2c94bc = {
            ch: "",
            c: "#8dc149"
          };
          var _0x22768c = {
            ch: "",
            c: "#519aba"
          };
          var _0x354cbe = {
            ch: "",
            c: "#519aba"
          };
          var _0x1ddb57 = {
            ch: "",
            c: "#6d8086"
          };
          var _0x164224 = {
            ch: "",
            c: "#cc3e44"
          };
          var _0xe94165 = {
            ch: "",
            c: "#cc3e44"
          };
          var _0x54e2af = {
            ch: "",
            c: "#e37933"
          };
          var _0x356b40 = {
            ch: "",
            c: "#e37933"
          };
          var _0x948082 = {
            ch: "",
            c: "#519aba"
          };
          var _0x218a6c = {
            ch: "",
            c: "#519aba"
          };
          var _0x4a76c3 = {
            ch: "",
            c: "#a074c4"
          };
          var _0x1b3f9d = {
            ch: "",
            c: "#a074c4"
          };
          var _0x42a935 = {
            ch: "",
            c: "#519aba"
          };
          var _0x3a22f2 = {
            ch: "",
            c: "#519aba"
          };
          var _0x38fc9b = {
            ch: "",
            c: "#519aba"
          };
          var _0x15e882 = {
            ch: "",
            c: "#a074c4"
          };
          var _0x57349b = {
            ch: "",
            c: "#a074c4"
          };
          var _0x4d0c38 = {
            ch: "",
            c: "#f55385"
          };
          var _0x468868 = {
            ch: "",
            c: "#6d8086"
          };
          var _0xb3f139 = {
            ch: "",
            c: "#519aba"
          };
          var _0x485bc9 = {
            js: _0x1df1c6,
            jsx: _0x4d1051,
            ts: _0x6947e,
            tsx: _0x2aad76,
            json: _0x51ef9e,
            py: _0x4e17ab,
            css: _0xfce9c,
            scss: _0xb1fbb5,
            html: _0x5201bd,
            xml: _0x3a3ce6,
            svg: _0x89f4,
            vue: _0x36134f,
            svelte: _0x1a9f8b,
            md: _0x5288c2,
            sh: _0x45b4ed,
            bash: _0x45eefd,
            zsh: _0x2c94bc,
            ps1: _0x22768c,
            go: _0x354cbe,
            rs: _0x1ddb57,
            java: _0x164224,
            rb: _0xe94165,
            swift: _0x54e2af,
            kt: _0x356b40,
            c: _0x948082,
            cpp: _0x218a6c,
            h: _0x4a76c3,
            php: _0x1b3f9d,
            lua: _0x42a935,
            dart: _0x3a22f2,
            r: _0x38fc9b,
            yaml: _0x15e882,
            yml: _0x57349b,
            sql: _0x4d0c38,
            toml: _0x468868,
            dockerfile: _0xb3f139
          };
          var _0x497a00 = _0x485bc9[_0x4982eb];
          _0x497a00 ? _0x1a4493 = "<span class=\"ref-ficon\" style=\"color:" + _0x497a00.c + "\">" + _0x497a00.ch + "</span>" : _0x1a4493 = "<span class=\"ref-ficon\" style=\"color:#6d8086\"></span>";
        }
        _0x4772b6.innerHTML = _0x1a4493 + "<span class=\"ref-name\">" + _0xcb8b3f(_0x59ca54) + _0x1dc18a + "</span><span class=\"ref-del\">✕</span>";
        _0x4772b6.querySelector(".ref-del").addEventListener("click", function (_0x899910) {
          {
            _0x899910.stopPropagation();
            _0x4772b6.remove();
            _0x19f1c4();
            _0x2a2b34();
          }
        });
        _0x4772b6.addEventListener("click", function (_0x387b32) {
          {
            _0x387b32.target.closest(".ref-del") || (_0x387b32.stopPropagation(), _0x22b854.postMessage({
              type: "openFile",
              path: _0x496182,
              lines: _0x35765b || null
            }));
          }
        });
        _0x4772b6.style.cursor = "pointer";
        _0x4772b6.title = _0x496182 + (_0x35765b ? " #" + _0x35765b : "") + " (点击打开)";
        _0x93793f.insertNode(_0x4772b6);
        var _0x512a6a = document.createTextNode("\xA0");
        _0x4772b6.after(_0x512a6a);
        _0x93793f.setStartAfter(_0x512a6a);
        _0x93793f.setEndAfter(_0x512a6a);
        _0x18d7db.removeAllRanges();
        _0x18d7db.addRange(_0x93793f);
        _0x19f1c4();
      }
    }
  }
  function _0x19f1c4() {
    _0x2a2b34();
  }
  function _0x3e7c92() {
    {
      var _0x3a3b9d = window.getSelection();
      if (!_0x3a3b9d || _0x3a3b9d.rangeCount === 0) {
        return "";
      }
      var _0x293a50 = _0x3a3b9d.anchorNode;
      if (!_0x293a50 || !_0xd6a522.contains(_0x293a50) && _0x293a50 !== _0xd6a522) {
        return "";
      }
      var _0x8d3af3 = _0x3a3b9d.getRangeAt(0).cloneRange();
      _0x8d3af3.collapse(true);
      var _0xa7d5cd = document.createRange();
      try {
        {
          _0xa7d5cd.selectNodeContents(_0xd6a522);
          _0xa7d5cd.setEnd(_0x8d3af3.startContainer, _0x8d3af3.startOffset);
        }
      } catch {
        return "";
      }
      var _0x124879 = _0xa7d5cd.cloneContents();
      var _0x168fb7 = "";
      function _0x5416fd(_0x2492bf) {
        {
          if (_0x2492bf.nodeType === 3) {
            {
              _0x168fb7 += _0x2492bf.textContent;
              return;
            }
          }
          if (_0x2492bf.nodeType === 1 || _0x2492bf.nodeType === 11) {
            if (_0x2492bf.nodeType === 1) {
              {
                if (_0x2492bf.classList && _0x2492bf.classList.contains("inline-ref")) {
                  return;
                }
                if (_0x2492bf.tagName === "BR") {
                  {
                    _0x168fb7 += "\n";
                    return;
                  }
                }
              }
            }
            for (var _0xa3fc70 = _0x2492bf.firstChild; _0xa3fc70; _0xa3fc70 = _0xa3fc70.nextSibling) {
              _0x5416fd(_0xa3fc70);
            }
          }
        }
      }
      _0x5416fd(_0x124879);
      return _0x168fb7;
    }
  }
  function _0x410c52(_0x221117) {
    var _0xf0cf9b = window.getSelection();
    if (!(!_0xf0cf9b || _0xf0cf9b.rangeCount === 0)) {
      {
        var _0x4aa142 = _0xf0cf9b.getRangeAt(0);
        _0x4aa142.collapse(true);
        var _0xed96ed = _0x4aa142.startContainer;
        var _0x3e7004 = _0x4aa142.startOffset;
        if (_0xed96ed.nodeType === 3 && _0x3e7004 >= _0x221117) {
          var _0x56bb55 = document.createRange();
          _0x56bb55.setStart(_0xed96ed, _0x3e7004 - _0x221117);
          _0x56bb55.setEnd(_0xed96ed, _0x3e7004);
          _0x56bb55.deleteContents();
        } else {
          for (var _0x39debc = 0; _0x39debc < _0x221117; _0x39debc++) {
            _0xf0cf9b.modify("extend", "backward", "character");
          }
          _0xf0cf9b.rangeCount > 0 && _0xf0cf9b.getRangeAt(0).deleteContents();
        }
      }
    }
  }
  function _0x20fcc7(_0xb64ef1, _0x4b8ecf) {
    _0x52e6cb(_0x4b8ecf);
  }
  _0xd6a522.addEventListener("paste", function (_0x5e6fc6) {
    {
      _0x5e6fc6.preventDefault();
      var _0x5aad37 = _0x5e6fc6.clipboardData && _0x5e6fc6.clipboardData.items;
      if (_0x5aad37) {
        for (var _0x3988d7 = 0; _0x3988d7 < _0x5aad37.length; _0x3988d7++) {
          if (_0x5aad37[_0x3988d7].kind === "file") {
            {
              var _0x437f68 = _0x5aad37[_0x3988d7].getAsFile();
              if (_0x437f68) {
                {
                  _0x3aa89e(_0x437f68);
                  return;
                }
              }
            }
          }
        }
        var _0x47f511 = _0x5e6fc6.clipboardData.getData("text/plain");
        var _0x14da25 = {
          bubbles: true
        };
        _0x47f511 && (_0x38fad9(_0x47f511) ? _0x52e6cb("```\n" + _0x47f511 + "\n```") : _0x52e6cb(_0x47f511), _0xf2d1e7(), _0x2a2b34(), _0x59d484(), _0xd6a522.dispatchEvent(new Event("input", _0x14da25)));
      }
    }
  });
  _0xd6a522.addEventListener("dragover", function (_0x3cee8f) {
    {
      _0x3cee8f.preventDefault();
      _0x3cee8f.stopPropagation();
      _0xd6a522.classList.add("drag-over");
    }
  });
  _0xd6a522.addEventListener("dragleave", function () {
    _0xd6a522.classList.remove("drag-over");
  });
  _0xd6a522.addEventListener("drop", function (_0x272429) {
    _0x272429.preventDefault();
    _0xd6a522.classList.remove("drag-over");
    var _0xd03860 = _0x272429.dataTransfer;
    if (!_0xd03860) {
      return;
    }
    function _0xe9878a(_0x3e2e5c) {
      try {
        {
          return decodeURIComponent(_0x3e2e5c);
        }
      } catch {
        return _0x3e2e5c;
      }
    }
    function _0x134441(_0x40c08f) {
      var _0x57116e = [];
      _0x40c08f && _0x40c08f.split(/\r?\n/).forEach(function (_0x674672) {
        if (_0x674672 = _0x674672.trim(), !(!_0x674672 || _0x674672.charAt(0) === "#") && _0x674672.startsWith("file://")) {
          var _0x533fca = _0x674672.replace(/^file:\/\/\//, "").split("#")[0].split("?")[0];
          _0x533fca = _0xe9878a(_0x533fca);
          /^[a-zA-Z]:/.test(_0x533fca) || (_0x533fca = "/" + _0x533fca);
          _0x57116e.push(_0x533fca);
        }
      });
      return _0x57116e;
    }
    for (var _0x40ca4a = [], _0x565eb7 = ["application/vnd.code.uri-list", "text/uri-list", "text/x-moz-url"], _0x46c018 = 0; _0x46c018 < _0x565eb7.length && _0x40ca4a.length === 0; _0x46c018++) {
      {
        var _0x2e8256 = _0xd03860.getData(_0x565eb7[_0x46c018]);
        _0x2e8256 && (_0x40ca4a = _0x134441(_0x2e8256));
      }
    }
    if (_0x40ca4a.length === 0 && _0xd03860.types) {
      for (var _0x2f0eea = 0; _0x2f0eea < _0xd03860.types.length; _0x2f0eea++) {
        {
          var _0xa5bc6a = _0xd03860.types[_0x2f0eea];
          if (_0xa5bc6a.indexOf("uri") >= 0 || _0xa5bc6a.indexOf("file") >= 0 || _0xa5bc6a.indexOf("resource") >= 0) {
            var _0x2e46f2 = _0xd03860.getData(_0xa5bc6a);
            if (_0x2e46f2) {
              var _0xf884fb = _0x134441(_0x2e46f2);
              if (_0xf884fb.length > 0) {
                _0x40ca4a = _0xf884fb;
                break;
              }
            }
          }
        }
      }
    }
    if (_0x40ca4a.length === 0) {
      {
        var _0x2c3c4c = _0xd03860.getData("text/plain");
        _0x2c3c4c && (!_0xd03860.files || _0xd03860.files.length === 0) && _0x2c3c4c.trim().split(/\r?\n/).forEach(function (_0x4cc45b) {
          var _0x2df14c = _0x4cc45b.trim();
          _0x2df14c.startsWith("file://") && (_0x2df14c = _0xe9878a(_0x2df14c.replace(/^file:\/\//, "")));
          _0x2df14c && (_0x2df14c.startsWith("/") || /^[a-zA-Z]:[\\\//]/.test(_0x2df14c)) && _0x40ca4a.push(_0x2df14c);
        });
      }
    }
    if (_0x40ca4a.length > 0) {
      {
        var _0x433e9c = {
          type: "resolveDroppedPaths",
          paths: _0x40ca4a
        };
        _0x22b854.postMessage(_0x433e9c);
        return;
      }
    }
    var _0x184e2a = _0xd03860.files;
    if (_0x184e2a) {
      for (var _0x2a5288 = 0; _0x2a5288 < _0x184e2a.length; _0x2a5288++) {
        _0x3aa89e(_0x184e2a[_0x2a5288]);
      }
    }
  });
  var _0x442c75 = document.getElementById("atMenu");
  var _0x5e5c07 = document.getElementById("atList");
  var _0x5a1286 = false;
  var _0x32ddff = 0;
  var _0x71eacb = [];
  var _0x1b4d83 = null;
  var _0x157ab9 = [];
  var _0x404cc6 = 0;
  var _0x4a1abb = 0;
  function _0x5ab9b2(_0x55c51f) {
    if (_0x55c51f.length === 0 && _0x157ab9.length > 0) {
      {
        _0x1260c7(_0x157ab9);
        return;
      }
    }
    _0x1b4d83 && clearTimeout(_0x1b4d83);
    var _0x82f6e4 = _0x55c51f.length === 0 ? 0 : 150;
    _0x1b4d83 = setTimeout(function () {
      _0x4a1abb = ++_0x404cc6;
      _0x22b854.postMessage({
        type: "searchFiles",
        query: _0x55c51f || "*",
        reqId: _0x4a1abb
      });
    }, _0x82f6e4);
  }
  function _0x172423() {
    _0x5a1286 = false;
    _0x442c75.style.display = "none";
    _0x71eacb = [];
    _0x32ddff = 0;
  }
  var _0x388f62 = {
    ts: "🟦",
    tsx: "🟦",
    js: "🟨",
    jsx: "🟨",
    md: "📝",
    json: "⚙️",
    css: "🎨",
    html: "🌐",
    py: "🐍",
    rs: "🦀",
    go: "🐹",
    sql: "🗄",
    sh: "📟",
    yml: "⚙️",
    yaml: "⚙️",
    toml: "⚙️",
    vue: "🟩",
    svelte: "🟧",
    _default: "📄"
  };
  function _0x580838(_0x30c225) {
    {
      var _0x2ea6b5 = (_0x30c225.split(".").pop() || "").toLowerCase();
      return _0x388f62[_0x2ea6b5] || "📄";
    }
  }
  function _0x1260c7(_0x1e42cb) {
    {
      if (_0x71eacb = _0x1e42cb, _0x32ddff = 0, _0x1e42cb.length === 0) {
        {
          _0x172423();
          return;
        }
      }
      _0x5a1286 = true;
      _0x442c75.style.display = "";
      _0x5e5c07.innerHTML = "";
      _0x1e42cb.forEach(function (_0x1a02c8, _0x9cdad7) {
        {
          var _0x54a461 = document.createElement("div");
          _0x54a461.className = "at-item" + (_0x9cdad7 === 0 ? " active" : "");
          _0x54a461.innerHTML = "<span class=\"at-item-icon\">" + _0x580838(_0x1a02c8.name) + "</span><span class=\"at-item-name\">" + _0xcb8b3f(_0x1a02c8.name) + "</span><span class=\"at-item-path\">" + _0xcb8b3f(_0x1a02c8.path) + "</span>";
          _0x54a461.addEventListener("mousedown", function (_0x3da87d) {
            _0x3da87d.preventDefault();
          });
          _0x54a461.addEventListener("click", function () {
            {
              _0x3ad5a3(_0x9cdad7);
            }
          });
          _0x5e5c07.appendChild(_0x54a461);
        }
      });
    }
  }
  function _0x3ad5a3(_0x13d97f) {
    {
      var _0x4eced0 = _0x71eacb[_0x13d97f];
      if (_0x4eced0) {
        {
          var _0x1bd1d8 = _0x3e7c92();
          var _0x2a21a8 = _0x1bd1d8.lastIndexOf("@");
          if (_0x2a21a8 >= 0) {
            var _0x38f743 = _0x1bd1d8.length - _0x2a21a8;
            _0x410c52(_0x38f743);
          }
          _0xd8c86b(_0x4eced0.path, _0x4eced0.name, _0x4eced0.isFolder || false);
          _0x172423();
          _0xf2d1e7();
          _0x2a2b34();
          _0x59d484();
        }
      }
    }
  }
  var _0x338582 = false;
  _0xd6a522.addEventListener("compositionstart", function () {
    _0x338582 = true;
  });
  _0xd6a522.addEventListener("compositionend", function () {
    {
      var _0x1e3322 = {
        bubbles: true
      };
      _0x338582 = false;
      _0x546da1();
      _0xf2d1e7();
      _0x2a2b34();
      _0x59d484();
      _0xd6a522.dispatchEvent(new Event("input", _0x1e3322));
    }
  });
  function _0x546da1() {
    {
      if (!(_0xd6a522.querySelectorAll(".inline-ref").length > 0)) {
        var _0x106b86 = _0xd6a522.textContent || "";
        _0x106b86.replace(/\u00A0/g, "").trim() === "" && (_0xd6a522.innerHTML = "");
      }
    }
  }
  _0xd6a522.addEventListener("input", function () {
    {
      _0x546da1();
      _0xf2d1e7();
      _0x2a2b34();
      _0x59d484();
      !_0x338582 && requestAnimationFrame(function () {
        if (!_0x338582) {
          {
            var _0x52f463 = _0x3e7c92();
            var _0x106f64 = _0x52f463.lastIndexOf("@");
            if (_0x106f64 >= 0 && (_0x106f64 === 0 || /\s/.test(_0x52f463[_0x106f64 - 1]))) {
              var _0x3598f5 = _0x52f463.substring(_0x106f64 + 1);
              if (!/\s/.test(_0x3598f5)) {
                _0x5ab9b2(_0x3598f5);
                return;
              }
            }
            _0x5a1286 && _0x172423();
          }
        }
      });
    }
  });
  _0xd6a522.addEventListener("keydown", function (_0x545db9) {
    if (_0x5a1286) {
      {
        if (_0x545db9.key === "ArrowDown") {
          _0x545db9.preventDefault();
          _0x32ddff = Math.min(_0x32ddff + 1, _0x71eacb.length - 1);
          _0x5e5c07.querySelectorAll(".at-item").forEach(function (_0x3cff90, _0x5b4400) {
            {
              var _0x5e17dc = {
                block: "nearest"
              };
              _0x3cff90.classList.toggle("active", _0x5b4400 === _0x32ddff);
              _0x5b4400 === _0x32ddff && _0x3cff90.scrollIntoView(_0x5e17dc);
            }
          });
          return;
        }
        if (_0x545db9.key === "ArrowUp") {
          {
            _0x545db9.preventDefault();
            _0x32ddff = Math.max(_0x32ddff - 1, 0);
            _0x5e5c07.querySelectorAll(".at-item").forEach(function (_0xc120ca, _0x39408e) {
              var _0x101e6b = {
                block: "nearest"
              };
              _0xc120ca.classList.toggle("active", _0x39408e === _0x32ddff);
              _0x39408e === _0x32ddff && _0xc120ca.scrollIntoView(_0x101e6b);
            });
            return;
          }
        }
        if (_0x545db9.key === "Enter" || _0x545db9.key === "Tab") {
          {
            _0x545db9.preventDefault();
            _0x3ad5a3(_0x32ddff);
            return;
          }
        }
        if (_0x545db9.key === "Escape") {
          _0x545db9.preventDefault();
          _0x172423();
          return;
        }
      }
    }
    if (_0x545db9.key === "Enter" && (_0x545db9.ctrlKey || _0x545db9.metaKey)) {
      _0x545db9.preventDefault();
      _0x236e01();
      return;
    }
    if (_0x545db9.key === "Enter" && !_0x545db9.ctrlKey && !_0x545db9.metaKey && !_0x545db9.shiftKey) {
      {
        var _0x5f3862 = _0x3e7c92();
        var _0x3b9f1c = _0x5f3862.lastIndexOf("\n") + 1;
        var _0x18e2f4 = _0x5f3862.substring(_0x3b9f1c);
        var _0x387513 = _0x18e2f4.match(/^(\d+)\.\s/);
        if (_0x387513) {
          _0x545db9.preventDefault();
          var _0x1afe7e = "\n" + (parseInt(_0x387513[1]) + 1) + ". ";
          _0x52e6cb(_0x1afe7e);
          _0xf2d1e7();
        }
      }
    }
  });
  document.addEventListener("click", function (_0x286b97) {
    _0x5a1286 && !_0x286b97.target.closest(".at-menu") && _0x286b97.target !== _0xd6a522 && _0x172423();
  });
  var _0x57f7dc = false;
  var _0x5556a3 = {
    idle: "MCP Server 已就绪",
    waiting: "等待你的回复",
    working: "模型处理中",
    testing: "超时测试运行中",
    disconnected: "MCP 未连接"
  };
  function _0x26c9e2(_0x3d77b7) {
    !_0x57f7dc && _0x3d77b7 === "idle" && (_0x3d77b7 = "disconnected");
    _0x541ce1.className = "dot " + _0x3d77b7;
    var _0x3803e4 = _0x5556a3[_0x3d77b7] || "MCP Server 已就绪";
    _0x6c571a.textContent = _0x3803e4;
  }
  function _0x1a7449(_0x51a566) {
    var _0x26f974 = document.getElementById("nodeBanner");
    var _0xb32536 = document.getElementById("nodeBannerText");
    var _0xc5fb8f = document.getElementById("settingsNodeInfo");
    var _0x3a0bd2 = _0x51a566 && _0x51a566.state ? _0x51a566.state : "checking";
    var _0x42192b = _0x51a566 && _0x51a566.version ? _0x51a566.version : "";
    var _0x35a53f = _0x51a566 && _0x51a566.detail ? _0x51a566.detail : "";
    var _0x35ecf4 = "检测中...";
    if (_0x3a0bd2 === "ok" ? _0x35ecf4 = _0x42192b ? "正常 (" + _0x42192b + ")" : "正常" : _0x3a0bd2 === "missing" ? _0x35ecf4 = "未安装" : _0x3a0bd2 === "unsupported" ? _0x35ecf4 = _0x42192b ? "版本过低 (" + _0x42192b + ")" : "版本过低" : _0x3a0bd2 === "error" && (_0x35ecf4 = "检测失败"), _0xc5fb8f && (_0xc5fb8f.textContent = _0x35ecf4, _0xc5fb8f.className = "settings-node-info settings-node-" + _0x3a0bd2, _0xc5fb8f.title = _0x35a53f || _0x35ecf4), !(!_0x26f974 || !_0xb32536)) {
      if (_0x3a0bd2 === "ok" || _0x3a0bd2 === "checking") {
        {
          _0x26f974.style.display = "none";
          return;
        }
      }
      var _0x7a89ed = _0x35a53f || "Node.js 环境异常，请安装或修复 Node.js 18+ 后重启 Cursor。";
      _0x3a0bd2 === "missing" ? _0x7a89ed = _0x35a53f || "未检测到 node 命令，请安装 Node.js 18+ 并确保已加入 PATH，然后重启 Cursor。" : _0x3a0bd2 === "unsupported" ? _0x7a89ed = _0x35a53f || (_0x42192b ? "检测到 " + _0x42192b + "，但版本过低，需要 Node.js 18+。" : "Node.js 版本过低，需要 Node.js 18+。") : _0x3a0bd2 === "error" && (_0x7a89ed = _0x35a53f || "Node.js 检测失败，请确认 node 命令可正常执行后重启 Cursor。");
      _0x26f974.className = "node-banner" + (_0x3a0bd2 === "unsupported" ? " warn" : "");
      _0x26f974.title = _0x7a89ed;
      _0xb32536.textContent = _0x7a89ed;
      _0x26f974.style.display = "";
    }
  }
  var _0x5788fc = document.getElementById("mcpBannerBtn");
  _0x5788fc && _0x5788fc.addEventListener("click", function () {
    {
      var _0x1b1692 = {
        type: "openMcpSettings"
      };
      _0x22b854.postMessage(_0x1b1692);
    }
  });
  function _0x143049(_0x51bb24) {
    _0x57f7dc = _0x51bb24;
    var _0xa29383 = document.getElementById("mcpBanner");
    if (_0xa29383) {
      _0xa29383.style.display = _0x51bb24 ? "none" : "";
      _0x51bb24 && _0x4958d2.length === 0 ? _0x26c9e2("idle") : !_0x51bb24 && _0x4958d2.length === 0 && _0x26c9e2("disconnected");
      var _0x29237b = document.querySelector("#obMcpStatus .ob-mcp-dot");
      var _0x4f6db7 = document.getElementById("obMcpText");
      _0x29237b && (_0x29237b.className = "ob-mcp-dot " + (_0x51bb24 ? "idle" : "disconnected"));
      _0x4f6db7 && (_0x4f6db7.textContent = _0x51bb24 ? "MCP Server 已就绪" : "MCP 未连接，请在 Cursor 设置 > MCP 中启用");
    }
  }
  var _0x5702a6 = "<svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align:middle;margin-right:3px\"><path d=\"M1 6.5h10M7.5 2.5l4 4-4 4\"/></svg>";
  var _0x4958d2 = [];
  var _0x3c6645 = null;
  var _0xdfb83 = [];
  var _0x10b109 = null;
  var _0x3a3276 = 0;
  function _0x2abfb2(_0x4b4eab) {
    {
      if (_0x10b109 !== _0x4b4eab) {
        _0x10b109 = _0x4b4eab;
        try {
          {
            var _0x19e97d = {
              type: "activeTabChanged",
              sessionId: _0x4b4eab
            };
            _0x22b854.postMessage(_0x19e97d);
          }
        } catch {}
      }
    }
  }
  (function () {
    var _0x3e50ef = document.getElementById("sessionSidebar");
    _0x3e50ef && _0x3e50ef.classList.add("auto-hidden");
  })();
  var _0x4f6a1d = {};
  var _0x21bccf = null;
  var _0x3c6ed9 = {};
  var _0x5a18ed = 0;
  var _0x160d1a = ["#4090f0", "#4caf7d", "#f0a050", "#9b59b6", "#00bcd4", "#ff5722", "#8bc34a", "#e91e63"];
  var _0x58bb1d = {};
  var _0x2d05c5 = {};
  var _0x2ddc71 = false;
  function _0x326dd2(_0x3afd58) {
    return _0x3afd58 ? (_0x3c6ed9[_0x3afd58] || (_0x3c6ed9[_0x3afd58] = _0x160d1a[_0x5a18ed % _0x160d1a.length], _0x5a18ed++), _0x3c6ed9[_0x3afd58]) : "var(--accent)";
  }
  function _0xeb52e4(_0x3387da) {
    _0x3387da && (_0x4f6a1d[_0x3387da] = {
      text: _0x5c0be9(),
      html: _0xd6a522.innerHTML,
      attachments: _0x5174b1.slice()
    });
  }
  function _0x4e129e(_0x5aad12) {
    var _0x3d322a = _0x5aad12 ? _0x4f6a1d[_0x5aad12] : null;
    _0x3d322a && _0x3d322a.html ? (_0xd6a522.innerHTML = _0x3d322a.html, _0x4083f6()) : _0xd6a522.textContent = _0x3d322a ? _0x3d322a.text : "";
    _0x5174b1 = _0x3d322a ? _0x3d322a.attachments.slice() : [];
    _0x494830();
    _0xf2d1e7();
    _0x2a2b34();
  }
  function _0x4083f6() {
    var _0x4ca191 = _0xd6a522.querySelectorAll(".inline-ref:not([data-chip-bound])");
    _0x4ca191.forEach(function (_0x4fe862) {
      {
        _0x4fe862.setAttribute("data-chip-bound", "1");
        var _0x10889e = _0x4fe862.querySelector(".ref-del");
        _0x10889e && _0x10889e.addEventListener("click", function (_0x1cc05d) {
          _0x1cc05d.stopPropagation();
          _0x4fe862.remove();
          _0x19f1c4();
          _0x2a2b34();
        });
        _0x4fe862.addEventListener("click", function (_0x4a0f7e) {
          {
            if (!_0x4a0f7e.target.closest(".ref-del")) {
              {
                _0x4a0f7e.stopPropagation();
                var _0x353f03 = _0x4fe862.getAttribute("data-path") || "";
                var _0x521e9a = _0x4fe862.getAttribute("data-lines") || null;
                _0x353f03 && _0x22b854.postMessage({
                  type: "openFile",
                  path: _0x353f03,
                  lines: _0x521e9a
                });
              }
            }
          }
        });
        _0x4fe862.style.cursor = "pointer";
        var _0x51a3dc = _0x4fe862.getAttribute("data-path") || "";
        var _0x28f671 = _0x4fe862.getAttribute("data-lines") || null;
        _0x4fe862.title = _0x51a3dc + (_0x28f671 ? " #" + _0x28f671 : "") + " (点击打开)";
      }
    });
  }
  function _0x1c24ba(_0x3b39a6) {
    _0x3b39a6 && delete _0x4f6a1d[_0x3b39a6];
  }
  function _0x36af19(_0x5a0057) {
    var _0x38fe8c = _0x4f6a1d[_0x5a0057];
    return _0x38fe8c ? !!(_0x38fe8c.text.trim().length > 0 || _0x38fe8c.attachments.length > 0 || _0x38fe8c.html && _0x38fe8c.html.indexOf("inline-ref") !== -1) : false;
  }
  function _0x5a8ccf() {
    {
      return _0x5c0be9().trim().length > 0 || _0x5174b1.length > 0 || _0xd6a522.querySelectorAll(".inline-ref").length > 0;
    }
  }
  function _0x59d484() {
    {
      var _0x83cd84 = _0x5a8ccf();
      if (_0x83cd84 && !_0x21bccf) {
        if (_0x10b109) {
          _0x21bccf = _0x10b109;
        } else {
          var _0x2de1be = _0x4958d2.find(function (_0x9866df) {
            {
              return _0x9866df.id === _0x3c6645;
            }
          });
          _0x2de1be && (_0x21bccf = _0x2de1be.sessionId);
        }
      } else {
        _0x83cd84 || (_0x21bccf = null);
      }
      _0x42b40f();
    }
  }
  var _0x59b0c1 = null;
  var _0x226bf3 = null;
  var _0x395d52 = null;
  function _0x5c8da9() {
    {
      _0x59b0c1 || (_0x59b0c1 = document.getElementById("sendTarget"), _0x226bf3 = document.getElementById("sendTargetDot"), _0x395d52 = document.getElementById("sendTargetText"));
    }
  }
  function _0x5c7577() {
    {
      if (_0x10b109 && _0xdfb83.length > 0) {
        {
          var _0x324c30 = _0x326dd2(_0x10b109);
          _0xd6a522.classList.add("tab-colored");
          _0xd6a522.style.borderLeftColor = _0x324c30;
        }
      } else {
        _0xd6a522.classList.remove("tab-colored");
        _0xd6a522.style.borderLeftColor = "";
      }
    }
  }
  function _0x42b40f() {
    {
      _0x5c8da9();
      var _0x1ec653 = _0x59b0c1;
      if (_0x1ec653) {
        var _0x11a0b7 = _0x226bf3;
        var _0x58d0f8 = _0x395d52;
        var _0x5cb16b = _0x21bccf || _0x10b109;
        if (!_0x5cb16b || !_0x5a8ccf() || _0xdfb83.length <= 1) {
          {
            _0x1ec653.style.display = "none";
            return;
          }
        }
        for (var _0xee34bd = -1, _0x4486ef = 0; _0x4486ef < _0xdfb83.length; _0x4486ef++) {
          if (_0xdfb83[_0x4486ef].id === _0x5cb16b) {
            _0xee34bd = _0x4486ef;
            break;
          }
        }
        var _0x440114 = _0xee34bd >= 0 ? _0xdfb83[_0xee34bd] : null;
        var _0x5030cc = _0x440114 && _0x440114.title ? _0x440114.title : _0xee34bd >= 0 ? "Chat " + (_0xee34bd + 1) : _0x5cb16b;
        var _0x13ca3b = _0x326dd2(_0x5cb16b);
        _0x11a0b7.style.background = _0x13ca3b;
        _0x58d0f8.innerHTML = "&#x2192; " + _0xcb8b3f(_0x5030cc);
        _0x1ec653.style.display = "";
        _0xd6a522.style.borderLeftColor = _0x13ca3b;
      }
    }
  }
  function _0x4c8ae7() {
    {
      _0x22b854.postMessage({
        type: "saveQueue",
        queue: _0x3203a0.map(function (_0x67d37e) {
          return {
            text: _0x67d37e.text,
            attachments: (_0x67d37e.attachments || []).map(function (_0xeabbb0) {
              var _0x24103d = {
                type: _0xeabbb0.type,
                data: _0xeabbb0.data,
                mediaType: _0xeabbb0.mediaType,
                name: _0xeabbb0.name
              };
              return _0x24103d;
            })
          };
        })
      });
    }
  }
  function _0x57254a() {
    {
      var _0x3bfa0a = document.getElementById("queueArea");
      if (_0x3bfa0a.innerHTML = "", _0x4c8ae7(), _0x3203a0.length !== 0) {
        var _0x461ba0 = document.createElement("div");
        _0x461ba0.className = "queue-hdr";
        _0x461ba0.innerHTML = "<span class=\"queue-badge\">" + _0x3203a0.length + "</span>队列消息";
        _0x3bfa0a.appendChild(_0x461ba0);
        _0x3203a0.forEach(function (_0x319db4, _0x24b37f) {
          var _0x227e12 = document.createElement("div");
          _0x227e12.className = "queue-item";
          _0x227e12.innerHTML = "<span class=\"queue-item-num\">" + (_0x24b37f + 1) + ".</span><span class=\"queue-item-text\">" + _0xcb8b3f(_0x319db4.text) + "</span><span class=\"queue-item-del\" data-qi=\"" + _0x24b37f + "\">&#x2715;</span>";
          _0x227e12.querySelector(".queue-item-del").addEventListener("click", function (_0x4e6841) {
            _0x3203a0.splice(Number(_0x4e6841.target.getAttribute("data-qi")), 1);
            _0x57254a();
          });
          _0x3bfa0a.appendChild(_0x227e12);
        });
      }
    }
  }
  function _0x2a2b34() {
    {
      var _0x45de66 = _0x5c0be9().trim().length > 0 || _0x5174b1.length > 0 || _0xd6a522.querySelectorAll(".inline-ref").length > 0;
      _0x4958d2.length === 0 ? _0x45de66 ? (_0x592bbc.disabled = false, _0x592bbc.innerHTML = _0x5702a6 + "开始新对话") : (_0x592bbc.disabled = true, _0x592bbc.innerHTML = _0x5702a6 + "发送") : (_0x592bbc.disabled = !_0x45de66, _0x592bbc.innerHTML = _0x5702a6 + "发送");
    }
  }
  function _0xf2d1e7() {
    {
      _0xd6a522.style.height = "auto";
      _0xd6a522.style.height = Math.min(_0xd6a522.scrollHeight, 220) + "px";
    }
  }
  _0xd6a522.addEventListener("click", function (_0x435777) {
    {
      var _0x1c063d = _0x435777.target.closest && _0x435777.target.closest(".ref-del");
      if (_0x1c063d) {
        var _0x334c89 = _0x1c063d.closest(".inline-ref");
        _0x334c89 && (_0x334c89.remove(), _0x19f1c4(), _0x2a2b34());
        _0x435777.stopPropagation();
        return;
      }
      var _0xcaaa34 = _0x435777.target.closest && _0x435777.target.closest(".inline-ref");
      if (_0xcaaa34) {
        var _0x48bf7b = _0xcaaa34.getAttribute("data-path") || "";
        var _0x11e1ae = _0xcaaa34.getAttribute("data-lines") || null;
        _0x48bf7b && _0x22b854.postMessage({
          type: "openFile",
          path: _0x48bf7b,
          lines: _0x11e1ae
        });
        _0x435777.stopPropagation();
        return;
      }
    }
  });
  function _0x5e35cd(_0x4d5559) {
    {
      _0xd6a522.contentEditable = "true";
      document.getElementById("uploadImgBtn").disabled = false;
      document.getElementById("uploadFileBtn").disabled = false;
      _0x4d5559 && document.activeElement !== _0xd6a522 && _0xd6a522.focus();
      _0x2a2b34();
    }
  }
  var _0x2b38a5 = [];
  function _0x561f60(_0x305c6e, _0x2e87d5, _0x26cf53) {
    var _0x131fa8 = _0x3c6645;
    if (_0x21bccf) {
      {
        var _0x3f71e2 = _0x4958d2.find(function (_0x1559dd) {
          return _0x1559dd.sessionId === _0x21bccf;
        });
        _0x3f71e2 && (_0x131fa8 = _0x3f71e2.id);
      }
    }
    var _0x70ecdc = _0x21bccf || _0x10b109;
    if (_0x21bccf = null, _0x1c24ba(_0x70ecdc), _0x42b40f(), _0x2b38a5 = _0x26cf53 || [], _0x22b854.postMessage({
      type: "userReply",
      text: _0x305c6e,
      attachments: _0x2e87d5.map(function (_0x2cbf3b) {
        {
          var _0x30ad89 = {
            type: _0x2cbf3b.type,
            data: _0x2cbf3b.data,
            mediaType: _0x2cbf3b.mediaType,
            name: _0x2cbf3b.name
          };
          return _0x30ad89;
        }
      }),
      waiterId: _0x131fa8,
      refs: _0x2b38a5
    }), _0x4958d2 = _0x4958d2.filter(function (_0x1cc25c) {
      return _0x1cc25c.id !== _0x131fa8;
    }), _0x4958d2.length === 0) {
      _0x3c6645 = null;
      _0x5e35cd(false);
      _0x26c9e2("working");
      _0x4d2f69.classList.remove("show");
      _0x219b32();
      _0x3be2ab = false;
      _0x3a921f.style.display = "none";
    } else {
      var _0x2c8127 = _0x10b109 ? _0x4958d2.find(function (_0x408e31) {
        return _0x408e31.sessionId === _0x10b109;
      }) : null;
      _0x3c6645 = _0x2c8127 ? _0x2c8127.id : _0x4958d2[0].id;
      _0x217c23.textContent = (_0x2c8127 || _0x4958d2[0]).prompt;
      !_0x2c8127 && _0xdfb83.length > 1 && (_0x26c9e2("idle"), _0x4d2f69.classList.remove("show"), _0x219b32());
    }
    _0x21e896();
    _0x1048d6();
  }
  var _0x3d4fcc = false;
  function _0x236e01() {
    if (!_0x3d4fcc) {
      {
        var _0x55c9c0 = _0xda5b6c();
        var _0x524e04 = _0x5c0be9().trim().replace(/\u00A0/g, " ");
        if (!(!_0x524e04 && _0x5174b1.length === 0 && _0x55c9c0.length === 0)) {
          {
            _0x3d4fcc = true;
            setTimeout(function () {
              {
                _0x3d4fcc = false;
              }
            }, 500);
            var _0x473a78 = _0x5174b1.slice();
            if (_0x3b4c34(), _0xd6a522.style.height = "auto", _0x5174b1 = [], _0x494830(), _0x55c9c0.length > 0 && _0x4958d2.length > 0) {
              var _0xdc3b66 = _0x55c9c0.map(function (_0x4f007d) {
                {
                  var _0x3e3667 = _0x4f007d.isFolder ? " (folder)" : _0x4f007d.lines ? " (lines " + _0x4f007d.lines + ")" : "";
                  return "- " + _0x4f007d.path + _0x3e3667;
                }
              });
              var _0x7b5b15 = _0x524e04 + "\n\n---\nReferenced files:\n\n" + _0xdc3b66.join("\n");
              _0x561f60(_0x7b5b15, _0x473a78, _0x55c9c0);
            } else {
              if (_0x4958d2.length === 0) {
                var _0x36b2b9 = _0x524e04;
                if (_0x55c9c0.length > 0) {
                  var _0x206dc2 = _0x55c9c0.map(function (_0x456f12) {
                    {
                      var _0x49863a = _0x456f12.isFolder ? " (folder)" : _0x456f12.lines ? " (lines " + _0x456f12.lines + ")" : "";
                      return "- " + _0x456f12.path + _0x49863a;
                    }
                  });
                  _0x36b2b9 = _0x524e04 + "\n\n---\nReferenced files:\n\n" + _0x206dc2.join("\n");
                }
                var _0x385b71 = "temp_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
                var _0x1300f9 = {
                  type: "createTempSession",
                  tempId: _0x385b71
                };
                var _0x134d50 = {
                  type: "startNewChat",
                  text: _0x36b2b9
                };
                _0x22b854.postMessage(_0x1300f9);
                _0x22b854.postMessage(_0x134d50);
                _0x2abfb2(_0x385b71);
                _0x535f4b(_0x385b71);
                setTimeout(function () {
                  _0x310a6c("system", "✅ 已打开新的 Cursor Chat。请选择 Agent 模式和模型，然后直接发送；如果输入框为空，请粘贴（Cmd+V）后发送。", Date.now(), _0x385b71);
                }, 100);
                _0x21bccf = null;
                _0x42b40f();
                _0x2a2b34();
              } else {
                _0x561f60(_0x524e04, _0x473a78, []);
              }
            }
          }
        }
      }
    }
  }
  function _0x217ba4() {
    _0x3be2ab = false;
    _0x3124c2 = 0;
    _0x2329ce = -1;
    _0x219b32();
    _0x3a921f.style.display = "none";
  }
  function _0x64d8af(_0x9a32b) {
    return String(_0x9a32b).padStart(2, "0");
  }
  function _0x2428e3(_0x4595cf) {
    {
      var _0x164502 = new Date(_0x4595cf);
      var _0x16d6d3 = new Date();
      var _0x206a8b = _0x164502.getFullYear() === _0x16d6d3.getFullYear() && _0x164502.getMonth() === _0x16d6d3.getMonth() && _0x164502.getDate() === _0x16d6d3.getDate();
      var _0x24d176 = _0x64d8af(_0x164502.getHours()) + ":" + _0x64d8af(_0x164502.getMinutes()) + ":" + _0x64d8af(_0x164502.getSeconds());
      return _0x206a8b ? _0x24d176 : _0x164502.getFullYear() + "-" + _0x64d8af(_0x164502.getMonth() + 1) + "-" + _0x64d8af(_0x164502.getDate()) + " " + _0x24d176;
    }
  }
  function _0xcb8b3f(_0x499cc3) {
    {
      return String(_0x499cc3 ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
  }
  function _0x309bea(_0x5ca807) {
    var _0x59a35f = String(_0x5ca807 || "").trim();
    return !_0x59a35f || /^\s*(javascript|vbscript|data):/i.test(_0x59a35f) ? "#" : _0x59a35f;
  }
  function _0x6c1c04(_0x27e207) {
    if (typeof window.marked < "u") {
      try {
        {
          var _0x5b8083 = new window.marked.Renderer();
          _0x5b8083.link = function (_0x3990aa) {
            {
              var _0x24d6f1 = _0x309bea(_0x3990aa.href || "");
              var _0x5ab192 = _0x3990aa.title || "";
              var _0x2d1ba7 = this.parser ? this.parser.parseInline(_0x3990aa.tokens) : _0x3990aa.text || _0x24d6f1;
              return "<a href=\"" + _0xcb8b3f(_0x24d6f1) + "\"" + (_0x5ab192 ? " title=\"" + _0xcb8b3f(_0x5ab192) + "\"" : "") + " target=\"_blank\" rel=\"noopener noreferrer\">" + _0x2d1ba7 + "</a>";
            }
          };
          _0x5b8083.html = function () {
            return "";
          };
          _0x5b8083.image = function (_0xf289c2) {
            var _0x3b92cf = _0x309bea(_0xf289c2.href || "");
            var _0x25b5ae = _0xf289c2.title || "";
            var _0x50596c = _0xf289c2.text || "";
            return "<img src=\"" + _0xcb8b3f(_0x3b92cf) + "\"" + (_0x25b5ae ? " title=\"" + _0xcb8b3f(_0x25b5ae) + "\"" : "") + " alt=\"" + _0xcb8b3f(_0x50596c) + "\" loading=\"lazy\">";
          };
          return window.marked.parse(_0x27e207, {
            renderer: _0x5b8083,
            breaks: true,
            gfm: true
          });
        }
      } catch {}
    }
    return "<pre style=\"white-space:pre-wrap;margin:0\">" + _0xcb8b3f(_0x27e207) + "</pre>";
  }
  function _0x55a45e(_0x1402e7) {
    {
      var _0xa31795 = _0x1402e7.replace(/^-\s*/, "").trim();
      var _0x59d9a5 = _0xa31795;
      var _0x1d4955 = null;
      var _0x41a432 = false;
      /\(folder\)\s*$/.test(_0xa31795) && (_0x41a432 = true, _0x59d9a5 = _0xa31795.replace(/\s*\(folder\)\s*$/, "").trim());
      var _0x4b95d1 = _0xa31795.match(/\(lines\s+(\d+(?:-\d+)?)\)\s*$/);
      _0x4b95d1 && (_0x1d4955 = _0x4b95d1[1], _0x59d9a5 = _0xa31795.replace(/\s*\(lines\s+\d+(?:-\d+)?\)\s*$/, "").trim());
      var _0x154151 = _0x59d9a5.match(/\s*#(\d+(?:-\d+)?)$/);
      _0x154151 && (_0x1d4955 = _0x154151[1], _0x59d9a5 = _0x59d9a5.replace(/\s*#\d+(?:-\d+)?$/, "").trim());
      return {
        path: _0x59d9a5,
        lines: _0x1d4955,
        isFolder: _0x41a432
      };
    }
  }
  function _0x301edc(_0x3de1d3) {
    if (_0x3de1d3.indexOf("###FILEREF:") === -1 && _0x3de1d3.indexOf("```") === -1) {
      {
        var _0x52bdf3 = _0x3de1d3.trim().split("\n").filter(function (_0x450c52) {
          return _0x450c52.trim();
        });
        if (_0x52bdf3.length === 0) {
          return "";
        }
        var _0x307a28 = "<details class=\"ref-section\"><summary class=\"ref-summary\">📎 引用了 " + _0x52bdf3.length + " 个文件/文件夹</summary>";
        _0x52bdf3.forEach(function (_0x304ad8) {
          var _0x43217f = _0x55a45e(_0x304ad8);
          var _0x558e5a = _0x43217f.isFolder ? "📁" : "📄";
          var _0x105f6e = _0x43217f.path + (_0x43217f.lines ? " #" + _0x43217f.lines : "");
          _0x307a28 += "<div class=\"ref-file-name ref-clickable\" data-ref-path=\"" + _0xcb8b3f(_0x43217f.path) + "\"" + (_0x43217f.lines ? " data-ref-lines=\"" + _0xcb8b3f(_0x43217f.lines) + "\"" : "") + " style=\"padding:3px 0\" title=\"点击打开\">" + _0x558e5a + " " + _0xcb8b3f(_0x105f6e) + "</div>";
        });
        _0x307a28 += "</details>";
        return _0x307a28;
      }
    }
    var _0xb90660 = _0x3de1d3.split(/(?=^###FILEREF: )/m).filter(function (_0x5b232d) {
      return _0x5b232d.trim();
    });
    if (_0xb90660.length === 0) {
      return "<div class=\"ref-section\">" + _0xcb8b3f(_0x3de1d3) + "</div>";
    }
    var _0x2e562c = [];
    _0xb90660.forEach(function (_0x43c64c) {
      var _0xfbc95 = _0x43c64c.match(/^###FILEREF: (.+)/);
      _0xfbc95 && _0x2e562c.push(_0x43c64c);
    });
    _0x2e562c.length === 0 && (_0xb90660 = _0x3de1d3.split(/(?=^### (?:\S+[\/\\]\S+))/m).filter(function (_0x481649) {
      {
        return _0x481649.trim();
      }
    }), _0x2e562c = _0xb90660);
    var _0x47cea7 = _0x2e562c.length;
    var _0x2531de = "<details class=\"ref-section\"><summary class=\"ref-summary\">📎 引用了 " + _0x47cea7 + " 个文件/文件夹</summary>";
    _0x2e562c.forEach(function (_0x1bac2b) {
      {
        var _0x60e07c = _0x1bac2b.match(/^###FILEREF: (.+)/) || _0x1bac2b.match(/^### (\S+[\/\\]\S.*)/);
        var _0x43db36 = _0x60e07c ? _0x60e07c[1].trim() : "file";
        var _0x1405fd = _0x1bac2b.match(/```[\s\S]*?```/);
        var _0x50a94d = _0x1405fd ? _0x1405fd[0] : "";
        var _0x41f01f = _0x55a45e(_0x43db36);
        var _0x40d881 = _0x41f01f.isFolder ? "📁" : "📄";
        if (_0x2531de += "<details class=\"ref-file\"><summary class=\"ref-file-name ref-clickable\" data-ref-path=\"" + _0xcb8b3f(_0x41f01f.path) + "\"" + (_0x41f01f.lines ? " data-ref-lines=\"" + _0xcb8b3f(_0x41f01f.lines) + "\"" : "") + " title=\"点击打开\">" + _0x40d881 + " " + _0xcb8b3f(_0x43db36) + "</summary>", _0x50a94d) {
          var _0x4a84a5 = _0x50a94d.replace(/^```\w*\n?/, "").replace(/\n?```$/, "");
          var _0x4ff992 = _0x4a84a5.split("\n");
          var _0x185071 = _0x4ff992.length > 20 ? _0x4ff992.slice(0, 20).join("\n") + "\n... (" + (_0x4ff992.length - 20) + " more lines)" : _0x4a84a5;
          _0x2531de += "<pre class=\"ref-code\">" + _0xcb8b3f(_0x185071) + "</pre>";
        }
        _0x2531de += "</details>";
      }
    });
    _0x2531de += "</details>";
    return _0x2531de;
  }
  function _0x310a6c(_0x218212, _0x698994, _0x48a999, _0x5290b2, _0x2a7b37) {
    if (_0x5290b2) {
      var _0x4dfec2 = _0x698994.split(/\n/)[0].replace(/\s*\n\[\d+\s*\u4e2a\u9644\u4ef6\]\s*$/, "").substring(0, 50);
      _0x2d05c5[_0x5290b2] = _0x4dfec2;
      _0x5290b2 !== _0x10b109 && _0x218212 !== "user" && (_0x58bb1d[_0x5290b2] = (_0x58bb1d[_0x5290b2] || 0) + 1, _0x1048d6());
    }
    var _0x2d6a0d = !_0x10b109 || !_0x5290b2 || _0x5290b2 === _0x10b109;
    _0x2d6a0d && (_0x23e187.style.display = "none");
    var _0x2cfd8f = {
      assistant: "<span class=\"msg-av av-ai\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line></svg></span> AI",
      user: "<span class=\"msg-av av-user\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg></span> &#x4F60;",
      system: "<span class=\"msg-av av-sys\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line></svg></span> &#x7cfb;&#x7edf;"
    };
    var _0x2e4c65 = document.createElement("div");
    _0x2e4c65.className = "msg " + _0x218212;
    _0x5290b2 && _0x2e4c65.setAttribute("data-session", _0x5290b2);
    _0x2d6a0d || (_0x2e4c65.style.display = "none");
    var _0x336ca4;
    if (_0x218212 === "system") {
      var _0x5e08f4 = _0x698994.replace(/\s*\n\[\d+\s*\u4e2a\u9644\u4ef6\]\s*$/, "").trim();
      _0x336ca4 = "<div class=\"msg-bubble\"><div class=\"msg-body\" style=\"white-space:pre-wrap\">" + _0xcb8b3f(_0x5e08f4) + "</div></div>";
    } else {
      if (_0x218212 === "user") {
        {
          var _0x21f316 = _0x698994.split(/\n\n?---\nReferenced files:\n\n/);
          var _0x57ff47 = _0x21f316[0].replace(/\s*\n\[\d+\s*\u4e2a\u9644\u4ef6\]\s*$/, "").trim();
          var _0x4cc714 = _0x6c1c04(_0x57ff47);
          if (_0x21f316.length > 1) {
            {
              var _0x556f2a = _0x301edc(_0x21f316[1]);
              _0x336ca4 = "<div class=\"msg-bubble\"><div class=\"msg-body\">" + _0x4cc714 + "</div>" + _0x556f2a + "</div>";
            }
          } else {
            _0x336ca4 = "<div class=\"msg-bubble\"><div class=\"msg-body\">" + _0x4cc714 + "</div></div>";
          }
        }
      } else {
        _0x336ca4 = "<div class=\"msg-bubble\"><div class=\"msg-body\">" + _0x6c1c04(_0x698994) + "</div></div>";
      }
    }
    _0x2e4c65.innerHTML = "<div class=\"msg-meta\">" + (_0x2cfd8f[_0x218212] || _0x218212) + " &middot; " + _0x2428e3(_0x48a999) + "</div>" + _0x336ca4;
    _0x218212 === "user" && (_0x2e4c65.style.cursor = "pointer", _0x2e4c65.title = "点击复制到输入框", _0x2e4c65.addEventListener("click", function (_0x1e11a7) {
      {
        var _0x32aa22 = _0x1e11a7.target.closest(".ref-clickable");
        if (_0x32aa22) {
          _0x1e11a7.stopPropagation();
          var _0x219852 = _0x32aa22.getAttribute("data-ref-path") || "";
          var _0x3eba9c = _0x32aa22.getAttribute("data-ref-lines") || null;
          _0x219852 && _0x22b854.postMessage({
            type: "openFile",
            path: _0x219852,
            lines: _0x3eba9c
          });
          return;
        }
        if (!_0x1e11a7.target.closest(".ref-section")) {
          var _0x5b9da3 = _0x698994.split(/\n\n?---\nReferenced files:\n\n/)[0];
          _0x5b9da3 = _0x5b9da3.replace(/\s*\n\[\d+\s*\u4e2a\u9644\u4ef6\]\s*$/, "").trim();
          _0x3b4c34();
          _0x2a7b37 && _0x2a7b37.length > 0 && _0x2a7b37.forEach(function (_0x3986de) {
            _0xd8c86b(_0x3986de.path, _0x3986de.name || _0x3986de.path.split("/").pop() || _0x3986de.path, _0x3986de.isFolder || false, _0x3986de.lines || null);
          });
          _0x52e6cb(_0x5b9da3);
          _0xd6a522.focus();
          _0xf2d1e7();
          _0x2a2b34();
          _0x59d484();
        }
      }
    }));
    _0x171601.appendChild(_0x2e4c65);
    var _0xb3cab9 = 300;
    var _0x17d1ed = _0x171601.querySelectorAll(".msg");
    if (_0x17d1ed.length > _0xb3cab9) {
      for (var _0x1ed017 = 0; _0x1ed017 < _0x17d1ed.length - _0xb3cab9; _0x1ed017++) {
        _0x17d1ed[_0x1ed017].remove();
      }
    }
    _0x171601.scrollTop = _0x171601.scrollHeight;
  }
  function _0x351705(_0x1adadc, _0x1f0193, _0x560235) {
    var _0x19c746 = document.getElementById("tlog");
    var _0x4eca58 = document.getElementById("ttable");
    _0x19c746.style.display = "block";
    var _0x1a202a = document.createElement("tr");
    _0x1a202a.id = "tr-" + _0x1adadc;
    _0x1a202a.innerHTML = "<td>#" + _0x1adadc + "</td><td>" + _0x1f0193 + "</td><td id=\"tc-" + _0x1adadc + "\"></td>";
    _0x4eca58.appendChild(_0x1a202a);
    _0x2623ea(_0x1adadc, _0x560235);
  }
  function _0x2623ea(_0x2bac23, _0x218850) {
    var _0x2a65b9 = document.getElementById("tc-" + _0x2bac23);
    if (_0x2a65b9) {
      {
        var _0x3d4cb8 = {
          pending: "&#x23F3;",
          success: "&#x2705;",
          fail: "&#x274C;"
        };
        var _0x537695 = {
          pending: "pend-c",
          success: "ok-c",
          fail: "fail-c"
        };
        _0x2a65b9.className = _0x537695[_0x218850] || "";
        _0x2a65b9.innerHTML = _0x3d4cb8[_0x218850] || _0x218850;
      }
    }
  }
  function _0x219b32() {
    _0x204b99 && (clearInterval(_0x204b99), _0x204b99 = null);
    _0x1b51f2 && (clearTimeout(_0x1b51f2), _0x1b51f2 = null);
    _0x4601f5 && (clearTimeout(_0x4601f5), _0x4601f5 = null);
  }
  function _0x221610(_0x48126f, _0x43c518) {
    {
      _0x219b32();
      _0x54bd01 = _0x43c518 || Date.now();
      var _0x1c33da = document.getElementById("testChk").checked;
      var _0x420be2 = document.getElementById("autoChk").checked;
      _0x204b99 = setInterval(function () {
        {
          var _0x1859c3 = Date.now() - _0x54bd01;
          var _0x3974a5 = _0x48126f - _0x1859c3;
          var _0x270cc9 = Math.max(0, Math.ceil(_0x3974a5 / 1000));
          var _0x34d6a0 = _0x64d8af(Math.floor(_0x270cc9 / 60)) + ":" + _0x64d8af(_0x270cc9 % 60);
          _0x268229.textContent = _0x34d6a0;
          _0x26a6aa.textContent = _0x34d6a0;
          var _0x3762b8 = Math.max(0, _0x3974a5 / _0x48126f * 100);
          _0x501d85.style.width = _0x3762b8 + "%";
          var _0x3f14dd = _0x3762b8 > 40 ? "" : _0x3762b8 > 20 ? "warn" : "danger";
          _0x268229.className = "timer " + _0x3f14dd;
          _0x26a6aa.className = "chip-time " + _0x3f14dd;
          _0x501d85.className = "bfill " + _0x3f14dd;
        }
      }, 500);
      _0x1c33da && _0x3be2ab ? (_0x5dbdc9.textContent = Math.round(_0x48126f / 60000) + "min", _0xef197e.textContent = "#" + _0x3124c2 + " -> " + Math.round(_0x48126f / 60000) + "min") : (_0x5dbdc9.textContent = "", _0xef197e.textContent = _0x420be2 ? Math.round(_0x48126f / 60000) + "min" : "");
    }
  }
  function _0x59c89c() {
    {
      var _0x2d0556 = document.getElementById("sessionSidebar");
      _0x2d0556 && (_0xdfb83.length <= 1 ? _0x2d0556.classList.add("auto-hidden") : _0x2d0556.classList.remove("auto-hidden"));
    }
  }
  function _0x2a90fb() {}
  function _0x50f2ae() {
    var _0x337dbd = "temp_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    var _0x3e8c41 = {
      type: "createTempSession",
      tempId: _0x337dbd
    };
    var _0x59a7ab = {
      type: "startNewChat",
      text: ""
    };
    _0x22b854.postMessage(_0x3e8c41);
    _0x22b854.postMessage(_0x59a7ab);
    _0x2abfb2(_0x337dbd);
    _0x535f4b(_0x337dbd);
    setTimeout(function () {
      {
        _0x310a6c("system", "✅ 已打开新的 Cursor Chat。请选择 Agent 模式和模型，然后直接发送；如果输入框为空，请粘贴（Cmd+V）后发送。", Date.now(), _0x337dbd);
      }
    }, 100);
  }
  function _0x1048d6() {
    var _0x194e18 = document.getElementById("sessionList");
    var _0x221c56 = document.getElementById("topTabs");
    var _0x320661 = document.getElementById("bottomWaiters");
    var _0x27d366 = document.body.classList.contains("layout-tab");
    if (_0x194e18 && (_0x194e18.innerHTML = ""), _0x221c56 && (_0x221c56.innerHTML = "", _0x221c56.style.display = _0x27d366 ? "flex" : "none"), _0x320661 && (_0x320661.innerHTML = "", _0x320661.style.display = _0x27d366 ? "flex" : "none"), _0xdfb83.length > _0x3a3276 && (_0x3a3276 = _0xdfb83.length), _0x59c89c(), _0x10b109 && !_0xdfb83.find(function (_0x1f7dfa) {
      return _0x1f7dfa.id === _0x10b109;
    }) && _0x2abfb2(null), _0xdfb83.length > 0 && !_0x10b109 && (_0x2abfb2(_0xdfb83[0].id), _0x535f4b(_0x10b109)), _0xdfb83.forEach(function (_0x131a3b, _0x50a21e) {
      var _0x1b984a = document.createElement("div");
      var _0x2b02dd = _0x10b109 === _0x131a3b.id;
      _0x1b984a.className = "session-item" + (_0x2b02dd ? " active" : "");
      var _0x52f985 = _0x4958d2.find(function (_0x4c1b3a) {
        return _0x4c1b3a.sessionId === _0x131a3b.id;
      });
      var _0x364cbc = !!_0x52f985;
      var _0x1ad0ee = _0x364cbc ? "session-item-status waiting" : _0x131a3b.waiting ? "session-item-status working" : "session-item-status done";
      var _0x3eadb0 = "";
      if (_0x364cbc && _0x52f985 && _0x52f985.timestamp) {
        {
          var _0x29bedd = Number(document.getElementById("cloudTo").value) * 60000;
          var _0x1ed2bb = Date.now() - _0x52f985.timestamp;
          var _0x247fd3 = Math.max(0, _0x29bedd - _0x1ed2bb);
          var _0x1edcb8 = Math.ceil(_0x247fd3 / 1000);
          var _0x4f8597 = _0x247fd3 / _0x29bedd * 100;
          var _0x4bedd8 = _0x4f8597 > 40 ? "" : _0x4f8597 > 20 ? " warn" : " danger";
          _0x3eadb0 = "<span class=\"session-item-timer" + _0x4bedd8 + "\" data-sid=\"" + _0x131a3b.id + "\">" + _0x64d8af(Math.floor(_0x1edcb8 / 60)) + ":" + _0x64d8af(_0x1edcb8 % 60) + "</span>";
        }
      }
      var _0x31b951 = _0x131a3b.title || "Chat " + (_0x50a21e + 1);
      var _0x2da17a = _0x326dd2(_0x131a3b.id);
      var _0x369e3e = _0x58bb1d[_0x131a3b.id] || 0;
      var _0x28f124 = _0x2d05c5[_0x131a3b.id] || "";
      var _0x476055 = _0x36af19(_0x131a3b.id) ? "<span class=\"draft-tag\">&#x270F; 草稿</span>" : "";
      var _0x1dc76e = _0x369e3e > 0 ? "<span class=\"unread-badge\">" + (_0x369e3e > 99 ? "99+" : _0x369e3e) + "</span>" : "";
      var _0x53df1f = _0x364cbc ? "" : "<span class=\"si-close\" title=\"关闭\">&#x2715;</span>";
      _0x1b984a.style.borderLeftColor = _0x2b02dd ? _0x2da17a : "";
      _0x1b984a.innerHTML = "<div class=\"session-item-row\"><span class=\"" + _0x1ad0ee + "\"></span><span class=\"session-item-title\" title=\"双击修改标题\">" + _0xcb8b3f(_0x31b951) + "<span class=\"title-edit-hint\">&#x270E;</span></span><span class=\"session-item-right\">" + _0x3eadb0 + "</span></div><div class=\"session-item-preview\">" + _0xcb8b3f(_0x28f124.substring(0, 40)) + "</div><div class=\"session-item-meta\" style=\"display:flex; justify-content:space-between; align-items:center; margin-top:4px;\"><span class=\"session-item-sid copyable-token\" data-token=\"" + _0xcb8b3f(_0x131a3b.id) + "\" title=\"点击复制 pchat-token\" style=\"cursor:pointer; color:var(--accent); font-family:monospace; background:color-mix(in srgb, var(--accent) 10%, transparent); padding:2px 6px; border-radius:4px; font-weight:500;\">&#x1F4CB; " + _0xcb8b3f(_0x131a3b.id) + "</span>" + _0x476055 + "</div>" + _0x1dc76e + _0x53df1f;
      (function (_0x17ffb7, _0xaa0611) {
        {
          function _0x4fb413(_0x49b029, _0x129572, _0xa40aca) {
            {
              _0x49b029.addEventListener("dblclick", function (_0x3512f6) {
                _0x3512f6.stopPropagation();
                var _0x347c34 = document.createElement("input");
                _0x347c34.type = "text";
                _0x347c34.value = _0xa40aca;
                _0x347c34.className = "session-title-edit";
                _0x347c34.style.cssText = "width:100%;box-sizing:border-box;font:inherit;background:var(--input-bg,rgba(255,255,255,0.1));border:1px solid var(--accent,#4f8ef7);border-radius:3px;padding:0 4px;color:inherit;outline:none;min-width:0;";
                _0x49b029.replaceWith(_0x347c34);
                _0x347c34.focus();
                _0x347c34.select();
                var _0x527fce = false;
                function _0x1864e9() {
                  if (!_0x527fce) {
                    {
                      _0x527fce = true;
                      var _0x4807eb = _0x347c34.value.trim() || _0xa40aca;
                      var _0x3440b5 = document.createElement("span");
                      _0x3440b5.className = "session-item-title";
                      _0x3440b5.title = "双击修改标题";
                      _0x3440b5.textContent = _0x4807eb;
                      _0x347c34.replaceWith(_0x3440b5);
                      _0x4807eb !== _0xa40aca && _0x22b854.postMessage({
                        type: "renameSession",
                        sessionId: _0x129572,
                        title: _0x4807eb
                      });
                      _0x4fb413(_0x3440b5, _0x129572, _0x4807eb);
                    }
                  }
                }
                function _0x51e569() {
                  {
                    if (!_0x527fce) {
                      _0x527fce = true;
                      var _0x3e191b = document.createElement("span");
                      _0x3e191b.className = "session-item-title";
                      _0x3e191b.title = "双击修改标题";
                      _0x3e191b.textContent = _0xa40aca;
                      _0x347c34.replaceWith(_0x3e191b);
                      _0x4fb413(_0x3e191b, _0x129572, _0xa40aca);
                    }
                  }
                }
                _0x347c34.addEventListener("keydown", function (_0x179e28) {
                  {
                    _0x179e28.key === "Enter" ? (_0x179e28.preventDefault(), _0x1864e9()) : _0x179e28.key === "Escape" && (_0x179e28.preventDefault(), _0x51e569());
                    _0x179e28.stopPropagation();
                  }
                });
                _0x347c34.addEventListener("blur", _0x1864e9);
                _0x347c34.addEventListener("click", function (_0x3460c1) {
                  _0x3460c1.stopPropagation();
                });
              });
            }
          }
          var _0x18831c = _0x1b984a.querySelector(".session-item-title");
          _0x4fb413(_0x18831c, _0x17ffb7, _0xaa0611);
        }
      })(_0x131a3b.id, _0x31b951);
      _0x1b984a.addEventListener("click", function (_0xaa1625) {
        if (!(_0xaa1625.target.closest && _0xaa1625.target.closest(".si-close"))) {
          if (_0xaa1625.target.closest && _0xaa1625.target.closest(".copyable-token")) {
            _0xaa1625.stopPropagation();
            var _0xa9b230 = _0xaa1625.target.closest(".copyable-token");
            var _0x32cf9d = _0xa9b230.getAttribute("data-token");
            _0x32cf9d && navigator.clipboard && navigator.clipboard.writeText(_0x32cf9d).then(function () {
              {
                var _0x728d2f = _0xa9b230.textContent;
                _0xa9b230.textContent = "已复制";
                setTimeout(function () {
                  _0xa9b230.textContent = _0x728d2f;
                }, 1000);
              }
            }).catch(function () {
              var _0x1a6aeb = {
                type: "copyText",
                text: _0x32cf9d
              };
              _0x22b854.postMessage(_0x1a6aeb);
              var _0xbf9a8f = _0xa9b230.textContent;
              _0xa9b230.textContent = "已复制";
              setTimeout(function () {
                _0xa9b230.textContent = _0xbf9a8f;
              }, 1000);
            });
            return;
          }
          if (!(_0xaa1625.detail >= 2 && _0xaa1625.target.closest && _0xaa1625.target.closest(".session-item-title"))) {
            {
              var _0x2a3be9 = _0x10b109;
              _0x2a3be9 && _0x2a3be9 !== _0x131a3b.id ? _0xeb52e4(_0x2a3be9) : !_0x2a3be9 && _0x21bccf && _0x21bccf !== _0x131a3b.id && _0xeb52e4(_0x21bccf);
              _0x2abfb2(_0x131a3b.id);
              _0x21bccf = null;
              _0x58bb1d[_0x131a3b.id] = 0;
              _0x4e129e(_0x131a3b.id);
              var _0x5c307a = _0x4958d2.find(function (_0x460dd4) {
                {
                  return _0x460dd4.sessionId === _0x131a3b.id;
                }
              });
              if (_0x5c307a) {
                _0x3c6645 = _0x5c307a.id;
                _0x217c23.textContent = _0x5c307a.prompt;
                _0x4d2f69.classList.add("show");
                _0x26c9e2("waiting");
                var _0x15dd50 = Number(document.getElementById("cloudTo").value) * 60000;
                _0x221610(_0x15dd50, _0x5c307a.timestamp);
              } else {
                _0x219b32();
                _0x4d2f69.classList.remove("show");
                _0x26c9e2("idle");
              }
              _0x59d484();
              _0x1048d6();
              _0x535f4b(_0x131a3b.id);
              _0x21e896();
            }
          }
        }
      });
      (function (_0x47f2df, _0x4237cb) {
        {
          _0x1b984a.addEventListener("contextmenu", function (_0x40ff4f) {
            _0x40ff4f.preventDefault();
            _0x40ff4f.stopPropagation();
            _0xd97306(_0x40ff4f.clientX, _0x40ff4f.clientY, _0x47f2df, _0x4237cb);
          });
        }
      })(_0x131a3b.id, _0x31b951);
      var _0x124366 = _0x1b984a.querySelector(".si-close");
      if (_0x124366 && _0x124366.addEventListener("click", function (_0x4c009f) {
        _0x4c009f.stopPropagation();
        var _0x11beb1 = _0x131a3b.title || "Chat " + (_0xdfb83.indexOf(_0x131a3b) + 1);
        _0xe5b56d("关闭「" + _0x11beb1 + "」？\n该对话的所有记录将被清空，操作不可撤销。").then(function (_0x243402) {
          var _0x501334 = {
            type: "closeSession",
            sessionId: _0x131a3b.id
          };
          _0x243402 && _0x22b854.postMessage(_0x501334);
        });
      }), _0x194e18 && _0x194e18.appendChild(_0x1b984a), _0x27d366 && _0x221c56) {
        var _0x55f3df = document.createElement("div");
        _0x55f3df.className = "top-tab-item" + (_0x2b02dd ? " active" : "");
        var _0x41ccbc = "";
        _0x364cbc ? _0x41ccbc = "<span class=\"tab-color-dot\" style=\"background:var(--warn);animation:pulse-dot 1.5s infinite\"></span>" : _0x131a3b.waiting ? _0x41ccbc = "<span class=\"tab-color-dot\" style=\"background:var(--ok)\"></span>" : _0x41ccbc = "<span class=\"tab-color-dot\" style=\"background:var(--desc)\"></span>";
        var _0x3a701c = _0x36af19(_0x131a3b.id) ? "<span class=\"tab-draft\">&#x270F;</span>" : "";
        var _0x12fc3d = _0x364cbc ? "" : "<span class=\"top-tab-close\" title=\"关闭\">&#x2715;</span>";
        if (_0x55f3df.innerHTML = _0x41ccbc + "<span class=\"top-tab-label\">" + _0xcb8b3f(_0x31b951) + "</span> <span style=\"opacity:0.6;font-family:monospace;font-size:10px\">(" + _0xcb8b3f(_0x131a3b.id) + ")</span>" + _0x3a701c + _0x12fc3d, _0x55f3df.setAttribute("data-sid", _0x131a3b.id), _0x2b02dd && (_0x55f3df.style.boxShadow = "inset 0 2px 0 0 " + _0x2da17a), !_0x364cbc) {
          var _0x14ddef = _0x55f3df.querySelector(".top-tab-close");
          _0x14ddef && function (_0x20600a, _0x3b2625) {
            _0x14ddef.addEventListener("click", function (_0xe3ea09) {
              {
                _0xe3ea09.stopPropagation();
                _0xe5b56d("关闭「" + _0x3b2625 + "」？\n该对话的所有记录将被清空，操作不可撤销。").then(function (_0x2080b3) {
                  var _0xb99f74 = {
                    type: "closeSession",
                    sessionId: _0x20600a
                  };
                  _0x2080b3 && _0x22b854.postMessage(_0xb99f74);
                });
              }
            });
          }(_0x131a3b.id, _0x31b951);
        }
        (function (_0x444a8a, _0x43d122) {
          {
            var _0x518c74 = _0x55f3df.querySelector(".top-tab-label");
            _0x518c74 && _0x518c74.addEventListener("dblclick", function (_0x3a4271) {
              _0x3a4271.stopPropagation();
              var _0x328ea4 = document.createElement("input");
              _0x328ea4.type = "text";
              _0x328ea4.value = _0x43d122;
              _0x328ea4.style.cssText = "width:auto;min-width:60px;max-width:160px;box-sizing:border-box;font:inherit;font-size:11px;background:var(--ibg,rgba(255,255,255,0.1));border:1px solid var(--accent);border-radius:3px;padding:1px 4px;color:inherit;outline:none;";
              _0x518c74.replaceWith(_0x328ea4);
              _0x328ea4.focus();
              _0x328ea4.select();
              var _0x1c6505 = false;
              function _0x4750ec() {
                if (!_0x1c6505) {
                  {
                    _0x1c6505 = true;
                    var _0x234a88 = _0x328ea4.value.trim() || _0x43d122;
                    _0x234a88 !== _0x43d122 && _0x22b854.postMessage({
                      type: "renameSession",
                      sessionId: _0x444a8a,
                      title: _0x234a88
                    });
                    _0x1048d6();
                  }
                }
              }
              _0x328ea4.addEventListener("keydown", function (_0x155c62) {
                _0x155c62.key === "Enter" ? (_0x155c62.preventDefault(), _0x4750ec()) : _0x155c62.key === "Escape" && (_0x155c62.preventDefault(), _0x1c6505 = true, _0x1048d6());
                _0x155c62.stopPropagation();
              });
              _0x328ea4.addEventListener("blur", _0x4750ec);
              _0x328ea4.addEventListener("click", function (_0xf0006b) {
                _0xf0006b.stopPropagation();
              });
            });
          }
        })(_0x131a3b.id, _0x31b951);
        (function (_0x409b08, _0x57cde6) {
          _0x55f3df.addEventListener("contextmenu", function (_0x2252e7) {
            {
              _0x2252e7.preventDefault();
              _0x2252e7.stopPropagation();
              _0xd97306(_0x2252e7.clientX, _0x2252e7.clientY, _0x409b08, _0x57cde6);
            }
          });
        })(_0x131a3b.id, _0x31b951);
        _0x55f3df.addEventListener("click", function (_0x179011) {
          if (!(_0x179011.target.closest && _0x179011.target.closest(".top-tab-close")) && !(_0x179011.detail >= 2 && _0x179011.target.closest && _0x179011.target.closest(".top-tab-label")) && _0x10b109 !== _0x131a3b.id) {
            var _0x520cc5 = _0x10b109;
            _0x520cc5 && _0x520cc5 !== _0x131a3b.id ? _0xeb52e4(_0x520cc5) : !_0x520cc5 && _0x21bccf && _0x21bccf !== _0x131a3b.id && _0xeb52e4(_0x21bccf);
            _0x2abfb2(_0x131a3b.id);
            _0x21bccf = null;
            _0x58bb1d[_0x131a3b.id] = 0;
            _0x4e129e(_0x131a3b.id);
            var _0x215404 = _0x4958d2.find(function (_0x1c48c9) {
              return _0x1c48c9.sessionId === _0x131a3b.id;
            });
            if (_0x215404) {
              _0x3c6645 = _0x215404.id;
              _0x217c23.textContent = _0x215404.prompt;
              _0x4d2f69.classList.add("show");
              _0x26c9e2("waiting");
              var _0x2568a8 = Number(document.getElementById("cloudTo").value) * 60000;
              _0x221610(_0x2568a8, _0x215404.timestamp);
            } else {
              _0x219b32();
              _0x4d2f69.classList.remove("show");
              _0x26c9e2("idle");
            }
            _0x59d484();
            _0x1048d6();
            _0x535f4b(_0x131a3b.id);
            _0x21e896();
          }
        });
        _0x221c56.appendChild(_0x55f3df);
      }
    }), _0x194e18) {
      var _0x19f66a = document.createElement("div");
      _0x19f66a.className = "session-new-chat-btn";
      _0x19f66a.innerHTML = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg> 新建对话";
      _0x19f66a.addEventListener("click", _0x50f2ae);
      _0x194e18.appendChild(_0x19f66a);
    }
    if (_0x27d366 && _0x221c56) {
      var _0x41256d = document.createElement("div");
      _0x41256d.className = "top-tab-item top-tab-new";
      _0x41256d.innerHTML = "<svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg> 新建";
      _0x41256d.addEventListener("click", _0x50f2ae);
      _0x221c56.appendChild(_0x41256d);
    }
    if (_0x27d366 && _0x320661) {
      _0xdfb83.forEach(function (_0x401fd5) {
        var _0xa1bd0b = _0x4958d2.find(function (_0x229a48) {
          {
            return _0x229a48.sessionId === _0x401fd5.id && _0x229a48.prompt;
          }
        });
        if (_0xa1bd0b) {
          {
            var _0x30975f = document.createElement("div");
            var _0xa94e61 = _0x10b109 === _0xa1bd0b.sessionId;
            _0x30975f.className = "waiter-capsule" + (_0xa94e61 ? " active" : "");
            var _0x2829eb = _0x326dd2(_0xa1bd0b.sessionId);
            _0xa94e61 && (_0x30975f.style.cssText = "border: 1px solid " + _0x2829eb + "; box-shadow: 0 0 0 1px " + _0x2829eb + " inset; color: var(--fg); font-weight: 600; background: color-mix(in srgb, " + _0x2829eb + " 15%, transparent);");
            var _0x47daa2 = _0xcb8b3f(_0xa1bd0b.prompt);
            _0x30975f.innerHTML = "<div class=\"waiter-capsule-dot\"></div><div class=\"waiter-capsule-text\" title=\"" + _0x47daa2 + "\">" + _0x47daa2 + " <span style=\"opacity:0.6;font-family:monospace;font-size:10px\">(" + _0xcb8b3f(_0xa1bd0b.sessionId) + ")</span></div>";
            (function (_0x40292d, _0x5d4334) {
              _0x30975f.addEventListener("contextmenu", function (_0x2a18da) {
                _0x2a18da.preventDefault();
                _0x2a18da.stopPropagation();
                _0xd97306(_0x2a18da.clientX, _0x2a18da.clientY, _0x40292d, _0x5d4334);
              });
            })(_0xa1bd0b.sessionId, _0x401fd5.title || "Chat " + (_0xdfb83.indexOf(_0x401fd5) + 1));
            _0x30975f.addEventListener("click", function () {
              {
                if (_0x10b109 !== _0xa1bd0b.sessionId) {
                  var _0x3f8d36 = _0x10b109;
                  _0x3f8d36 && _0x3f8d36 !== _0xa1bd0b.sessionId && _0xeb52e4(_0x3f8d36);
                  _0x2abfb2(_0xa1bd0b.sessionId);
                  _0x21bccf = null;
                  _0x58bb1d[_0xa1bd0b.sessionId] = 0;
                  _0x4e129e(_0xa1bd0b.sessionId);
                  _0x3c6645 = _0xa1bd0b.id;
                  _0x217c23.textContent = _0xa1bd0b.prompt;
                  _0x4d2f69.classList.add("show");
                  _0x26c9e2("waiting");
                  var _0xbaaa8d = Number(document.getElementById("cloudTo").value) * 60000;
                  _0x221610(_0xbaaa8d, _0xa1bd0b.timestamp);
                  _0x59d484();
                  _0x1048d6();
                  _0x535f4b(_0xa1bd0b.sessionId);
                  _0x21e896();
                }
              }
            });
            _0x320661.appendChild(_0x30975f);
          }
        }
      });
      var _0xab653d = document.createElement("div");
      _0xab653d.className = "waiter-capsule waiter-capsule-new";
      _0xab653d.innerHTML = "<svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg> 新建对话";
      _0xab653d.addEventListener("click", _0x50f2ae);
      _0x320661.appendChild(_0xab653d);
    }
    _0x2ddc71 && typeof _0x4f757e == "function" && _0x4f757e();
    _0x5c7577();
  }
  function _0x535f4b(_0x18f8f4) {
    var _0x42e211 = _0x171601.querySelectorAll(".msg");
    var _0x3e0813 = false;
    _0x42e211.forEach(function (_0x515709) {
      {
        var _0x348815 = _0x515709.getAttribute("data-session");
        !_0x18f8f4 || !_0x348815 || _0x348815 === _0x18f8f4 ? (_0x515709.style.display = "", _0x3e0813 = true) : _0x515709.style.display = "none";
      }
    });
    _0x23e187.style.display = _0x3e0813 ? "none" : "";
    _0x171601.scrollTop = _0x171601.scrollHeight;
  }
  function _0x21e896() {
    {
      var _0x227e91 = document.getElementById("waiterBar");
      _0x227e91 && (_0x227e91.innerHTML = "");
      typeof _0x34627c == "function" && _0x34627c();
    }
  }
  var _0x2705bc = "primary";
  function _0x426de2(_0x215456) {
    _0x2705bc = _0x215456 || "primary";
    var _0x55c9c2 = document.getElementById("secondaryOverlay");
    _0x55c9c2 && (_0x55c9c2.style.display = _0x2705bc === "secondary" ? "flex" : "none", _0x3e274f());
  }
  (function () {
    var _0x27a546 = document.getElementById("btnCloseDualPanel");
    _0x27a546 && _0x27a546.addEventListener("click", function () {
      var _0x474b2a = {
        type: "secondaryCloseDualPanel"
      };
      _0x22b854.postMessage(_0x474b2a);
    });
  })();
  window.addEventListener("message", function (_0x490abe) {
    var _0x6e8ac4 = _0x490abe.data;
    if (_0x6e8ac4.type === "windowState") {
      {
        _0x5e9639(_0x6e8ac4);
        return;
      }
    }
    if (_0x6e8ac4.type === "setMode") {
      {
        _0x426de2(_0x6e8ac4.mode);
        return;
      }
    }
    if (_0x6e8ac4.type === "resetUi") {
      {
        if (_0x171601) {
          var _0x39b2b6 = document.getElementById("empty");
          _0x171601.innerHTML = "";
          _0x39b2b6 && (_0x39b2b6.style.display = "", _0x171601.appendChild(_0x39b2b6));
        }
        _0xdfb83 = [];
        _0x4958d2 = [];
        _0x3c6645 = null;
        _0x2abfb2(null);
        _0x21bccf = null;
        _0x58bb1d = {};
        _0x2d05c5 = {};
        _0x4f6a1d = {};
        _0x3203a0 = [];
        _0x1048d6();
        typeof _0x57254a == "function" && _0x57254a();
        return;
      }
    }
    if (_0x6e8ac4.type === "syncWaiters") {
      var _0x4b2037 = _0x4958d2.length;
      _0x4958d2 = _0x6e8ac4.waiters || [];
      _0x6e8ac4.sessions && (_0xdfb83 = _0x6e8ac4.sessions, _0x1048d6());
      var _0x4e090e = document.getElementById("testChk").checked;
      if (_0x4958d2.length > 0 && _0x2329ce >= 0 && (clearTimeout(_0x4601f5), _0x4601f5 = null, _0x2623ea(_0x2329ce, "success"), _0x2329ce = -1), _0x4958d2.length === 0) {
        _0x3c6645 = null;
        _0x4b2037 > 0 ? _0x26c9e2("working") : _0x26c9e2("idle");
        _0x4d2f69.classList.remove("show");
        _0x5e35cd(false);
        _0x219b32();
        _0x21e896();
        _0x2a2b34();
        _0x42b40f();
      } else {
        if (!_0x3c6645 || !_0x4958d2.find(function (_0x4f9964) {
          return _0x4f9964.id === _0x3c6645;
        })) {
          {
            var _0x1190c8 = _0x21bccf || _0x10b109;
            var _0x37f825 = _0x1190c8 ? _0x4958d2.find(function (_0x4f04aa) {
              return _0x4f04aa.sessionId === _0x1190c8;
            }) : null;
            _0x3c6645 = _0x37f825 ? _0x37f825.id : _0x4958d2[0].id;
          }
        }
        if (_0x5a8ccf() && _0x21bccf) {
          {
            var _0x37fbe8 = _0x4958d2.find(function (_0x518cc7) {
              return _0x518cc7.sessionId === _0x21bccf;
            });
            _0x37fbe8 && (_0x3c6645 = _0x37fbe8.id);
          }
        }
        var _0x3035b9 = _0x4958d2.find(function (_0x4fb39b) {
          return _0x4fb39b.id === _0x3c6645;
        });
        if (!_0x4e090e && _0x3203a0.length > 0) {
          var _0x512292 = _0x3203a0.shift();
          _0x57254a();
          _0x22b854.postMessage({
            type: "userReply",
            text: _0x512292.text,
            attachments: (_0x512292.attachments || []).map(function (_0x24f217) {
              {
                var _0x3ef4e2 = {
                  type: _0x24f217.type,
                  data: _0x24f217.data,
                  mediaType: _0x24f217.mediaType,
                  name: _0x24f217.name
                };
                return _0x3ef4e2;
              }
            }),
            waiterId: _0x3c6645
          });
          return;
        }
        if (_0x365764 = false, _0x1876c4.style.display = "", _0x8fd6ba.classList.add("hidden"), _0x4e090e) {
          if (!_0x3be2ab) {
            _0x3be2ab = true;
            _0x3124c2 = 1;
            _0x3a921f.style.display = "inline-block";
            document.getElementById("tlog").style.display = "none";
            for (var _0x5edb9f = document.getElementById("ttable"); _0x5edb9f.rows.length > 1;) {
              _0x5edb9f.deleteRow(1);
            }
          }
          var _0x3c045f = Number(document.getElementById("initMin").value) * 60000;
          var _0x4757ae = Number(document.getElementById("stepMin").value) * 60000;
          var _0x3bf4ef = _0x3c045f + (_0x3124c2 - 1) * _0x4757ae;
          _0x26c9e2("testing");
          _0x217c23.textContent = _0x3035b9 ? _0x3035b9.prompt : "";
          _0x4d2f69.classList.add("show");
          _0x5e35cd(true);
          _0x221610(_0x3bf4ef, _0x3035b9 ? _0x3035b9.timestamp : undefined);
        } else {
          {
            var _0x148ab4 = _0x10b109 ? _0x4958d2.find(function (_0x1c9a19) {
              return _0x1c9a19.sessionId === _0x10b109;
            }) : null;
            var _0x1b8380 = !!_0x148ab4 || _0xdfb83.length <= 1;
            if (_0x1b8380) {
              var _0xc7fac4 = _0x148ab4 || _0x3035b9;
              var _0x2eb7e0 = Number(document.getElementById("cloudTo").value) * 60000;
              _0x26c9e2("waiting");
              _0x217c23.textContent = _0xc7fac4 ? _0xc7fac4.prompt : "";
              _0x4d2f69.classList.add("show");
              _0x5e35cd(true);
              _0x221610(_0x2eb7e0, _0xc7fac4 ? _0xc7fac4.timestamp : undefined);
            } else {
              _0x26c9e2("idle");
              _0x4d2f69.classList.remove("show");
              _0x5e35cd(true);
              _0x219b32();
            }
          }
        }
        _0x21e896();
        _0x42b40f();
      }
    } else {
      if (_0x6e8ac4.type === "assistantMessage") {
        _0x310a6c("assistant", _0x6e8ac4.content, _0x6e8ac4.timestamp, _0x6e8ac4.sessionId);
        _0x26c9e2("idle");
      } else {
        if (_0x6e8ac4.type === "userMessage") {
          _0x310a6c("user", _0x6e8ac4.content, _0x6e8ac4.timestamp, _0x6e8ac4.sessionId, _0x6e8ac4.refs);
        } else {
          if (_0x6e8ac4.type === "systemMessage") {
            _0x310a6c("system", _0x6e8ac4.content, _0x6e8ac4.timestamp, _0x6e8ac4.sessionId);
          } else {
            if (_0x6e8ac4.type === "init") {
              _0x26c9e2("idle");
            } else {
              if (_0x6e8ac4.type === "reloadHint") {
                _0x310a6c("system", "⚠️ 扩展已重载。如果之前有进行中的对话，请在 Cursor Chat 中发送任意消息以恢复连接。", Date.now());
              } else {
                if (_0x6e8ac4.type === "focusComposer") {
                  var _0x4fac75 = function (_0x4ee3e6) {
                    {
                      if (_0x2705bc === "primary") {
                        {
                          if (_0xd6a522) {
                            {
                              try {
                                _0xd6a522.focus();
                              } catch {}
                              return;
                            }
                          }
                          _0x4ee3e6 > 0 && requestAnimationFrame(function () {
                            _0x4fac75(_0x4ee3e6 - 1);
                          });
                        }
                      }
                    }
                  };
                  _0x4fac75(10);
                } else {
                  if (_0x6e8ac4.type === "replaceTempSession") {
                    {
                      var _0x361fa0 = _0x6e8ac4.tempId;
                      var _0x2dbdb3 = _0x6e8ac4.realId;
                      var _0x56b485 = _0x171601.querySelectorAll(".msg[data-session=\"" + _0x361fa0 + "\"]");
                      _0x56b485.forEach(function (_0x41539a) {
                        {
                          _0x41539a.setAttribute("data-session", _0x2dbdb3);
                        }
                      });
                      _0x10b109 === _0x361fa0 && _0x2abfb2(_0x2dbdb3);
                      _0x21bccf === _0x361fa0 && (_0x21bccf = _0x2dbdb3);
                      var _0x45fe83 = _0x4f6a1d[_0x361fa0];
                      _0x45fe83 && (_0x4f6a1d[_0x2dbdb3] = _0x45fe83, delete _0x4f6a1d[_0x361fa0]);
                      var _0x268942 = _0x58bb1d[_0x361fa0];
                      _0x268942 && (_0x58bb1d[_0x2dbdb3] = _0x268942, delete _0x58bb1d[_0x361fa0]);
                      var _0x22dc11 = _0x2d05c5[_0x361fa0];
                      _0x22dc11 && (_0x2d05c5[_0x2dbdb3] = _0x22dc11, delete _0x2d05c5[_0x361fa0]);
                      _0x3c6ed9[_0x361fa0] && (_0x3c6ed9[_0x2dbdb3] = _0x3c6ed9[_0x361fa0], delete _0x3c6ed9[_0x361fa0]);
                      _0xdfb83 = _0xdfb83.map(function (_0x3c9145) {
                        {
                          return _0x3c9145.id === _0x361fa0 ? {
                            id: _0x2dbdb3,
                            waiting: _0x3c9145.waiting,
                            title: _0x3c9145.title
                          } : _0x3c9145;
                        }
                      });
                      _0x1048d6();
                    }
                  } else {
                    if (_0x6e8ac4.type === "clearSessionHistory") {
                      var _0x2a3b87 = _0x6e8ac4.sessionId;
                      var _0x56b485 = _0x171601.querySelectorAll(".msg[data-session=\"" + _0x2a3b87 + "\"]");
                      _0x56b485.forEach(function (_0x3178db) {
                        _0x3178db.remove();
                      });
                      _0xdfb83 = _0xdfb83.filter(function (_0x49af5a) {
                        return _0x49af5a.id !== _0x2a3b87;
                      });
                      _0x1c24ba(_0x2a3b87);
                      delete _0x58bb1d[_0x2a3b87];
                      delete _0x2d05c5[_0x2a3b87];
                      _0x21bccf === _0x2a3b87 && (_0x21bccf = null);
                      _0x10b109 === _0x2a3b87 && (_0x2abfb2(null), _0x535f4b(null));
                      _0x42b40f();
                      _0x1048d6();
                      var _0x52683e = document.getElementById("empty");
                      _0x52683e && (_0x52683e.style.display = _0x171601.querySelectorAll(".msg").length === 0 ? "" : "none");
                    } else {
                      if (_0x6e8ac4.type === "restoreSettings") {
                        _0x4aee4e(_0x6e8ac4.settings);
                      } else {
                        if (_0x6e8ac4.type === "restoreQueue") {
                          Array.isArray(_0x6e8ac4.queue) && _0x6e8ac4.queue.length > 0 && (_0x3203a0 = _0x6e8ac4.queue, _0x57254a(), _0x2a2b34());
                        } else {
                          if (_0x6e8ac4.type === "searchResults") {
                            {
                              var _0x3bd2af = _0x6e8ac4.results || [];
                              if (typeof _0x6e8ac4.reqId == "number" && _0x6e8ac4.reqId !== _0x4a1abb) {
                                return;
                              }
                              _0x6e8ac4._isRecent && _0x3bd2af.length > 0 && (_0x157ab9 = _0x3bd2af);
                              _0x1260c7(_0x3bd2af);
                            }
                          } else {
                            if (_0x6e8ac4.type === "recentFilesCache") {
                              _0x157ab9 = _0x6e8ac4.results || [];
                            } else {
                              if (_0x6e8ac4.type === "fileRefAdded") {
                                _0xd8c86b(_0x6e8ac4.path, _0x6e8ac4.name, _0x6e8ac4.isFolder || false, _0x6e8ac4.lines || null);
                                _0x59d484();
                              } else {
                                if (_0x6e8ac4.type === "droppedPathsResolved") {
                                  var _0x88aec4 = false;
                                  (_0x6e8ac4.refs || []).forEach(function (_0x4ce1ef) {
                                    for (var _0x55193b = _0xd6a522.querySelectorAll(".inline-ref"), _0x1314f2 = false, _0x598fc4 = 0; _0x598fc4 < _0x55193b.length; _0x598fc4++) {
                                      if (_0x55193b[_0x598fc4].getAttribute("data-path") === _0x4ce1ef.path) {
                                        _0x1314f2 = true;
                                        break;
                                      }
                                    }
                                    _0x1314f2 || (_0xd8c86b(_0x4ce1ef.path, _0x4ce1ef.name, _0x4ce1ef.isFolder || false), _0x88aec4 = true);
                                  });
                                  _0x88aec4 && (_0x19f1c4(), _0x2a2b34(), _0x59d484());
                                } else {
                                  if (_0x6e8ac4.type === "activationStatus") {
                                    if (_0x491cd2 = _0x6e8ac4.activated, !_0x592853 && document.getElementById("activationView") && _0x5899f2(), _0x592853 && (_0x477d3b(!_0x6e8ac4.activated), _0x58fa6c(_0x6e8ac4), !_0x6e8ac4.activated && _0x6e8ac4.deactivatedReason)) {
                                      var _0x3cd59c = document.getElementById("activationError");
                                      _0x3cd59c && (_0x3cd59c.textContent = _0x6e8ac4.deactivatedReason, _0x3cd59c.style.display = "");
                                    }
                                    var _0x5b8a86 = function () {
                                      document.getElementById("licRefreshBtn").classList.remove("spinning");
                                      document.getElementById("settingsLicRefresh").classList.remove("spinning");
                                    };
                                    var _0x164b20 = _0x199cf3 - Date.now();
                                    _0x164b20 > 0 ? setTimeout(_0x5b8a86, _0x164b20) : _0x5b8a86();
                                  } else {
                                    if (_0x6e8ac4.type === "activationResult") {
                                      {
                                        var _0x4d2e52 = document.getElementById("activateBtn");
                                        var _0x3cd59c = document.getElementById("activationError");
                                        _0x4d2e52 && (_0x4d2e52.disabled = false, _0x4d2e52.textContent = "✨ 激活");
                                        _0x6e8ac4.success ? (_0x3cd59c.style.display = "none", document.getElementById("licenseKeyInput") && (document.getElementById("licenseKeyInput").value = "")) : (_0x3cd59c.textContent = _0x6e8ac4.error || "激活失败", _0x3cd59c.style.display = "");
                                      }
                                    } else {
                                      if (_0x6e8ac4.type === "deactivateResult") {
                                        var _0x2b83ed = document.getElementById("deactivateBtn");
                                        _0x2b83ed && (_0x2b83ed.disabled = false, _0x2b83ed.textContent = "解绑");
                                        _0x6e8ac4.success && (_0x477d3b(true), _0x6e8ac4.error && _0x310a6c("system", _0x6e8ac4.error, Date.now()));
                                      } else {
                                        if (_0x6e8ac4.type === "renewalResult") {
                                          typeof window._handleRenewalResult == "function" && window._handleRenewalResult(_0x6e8ac4);
                                        } else {
                                          if (_0x6e8ac4.type === "userInfo") {
                                            {
                                              var _0x5a5490 = document.getElementById("userBar");
                                              if (_0x5a5490.style.display = "", _0x6e8ac4.error) {
                                                document.getElementById("userEmail").textContent = _0x6e8ac4.email || "";
                                                var _0x71139d = document.getElementById("usageText");
                                                _0x71139d.textContent = _0x6e8ac4.error;
                                                _0x71139d.style.color = "var(--danger,#f05050)";
                                                document.getElementById("refreshUsageBtn").classList.remove("spinning");
                                                return;
                                              }
                                              document.getElementById("usageText").style.color = "";
                                              document.getElementById("userEmail").textContent = _0x6e8ac4.email || "";
                                              var _0x6d2ea1 = document.getElementById("planBadge");
                                              _0x6e8ac4.plan && _0x6e8ac4.plan !== "loading" && (_0x6d2ea1.textContent = _0x6e8ac4.plan, _0x6d2ea1.style.display = "", _0x6d2ea1.className = "th-badge plan-" + _0x6e8ac4.plan.toLowerCase().replace(/[^a-z0-9]/g, "-"));
                                              var _0x71139d = document.getElementById("usageText");
                                              _0x6e8ac4.limit > 0 ? _0x71139d.textContent = "$" + (_0x6e8ac4.used / 100).toFixed(2) + " / $" + (_0x6e8ac4.limit / 100).toFixed(2) : _0x6e8ac4.plan !== "loading" && (_0x71139d.textContent = "");
                                              var _0x4e8b19 = _0x15cbf1 - Date.now();
                                              _0x4e8b19 > 0 ? setTimeout(function () {
                                                document.getElementById("refreshUsageBtn").classList.remove("spinning");
                                              }, _0x4e8b19) : document.getElementById("refreshUsageBtn").classList.remove("spinning");
                                            }
                                          } else {
                                            if (_0x6e8ac4.type === "tokenUsageData") {
                                              _0x341712(_0x6e8ac4);
                                            } else {
                                              if (_0x6e8ac4.type === "extensionVersion") {
                                                {
                                                  var _0x5a5a0d = document.getElementById("settingsCurrentVer");
                                                  _0x5a5a0d && (_0x5a5a0d.textContent = "v" + (_0x6e8ac4.version || ""));
                                                }
                                              } else {
                                                if (_0x6e8ac4.type === "mcpStatus") {
                                                  _0x143049(_0x6e8ac4.connected);
                                                } else {
                                                  if (_0x6e8ac4.type === "nodeStatus") {
                                                    _0x1a7449(_0x6e8ac4);
                                                  } else {
                                                    if (_0x6e8ac4.type === "showOnboarding") {
                                                      _0x2e46da();
                                                    } else {
                                                      if (_0x6e8ac4.type === "updateAvailable") {
                                                        _0x54476c(_0x6e8ac4.force, _0x6e8ac4.version, _0x6e8ac4.downloadUrl);
                                                        var _0x5c0648 = document.getElementById("settingsUpdateInfo");
                                                        var _0x37349f = document.getElementById("settingsUpdateText");
                                                        var _0x4ed3cd = document.getElementById("settingsUpdateLink");
                                                        var _0x1ddcbe = document.getElementById("settingsDot");
                                                        _0x5c0648 && _0x37349f && (_0x37349f.textContent = "新版本 " + (_0x6e8ac4.version || "") + " 可用", _0x4ed3cd && (_0x4ed3cd.href = _0x6e8ac4.downloadUrl || "https://persistent-chat.kobeservice.help/#changelog"), _0x5c0648.style.display = "");
                                                        _0x1ddcbe && (_0x1ddcbe.style.display = "");
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  function _0x54476c(_0x35a5f9, _0x30f298, _0x5eb728) {
    var _0x39cc56 = document.getElementById("updateBanner");
    var _0x171863 = document.getElementById("updateBannerText");
    var _0x3bbfac = document.getElementById("updateBannerLink");
    if (_0x39cc56) {
      {
        var _0x8b5f9d = _0x35a5f9 ? "⚠️ 当前版本过旧，必须升级" + (_0x30f298 ? "至 v" + _0x30f298 : "") + "才能继续使用" : "🎉 有新版本" + (_0x30f298 ? " v" + _0x30f298 : "") + " 可用";
        _0x171863.textContent = _0x8b5f9d;
        _0x3bbfac.href = _0x5eb728 || "https://persistent-chat.kobeservice.help/#changelog";
        _0x3bbfac.style.display = "";
        _0x39cc56.className = "update-banner" + (_0x35a5f9 ? " force" : "");
        _0x39cc56.style.display = "";
      }
    }
  }
  document.getElementById("updateBannerClose").addEventListener("click", function () {
    {
      document.getElementById("updateBanner").style.display = "none";
    }
  });
  var _0x2bacd6 = null;
  function _0x1af9ab() {
    if (_0x4958d2.length === 0) {
      {
        _0x34627c();
        return;
      }
    }
    var _0x2fdf30 = Number(document.getElementById("cloudTo").value) * 60000;
    _0x4958d2.forEach(function (_0x5bfe41) {
      if (!(!_0x5bfe41.sessionId || !_0x5bfe41.timestamp)) {
        {
          var _0x5205bf = Date.now() - _0x5bfe41.timestamp;
          var _0x1f8cd4 = Math.max(0, _0x2fdf30 - _0x5205bf);
          var _0xe5465e = Math.ceil(_0x1f8cd4 / 1000);
          var _0x19d554 = _0x1f8cd4 / _0x2fdf30 * 100;
          var _0x123d76 = _0x64d8af(Math.floor(_0xe5465e / 60)) + ":" + _0x64d8af(_0xe5465e % 60);
          var _0x1db7d1 = document.querySelector(".session-item-timer[data-sid=\"" + _0x5bfe41.sessionId + "\"]");
          _0x1db7d1 && (_0x1db7d1.textContent = _0x123d76, _0x1db7d1.className = "session-item-timer" + (_0x19d554 > 40 ? "" : _0x19d554 > 20 ? " warn" : " danger"));
          var _0x63f9d9 = document.querySelector(".mini-timer[data-msid=\"" + _0x5bfe41.sessionId + "\"]");
          _0x63f9d9 && (_0x63f9d9.textContent = _0x123d76);
        }
      }
    });
  }
  function _0x34627c() {
    _0x4958d2.length > 0 && !_0x2bacd6 ? _0x2bacd6 = setInterval(_0x1af9ab, 1000) : _0x4958d2.length === 0 && _0x2bacd6 && (clearInterval(_0x2bacd6), _0x2bacd6 = null);
  }
  document.getElementById("sidebarNewChat").addEventListener("click", function () {
    _0x50f2ae();
  });
  document.getElementById("sidebarCollapse").addEventListener("click", function () {
    {
      var _0x27aed9 = {
        sidebarCollapsed: true
      };
      var _0x466201 = {
        type: "saveSettings",
        settings: _0x27aed9
      };
      _0x2ddc71 = true;
      document.getElementById("sessionSidebar").classList.add("collapsed");
      _0x4f757e();
      _0x22b854.postMessage(_0x466201);
    }
  });
  document.getElementById("miniExpand").addEventListener("click", function () {
    var _0x1d6648 = {
      sidebarCollapsed: false
    };
    _0x2ddc71 = false;
    document.getElementById("sessionSidebar").classList.remove("collapsed");
    _0x22b854.postMessage({
      type: "saveSettings",
      settings: _0x1d6648
    });
  });
  var _0x14c527 = document.getElementById("sidebarResizer");
  var _0x3a2b6b = false;
  _0x14c527 && (_0x14c527.addEventListener("mousedown", function (_0x3e9fde) {
    _0x3a2b6b = true;
    _0x14c527.classList.add("resizing");
    document.body.style.cursor = "col-resize";
  }), document.addEventListener("mousemove", function (_0x140a97) {
    {
      if (_0x3a2b6b) {
        var _0x2068ae = Math.max(150, Math.min(400, _0x140a97.clientX));
        document.body.style.setProperty("--sidebar-width", _0x2068ae + "px");
      }
    }
  }), document.addEventListener("mouseup", function (_0x2eb9f5) {
    {
      _0x3a2b6b && (_0x3a2b6b = false, _0x14c527.classList.remove("resizing"), document.body.style.cursor = "", _0x1b3535());
    }
  }));
  function _0x4f757e() {
    var _0x2f0124 = document.getElementById("sidebarMini");
    if (_0x2f0124) {
      var _0x4ca407 = document.getElementById("miniExpand");
      _0x2f0124.innerHTML = "";
      _0x2f0124.appendChild(_0x4ca407);
      _0xdfb83.forEach(function (_0x25d79a) {
        {
          var _0x1840e9 = (_0x25d79a.title || "CT").substring(0, 2);
          var _0x526743 = document.createElement("div");
          _0x526743.className = "mini-text-circle" + (_0x10b109 === _0x25d79a.id ? " active" : "");
          _0x526743.style.background = _0x326dd2(_0x25d79a.id);
          _0x526743.title = _0x25d79a.title || _0x25d79a.id;
          _0x526743.textContent = _0x1840e9;
          var _0x4ac4bf = _0x58bb1d[_0x25d79a.id] || 0;
          if (_0x4ac4bf > 0) {
            var _0x5b1f6a = document.createElement("span");
            _0x5b1f6a.className = "mini-unread";
            _0x5b1f6a.textContent = _0x4ac4bf > 99 ? "99+" : _0x4ac4bf;
            _0x526743.appendChild(_0x5b1f6a);
          }
          var _0x3c793c = document.createElement("div");
          _0x3c793c.style.cssText = "display:flex;flex-direction:column;align-items:center;gap:1px";
          _0x3c793c.appendChild(_0x526743);
          var _0x5458f5 = _0x4958d2.find(function (_0x47b5e3) {
            return _0x47b5e3.sessionId === _0x25d79a.id;
          });
          if (_0x5458f5 && _0x5458f5.timestamp) {
            {
              var _0x1aaef2 = Number(document.getElementById("cloudTo").value) * 60000;
              var _0x10d4d7 = Date.now() - _0x5458f5.timestamp;
              var _0x166602 = Math.max(0, Math.ceil((_0x1aaef2 - _0x10d4d7) / 1000));
              var _0x221c19 = document.createElement("div");
              _0x221c19.className = "mini-timer";
              _0x221c19.setAttribute("data-msid", _0x25d79a.id);
              _0x221c19.textContent = _0x64d8af(Math.floor(_0x166602 / 60)) + ":" + _0x64d8af(_0x166602 % 60);
              _0x3c793c.appendChild(_0x221c19);
            }
          }
          _0x526743.addEventListener("click", function () {
            var _0x191585 = _0x10b109;
            _0x191585 && _0x191585 !== _0x25d79a.id && _0xeb52e4(_0x191585);
            _0x2abfb2(_0x25d79a.id);
            _0x21bccf = null;
            _0x58bb1d[_0x25d79a.id] = 0;
            _0x4e129e(_0x25d79a.id);
            var _0x5c77e6 = _0x4958d2.find(function (_0x4baf7e) {
              return _0x4baf7e.sessionId === _0x25d79a.id;
            });
            if (_0x5c77e6) {
              _0x3c6645 = _0x5c77e6.id;
              _0x217c23.textContent = _0x5c77e6.prompt;
              _0x4d2f69.classList.add("show");
              _0x26c9e2("waiting");
              var _0x3ff08a = Number(document.getElementById("cloudTo").value) * 60000;
              _0x221610(_0x3ff08a, _0x5c77e6.timestamp);
            } else {
              _0x219b32();
              _0x4d2f69.classList.remove("show");
              _0x26c9e2("idle");
            }
            _0x59d484();
            _0x1048d6();
            _0x4f757e();
            _0x535f4b(_0x25d79a.id);
            _0x21e896();
          });
          _0x2f0124.appendChild(_0x3c793c);
        }
      });
    }
  }
  var _0x2b402f = 0;
  var _0x39d6f9 = 3;
  var _0xefbe12 = document.getElementById("onboardingView");
  function _0x2e46da() {
    _0xefbe12 && (_0x2b402f = 0, _0xefbe12.style.display = "", _0xd09afd && (_0xd09afd.style.display = "none"), _0x592853 && (_0x592853.style.display = "none"), _0x3a6449());
  }
  function _0x40beba() {
    {
      var _0x4682d3 = {
        type: "onboardingComplete"
      };
      _0xefbe12 && (_0xefbe12.style.display = "none");
      _0x22b854.postMessage(_0x4682d3);
      _0x491cd2 ? _0xd09afd && (_0xd09afd.style.display = "") : _0x477d3b(true);
    }
  }
  function _0x3a6449() {
    var _0x4f1f9c = _0xefbe12.querySelectorAll(".ob-dot");
    _0x4f1f9c.forEach(function (_0xfdc4da, _0xefe13e) {
      {
        _0xfdc4da.classList.toggle("active", _0xefe13e <= _0x2b402f);
        _0xfdc4da.classList.toggle("current", _0xefe13e === _0x2b402f);
      }
    });
    var _0x24edc7 = _0xefbe12.querySelectorAll(".ob-step");
    _0x24edc7.forEach(function (_0x1cfb17) {
      _0x1cfb17.style.display = Number(_0x1cfb17.getAttribute("data-step")) === _0x2b402f ? "" : "none";
    });
    var _0x34df89 = document.getElementById("obPrevBtn");
    var _0x1c012e = document.getElementById("obNextBtn");
    _0x34df89 && (_0x34df89.style.display = _0x2b402f > 0 ? "" : "none");
    _0x1c012e && (_0x1c012e.textContent = _0x2b402f >= _0x39d6f9 - 1 ? "开始使用" : "下一步");
  }
  document.getElementById("obNextBtn").addEventListener("click", function () {
    _0x2b402f >= _0x39d6f9 - 1 ? _0x40beba() : (_0x2b402f++, _0x3a6449());
  });
  document.getElementById("obPrevBtn").addEventListener("click", function () {
    _0x2b402f > 0 && (_0x2b402f--, _0x3a6449());
  });
  document.getElementById("obSkipBtn").addEventListener("click", function () {
    _0x40beba();
  });
  document.getElementById("obCopyBtn").addEventListener("click", function () {
    var _0x21aa28 = document.getElementById("obPromptText").textContent;
    var _0xc5d542 = document.getElementById("obCopyBtn");
    navigator.clipboard.writeText(_0x21aa28).then(function () {
      {
        _0xc5d542.textContent = "✅ 已复制";
        setTimeout(function () {
          _0xc5d542.textContent = "📋 复制";
        }, 1500);
      }
    }).catch(function () {
      {
        var _0x298664 = {
          type: "copyText",
          text: _0x21aa28
        };
        _0x22b854.postMessage(_0x298664);
        _0xc5d542.textContent = "✅ 已复制";
        setTimeout(function () {
          _0xc5d542.textContent = "📋 复制";
        }, 1500);
      }
    });
  });
  document.getElementById("reopenGuideBtn").addEventListener("click", function () {
    _0xe9d0fa(false);
    _0x2e46da();
  });
  _0x26c9e2("idle");
  _0x2a2b34();
  _0x3e274f();
  var _0xa29927 = document.getElementById("guideNewChatBtn");
  {
    document.querySelectorAll(".dev-only").forEach(function (_0x41274e) {
      _0x41274e.style.display = "none";
    });
    var _0x4edb59 = document.getElementById("testChk");
    if (_0x4edb59) {
      var _0x442ef = _0x4edb59.closest(".s-group");
      _0x442ef && (_0x442ef.style.display = "none");
      var _0xdf0450 = _0x442ef && _0x442ef.previousElementSibling;
      _0xdf0450 && _0xdf0450.classList.contains("s-div") && (_0xdf0450.style.display = "none");
    }
  }
  var _0x2d65a2 = {
    type: "ready"
  };
  _0x22b854.postMessage(_0x2d65a2);
})();
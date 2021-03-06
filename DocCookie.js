var DocCookie = (function () {
  function getItem(e) {
    return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
  }
  function setItem(e, n, o, t, c, r) {
    if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e))
      return !1;
    var s = "";
    if (o)
      switch (o.constructor) {
        case Number:
          s = o === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + o;
          break;
        case String:
          s = "; expires=" + o;
          break;
        case Date:
          s = "; expires=" + o.toUTCString()
      }
    return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(n) + s + (c ? "; domain=" + c : "") + (t ? "; path=" + t : "; path=/") + (r ? "; secure" : ""),
      !0
  }
  function removeItem(e, n, o) {
    return this.hasItem(e) ? (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (o ? "; domain=" + o : "") + (n ? "; path=" + n : "; path=/"),
      !0) : !1
  }
  function hasItem(e) {
    return e ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1
  },
  function keys() {
    for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), n = e.length, o = 0; n > o; o++)
      e[o] = decodeURIComponent(e[o]);
    return e
  }
  return {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    hasItem: hasItem,
    keys: keys
  };
})();

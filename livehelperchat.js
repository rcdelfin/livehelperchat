/**
 * Created by raymund on 6/24/16.
 */

export const name = 'livehelperchat';

var scriptLoader;

scriptLoader = function (url, id, d) {
  var fjs, js;
  if (d == null) {
    d = document;
  }
  if (!d.getElementById(id)) {
    fjs = d.getElementsByTagName('script')[0];
    js = d.createElement('script');
    js.async = true;
    js.defer = true;
    js.id = id;
    js.src = url;
    return fjs.parentNode.insertBefore(js, fjs);
  }
};

export const LiveHelperChat = {
  settings: {
    "autoInit": true,
    "domain": null,
    "baseUrl": "http://demo.livehelperchat.com/index.php"
  },
  configure: function (params) {
    if (params != null) {
      return $.extend(true, this.settings, params);
    }
  },
  init: function (params) {
    if (params != null) {
      this.configure(params);
    }
    if (this.settings.autoInit) { // && (this.settings.sites.facebook != null)
      window.LHCChatOptions = {};
      window.LHCChatOptions.opt = {
        widget_height: 340,
        widget_width: 300,
        popup_height: 520,
        popup_width: 500,
        domain: this.settings.domain
      };

      var referrer = (document.referrer) ?
          encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://') + 1)) : '';
      var location = (document.location) ?
          encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
      var src = this.settings.baseUrl
        + '/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r='
        + referrer + '&l=' + location;
      scriptLoader(src, 'livehelperchat');
    }
  }
};

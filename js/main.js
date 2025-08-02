document.addEventListener("DOMContentLoaded", function () {
    var nui1 = "?";
    var form = document.getElementById("cont_form");
    form.action = nui1;
});
$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="img/kol-king.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }
    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,
                typeSpeed: 25,
                callback: function () {
                    setTimeout(function () {
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">วัน</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                return n;
                            })() +
                            '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">เดือน</option>' +
                            ($.each(e.DateBirthday[0].month, function (e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>";
                            }),
                                o) +
                            '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">ปี</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                return r;
                            })() +
                            "</select></div></div></form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                        0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.year]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        typeSpeed: 25,
                                        callback: function () {
                                            var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }
    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
    console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text:
                    "สวัสดีค่ะ! ฉัน <b style='color: rgb(134, 144, 254);'>เอ จักรพรรดิ</b>!<br><br>คำทำนายของฉันสำหรับเดือน " +
                    ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth() + 1]) +
                    " จะทำให้คุณต้องตะลึง: 5 ราศีจะได้รับโชคลาภทางการเงิน ส่วนอีก 7 ราศีจะต้องเผชิญกับความท้าทายด้านการเงิน<br><br>ตอบคำถาม 2 ข้อเพื่อรับคำทำนายฟรี.",
            },
            { text: "คุณเป็นผู้ชายหรือผู้หญิง?", m: { text: "ชาย" }, w: { text: "หญิง" } },
            { text: "คุณเกิดเมื่อใด?" },
        ]),
        (e.userZodiak = [{ text: "ขอบคุณ! ตามดวง คุณคือ  <b style='color: #00a3ff'>{zodie}</b>" }]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {
                            text: `
<div class="loading-section">
  <div class="loading-item">
    <div class="loading-header">
      <span>เงิน</span>
      <span class="loading-percent">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar money-bar" data-target="${Math.floor(Math.random() * 11) + 50}">0%</div>
    </div>  
  </div>
`}, {
                            text: `
  <div class="loading-item">
    <div class="loading-header">
      <span>สุขภาพ</span>
      <span class="loading-percent">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar health-bar" data-target="${Math.floor(Math.random() * 26) + 60}">0%</div>
    </div>
  </div>`}, {
                            text: `
  <div class="loading-item">
    <div class="loading-header">
      <span>อาชีพ</span>
      <span class="loading-percent">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar career-bar" data-target="${Math.floor(Math.random() * 16) + 70}">0%</div>
    </div>
  </div>`}, {
                            text: `

  <div class="loading-item">
    <div class="loading-header">
      <span>ความรัก</span>
      <span class="loading-percent">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar love-bar" data-target="${Math.floor(Math.random() * 16) + 60}">0%</div>
    </div>
  </div>
</div>
`}, {
                            text: "ในตอนแรก คุณอาจรู้สึกติดอยู่ในวงจรที่ขาดเงิน หยุดตามความฝัน และปล่อยให้โอกาสหลุดมือไป ปี <b style='color: #00a3ff'>{zodie}</b> จะถูกพัดพาเข้าสู่ “พายุพลังงานลบ” ที่ขัดขวางความมั่งคั่งของคุณ และป้องกันไม่ให้คุณเติบโตอย่างอิสระ",
                        },
                        { text: "🔮 แต่...ในวันที่ " + (new Date().getDate() + 15) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth() + 1]) + " 2568 เมื่อดวงจันทร์เคลื่อนที่ขนานกับดาวศุกร์ จักรวาลจะเปิด “ประตูทองคำ” ให้คุณก้าวเข้าสู่เส้นทางใหม่" },
                        {
                            text: "เงินของคุณจะไหลเข้ามาจากโอกาสลงทุนใหม่ๆ และการตัดสินใจที่ชาญฉลาด <br>" +
                                "ความสัมพันธ์ ความรัก และสุขภาพของคุณจะดีขึ้นเรื่อยๆ แต่นั่นขึ้นอยู่กับว่าคุณเชื่อผมหรือไม่"
                        },
                        { text: "⚠️ หากคุณลังเล... โอกาสนี้อาจหลุดลอยไปจากคุณตลอดกาล คุณคือผู้กำหนดชะตากรรม อย่าปล่อยให้ความกลัวหยุดคุณไม่ให้พาชีวิตของคุณไปสู่ความรุ่งโรจน์" },
                        {text:"ช่วงเวลานี้เป็นโอกาสที่ยอดเยี่ยมในการเปลี่ยนแปลงและพัฒนา โชคของคุณจะดีขึ้นอย่างรวดเร็ว นำมาซึ่งสิ่งที่ยอดเยี่ยมในงานและความรัก หากคุณสามารถกำจัดพลังงานลบที่ยับยั้งคุณได้"},
                        { text: "คำแนะนำที่สำคัญสำหรับผู้ที่เกิดปีนักษัตร {zodie} ในปี 2568" },
                        { text: "ถึงเวลาที่คุณต้องมีเครื่องรางคุ้มครองที่ทรงพลังที่สุด เพื่อดึงดูดเงินทองและโชคลาภสำหรับราศีของคุณในปี 2568" },
                        { text: "ถ้าคุณพลาดเครื่องรางเหล่านี้ ชีวิตของคุณจะยังเหมือนเดิม โชคลาภของคุณจะติดขัดตลอดไป" },
                        // {
                        //     text:
                        //         "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) +
                        //         " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ",
                        // },
                        // { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน" },
                    ],
                    [
                        // { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2568?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        // { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2568 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง!" },
                        // { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2568 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        // { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป ความโชคร้ายและความล้มเหลวทั้งหมดจะหายไปจากชีวิตของคุณตลอดไป ผมเห็นรูปคุณสวมสร้อยข้อมือนี้ ผมเห็นคุณจะมีความสุข! หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มีความสุขและร่ำรวยเงินทอง" },
                        { text: " <br> <img width='200px' src='img/product.jpg'> </br> สร้อยคอ คิวยกัง ปาฏไก" },
                        { text: " <br> <img width='200px' src='img/product-2.jpg'> </br> สร้อยข้อมือไม้จันทน์ 108 เม็ด " },
                        { text: " <br> <img width='200px' src='img/product-1.jpg'> </br> แหวนตาปีศาจ " },

                        { text: "ทำไมคุณถึงต้องมีเครื่องรางนี้?" },
                        { text: "เครื่องรางคุ้มครอง 3 ชิ้นนี้จะเปลี่ยนชีวิตของคุณอย่างสิ้นเชิงภายในหนึ่งเดือน คุณจะหลุดพ้นจากความยากจน เงินจะไหลเข้ากระเป๋าของคุณจากหลายแหล่งจนตลอดชีวิต" },
                        {
                            text: "ผมพยายามช่วยทุกคนแก้ปัญหา และไม่เคยหาผลกำไรจากเรื่องนี้ นั่นคือเหตุผลที่ตั้งแต่วันนี้จนถึงวันที่" + (new Date().getDate() + 1) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + "สิงหาคม คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง 3 ชิ้น เหลือเพียง 1290" + '</b> <b>' +
                                '฿' + "บาท"
                        },
                        // {
                        //     text:
                        //         'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b>' +
                        //         '990' +
                        //         '</b> <b>' +
                        //         '฿' +
                        //         " เท่านั้น </b>",
                        // },
                        { text: "คุณสามารถสั่งซื้อเครื่องราง 3 ชิ้นนี้ได้ทันที! เพียงกรอกชื่อและเบอร์โทรศัพท์ในแบบฟอร์ม ชีวิตของคุณจะเปลี่ยนไป ผมสัญญา!<br><br> " }
                    ],
                ],
            ],
            m: [
                [
                    [
                        {
                            text: `
<div class="loading-section">
  <div class="loading-item">
    <div class="loading-header">
      <span style="font-size: 25px;">เงิน</span>
      <span class="loading-percent" style="font-size: 25px;">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar money-bar" data-target="${Math.floor(Math.random() * 11) + 50}">0%</div>
    </div>  
  </div>
`}, {
                            text: `
  <div class="loading-item">
    <div class="loading-header">
      <span style="font-size: 25px;">สุขภาพ</span>
      <span class="loading-percent" style="font-size: 25px;">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar health-bar" data-target="${Math.floor(Math.random() * 26) + 60}">0%</div>
    </div>
  </div>`}, {
                            text: `
  <div class="loading-item">
    <div class="loading-header">
      <span style="font-size: 25px;">อาชีพ</span>
      <span class="loading-percent" style="font-size: 25px;">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar career-bar" data-target="${Math.floor(Math.random() * 16) + 70}">0%</div>
    </div>
  </div>`}, {
                            text: `

  <div class="loading-item">
    <div class="loading-header">
      <span style="font-size: 25px;">ความรัก</span>
      <span class="loading-percent" style="font-size: 25px;">0%</span>
    </div>
    <div class="loading-bar-container">
      <div class="loading-bar love-bar" data-target="${Math.floor(Math.random() * 16) + 60}">0%</div>
    </div>
  </div>
</div>
`}, {
                            text: "ในตอนแรก คุณอาจรู้สึกติดอยู่ในวงจรที่ขาดเงิน หยุดตามความฝัน และปล่อยให้โอกาสหลุดมือไป ปี <b style='color: #00a3ff'>{zodie}</b> จะถูกพัดพาเข้าสู่ “พายุพลังงานลบ” ที่ขัดขวางความมั่งคั่งของคุณ และป้องกันไม่ให้คุณเติบโตอย่างอิสระ",
                        },
                        { text: "🔮 แต่...ในวันที่ " + (new Date().getDate() + 15) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth() + 1]) + " 2568 เมื่อดวงจันทร์เคลื่อนที่ขนานกับดาวศุกร์ จักรวาลจะเปิด “ประตูทองคำ” ให้คุณก้าวเข้าสู่เส้นทางใหม่" },
                        {
                            text: "เงินของคุณจะไหลเข้ามาจากโอกาสลงทุนใหม่ๆ และการตัดสินใจที่ชาญฉลาด <br>" +
                                "ความสัมพันธ์ ความรัก และสุขภาพของคุณจะดีขึ้นเรื่อยๆ แต่นั่นขึ้นอยู่กับว่าคุณเชื่อผมหรือไม่"
                        },
                        { text: "⚠️ หากคุณลังเล... โอกาสนี้อาจหลุดลอยไปจากคุณตลอดกาล คุณคือผู้กำหนดชะตากรรม อย่าปล่อยให้ความกลัวหยุดคุณไม่ให้พาชีวิตของคุณไปสู่ความรุ่งโรจน์" },
                        {text:"ช่วงเวลานี้เป็นโอกาสที่ยอดเยี่ยมในการเปลี่ยนแปลงและพัฒนา โชคของคุณจะดีขึ้นอย่างรวดเร็ว นำมาซึ่งสิ่งที่ยอดเยี่ยมในงานและความรัก หากคุณสามารถกำจัดพลังงานลบที่ยับยั้งคุณได้"},
                        { text: "คำแนะนำที่สำคัญสำหรับผู้ที่เกิดปีนักษัตร {zodie} ในปี 2568" },
                        { text: "ถึงเวลาที่คุณต้องมีเครื่องรางคุ้มครองที่ทรงพลังที่สุด เพื่อดึงดูดเงินทองและโชคลาภสำหรับราศีของคุณในปี 2568" },
                        { text: "ถ้าคุณพลาดเครื่องรางเหล่านี้ ชีวิตของคุณจะยังเหมือนเดิม โชคลาภของคุณจะติดขัดตลอดไป" },
                        // {
                        //     text:
                        //         "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) +
                        //         " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ",
                        // },
                        // { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน" },
                    ],
                    [
                        // { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2568?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        // { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2568 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง!" },
                        // { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2568 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        // { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป ความโชคร้ายและความล้มเหลวทั้งหมดจะหายไปจากชีวิตของคุณตลอดไป ผมเห็นรูปคุณสวมสร้อยข้อมือนี้ ผมเห็นคุณจะมีความสุข! หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มีความสุขและร่ำรวยเงินทอง" },
                        { text: " <br> <img width='200px' src='img/product.jpg'> </br> สร้อยคอ คิวยกัง ปาฏไก" },
                        { text: " <br> <img width='200px' src='img/product-2.jpg'> </br> สร้อยข้อมือไม้จันทน์ 108 เม็ด " },
                        { text: " <br> <img width='200px' src='img/product-1.jpg'> </br> แหวนตาปีศาจ " },

                        { text: "ทำไมคุณถึงต้องมีเครื่องรางนี้?" },
                        { text: "เครื่องรางคุ้มครอง 3 ชิ้นนี้จะเปลี่ยนชีวิตของคุณอย่างสิ้นเชิงภายในหนึ่งเดือน คุณจะหลุดพ้นจากความยากจน เงินจะไหลเข้ากระเป๋าของคุณจากหลายแหล่งจนตลอดชีวิต" },
                        {
                            text: "ผมพยายามช่วยทุกคนแก้ปัญหา และไม่เคยหาผลกำไรจากเรื่องนี้ นั่นคือเหตุผลที่ตั้งแต่วันนี้จนถึงวันที่" + (new Date().getDate() + 1) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + "สิงหาคม คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง 3 ชิ้น เหลือเพียง 1290" + "</b> <b>" +
                                '฿' + " บาท"
                        },
                        // {
                        //     text:
                        //         'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b>' +
                        //         '990' +
                        //         '</b> <b>' +
                        //         '฿' +
                        //         " เท่านั้น </b>",
                        // },
                        { text: "คุณสามารถสั่งซื้อเครื่องราง 3 ชิ้นนี้ได้ทันที! เพียงกรอกชื่อและเบอร์โทรศัพท์ในแบบฟอร์ม ชีวิตของคุณจะเปลี่ยนไป ผมสัญญา!<br><br> " }
                    ],
                ],
            ],
        }),
        (e.socNumber = [

            {
                text: "ผมจะปลุกพลังเวทมนตร์ให้กับเครื่องราง 3 ชิ้นนี้ ทำให้พลังงานมืดของคุณหายไป ทุกความทุกข์และความล้มเหลวจะหายไปจากชีวิตคุณตลอดกาล ผมเห็นภาพคุณสวมสร้อยคอ สวมสร้อยข้อมือ และสวมแหวนนี้ คุณจะมีความสุขมาก หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มั่งคั่ง ประสบความสำเร็จ และมีความสุข",
            }
            // {
            //     text:
            //         "เลขนำโชคของคุณคือ " + "9" + " ซึ่งหมายความว่าในวันที่ " + "9" + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) + " 2568 ชีวิตของคุณจะเปลี่ยนไปในทางที่ดีขึ้น"
            // },
        ]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    { name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0 },
                    { name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0 },
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Rudy Baldwin",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            console.log('test', t);
            var a = parseInt(t[0]);
            switch (a) {
                case 2491: case 2503: case 2515: case 2527: case 2539: case 2551: case 2563: case 2566:
                    e.zodiak = 1;
                    break;
                case 2492: case 2504: case 2516: case 2528: case 2540: case 2552: case 2564: case 2568:
                    e.zodiak = 2;
                    break;
                case 2493: case 2505: case 2517: case 2529: case 2541: case 2553: case 2565: case 2567:
                    e.zodiak = 3;
                    break;
                case 2494: case 2506: case 2518: case 2530: case 2542: case 2554:
                    e.zodiak = 4;
                    break;
                case 2495: case 2507: case 2519: case 2531: case 2543: case 2555:
                    e.zodiak = 5;
                    break;
                case 2496: case 2508: case 2520: case 2532: case 2544: case 2556:
                    e.zodiak = 6;
                    break;
                case 2497: case 2509: case 2521: case 2533: case 2545: case 2557:
                    e.zodiak = 7;
                    break;
                case 2498: case 2510: case 2522: case 2534: case 2546: case 2558:
                    e.zodiak = 8;
                    break;
                case 2499: case 2511: case 2523: case 2535: case 2547: case 2559:
                    e.zodiak = 9;
                    break;
                case 2500: case 2512: case 2524: case 2536: case 2548: case 2560:
                    e.zodiak = 10;
                    break;
                case 2501: case 2513: case 2525: case 2537: case 2549: case 2561:
                    e.zodiak = 11;
                    break;
                case 2502: case 2514: case 2526: case 2538: case 2550: case 2562:
                    e.zodiak = 12;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
            { name: "ปีชวด", id: 1 },
            { name: "ปีฉลู", id: 2 },
            { name: "ปีขาล", id: 3 },
            { name: "ปีเถาะ", id: 4 },
            { name: "ปีมะโรง", id: 5 },
            { name: "ปีมะเส็ง", id: 6 },
            { name: "ปีมะเมีย", id: 7 },
            { name: "ปีมะแม", id: 8 },
            { name: "ปีวอก", id: 9 },
            { name: "ปีระกา", id: 10 },
            { name: "ปีจอ", id: 11 },
            { name: "ปีกุน", id: 12 },
        ]),
        (e.DateBirthday = [{ day: [1, 31], month: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], year: [2490, 2553] }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () { }, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) { }, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = {
                    showCursor: !1,
                    typeSpeed: 25,
                };
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                        r == o + 1 &&
                        setTimeout(function () {
                            $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                        }, 1500); // 1500
                }),
                    1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    typeSpeed: 25,
                    callback: function () {
                        2568
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    typeSpeed: 25,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                    (t = e.managerDialog[1]).m.text +
                                                    '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                    t.w.text +
                                                    "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 100);
                                    },
                                });
                        }, 100);
                    },
                });
        });
});

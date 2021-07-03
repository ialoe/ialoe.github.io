/* 深色模式按钮设置 */
if (localStorage.getItem("dark") === "1") {
    document.body.classList.add("dark")
} else {
    if (new Date().getHours() >= 22 || new Date().getHours() < 6) {
        document.body.classList.add("dark");
        $("#nightMode").removeClass("fa-moon-o").addClass("fa-lightbulb")
    } else {
        if (matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark")
        }
    }
}

/*提醒开启功能*/
setTimeout(
    function () {
        if ((new Date().getHours() >= 19 || new Date().getHours() < 7) && !$('body').hasClass('DarkMode')) {
            let toastHTML = '<span style="color:#97b8b2;border-radius: 10px;>'
                + '<i class="fa fa-bell" aria-hidden="true"></i>晚上使用深色模式阅读更好哦。(ﾟ▽ﾟ)/</span>'
            M.toast({html: toastHTML})
        }
    }, 2200);

/* 深色模式设置*/
function switchNightMode() {
    var body = document.body;
    if (body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        localStorage.setItem("dark", "0");
        $("#nightMode").removeClass("fa-lightbulb").addClass("fa-moon-o");
        return
    } else {
        document.body.classList.add("dark");
        localStorage.setItem("dark", "1");
        $("#nightMode").removeClass("fa-moon-o").addClass("fa-lightbulb");
        return
    }
};

/* 二维码按钮设置 */
function btn_ewm() {
    if ($("#ewm").css("display") === "none") {
        $("#ewm").css("display", "block");
        $("#live2d-widget").hide();
    } else {
        $("#ewm").css("display", "none");
        $("#live2d-widget").show();
    }
};

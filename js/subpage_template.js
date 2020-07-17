var zffoot = {
    template: `
    <footer class="footBg">
        <div class="footCon">
            <p>地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 电话：010-xxxxxxxxxxxxxxxxxxx</p>
            <p>© 2009-2019 xxxxxxxx 版权所有&nbsp;&nbsp;&nbsp;<a href="http://www.beian.miit.gov.cn">京ICP备xxxxxxxxxxx号
            </p>
        </div>
        <div class="Top"></div>
        <div class="clear"></div>
    </footer>
    `,
}
var zfonline = {
    template: `
    <ul class="onLine">
        <li>
            <a href="javascript:;" class="openLay">
                <div class="onIco">
                    <img src="/images/onIco1.png"><span>电话咨询</span></div>
            </a>
        </li>
        <li>
            <a target="_blank" href="#">
                <div class="onIco">
                    <img src="/images/onIco2.png"><span>在线咨询</span></div>
            </a>
        </li>
        <li>
            <a href="javascript:;" class="onWxBtn">
                <div class="onIco">
                    <img src="/images/onIco3.png"><span>官方微信</span></div>
                <div class="onCon">
                    <img src="/images/wechat.jpg"></div>
            </a>
        </li>
    </ul>
    `,
}
var zflaybox = {
    template: `
    <div class="LayBox">
        <span class="LayClose"></span>
        <h3>输入您的电话，即刻与我们取得联络</h3>
        <div class="LayCen">
            <input type="text" class="LayInput" id="telInput" placeholder="输入您的号码">
            <button class="LayBtn" id="callBtn">立即发送</button>
        </div>
        <div class="LayBot">
            <p>您也可直接拨打君策电话进行咨询：</p>
            <p><span>xxx-xxxxxxxxx</span></p>
        </div>
    </div>
    `,
}
var zfmainbot = {
    template: `
    <div class="mainBot mainBot2">
        <div class="mainBotBg">
            <div class="imgBg"><img src="/images/mainBot.jpg"></div>
        </div>
        <div class="container">
            <h2>即刻与我们取得联络</h2>
            <div class="mainBotCon">
                <p class="mainAdd">一个电话或许正是成就一个出色产品的开端。更多网站策略、创意、设计及服务问题请致电</p>
                <p class="mainTel">xxx-xxxxxxxxx / xxxxxxxxxx</p>
            </div>
            <a class="box5Btn" target="_blank"
                href="#">立即咨询<i class="lines top"></i><i
                    class="lines bottom"></i></a>
        </div>
    </div>
    `,
}
new Vue({
    el: '#zf-container',
    components: { zfmainbot, zffoot, zfonline, zflaybox },
})

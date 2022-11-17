import{_ as i,r as s,o as d,c,a as o,b as e,d as t,w as l,e as r}from"./app.301e38b4.js";const h={},u=o("h1",{id:"faq",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),e(" FAQ")],-1),p=o("p",null,[e("Here are some common questions regarding "),o("code",null,"asdf"),e(".")],-1),_=o("h2",{id:"wsl1-support",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#wsl1-support","aria-hidden":"true"},"#"),e(" WSL1 support?")],-1),f={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux",target:"_blank",rel:"noopener noreferrer"},m=o("code",null,"asdf",-1),g=o("h2",{id:"wsl2-support",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#wsl2-support","aria-hidden":"true"},"#"),e(" WSL2 support?")],-1),y={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_2",target:"_blank",rel:"noopener noreferrer"},w=r('<p>Importantly, WSL2 is <em>only</em> expected to work properly when the current working directory is a Unix drive and not a bound Windows drive.</p><p>We intend to run out test suite on WSL2 when host runner support is available on GitHub Actions, currently this does not appear to be the case.</p><h2 id="newly-installed-executable-not-running" tabindex="-1"><a class="header-anchor" href="#newly-installed-executable-not-running" aria-hidden="true">#</a> Newly installed executable not running?</h2><blockquote><p>I just <code>npm install -g yarn</code>, but cannot execute <code>yarn</code>. What gives?</p></blockquote>',4),b=o("code",null,"asdf",-1),k={href:"https://en.wikipedia.org/wiki/Shim_(computing)",target:"_blank",rel:"noopener noreferrer"},x=o("code",null,"asdf",-1),S=o("code",null,"asdf",-1),L={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},W=o("code",null,"asdf reshim",-1),v=r('<h2 id="shell-not-detecting-newly-installed-shims" tabindex="-1"><a class="header-anchor" href="#shell-not-detecting-newly-installed-shims" aria-hidden="true">#</a> Shell not detecting newly installed shims?</h2><p>If <code>asdf reshim</code> is not resolving your issue, then it is most-likely due to the sourcing of <code>asdf.sh</code> or <code>asdf.fish</code> <em>not</em> being at the <strong>BOTTOM</strong> of your Shell config file (<code>.bash_profile</code>, <code>.zshrc</code>, <code>config.fish</code> etc). It needs to be sourced <strong>AFTER</strong> you have set your <code>$PATH</code> and <strong>AFTER</strong> you have sourced your framework (oh-my-zsh etc) if any.</p>',2);function q(I,T){const n=s("ExternalLinkIcon"),a=s("RouterLink");return d(),c("div",null,[u,p,_,o("p",null,[e("WSL1 ("),o("a",f,[e("Windows Subsystem for Linux"),t(n)]),e(" 1) is not officially supported. Some aspects of "),m,e(" may not work properly. We do not intend to add official support for WSL1.")]),g,o("p",null,[e("WSL2 ("),o("a",y,[e("Windows Subsystem for Linux"),t(n)]),e(" 2) should work using the setup & dependency instructions for you chosen WSL distro.")]),w,o("p",null,[b,e(" uses "),o("a",k,[e("shims"),t(n)]),e(" to manage executables. Those installed by plugins have shims automatically created, whereas installing executables via an "),x,e(" managed tool will require you to notify "),S,e(" of the need to create shims. In this instance, to create a shim for "),o("a",L,[e("Yarn"),t(n)]),e(". See the "),t(a,{to:"/manage/core.html#reshim"},{default:l(()=>[W,e(" command docs")]),_:1}),e(".")]),v])}const E=i(h,[["render",q],["__file","faq.html.vue"]]);export{E as default};

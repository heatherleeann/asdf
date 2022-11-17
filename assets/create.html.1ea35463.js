import{_ as o,r as i,o as d,c,a,b as s,d as n,e as l}from"./app.301e38b4.js";const p={},t=l(`<h1 id="创建插件" tabindex="-1"><a class="header-anchor" href="#创建插件" aria-hidden="true">#</a> 创建插件</h1><h2 id="插件里有什么" tabindex="-1"><a class="header-anchor" href="#插件里有什么" aria-hidden="true">#</a> 插件里有什么</h2><p>插件是一个包含几个可执行脚本的 git 存储库，用于支持对某种语言或工具进行版本控制。这些脚本在执行 <code>list-all</code>、<code>install</code> 或者 <code>uninstall</code> 命令时被执行。你可以设定或取消设定环境变量，并执行设置工具环境所需的任何操作。</p><h2 id="必要的脚本" tabindex="-1"><a class="header-anchor" href="#必要的脚本" aria-hidden="true">#</a> 必要的脚本</h2><ul><li><code>bin/list-all</code> - 列举所有可安装的版本</li><li><code>bin/download</code> - 下载指定版本的源代码或二进制文件</li><li><code>bin/install</code> - 安装指定版本</li></ul><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>所有脚本除了 <code>bin/list-all</code> 之外对以下环境变量有权限进行操作：</p><ul><li><code>ASDF_INSTALL_TYPE</code> - <code>version</code> 或者 <code>ref</code></li><li><code>ASDF_INSTALL_VERSION</code> - 如果 <code>ASDF_INSTALL_TYPE</code> 是 <code>version</code>，那么这将是版本号。否则它将传递为 git 的 ref。可能指向存储库的一个标签/提交/分支。</li><li><code>ASDF_INSTALL_PATH</code> - <em>已经</em> 安装到的目录（或 <code>bin/install</code> 脚本执行情况下 <em>应该</em> 安装到的目录）</li></ul><p>这些附加的环境变量将可用于 <code>bin/install</code> 脚本：</p><ul><li><code>ASDF_CONCURRENCY</code> - 编译源代码时使用的内核数。对于配置 <code>make -j</code> 非常有用。</li><li><code>ASDF_DOWNLOAD_PATH</code> - <code>bin/download</code> 脚本下载源代码或二进制文件的路径。</li></ul><p>这些附加的环境变量将可用于 <code>bin/download</code> 脚本：</p><ul><li><code>ASDF_DOWNLOAD_PATH</code> - 源代码或二进制文件应该下载到的路径。</li></ul><h4 id="bin-list-all" tabindex="-1"><a class="header-anchor" href="#bin-list-all" aria-hidden="true">#</a> bin/list-all</h4><p>必须打印一个带有空格分隔的版本列表的字符串，示例输出如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">1.0.1 1.0.2 1.3.0 1.4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，最新版本应列在最后，以便它看起来更接近用户的提示。这很有帮助，因为 <code>list-all</code> 命令会在自己的行打印每个版本。如果有很多版本，那么早期版本可能会不在屏幕上。</p>`,16),r=a("code",null,"tac",-1),F=a("code",null,"sort -V",-1),h={href:"https://github.com/vic/asdf-idris/blob/master/bin/list-all#L6",target:"_blank",rel:"noopener noreferrer"},u=l('<h4 id="bin-download" tabindex="-1"><a class="header-anchor" href="#bin-download" aria-hidden="true">#</a> bin/download</h4><p>此脚本必须下载源代码或者二进制文件到 <code>ASDF_DOWNLOAD_PATH</code> 环境变量包含的路径。如果下载的源代码或者二进制文件是压缩的，则只有未压缩的源代码或二进制文件会放置在 <code>ASDF_DOWNLOAD_PATH</code> 目录中。</p><p>下载成功后脚本必须以 <code>0</code> 状态退出。如果下载失败，脚本必须以任何非零退出状态退出。</p><p>如果可能，脚本应该仅将文件放在 <code>ASDF_DOWNLOAD_PATH</code> 中。如果下载失败，则不应将任何文件放在目录中。</p><p>如果此脚本不存在，asdf 将假设存在 <code>bin/install</code> 脚本，将下载并安装该版本。asdf 仅在没有此脚本的情况下才能支持传统插件。所有插件都必须包含此脚本，最终将删除对传统插件的支持。</p><h4 id="bin-install" tabindex="-1"><a class="header-anchor" href="#bin-install" aria-hidden="true">#</a> bin/install</h4><p>本脚本应在 <code>ASDF_INSTALL_PATH</code> 中安装版本。默认情况下，asdf 将为 <code>$ASDF_INSTALL_PATH/bin</code> （可以通过可选的 <a href="#binlist-bin-paths">bin/list-bin-paths</a> 脚本自定义）目录中的任意文件创建垫片。</p><p>安装成功时，安装脚本应以 <code>0</code> 状态退出。如果安装失败，脚本应以任何非零退出状态退出。</p>',8),b=a("code",null,"ASDF_INSTALL_PATH",-1),m=a("code",null,"ASDF_INSTALL_PATH",-1),_={href:"https://github.com/asdf-vm/asdf/blob/242d132afbf710fe3c7ec23c68cec7bdd2c78ab5/lib/utils.sh#L44",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"ASDF_INSTALL_PATH",-1),y=l('<p>如果你希望你的插件使用 asdf 0.7._ 及更早版本和 0.8._ 及更高版本，请检查是否存在 <code>ASDF_DOWNLOAD_PATH</code> 环境变量。如果未设置，请在 <code>bin/install</code> 脚本回调时下载源代码。如果设置，则假设 <code>bin/downlaod</code> 脚本已经下载源代码。</p><h2 id="可选脚本" tabindex="-1"><a class="header-anchor" href="#可选脚本" aria-hidden="true">#</a> 可选脚本</h2><h4 id="bin-help-脚本" tabindex="-1"><a class="header-anchor" href="#bin-help-脚本" aria-hidden="true">#</a> bin/help 脚本</h4><p>这不是一个回调脚本，而是一组回调脚本，每个脚本将打印不同的文档到 STDOUT。下面列出了可能的回调脚本。请注意，<code>bin/help.overview</code> 是一种特殊情况，因为必须存在才能为脚本显示任何帮助输出。</p><ul><li><code>bin/help.overview</code> - 此脚本应该输出有关插件和所管理工具的一般描述。不应该打印任何标题，因为 asdf 将打印标题。输出可以是自由格式的文本，但理想情况下只有一个短段落。如果你希望 asdf 为你的插件提供帮助信息，则必须存在此脚本。所有其他的帮助回调脚本都是可选的。</li><li><code>bin/help.deps</code> - 此脚本应该输出为操作系统量身定制的依赖项列表。每行一个依赖项。</li><li><code>bin/help.config</code> - 此脚本应该打印对插件和工具可能有用的任何必需或可选配置。安装或编译该工具所需的任何环境变量或其他标志（尽可能针对用户的操作系统）。输出可以是自由格式的文本。</li><li><code>bin/help.links</code> - 这应该是与插件和工具相关的链接列表（同样，尽可能针对当前操作系统量身定制）。每行一个链接。行的格式可以是 <code>&lt;title&gt;: &lt;link&gt;</code> 或只是 <code>&lt;link&gt;</code>。</li></ul><p>这些脚本的每一个都应根据当前操作系统调整其输出。例如，在 Ubuntu 上，依赖脚本可以将依赖项输出为必须安装的 apt-get 包。设置变量时，脚本还应该根据设置变量 <code>ASDF_INSTALL_VERSION</code> 和 <code>ASDF_INSTALL_TYPE</code> 的值。它们是可选的，并不总是被设置。</p><p>帮助回调脚本<strong>不得</strong>输出核心 asdf-vm 文档中已涵盖的任何信息。不得出现一般的 asdf 使用信息。</p><h4 id="bin-latest-stable" tabindex="-1"><a class="header-anchor" href="#bin-latest-stable" aria-hidden="true">#</a> bin/latest-stable</h4><p>如果实现了此回调，asdf 将使用它来确定工具的最新稳定版本，而不是尝试自行判断。<code>asdf latest</code> 通过查看由 <code>list-all</code> 回调打印的最新版本，在从输出中排除了几种类型的版本（如发布候选版本）之后推断出最新版本。当你的插件的 <code>list-all</code> 回调打印同一工具的不同变体并且最新版本不是你希望默认使用的变体的最新稳定版本时，这种默认行为是不可取的。例如，对于 Ruby，最新的稳定版本应该是 Ruby（MRI）的常规实现，但最后 <code>list-all</code> 回调打印的是 truffleruby 版本。</p><p>此回调使用单个 “过滤器” 字符串调用，因为它是唯一的参数。这应该用于过滤所有最新稳定版本。例如对于 Ruby，用户可以选择传入 <code>jruby</code> 以选择 <code>jruby</code> 的最新稳定版本。</p><h4 id="bin-list-bin-paths" tabindex="-1"><a class="header-anchor" href="#bin-list-bin-paths" aria-hidden="true">#</a> bin/list-bin-paths</h4><p>列举指定工具版本的可执行程序。必须打印一个带有空格分隔的包含可执行文件的目录路径列表的字符串。路径必须相对于传递的安装路径。示例输出如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">bin tools veggies</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将指示 asdf 为 <code>&lt;install-path&gt;/bin</code>、<code>&lt;install-path&gt;/tools</code> 和 <code>&lt;install-path&gt;/veggies</code> 中的文件创建垫片。</p><p>如果未指定此脚本，asdf 将在安装中查找 <code>bin</code> 目录并为这些脚本创建垫片。</p><h4 id="bin-exec-env" tabindex="-1"><a class="header-anchor" href="#bin-exec-env" aria-hidden="true">#</a> bin/exec-env</h4><p>设置环境变量以运行包中的二进制文件。</p><h4 id="bin-exec-path" tabindex="-1"><a class="header-anchor" href="#bin-exec-path" aria-hidden="true">#</a> bin/exec-path</h4><p>获取工具的指定版本的可执行程序路径。必须打印具有相对可执行程序路径的字符串。这允许插件有条件地覆盖垫片指定的可执行程序路径，否则返回垫片指定的默认路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">用法：</span></span>\n<span class="line"><span style="color:#F8F8F2;">  plugin/bin/exec-path </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">install-path</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">executable-path</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">例子调用：</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/plugins/foo/bin/exec-path </span><span style="color:#E6DB74;">&quot;~/.asdf/installs/foo/1.0&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;foo&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;bin/foo&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">输出：</span></span>\n<span class="line"><span style="color:#F8F8F2;">  bin/foox</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bin-uninstall" tabindex="-1"><a class="header-anchor" href="#bin-uninstall" aria-hidden="true">#</a> bin/uninstall</h4><p>卸载某个工具的指定版本。</p><h4 id="bin-list-legacy-filenames" tabindex="-1"><a class="header-anchor" href="#bin-list-legacy-filenames" aria-hidden="true">#</a> bin/list-legacy-filenames</h4><p>为此插件注册其他设置器文件。必须打印一个带有空格分隔的文件名列表的字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">.ruby-version .rvmrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：这仅适用于在 <code>~/.asdfrc</code> 配置文件中启用了 <code>legacy_version_file</code> 选项的用户。</p><h4 id="bin-parse-legacy-file" tabindex="-1"><a class="header-anchor" href="#bin-parse-legacy-file" aria-hidden="true">#</a> bin/parse-legacy-file</h4><p>这可用于进一步解析 asdf 找到的传统文件。如果 <code>parse-legacy-file</code> 未实现，asdf 将会简单读取文件来确定版本。脚本将传递文件路径作为其第一个参数。</p><h4 id="bin-post-plugin-add" tabindex="-1"><a class="header-anchor" href="#bin-post-plugin-add" aria-hidden="true">#</a> bin/post-plugin-add</h4><p>这可用于在插件添加到 asdf 后运行任何安装后操作。</p><p>该脚本可以访问插件的安装路径（<code>${ASDF_PLUGIN_PATH}</code>）和源 URL（<code>${ASDF_PLUGIN_SOURCE_URL}</code>），如果有的话。</p><p>其他请参考相关钩子：</p><ul><li><code>pre_asdf_plugin_add</code></li><li><code>pre_asdf_plugin_add_${plugin_name}</code></li><li><code>post_asdf_plugin_add</code></li><li><code>post_asdf_plugin_add_${plugin_name}</code></li></ul><h4 id="bin-post-plugin-update" tabindex="-1"><a class="header-anchor" href="#bin-post-plugin-update" aria-hidden="true">#</a> bin/post-plugin-update</h4><p>这可用于在 asdf 下载更新的插件后运行任何插件更新后操作。</p><p>该脚本可以访问插件的安装路径（<code>${ASDF_PLUGIN_PATH}</code>）、更新前的 git-ref（<code>${ASDF_PLUGIN_PREV_REF}</code>）和更新后的 git-ref（<code>${ASDF_PLUGIN_POST_REF}</code>）。</p><p>其他请参考相关钩子：</p><ul><li><code>pre_asdf_plugin_updated</code></li><li><code>pre_asdf_plugin_updated_${plugin_name}</code></li><li><code>post_asdf_plugin_updated</code></li><li><code>post_asdf_plugin_updated_${plugin_name}</code></li></ul><h4 id="bin-pre-plugin-remove" tabindex="-1"><a class="header-anchor" href="#bin-pre-plugin-remove" aria-hidden="true">#</a> bin/pre-plugin-remove</h4><p>这可用于在从 asdf 中删除插件之前运行任何预删除操作。</p><p>该脚本可以访问安装插件的路径（<code>${ASDF_PLUGIN_PATH}</code>）。</p><p>其他请参考相关钩子：</p><ul><li><code>pre_asdf_plugin_remove</code></li><li><code>pre_asdf_plugin_remove_${plugin_name}</code></li><li><code>post_asdf_plugin_remove</code></li><li><code>post_asdf_plugin_remove_${plugin_name}</code></li></ul><h2 id="asdf-命令行的扩展命令" tabindex="-1"><a class="header-anchor" href="#asdf-命令行的扩展命令" aria-hidden="true">#</a> asdf 命令行的扩展命令</h2><p>插件可以通过提供 <code>lib/commands/command*.bash</code> 脚本或者可执行程序来定义新的 asdf 命令，这些脚本或可执行程序将使用插件名称作为 asdf 命令的子命令进行调用。</p><p>例如，假设一个 <code>foo</code> 插件有以下文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">foo/</span></span>\n<span class="line"><span style="color:#F8F8F2;">  lib/commands/</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-bat.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-bat-man.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-help.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户现在可以执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">$ asdf foo         </span><span style="color:#88846F;"># 等同于运行 `$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bar     </span><span style="color:#88846F;"># 等同于运行 `$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash bar`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo </span><span style="color:#66D9EF;">help</span><span style="color:#F8F8F2;">    </span><span style="color:#88846F;"># 等同于运行 `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-help.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bat man </span><span style="color:#88846F;"># 等同于运行 `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat-man.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bat baz </span><span style="color:#88846F;"># 等同于运行 `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat.bash baz`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件作者可以使用此功能来提供与其工具相关的实用命令，或者可以创建 asdf 本身的新命令扩展的插件。</p><p>调用时，如果扩展命令未设置其可执行位，则它们将作为 bash 脚本获取，且具有来自 <code>$ASDF_DIR/lib/utils.bash</code> 的所有可用功能。 此外，<code>$ASDF_CMD_FILE</code> 解析所获取文件的完整路径。 如果设置了可执行位，则只是执行它们并替换 asdf 执行。</p>',51),f={href:"https://github.com/asdf-community/asdf-haxe",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,"haxe",-1),A=a("code",null,"asdf haxe neko-dylibs-link",-1),D=l(`<p>如果你的插件提供了 asdf 扩展命令，请务必在插件的 README 文件中提及。</p><h2 id="自定义垫片模板" tabindex="-1"><a class="header-anchor" href="#自定义垫片模板" aria-hidden="true">#</a> 自定义垫片模板</h2><p><strong>请仅在真的需要时才使用此功能</strong></p><p>asdf 允许自定义垫片模板。对于名为 <code>foo</code> 的可执行程序，如果有一个 <code>shims/foo</code> 的文件在插件中，那么 asdf 将复制这个文件替代使用标准垫片模板。</p><p>必须明智地使用这一点。对于目前的 AFAIK，它仅仅被使用在了 Elixir 插件中，因为一个可执行程序除了是可执行程序文件之外，还被读作为 Elixir 文件，这使得无法使用标准的 bash 垫片。</p><h2 id="测试插件" tabindex="-1"><a class="header-anchor" href="#测试插件" aria-hidden="true">#</a> 测试插件</h2><p><code>asdf</code> 包含 <code>plugin-test</code> 命令用于测试插件。你可以像下面这样使用它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin </span><span style="color:#66D9EF;">test</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">plugin-name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">plugin-url</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [--asdf-tool-version </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">] [--asdf-plugin-gitref </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-ref</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">] [test-command</span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只有前两个参数是必须的。 如果指定了 _<em>version</em>，则该工具将随指定版本一起安装。默认返回为 <code>asdf latest &lt;plugin-name&gt;</code>。 如果指定了 <em>git-ref</em>，则插件将检查提交/分支/标签。这对于在该插件的 CI 上测试拉取请求非常有用。</p><p>剩下的参数被视为要执行的命令，以确保安装的工具正常工作。通常情况下，它需要带 <code>--version</code> 或者 <code>--help</code>。例如，要测试 NodeJS 插件，我们可以运行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin </span><span style="color:#66D9EF;">test</span><span style="color:#F8F8F2;"> nodejs https://github.com/asdf-vm/asdf-nodejs.git node --version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们强烈建议你在 CI 环境中测试你的插件，并确保它可以在 Linux 和 OSX 上运行。</p><h4 id="github-action-示例" tabindex="-1"><a class="header-anchor" href="#github-action-示例" aria-hidden="true">#</a> GitHub Action 示例</h4>`,13),x={href:"https://github.com/asdf-vm/actions",target:"_blank",rel:"noopener noreferrer"},S=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">steps</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#F92672;">name</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf_plugin_test</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">uses</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf-vm/actions/plugin-test@v1</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">with</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">command</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;my_tool --version&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">env</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">GITHUB_API_TOKEN</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">\${{ secrets.GITHUB_TOKEN }}</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;"># 自动提供</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="travisci-配置示例" tabindex="-1"><a class="header-anchor" href="#travisci-配置示例" aria-hidden="true">#</a> TravisCI 配置示例</h4><p>这是一个 <code>.travis.yml</code> 示例文件，请根据你的需要进行自定义：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">language</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">c</span></span>
<span class="line"><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf plugin test nodejs $TRAVIS_BUILD_DIR &#39;node --version&#39;</span></span>
<span class="line"><span style="color:#F92672;">before_script</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">git clone https://github.com/asdf-vm/asdf.git asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">. asdf/asdf.sh</span></span>
<span class="line"><span style="color:#F92672;">os</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">linux</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">osx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 当使用其他 CI 时，你将需要确认哪些变量映射到存储库路径。</p><p>你还可以选择将相对路径传递给 <code>plugin-test</code>。</p><p>例如，如果在存储库目录中运行测试脚本：<code>asdf plugin test nodejs . &#39;node --version&#39;</code>。</p><h2 id="github-api-频率限制" tabindex="-1"><a class="header-anchor" href="#github-api-频率限制" aria-hidden="true">#</a> GitHub API 频率限制</h2><p>如果你的插件的 <code>list-all</code> 依赖于访问 GitHub API，请确保在访问时提供授权令牌，否则你的测试可能会因频率限制而失败。</p>`,9),T=a("code",null,"public_repo",-1),E={href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},I=l(`<p>然后，在 travis.ci 构建设置中添加一个名为 <code>GITHUB_API_TOKEN</code> 的 <em>安全</em> 环境变量。并且 <em>绝对不要</em> 在你的代码中公布你的 token。</p><p>最后，添加如下内容到 <code>bin/list-all</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">cmd=</span><span style="color:#E6DB74;">&quot;curl -s&quot;</span></span>
<span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> [ </span><span style="color:#F92672;">-n</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$GITHUB_API_TOKEN</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> ]</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">then</span></span>
<span class="line"><span style="color:#F8F8F2;"> cmd=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$cmd</span><span style="color:#E6DB74;"> -H &#39;Authorization: token </span><span style="color:#F8F8F2;">$GITHUB_API_TOKEN</span><span style="color:#E6DB74;">&#39;&quot;</span></span>
<span class="line"><span style="color:#F92672;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">cmd=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$cmd</span><span style="color:#E6DB74;"> </span><span style="color:#F8F8F2;">$releases_path</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向官方插件存储库提交插件" tabindex="-1"><a class="header-anchor" href="#向官方插件存储库提交插件" aria-hidden="true">#</a> 向官方插件存储库提交插件</h2><p><code>asdf</code> 可以通过指定插件存储库 url 轻松安装插件，比如 <code>plugin add my-plugin https://github.com/user/asdf-my-plugin.git</code>。</p><p>为了使你的用户更轻松，你可以将插件添加到官方插件存储库中，以列出你的插件并使用较短的命令轻松安装，比如 <code>asdf plugin add my-plugin</code>。</p>`,6),L={href:"https://github.com/asdf-vm/asdf-plugins",target:"_blank",rel:"noopener noreferrer"};function k(N,P){const e=i("ExternalLinkIcon");return d(),c("div",null,[t,a("p",null,[s("如果从网站上的发布页面拉取版本，建议尽可能不对版本进行排序。通常，版本已经按照正确的顺序排列，或者以相反的顺序排列，在这种情况下，像 "),r,s(" 这样的东西就足够了。如果必须手动对版本进行排序，则不能依赖 "),F,s("，因为 OSX 操作系统不支持。一种可以替代的排序功能是 "),a("a",h,[s("更好的选择"),n(e)]),s("。")]),u,a("p",null,[s("如果可能，脚本应仅在安装脚本认为工具的生成和安装成功后，才将文件放在 "),b,s(" 目录中。asdf 检查 "),m,s(" 目录的 "),a("a",_,[s("扩展"),n(e)]),s(" 以确认是否安装了该工具版本。如果在安装过程开始时填充了 "),v,s(" 目录，则在安装过程中在其他终端中运行的其他 asdf 命令可能会认为该工具版本已经安装，即使它还未完全安装。")]),y,a("p",null,[s("这个功能的一个很好的例子是像 "),a("a",f,[g,n(e)]),s(" 这样的插件。 它提供了 "),A,s(" 来修复 haxe 可执行文件期望找到相对于可执行目录的动态链接库的问题。")]),D,a("p",null,[a("a",x,[s("asdf-vm/actions"),n(e)]),s(" 存储库为托管在 github 的项目提供了使用 Github Action 来测试插件的可能。")]),S,a("p",null,[s("为此，创建一个仅具有 "),T,s(" 权限的 "),a("a",E,[s("新个人令牌"),n(e)]),s("。")]),I,a("p",null,[s("请查看插件存储库 "),a("a",L,[s("asdf-vm/asdf-plugins"),n(e)]),s(" 中的说明了解更多。")])])}const B=o(p,[["render",k],["__file","create.html.vue"]]);export{B as default};

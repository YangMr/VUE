# Vue.js2开发

## 课程目标

**&emsp;&emsp;学会从简单到复杂企业级应用的VueJS程序编写方法**

**&emsp;&emsp;能在单页和多页应用中自如使用VueJS**

**&emsp;&emsp;真正理解VueJS的背后原理，并在真实项目中应用它们**

## 学习条件

**&emsp;&emsp;学习本课程需要对HTML、CSS、JS有基本了解，只要你想学习VueJS前端框架，认真学习本课程,相信你一定能够学会的。**


## 第1章 从这里开始

### 1.1 课程介绍

#### Vue是什么?

&emsp;&emsp;Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

#### Vue的应用(Vue能做什么)?

**&emsp;Vue能应用于各个方面,比如:**

&emsp;&emsp;1. 在现有项目添加JavaScript驱动的小控件

&emsp;&emsp;2. 还能开发中型应用,你能用JavaScript控制整个页面,对部分页面重新渲染,页面响应非常迅速,正如课程中的另一个例子一样

&emsp;&emsp;3. 此外,Vue还能开发大型企业级应用,单页面应用,即你的整个应用,在用户感觉中是多页面,看起来是这个样子的,Vue驱动整个页面,局部渲染部分页面,让用户以为是切换了不同页面,但其实是个单页面,JavaScript在起作用罢了.

#### 为什么是JavaScript?

因为它运行于浏览器,而无需借助任何服务器(Server),重新渲染部分页面也无需等待,因此页面响应非常迅速,用户感受很好,也提供了非常友好的用户体验.


#### 为什么要使用这个框架?

##### &emsp;接下来我们聊聊为什么要选择Vue这个框架,而不是像Angular/React等类似框架?

&emsp;&emsp;首先,从体积来说,Vue非常精悍小巧,核心代码的压缩包版本只有16KB,16KB并不包括额外引入的路由插件,即使算上它,整个框架还是非常小,是个功能聚焦,直击要害的框架,但因为体积小它不仅加载快,运行时也非常快,某些基准测试显示,Vue的运行时甚至超过Angular/React,当然不同应用的运行时会有所差异,但可以说它真的很快,这也进一步增强了Vue响应迅速的体验.


#### 它会如何帮助你?

&emsp;&emsp;你可能会觉得如此小而快的框架,能提供的功能肯定不多,那你错了,Vue提供了丰富的功能,后面我会一一给大家讲解所用的功能特性,你会学到其中实现的原理,如何使用以及何时使用,以及框架背后的架构思维,你会发现它的扩展性很强,比如引入路由插件,Vue框架对这些扩展支持的很好,再次给大家说一下,后面我会一一给大家讲解所有的功能特性,相信大家现在对Vue有了大体印象.

&emsp;&emsp;接下来,让我们正式开始的学习Vue吧,用Vue来创建第一个应用,同时也看一下如何安装Vue.


### 1.2 实现第一个VueJS应用

- 创建第一个Vue应用其实非常简单,先打开官网首页 ([https://vuejs.org/](https://vuejs.org/ "vue"))
- 看到这个起步(GET STARTED)按钮,点击进入Vue官方文档,官方文档永远值得一看
- 现在点击安装(Installation)

#### Vue的安装方式?

- 本地安装
	- 可以直接下载Vue,后面我们会演示
	- 或者像我现在一样,直接从CDN获取,引入到我们的服务器中,点击unpkg,然后直接复制url,项目中引入该链接,就能获取到Vue
- 命令安装
	- 后面课程,我们会使用复杂的(也就是命令安装),通过webpack配置来打包所有文件

#### 在JS Fiddle上操作 或者 本地上操作

在这里我们使用JS Fiddle,它是个网页在线编辑器,只能开发非常简单的HTML CSS JavaScript项目,左上角是HTML编辑区域,在这里引入脚本,现在让我们输入script,键入tab,就会自动补齐成<script>标签,然后在<script>标签里面添加src属性,直接插入刚才复制的链接:

	<script src="https://unpkg.com/vue@2.6.2/dist/vue.js"></script>

可以就保持这样,也可以删除版本信息:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

如果删除的话,从而自动获取最新版本,这样就成功的引入了vue,现在可以使用vue的所有特性.

#### 创建第一个Vue应用

现在我想添加一个内容为Hello World的段落:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<p>Hello World</p>

这么"打招呼"看起来很无趣,没有任何JavaScript参与.

我们要用Vue来输出Hello World:

HTML:
	
	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<p></p>

为此,来到左下角的JavaScript编辑区域,有了上面的Vue引入,现在可以使用Vue中的一个核心对象,`Vue对象`,用new关键词和Vue来创建一个实例,这个实例就是个Vue实例,这样创建的Vue实例,其核心在于能让你处处使用Vue特性,创建的Vue实例有个最重要的功能,控制自己的模板即HTML中的代码,这些代码会最终渲染到页面上,要让该实例实现该功能,需传参至构造函数,参数是个对象,其中有个非常重要的属性,`el`属性,这是Vue的保留属性,Vue会识别,`el`属性接受一个字符串,该字符串定义了Vue实例能控制的HTML片段.

JS:

	new Vue({
		el : ""
	})

这里的"控制"是指可以用Vue实例改变HTML内容,等下我们就会看到.

这里我想控制`<p>`标签这部分,用`<div>`标签把它包起来,输入`div#app`,在按`tab`键,会自动补齐成id为app的`<div>`标签,把段落移入`<div>`标签,

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p></p>
	</div>	

现在可以通过app的id属性选择这个`<div>`元素,`el`的属性值写法类似CSS选择器,输入#app,就选择了样式id为app的元素,如果输入的是 .app,那就选择了样式类为app的第一个元素,现在我们就控制了这个div元素,也就是这个Vue实例的模板

JS:

	new Vue({
		el : "#app"
	});
	

要想有所输出,就需要数据,Vue有个专门的属性,`data`属性,也是个保留属性,它不是字符串,而是个对象,势力中需要的所有数据都存入其中:

JS:

	new Vue({
		el : "#app",
		data : {

		}
	});

比如说,我们需要一个title属性,属性值我们随便写,比如Hello World

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		}
	})

我想在模板中输出这个,之前我直接写死在HTML中,现在这个模板能被Vue控制了,只要在模板中简单添加特殊的Vue语法,双大括号,开始...,结尾...

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>{{ title }}</p>
	</div>
	
在内部添加title即可,Vue会自动在data对象中查找,刚说过,data是保留属性,在data对象中找到title属性,然后输出到HTML中,按住Ctrl + Enter运行查看页面结果,就可以看到右边出现Hello World,这是因为Vue控制了这段HTML模板,从而把内容title输出到了页面,

### 1.3 扩展这个VueJS应用

上节课,我们已经创建并开始了第一个Vue应用,现在让我们稍微提高一点,并且在下面的课程中更加深入地学习它

现在,我需要添加一个`<input>`标签,键入input然后单击tab,JSFiddle就会给我自动补全,对于这个`<input>`标签,我想让用户输入一些信息,并且依此更新title,

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<input type="text">

		<p>{{ title }}</p>
	</div>	

这里我可以通过在`<input>`标签里添加一个Vue能够识别的命令来实现它,这个我们称之为 "指令(directive)",在这里我们需要的指令时v-on,

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<input type="text" v-on>

		<p>{{ title }}</p>
	</div>

这是一个Vue能够识别的特殊指令,在这里请大家留意,id为app元素里面的这部分内容是被Vue所控制的.

这个v-on指令是告诉Vue:"请监听某些事件",那么到底是哪一个事件?

这里要传入一个参数,此参数要被传入指令,传参可以用冒号之后接上事件的名称,每当输入内容,就会触发的input事件

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<input type="text" v-on:input="">

		<p>{{ title }}</p>
	</div>	

然后给它赋一个值,在双引号之间加上代码,此代码会在每次事件更新时执行.

我想在这里调用一个方法,调用一个方法非常简单,可以在这直接调用changeTitle,当然这个方法还不存在,所以让我们来创建它.

HTML:

创建方法非常简单,就像data一样,Vue实例同样也有一个保留属性,即methods,别担心,你将学习所有的保留属性名称,和它们是怎么工作的,methods是一个对象,我么可以在这里设置所有在Vue实例和模板中使用的方法,既然上面用了changeTitle,这里就用这个名来当作函数名,当然,这是一个函数,

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		},
		methods : {
			changeTitle : function(){

			}
		}
	})

在这个函数中,我想改变title,这里需要注意一下,我不会写成data.something

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		},
		methods : {
			changeTitle : function(){
				data.title = "learning vue.js"
			}
		}
	})

而是写this.title = 

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		},
		methods : {
			changeTitle : function(){
				this.title = "learning vue.js"
			}
		} 
	})

this指代data对象,这看起来有一点奇怪,其实确实很奇怪,这是Vue在背后变的一些戏法,它自动的把所有data对象的属性,如title,代理到最顶层的Vue对象上,这就是为什么可以利用this来获取它,这个我们会在后面的课程讲到,现在最重要的是,你可以获得存储在data的所有属性,获取存储在methods的所有方法,你可以用this.name来访问它们,this.title能让我们访问这个的title.

现在我想用 用户的输入值来赋值,此外,多亏了原生JavaScript,它为我们自动创建了一个event对象,这与Vue无关,而是和原生JavaScript以及DOM的工作方式有关系,我获取了这个event对象

在本例中,event对象存储了target属性,即`<input>`标签,现在这个被JavaScript自动创建的event对象,被Vue自动的传入这个方法,那么我就可以获取它,命名为event,再一次强调,它是由JavaScript自动创建的,这里我可以 #  #直接写event,我们知道这个默认对象有一个target属性,并且我也知道这个target就是`<input>`标签,所以我们会有一个value属性存储用户输入的值.

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		},
		methods : {
			changeTitle : function(event){
				this.title = event.target.value
			}
		}
	})

那么在这儿其实就完成了,再次Ctrl + Enter,就会看到输入框,如果输入一些东西,我们就看到title更新了.

这就是我们的第一个Vue应用,真的很酷,接下来,你可以根据这节课的内容,尝试在你本机上建立一个一样的例子,下节课我们将跟深入的学习vue

### 1.4 课程结构

![](https://i.imgur.com/wC8AGKb.jpg)

我们已经创建了第一个应用,希望你已经看到上手Vue是非常容易的,现在我们在课程的Getting Started,但是我们很快就会讲完,之后我们就会更加深入的学习VUE.

开始学习如何与DOM进行交互,如何以不同的方式输出数据,如何绑定到HTML属性,如何监听事件,以及更多更多,这些其实是这个课程的不同章节,你会对Vue如何工作,有一个非常深的理解,接着就是更加深入的Vue实例,它是你所创建和使用的每一个Vue应用中的核心对象,它是怎样工作的,遵循哪一个生命周期?以及怎么利用它?然后我们就要放弃第一部分使用的JSFiddle,我们会带领你学习更专业的工作流程,我们将会使用Vue命令行工具(CLI)来完成这些,但并不是Vue命令行工具做了所有的工作,它只是一个容易使用和提供快速上手模板的命令行工具,在这部分我们会讨论更多的细节,例如如何使用WebPack,准备好了这些专业的工作流后,我们会深入组件(Components),一个vue中非常重要的概念,用组件创建出完整的应用,可以创建包含模板以及业务逻辑的可复用控件,然后你可以在应用的不同地方使用它,它是真的很有用,这里有好几章内容有关于Vue基础概念,如何进行组件通信,然后是一些高级的理念,完成这些核心特性讲解后,然后我们会开始学习表单,我们如何处理用户输入,以及使用不同的表单元素,以及如何创建我们自己的表单控件.

之后我们会继续嘘唏指令(Directives)过滤器(Filters)以及混合(Mixins),我们会了解这些是什么?它们能为你做什么?怎么把它们应用到你的程序中?我们正变得越来越深入,接着我们就会学习动画(Animation)和过渡(Transitions),你想让你的应用变漂亮,那么我们会学习Vue是怎么轻松做到的,学习它是怎么支持动画,动态内容或者从一个组件切换到另一个,到此我们就真正的深入掌握了Vue,但我们仍然处在Vue的应用层面.

如果我们需要连接服务器并存储一些数据呢,我们当然可以这么做,我们会在这部分学习如何从Vue内部使用Http,接着是时候了解如果我们需要创建更大的应用呢,例如单页面应用(SPA),于是我们就需要路由(Routing),路由我们也有专门的一章来讲解,你将会学习路由将如何工作,如何设置路由?如何利用子路由?以及如何传参等等?这些属于SPA的范围,这样的应用其实需要了解一下状态管理,你会看到在更复杂的应用中管理状态,将很快变成一个问题,当然,我们也提供了解决方案,Vuex是一个非常棒的库,它让管理状态变的更容易,这样SPA部分就结束了.

接着我们就会学习部署,我们怎样才能把应用部署到服务器上,这听起来很棒,但对我们来说,这确实是一种深入学习它的方式,我们很快就会讲到.

下节课我们了解一下课程说明,它能让你在课程之外尽可能简单的取得进步,

### 1.5 课程说明

在接下来的课程中,我会详细介绍Vue所涉及的概念,但有时仍然不够,你不会一直看着我敲代码吧? 你肯定会想自己动手实践.

因此我在课程中设计了四个项目:

- 项目1: 基础 模板交互
- 项目2: 组件
- 项目3: 动画
- 项目4: 终极项目(包括路由,状态管理)

用来实践课程里面的各种新概念,以及知识点,所以这几个项目将穿插于课程中.

最终我们会开发一个单页面应用来结束这个课程,除此之外,我们还会在教学当中穿插一些小练习,让你巩固所学习的知识点,那一章涉及到的核心概念,结合项目和练习,你将面临很多编码挑战,它能让你独立实践教学当中的东西.

此外,每章节的代码我会上传到我的github上面,你可以直接下载源码来阅读,并且实践学习.

说了那么多,让我们看下如何在本地项目中安装Vue,如果你不想用第一章的JSFiddle,在本地项目中安装之后,我们就可以进入实战了

### 1.6 本地配置VueJS开发环境

在第一部分的核心课程中,我会使用JSFiddle,因为他能让我聚焦在我给你讲的东西上,你也比较容易跟上,也许你现在不想使用它,也许你想在一开始就用本地配置,不过后面确实有一个真正使用本地配置的项目.

但如果你想直接就用本地配置,也不是不可能,我们可以到Vue.js的安装页面([https://vuejs.org/v2/guide/installation.html](https://vuejs.org/v2/guide/installation.html)),在这儿你可以在下载在本地使用Vue.js,对于生产环境,你可以选择生产版本,但是对于开发环境,你应该用开发版本,它会给我们额外的警告和错误提示,你可以直接下载,然后存在某个文件夹,我把下载的vue.js文件放到当前目录里面.

接下来,在创建一个html文件,将vue.js文件通过`<script>`标签引入到当前html文件里面,就可以使用vue的所有功能特性了,这样你就可以在本地跟着我做,vue还有更加负责的配置,这个我们会在后面讲,有了这些,你就可以开始了,让我们开始更加深入的下一课吧.

## 第2章 通过VueJS来与DOM交互

### 2.1 本章介绍

欢迎来到本节课,从这里开始我们将真正深入Vue的世界,上一节课你已经见识过第一个Vue应用,学习了与HTML交互的基本方式,现在是时候真正了解到底发生了什么,并看一下Vue给我们提供的其他工具,我依然会使用JSFiddle来进行演示,如上节课所说,你可以使用你的本地配置,让我们真正深入Vue并开始学习它吧,

### 2.2 理解VueJS模板

回到JSFiddle,我们来学习一个全新的项目,

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>{{ title }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		}
	})

你应该能看出来这个项目很简单,在这个`<p>`标签里面已经输出了一个标题,
就是Hello World,就和第一章一样,只不过文字不同,而且没有事件,还是挺简单的,因为我还是打算从这里的Vue实例和HTML代码之间的联系开始,我们提到过两者之间存在联系,但还有一件事件我需要强调一下,通过创建这个新的Vue实例,注意虽然没有把它存入一个变量内,Vue实例还是被创建了,通过创建这个Vue实例我们就建立了这一联系,Vue基于上面的HTML代码创建了一个模板,要特别注意理解的是Vue在运行时,并不直接使用我们写的HTML代码,实际运行的网页里面也没有我们写的这些命令,我们来看看就知道了,在开发者工具之中查看这个`<p>`标签,你看里面只有"Hello World",没有大括号也没有看到其他Vue相关的代码,没有隐藏的提示也没有魔法,什么都没有,Vue根据HTML代码创建的模板存储在内部,然后用这个模板创建真正渲染成DOM的HTML代码,理解这一机制很重要,因为它让我们可以这样使用模板,和其他我在这门课程里面将要讲的东西一样,我们写的HTML代码不是最后在浏览器里面运行的那一份,中间有一层Vue实例,把HTML代码转换成模板,然后渲染模板,比如像这里添加title等,然后输出最终用于渲染的HTML代码,可能你已经知道了这一机制,不过理解这一机制确实很重要,它让我们能像HTML里面写的这种代码,讲完了这一机制,下面我们将深入了解如何通过Vue模板与DOM交互,

### 2.3 VueJS的模板语法和实例

我们已经学过了如何输出Vue实例内data对象内存储的简单属性,注意Vue实例中存储在data属性内的数据,例如这里的title,可以像这样在模板里直接输出,不需要用this.title或者data.title来访问,data属性内的所有属性都可以这样直接访问:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>{{ title }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		}
	})

刚才讲的这点很重要,应该牢牢记住

### 2.4 访问Vue实例里的数据

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>{{ sayHello() }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		},
		methods : {
			sayHello : function(){
				return title;
			}
		}
	})

这里需要特别注意,因为在Vue实例中如果我们想在函数中输出title,也就是说我们要返回title,而不是Hello,那样写是不行的,因为不像是在模板中我们可以直接访问所有的属性和方法,那是Vue给我们提供的便利,但在JavaSript代码中就不能这样了,不过我们还是由访问的方法,这里的title属性属于data这个对象,通常情况下,我们不能用this来调用title属性,因为this并不是指代data对象,幸亏Vue有一些神奇的能力,他会帮我们管理这些属性,当然这种方式也可以用来调用方法,在Vue的帮助下,只要使用this,在Vue实例中的任何地方我们就可以访问所有的属性和方法了.

所以在上面代码示例当中,我们就可以通过this.title来调用data中的title属性.

在这之后我们还会更加详细的讲解Vue实例.

在这之后,Vue为我们提供了某种方式,可轻松访问属性,所以要记住这一点,尤其是模板语法中没有this,这里是有的,如果现在刷新一下就可以看到变化了,仍是显示Hello World,但这次是通过调用函数访问title属性来实现的,

### 2.5 属性绑定

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>{{ sayHello() }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World"
		},
		methods : {
			sayHello : function(){
				return title;
			}
		}
	})

注意熟悉这里的双大括号语法,应该清楚了解它,因为后面经常使用,如果你想做点别的,比如插入一个链接,正如他的名称所示,保存一个链接例如baidu.com保存在这个p标签里面,如果要显示打招呼以外的内容,比如输出这个链接,我们可以键入一个`<a>`标签,叫它"百度",因为它指向百度的域名,在href属性内用双大括号语法输出这个链接地址,点击运行,超链接就会显示,点击超链接,那么大家可以看到没能打开百度,大括号被URL编码了,打开的是两个大括号和空格的编码,link这四个字母,再加空格和两个大括号的编码,即这部分也被当做链接来解析了,这很正常,因为Vue不支持这样的绑定,我们不能再HTML元素属性里面使用大括号语法,这样插入超链接是不行的,只能在放普通文本的地方使用双大括号语法,在HTML属性上则不可以,那我们应该怎么动态绑定这个超链接呢?

这个功能在实际开发中经常用到,不用担心,Vue可以动态绑定超链接,先删除链接再引入,v-bind这个Vue指令告诉Vue不能用普通HTML属性或者说不要按照普通的HTML属性来处理,而是绑定这个属性,这里还需要在v-bind后面加一个冒号(:)来传递参数,传递的参数是需要绑定的HTML属性的标准名称,这里就是href,这样一来,我们就可以在引号里面绑定链接了,这里不用加大括号是因为引号内部已经在Vue模板语言作用域内,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com"
		},
		methods : {
			sayHello : function(){
				return title;
			}
		}
	})

运行一下,点击超链接就可以进入到百度了,因为v-bind指令把链接动态绑定了,

### 2.6 理解和使用指令

那什么是指令呢?如果指令可以让我们完成这些事,那应该怎么去理解指令这个东西呢?

指令基本上就是你放在代码中的一些指示,Vue为我们提供了一些指令,数量并不多,因为大部分事情差不多都被Vue搞定了,而且后面你还可以学习怎么写自定义指令,再回来讲指令,它就是一个指示,而这里这个v-bind指令会指示Vue,将一些东西和我的数据绑定,数据当然也包括所用函数,它们都存储于下面的Vue实例,这里我们用的是双大括号(来调用函数),在双大括号不适用时,就要使用指令.

v-bind指令需要一些参数,一般用冒号(:)后加上参数的方式来传递,这样参数就会绑定到某个HTML属性上,这里就是这个链接的href属性,代码如下所示:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com"
		},
		methods : {
			sayHello : function(){
				return title;
			}
		}
	})

引号里就是你想要从Vue实例中绑定的东西,属性或者函数这些,在这里就是link属性,一般情况下你不能给HTML属性传递动态数据,有了Vue这些都是可以实现的了.

### 2.7 用v-once禁止二次渲染

我们再来丰富一下上一节课的应用,比如说我们在`<h1>`标签里要放一个title,这里我要输出title,它的值是Hello World,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<h1>{{ title }}</h1>
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com"
		},
		methods : {
			sayHello : function(){
				return title;
			}
		}
	})

在sayHello()中,我做了同样的事,只不过用的是函数,在这里函数里,如果我要将title的值改成Hello,像这样,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<h1>{{ title }}</h1>
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com"
		},
		methods : {
			sayHello : function(){
				this.title = "Hello";
				return title;
			}
		}
	})

刷新页面后,我们可以看到两个Hello,因为当执行sayHello()的时候,我们覆写了title的值,改成了只有Hello,所以在两个地方都输出了Hello.

如果我们想让title的值一直保持在初始值呢?不想让它的值像这里这样被覆写,我们可以通过一个指令来完成这件事,这个指令可以通过插值作用在HTML元素上,这个指令就是v-once,把它加到HTML元素中后,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<h1 v-once>{{ title }}</h1>
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com"
		},
		methods : {
			sayHello : function(){
				this.title = "Hello";
				return title;
			}
		}
	})

这个标签中间的所有内容只会被渲染一次,之后就不能再改变,不会像刚才 title在后面被覆写了,刷新页面,我们看到的是Hello World,也就是初始值,它并不会被之后的覆写操作所修改,在你的应用中可能会需要这种特性,那用v-once就可以让内容保持在初始值,而不会在后面被覆写.

### 2.8 如何输出基础的HTML

根据上一节课的内容,我们还可以进行丰富,比如这里有个finishedLink属性,这个属性不像link,它不是个URL,而是一个完整的`<a>`标签,我们可以直接写HTML代码,示例代码如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<h1>{{ title }}</h1>
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com",
			finishedLink : "<a href='https://www.baidu.com'>baidu</a>"
		},
		methods : {
			sayHello : function(){
				this.title = "Hello";
				return title;
			}
		}
	})

就像这样,这个标签也是链接到baidu.com,当然也要记得,这不只是URL,而是一个完整的链接元素,在这里我们可以加个`<hr>`标签,然后是`<p>`标签,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<h1>{{ title }}</h1>
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
		<hr/>
		<p>{{ finishedLink }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com",
			finishedLink : "<a href='https://www.baidu.com'>baidu</a>"
		},
		methods : {
			sayHello : function(){
				this.title = "Hello";
				return title;
			}
		}
	})

里面就输出finishedLink,链接到百度,如果现在刷新页面会怎么样?我们试试看,出来的是finishedLink的原始文本,我们看到的不是一个渲染好的链接,而是这样的文本格式的HTML代码,这是Vue的默认设置,这种设置很棒,因为这种设置保证了我们不会遭受跨站脚本攻击(XSS攻击),也就是说Vue默认会转义HTML代码,它不会将其渲染成HTML元素,而是输出为纯文本,一般情况下,最好这样做,不过如果你需要加载一些来源可靠的HTML代码,或者代码是你自己合成然后输出的,那你可能就想要输出HTML代码,而不是文本格式,比如博客文章中的编辑部分,这种情况你可以去掉大括号和插值语句,转而使用指令,把指令放在你想输出HTML代码的地方,这个指令就是v-html,这个指令里你可以传入属性的名称,其内容就是HTML代码,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<h1>{{ title }}</h1>
		<p>
			{{ sayHello() }} - <a v-bind:href="link">baidu</a>
		</p>
		<hr/>
		<p v-html="finishedLink"></p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			title : "Hello World",
			link : "https://www.baidu.com",
			finishedLink : "<a href='https://www.baidu.com'>baidu</a>"
		},
		methods : {
			sayHello : function(){
				this.title = "Hello";
				return title;
			}
		}
	})


现在我在刷新页面的话,你就可以看到链接了,v-html会告诉Vue去渲染HTML代码而不是转义它,再强调一下,谨慎使用这个指令,它会把你暴露给XSS攻击,比如链接的内容可能是用户提交的,你是不能控制用户上传什么内容的,若确定内容安全,或是你自己合成的代码,那就可以放心使用这个指令,通过Vue直接加载HTML代码.

### 2.9 作业1问题: 输出数据到模板

我们来练习使用模板语法输出数据,下面是我准备的几个习题,我快速的给大家过一遍题目,答案我们会在下一课程中给大家讲解.

- 第一个练习很简单,是为了正确掌握其中的核心机制,需要输出你的姓名和年龄.两者都应该作为属性保存在data内
	
JS:

	new Vue({
		name : "Your Name"
	})

姓名属性已经创建,需要添加年龄属性,内容可以改成你的真实姓名和年龄,在这里`<p>`标签里面输出,试试模板语法吧

- 第二题,在插值语法里,即在大括号中使用JavaScript表达式,输出你的年龄乘以三

- 第三题,仍是类似的练习,这次是调用函数,输出这个函数的返回值,函数返回0和1之间的一个随机数,加一个和Vue无关的附加题,把返回值改成1到100之间的随机数,如果你想练习一下数学和JavaScript

- 第四题,用谷歌搜索一张图片,让这个`<img>`标签显示搜到的图片,当然不能再`<img>`标签的src属性中直接添加链接文件,而是需要把超链接存到data里面,绑定到`<img>`标签的src属性.

- 第五题,用姓名预先填充这个输入框,这个属性下面已经有了,让这个输出框默认显示你的姓名

HTML:

	<div>
		<input type="text">
	</div>

JS:

	new Vue({
		el : "#exercise",
		data : {
			name : "Your Namw"
		}
	})
	
习题就到这里,下一课程我们会为大家讲解答案

### 2.10 作业1答案: 输出数据到模板

### 2.11 监听事件

大家好,我们又回到了JSFiddle编辑器,我们再来看这个简单的Vue应用,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button>Click me</button>
		<p>{{ counter }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0
		}
	})

它有一个`<button>`标签和counter属性,counter已添加在data对象里,我要让这个按钮和counter属性关联起来,实现点击按钮counter随之递增的效果,我们已经学过如果实现这种"关联",现在我们需要知道这个过程发生了什么,我在这里加一个新指令v-on,如果说v-bind是在模板中绑定一些东西,从而将数据传入模板,那么v-on的功能则是相反的,这里的绑定更确切的说是监听,它可以接收来自模板的一些"东西",究竟接收什么呢?那就是事件,v-on同样接受参数,它的参数是事件的名称,这个事件就是我们要监听并使用的,比如我们可以在这监听click事件,不仅仅是click还可以是监听任何由这按钮产生的DOM事件,比如mouseenter,mouseleave,包括所有在这按钮上的原生事件,等号右边输入另外一个参数,在等号后面的一对引号里,输入鼠标点击时你想要执行的方法或者代码.

我现在绑定一个方法,将其命名为increase,然后在methods里定义这个方法,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase">Click me</button>
		<p>{{ counter }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0
		},
		methods : {
			increase : function(){
				this.counter++;
			}
		}
	})

这时候就可以访问到counter了,再使其递增1,这时候我点击这个按钮,你会发现这个数字也随之增加,我想这应该很简单,接下来我们要再深入了解和学习"事件",

### 2.12 从事件对象里获取事件数据

举个例子,关于事件的一个重要内容,是我们能监听的默认事件对象,这个事件对象是由JavaScript和DOM产生,它包含着事件的相关数据,如click事件包含了事件触发位置的坐标.

如果我们想要获取事件数据,比如要输出事件数据,那么我可以在这里添加一个`<p>`标签,输入Coordinates(坐标),接着我要在这里输出(事件)坐标,在这里是X坐标,接下来是y坐标,当然特们还没有定义,接下来我们定义一下,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase">Click me</button>
		<p>{{ counter }}</p>
		<p>Coordinates: {{ x }} / {{ y }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(){
				this.counter++;
			}
		}
	})

接下来,当鼠标移动到`<p>`标签上时,需要更新这两个值,在这块我们可以v-on:mousemove,然后执行方法updateCoordinates,然后在methods里面定义这个方法,示例代码如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(){
				this.counter++;
			},
			updateCoordinates : function(){
				
			}
		}
	})

想要获得事件的坐标,需要先访问到这个自动生成的事件对象,实际上,这个事件对象不仅是由DOM或者JavaScript自动创建,还能自动传递给v-on绑定的每个函数,而这是由Vue帮我们完成的,所以,在这我们可以很轻松的得到event对象,我们能够轻松的将事件对象传给这方法,再将event.clientX赋给this.x,把event.clientY赋给this.y,clientX和clientY属于事件对象自带的属性,它们和Vue是不相关的,我把方法名改成和上面绑定的方法名一致,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(){
				this.counter++;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	})

现在我把鼠标移动在这个元素上时,这两个座标也跟着改变.

我们可以学到能监听鼠标点击以外的其他事件,另外非常重要的是,它展现了如何传递事件对象,并像例子里这样使用.

### 2.13 传递你自己的事件参数

如果我们要(给组件)传自定义参数,该怎么做呢?举个例子,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(){
				this.counter++;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	})

这里的counter的递增,每次自增1,如果想让它根据我们设定的步长来递增,这个还是比较容易的,在调用increase函数或者说设置这个引用时,还可以加上括号,再传入参数,比如2,这个参数2说明我想让counter每次递增2,传入2后,再回到下面的increase方法里来,只需要监听参数step,也就是把step参数写在这,把这里改成this.counter+=step,它就根据step的值递增,而不再是1,代码示例如下:


HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase(2)">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(step){
				this.counter+=step;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	})

运行一下,当我们点击按钮,你可以看到counter每次都随之递增2,传递自定义参数就是如此简单,最后如果不仅要传递自定义参数,还要传递DOM生成的事件对象(给方法),这也同样简单,只需要再加一个参数,而这个参数标识的命名很重要,Vue会自动捕捉这个默认的事件参数,并赋值给一个可以在这使用的变量,写作`$event`,这是个"受保护"的变量,请不要改写它,并且确保不要写错了,这样写后,就能在方法里获取到这个事件对象了代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase(2,$event)">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(step){
				this.counter+=step;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	})

在increase方法里,可以很方便的同时使用自定义参数,同时还有由Vue捕捉并传给我们的事件对象参数,

### 2.14 用事件修饰符来修改事件

处理事件时,我们都会遇到一些问题,比如在复用应用时会遇到的一些问题,学了Vue,你会发现这些问题很容易就可以解决,但这些问题都有那些呢?

我们先强化一下上一节课的程序,先将后面这段移到下一行,然后把`</p>`标签再移到下一行,现在我想在这两行间加一个DEAD SPOT(无效点),那在这里输入`<span>`,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase(2,$event)">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>
			Coordinates: {{ x }} / {{ y }}
			---
			<span>DEAD SPOT</span>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(step){
				this.counter+=step;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	}) 

当我把鼠标悬停在这个元素上时,停止对"coordinates"的更新.

当然如果现在保存的话,它还是会更新,因为`<span>`是这个`<p>`标签的一部分,而`<p>`标签是在监听鼠标移动事件的,现在我可以在这创建一个新事件,同样也把它命名为mousemove,但不执行任何动作,为了实现这个功能,可以在这加一个函数,函数名为"dummy",接下来我在methods里面创建"dummy"这个函数,我想通过这个函数得到一个事件,也就是自动传递给函数的这个事件,然后调用stopPropagation()函数,确保事件不会传播给绑定有这个属性的元素,也就是上面span这段,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase(2,$event)">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>
			Coordinates: {{ x }} / {{ y }}
			---
			<span v-on:mousemove="dummy">DEAD SPOT</span>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(step){
				this.counter+=step;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			},
			dummy : function(event){
				event.stopPropagation()
			}
		}
	}) 

运行一下程序,你会看到当鼠标移动到DEAT SPOT区域时,坐标就不更新了,因为我们阻止了事件的传播,也就是说这个事件已交由内部元素处理了,这个事件处理程序,不让事件传播到有这个属性的元素上,我们就可以这样做.

但还有更简单的做法,我们可以把methods里面的"dummy"移除,把事件执行的方法名也删掉,不执行任何代码,转而使用所谓的修饰符,也叫做事件修饰符,它可以用来修饰这个事件,这就是这个名称的由来,我可以在这个事件名后加一个 "." 来添加修饰符,把它当作参数传送给v-on指令,在这我打算用stop来替代stopPropagation(),代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase(2,$event)">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>
			Coordinates: {{ x }} / {{ y }}
			---
			<span v-on:mousemove.stop="">DEAD SPOT</span>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(step){
				this.counter+=step;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	}) 

运行一下,我们可以看到这边的数值就像刚才那样停止了,只是这里没有执行任何函数,因为Vue帮我们完成了这些事,大概就是有这么一个中间函数,架设在我自己的函数,这个例子中就是没有函数,和获得的或者提交的事件之间
,这时Vue会执行这个函数,在这里就是事件的传播被阻止了.

Vue给我们还提供了一些其他的修饰符,其中preventDefault是表达阻止意思的最重要的修饰符之一,
所以用stop和prevent修饰符来执行这个函数,也就是处理方法时两种常用的方法,这些也是可以用的,就像这的 ".stop",你也可以改或做一点小改动,比如在这后面,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<button v-on:click="increase(2,$event)">Click me</button>
		<p>{{ counter }}</p>
		<p v-on:mousemove='updateCoordinates'>
			Coordinates: {{ x }} / {{ y }}
			---
			<span v-on:mousemove.stop.prevent="">DEAD SPOT</span>
		</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			counter : 0,
			x : 0,
			y : 0
		},
		methods : {
			increase : function(step){
				this.counter+=step;
			},
			updateCoordinates : function(event){
				this.x = event.clientX;
				this.y = event.clientY;
			}
		}
	}) 

虽然起不了什么作用,但是你可以加上它们或者做一些改动.

### 2.15 监听键盘事件

上一节课我们讲了事件修饰符,

### 2.16 作业2问题: 事件

### 2.17 作业2答案: 事件

### 2.18 在模板中编写JS代码

### 2.19 使用双向绑定

### 2.20 用计算属性来响应改变

### 2.21 计算属性的替代: 观察改变

### 2.22 用缩写来节省事件

### 2.23 作业3问题: 响应式属性

### 2.24 作业3答案: 响应式属性

### 2.25 CSS类动态样式-基础

### 2.26 CSS动态类样式-使用对象

### 2.27 CSS动态类样式-使用命名

### 2.28 动态设置样式(不使用CSS类)

### 2.29 用数组语法设置元素样式

### 2.30 作业4问题: 样式设置

### 2.31 作业4答案: 样式设置

### 2.32 本章总结

## 第3章 使用条件和列表渲染

### 3.1 本章介绍

欢迎来到新的一章,我们已经详细了解Vue和DOM交互的基本方法,以及如何连接到DOM,如何使用模板,如何监听事件等等,现在我们可以学习更高级一点的概念,这就是条件和列表,比如在某些情况下,你只想展示网页的某个部分,我们提供了一些工具,可以轻松实现这些,如果要输出一个列表中的数据数组或者类似的,Vue也为你提供了一些工具.

接下来,就让我们来认真学习条件和列表吧.


### 3.2 用v-if来做条件渲染

今天我们来看一个全新的小项目,这个项目非常简单,

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p>你能看见我!</p>
		<p>你也看见我了吗?</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})
	

Vue实例的data对象只有一个show属性,(模板中)`<div>`标签包含两个`<p>`标签,运行这段代码,可以看到这两句话:

	你能看见我!
	你也看见我了吗?

有了这两段文字,我们要通过条件来控制它们显示和隐藏,或者说控制元素在DOM中的添加和移除,你可能在以前的项目中遇到过类似的需求.

你不想总是显示模板中的全部内容,有时候只是想显示一条错误提示,比如像是表单里输入的错误内容等等,诸如此类的情况,只在特定情况下显示响应的信息或元素.

Vue提供了简单的方式去实现这种需求,接下来我们就去学习这些方式.

我要从v-if开始,这个指令可以写在任意元素上,

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="">你能看见我!</p>
		<p>你也看见我了吗?</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

v-if 就像上面这样写,我们可以将它跟某些条件或属性绑定,只要这个条件或属性最终转换为true或者false,这是很关键的

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我!</p>
		<p>你也看见我了吗?</p>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

我们可以在这里绑定show,就像上面示例一样.show的初始值是true,再在下面加个`<button>`标签,写上Switch或者其他文本,再添加一个click事件的监听器,将show设为它相反的状态,如下所示:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我!</p>
		<p>你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

进行保存,你可以看到我点击按钮后发生了什么,你会看到"你能看见我!"这行话消失,(再次点击)它又出现了,如果我们审查这个元素,你会看到`<p>`标签,这时候点击 "Switch", `<p>`标签完全消失了,只剩下一行注释,说明这个位置曾存在什么,但消失不见了,它不是隐藏了,也不是透明状态,二是消失了,理解下面这点是非常重要的,v-if向DOM中添加元素或者将其移除,不是隐藏元素,如果传的值是false,或是表达式结果为false,元素就会完全从DOM中删除.

v-if还可以"扩展",在下行再加个`<p>`标签,输出"现在你看到我了",这个标签加上v-else指令,v-else会和它前面最近的v-if关联,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我!</p>
		<p v-else>现在你看到我了!</p>		
		<p>你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

也就是上面这个,我们编译代码后,点击按钮,这两句话就会来回切换,v-if为false时,v-else条件就得以显示,这跟常规的if-else语句类似,这里不需要写为v-else-if,如果要对比多个条件,只需要在加一个v-if指令,v-if和v-else的组合是种快捷方式,用来轻松建立"如果-否则"这种关系,还要知道的时 v-if控制整个元素,包括它的子元素,如果在这个`<p>`标签里插一个元素,
比如一个`<span>`标签,v-if的控制同样有效,代码如下所示:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我! <span>Hello</span></p>
		<p v-else>现在你看到我了!</p>		
		<p>你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

那么v-if的控制同样有效,所以整个元素都被删除了,v-if指令不会漏掉它的子元素,只要设定好了条件,元素整体就会被DOM添加或删除

### 3.3 替代v-if语法

这里还有一种方法,可以实现模块的添加和移除,在这添加一个`<template>`标签,这个时HTML5的标签,它在DOM中不会被渲染,也就是说`<template>`标签时看不到的,要是在`<template>`标签中,添加一个`<p>`标签,输入"在一个模板里面",代码如下所示:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我! <span>Hello</span></p>
		<p v-else>现在你看到我了!</p>	
		<template>
			<p>在一个模板里面</p>
		</template>	
		<p>你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

再刷新渲染,但审查这个元素,你是看不到外层的`<template>`标签,没错吧,这就是`<template>`的作用,给`<template>`标签加上v-if指令后,我们也可以控制它的切换了,你可能会问这跟第一个版本有何不同,我们可以组合多个元素,比如在加个标题元素,输入"Heading",代码如下所示:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我! <span>Hello</span></p>
		<p v-else>现在你看到我了!</p>	
		<template>
			<h1>Heading</h1>
			<p>在一个模板里面</p>
		</template>	
		<p>你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

注意看,这两个元素并没有相互嵌套,v-if只能加在一个元素上,或者同时加在多个元素上,比如只给`<h1>`标签加上v-if,代码如下所示:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我! <span>Hello</span></p>
		<p v-else>现在你看到我了!</p>	
		<template>
			<h1 v-if>Heading</h1>
			<p>在一个模板里面</p>
		</template>	
		<p>你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

下面的`<p>`标签并不受它控制,因为`<p>`标签不再`<h1>`中,可以用最终不可见的`<template>`包裹住它们,把属于同一块的元素组合起来,再用v-if去控制,`<template>`可以用`<div>`替代,但`<div>`元素也许不是我们需要的,它会引入不必要的副作用,而`<template>`结合v-if,是个不错的选择,它可以组合多个需要同时显示或隐藏的元素,准确来说是元素的添加或移除,

### 3.4 不要用v-show解绑

说到展示和隐藏,Vue确实也有v-if的选项,v-if完全移除或添加元素到DOM,只是删除或添加它,并不会隐藏它,如果你想隐藏它或者不想隐藏它,你可以用v-show来做到,代码实例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<p v-if="show">你能看见我! <span>Hello</span></p>
		<p v-else>现在你看到我了!</p>	
		<template>
			<h1 v-if>Heading</h1>
			<p>在一个模板里面</p>
		</template>	
		<p v-show="show">你也看见我了吗?</p>
		<button @click="show = !show">Switch</button>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			show : true
		}
	})

它和v-if语法相同,只是名字不同,所以v-show代替v-if更好,但是要知道点击切换,删除它,现在查看元素 "你也看见我了吗" 文本附加有v-show属性,在右边观察这个元素,就是这里的 "你也看见我了吗" 文本,如果我点击switch,它仍在哪里,但是它有了新的样式,"display:none",这就是它们的不同,这里并没有移除元素,它只是使用CSS隐藏了,也许这就是期望的处理,获取你不想删除元素,出于某种原因,你想在DOM中保留它,这样做就可以,如果你确认你不想删除它,使用v-show仅仅隐藏它,而不从DOM中删除它.

默认情况下是使用v-if,为什么呢?因为DOM当中的元素越少,应用的性能表现就越好,所以删除不需要的元素很有必要,但是在特殊情况下确实需要它,就使用v-show.

### 3.5 用v-for来渲染列表

欢迎回来,现在又是一个崭新的JSFiddle环境,这次的代码非常简洁,但其实代码里我已经准备好了要用的数据,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Max",age : 27, color : "red" },
				{name : "Anna", age : "unknow", color : "blue"}
			]
		}
	})

比如:ingredients 它是一个字符串数组,还有persons,也是数组,但却是对象数组.

我为什么要这样做?因为这里我有些数组,看来我们要和列表打交道了,研究如何输出列表,假如要输出ingredients这个列表.

在这里我们创建一个无序列表,其中列表项目为meat,fruit等,代码实例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<ul>
			<li></li>
		</ul>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Vue",age:20,color:"red"},
				{name : "Yang",age:"unknow",color:"blue"}
			]
		}
	})

然而我不想写死在这里,首先因为它工作量很大,更重要的是我们的内容可能不是静态的,所以他可能会变,或者是可被用户修改,所以我们想用Vue输出这个列表,事实上这很容易,要想输出这样的列表,Vue里有v-for指令,最后一个我们还没有涉及到的指令,v-for允许我们遍历整个数组,像普通的for循环一样,复制v-for指令所在的元素,提取数组中的当前迭代元素,然后在模板里使用,我们看看如何做,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<ul>
			<li v-for="ingredient in ingredients">
				{{ingredients}}
			</li>
		</ul>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Vue",age:20,color:"red"},
				{name : "Yang",age:"unknow",color:"blue"}
			]
		}
	})

这里我想循环ingredients,所以我就简单输入ingredient(这个是变量名),变量名随你取什么,然后是in ingredients,当然是指向data属性里的ingredients数组,只要属性是列表或可遍历的就可以,我取的ingredient这个变量名,Vue为我创建好这个变量,我可以在循环中使用,利用字符串插值输出具体内容,提示,你可以像使用别的属性一样使用它,所以也可以绑定到link的引用,在监听事件时,可以传参给函数调用,我可以用它就像用存放在Vue势力中别的属性一样,只不过我从来没有存储过它,但Vue为我动态创建了它,现在让我们运行一下,就能看到好看的列表了,效果示例如下:

运行后的效果:

	
	meat
	fruit
	cookies

仅仅几行代码,v-for指令就能遍历ingredients数组,输出到一个无序列表里面,

### 3.6 获取当前的下标

如果你不只是想要显示字符串,还想显示地址,也就是元素的下标,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<ul>
			<li v-for="(ingredient,i) in ingredients">
				{{ingredients}} ({{i}})
			</li>
		</ul>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Vue",age:20,color:"red"},
				{name : "Yang",age:"unknow",color:"blue"}
			]
		}
	})

这里我们输出了ingredient,然后在括号里,这里没有语法,只是普通的文本,我们想在想要在括号里显示下标,那么在括号里面,使用双大括号,输出元素下标,变量命名为i,i还没有被定义,它既不是这个Vue实例的属性,也不是有效的遍历元素,但是我们可以让他有效.

之前已经在这里定义了ingredient,作为在遍历过程中使用的变量名,现在可以修改语法,可以给它加上括号,不只是为了定义ingredient来遍历元素,也在这里定义了元素的下标,只需要在这里加个变量名并以逗号分隔,给它取名为i,因为在哪里已经用了i,双大括号了的i来自于v-for指令里面定义的i,所以这两个变量的命名完全取决于你,定义这两个变量名,然后用第一个,顺序非常重要,第一是遍历的元素,第二是元素的下标,如果我现在运行,你看我们的ingredients后紧跟着,ingredient的下标,再一次强调,这里的顺序很重要,括号里的第一个元素总是,这个元素在数组里的值,第二个元素,在这个实例中的i,它始终是这个元素在数组里的下表索引,
在Vue中用循环动态的输出内容就是如此简单,


### 3.7 替代v-for语法

和v-if指令相似,如果我们不想输出列表呢,比如你想用`<h1>`标签,来包含输出的数据,后面用`<p>`标签来输出下标,你可以用`<template>`标签来循环,和之前一样,`<template>`标签不会被渲染出来,但如果我们给`<template>`标签加上v-for指令,就像这样,和之前v-if指令一样,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<ul>
			<li v-for="(ingredient,i) in ingredients">
				{{ingredients}} ({{i}})
			</li>

			<template v-for="">
				<h1>{{ ingredient }}</h1>
				<p>{{ index }}</p>
			</template>
		</ul>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Vue",age:20,color:"red"},
				{name : "Yang",age:"unknow",color:"blue"}
			]
		}
	})

Vue就会渲染出`<template>`标签里的所有内容,和上面`<li>`标签一样,只是`<li>`里的内容在循环时被v-for直接替换了,所以可以直接拷贝这个`<li>`的v-for代码,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<ul>
			<li v-for="(ingredient,i) in ingredients">
				{{ingredients}} ({{i}})
			</li>

			<template v-for="(ingredient,index)">
				<h1>{{ ingredient }}</h1>
				<p>{{ index }}</p>
			</template>
		</ul>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Vue",age:20,color:"red"},
				{name : "Yang",age:"unknow",color:"blue"}
			]
		}
	})

吧i改成index,因为`<template>`标签在循环时用的是index,最后我们运行一下,就能看到如下效果:

效果示例:

	meat
	0
	fruit
	1
	cookies
	2

这就是另一种v-for的写法,结合`<template>`标签来循环多个未嵌套元素.

### 3.8 循环一组对象

除了循环单个元素组成的数组,还可以循环对象组成的数组,或者直接循环对象,接下来我来演示一下,因为之前的内容还占着位置,所以在`<template>`标签的前面,我来加入些新代码,上下各加一个`<hr>`水平线,方便和之前的内容区分,这里我想输出一个带有`<li>`列表项的`<ul>`的无序列表,和之前一样,用v-for来循环,现在我想循环渲染persons数组,所以可以用`person in persons`,然后就可以输出person了,它由我命名并且由Vue在循环中自动创建为变量,比如就输出person.name,代码示例如下:

HTML:

	<script src="https://unpkg.com/vue/dist/vue.js"></script>

	<div id="app">
		<ul>
			<li v-for="(ingredient,i) in ingredients">
				{{ingredients}} ({{i}})
			</li>
			<hr/>
			<ul>
				<li v-for="person in persons">	{{ persons.name }}
				</li>
			</ul>
			<hr/>
			<template v-for="(ingredient,index)">
				<h1>{{ ingredient }}</h1>
				<p>{{ index }}</p>
			</template>
		</ul>
	</div>

JS:

	new Vue({
		el : "#app",
		data : {
			ingredients : ["meat","fruit","cookies"],
			persons : [
				{name : "Vue",age:20,color:"red"},
				{name : "Yang",age:"unknow",color:"blue"}
			]
		}
	})




### 3.9 循环一组数字列表

### 3.10 用v-for来跟踪对象

### 3.11 作业5问题: 条件和列表

### 3.12 作业5答案: 条件和列表

### 3.13 本章总结

## 第4章 第一个实训项目-怪物猎人

### 4.1 介绍和挑战

### 4.2 搭建工程

### 4.3 创建Vue实例以及给血槽加样式

### 4.4 根据条件来显示玩家操作

### 4.5 实现"开始游戏"方法

### 4.6 实现"攻击"方法

### 4.7 重构事件到! 更好的代码

### 4.8 实现"特殊攻击"方法

### 4.9 实现"疗愈"方法

### 4.10 完成操作按钮

### 4.11 创建操作日志

### 4.12 打印日志 (v-for)

### 4.13 完成日志功能

### 4.14 根据条件来调整日志样式

### 4.15 总结

## 第5章 理解VueJS实例

### 5.1 本章简介

### 5.2 关于vue实例的一些基础

### 5.3 使用多个Vue实例

### 5.4 从外部访问Vue实例

### 5.5 Vue是如何管理数据和方法

### 5.6 深入分析$el和$data

### 5.7 在你的模板中使用$refs

### 5.8 去哪里可以学到更多的Vue API

### 5.9 挂载一个模板

### 5.10 使用组件

### 5.11 一些模板的限制

### 5.12 Vue是怎样更新DOM的

### 5.13 Vue实例的生命周期

### 5.15 Vue实例生命周期实战

### 5.16 本章总结

## 第6章 使用WebPack和Vue命令进入真实的开发

### 6.1 本章介绍

### 6.2 为什么我们要有开发服务器

### 6.3 "开发流程"指的是什么?

### 6.4 使用Vue命令行来创建项目

### 6.5 Vue命令行安装以及创建一个新项目

### 6.6 WebPack模板目录结构概述

### 6.7 理解".vue"后缀的文件

### 6.8 理解vue文件中的对象

### 6.9 如何构建一个真正的可发布应用

### 6.10 本章总结

## 第7章 组件介绍

### 7.1 本章介绍

### 7.2 组件介绍

### 7.3 使用数据方法来向组件中保存数据

### 7.4 将组件注册到局部或全局

### 7.5 在App.vue文件中的根组件

### 7.6 创建一个组件

### 7.7 使用组件

### 7.8 作业6问题: 组件练习

### 7.9 作业6答案: 组件练习

### 7.10 采用更好的目录结构

### 7.11 怎样给组件标签命名 (选择器)

### 7.12 组件样式作用域

### 7.13 本章总结

## 第8章 组件之间的通信

### 8.1 本章介绍

### 8.2 通信存在的问题

### 8.3 使用Props来让父子组件通信

### 8.4 为Props命名

### 8.5 在子组件中使用Props

### 8.6 验证Props

### 8.7 使用自定义事件来让父子组件通信

### 8.8 理解单向数据流

### 8.9 使用回调函数来通信

### 8.10 在同级组件间通信

### 8.11 在一个事件总线中集中实现代码

### 8.12 作业7问题: 组件间通信

### 8.13 作业7答案: 组件间通信

### 8.14 本章总结

## 第9章 高级组件用法

### 9.1 本章介绍

### 9.2 创建本章工程

### 9.3 非最优的传递内容方案

### 9.4 使用插槽来传递内容

### 9.5 插槽内容是如何编译和风格化的

### 9.6 使用多个插槽 (命名插槽)

### 9.7 默认插槽和插槽的默认设置

### 9.8 关于插槽的总结

### 9.9 将多组件转换为动态组件

### 9.10 理解动态组件行为

### 9.11 让动态组件保活

### 9.12 动态组件声明周期钩子

### 9.13 作业8描述: 插槽和动态组件

### 9.14 作业8答案: 插槽和动态组件

### 9.15 本章总结

## 第10章 第二个实训项目-漂亮的句子

### 10.1 本章介绍

### 10.2 创建工程

### 10.3 应用初始化

### 10.4 创建Application组件

### 10.5 使用Props和插槽传递数据

### 10.6 允许用户使用NewQuote组件创建句子

### 10.7 使用自定义事件来添加引用

### 10.8 添加一个消息框

### 10.9 允许删除句子

### 10.10 通过进度条来控制句子

### 10.11 结语和状态管理

## 第11章 用表单处理用户输入

### 11.1 本章介绍

### 11.2 绑定表单input标签

### 11.3 分组数据和预填充输入

### 11.4 使用输入修饰符来修改用户输入

### 11.5 绑定textarea标签和保存换行符

### 11.6 使用复选框并将数据保存在数组中

### 11.7 使用单选按钮

### 11.8 使用select和option标签处理下拉菜单

### 11.9 v-model有什么用和如何创建自定义控件

### 11.10 创建自定义控件 (输入)

### 11.11 提交表单

### 11.12 作业9描述: 表单练习

### 11.13 作业9解答: 表单练习

### 11.14 本章总结

## 第12章 使用和创建指令

### 12.1 本章介绍

### 12.2 理解什么是指令

### 12.3 指令的工作原理-钩子函数

### 12.4 创建一个简单的指令

### 12.5 给自定义指令传值

### 12.6 给自定义指令传参

### 12.7 用修饰符来修改自定义指令

### 12.8 自定义指令总结

### 12.9 本地注册指令

### 12.10 同时使用多个修饰符

### 12.11 给指令传递多个复杂值

### 12.12 作业10指令 : 问题

### 12.13 作业10答案 : 指令

### 12.14 本章总结

## 第13章 使用过滤器和混入来优化程序

### 13.1 本章介绍

### 13.2 创建本地过滤器

### 13.3 全局过滤器以及如何串联多个多虑器

### 13.4 替代过滤器 : 计算属性

### 13.5 理解什么是混入 (Mixins)

### 13.6 创建和使用混入

### 13.7 怎样合并多个混入

### 13.8 创建一种特殊的全局混入

### 13.9 混入和作用域

### 13.10 作业11描述 : 过滤器和混入

### 13.11 作业11答案 : 过滤器和混入

### 13.12 本章总结

## 第14章 使用动画和过渡

### 14.1 本章介绍

### 14.2 理解什么是过渡?

### 14.3 为使用过渡来做代码准备

### 14.4 过渡的配置

### 14.5 为过渡分配css类

### 14.6 使用css过渡属性来创建

### 14.7 使用css动画属性来创建"滑动"过渡

### 14.8 混合过渡和动画两种属性

### 14.9 v-if和v-show动画

### 14.10 配置初始化(加载)动画

### 14.11 使用不同的css类名

### 14.12 使用动态命名和属性

### 14.13 多个元素间的过渡 (理论)

### 14.14 多个元素间的过渡 (实践)

### 14.15 监听过渡事件的钩子

### 14.16 理解什么是JS动画

### 14.17 从动画中去掉css

### 14.18 在JS中创建动画

### 14.19 让动态组件做动画

### 14.20 使用来做列表动画

### 14.21使用的准备

### 14.22 使用来让列表做动画

### 14.23 理解这个应用

### 14.24 创建这个应用

### 14.25 添加动画

### 14.26 本章总结

## 第15章 使用vue-resource来通过HTTP连接到服务器

### 15.1 本章介绍

### 15.2 配置:用vue-resource来访问HTTP

### 15.3 基于Firebase来创建应用和服务端

### 15.4 用POST方法给服务端发送数据

### 15.5 用GET请求来获取和转换数据

### 15.6 全局配置vue-resource

### 15.7 拦截请求

### 15.8 拦截响应

### 15.9 vue-resource里的resource从哪里来

### 15.10 创建自定义的资源

### 15.11 资源vs传统HTTP请求

### 15.12 理解URL模板

### 15.13 本章总结

## 第16章 VueJS应用中的路由概念

### 16.1 本章介绍

### 16.2 配置VueJS路由 (vue-router)

### 16.3 配置和加载路由

### 16.4 理解路由模式 (哈希vs历史)

### 16.5 路由链接导航

### 16.6 我在哪儿 ? 定义活动链接

### 16.7 通过代码导航 (强制导航)

### 16.8 配置路由参数

### 16.9 获取,使用路由参数

### 16.10 响应路由参数改动

### 16.11 配置子路由 (嵌套路由)

### 16.12 潜逃路由导航

### 16.13 更动态的配置路由链接

### 16.14 创建链接的更好方式 - 命名路由

### 16.15 使用查询参数

### 16.16 多路由视图 (命名路由视图)

### 16.16 重定向

### 16.17 配置 "Catch All"路由/通配符

### 16.18 路由动画过渡

### 16.19 传递Hash Fragment

### 16.20 控制卷屏行为

### 16.21 使用守卫来保护路由

### 16.22 使用"beforeEnter"守卫

### 16.23 使用"beforeLeave"守卫

### 16.24 路由懒加载

### 16.25 本章总结

## 第17章 用Vuex来更好的管理状态

### 17.1 本章介绍

### 17.2 为什么要用一个不同的状态管理机制

### 17.3 理解集中的状态

### 17.4 使用集中状态

### 17.5 为什么集中状态自身并不能解决问题

### 17.6 理解Getter

### 17.7 使用Getter

### 17.8 将Getter映射到属性

### 17.9 理解Mutation

### 17.10 使用Mutation

### 17.11 为什么Mutation要使用同步执行模式

### 17.12 Action怎么改进Mutation

### 17.13 使用Action

### 17.14 将Action映射到方法

### 17.15 Vuex总结

### 17.16 双向绑定 (v-model) 和 Vuex

### 17.17 改进的目录结构

### 17.18 模块化状态管理

### 17.19 使用分割的文件

### 17.20 使用名字空间来避免命名冲突问题

### 17.21 本章总结

## 第18章 最终实训项目-股票交易

### 18.1 项目介绍

### 18.2 项目配置和规划

### 18.3 创建第一个组件

### 18.4 配置项目路由

### 18.5 添加头部导航

### 18.6 规划下一步

### 18.7 创建股票组件

### 18.8 添加购买按钮

### 18.9  配置Vuex状态管理

### 18.10 为Vuex添加展示模块

### 18.11 实现展示用的股票

### 18.12 将展示模块连接到Vuex

### 18.13 修复一些Bug

### 18.14 显示资金

### 18.15 添加记名支票

### 18.16 使用过滤器让资金显示更好看

### 18.17 一天的结束 - 随机股票价格

### 18.18 路由过渡动画

### 18.19 保存和获取数据 - 添加下拉菜单

### 18.20 与Firebase一起配置vue-resource

### 18.21 保存数据 (PUT请求)

### 18.22 获取数据 (GET请求)

### 18.23 测试和修复Bug

### 18.24 项目总结

### 18.25 使用Vue开发工具调试Vuex

## 第19章 部署VueJS应用

### 19.1 项目介绍

### 19.2 部署准备

### 19.3 部署应用(使用亚马逊AWS S3)

## 第20章 课程总结

### 课程总结

## 第21章 使用Axios替代vue-resource

### 21.1 概述

### 21.2 本章介绍

### 21.3 工程配置

### 21.4 Axios配置

### 21.5 发送POST请求

### 21.6 发送GET请求

### 21.7 访问和使用响应数据

### 21.8 全局请求配置

### 21.9 使用拦截器

### 21.10 自定义Axios实例

### 21.11 总结

## 第22章 Vue应用中的鉴权

### 22.1 概述

### 22.2 本章介绍

### 22.3 单页应用中鉴权工作原理

### 22.4 工程配置

### 22.5 添加用户注册

### 22.6 添加用户登录

### 22.7 使用Vuex发送鉴权请求

### 22.8 在Vuex中保存鉴权数据

### 22.9 通过Vuex访问其他资源

### 22.10 向后台发送Token

### 22.11 路由保护 (Auth Guard)

### 22.12 基于鉴权状态来更新UI状态

### 22.13 添加用户登出功能

### 22.14 添加自动登出功能

### 22.15 添加自动登录功能

### 22.16 总结

## 第23章 表单输入验证

### 23.1 概述

### 23.2 本章介绍

### 23.3 安装Vuelidate

### 23.4 添加验证器

### 23.5 验证时添加UI反馈

### 23.6 控制错误输入的显示风格

### 23.7 更多的验证器

### 23.8 验证密码

### 23.9 使用必填验证器

### 23.10 验证数组

### 23.11 控制表单提交按钮

### 23.12 创建自定义验证器

### 23.13 异步验证器

### 23.14 本章总结

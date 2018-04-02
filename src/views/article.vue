<template>
   <div class="article">
      <div class="article-item" v-for="(item, $index) in articles" :key="$index" @click="jumpDetail($index)">
        <p class="small-title"><span class="author">kimmy</span>&nbsp;&nbsp;25min之前&nbsp;&nbsp;HTTP/浏览器
        <i class="el-icon-view show-view" ></i>
        </p>
        <p class="article-title">{{item}}</p>
        <p><span class="task-tag">重点</span></p>
      </div>
      <!-- <div class="article-item">
        <p class="small-title"><span class="author">kimmy</span>&nbsp;&nbsp;25min之前&nbsp;&nbsp;HTTP/浏览器
        <i class="el-icon-view show-view" ></i>
        </p>
        <p class="article-title">我需要知道的HTTP和HTTPS</p>
        <p><span class="task-tag">重点</span></p>
      </div>
      <div class="article-item">
        <p class="small-title"><span class="author">kimmy</span>&nbsp;&nbsp;25min之前&nbsp;&nbsp;HTTP/浏览器
        <i class="el-icon-view show-view" ></i>
        </p>
        <p class="article-title">我需要知道的HTTP和HTTPS</p>
        <p><span class="task-tag">重点</span></p>
      </div> -->
   </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
  name: 'weather',
  components: { card },
  data () {
    return {
      articles: [
        'https, http',
        '跨域的几种解决方案',
        '深入理解快速排序'
      ],
      /* eslint-disable */
      articlesDetail: [
        `一 http与https 的区别和联系

http协议是基于tcp/ip的协议，https则增加了一层ssl保护层。http协议的端口是基于80端口，而https是基于443端口。https是在http与tcp传输协议中增加了一层ssl层，可以对传输的数据进行加密处理。（扩展一下）

二 常见的http方法有哪些？

 get (请求页面信息，返回页面信息主体)

 post （向服务器中发送请求数据）

 delete （请求服务器删除指定的页面。）

 put （从客户端向服务器传送的数据取代指定的文档的内容。）

 head （获取http响应中的头部信息）

method （获取该服务器支持的http方法）

三 get请求和post请求的区别和联系：

HTTP 有八种请求（也称方法），其中最常见的是 GET 请求和 POST 请求。

GET 请求通常用于查询、获取数据，而 POST 请求则用于发送数据，除了用途上的区别，它们还有以下这些不同：

1. GET 请求可以被缓存，可以被收藏为书签，但 POST 不行。
2. GET 请求会保留在浏览器的历史记录中，POST 不会。
3. GET 请求的长度有限制（不同的浏览器不一样，大约在几 Kb 左右），URL 的数据类型只能是 ASCII 字符，POST 请求没有限制。
4. GET 请求的参数在 URL 中，因此绝不能用 GET 请求传输敏感数据。POST 请求数据则写在 HTTP 的请求头中，安全性略高于 GET 请求。

四 什么是报文，请求报文和响应报文分别有哪些？

  请求报文：请求行 请求头  空行 请求数据

   	 1 请求行： Get  index.html  http1.1

         2 请求头： user-Agent， cache-control: private

	 3 空行

         4 请求数据：如果是post请求，会发送数据到服务端，这是其中会涉及到的请求数据。

    GET /search?hl=zh-CN&source=hp&q=domety&aq=f&oq= HTTP/1.1  
    Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/vnd.ms-powerpoint, 
    application/msword, application/x-silverlight, application/x-shockwave-flash, */*  
    Referer: <a href="http://www.google.cn/">http://www.google.cn/</a>  
    Accept-Language: zh-cn  
    Accept-Encoding: gzip, deflate  
    User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; TheWorld)  
    Host: <a href="http://www.google.cn">www.google.cn</a>  
    Connection: Keep-Alive  
    Cookie: PREF=ID=80a06da87be9ae3c:U=f7167333e2c3b714:NW=1:TM=1261551909:LM=1261551917:S=ybYcq2wpfefs4V9g; 
    NID=31=ojj8d-IygaEtSxLgaJmqSjVhCspkviJrB6omjamNrSm8lZhKy_yMfO2M4QMRKcH1g0iQv9u-2hfBW7bUFwVh7pGaRUb0RnHcJU37y-
    FxlRugatx63JLv7CWMD6UB_O_r 

  响应报文：状态行 消息报头  响应正文

	1 状态行： 协议版本号 状态码  状态信息文

         2 消息报头：

	 3  响应正文：

    HTTP/1.1 200 OK
    Date: Sat, 31 Dec 2005 23:59:59 GMT
    Content-Type: text/html;charset=ISO-8859-1
    Content-Length: 122
    
    ＜html＞
    ＜head＞
    ＜title＞Wrox Homepage＜/title＞
    ＜/head＞
    ＜body＞
    ＜!-- body goes here --＞
    ＜/body＞
    ＜/html＞

五  常见的状态码有哪些？

    1**: 请求正在发送
    2**：表示请求已经成功了。 200，表示请求成功，success. 204 ，表示没有新的内容，no content
    3**：表示重定向。
    301 ，表示永久重定向，move permanantly。 302 ，表示暂时性重定向。 303， 304 ，表示内容没有修改，no modified。
    4**: 表示客户端请求问题。
    400，请求错误, Bad Request.
    401, 请求未经授权，unAuthorized.
    403, 请求被拒绝了，服务器拒绝服务，forbidden.
    404，表示找不到，not found.
    5**：表示服务端请求问题。
    500, 网络错误，internet error.
    502, 网关错误。
    503， server Unavaliale, 服务器不能处理客户端，

六  常见的请求头的信息

报头基本包括 通用首部字段，请求首部字段，响应首部字段，实体首部字段

1 通用首部字段



    cache-control: private, max-age=0, no-cache
    
    max-age（单位为s）设置缓存的存在时间，相对于发送请求的时间。只有响应报文首部设置Cache-Control为非0的max-age或者设置了大于请求日期的Expires（下文会讲）才有可能命中强缓存。当满足这个条件，同时响应报文首部中Cache-Control不存在no-cache、no-store且请求报文首部不存在Pragma字段，才会真正命中强缓存。
    
    no-cache  表示请求必须先与服务器确认缓存的有效性，如果有效才能使用缓存（协商缓存），无论是响应报文首部还是请求报文首部出现这个字段均一定不会命中强缓存。Chrome硬性重新加载（Command+shift+R）会在请求的首部加上Pragma：no-cache和Cache-Control：no-cache。
    no-store  表示禁止浏览器以及所有中间缓存存储任何版本的返回响应，一定不会出现强缓存和协商缓存，适合个人隐私数据或者经济类数据。
    public 表明响应可以被浏览器、CDN等等缓存。
    private 响应只作为私有的缓存，不能被CDN等缓存。如果要求HTTP认证，响应会自动设置为private。
    
    
    Expires  是一个响应首部字段，它指定了一个日期/时间，在这个时间/日期之前，HTTP缓存被认为是有效的。无效的日期比如0，表示这个资源已经过期了。如果同时设置了Cache-Control响应首部字段的max-age，则Expires会被忽略。它也是HTTP/1.1之前版本遗留的通用首部字段，仅作为于HTTP/1.0的向后兼容而使用
    
    
    connection: closed/keep-alive.

2 请求首部字段

    if-Match: 比较实体标记（etag）
    if-None-Match: 比较实体标记（etag）
    if-Modified-Since::: GMT 比较资源的更新时间，也就是last-modified的时间。
    if-Unmodified-Since::: GMT
    
    Accept                  用户代理可处理的媒体类型
    Accept-Charset          优先的字符集
    Accept-Encoding         优先的内容编码
    Accept-Language         优先的语言（自然语言）
    Authorization           Web认证信息
    Expect                          期待服务器的特定行为
    From                             用户的电子邮箱地址
    Host                              请求资源所在服务器
    If-Match                        比较实体标记（ETag）
    If-Modified-Since          比较资源的更新时间
    If-None-Match              比较实体标记（与 If-Match 相反）
    If-Range                        资源未更新时发送实体 Byte 的范围请求
    If-Unmodified-Since     比较资源的更新时间（与If-Modified-Since相反）
    Max-Forwards               最大传输逐跳数
    Proxy-Authorization     代理服务器要求客户端的认证信息
    Range                           实体的字节范围请求
    Referer                          对请求中 URI 的原始获取方
    TE                                  传输编码的优先级
    User-Agent                   HTTP 客户端程序的信息

3 响应首部字段

    Etag: 资源更改的时候，etag就会随着更改，与if-none-match结合使用。
    
    
    
    Accept-Ranges             是否接受字节范围请求
    Age                               推算资源创建经过时间
    ETag                              资源的匹配信息
    Location                        令客户端重定向至指定URI
    Proxy-Authenticate      代理服务器对客户端的认证信息
    Retry-After                   对再次发起请求的时机要求
    Server HTTP                  服务器的安装信息
    Vary                              代理服务器缓存的管理信息
    WWW-Authenticate     服务器对客户端的认证信息

4 实体首部字段

    Expires: 时间点
    Last-Modified: 时间点，与if-modified-since结合使用。
    
    
    
    
    Allow                            资源可支持的HTTP方法
    Content-Encoding       实体主体适用的编码方式
    Content-Language      实体主体的自然语言
    Content-Length           实体主体的大小（单位：字节）
    Content-Location        替代对应资源的URI
    Content-MD5              实体主体的报文摘要
    Content-Range            实体主体的位置范围
    Content-Type              实体主体的媒体类型
    Expires                   实体主体过期的日期时间
    Last-Modified              资源的最后修改日期时间

六 http中的缓存策略



https://juejin.im/post/5a673af06fb9a01c927ed880 （参考链接）



七 有了etag为什么还要用last-modified？

有了Last-Modified，为什么还要用ETag？

（1）因为如果在一秒钟之内对一个文件进行两次更改，Last-Modified就会不正确。

（2）某些服务器不能精确的得到文件的最后修改时间。

（3）一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET。

有了Etag，为什么还要用Last-Modified？

因为有些时候 ETag 可以弥补 Last-Modified 判断的缺陷，但是也有时候 Last-Modified 可以弥补 ETag 判断的缺陷，比如一些图片等静态文件的修改，如果每次扫描内容生成 ETag 来比较，显然要比直接比较修改时间慢很多。所有说这两种判断是相辅相成的。

ETag的值服务端是对文件的索引节，大小和最后修改时间进行Hash后得到的。

- 缓存中存在的问题
  如果服务器文件进行升级，而为了使浏览器获取到最新的服务端的文件，最好的方法就是修改文件名，给文件名添加版本号或者是添加版本修改的时间参数，这样浏览器就可以重新加载新的缓存文件下来了。

八 tcp和UDp的区别和联系以及应用（待整理）

https://blog.minhow.com/2017/01/08/protocol/tcp-udp/

实际考虑TCP以及UDP之间的区别和联系

九 为什么是三次握手，四次挥手（待总结）



四次挥手的原因：

假设Client端发起中断连接请求，也就是发送FIN报文。Server端接到FIN报文后，意思是说"我Client端没有数据要发给你了"，但是如果你还有数据没有发送完成，则不必急着关闭Socket，可以继续发送数据。所以你先发送ACK，"告诉Client端，你的请求我收到了，但是我还没准备好，请继续你等我的消息"。这个时候Client端就进入FIN_WAIT状态，继续等待Server端的FIN报文。当Server端确定数据已发送完成，则向Client端发送FIN报文，"告诉Client端，好了，我这边数据发完了，准备好关闭连接了"。Client端收到FIN报文后，"就知道可以关闭连接了，但是他还是不相信网络，怕Server端不知道要关闭，所以发送ACK后进入TIME_WAIT状态，如果Server端没有收到ACK则可以重传。“，Server端收到ACK后，"就知道可以断开连接了"。Client端等待了2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，我Client端也可以关闭连接了。Ok，TCP连接就这样关闭了！

三次握手的原因：

【问题1】为什么连接的时候是三次握手，关闭的时候却是四次握手？

答：因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。

【问题2】为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？

答：虽然按道理，四个报文都发送完毕，我们可以直接进入CLOSE状态了，但是我们必须假象网络是不可靠的，有可以最后一个ACK丢失。所以TIME_WAIT状态就是用来重发可能丢失的ACK报文。

1. TCP Socket 建立连接的原理？
2. HTTP 长轮询的原理？
3. HTTPS 服务端和客户端连接的原理？（SSL 验证原理）
4. HTTPS 哪些有薄弱的地方容易被攻击？

十 从一个URL的输入到底发生了什么

http://blog.aijc.net/server/2015/11/03/%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%AE%8C%E7%9A%84%E8%BF%87%E7%A8%8B%E4%B8%AD%E9%83%BD%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%E4%BA%8B%E6%83%85

十一 TCP/IP的四层模型的理解

数据链路层---网络层---传输层----应用层

TCP/IP 协议中每层技术举例：

网络访问层：ARP、RARP

互联网层：ICMP、IP

传输层：TCP、UDP

应用层：DNS、FTP、HTTP、SMTP、TELNET、IRC、WHOIS



    1）连接层负责建立电路连接，是整个网络的物理基础，典型的协议包括以太网、ADSL等等；
    
    2）网络层负责分配地址和传送二进制数据，主要协议是IP协议；
    
    3）传输层负责传送文本数据，主要协议是TCP协议；
    
    4）应用层负责传送各种最终形态的数据，是直接与用户打交道的层，典型协议是HTTP、FTP等。

十二 OSI七层模型的基本概念

物理层：底层数据传输，如网线；网卡标准。 

数据链路层：定义数据的基本格式，如何传输，如何标识；如网卡MAC地址。

网络层：定义IP编址，定义路由功能；如不同设备的数据转发。

传输层：端到端传输数据的基本功能；如 TCP、UDP,TLS

会话层：控制应用程序之间会话能力；如不同软件数据分发给不同软件。

标识层：数据格式标识，基本压缩加密功能。

应用层：各种应用软件，包括 Web 应用。

##### 十三 cookie的作用域问题

https://www.cnblogs.com/chenqianpeng/archive/2012/04/24/2468642.html

domain的设置，有两点要注意：，

1.在setcookie中省略domain参数，那么domain默认为当前域名。

2.domain参数可以设置父域名以及自身，但不能设置其它域名，包括子域名，否则cookie不起作用。

那么cookie的作用域：

cookie的作用域是domain本身以及domain下的所有子域名。

十四 如何删除一段cookie

删除一个cookie 也挺简单，也是重新赋值，只要将这个新cookie的expires 选项设置为一个过去的时间点就行了。但同样要注意，path/domain/这几个选项一定要旧cookie 保持一样。



第一次自我演绎还欠缺的地方

- https 中的ssl主要做了什么？https有什么缺陷呢？
- 在缓存机制中还有一些需要再去深入的地方。
`,
`##hello`,
        `快速排序是众多排序中最常见的排序方法之一，被提及说下快排时候，很多人会信手捏来写下以下代码

    var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var pivotIndex = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));
    };

目前为止都没
`
      /* eslint-enable */
      ]
    }
  },
  methods: {
    getArtical () {
      let articles = localStorage.getItem('articles')
      if (!articles) {
        localStorage.setItem('articles', JSON.stringify(this.articles))
      }
      this.articles = articles ? JSON.parse(articles) : this.articles
      if (!localStorage.getItem('articlesDetail')) {
        localStorage.setItem('articlesDetail', JSON.stringify(this.articlesDetail))
      }
    },
    // 文章详情
    jumpDetail (id) {
      this.$router.push({name: 'articleEdit', query: {id}})
    }
  },
  mounted () {
    this.getArtical()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.article {
  width: 1000px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  min-height: calc(100vh - 100px);
  background: #fff;
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  .article-item {
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .show-view {
      float: right;
      font-size: 24px;
      color: #21a0f2;
      opacity: .4;
      display: none;
    }
    &:hover {
      background: rgba(235,  238, 245, .37);
       .show-view {
        display: inline-block;
      }
    }
    .small-title {
      color: #ccc;
      font-size: 12px;
    }
    .author {
      color: #444;
    }
    .article-title {
      font-weight: bold;
    }
    .task-tag {
      padding-left: 12px;
      position: relative;
      color: #666;
      font-size: 14px;
      margin-right: 6px;
      &:before {
        content: '';
        position: absolute;
        background-color: #21a0f2;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 4px;
        left: 0;
      }
    }

  }
}
</style>

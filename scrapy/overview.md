---
title: 概览
slug: /
---

Scrapy 是一个应用程序框架，用于抓取网站和提取结构化数据，这些数据可广泛应用于其他程序，如数据挖掘、信息处理或历史存档。

尽管 Scrapy 最初目的是爬取网页，但它还可以用于使用 API 提取数据（例如 Amazon Associates Web Services ）或者作为一个通用的网络爬虫。

## 一个简单的爬虫示例

为了向您展示 Scrapy 如何抓取网页内容，我们将展示一个最简单的示例。

以下是一个爬虫代码，它从网站 http://quotes.toscrape.com 上抓取著名的谚语，按照以下页码：

```python
import scrapy


class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = [
        'http://quotes.toscrape.com/tag/humor/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'author': quote.xpath('span/small/text()').get(),
                'text': quote.css('span.text::text').get(),
            }

        next_page = response.css('li.next a::attr("href")').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
```

把它放在一个文本文件中，命名为 `quotes_spider.py` 然后用 `runspider` 命令运行：

```python
scrapy runspider quotes_spider.py -o quotes.jl
```

完成后，您将 quotes.jl 以 JSON 行格式提交一个引号列表，包含文本和作者，如下所示：

```jl
{"author": "Jane Austen", "text": "\u201cThe person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.\u201d"}
{"author": "Steve Martin", "text": "\u201cA day without sunshine is like, you know, night.\u201d"}
{"author": "Garrison Keillor", "text": "\u201cAnyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.\u201d"}
...
```

刚刚发生了什么？

当你运行命令 `scrapy runspider quotes_spider.py` 时，Scrapy 寻找爬虫文件并运行。

通过向中定义的 URL 发出请求启动的爬网 `start_urls` 属性（在本例中，只有引号的 URL humor 并调用默认回调方法 `parse` ，将响应对象作为参数传递。在 `parse` 回调，我们使用 CSS 选择器循环引用元素，生成一个包含提取的引号文本和作者的 python 字典，查找下一页的链接，并使用它调度另一个请求。 `parse` 方法作为回调。

在这里，您注意到 Scrapy 的一个主要优势：请求是异步调度和处理的。这意味着 Scrapy 不需要等待请求完成，它可以同时发送另一个请求或者执行其他任务。这也意味着，即使某些请求失败或在处理过程中发生错误，其他请求也可以继续进行。

虽然这使您能够非常快速地进行爬取（同时以容错的方式发送多个并发请求），但 Scrapy 也能通过一些设置来控制爬虫的侵略性。您可以在每个请求之间设置延迟、限制每个域或每个 IP 的并发请求量，或者使用自动节流扩展，它会帮您自动解决这些问题。

## 还有什么？

您已经了解如何使用 Scrapy 从网站中提取和存储数据，但这只是浅层。Scrapy 提供了许多强大的功能，使抓取变得简单和高效，例如：
* 内置支持 selecting and extracting 使用扩展的 CSS 选择器和 XPath 表达式从HTML/XML 源中获取数据，并使用正则表达式提取助手方法。
* interactive shell console （ipython-aware）用于尝试使用css和xpath表达式来获取数据，在编写或调试spider时非常有用。
* 内置支持 generating feed exports 以多种格式（json、csv、xml）存储在多个后端（ftp、s3、本地文件系统）
* 强大的编码支持和自动检测，用于处理外部、非标准和中断的编码声明。
* Strong extensibility support ，允许您使用 signals 以及定义良好的API（中间件， extensions 和 pipelines ）
* 广泛的内置扩展和用于处理的中间产品：
  * cookie和会话处理
  * HTTP 功能，如压缩、身份验证、缓存
  * 用户代理伪装
  * robots.txt
  * 爬行深度限制
  * 还有更多
* A Telnet console 用于挂接到运行在 Scrapy 进程中的 Python 控制台，以便内省和调试爬虫程序
* 还有其他的好东西，比如可重复使用的蜘蛛 Sitemaps 和XML/CSV源，这是 automatically downloading images （或任何其他媒体）与抓取的项目、缓存DNS解析程序等相关！

## 下一步是什么？

接下来的步骤是安装 Scrapy ， 跟随教程学习创建一个完整的 Scrapy 项目以及加入社区。感谢您的关注！

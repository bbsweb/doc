---
title: 安装指南
---

## 支持的 Python 版本

Scrapy 需要 python3.6+，CPython 或 PyPy  7.2.0+

## 安装 Scrapy

如果您使用 Anaconda 或 Miniconda ，可以从 [conda-forge](https://conda-forge.org) 频道，它有针对 Linux、Windows 和 macOS 的最新软件包。

使用 conda 安装 Scrapy，执行：

```bash
conda install -c conda-forge scrapy
```

除此之外，如果您已经熟悉 python 包的安装，那么可以从 pypi 安装 Scrapy 及其依赖项：

```bash
pip install Scrapy
```

我们强烈建议您使用虚拟环境安装 Scrapy，以避免与其他系统包冲突。

请注意，有时这可能需要根据操作系统解决一些零碎依赖项的编译问题，因此请确保检查平台特定安装说明。

有关更详细和平台特定的说明以及故障排除信息，请继续阅读。

### 使用须知

Scrapy 是用纯 python 编写的，它依赖于几个关键的 python 包：

* [lxml](https://lxml.de/index.html) 高效的 XML 和 HTML 解析器
* [parsel](https://pypi.org/project/parsel/) 基于 lxml 的 HTML/XML 数据提取库
* [w3lib](https://pypi.org/project/w3lib/) 用于处理 URL 和网页编码
* [twisted](https://twistedmatrix.com/trac/) 异步网络框架
* [cryptography](https://cryptography.io/en/latest/) 和 [pyOpenSSL](https://pypi.org/project/pyOpenSSL/) ，处理各种网络级安全需求

Scrapy 最低测试版本：

* Twisted 14.0
* lxml 3.4
* pyOpenSSL 0.14

这些软件包的旧版本不能保证它会继续工作，因为没有针对它们进行的测试。

其中一些软件包本身依赖于非 python 软件包，这些软件包可能需要依赖于您的平台的其他安装步骤。请查看下方特定于平台的安装指南。

与这些依赖项相关的任何问题，请参阅它们各自的安装说明：

* [lxml 安装](https://lxml.de/installation.html)
* [cryptography 安装](https://cryptography.io/en/latest/installation/)

### 使用虚拟环境（推荐）¶

我们建议在所有平台都使用虚拟环境安装 Scrapy。

Python 包可以全局安装（也称为系统范围），也可以安装在用户空间。我们不建议在系统范围内安装 Scrapy。

相反，我们建议您在“虚拟环境”安装 Scrapy（venv）。虚拟环境允许您不与已经安装的Python系统包发生冲突（这可能会破坏您的一些系统工具和脚本），并且仍然可以使用 pip（没有 sudo 之类的权限要求）。

参见虚拟环境和包关于如何创建虚拟环境。

一旦您创建了一个虚拟环境，就可以如同其他软件包一样通过 pip 安装 Scrapy（有关需要预装的非 Python 依赖项，请参阅下面特定于平台的指南）。

## 特定平台安装

### Windows

虽然可以使用 pip 在 Windows 上安装 scrapy，但我们建议您安装 Anaconda 或 Miniconda 并使用来自 conda-forge 这样可以避免大多数安装问题。

安装后 Anaconda 或 Miniconda ，安装 Scrapy用 ：

```bash
conda install -c conda-forge scrapy
```

要使用在 Windows 上安装 Scrapy，请使用 `pip`：

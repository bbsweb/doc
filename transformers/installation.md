---
title: 安装
---

## 通过 pip 安装

```bash
pip install transformers
```

测试

```bash
python -c "from transformers import pipeline; print(pipeline('sentiment-analysis')('we love you'))"
```

## 通过源安装

```bash
pip install git+https://github.com/huggingface/transformers
```

## 使用 conda 安装

```bash
conda install -c huggingface transformers
```

## 缓存设置

预训练模型存储在本地 ` ~/.cache/huggingface/transformers/` 中，这是 `TRANSFORMERS_CACHE` 环境变量设置的默认目录。在 Windows 上，默认目录为 `C:\Users\username\.cache\huggingface\transformers`。

您可以更改如下所示的环境变量 - 按优先级顺序 - 来指定缓存目录：

* `TRANSFORMERS_CACHE`（默认）
* `HF_HOME + transformers/`
* `XDG_CACHE_HOME + /huggingface/transformers`

## 离线模式

Transformers 能够在防火墙背后或离线环境中仅使用本地文件运行。设置环境变量 `TRANSFORMERS_OFFLINE=1` 启用离线模式。

### 获取模型和标记器以离线使用

离线使用 Transformers 的另一个选择是提前下载文件，然后在需要离线使用时指向它们的本地路径。有三种方法可以做到这一点：

* 在 [Model Hub](https://huggingface.co/models) 中单击 ↓ 图标下载文件。

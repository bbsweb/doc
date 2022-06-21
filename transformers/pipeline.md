---
title: 管道
---

## 管道使用

1. 首先创建一个管道并指定一个任务

```python
from transformers import pipeline

generator = pipeline(task="text-generation")
```

2. 将您的输入文本传递给管道：

```python
generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone"
)  # doctest: +SKIP
```

如果您有多个输入，请将您的输入作为列表传递：

```python
generator(
    [
        "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
        "Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne",
    ]
)  # doctest: +SKIP
```

您的任务的任何其他参数也可以包含在 pipeline() 中。该 text-generation 任务有一个带有多个参数的 generate() 方法来控制输出。例如，如果要生成多个输出，请设置 num_return_sequences 参数：

```python
generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
    num_return_sequences=2,
)  # doctest: +SKIP
```

### 选择模型和分词器

## 音频管道

## 图像管道

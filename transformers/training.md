---
title: 微调预训练模型
---

使用预训练模型有很多好处。它降低了计算成本和碳足迹，并允许您使用最先进的模型，而无需从头开始训练。Transformers 为各种任务提供了数千个预训练模型。当您使用预训练模型时，您可以在特定于您的任务的数据集上对其进行训练。这被称为微调，一种非常强大的训练技术。在本教程中，您将使用您选择的深度学习框架微调预训练模型：

* Transformers Trainer
* TensorFlow Keras
* PyTorch

## 准备数据集

在微调预训练模型之前，请下载数据集并为训练做好准备。上一个教程向您展示了如何处理数据以进行训练，现在您有机会测试这些技能！

首先加载 [Yelp 评论](https://huggingface.co/datasets/yelp_review_full) 数据集

```python
from datasets import load_dataset

dataset = load_dataset("yelp_review_full")
dataset["train"][100]
```

众所周知，您需要一个分词器来处理文本并使用一个填充和截断策略来处理任何可变长度序列。要一步处理您的数据集，请使用 Datasets `map` 方法对整个数据集进行预处理：

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")


def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)


tokenized_datasets = dataset.map(tokenize_function, batched=True)
```

如果您愿意，您可以创建数据集的较小子集以减少微调所需的时间：

```python
small_train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(1000))
small_eval_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(1000))
```

## 训练

Transformers 提供了一个针对训练优化的 `Trainer` 类 ，无需手动编写代码即可更轻松地开始训练。Trainer API 支持一系列的训练选项和功能，例如日志记录、梯度累积和混合精度。

首先加载您的模型并指定预期标签的数量。从 Yelp Review [数据集卡片](https://huggingface.co/datasets/yelp_review_full#data-fields)中，您知道有五个标签：

```python
from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=5)
```

### 训练超参数

接下来，创建一个 `TrainingArguments` 类，其中包含您可以调整的所有超参数以及用于激活不同训练选项的标志。对于本教程，您可以从默认的超参数开始，也可以随意修改这些参数以找到您的最佳设置。

指定从训练中保存检查点的位置：

```python
from transformers import TrainingArguments

training_args = TrainingArguments(output_dir="test_trainer")
```

### 指标

Trainer 在训练期间不会自动评估模型性能。您需要向 Trainer 传递一个函数来计算和报告指标。Datasets 库提供了一个简单的函数 `load_metric`

```python
import numpy as np
from datasets import load_metric

metric = load_metric("accuracy")
```

调用 `compute` 方法计算模型的准确性。在此之前，您需要将预测转换为 logits（记住所有 Transformers 模型都返回 logits）：

```python
def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)
```

如果您想在微调期间监控指标，请设置 evaluation_strategy 参数以在每个 epoch 结束时报告评估指标：

```python
from transformers import TrainingArguments, Trainer

training_args = TrainingArguments(output_dir="test_trainer", evaluation_strategy="epoch")
```

### 训练器（Trainer）

使用您的模型、训练参数、训练和测试集以及评估函数来创建一个训练器对象：

```python
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
)
```

然后调用 `train()` 开始训练：

```python
trainer.train()
```

### 将数据集转换为 TensorFlow 格式

`DefaultDataCollat​​or` 将张量组装成一个批次供模型训练。您可以指定 return_tensors 参数以返回 TensorFlow 张量：

```python
from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")
```

接下来，使用 `to_tf_dataset` 方法将已分词的数据集转换为 TensorFlow 数据集。在 `columns` 中指定您的输入，并在 `label_cols` 中指定您的标签：

```python
tf_train_dataset = small_train_dataset.to_tf_dataset(
    columns=["attention_mask", "input_ids", "token_type_ids"],
    label_cols=["labels"],
    shuffle=True,
    collate_fn=data_collator,
    batch_size=8,
)

tf_validation_dataset = small_eval_dataset.to_tf_dataset(
    columns=["attention_mask", "input_ids", "token_type_ids"],
    label_cols=["labels"],
    shuffle=False,
    collate_fn=data_collator,
    batch_size=8,
)
```

### 编译和训练

加载具有预期标签数量的 TensorFlow 模型：

```python
import tensorflow as tf
from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=5)
```

然后像其他 Keras 模型一样编译和训练您的模型

```python
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=5e-5),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=tf.metrics.SparseCategoricalAccuracy(),
)

model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=3)
```

## 在 PyTorch 中训练

### DataLoader

### Optimizer and learning rate scheduler

### Training loop

### Metrics

## 其他资源

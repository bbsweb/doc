---
title: 语言特征
---

智能地处理原始文本是很困难的：大多数单词都很少见，而且完全不同的单词也可能具有相同的含义。相同单词的不同顺序可能代表不同的含义。在许多语言中，即使将文本拆分为一个个小单元也可能很困难。虽然可以仅从原始字符开始解决一些问题，但通常最好的解决方法是使用语言学知识来进行分析。这正是 spaCy 的设计初衷：输入原始文本，然后返回一个带有各种注释的 `Doc` 对象。

## 词性标注

```python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

for token in doc:
    print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
            token.shape_, token.is_alpha, token.is_stop)
```

```
Text: 初始单词
Lemma: 单词原型
POS: 词性
    ADJ: 形容词
    ADP: 介词
    ADV: 副词
    AUX: 助动词
    CCONJ: 并列连词
    DET: 限定词
    INTJ: 语气词
    NOUN: 名词
    NUM: 数词
    PART: 分词
    PRON: 代词
    PROPN: 专有名词
    PUNCT: 标点符号
    SCONJ: 从属连词
    SYM: 符号
    VERB: 动词
    X: 其他
Tag: 详细词性
Dep: 句法依赖，即词语之间的关系。
Shape: 单词形式
is alpha: 是否为字母
is stop: 是否为停用词
```

## 词法学

## 词形还原

## 依赖解析

## 命名实体识别

## 实体链接

## 标记

## 合并 & 拆分

## 句子片段

## 词向量与语义相似度

## 映射 & 异常

## 语言数据

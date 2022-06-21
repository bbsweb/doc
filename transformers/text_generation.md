---
title: 文本生成
---

每个框架都有一个 `generate` 方法，用于在各自的 `GenerationMixin` 类中实现自回归文本生成：

* PyTorch 在 GenerationMixin 类中实现 generate()
* TensorFlow 在 TFGenerationMixin 类中实现 generate()
* Flax/JAX 在 FlaxGenerationMixin 中实现 generate()

## GenerationMixin


<details>
<summary>

`class transformers.generation_utils.GenerationMixin`
</summary>

<details>
<summary>

`generate`
</summary>

参数：

* inputs
* max_length —— 生成序列的最大长度。
* max_new_tokens —— 生成的最大分词数，忽略当前分词数。与 max_length 含义相同，不能同时使用两者。
* min_length —— 生成序列的最小长度。
* do_sample —— 是否使用采样，false 则使用贪婪解码。
* early_stopping
* num_beams
* temperature
* top_k
* top_p
* typical_p
* repeat_penalty
* pad_token_id
* bos_token_id
* eos_token_id
* length_penalty
* no_repeat_ngram_size
* encoder_no_repeat_ngram_size
* bad_words_ids
* force_words_ids
* num_return_sequences
* max_time
* attention_mask
* decoder_start_token_id
* num_beam_groups
* diversity_penalty
* prefix_allowed_tokens_fn
* logits_processor
* stop_criteria
* constraints
* output_attentions
* output_hidden_states
* output_scores
* return_dict_in_generate
* forced_bos_token_id
* forced_eos_token_id
* remove_invalid_values
* synced_gpus
* exponential_decay_length_penalty

</details>

<details>
<summary>

`greedy_search`
</summary>
</details>

<details>
<summary>

`sample`
</summary>
</details>

<details>
<summary>

`beam_search`
</summary>
</details>

<details>
<summary>

`beam_sample`
</summary>
</details>

<details>
<summary>

`group_beam_search`
</summary>
</details>

<details>
<summary>

`constrained_beam_search`
</summary>
</details>

</details>

## TFGenerationMixin

## FlaxGenerationMixin

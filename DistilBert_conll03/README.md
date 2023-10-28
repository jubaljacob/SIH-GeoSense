---
language: en
license: apache-2.0
datasets:
- conll2003
model-index:
- name: elastic/distilbert-base-uncased-finetuned-conll03-english
  results:
  - task:
      type: token-classification
      name: Token Classification
    dataset:
      name: conll2003
      type: conll2003
      config: conll2003
      split: validation
    metrics:
    - type: accuracy
      value: 0.9854480753649896
      name: Accuracy
      verified: true
      verifyToken: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJoYXNoIjoiZmM0NzNhYTM2NGU0YjMwZDMwYTdhYjY3MDgwMTYxNWRjYzQ1NmE0OGEwOTcxMGY5ZTU1ZTQ3OTM5OGZkYjE2NCIsInZlcnNpb24iOjF9.v8Mk62C40vRWQ78BSCtGyphKKHd6q-Ir6sVbSjNjG37j9oiuQN3CDmk9XItmjvCwyKwMEr2NqUXaSyIfUSpBDg
    - type: precision
      value: 0.9880928983228512
      name: Precision
      verified: true
      verifyToken: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJoYXNoIjoiMWIzYTg2OTFjY2FkNWY4MzUyN2ZjOGFlYWNhODYzODVhYjQwZTQ3YzdhMzMxY2I4N2U0YWI1YWVlYjIxMDdkNCIsInZlcnNpb24iOjF9.A50vF5qWgZjxABjL9tc0vssFxYHYhBQ__hLXcvuoZoK8c2TyuODHcM0LqGLeRJF8kcPaLx1hcNk3QMdOETVQBA
    - type: recall
      value: 0.9895677847945542
      name: Recall
      verified: true
      verifyToken: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJoYXNoIjoiYzBiZDg1YmM2NzFkNjQ3MzUzN2QzZDAwNzUwMmM3MzU1ODBlZWJjYmI1YzIxM2YxMzMzNDUxYjkyYzQzMDQ3ZSIsInZlcnNpb24iOjF9.aZEC0c93WWn3YoPkjhe2W1-OND9U2qWzesL9zioNuhstbj7ftANERs9dUAaJIlNCb7NS28q3x9c2s6wGLwovCw
    - type: f1
      value: 0.9888297915932504
      name: F1
      verified: true
      verifyToken: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJoYXNoIjoiYmNkNzVhODJjMjExOTg4ZjQwMWM4NGIxZGNiZTZlMDk5MzNmMjIwM2ZiNzdiZGIxYmNmNmJjMGVkYTlkN2FlNiIsInZlcnNpb24iOjF9.b6qmLHkHu-z5V1wC2yQMyIcdeReptK7iycIMyGOchVy6WyG4flNbxa5f2W05INdnJwX-PHavB_yaY0oULdKWDQ
    - type: loss
      value: 0.06707527488470078
      name: loss
      verified: true
      verifyToken: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJoYXNoIjoiNDRlMWE2OTQxNWI5MjY0NzJjNjJkYjg1OWE1MjE2MjI4N2YzOWFhMDI3OTE0ZmFhM2M0ZWU0NTUxNTBiYjhiZiIsInZlcnNpb24iOjF9.6JhhyfhXxi76GRLUNqekU_SRVsV-9Hwpm2iOD_OJusPZTIrEUCmLdIWtb9abVNWNzMNOmA4TkRLqLVca0o0HAw
---

[DistilBERT base uncased](https://huggingface.co/distilbert-base-uncased), fine-tuned for NER using the [conll03 english dataset](https://huggingface.co/datasets/conll2003). Note that this model is **not** sensitive to capital letters — "english" is the same as "English". For the case sensitive version, please use [elastic/distilbert-base-cased-finetuned-conll03-english](https://huggingface.co/elastic/distilbert-base-cased-finetuned-conll03-english).

## Versions

- Transformers version: 4.3.1
- Datasets version: 1.3.0

## Training

```
$ run_ner.py \
  --model_name_or_path distilbert-base-uncased \
  --label_all_tokens True \
  --return_entity_level_metrics True \
  --dataset_name conll2003 \
  --output_dir /tmp/distilbert-base-uncased-finetuned-conll03-english \
  --do_train \
  --do_eval
```

After training, we update the labels to match the NER specific labels from the
dataset [conll2003](https://raw.githubusercontent.com/huggingface/datasets/1.3.0/datasets/conll2003/dataset_infos.json)

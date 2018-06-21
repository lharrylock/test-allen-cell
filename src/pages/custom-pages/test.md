---
templateKey: custom-page
title: test
chunk:
  - image: /img/flavor_wheel.jpg
    label: Image
    name: image
    widget: image
  - fields:
      - label: Image
        name: image
        widget: image
      - label: Caption
        name: caption
        widget: text
    imageAndCaption:
      caption: img and caption
      image: /img/coffee-gear.png
    label: Image and Caption
    name: imageAndCaption
    widget: object
  - chunk:
      - label: Text
        name: text
        text: Some test text here
        widget: text
      - label: Markdown
        markdown: |-
          Markdown

          * first
          * second
          * third
        name: markdown
        widget: markdown
      - fields:
          - label: Image
            name: image
            widget: image
          - label: Caption
            name: caption
            widget: text
        imageAndCaption:
          caption: Coffee gear
          image: /img/coffee-gear.png
        label: Image and Caption
        name: imageAndCaption
        widget: object
    label: Modular Content Chunks
    label_singular: Modular Content Chunk
    name: chunk
    types:
      - label: Text
        name: text
        widget: text
      - fields:
          - label: Image
            name: image
            widget: image
          - label: Caption
            name: caption
            widget: text
        label: Image and Caption
        name: imageAndCaption
        widget: object
      - label: Markdown
        name: markdown
        widget: markdown
    widget: list
---


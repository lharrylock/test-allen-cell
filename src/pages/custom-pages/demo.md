---
templateKey: custom-page
title: Demo
date: '2018-06-29T14:46:17-07:00'
page:
  chunks:
    - chunks:
        - label: Text
          name: text
          text: Brown fox
          widget: text
        - label: Text
          name: text
          text: >-
            .more text heremore text heremore text heremore text heremore text
            heremore text heremore text heremore text heremore text heremore
            text heremore text heremore text here
          widget: text
        - fields:
            - label: Image
              name: image
              widget: image
            - label: Caption
              name: caption
              widget: text
          imageAndCaption:
            caption: coffee
            image: /img/coffee-gear.png
          label: Image and Caption
          name: imageAndCaption
          widget: object
      orientationIsVertical: false
      sectionColor: mint
    - chunks:
        - label: Markdown
          markdown: |-
            * point 1
            * point 2
            * point 3
          name: markdown
          widget: markdown
      sectionColor: red
  orientationIsVertical: true
---


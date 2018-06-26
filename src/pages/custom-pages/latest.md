---
templateKey: custom-page
title: latest
page:
  chunks:
    - chunks:
        - label: Text
          name: text
          text: test
          widget: text
        - label: Text
          name: text
          text: test
          widget: text
      orientationIsVertical: true
      sectionColor: teal
    - chunks:
        - label: Text
          name: text
          text: asdf
          widget: text
      sectionColor: mint
    - chunks:
        - fields:
            - label: Image
              name: image
              widget: image
            - label: Caption
              name: caption
              widget: text
          imageAndCaption:
            caption: test
            image: /img/coffee-gear.png
          label: Image and Caption
          name: imageAndCaption
          widget: object
        - label: Markdown
          markdown: |-
            * asdf
            * asdfd
            * ksdkj

            # heading 1

            ## heading 2
          name: markdown
          widget: markdown
      sectionColor: white
  orientationIsVertical: true
---


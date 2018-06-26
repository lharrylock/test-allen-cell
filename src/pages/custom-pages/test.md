---
templateKey: custom-page
title: test
page:
  chunks:
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Section Color
          name: sectionColor
          widget: color
        - label: Page Section Items
          label_singular: Page Section Item
          name: chunks
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
      label: Page Section
      name: section
      section:
        chunks:
          - label: Text
            name: text
            text: boo
            widget: text
          - fields:
              - label: Image
                name: image
                widget: image
              - label: Caption
                name: caption
                widget: text
            imageAndCaption:
              caption: chemex
              image: /img/chemex.jpg
            label: Image and Caption
            name: imageAndCaption
            widget: object
        orientationIsVertical: true
        sectionColor: red
      widget: object
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Section Color
          name: sectionColor
          widget: color
        - label: Page Section Items
          label_singular: Page Section Item
          name: chunks
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
      label: Page Section
      name: section
      section:
        chunks:
          - label: Text
            name: text
            text: asdf
            widget: text
          - label: Markdown
            markdown: |-
              * point 1
              * point2
              * point3
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
              caption: test
              image: /img/coffee.png
            label: Image and Caption
            name: imageAndCaption
            widget: object
        sectionColor: mint
      widget: object
  orientationIsVertical: true
---


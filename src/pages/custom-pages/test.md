---
templateKey: custom-page
title: test
page:
  chunks:
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Page Sections
          label_singular: Page Section Group Item
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
              name: body
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - body: |-
              ## Heading 2

              normal text here

              * point 1
              * point 2
              * point 3
            label: Markdown
            name: body
            widget: markdown
        orientationIsVertical: false
      widget: object
    - body: |-
        * text
        * text
        * text
      label: Markdown
      name: body
      widget: markdown
---


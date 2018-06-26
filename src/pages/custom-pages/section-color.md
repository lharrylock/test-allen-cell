---
templateKey: custom-page
title: section color
page:
  chunks:
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Section Color
          name: sectionColor
          widget: color
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
              name: markdown
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - label: Text
            name: text
            text: some text here
            widget: text
          - fields:
              - label: Image
                name: image
                widget: image
              - label: Caption
                name: caption
                widget: text
            imageAndCaption:
              caption: a chemex
              image: /img/chemex.jpg
            label: Image and Caption
            name: imageAndCaption
            widget: object
        sectionColor: red
      widget: object
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Section Color
          name: sectionColor
          widget: color
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
              name: markdown
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - label: Text
            name: text
            text: hello
            widget: text
        sectionColor: white
      widget: object
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Section Color
          name: sectionColor
          widget: color
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
              name: markdown
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - fields:
              - label: Image
                name: image
                widget: image
              - label: Caption
                name: caption
                widget: text
            imageAndCaption:
              caption: lots of coffee stuff
              image: /img/coffee-gear.png
            label: Image and Caption
            name: imageAndCaption
            widget: object
        sectionColor: mint
      widget: object
    - fields:
        - label: Stack Page Sections Vertically
          name: orientationIsVertical
          widget: boolean
        - label: Section Color
          name: sectionColor
          widget: color
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
              name: markdown
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - label: Markdown
            markdown: >-
              > yumm
              [coffee](https://app.netlify.com/sites/blissful-heyrovsky-bbe561/overview)

              >

              > it's so good


              * coffee **tastes** good

              * it's_ enjoyable_ in the `morning`

              * hi


              # I'm an H1


              ## I'm an H2


              ![](/img/jumbotron.jpg)


              ```

              // preview

              ```


              ```

              CMS.registerPreviewTemplate('about', AboutPagePreview);

              ```


              ```

              CMS.registerPreviewTemplate('products', ProductPagePreview);

              ```


              ```

              CMS.registerPreviewTemplate('blog', BlogPostPreview);

              ```


              ```

              CMS.registerPreviewTemplate('custom-page', CustomPagePreview);

              ```
            name: markdown
            widget: markdown
        sectionColor: teal
      widget: object
  orientationIsVertical: true
---


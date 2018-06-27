---
templateKey: custom-page
title: test-layouts
date: '2018-06-27T13:47:07-07:00'
page:
  chunks:
    - chunks:
        - label: Markdown
          markdown: |-
            This is all markdown

            # heading 1

            ## heading 2

            > I am a quote

            ![](/img/drug-pertubation-1_orig.png)
          name: markdown
          widget: markdown
      sectionColor: mint
    - chunks:
        - label: Text
          name: text
          text: Some text in section 2
          widget: text
        - fields:
            - label: Image
              name: image
              widget: image
            - label: Caption
              name: caption
              widget: text
          imageAndCaption:
            caption: I'm a custom image and caption component
            image: /img/jumbotron.jpg
          label: Image and Caption
          name: imageAndCaption
          widget: object
        - fields:
            - label: Image
              name: image
              widget: image
            - label: Caption
              name: caption
              widget: text
          imageAndCaption:
            caption: here's another image
            image: /img/coffee-gear.png
          label: Image and Caption
          name: imageAndCaption
          widget: object
      orientationIsVertical: false
      sectionColor: white
    - chunks:
        - label: Text
          name: text
          text: Section 3
          widget: text
        - label: Markdown
          markdown: >-
            Our goal is to identify signature profiles of cellular organization
            for a range of well-characterized agonists and antagonists commonly
            used to perturb specific cellular processes or pathways. To do this,
            we developed a scalable and reproducible imaging pipeline using
            GFP-tagged human induced pluripotent stem cells (hiPSC) that
            illuminates the 3D organization of the major cellular structures.
            The cells are from the Allen Cell Collection, which is a set of well
            characterized cell lines, each expressing a GFP-tagged protein that
            shows the location of a particular cell organelle or structure.
          name: markdown
          widget: markdown
      orientationIsVertical: true
      sectionColor: red
  orientationIsVertical: false
---


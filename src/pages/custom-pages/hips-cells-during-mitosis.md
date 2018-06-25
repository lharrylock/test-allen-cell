---
templateKey: custom-page
title: hiPS cells during mitosis
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
              name: markdown
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - label: Markdown
            markdown: >-
              ## Behavior of hiPS Cells During Mitosis


              hiPS cells were manually categorized into 7 stages of mitosis
              based on the appearance (shape and texture) of the fluorescence
              signal of the DNA labeled with NucBlue Live (Figure 1 below).
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
              caption: >
                Figure 1. Representative examples of hiPS cells in seven stages
                of mitosis and one category representing interphase categorized
                by shape and texture patterns of the DNA. Live hiPS cells were
                labeled with NucBlue Live (DNA; cyan; maximum intensity
                projection) and CellMask Deep Red (cell membrane; magenta;
                single slice near middle of the cell) and imaged on a
                spinning-disk confocal microscope. Top row shows DNA and bottom
                row shows DNA and membrane. 
              image: /img/coffee-gear.png
            label: Image and Caption
            name: imageAndCaption
            widget: object
          - label: Markdown
            markdown: >-
              These stages were not selected based on prior biological knowledge
              of standard mitotic stages. However, examination of hiPS cells
              expressing mEGFP-tagged alpha-tubulin (Figure 2 below) showed good
              correspondence between these stages and some of the classic
              features of canonical mitotic stages including prophase,
              prometaphase, metaphase, anaphase, telophase and cytokinesis. In
              addition, non-mitotic cells were considered as one ensemble
              interphase stage.
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
              caption: >-
                ​Figure 2. Representative examples of hiPS cells expressing
                mEGFP-tagged alpha-tubulin in seven stages of mitosis and one
                stage of interphase categorized by shape and texture patterns of
                the DNA. Live hiPS cells were labeled with NucBlue Live (DNA;
                cyan;) and CellMask Deep Red (cell membrane; magenta) and imaged
                on a spinning-disk confocal microscope. Images are a single
                slice near middle of the cell. Bottom row shows an illustration
                of mitosis stages as depicted in the listed reference.
              image: /img/coffee.png
            label: Image and Caption
            name: imageAndCaption
            widget: object
          - label: Markdown
            markdown: >-
              These 8 categories were used for manual annotation of ~700 mitotic
              cells from the Allen Cell Collection. These cells represent data
              from 14 gene-edited clonal hiPSC cell lines with FP-tagged
              structures. The data used for this analysis are available in the
              3D Cell Viewer or in bulk on the data downloads page.
            name: markdown
            widget: markdown
        orientationIsVertical: true
      widget: object
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
              name: markdown
              widget: markdown
          widget: list
      label: Page Section
      name: page
      page:
        chunks:
          - label: Markdown
            markdown: >-
              ## An integrated view of the cell at each stage of mitosis 


              ![chemex](/img/chemex.jpg)


              ​For each cell line and mitotic stage category, all assigned cells
              were examined for the location and morphology of the intracellular
              structure. One representative example of each is shown in Figure 3
              below, as well as in the 3D Visual Summary tool. To simplify the
              presentation in the 3D Visual Summary tool, several of these
              mitotic categories were removed and the remaining categories were
              named after canonical mitotic stages.
            name: markdown
            widget: markdown
        orientationIsVertical: false
      widget: object
  orientationIsVertical: false
---


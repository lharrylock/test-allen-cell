---
templateKey: custom-page
title: Drug Perturbation Pilot
page:
  chunks:
    - fields:
        - label: Stack Page Sections Vertically
          name: orientation
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
      label: Page Layout
      name: page
      page:
        chunks:
          - label: Markdown
            markdown: >-
              ## Overview of drug perturbation pilot stud​y


              Our goal is to identify signature profiles of cellular
              organization for a range of well-characterized agonists and
              antagonists commonly used to perturb specific cellular processes
              or pathways. To do this, we developed a scalable and reproducible
              imaging pipeline using GFP-tagged human induced pluripotent stem
              cells (hiPSC) that illuminates the 3D organization of the major
              cellular structures. The cells are from the Allen Cell Collection,
              which is a set of well characterized cell lines, each expressing a
              GFP-tagged protein that shows the location of a particular cell
              organelle or structure.




              ​The analysis not only shows the effects of these drugs on
              structures they are known to perturb but also on other structures
              providing a rich signature of pathway alterations. For examples,
              we observed unreported  reorganization of the ER in presence of
              placlitaxel,  relocalization of cell junction proteins and 
              disruption of actomyosin bundle in presence of staurosporine,
              fragmentation of golgi and cell junctions in presence of 
              blebbistatin and reorganization of golgi in presence of rapamycin.
              Here, we present the initial 3D imaging workflow we are using to
              identify these signatures.
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
                Workflow. The pipeline was prototyped using a small suite of
                well-characterized drugs including brefeldin A, paclitaxel,
                rapamycin, wortmannin, and staurosporine. These drugs were
                chosen based on their well-documented effects on the
                organization of a specific structure or the inhibition of a
                signaling pathway. Initial conditions were selected either by an
                image-based dose-response study at 20x magnification or based on
                reported effects in the literature. We then performed 3D high
                magnification (120x) imaging at the selected time point and drug
                concentration determined for each drug and cell line
                combination. All hiPSCs were labeled with NucBlue Live (DNA,
                Cyan) and CellMask Deep Red (Cell membrane, magenta) and imaged
                with a Zeiss spinning disk (Yokogawa CSU-X) confocal and
                Hamamatsu Orca-Flash4.0 V2 CMOS camera. Results were aggregated
                into a matrix.
              image: /img/coffee-gear.png
            label: Image and Caption
            name: imageAndCaption
            widget: object
        orientation: true
      widget: object
    - label: Text
      name: text
      text: Target conditions
      widget: text
    - fields:
        - label: Stack Page Sections Vertically
          name: orientation
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
      label: Page Layout
      name: page
      page:
        chunks:
          - label: Text
            name: text
            text: Drug-induced phenotypic signatures
            widget: text
          - fields:
              - label: Image
                name: image
                widget: image
              - label: Caption
                name: caption
                widget: text
            imageAndCaption:
              caption: >-
                Drug Signature. The above shows a matrix of representative image
                planes from z-stacks collected at 120x of the GFP-tagged cell
                lines with nucleus and cell membrane markers. Cells were treated
                with the indicated perturbation agent at a pre-selected
                concentration and time point (see Table 1). Except as noted, all
                images are single planes from the center of the z-stack with the
                GFP-tagged structure in white, the nucleus in cyan, and the cell
                membrane in magenta. For myosin and actin, 3 additional planes
                are shown without nucleus and cell membrane markers (clockwise
                from top right, the images are single planes at the top, bottom,
                and middle of the z-stack). Visually observable target (green
                frame) and non-target (orange frame) morphological effects are
                highlighted. Scale bar is 10µm.
              image: /img/products-grid1.jpg
            label: Image and Caption
            name: imageAndCaption
            widget: object
        orientation: true
      widget: object
  orientationIsVertical: true
---


---
templateKey: custom-page
title: Drug Perturbation Pilot
date: '2018-06-26T16:16:32-07:00'
page:
  chunks:
    - chunks:
        - label: Markdown
          markdown: >-
            ## Overview of drug perturbation pilot stud​y


            Our goal is to identify signature profiles of cellular organization
            for a range of well-characterized agonists and antagonists commonly
            used to perturb specific cellular processes or pathways. To do this,
            we developed a scalable and reproducible imaging pipeline using
            GFP-tagged human induced pluripotent stem cells (hiPSC) that
            illuminates the 3D organization of the major cellular structures.
            The cells are from the Allen Cell Collection, which is a set of well
            characterized cell lines, each expressing a GFP-tagged protein that
            shows the location of a particular cell organelle or structure.


            ​The analysis not only shows the effects of these drugs on
            structures they are known to perturb but also on other structures
            providing a rich signature of pathway alterations. For examples, we
            observed unreported  reorganization of the ER in presence of
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
              rapamycin, wortmannin, and staurosporine. These drugs were chosen
              based on their well-documented effects on the organization of a
              specific structure or the inhibition of a signaling pathway.
              Initial conditions were selected either by an image-based
              dose-response study at 20x magnification or based on reported
              effects in the literature. We then performed 3D high magnification
              (120x) imaging at the selected time point and drug concentration
              determined for each drug and cell line combination. All hiPSCs
              were labeled with NucBlue Live (DNA, Cyan) and CellMask Deep Red
              (Cell membrane, magenta) and imaged with a Zeiss spinning disk
              (Yokogawa CSU-X) confocal and Hamamatsu Orca-Flash4.0 V2 CMOS
              camera. Results were aggregated into a matrix.
            image: /img/flavor_wheel.jpg
          label: Image and Caption
          name: imageAndCaption
          widget: object
        - label: Text
          name: text
          text: Target Conditions
          widget: text
        - fields:
            - label: Image
              name: image
              widget: image
            - label: Caption
              name: caption
              widget: text
          imageAndCaption:
            caption: asdf
            image: /img/products-grid2.jpg
          label: Image and Caption
          name: imageAndCaption
          widget: object
      orientationIsVertical: false
      sectionColor: red
    - chunks:
        - label: Markdown
          markdown: |-
            * point 1
            * point 2
          name: markdown
          widget: markdown
      sectionColor: mint
  orientationIsVertical: false
---


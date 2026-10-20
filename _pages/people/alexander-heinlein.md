---
layout: page
title: Alexander Heinlein
description: Group lead · Assistant professor
permalink: /people/alexander-heinlein/
nav: false
member_id: alexander-heinlein
---

{% assign member = site.data.people | where: 'id', page.member_id | first %}

{% if member.photo %}
<img class="scala-portrait scala-portrait-profile" src="{{ member.photo }}" alt="Alexander Heinlein" width="200" height="200">
{% endif %}

Alexander Heinlein is an assistant professor in the Numerical Analysis group of the Delft Institute of Applied Mathematics (DIAM), Faculty of Electrical Engineering, Mathematics & Computer Science, at TU Delft. He leads SCaLA—Scalable Scientific and Learning Algorithms.

His research focuses on **numerical methods for partial differential equations** and **scientific computing**, in particular domain decomposition and multiscale methods. His work combines mathematical foundations, scalable algorithms, implementation on current CPU and GPU architectures, and applications to complex scientific problems. He also works on **scientific machine learning**, connecting scientific computing with machine learning.

## Research interests

- Domain decomposition, preconditioning, and scalable linear and nonlinear solvers
- Multiscale discretisations for heterogeneous problems
- High-performance computing on CPU and GPU architectures
- Scientific machine learning
- Multiphysics problems and fluid–structure interaction

## Research software: Trilinos and FROSch

Alexander contributes to **[Trilinos](https://trilinos.github.io/)**, an open-source framework for large-scale scientific and engineering computations, and **[FROSch](https://shylu-frosch.github.io/)**, its framework for Fast and Robust Overlapping Schwarz preconditioners.

His software activities also include **[FEDDLib](https://github.com/FEDDLib/)**, a parallel finite-element and domain-decomposition library based on Trilinos that serves as a testbed for FROSch.

[SCaLA research software]({{ '/software/' | relative_url }})

## Academic appointments

| Period | Position | Institution |
| --- | --- | --- |
| 2021–present | Assistant Professor for Numerical Analysis | TU Delft |
| 2020–2021 | Acting Professor for Numerical Mathematics for High Performance Computing | University of Stuttgart |
| 2018–2020 | Managing Coordinator, Center for Data and Simulation Science | University of Cologne |
| 2016–2020 | Postdoctoral researcher | University of Cologne |

## Education and teaching qualification

- **Dr. rer. nat.**, University of Cologne, 2016
- **Dipl.-Math.**, University of Duisburg-Essen, 2011
- **University Teaching Qualification**, 2024

## Contact

[a.heinlein@tudelft.nl](mailto:a.heinlein@tudelft.nl)  
Delft Institute of Applied Mathematics, TU Delft  
Mekelweg 4, 2628 CD Delft, The Netherlands  
Room HB 03.290 · +31 (0)15 27 89135

[Personal website](https://searhein.github.io/) · [Curriculum vitae](https://searhein.github.io/cv/) · [Publications]({{ '/publications/' | relative_url }}) · [Talks]({{ '/talks/' | relative_url }})

[Back to the SCaLA group]({{ '/group/' | relative_url }})

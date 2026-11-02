---
layout: post
title: Learning to solve equations, from local networks to hybrid solvers
date: 2026-11-01
permalink: /blog/2026/learning-to-solve-equations/
description: Two research directions connect machine learning with the mathematical structure of numerical solvers.
thumbnail: /assets/img/research/local-networks-schematic.svg
categories: Research
tags: scientific-machine-learning domain-decomposition numerical-solvers
author: SCaLA
published: true
giscus_comments: false
related_posts: false
---

Solving equations is central to scientific computing. At SCaLA, we study how machine learning can work with numerical methods: learning useful components of a solver, or building models that reflect the structure of the underlying problem.

## Learning within an iterative solver

Yuhuang Meng, Jing Zhao and Alexander Heinlein survey hybrid iterative methods for linear and nonlinear systems. Their overview brings together approaches that learn initial guesses, updates, preconditioners and solver parameters, alongside methods that combine learned components with classical iterations. It also identifies open challenges for making these combinations reliable and useful across different problems.

[Read the overview]({{ '/publications/' | relative_url }}#Meng:2026:OML) · [Public preprint](https://arxiv.org/abs/2610.07211)

## Local networks, global approximation

A complementary direction uses domain decomposition to build the learning model itself. In finite-basis Kolmogorov–Arnold networks, smaller local networks contribute to a global approximation. Amanda Howard and colleagues investigate this architecture for multiscale problems, noisy data and physics-informed training.

<img src="{{ '/assets/img/research/local-networks-schematic.svg' | relative_url }}" alt="Three networks learn contributions on overlapping local regions and combine them into a global approximation." width="960" height="540" class="img-fluid rounded" loading="lazy" decoding="async">

_Original SCaLA schematic illustrating the local-to-global idea; this is not a numerical result._

[Read the FBKAN paper]({{ '/publications/' | relative_url }}#Howard:2025:FBK) · [Public preprint](https://arxiv.org/abs/2406.19662)

## Explore the research

These directions share an interest in combining mathematical structure with learning. Visit our [research overview]({{ '/research/' | relative_url }}), meet the [group]({{ '/group/' | relative_url }}), or explore the [publication list]({{ '/publications/' | relative_url }}) for full author lists and current publication information.

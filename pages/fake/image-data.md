---
title: Image Data
layout: default
permalink: /image-data/
---

# Image Data

{% assign projects = site.data.projects | sort: 'order' %}
{% assign pics = site.static_files | where: 'image', true %}

{% for project in projects %}
## {{ project.name }}

`{{ project.folder }}:`
{% for pic in pics %}
{% if pic.path contains project.folder and pic.extname == '.png' %}
```
- image: {{ pic.path | split: '/' | last }}
  caption: none
  alt: {{ project.name }} screengrab
```
{% endif %}
{% endfor %} <!-- end pics -->

{% endfor %} <!-- end project -->

*Hell yeah, it works!!!*


---
title: Image Data
layout: default
permalink: /image-data/
---

# Image Data

{% assign projects = site.data.projects %}
{% assign pics = site.static_files | where: 'image', true %}

{% for project in projects %}
## {{ project.name }}

{% for pic in pics %}
{% if pic.path contains project.folder and pic.extname == '.png' %}
- {{ pic.path | split: '/' | last }}
{% endif %}
{% endfor %} <!-- end pics -->

{% endfor %} <!-- end project -->

*Hell yeah, it works!!!*
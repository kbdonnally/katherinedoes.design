---
title: Portfolio
layout: default
permalink: /portfolio/
---

# Portfolio

A selection of projects.

{% assign projects = site.data.projects | sort: 'order' %}
{% assign pics = site.static_files | where: 'image', true %}

{% for project in projects %}
<!-- metadata: -->
## {{ project.name }}
*{{ project.date }}*
- Role: {{ project.role }}
- [Link to project]({{ project.link }})

<!-- pics: -->
{% for pic in pics %}
{% if pic.path contains project.folder and pic.extname == '.png' %}
<!--{{ pic.path | relative_url }}-->

![{{ project.name }} screengrab]({{ pic.path | relative_url }}){: height="200px" title="{{ pic.path}}"}
{% endif %}
{% endfor %}

<!-- end loop -->
{% endfor %}
---
title: Projects - Generate HTML
layout: default
permalink: /html/
---

title/link
date
...
pics
...
role
creators
about


{% assign projects = site.data.projects | sort: 'order' %}
{% assign pics = site.static_files | where: 'image', true %}

{% for project in projects %}
## [{{ project.name }}]({{ project.link }})
*{{ project.date }}*

<!-- pics: -->
{% for pic in pics %}
{% if pic.path contains project.folder and pic.extname == '.png' %}

- ![{{ project.name }} screengrab]({{ pic.path | relative_url }}){: height="200px" title="{{ pic.path}}"}
{% endif %}
{% endfor %}

<!-- metadata: -->
- Role: {{ project.role }}
- Creators: {% for creator in project.creators %} {% if forloop.last %} {{ creator }} {% else %} {{ creator }}, {% endif %} {% endfor %}
- About: {{ project.description }}

<!-- end loop -->
{% endfor %}
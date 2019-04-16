---
title: Site Map
layout: default
permalink: /sitemap/
---

{% for page in site.pages %}
{% if page.layout and page.path contains 'pages' %}
- [{{ page.title }}]({{ page.url | absolute_url }})
	- {{ page.path }}
{% endif %}
{% endfor %}
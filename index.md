---
layout: default
---

# Portfolio Homepage

## Contact

- Contact info stuff
- Goes here

## About

- What I care about
- What I'm good at

## See my work

- Link to project page
- Hire me!

## Testing menu list:

{% for page in site.pages %}
{% if page.layout and page.path contains 'pages' %}
- [{{ page.title }}]({{ page.url | absolute_url }})
	- {{ page.path }}
{% endif %}
{% endfor %}
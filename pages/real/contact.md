---
title: Contact
layout: default
permalink: /contact/
menu: true
---

# Contact

{% assign contacts = site.data.contact | sort: 'order' %}
<ul class="home-contact__list">
{% for contact in contacts %}
<li class="home-contact__item">
	<img alt="{{ contact.type }}" title="{{ contact.type }}" src="{{ contact.img | relative_url }}">
	<a href="{{ contact.url }}">{{ contact.username }}</a>
</li>
{% endfor %}
</ul>
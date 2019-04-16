---
layout: default
---

# Portfolio Homepage

## Contact

{% assign contacts = site.data.contact | sort: 'order' %}
<ul class="home-contact__list">
{% for contact in contacts %}
<li class="home-contact__item">
	<img alt="{{ contact.type }}" title="{{ contact.type }}" src="{{ contact.img | relative_url }}">
	<a href="{{ contact.url }}">{{ contact.username }}</a>
</li>
{% endfor %}
</ul>

## About

- What I care about
- What I'm good at

## See my work

- Link to [project page]({{site.baseurl}}/projects/)
- Hire me!

# Katherine Donnally

## Web designer specializing in personal website design, from-scratch organization websites, & the possibilities of aesthetics when we leave respectability politics behind.

### My main offerings

- Designs personal and organization websites
- Something from scratch or spiff up your existing website
- Insert form quiz to funnel by those 2 needs, as well as any hosting issues
- CSS wizard, custom JS maverick, HTML artist, touchscreen believer
	- *Make these tappable/hoverable to explain them*

### Matching up: how to start

- Your call&mdash;choose what feels most natural for your situation
- Option 1: Quiz
- Option 2: "Menu" of offerings

*NB: these are largely the same; depends on degree of self-guidance desired.*

- Option 3: get in touch directly, either via contact form or by email <insert email>.

- Once the process starts, you'll hear from me within about five business days. Then, we can finalize choices, personalize them to your needs, set up payment, and get going.
- This is a collaborative process throughout, as much as you want or have time for it to be. Your website should reflect *you*, and I highly encourage having fun with your real aesthetic opinions - this is a space for creativity, with a professional designer as the bumper lanes. I look forward to hearing from you and working together :)

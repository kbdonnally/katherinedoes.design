---
layout: default
---

{:.home__title}
# Katherine Donnally

{:.home__subtitle}
## Web designer, specializing in from-scratch personal website design &amp; project-oriented websites. <br/><br/> Let's explore what aesthetics can be when we leave respectability politics behind.

### Hiring my services

Step 1: Use this guided [contact form]({{site.url}}{{site.baseurl}}/contact/) to fill out and submit your information.

Step 2: We talk, figure out your wants and needs for the project.

Step 3: We finalize choices, personalize them to your needs, set up payment, and get going on the code!

### A note on creativity

This is a collaborative process throughout, as much as you want or have time for it to be.

Your website should reflect *you*, and I highly encourage having fun with your real aesthetic opinions&mdash;this is a space for creativity, with a professional designer as the bumper lanes.

I look forward to hearing from you and working together. :) *- KD*

<section class="home__work" markdown="1">
### See my work

- Link to [project page]({{site.baseurl}}/projects/)

</section>

<section class="home__contact" markdown="1">
### Contact

{% assign contacts = site.data.contact | sort: 'order' %}
<ul class="home-contact__list">
{% for contact in contacts %}
<li class="home-contact__item">
	<img alt="{{ contact.type }}" title="{{ contact.type }}" src="{{ contact.img | relative_url }}">
	<a href="{{ contact.url }}">{{ contact.username }}</a>
</li>
{% endfor %}
</ul>
</section>
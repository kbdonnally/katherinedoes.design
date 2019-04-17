---
layout: default
---

# Katherine Donnally

{:.home__subtitle}
## Web designer specializing in from-scratch personal website design, organization site design, &amp; project-oriented websites. <br/><br/> Let's explore what aesthetics can do when we leave respectability politics behind.

*NB: do a "who I am/who you are" thing here. "Good sites are supposed to be kind of... boring, right?"*

### Getting started, matching up

Two main ways to explore the information on what we might contract to do&mdash;choose what feels most natural for your situation; there's no right or wrong answer!

- Option 1: [Link to quiz]({{site.url}}{{site.baseurl}}/intake/) to guide you through the best option for you
- Option 2: [Link to menu-style arrangement]({{site.url}}{{site.baseurl}}/menu/) <!-- FAKE LINK - 4/17/19 --> of the same information, if you'd prefer a more self-guided approach.

*NB: these are largely the same information; depends on degree of self-guidance desired.*

- Option 3: get in touch directly, either via [contact form]({{site.url}}{{site.baseurl}}/contact/) or by [email]({{ site.data.contact.email.url }}).

*NB 2: note that options 1 & 2 both end in an intake form; you're not leaving them out to dry!*

Once the process starts, you'll hear from me within about five business days. Then, we can finalize choices, personalize them to your needs, set up payment, and get going.

### A final note

This is a collaborative process throughout, as much as you want or have time for it to be.

Your website should reflect *you*, and I highly encourage having fun with your real aesthetic opinions&mdash;this is a space for creativity, with a professional designer as the bumper lanes.

I look forward to hearing from you and working together. :) *- KD*

<section class="home__work" markdown="1">
## See my work

- Link to [project page]({{site.baseurl}}/projects/)
- [Hire me!]({{site.baseurl}}/intake/)
</section>

<section class="home__contact" markdown="1">
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
</section>
---
title: About
layout: default
permalink: /about/
menu: true
---

<div class="home-wrapper">
	<main class="home-grid-wrapper"> <!-- keeps structure separate from bg styles -->
		<!-- page header: -->
		<header class="home__header">
			{{ '# Katherine Donnally' | markdownify }}
		</header>

		<!-- bio: -->
		<section class="home__bio">
			{{ '## Bio' | markdownify }}

			<p>Web designer & developer who values empathy in my work as much as code, seeks systemic solutions over situational fixes, and is committed to the cause of leveraging aesthetics to improve the human condition.</p>

			<p>Extremely proficient at HTML5, CSS3, JavaScript (ECMA 6+), Python 3, information architecture, bringing art to code, and a sense of justice fit for the 21st century.</p>
		</section>

		<!-- portfolio link: -->
		<section class="home__portfolio">
			{{ '## [Link to Portfolio](/portfolio-1/projects)' | markdownify }}
		</section>

		<!-- call to action: -->
		<section class="home__cta">
			{{ '## Hire meee' | markdownify }}
		</section>

		<!-- contact info: -->
		{% assign contact = site.data.contact %}
		<section class="home__contact">
			{{ '## Contact me' | markdownify }}

			<ul class="home-contact__list">
				<li class="home-contact__item">
					<img alt="Email icon" src="{{ 'assets/img/svg/envelope-outline-black.svg' | relative_url }}" height="30px">
					<a href="{{ contact.email.url }}">{{ contact.email.username }}</a>
				</li>
				<li class="home-contact__item">
					<img alt="Github icon" src="{{ 'assets/img/svg/github-black.svg' | relative_url }}" height="30px">
					<a href="{{ contact.github.url }}">{{ contact.github.username }}</a>
				</li>
				<li class="home-contact__item">
					<img alt="Twitter icon" src="{{ 'assets/img/svg/twitter-black.svg' | relative_url }}" height="30px">
					<a href="{{ contact.twitter.url }}">{{ contact.twitter.username }}</a>
				</li>
			</ul>
		</section>

		<!-- resume link: -->
		<aside class="home__resume">
			{{ '*View resume, if prefer!*' | markdownify }}

			<div class="home-resume__button">
				<a href="{{ 'assets/img/pdf/KatherineDonnally_Resume--edited.pdf' | relative_url}}" title="PDF link">Download PDF</a>
			</div>
		</aside>

		<!-- ender: -->
		<footer class="home__footer">
			{{ '# The End' | markdownify }}
		</footer>
	</main>
</div>
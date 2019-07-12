---
layout: layouts/page.html
title: About
---

<!-- Pull in data from _data/site.json  -->
## `From _data/site.json:`

**Languages:** {% for language in site.staticgen.languages %}{{ language }}{% endfor %}

**Templates:** {% assign last = site.staticgen.templates | last %}{% for template in site.staticgen.templates %}{% if template != last %}{{ template }}, {% else %}{{ last }}{% endif %}{% endfor %}

**License:** {{ site.staticgen.license }}

**Description:** {{ site.staticgen.description }}

<img src="{{ site.logo }}" id="eleventy-logo">

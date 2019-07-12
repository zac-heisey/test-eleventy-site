---
layout: layouts/page.html
title: Home
---

## weLComE!

### {{ site.description }}

**Created By:** {{ site.author }}

**Find Me On:** {% assign last = site.social | last %}{% for social in site.social %}{% if social != last %}[{{ social.account }}]({{ social.profile }}) // {% else %}[{{ social.account }}]({{ social.profile }}){% endif %}{% endfor %}

**Project Details:**
 - Hosting: {{ site.details.host }}
 - CMS: {{ site.details.cms }}
 - Ecommerce: {{ site.details.ecommerce }}
 - Site Search: {{ site.details.search }}
 - GH Repo: {{ site.details.repo }}

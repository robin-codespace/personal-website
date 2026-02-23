---
layout: ~/layouts/MarkdownPostLayout.astro
title: "Understanding Domain Redirects: A Real-World Example"
pubDate: 2025-03-02
description: "While migrating my personal website from Squarespace to GitHub Pages and configuring a custom domain, I noticed an interesting redirect chain that's worth understanding."
---

When setting up my personal website (binhuang.dev) on GitHub Pages, I noticed an interesting redirect chain that's worth understanding. Let's break down what happens when you type "binhuang.dev" in your browser:

<div class="diagram">
    <h4>Actual Request Chain</h4>
    <pre class="ascii-diagram">
 http://binhuang.dev → https://binhuang.dev → https://www.binhuang.dev
 └─── HTTP to HTTPS ──┘ └─── Apex to WWW subdomain ───┘</pre>
</div>

### Let's Understand Each Step

#### Step 1: HTTP to HTTPS Redirect
When you type "binhuang.dev" in your browser:
* Browser initially requests: http://binhuang.dev
* Server responds with a 301 redirect to: https://binhuang.dev
* This is a security best practice, ensuring all traffic uses HTTPS

#### Step 2: Apex to WWW Redirect
After getting to HTTPS:
* Browser requests: https://binhuang.dev
* Server responds with another 301 redirect to: https://www.binhuang.dev
* This is where our DNS configuration becomes important

### Understanding the Domain Types

#### Apex Domain (binhuang.dev)
* Also called the "naked domain"
* Uses A records in DNS configuration
* Points directly to IP addresses
* Example: binhuang.dev → GitHub Pages IPs

#### WWW Subdomain (www.binhuang.dev)
* A type of subdomain
* Uses CNAME record in DNS configuration
* Can point to another domain name
* Example: www.binhuang.dev → username.github.io

### DNS Configuration
<div class="diagram">
    <h4>Current Working Setup</h4>
    <pre class="ascii-diagram">
 DNS Configuration:
 ┌──────────────────────────────────────────────┐
 │ CNAME Record:                                │
 │ www.binhuang.dev → robin-codespace.github.io │
 └──────────────────────────────────────────────┘

 GitHub Pages Configuration:
 ┌─────────────────────────────────┐
 │ Custom Domain: www.binhuang.dev │
 └─────────────────────────────────┘</pre>
</div>

### Why This Setup Works
1. **Clean DNS Resolution**:
   * CNAME record provides direct routing to GitHub Pages
   * No conflicting DNS settings
2. **Proper Redirect Handling**:
   * HTTP → HTTPS is handled automatically by GitHub Pages
   * Apex → WWW redirect is consistent
3. **Better Flexibility**:
   * CNAME follows GitHub Pages' IP changes automatically
   * Reduces maintenance needs

### Key Takeaways
* Domain redirects are a normal part of modern web architecture
* Using www as primary domain can provide more flexibility
* HTTPS is enforced through automatic redirects
* Proper DNS configuration is crucial for smooth operation

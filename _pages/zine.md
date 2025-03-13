---
layout: zine
permalink: /zine/
---

<iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" style="border: 0px; width: 100%; height: 80vh;" src="https://heyzine.com/flip-book/da8d6633d6.html"></iframe>

<script>
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

window.onload = function () {
    const params = getQueryParams();
    if (params.submission_id) {
        alert(`Welcome to the gunk pop fan club! The password for the zine is: gunkpoop`);
    }
};
</script>


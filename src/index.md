---
template: home.html
# title skipped as I don't want "{{title}}: config.site_name"
description:
    Hej! Tu Klaudia i Rafał. Szykujemy się do naszego wielkiego dnia. Nasze wesele odbędzie się 10 lipca 2027 w Villa Presto. Wkrótce pojawią się tutaj szczegółowe informacje dotyczące dojazdu, planu dnia oraz innych atrakcji.
exclude_from_blog: true
---

<!-- markdownlint-disable MD041 -->
Nasze wesele odbędzie się <a style="text-decoration: underline" href="/static/wedding.ics" download>10 lipca 2027</a> (<span id="countdown">...</span>) w <a href="https://www.google.com/maps/place/VILLA+PRESTO/@50.2632984,22.2542607,12z/data=!4m6!3m5!1s0x473cc3d80a529c1f:0xf21d277bb18884e0!8m2!3d50.2633275!4d22.336661!16s%2Fg%2F11jx5q2vrt?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style="text-decoration: underline">Villa Presto</a>. Wkrótce pojawią się tutaj szczegółowe informacje dotyczące dojazdu, planu dnia oraz innych atrakcji.

<script>
function updateCountdown() {
    const targetDate = new Date('2027-07-10T00:00:00');
    const now = new Date();
    
    if (now >= targetDate) {
        document.getElementById('countdown').textContent = 'dzisiaj';
        return;
    }
    
    const diffTime = targetDate - now;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(diffDays / 365);
    const remainingDays = diffDays % 365;
    const months = Math.floor(remainingDays / 30);
    const days = remainingDays % 30;
    
    const parts = [];
    
    if (years > 0) {
        if (years === 1) {
            parts.push(`${years} rok`);
        } else if (years >= 2 && years <= 4) {
            parts.push(`${years} lata`);
        } else {
            parts.push(`${years} lat`);
        }
    }
    
    if (months > 0) {
        if (months === 1) {
            parts.push(`${months} miesiąc`);
        } else if (months >= 2 && months <= 4) {
            parts.push(`${months} miesiące`);
        } else {
            parts.push(`${months} miesięcy`);
        }
    }
    
    if (days > 0) {
        if (days === 1) {
            parts.push(`${days} dzień`);
        } else {
            parts.push(`${days} dni`);
        }
    }
    
    let result;
    if (parts.length === 0) {
        result = 'mniej niż dzień';
    } else if (parts.length === 1) {
        result = parts[0];
    } else if (parts.length === 2) {
        result = `${parts[0]} i ${parts[1]}`;
    } else {
        result = `${parts[0]}, ${parts[1]} i ${parts[2]}`;
    }
    
    document.getElementById('countdown').textContent = `za ${result}`;
}

updateCountdown();
</script>
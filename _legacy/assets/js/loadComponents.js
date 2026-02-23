async function loadComponents() {
    try {
        // Load head content
        const headResponse = await fetch('/assets/components/head.html');
        const headHtml = await headResponse.text();
        document.head.innerHTML = headHtml + document.head.innerHTML;

        // Load navigation
        const navResponse = await fetch('/assets/components/navigation.html');
        const navHtml = await navResponse.text();
        document.getElementById('nav-placeholder').innerHTML = navHtml;
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadComponents); 
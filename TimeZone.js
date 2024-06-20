function updateTimeZone() {
    const timeZone = 'America/Phoenix'; // Time zone to display
    const now = new Date();
    
    // Loop through all elements with data-time-format attribute
    document.querySelectorAll('[data-time-format]').forEach(element => {
        const timeFormat = element.getAttribute('data-time-format');
        
        // Determine options based on time format
        const options = {
            timeZone,
            hour: 'numeric',
            minute: 'numeric',
            ...(timeFormat === '12' ? { hour12: true } : { hour12: false })
        };
        
        // Format the time based on options
        const formattedTime = now.toLocaleString('en-US', options);
        
        // Update the element's text content
        element.textContent = formattedTime;
    });
}

// Update the time zone immediately
updateTimeZone();

// Optionally, update the time zone every minute (60000 milliseconds)
setInterval(updateTimeZone, 60000);

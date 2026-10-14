// Function to simulate real-time emergency alert processing on 2nm chip
function triggerSimulatedAlert() {
    const alertMessage = document.getElementById('alertMessage');
    const statusIndicator = document.querySelector('.status-indicator');
    
    // Update interface to simulate hazard detection
    alertMessage.innerText = "HAZARD DETECTED: Gas Leak in Sector 4";
    alertMessage.style.color = "#ff4757";
    statusIndicator.classList.add('danger');
    
    // Reset back after 4 seconds
    setTimeout(() => {
        alertMessage.innerText = "Monitoring Smart City Sensors...";
        alertMessage.style.color = "#e0e6ed";
        statusIndicator.classList.remove('danger');
    }, 4000);
}
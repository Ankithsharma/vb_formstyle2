// Define service prices and labor costs
const servicePricing = {
    brakePadReplacement: { part: 179.99, labor: 75 },
    rotorReplacement: { part: 249.99, labor: 100 },
    brakeFluidFlush: { part: 129.99, labor: 50 },
    caliperRepair: { part: 199.99, labor: 90 },
    drumBrakeRepair: { part: 159.99, labor: 85 },
    absSystemRepair: { part: 249.99, labor: 120 },
    brakeInspection: { part: 29.99, labor: 25 },
    tireRotation: { part: 19.99, labor: 20 },
    wheelAlignment: { part: 79.99, labor: 70 },
    suspensionCheck: { part: 49.99, labor: 30 }
};

function updateEstimate() {
    let totalParts = 0;
    let totalLabor = 0;

    // Get selected service price
    const serviceType = document.getElementById("serviceType").value;
    if (servicePricing[serviceType]) {
        totalParts += servicePricing[serviceType].part;
        totalLabor += servicePricing[serviceType].labor;
    }

    // Add prices for selected additional services
    const additionalServices = document.querySelectorAll("input[name='additionalServices']:checked");
    additionalServices.forEach(service => {
        totalParts += servicePricing[service.value].part;
        totalLabor += servicePricing[service.value].labor;
    });

    // Calculate total cost
    const totalCost = totalParts + totalLabor;

    // Update the estimate display
    document.getElementById("totalEstimate").innerText = `Parts: $${totalParts.toFixed(2)} | Labor: $${totalLabor.toFixed(2)} | Total: $${totalCost.toFixed(2)}`;
}

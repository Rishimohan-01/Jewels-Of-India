// Get the modal element
const floorPlanModal = document.getElementById("floor-plan-modal");
const knowMoreModal = document.getElementById("know-more-modal");

// Add an event listener to the button to open the modal
document.getElementById("floor-plan-btn").addEventListener("click", () => {
  floorPlanModal.modal("show");
});

document.getElementById("know-more-btn").addEventListener("click", () => {
  knowMoreModal.modal("show");
});

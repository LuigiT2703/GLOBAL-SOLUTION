const riskForm = document.querySelector("#riskForm");
const riskLevel = document.querySelector("#riskLevel");
const riskType = document.querySelector("#riskType");
const predictionResult = document.querySelector("#predictionResult");

if (riskForm && riskLevel && riskType && predictionResult) {
  riskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = Number(riskLevel.value);
    const type = riskType.value;
    const action = value >= 80 ? "acionar alerta critico" : value >= 60 ? "preparar alerta preventivo" : "manter observacao orbital";

    predictionResult.textContent = `Risco de ${type}: ${value}%. Recomendacao: ${action}.`;
  });
}
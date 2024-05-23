// Supports weights 100-900
import "@fontsource-variable/dm-sans";
import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main> 
  <div class="balance-card"> 
    <p>My balance</p>
    <h1>$ 1,000.00</h1>
    <progress value="12.5" max="20"></progress>
  </div>
</main>
`;

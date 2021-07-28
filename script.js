/* eslint-disable indent */
let btn = document.querySelector("#btn");
let dollars = document.querySelector("#output1");
let som = document.querySelector("#output2");
let lira = document.querySelector("#output3");

let formatter1 = new Intl.NumberFormat(
    "tr-TR", {
        style: "currency",
        currency: "TRY"
    }
);

let formatter2 = new Intl.NumberFormat(
    "en-US", {
        style: "currency",
        currency: "USD"
    }
);
let formatter3 = new Intl.NumberFormat(
    "ky-KG", {
        style: "currency",
        currency: "KGS"
    }
);

btn.addEventListener("click", () => {
    let amount = document.querySelector("#amount").value;
    lira.innerHTML = `<span> Turkish Lira: </span>${formatter1.format(amount)}`;
    dollars.innerHTML = `<span> American Dollar: </span>${formatter2.format(amount)}`;
    som.innerHTML = `<span> Kyrgyz som: </span>${formatter3.format(amount)}`;
});
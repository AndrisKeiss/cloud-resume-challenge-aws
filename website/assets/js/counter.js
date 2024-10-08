// counter js code

const counter = document.querySelector(".counter-number");
const url = "https://72ki3evexaakn54pz57bztmhni0hjlkd.lambda-url.eu-north-1.on.aws/";

async function updateCounter() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error('Error fetching the counter:', error);
        counter.innerHTML = 'Views: N/A';
    }
}

updateCounter();
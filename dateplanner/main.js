document.addEventListener("DOMContentLoaded", () => {
    const send = document.getElementById("send");
    send.addEventListener("click", () => {
        const form = document.createElement("form");
        form.action = "https://formsubmit.co/jasperbartram2@gmail.com";
        form.method = "POST";
        form.style.display = "none";

        // Add input fields
        const addInput = (name, value) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            form.appendChild(input);
        };

        addInput("type", document.querySelector(".type").value);
        addInput("time", document.querySelector(".time").value);
        addInput("dresscode", document.querySelector(".dresscode").value);

        document.body.appendChild(form);
        form.submit();
    });
})

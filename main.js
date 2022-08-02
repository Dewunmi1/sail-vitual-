// const Url = "http://api.serpstack.com/search?access_key=4a52c73c8efc0ab5dbe9fca40ac7d7c0&query=";
const Result = document.getElementById("result");
const Btn = document.getElementById("search_button");

Btn.addEventListener("click", () => {
    const Url = "http://api.serpstack.com/search?access_key=4a52c73c8efc0ab5dbe9fca40ac7d7c0&query=";
    let Inputword = document.getElementById("search_area").value
    fetch(`${Url}${Inputword}`).then((response) => response.json()).then((data) => {
        console.log(data); 
        Result.innerHTML = `
        <div class="word">
            <p>${data["knowledge_graph"]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["organic_results"][0]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["organic_results"][1]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["organic_results"][2]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["organic_results"][3]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["organic_results"][4]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["organic_results"][5]["title"]}</p>
        </div>
        <div class="word">
            <p>${data["related_questions"][0]["question"]}</p>
        </div>

        <div class="word">
            <p>${data["related_questions"][1]["question"]}</p>
        </div>

        <div class="word">
            <p>${data["related_questions"][2]["question"]}</p>
        </div>

        <div class="word">
            <p>${data["related_questions"][3]["question"]}</p>
        </div>
        `
    })
})
const data = [
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
    {
        iconId: "9Onhro4UiQMb",
        iconName: "faneuil-hall",
        size: "512",
        time: 1700689974,
    },
]

const dlList = document.getElementById("dlList");
data.forEach((item) => {
    const htmlText = `<li>
          <div class="infos">
            <img src="https://img.icons8.com/?id=${item.iconId}&format=png&size=${item.size}" alt="icon" id="iconDisplay" />
            <h3 id="iconName">${item.iconName.replace(/%25/g, ' ')}</h3>
          </div>
          <a class="download" href="https://img.icons8.com/?id=${item.iconId}&format=png&size=${item.size}" target="_blank" download>Download</a>
        </li>`;
    dlList.insertAdjacentHTML('beforeend', htmlText);
});
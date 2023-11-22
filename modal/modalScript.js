console.log('Modal script loaded');

// modalScript.js
// Function to fetch icon name dynamically from the URL
function getIconDataFromUrl() {
    const url = window.location.href;
    const parts = url.split('/');
    const iconId = parts[4];
    const iconName = decodeURIComponent(parts[5]).replace(/%25/g, ' ');

    return {
        iconId,
        iconName
    }
}

// Function to update icon and name in the modal
function updateIconAndName() {
    const { iconId, iconName } = getIconDataFromUrl();
    const iconImage = document.getElementById('iconImage');
    const iconNameElement = document.getElementById('iconName');

    iconNameElement.textContent = iconName.toLocaleUpperCase();
    iconImage.src = `https://img.icons8.com/?size=512&id=${iconId}&format=png`;
}

// Function to show size selection options
function downloadIcon() {
    const { iconId } = getIconDataFromUrl();
    const size = document.getElementById('size-select');
    const selectedSize = size.options[size.selectedIndex].value;
    const aTag = document.getElementById('dl-tag');

    if (selectedSize === "0") {
        aTag.href = `javascript:void(0)`;
        aTag.classList.remove('download');
        aTag.classList.add('download-desactivate');
        alert('Please select a size');
        return;
    } else {
        aTag.href = `https://img.icons8.com/?id=${iconId}&format=png&size=${selectedSize}`;
        aTag.classList.remove('download-desactivate');
        aTag.classList.add('download');
    }
}

// async function getItem(name) {
//     return await chrome.runtime.sendMessage({ command: 'getItem', name: name }, function (response) {
//         return response;
//     });
// }

// async function setItem(name, data) {
//     await chrome.runtime.sendMessage({ command: 'setItem', name: name, data: data });
// }


async function downloaded() {
    try {
        // const result = await getItem("downloads");

        // if (result.downloads === undefined) {
        //     result.downloads = [];
        // }
        // const size = document.getElementById('size-select');
        // const selectedSize = size.options[size.selectedIndex].value;
        // const data = result.downloads;
        // data.push({
        //     iconId: getIconDataFromUrl().iconId,
        //     iconName: getIconDataFromUrl().iconName,
        //     size: selectedSize,
        //     time: new Date().now()
        // });
        // setItem("downloads", data);
    } catch (e) {
        console.log(e);
        alert("Error: When saving the downloads stats");
    }
}

function closeModal() {
    document.getElementById('customModal').style.display = 'none';
}

setTimeout(() => {
    console.log('Modal content loaded');
    updateIconAndName();
    document.getElementById('customModal').style.display = 'block';
}, 1000);
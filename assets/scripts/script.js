
const generatorUId = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

class MyUUidGenerator {

    textUUid = document.querySelector('.text-uuid');
    btnContainerEl = document.querySelector('.add-new-btn');
    infoEl = document.querySelector('.info-togenerator');
    copyButton = document.querySelector('.btn-copy');

    constructor() {
    }

    generatorUId() {
        this.infoEl.remove();
        this.textUUid.innerText = generatorUId();
        this.btnContainerEl.style.display = 'flex'
    }


    copyClipboard() {

        let copyText = this.textUUid.innerText;
        navigator.clipboard.writeText(copyText);

        this.copyButton.innerText = "Copied";
        this.copyButton.disabled = true;

        setTimeout(() => {
            this.copyButton.disabled = false;
            this.copyButton.innerText = 'Copy to clipboard'
        }, 700);
    }

}

const myUUidGenerator = new MyUUidGenerator();


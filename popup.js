/**
 * Generate Zettelkasten card template w/ idetifier
 * @param {string} Z        Zettelkasten usage [P(ermanent), R(eading)]
 */
var makeClipboardZKTemplate = function(Z) {
    let _zidx = document.getElementById('zkidx').value;
    let _adr = document.getElementById('mdadr').value;
    let _zettelId = `${Z}${_zidx}:${_adr}`;

    // TODO Rcard format
    navigator.clipboard.writeText(`
**[[${_zettelId}]]**
-

**Note**
-

**Reference**
-

---`)
    .then(() => {})
    .catch(() => {});
}

/**
 * Event registration
 */
document.getElementById('pcardbtn').onclick = () => makeClipboardZKTemplate('P');
document.getElementById('rcardbtn').onclick = () => makeClipboardZKTemplate('R');
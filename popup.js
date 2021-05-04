var zettelId = '';

/**
 * Generate Zettelkasten card template w/ idetifier
 * @param {string} Z        Zettelkasten usage [P(ermanent), R(eading)]
 */
var makeClipboardZKTemplate = function(Z) {
    // DDMMYY
    let getSixDigitDate = function() {
        let _date = new Date();

        let _dd = ('0' + _date.getUTCDate()).slice(-2);
        let _mm = ('0' + (_date.getUTCMonth()+1)).slice(-2);
        let _yy = ('0' + _date.getUTCFullYear()).slice(3, 5);
        
        return _dd + _mm + _yy;
    }


    let _zidx = (Z === 'P') ? document.getElementById('zkidx').value : ''; 
    let _name = document.getElementById('mdnam').value;
    let _adr = (Z === 'P') ? document.getElementById('mdadr').value: getSixDigitDate();

    zettelId = `${Z}${_zidx}:${_name}-${_adr}`;

    navigator.clipboard.writeText(`
**[[${zettelId}]]** <topic>
- <tag>

**Content**
- 

**Reference**
- <ref>

---`)
    .then(() => {
        document.getElementById('md-output').innerHTML = zettelId;
    })
    .catch(() => alert('Clip failed'));
}

/**
 * Event registration
 */
document.getElementById('pcardbtn').onclick = () => makeClipboardZKTemplate('P');
document.getElementById('rcardbtn').onclick = () => makeClipboardZKTemplate('R');
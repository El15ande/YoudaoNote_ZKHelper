// Util variables & functions
var Utils = {
    /**
     * Transfer 1-9 to 01-09
     * @param   {string|number} i   String/number: 1-9
     * @returns {string}            String: 01-09             
     */
    addZero: function(i) {
        return String(i).length < 2 ? `0${i}` : String(i);
    }
}



/**
 * Generate a unique Zettel identifier
 * @param   {string} index      Last 2 digits of identifier
 * @returns {string}            Complete Zettel identifier [yyyymmddii]
 */
var generateZettelIdentifier = function(index) {
    let _date = new Date();

    let _yyyy = _date.getFullYear();
    let _mm = Utils.addZero(_date.getMonth() + 1);
    let _dd = Utils.addZero(_date.getDate());

    return `[${_yyyy}${_mm}${_dd}${Utils.addZero(index)}]`;
}



/**
 * Event registration
 */
// On 'Generate Zettel' clicked
document.getElementById('zettel-idgen-btn').onclick = () => {
    let title = '';
    
    let _idx = document.getElementById('zettel-idgen-index').value;
    let _text = document.getElementById('zettel-idgen-text').value;

    if(!_text) {
        alert('Undefined Zettel title.');
        return;
    }

    switch (+document.getElementById('zettel-idgen-cat').value) {
        case 0: // [yyyymmddii] title
            title = `${generateZettelIdentifier(_idx)} ${_text}`;
            break;
        case 1: // [SN] title
            title = `[SN] ${_text}`;
            break;
        case 2: // [yyyymmddii] [S] title
            title = `${generateZettelIdentifier(_idx)} [S] ${_text}`
            break;
        default: break;
    }

    navigator.clipboard.writeText(title)
        .then(() => alert(title));
}

// On 'Manage Zettels' clicked
document.getElementById('opt-btn').onclick = () => chrome.runtime.openOptionsPage();
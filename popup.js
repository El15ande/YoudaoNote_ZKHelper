document.getElementById('bcardbtn').onclick = function () {
    let _index = document.getElementById('bcardidx').value;

    navigator.clipboard.writeText(
`#### <center>${_index ? _index : '1.1-1'}
    
**Tag**

**Note**

**Resource**

---`
    )
    .then(() => console.log("newcard copied"))
    .catch(() => console.log("newcard copy failed"));
}

document.getElementById('ncardbtn').onclick = function () {
    let _now = new Date();
    let _month = _now.getMonth() + 1;
    let _day = _now.getDate();

    let makeString = (d) => {
        return (d < 10) ? `0${d}` : `${d}`;
    }

    navigator.clipboard.writeText(
`#### <center>${makeString(_month)}-${makeString(_day)}
    
**Tag**

**Note**

**Resource**

---`
    )
    .then(() => console.log("newcard copied"))
    .catch(() => console.log("newcard copy failed"));
}
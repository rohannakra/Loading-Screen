function l() {    // Changing document display.
    var loading = document.getElementsByTagName("progress")[0];
    loading.value++;
    document.getElementById("status").textContent = loading.value + "%";
    return loading.value;
}

function call() {
    setTimeout(() => {   // rerunning program.
        if (l() == 100) document.getElementsByTagName("progress")[0].value = 0;
        call();
    }, Math.floor(Math.random() * 1.25) * 100)
}

call();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUser() {

    await sleep(750)
    return true
}

export {
    getUser
}
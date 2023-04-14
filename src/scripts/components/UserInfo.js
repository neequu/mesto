export default class UserInfo {
    constructor(userSelector, bioSelector) {
        this._name = document.querySelector(userSelector)
        this._bio = document.querySelector(bioSelector)
    }

    getUserInfo() {
        return {name: this._name.textContent, bio: this._bio.textContent}
    }

    setUserInfo(data) {
        this._name.textContent = data.name
        this._bio.textContent = data.bio
    }
}
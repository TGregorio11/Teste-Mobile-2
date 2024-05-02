
class SignupBtn {
    get clickSignUp() {
        return $('//android.view.ViewGroup[@content-desc="Sign up"]')
    }
    get validSignUp() {
        return $('android=new UiSelector().text("Welcome to EBAC Shop").className("android.widget.TextView")')
    }
    get validFinish() {
    return $('android=new UiSelector().text("Gregorio Thiago").className("android.widget.TextView")')
}
}module.exports = new SignupBtn();

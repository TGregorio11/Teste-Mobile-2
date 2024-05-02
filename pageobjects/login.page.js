class LoginPage  {
    get email () {
        return $('//android.widget.EditText[@resource-id="email"]');
    }
    get email () {
        return $('android=new UiSelector().text("Password")')
    }
    get btnLogin(){
        return $('~Login')
    }

    async login(email, password){
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValvue(password)
        (await this.btnLogin).click()
    }    
}
module.exports = new LoginPage()

class CadastroPage {

    get firstName() {
        return $('//android.widget.EditText[contains(@text, "First Name")]')
    }
    get lastName() {
        return $('//android.widget.EditText[contains(@text, "Last Name")]')
    }
    get phoneNumber() {
        return $('//android.widget.EditText[contains(@text, "Phone Number")]')
    }
    get emailAddress() {
        return $('//android.widget.EditText[contains(@text, "Email Address")]')
    }
    get password() {
        return $('//android.widget.EditText[contains(@text, "Password")]')
    }
    get repassword() {
        return $('//android.widget.EditText[contains(@text, "Password")]')
    }
    get btncreate() {
        return $('~Create')
    }
     get profile() {
    return $('//android.widget.TextView[@resource-id="tab-profile"])')
    }
     get cart() {
        return $('//android.widget.TextView[@text="Continue Shopping"]')
     }


    async create(firstName, lastName, phoneNumber, emailAddress, password, repassword){
            await this.firstName.setValue(firstName)
            await this.lastName.setValue(lastName)
            await this.phoneNumber.setValue(phoneNumber)
            await this.emailAddress.setValue(emailAddress)
            await this.password.setValue(password)
            await this.repassword.setValue(repassword)
           
        }

    }
module.exports = new CadastroPage();

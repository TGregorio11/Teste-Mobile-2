class HomePage {
    get clickProfile() {
        return $('//android.view.View[@content-desc=", Profile"]')
    }
    get validProfile() {
        return $('android=new UiSelector().text("Thiago Gregorio").className("android.widget.TextView")')
    }
    get clickHome(){
        return $('//android.view.View[@content-desc=", Home"]')
    }
    get validHome(){
        return $('android=new UiSelector().text("EBAC Store").className("android.widget.TextView")')
    }
    get clickCart(){
        return $('//android.view.ViewGroup[@content-desc=""]')
    }
    
}module.exports = new HomePage()
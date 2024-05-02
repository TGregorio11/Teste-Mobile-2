
const { expect, driver } = require ("@wdio/globals")
const cadastroPage = require ("../../pageobjects/cadastro.page.js");
const profilePage = require ("../../pageobjects/profile.page.js");
const homePage = require("../../pageobjects/home.page.js");
const signupBtn = require("../../pageobjects/signup.btn.js");

let firstName = "Thiago";
let lastName = "Gregorio";
let phoneNumber = "11987654321";
let emailAddress = "thiagog15@teste.com";
let password = "123456";
let repassword = "123456";

describe('Funcionalidade: Cadastro', () => {

    it('Deve realizar o cadastro', async () => {
        await homePage.clickProfile.click();
        await profilePage.clickSignUp.click();
        await expect(signupBtn.validSignUp).toHaveText("Welcome to EBAC Shop");
        await cadastroPage.create(firstName, lastName,
        phoneNumber, emailAddress, password,repassword);
        await cadastroPage.btncreate.click();
        await homePage.clickCart.click();
        await cadastroPage.cart.click();
        await homePage.clickProfile.click();
        await expect(signupBtn.validFinish).toHaveText("Gregorio Thiago");
        await homePage.clickHome.click();
        await homePage.validHome.click();
        
    });  
});


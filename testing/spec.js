describe("Toguro APP", function () {
  var loginButton  = element(by.css('[type="submit"]'));
  var username     = element(by.model('credentials.username'));
  var password     = element(by.model('credentials.password'));
  var envButton    = element(by.id('ambientes'));
  var filterButton = element(by.id('filters'));

  function login () {
    browser.get("http://rafaelducati.com/uichallenge/web/#/login");
    username.sendKeys('rafaelducati');
    password.sendKeys('1234');
    loginButton.click();
    envButton.click();
  }

  beforeEach(function () {
    login();
    console.log("Logado com sucesso!");
  });

  it("Título obrigatório", function () {
    expect(browser.getTitle()).toEqual("Rafael Ducati");
  });
});

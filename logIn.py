from variables import *



def LogIn(user,password):
    browser.get(webUrl)

    time.sleep(5)

    akcept = browser.find_element(By.CSS_SELECTOR,"button#onetrust-accept-btn-handler").click()

    Button1 = browser.find_element(By.XPATH,'//*[@id="root"]/div/div[3]/div/div/div/div/a').click()
    time.sleep(5)
    singIn = browser.find_element(By.XPATH, '//*[@id="root"]/div/div/div[1]/header/nav/ul[2]/li[1]/a/span').click()
    emailField = browser.find_element(By.XPATH, '//*[@id="email"]').click().sendKeys(user).Key.RETURN
    passwordFild = browser.find_element(By.XPATH, '//*[@id="password"]').click().sendKeys(password).Key.RETURN
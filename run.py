
from variables import *
from logIn import *


logIn(rmde@uu.pr, uuuuu7)
browser.get(webUrl)

time.sleep(5)

akcept = browser.find_element(By.CSS_SELECTOR,"button#onetrust-accept-btn-handler").click()

Button1 = browser.find_element(By.XPATH,'//*[@id="root"]/div/div[3]/div/div/div/div/a').click()
time.sleep(5)
singIn = browser.find_element(By.XPATH, '//*[@id="root"]/div/div/div[1]/header/nav/ul[2]/li[1]/a/span').click()
#searchPool.send_keys("Test")
#searchPool.send_keys(Keys.ENTER)




time.sleep(5)
browser.quit()
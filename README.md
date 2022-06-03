[![Java CI with Maven](https://github.com/ToMrArcher/AtCampus/actions/workflows/maven.yml/badge.svg)](https://github.com/ToMrArcher/AtCampus/actions/workflows/maven.yml)
# AtCampus 

[Link to GitHub Pages](https://tomrarcher.github.io/atcampus-slate) <br>
[Link to Slate Github](https://github.com/tomrarcher/atcampus-slate)


# Installing and running the application:

### 1:
Install Docker Desktop, restart your computer and run the program:

[Download here](https://docs.docker.com/get-docker/)

### 2: 
Install Expo Go in the App store or Google Play Store on your mobile:

https://expo.dev/client

### 3:
Open the project in your prefered IDE (We mostly used IntelliJ) and follow these steps in the terminal – **MAKE SURE DOCKER DESKTOP IS RUNNING**: 
```console
cd Server/src/main/resources/docker/
docker compose down   <- If this gives you a warning just continue with the steps below
docker compose up -d
cd../../../../../     <- go back to atCampus folder
cd Client
npm install
expo start
```

### When running `expo start` you get a QR-code in the terminal. Open the camera on your mobile and scan this code. The QR code should lead you to the Expo App and there the app should be running and you're ready to try our application :)


## Server

### Installing docker
[Download here](https://docs.docker.com/get-docker/)

### Docker setup.
**Make sure to have docker running**
```console
cd Server/src/main/resources/docker/
docker compose down
docker compose up -d
```
## Client


### Install the Expo go app in App store or Google play store
https://expo.dev/client

### Start the expo app

```console
cd Client
npm install
npm start
```

## Database Diagram

### Database Diagram
![alt text](https://www.plantuml.com/plantuml/png/hLHDRzGm4BtdL_ZMWXIsV5IWI8WY97e0LQY8S-HDPdTTsPvWEuMgs__EEhEErzwwuj2zh3plvUNvpKmkhEF6ZKfM9nld1jii5eFasbTUTQWMkBo1pjMzu6l3rKbLWNR2tR5V5eozhzZkzvADkqCh-eP9r6ls-P9zce2wzd-4heInhjLSGSDkkUast9o-FNl1hguYH_8ZohkC0eeB6U7NPna-S6l_eEaZvStvUKRPe8PMZse9va0fOzbkWoZtD_hwBLKmwCCeWYiXeHMAho6r4KazTz1s1hY3dLL_SaA1rtcO4_uvEGWHavzoo8GdwSLuekYbmN6O-xRsfqdp-oEQ11Sa8zw3xOmOd43TC0T_NSHA8H1QofX0tYkX8tRgSxFvgyin9eCwtJePrgTlJfo0vjOU0uHjL_mMZN3Gi2MY1AxPHxRYqaBWJ6vlKEZSRDQUQ_WzWdLPbmnLdz7pV_ZvWTO56mC-yNP2dN3oeDtlQLHcU8dz7Or8KYvsyV1QmNnofRaO7Nz1fK37y3ewbuqJ8JSN4V8NVULeY2LESOgJ_uXd0TEdnCuXqxbeDn2ohVoGx_arIfX5pUvGL2JKosKVtMo7MaEIfPvuE6k9Vyoo1wphxNR_EKjhuVPKtHVZo_RaxRQkyPvs8wt5vQu8FQxd4d6zw942vWS_k8nYORW2ubdL53KxDdy1kX-L_0S0)

### Class Diagram
![alt text](https://www.plantuml.com/plantuml/png/rLVDRjms4BxlK-ZMBM3NzqLXE6cCOe7M2EBs0MHfl6OXYIf9nJ2Cl7ibQfOVEI5JkUWbFYoa-VbcvflXYBwnhZPkwhlT3q_EZVPmTJLszR18VcfqVzLqjRMNhQfFfkvtEpKuCezrGzMVbimd6lNhhfh_7jNGBfBRmIdtylxbjgzLjwVbzr3TEwE6qu-72XPVEocoxr_kcoUjkzLaRwENGnMhPgZV9rS_TFIRikvdm5uNS3yQlUJFm2E_CJAKtuR-4fV_gz7JcDRlHOXvL_Uq7-OV4910mpnA6yB_oeT4_YARbiayY14PXU-dy8WEPecI5PMm8xlz2S-7bTGjyA8ixc1QLDBMC0AvhYIM2JApd0B7p9zRb8EDxKI-sheKSv4muh_G8uXP70KRl-Y-fq44O26QW8ZxCJmUAeX5800K3yFV4yLrtUbgeEUg9_UaMrkfVkneWQ0szVwaEuBNYTmYE9EH8nRw1SXlA3-OzsG-guPMd9jtazFFob1RJRog3c5fIGjFipV1mSwXU2MWYhOsZCrv379M8yOs367EpZ11Q-LPf9c2PstQsw7HBPaPBHLuU_sPZ54jLPsk_R5SJ_cmC3pnWrZM7yZLghFh54t3qfn5l6M_m-DTroqAkvyjilkQKS-ROHtwOpjRQxarfIyoEhPx1HUHoJIsjQEl32-gAHGP5nm3U7z3fpaucKNgkSfOoudqjNnl8tcAJpA2G-8zkAjUPVVV-lgmiPV97aM6mkxDdywwzGFzX_OQtw5ZwB4Sfr9S_kh5IMwiB7ofDtbY80Kjo9RF7UVARo9rhdkj-ErUwEfMrk0XHtqj7hE-UVBmEKNJYvzGwH3H9ar1iUZB1MSJgBgFNtCmBNKaOMGyCC5R75His_ZoqW8sYlSKwIBuWB4WXEN7uL57h71YWPQFoRk4YuXXUJaogD7MWPUtBxjnzcVY-6dJKiNzQjFt1VUVwyHPqWkxY8n5c3F2kVCMIoLW6Y_20osRXQ9VK9GXm3rV2OlqDrxDxBBj_zu2nfsx44Z8zq1UDIM0R0NCqswml6mAXc4AVY4EVY2P1MbppoXDObtsHfVqmr_KkEXEiRRed3bJOAoxmqPOfLsT4VAz399mGKo5JtgWkwb_81FBUKL6eNaxGEBxF9_pHzNHiQzF8Vo5rthk3Cs_le2cxZxCpoXKCB8M6nSS10-wVM5i29VHYUqu7nOXIlmPhDOWWwIg9TiODJgbXqIkuggumRqQ-Fn9cgAeyMciCcrqodK05ZM2N7Yior664HlwDUuJvY7sI3zrhr49qZxwNwgwlBp6KHOAxEgiIr7BcMHLN5PEX_z-f0BdPkU3PfE7HcQVTyghPVvI9-xBHGjkmuxhBL5GLfy1rbposHMLPsS-Xv41Ddj6nwA26bINNKFPskQZGY6Q18sCbi4ASNOtDBHJt_q3)
